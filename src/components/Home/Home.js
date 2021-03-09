import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [countrys, setCountrys] = useState([]);
    
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountrys(data))
    }, [])

    return (
        <div className='main-container'>
                {
                    countrys.map(country => <Country countrys={country}></Country>)
                }
        </div>
    );
};

export default Home;