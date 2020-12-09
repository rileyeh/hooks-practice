import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import MoviesList from './Components/MoviesList'
import Adder from './Components/Adder'

const baseURL = `/api/movies`

export default function App() {
    const [movies, setMovies] = useState([])

    const moviesCallback = ({ data: movies }) => setMovies(movies)

    const getAllMovies = () => axios.get(baseURL).then(moviesCallback)
    const createMovie = body => axios.post(baseURL, body).then(moviesCallback)
    const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(moviesCallback)
    const updateMovie = (id, body) => axios.put(`${baseURL}/${id}`, body).then(moviesCallback)

    useEffect(() => {
        getAllMovies()
    })

    return (
        <div style={style.app}>
            <h1 style={style.header}>Movie List</h1>
            <Adder createMovie={createMovie}/>
            <MoviesList 
                movies={movies} 
                updateMovie={updateMovie}
                deleteMovie={deleteMovie}/>
        </div>
    )
}

const style = {
    app: {
        backgroundColor: '#232323',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    },
    header: {
        height: 80, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: 'blanchedalmond'
    }
}