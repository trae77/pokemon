import React from 'react';
import './style.css';


const Card = ({ pokemon, loading, pokemonInfo }) => {
    return (
        <>
            {loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <div className='card' key ={item.id} onClick={()=>pokemonInfo(item)}>
                            <h3>{item.id}</h3>
                            <img className = "pokepic" src={item.sprites.front_default} alt="pokemon" />
                            <h2>{item.name}</h2>
                        </div>
                    )
                }
                )
            }
        </>
    );
}


export default Card;