//import React from 'react'

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const intialValue = ['Demon Slayer'];

export const GifExpertApp = () => { 

    const [categories, setCategories] = useState( intialValue );

    //console.log(categories);
    // const onAddCategory = () => { 
    //     setCategories([ 'Hola', ...categories]);
    // };

    const onAddCategory = ( newCategory ) => { 

        if( categories.includes( newCategory ) ) return;

        setCategories([ newCategory, ...categories]);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory = { (value) => onAddCategory (value) }
            ></AddCategory>

            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            
            {/* Listado de GIfs */}
            {/* <ol> */}
                {/* { categories.map( cat => <li key={cat}>{cat}</li> ) } */}
            { 
                categories.map( (category) => (

                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
            {/* </ol> */}

                {/* GifItem */}

        </>
        
    )

 }