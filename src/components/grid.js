import React from 'react';
import {isMobile} from 'react-device-detect';


const Grids = ({ size, hoverEffect }) => {
    let gridIndex = [];
    for (let i = 0; i < size ** 2; i++) {
        gridIndex.push(i);
    };

    // const handleMouseLeave = (e) => {
    //     setTimeout(function delay() {
    //         e.target.style.background = '#08060B';
    //         e.target.style.animation = 'hover-effect 700ms ease-out'
    //     }, trailDuration)
    // }


    return (
        <React.Fragment>
            {gridIndex.map(index => {
                return <div key={index} onMouseEnter={isMobile ? () => (false) : hoverEffect} onTouchStart={isMobile ? hoverEffect : () => (false)}></div>
            })}
        </React.Fragment>
    );
}


export default Grids;