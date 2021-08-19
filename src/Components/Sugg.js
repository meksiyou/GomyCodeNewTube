import React from 'react'
import { suggetions } from './../Data';
function Sugg() {
    return (
        <div>
        {suggetions.map(el=> 
            <div>
                <iframe width="300" height="200" src={el.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p> {el.title}</p>
                <p>{el.views}</p>
            </div>)}
        </div>
    )
}

export default Sugg
