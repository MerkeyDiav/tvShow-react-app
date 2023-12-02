import modules from "./style.module.css";
import {Search as SearchIcon } from 'react-bootstrap-icons';

 export function SearchBar({onSubmit}){
    function submit(e){
        if(e.key === "Enter" && e.target.value.trim() != ""){
            onSubmit(e.target.value)
            e.target.value = ""
        }
    }
    return <>
        <SearchIcon size={27} className={modules.icons} />
        <input 
            onKeyUp={submit}
            className={modules.input} 
            type="text" 
            placeholder={"Search a tv Show you may like !"} 
            />
    </>
 }