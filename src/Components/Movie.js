import React, { useState } from 'react' 
import EditMovie from './EditMovie'

export default function Movie({ movie, deleteMovie, updateMovie }) {
    const [edit, setEdit] = useState(false)
    return (
        <div style={style.div}>
            <img alt='movie cover' src={movie.imageURL} style={style.img}/>
            {
            edit
            ?
            <EditMovie 
                setEdit={setEdit}
                updateMovie={updateMovie}
                movie={movie}/>
            :
            <>
            <p style={style.title}>{movie.title}</p>
            <p style={style.rating}>{movie.rating} stars</p>
            <div style={style.buttonsContainer}>
                <button 
                    onClick={() => deleteMovie(+movie.id)}
                    style={style.button}>delete</button>
                <button 
                    onClick={() => setEdit(true)}
                    style={style.button}>edit</button>
            </div>
            </>
            }
        </div>
    )
}

const style = {
    div: {
        backgroundColor: 'blanchedalmond',
        width: '200px',
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 12,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    img: {
        width: '200px',
        height: '300px',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    title: {
        fontSize: '18px',
        margin: '5px 0'
    },
    rating: {
        fontSize: '15px',
        margin: '5px 0'
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
    }
}