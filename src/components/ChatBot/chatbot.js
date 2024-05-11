import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Loading from './loading.jsx';
import { generate } from "api/chatbot";

// Get chatbot response from backend by llama
// Because we have to wait for backend to generate the response and render the chat bubble after getting the response
// So we have to use useEffect and some fixed writing style and functions to fetch the response and render the chat bubble
// Reference: https://github.com/LucasBassetti/react-simple-chatbot/issues/105
// Use ChatGPT to modify
const GenerateResponse = ({ previousStep, triggerNextStep, course_id}) => {
    const [chatbotResponse, setChatbotResponse] = useState('');

    useEffect(() => {
        if (previousStep && previousStep.value) {
            const fetchResponse = async () => {
                try {
                    const res = await generate(course_id, previousStep.value);
                    const response = res.data;
                    console.log(response);
                    setChatbotResponse(response.response);
                    triggerNextStep({ trigger: '2' });
                } catch (error) {
                    console.error('Error:', error);
                    setChatbotResponse('找不到您的資料');
                    triggerNextStep({ trigger: '4' });
                }
            };
            fetchResponse();
        }
        console.log(course_id);
    }, [previousStep, triggerNextStep, course_id]);

    return chatbotResponse === '' ? < Loading /> : chatbotResponse;
};

const FloatingIcon = () => {
    return (
        <img src="llama_head.png" alt="llama_head" style={{ width: '56px' }} />
    );
}

const Chatbot = ({ course_id}) => {
    const theme = {
        background: '#f5f8fb',
        headerBgColor: '#FFF1BD',
        headerFontColor: '#363636',
        headerFontSize: '20px',
        botBubbleColor: '#FFF1BD',
        botFontColor: '#696969',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    const steps = [
        {
            id: '1',
            message: '哈囉！我是你這門課程的學習助教 Llama，跟本課程相關的任何問題都可以問我呦～',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            component: <GenerateResponse course_id={course_id} />,
            asMessage: true,
            waitAction: true,
        },
        {
            id: '4',
            message: '請重新登入或刷新頁面',
            end: true,
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps}
                floating={true}
                floatingStyle={{ width: '80px', height: '80px', bottom: '40px', right: '40px'}}
                botAvatar="https://cdn-icons-png.flaticon.com/512/1326/1326378.png"
                userAvatar="https://cdn-icons-png.flaticon.com/512/1144/1144709.png"
                avatarStyle={{ width: '46px', height: '46px', marginBottom: '4px' }}
                floatingIcon={<FloatingIcon />}
                headerTitle="學習助教 Llama"
            />
        </ThemeProvider>
    );
};

export default Chatbot;
