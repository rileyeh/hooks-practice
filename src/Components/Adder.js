import React, { useState } from 'react'

export default function Adder(props) {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [imageURL, setURL] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        props.createMovie({title, rating, imageURL})
        setTitle('')
        setRating('')
        setURL('')
    }

    return (
        <form 
            style={style.container}
            onSubmit={handleSubmit}>
            <input 
                type='text'
                value={title}
                style={style.input} 
                placeholder={`What's the movie's title?`}
                onChange={e => setTitle(e.target.value)} />
            <input 
                type='text'
                value={rating}
                style={style.input} 
                placeholder={`How many stars do you give this movie?`}
                onChange={e => setRating(e.target.value)} />
            <input 
                type='text'
                value={imageURL}
                style={style.input} 
                placeholder='Paste an image URL'
                onChange={e => setURL(e.target.value)} />
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