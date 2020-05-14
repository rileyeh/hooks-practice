import React from 'react'

export default function EditRating({}) {
    return (
        <form style={style.container}>
            <input
                type='text'
                style={style.input} />
            <input
                type='text'
                style={style.input}  />
            <input
                type='text'
                style={style.input}  />
            <div style={style.buttonsContainer}>
                <button 
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