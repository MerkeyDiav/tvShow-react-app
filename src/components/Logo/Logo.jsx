import modules from "./style.module.css";

export default function Logo({image, title, subtitle}){
    return <>
        <div className="modules.container">
            <img className={modules.img} src={image} />
            <span className={modules.title}>{title}</span>
        </div>
        <span className={modules.subtitle}>{subtitle} </span>
    </>
}