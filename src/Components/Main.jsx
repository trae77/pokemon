import React from 'react';
import Card from './Card';
import Pokedex from './Pokedex';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Main = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

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
            console.log(pokemon.name);
            const res = await axios.get(pokemon.url);
            console.log(res.data);
            setPokemonData(state => {
                state = [...state, res.data];
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                //   filter out the pokemon that are coming up more than once 
                state = state.filter((item, index) => {
                    const _item = JSON.stringify(item);
                    return index === state.findIndex(obj => {
                        return JSON.stringify(obj) === _item;
                    });
                });
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
                    <Card pokemon={pokemonData} loading={loading} pokemonInfo={poke => setPokeDex(poke)} />

                    <div className="btngroup">
                        {prevUrl && <button onClick={() =>
                            setUrl(prevUrl)} className="btn" >Back</button>}

                        {nextUrl && <button onClick={() =>
                            setUrl(nextUrl)} className="btn" >Next</button>}
                    </div>
                </div>
                <div className='right-container'>
                    <Pokedex data={pokeDex} />
                </div>
            </div >
        </>
    );
}

export default Main;