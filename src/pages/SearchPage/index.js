import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './style.css';
import { searchKeyword, searchSrt} from "api/search";

// Video srt component
const Srt = ({srts}) => {
    return (
        <div className='video-srt'>
            { srts.map((srt, index) => {
                return (<a href='#' key={index}> {srt} </a>);
            })}
        </div>
    );
}

const VideoCard = ({expand, title, id, srt}) => {
    return (
        <div className='video-card' key={id}>
            <img className='video-thumbnail' 
            src='https://cdn-icons-png.flaticon.com/512/1601/1601400.png' alt='video-thumbnail'/>
            <div className='video-description'>
                <h3><b> {title} </b></h3>
            </div>
            { expand ? <Srt srts={srt} /> : null }
        </div>
    );
}

const SearchPage = () => {
    const location = useLocation();
    const query = location.state.query;
    console.log(query);

    const [searchSummary, setSearchSummary] = useState('Loading...');
    const [srts, setSrts] = useState([]);
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
        const fetchSrt = async () => {
            const res = await searchSrt( query );
            const srts = res.data;
            setSrts(srts);
            console.log(srts);
        }

        fetchSummary();
        fetchSrt();
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
                { srts.map((srt) => {
                    return (<VideoCard expand={isExpand} title={srt.name} id={srt.id} srt={srt.srt}/>);
                })}
            </div>
            
        </div>
    );
};

export default SearchPage;