import React from 'react';
import './style.css';

const WatchingBehaviors = () => {
    return (
        <div className="watching-behaviors-info">
            <div>
                <div className='watching-behaviors-info-title'> 回拉次數 </div>
                <div className='scroll-back-times'>

                </div>
            </div>
            <div>
                <div className='watching-behaviors-info-title'> 暫停次數 </div>
                <div className='pause-times'>

                </div>
            </div>
        </div>
    );
};

export default WatchingBehaviors;