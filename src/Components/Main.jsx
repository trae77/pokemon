import React from 'react';
import Card from './Card';
import Pokedex from './Pokedex';

const Main = () => {
    return (
        <>
            <div className='container'>
                <div className='left-container'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div className='right-container'>
              <Pokedex/>
            </div>
        </div >
        </>
    );
}

export default Main;