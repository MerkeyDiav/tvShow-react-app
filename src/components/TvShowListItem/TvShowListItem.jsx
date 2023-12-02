import modules from "./style.module.css";
import {SMALL_IMG_COVER_BASE_URL} from "../../config.js";

export default function TvShowListItem({tvShow, onClick}){
    return <div onClick={() =>onClick(tvShow)} className={modules.container}>
        <img 
            alt={tvShow.name} 
            className={modules.img}
            src={SMALL_IMG_COVER_BASE_URL+tvShow.backdrop_path} 
            />
        <div className={modules.title}>
            {tvShow.name}
        </div>
    </div>
}

