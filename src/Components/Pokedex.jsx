import React from "react";
import "./style.css";

const Pokedex = () => {
    return (
        <>

            <h1>Pokemon name</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" />
            <div className="abilities">
                <h1>Abilities</h1>
            </div>
            <div className="stats">
                <h3>Hp</h3>
                <h3>Attack</h3>
                <h3>Defense</h3>
                <h3>Speed</h3>

            </div>

        </>
    );
};

export default Pokedex;