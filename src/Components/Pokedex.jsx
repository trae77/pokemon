import React from "react";
import "./style.css";

const Pokedex = ({ data }) => {
    console.log(data);
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                    
                        <h2>{data.name}</h2>
                        <img src={data.sprites.front_default}
                            alt="pokemon" />
                        <div>
                            <h1 className ="abilities">Abilities :
                                {data.abilities.map((item) => {
                                    return (
                                        <h3>{item.ability.name}</h3>
                                    )
                                })
                                }
                            </h1>
                        </div>
                        <div className="stats">
                            <h3>Stats :
                                {data.stats.map((item) => {
                                    return (
                                        <h3>{item.stat.name}:{item.base_stat}</h3>
                                    )
                                })
                                }
                            </h3>
                        </div>
                   
                    </>
                )
            }
        </>
    );
};

export default Pokedex;