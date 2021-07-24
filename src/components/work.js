import React from 'react';

function Work(props) {
    const {work} = props;
    return (
        <li style={{margin: "10px 0"}}>
            {work.name}-{work.time}p
        </li>
    );
}

export default Work;
