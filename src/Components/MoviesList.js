import React from 'react'
import Movie from './Movie'

export default function MoviesList({ deleteMovie, updateMovie, movies }) {
    let mappedMovies = movies.map(movie => {
        return <Movie 
                    movie={movie}
                    key={movie.id}
                    deleteMovie={deleteMovie}
                    updateMovie={updateMovie}/>
    })
    return (
        <section style={style.container}>
            {mappedMovies}
        </section>
    )
}

const style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    }
}