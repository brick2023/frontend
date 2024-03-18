import React from "react";
import styled from "styled-components";

// Create styled components
const FooterContainer = styled.footer`
    margin-top: auto;
    background-color: rgb(172, 172, 172);
    display: flex;
    align-items: center;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
`;

const FooterLogo = styled.img`
    margin-right: 10px;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const FooterInfo = styled.p`
    margin-bottom: 5px;
    text-align: left;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo src="https://cdn-icons-png.flaticon.com/128/3698/3698586.png" alt="Logo" id="footer-logo" />
            <FooterContent>
                <FooterInfo>About us : <a
                    href="https://ismp.csie.ncku.edu.tw/"
                    target="_blank"
                    style={{ color: "black" }}
                    rel="noopener noreferrer"
                >
                    成大智慧型系統暨媒體處理實驗室
                </a>
                </FooterInfo>
                <FooterInfo>Authors : Yenslife , Horseface , Exn , Booker , 江忠益 , 洪盟峰 , 郭耀煌</FooterInfo>
                <FooterInfo>Designers : 黃淑俐 , Xiang-Yi</FooterInfo>
                <FooterInfo>Contact us : caladmin@ismp.csie.ncku.edu.tw</FooterInfo>
            </FooterContent>
        </FooterContainer>
    );
}

export default Footer;