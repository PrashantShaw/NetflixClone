import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/"
// for fetching images for the rows

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    // A snipprt of code which runs on a specific condition/variables
    useEffect(() => {
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);  // fetchUrl is a property from Apps.js, to recognise this property in useEffect,[fetchUrl] is used.
    // console.table(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // url
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => { 

                console.log(url);

                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    console.log(trailerUrl);
                }) 
                .catch(error => console.log(error));
        }
    }

    return (
        <div className='row'>
            {/* Title */}
            <h2>{title}</h2>
            {/* Posters */}
            <div className="row__posters">
                {/* several row__posters */}
                {movies.map(movie => (
                    <img key={movie.id}
                        onClick={() => handleClick(movie)} className={` row__poster ${isLargeRow && "row__posterLarge"} `} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}

            </div>
            {/* for displaying trailers */}
            {trailerUrl && < YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row