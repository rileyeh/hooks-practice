import React, { useState } from 'react'

export default function EditRating({setEdit, updateMovie, movie}) {
    let {title, rating, imageURL, id} = movie
    const [newRating, setRating] = useState(rating)
    const [newTitle, setTitle] = useState(title)
    const [newURL, setURL] = useState(imageURL)

    const update = e => {
        e.preventDefault()
        let body = {
            title: newTitle, 
            rating: newRating, 
            imageURL: newURL
        }
        updateMovie(id, body)
        setEdit(false)
    }

    return (
        <form 
            style={style.container}
            onSubmit={update}>
            <input
                type='text'
                value={newTitle}
                style={style.input} 
                onChange={e => setTitle(e.target.value)} />
            <input
                type='text'
                value={newRating}
                style={style.input} 
                onChange={e => setRating(e.target.value)} />
            <input
                type='text'
                value={newURL}
                style={style.input} 
                onChange={e => setURL(e.target.value)} />
            <div style={style.buttonsContainer}>
                <button 
                    onClick={() => setEdit(false)}
                    style={style.button}>cancel</button>
                <button 
                    style={style.button}>save</button>
            </div>
        </form>
    )
}

const style = {
    container: {
        height: 97,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 5
    }, 
    button: {
        backgroundColor: '#232323',
        color: 'blanchedalmond',
        width: 75,
        height: 25,
        border: 'none'
    },
    input: {
        width: '85%',
        border: 'none',
        borderBottom: '2px solid #232323',
        backgroundColor: 'blanchedalmond',
        color: '#232323'
    }
}