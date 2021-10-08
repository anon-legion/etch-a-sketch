import React, { useState } from 'react';

const Grids = ({size, hoverEffect}) => {
    let gridIndex = [];
    for (let i = 0; i < size ** 2; i++) {
        gridIndex.push(i);
    };

    return (
        <React.Fragment>
            {gridIndex.map(index => {
                return <div key={index} onHover={hoverEffect}></div>
            })}
        </React.Fragment>
    );
}


export default Grids;