import React from 'react';
import Card from './Card';
import Pokedex from './Pokedex';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Main = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');


    const fetchData = async () => {
        setLoading(true);
        let response = await axios.get(url);
        setPokemon(response.data.results);
        console.log(response.data.results);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return (
        <>
            <div className='container'>
                <div className='left-container'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="btn">
                        <button >Back</button>
                        <button >Next</button>
                    </div>
                </div>
                <div className='right-container'>
                    <Pokedex />
                </div>
            </div >
        </>
    );
}

export default Main;