import { getPopularMovie, getBestComedies, getBestAction } from "./config.js";
import { popularMovieContainer, bestComediesContainer, popularLeftBtn, popularRigthBtn, bestComedyLeft, bestComedyRight, bestActionRight, bestActionLeft, bestActionContainer, videoContainer } from "./query.js";
import { img_path } from "./api.js";
import MainCard from "./MainCard.js";
import Slider from "./Slider.js";
import VideoCard from "./VideoCard.js";

getPopularMovie()
    .then(movie => {
        movie.forEach(info => {
            popularMovieContainer.innerHTML += MainCard.render(img_path + info.poster_path, info.title);
        })
        Slider.render(popularLeftBtn, popularRigthBtn, popularMovieContainer)
    })

getBestComedies()
    .then(movie => {
        movie.forEach(info => {
            bestComediesContainer.innerHTML += MainCard.render(img_path + info.poster_path, info.title);
        })
        Slider.render(bestComedyLeft, bestComedyRight, bestComediesContainer)
    })

getBestAction()
    .then(movie => {
        movie.forEach(info => {
            bestActionContainer.innerHTML += MainCard.render(img_path + info.poster_path, info.title);
        })
        Slider.render(bestActionLeft, bestActionRight, bestActionContainer)
    })






fetch('../videoDb.json')
    .then(resp => resp.json())
    .then(data => {

        data.forEach((video, i) => {
            if (i < 3) {
                videoContainer.innerHTML += VideoCard.render(video.url, video.title)
            }
        })

    })
