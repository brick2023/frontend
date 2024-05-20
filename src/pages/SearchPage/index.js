import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { searchKeyword, searchSrt, getImage} from "api/search";
import './style.css';


const Srt = ({ srt, lesson_id, course_id}) => {
    const navigate = useNavigate();
    // If the srt is clicked, navigate to the video page and pass lesson_id and course_id.
    const handleSrtClick = () => {
        navigate('/video', { state: { lesson_id: lesson_id, course_id: course_id }});
        navigate(0);
    }

    return (
        <div className='srt-content'>
            <div className='srt-content' onClick={handleSrtClick}>
                {srt[0] + ' ' + srt[1]}
            </div>
        </div>
    );
}

// Video srt component
const Srts = ({srts, lesson_id, course_id}) => {
    return (
        <div className='video-srt'>
            { srts.map((srt, index) => {
                return (
                    <Srt srt={srt} lesson_id={lesson_id} course_id={course_id} key={index}/>
                );
            })}
        </div>
    );
}

var id_image_exist_dict = {};

const VideoCard = ({expand, title, id, course_id, srt}) => {
    const [image, setImage] = useState('');
    

    const fetchImage = async () => {
        console.log('fetch image');
        try {
            const response = await getImage(id); // Pass lesson_id instead of a fixed value
            const blobURL = URL.createObjectURL(response.data);
            setImage(blobURL);
            console.log(blobURL);
            id_image_exist_dict[id] = blobURL;
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    if (id_image_exist_dict[id]) {
        return (
            <div className='video-card'>
                <img className='video-thumbnail' src={id_image_exist_dict[id]} alt='video-thumbnail' />
                <div className='video-description'>
                    <h3><b> {title} </b></h3>
                </div>
                {expand ? <Srts srts={srt} lesson_id={id} course_id={course_id} /> : null}
            </div>
        );
    }
    fetchImage();
    console.log(image);

    return (
        <div className='video-card'>
            <img className='video-thumbnail' src={image} alt='video-thumbnail' />
            <div className='video-description'>
                <h3><b> {title} </b></h3>
            </div>
            {expand ? <Srts srts={srt} lesson_id={id} course_id={course_id} /> : null}
        </div>
    );
}

const Loader = () => {
    return (
        <div className="loader"></div>
    );
}

const SearchPage = () => {
    const location = useLocation();
    const query = location.state.query;
    console.log(query);

    const [searchSummary, setSearchSummary] = useState('');
    const [srts, setSrts] = useState([]);
    const [isExpand, setIsExpand] = useState(true);

    // Use useEffect to fetch data from search api and update the searchSummary state
    useEffect(() => {
        const fetchSummary = async () => {
            const res = await searchKeyword( query );
            const summary = res.data;
            setSearchSummary(summary);
            console.log(summary);
        }
        const fetchSrt = async () => {
            const res = await searchSrt( query );
            const srts = res.data;
            setSrts(srts);
            console.log(srts);
        }

        fetchSrt();
        fetchSummary();
    }, [query]);

    return (
        <div>
            <div className='vicuna-text-container'>
                <img className="vicuna-img" src="https://cdn-icons-png.flaticon.com/128/3699/3699063.png" alt='Vicuna'/>
                <div className="search-content">
                    <h2 style={{ fontSize: 'bold' }}> 搜尋關鍵字 : { query } </h2>
                    <div className="search-result" id='summary'>
                        { searchSummary === '' ? <Loader /> : searchSummary}
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <button className='control-button' onClick={ () => setIsExpand(!isExpand) }>
                    展開/收合
                </button>
            </div>
            <div className='video-card-container'>
                { srts.map((srt) => {
                    return (<VideoCard expand={isExpand} 
                        title={srt.name} id={srt.id} course_id={srt.course_id} srt={srt.srt} key={srt.id} />);
                })}
            </div>
            
        </div>
    );
};

export default SearchPage;