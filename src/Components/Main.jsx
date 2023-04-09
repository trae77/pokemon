import React from 'react';
import Card from './Card';
import Pokedex from './Pokedex';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Main = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");


    const fetchData = async () => {
        setLoading(true);
        const response = await axios.get(url);
        // console.log(response.data.results);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        getPokemon(response.data.results);
        setLoading(false);
    };

    const getPokemon = async (response) => {
        response.map(async (pokemon) => {
            // console.log(pokemon.name);
            const res = await axios.get(pokemon.url);
            // console.log(res.data);
            setPokemonData(state => {
                state = [...state, res.data];
                state.sort((a, b) => a.id > b.id?1 : -1)
                return state;
            })
        });
    };


    useEffect(() => {
        fetchData();
    }, [url]);

    return (
        <>
            <div className='container'>
                <div className='left-container'>
                    <Card pokemon={pokemonData} loading={loading} />

                    <div className="btngroup">
                        <button className="btn" >Back</button>
                        <button  className="btn" >Next</button>
                    </div>
                </div>
                <div className='right-container'>
                    <Pokedex pokemon={pokemonData} loading={loading}/>
                </div>
            </div >
        </>
    );
}

export default Main;