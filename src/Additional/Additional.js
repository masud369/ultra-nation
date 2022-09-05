import React from 'react';

const Additional = (props) => {
    const {name,flag,capital}= props.country;
    const ctrStyle = {
        backgroundColor:'gray',
        width:'80%',
        height:'30vh',
        margin:'0 auto',
        padding:'50px',
        color:'white',
    }
    return (
        <div style={ctrStyle}>
                <img width={'100px'} src={flag} alt="afg-flag" />
                <h2>{name}</h2>
                <p>{capital}</p>
        </div>
    );
};

export default Additional;