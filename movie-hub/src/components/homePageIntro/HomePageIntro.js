import React, { useEffect, useState } from "react";
import "./homepageintro.css";
import axios from "axios";
import logo from "../../utilities/image.jpg";
import logo1 from "../../utilities/image1.jpg";
import logo2 from "../../utilities/image2.jpg";
import logo3 from "../../utilities/image3.jpg";
import logo4 from "../../utilities/image4.jpg";

export default function HomePageIntro() {
  const pics = [logo, logo1, logo2, logo3, logo4];
  const [introMovies, setIntroMovies] = useState([]);
  const [useInBg, setUseInBg] = useState(pics[0]);

  // useEffect(() => {
  //     axios.get("https://imdb-api.com/en/API/MostPopularMovies/k_6nq48ps7")
  //         .then(response => {
  //             console.log(response.data)
  //             // setIntroMovies(response.data.items.slice(0,6))
  //         }, [])

  // })

  return (
    <div className="intro">
      <div className="poster-page">
        {useInBg ? <img src={useInBg} alt="moviesPoster" /> : null}
      </div>
      <div className="pip">
        <p>Our Recomendations</p>
        <div className="pip-img">
          {pics.map((pic, index) => (
            <img
              src={pic}
              alt="moviesPoster"
              onClick={() => setUseInBg(pic)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
