import React from "react"
import modules from './style.module.css'
import {FiveStarRating} from "../FiveStarRating/FiveStarRating"

function TvShowDetail({tvShow}){
    const rating = tvShow.vote_average/2
    return(
       <div>
            <div className={modules.title}>{tvShow.name}</div>
            <div className={modules.rating_container}>
                <FiveStarRating rating={rating}/>
            <div className={modules.rating}>{rating} </div>
            </div>
            <div className={modules.overview}>{tvShow.overview} </div>
       </div>
    )
}
export default TvShowDetail