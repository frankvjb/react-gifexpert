//import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    //Custom hook que puede ser reutilizable
    const { images, isLoading } = useFetchGifs( category );
  
    //console.log( isLoading );
    
    
    
    //Hook normal
    // const [images, setImages] = useState([]);

    // const getImages = async() => { 
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    //  }



    //Pare ejeuctar codigo en un punto del programa y no siempre que se actualize el estado, en este caso solo al inicializar
    //Hook normal
    // useEffect( () => { 
    //     getImages();
    // }, []);
    

    return (
        <>
            <h3>{ category }</h3>
            
            {/* El loading también se podria meter como un componente y que se encarge de hacer la logica en el
            <LoadingMessage isLoading={ isLoading }/>
            */}
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    //Pasar props se pueden hacer de 3 formas principales:
                    //1. Con el objeto y accediendo a sus propiedades image.id image.title.
                    // images.map( (image) => ( 
                    //     <GifItem 
                    //         key={ image.id }
                    //         title={ image.title }
                    //         url={ image.url }
                    //     />

                    // ))


                    //2. Desestructurando el objeto
                    // images.map( ({id, title, url}) => ( 
                    //     <GifItem 
                    //         key={ id }
                    //         title={ title }
                    //         url={ url }
                    //     />

                    // ))

                    //3. Esparciendo el objeto para poder acceder a todas sus propiedades y desestructurandolas, especialmente util cuando se tienen que apsar muchas
                    images.map( (image) => ( 
                        <GifItem 
                            key= { image.id }
                            { ...image }
                        />

                    ))

                }
            </div>
        </>
        
    )
}
