import React, { useEffect, useState } from 'react';
import Singlecountry from '../Singlecountry/Singlecountry';

const NationName = () => {
    const [countries, setCountries]=useState([]);
    const countries2 = countries.slice(0,20); 
    useEffect(()=>{
        const url=`https://restcountries.com/v2/all`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);
    return (
        <div>
            <h2>{console.log(countries.length)}</h2>
            {
                countries2.map(country=><Singlecountry country={country} key={country.alpha2Code}></Singlecountry>)
            }
        </div>
    );
};

export default NationName;