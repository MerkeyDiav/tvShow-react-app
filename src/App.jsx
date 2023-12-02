import { TVshowAPI } from "./api/tv-show";
import  TvShowDetail  from "./components/TvShowDetail/TvShowDetail";
import { BACKDROP_BASE_URL } from "./config";
import "./global.css";
import module from  "./style.module.css";
import Logo from "./components/Logo/Logo";
import imageLogo from "./assets/images/logo.png"
import { useState,useEffect } from "react";
import {TvShowList} from './components/TvShowList/TvShowList'
import {SearchBar} from "./components/SearchBar/SearchBar";

import "./App.css"

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars(){
    try{
      const popular = await TVshowAPI.fetchPopular();
      if(popular.length > 0){
        setCurrentTVShow(popular[1])
      }
    }catch (error) {
      alert("Error during the search process ")
    }
  }
  
  async function fetchRecommendations(tvShowId){
   try {
    const recommendations = await TVshowAPI.fetchRecommendation(tvShowId);
    if(recommendations.length > 0){
      setRecommendationList(recommendations.slice(5,15))
    }
   } catch (error) {
      alert("Error")
   }
  }

  function updatedTvShow(tvShow){
    setCurrentTVShow(tvShow)
  };
  async function fetchByTitle(title){
   try {
    const SearchResponse = await TVshowAPI.fetchByTitle(title);
    if(SearchResponse.length > 0){
      setCurrentTVShow(SearchResponse[0])
    }
   } catch (error) {
    alert("Error during this process " + error.message)
   }
  }

  useEffect(() => {
    fetchPopulars()
  
  }, []);

  useEffect(() => {
    if(currentTVShow){
      fetchRecommendations(currentTVShow.id)
    }
    
  }, [currentTVShow]);

  function setCurrentTvShowFromRecommendation(tvShow){
    alert(JSON.stringify(tvShow))
  }
  return(
    <div 
      className={module.main_container}
      style={{background: currentTVShow? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`: "black"}}
      >
      <div className={module.header} >
        <div className="row">
          <div className="col-4">
            <div>
              <Logo title="WatchMovies" subtitle="Find and show your Best Movies" image={imageLogo} />
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div> 
      <div className={module.tv_show_detail}>{currentTVShow && <TvShowDetail tvShow={currentTVShow} />} </div>
      <div className={module.recommended_show}>
          {recommendationList && recommendationList.length > 0 && 
            (<TvShowList 
                onClickItem={updatedTvShow} 
                tvShowList={recommendationList} 
              />) }
      </div>
  </div>
  )
 
}



export default App
