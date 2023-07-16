import { useState } from "react";




//export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => { 
    //     //console.log( event.target.value );
    //     setInputValue(event.target.value);
    //  };

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    //Convertir en Form para usar el event de onSumbit para cuando pulse enter
    const onSubmit = ( event ) => { 
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;

        //setCategories( categories => [ inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
        //console.log( event );
    };

    return (

        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                // onChange={ (event) => onInputChange(event) }
                onChange={onInputChange}
            />
        </form>

    );
};