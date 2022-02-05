import React, { useEffect, useState } from 'react';
import "./homepageintro.css"
import axios from 'axios';
import logo from "../../utilities/image.jpg"


export default function HomePageIntro() {
    const pics = [logo, logo, logo, logo, logo, logo, logo]
    const [introMovies, setIntroMovies] = useState([])
    useEffect(() => {
        axios.get("https://imdb-api.com/en/API/MostPopularMovies/k_6nq48ps7")
            .then(response => {
                console.log(response.data)
                // setIntroMovies(response.data.items.slice(0,6))
            }, [])

    })
    return (
        <div className='intro'>
            <div className='poster-page'>
                <div className='pip'>
                    {pics.map(pic => <img src={pic} style={{ "height": "200px" }} />
                    )}
                </div>
            </div>
        </div>
    )
}
