import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Additional from '../../Additional/Additional';

const CountryDetails = () => {
    const { countryDetails } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.com/v2/name/${countryDetails}
        `;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    console.log(country)
    return (
        <div>
            <h2>All about </h2>
           {
            country.map(cntry=><Additional country={cntry} key={cntry.alpha3Code}></Additional>)
           }
        </div>
    );
};

export default CountryDetails;