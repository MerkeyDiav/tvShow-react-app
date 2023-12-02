 import modules from "./style.module.css";
 import {StarFill, Star as StarEmpty, StarHalf} from "react-bootstrap-icons";


 export function FiveStarRating({rating}){
    const starList = [];

    const starFillCount =  Math.floor(rating);

    const hasStarHalf = rating - starFillCount >= 0.5;

    const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0 );

    for( let i=1; i<= starFillCount; i++){
        starList.push(<StarFill key={"star-fill" + Math.random()} />)
    }
    if(hasStarHalf){
        starList.push(<StarHalf key={"star-half" + Math.random()}/>)
    }
    for(let i=1; i<=emptyStarCount; i++){
        starList.push(<StarEmpty key={"star-empty" + Math.random() }/>)
    }
    return <div>
       {starList}
    </div>
}
