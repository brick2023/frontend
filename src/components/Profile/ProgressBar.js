import React from 'react';

// This ProgressBar component is from GeeksforGeeks
//https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/

const ProgressBar = ({bgcolor,progress,height}) => {
    const ProgressBarBlock = {
        width: '45%',
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    const BarInfo = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 40,
        boxShadow: '0 2px 6px gray'
      }
     
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
     
      const progresstext = {
        padding: '0 5px 0 5px',
        color: 'black',
        position: 'relative',
        top: '-4px',
        fontWeight: 900
      }
       
    return (
        <div style={ProgressBarBlock}>
            <div style={BarInfo}>
                <span> PR&nbsp;0 </span>
                <span> 100 </span>
            </div>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}>{`${progress}%`}</span>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;