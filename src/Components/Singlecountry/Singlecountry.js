import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Singlecountry = (props) => {
    
    const country = props.country;
    const{name,capital,}=country;
    const style= {
        border: '1px solid red',
        padding:'10px',
        borderRadius:'10px',
        margin:'30px',
    }
    const navigate = useNavigate();
    const handelClick =(counryId)=>{
        navigate(`/country/${counryId}`);
    }
    return (
        <div style={style}>
            <Link to={`/country/${name}`}>
            <h3>Country Name: {name}</h3>
            <h5>Capital: {capital}</h5>
            <button onClick={()=>handelClick(name)} style={{cursor:'pointer'}}>Details</button>
            </Link>
        </div>
    );
};

export default Singlecountry;