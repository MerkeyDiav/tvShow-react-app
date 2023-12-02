import modules from "./style.module.css";
import TVShowListItem from "../TVShowListItem/TVShowListItem"

export function TvShowList({tvShowList, onClickItem}) {
   return <>
        <div className={modules.title}> You may also Like</div>
        <div className={modules.list}>
          {tvShowList.map((tvShow) => {
            return (
               <span className={modules.tv_show_list_item}>
                 <TVShowListItem onClick={onClickItem} tvShow={tvShow}  key={tvShow.id} />
               </span>
            )
          })}
        </div>
   </> 
}
