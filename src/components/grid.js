import React, { useState } from 'react';

const Grids = ({ size, hoverEffect, trailDuration }) => {
    let gridIndex = [];
    for (let i = 0; i < size ** 2; i++) {
        gridIndex.push(i);
    };

    const handleMouseLeave = (e) => {
        setTimeout(function delay() {
            e.target.style.background = '#08060B';
            e.target.style.animation = 'hover-effect 700ms ease-out'
        }, trailDuration)
    }


    return (
        <React.Fragment>
            {gridIndex.map(index => {
                return <div key={index} onMouseEnter={hoverEffect} onMouseLeave={handleMouseLeave}></div>
            })}
        </React.Fragment>
    );
}


export default Grids;