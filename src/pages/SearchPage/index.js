import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './style.css';
import { searchKeyword, searchSrt} from "api/search";

// Video srt component
const Srt = () => {
    return (
        <div className='video-srt'>
            <a href='#'> Here is srt. </a>
        </div>
    );
}

const VideoCard = ({expand}) => {
    return (
        <div className='video-card'>
            <img className='video-thumbnail' 
            src='https://cdn-icons-png.flaticon.com/512/1601/1601400.png' alt='video-thumbnail'/>
            <div className='video-description'>
                <h3><b>Video Title</b></h3>
            </div>
            { expand ? <Srt /> : null }
        </div>
    );
}

const SearchPage = () => {
    const location = useLocation();
    const query = location.state.query;
    console.log(query);

    const [searchSummary, setSearchSummary] = useState('Loading...');
    const [isExpand, setIsExpand] = useState(true);

    // Use useEffect to fetch data from search api and update the searchSummary state
    useEffect(() => {
        document.getElementById("summary").innerHTML = 'Loading...';
        const fetchSummary = async () => {
            const res = await searchKeyword( query );
            const summary = res.data;
            setSearchSummary(summary);
            console.log(summary);
        }
        fetchSummary();
    }, [query]);

    return (
        <div>
            <div className='vicuna-text-container'>
                <img className="vicuna-img" src="https://cdn-icons-png.flaticon.com/128/3699/3699063.png" alt='Vicuna'/>
                <div className="search-content">
                    <h2 style={{ fontSize: 'bold' }}> 搜尋關鍵字 : { query } </h2>
                    <div className="search-result" id='summary'>
                        { searchSummary }
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <button className='control-button' onClick={ () => setIsExpand(!isExpand) }>
                    展開/收合
                </button>
            </div>
            <div className='video-card-container'>
                <VideoCard expand={isExpand}/>
                <VideoCard expand={isExpand}/>
                <VideoCard expand={isExpand}/>
                <VideoCard expand={isExpand}/>
                <VideoCard expand={isExpand}/>
            </div>
            
        </div>
    );
};

export default SearchPage;