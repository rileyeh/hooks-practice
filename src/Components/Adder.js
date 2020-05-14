import React from 'react'

export default function Adder() {
    return (
        <form style={style.container}>
            <input 
                type='text'
                style={style.input} 
                placeholder={`What's the movie's title?`}/>
            <input 
                type='text'
                style={style.input} 
                placeholder={`How many stars do you give this movie?`} />
            <input 
                type='text'
                style={style.input} 
                placeholder='Paste an image URL' />
            <button 
                style={style.button}>
                    add movie
            </button>
        </form>
    )
}

const style = {
    container: {
        width: '80vw',
        height: 125, 
        backgroundColor: 'blanchedalmond',
        position: 'relative',
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    button: {
        position: 'absolute', 
        bottom: 10, 
        right: 10,
        backgroundColor: '#232323',
        width: 75,
        height: 25,
        color: 'blanchedalmond',
        border: 'none'
    },
    input: {
        width: '25%',
        height: 30,
        border: 'none',
        borderBottom: '2px solid #232323',
        backgroundColor: 'blanchedalmond',
        color: '#232323'
    }
}