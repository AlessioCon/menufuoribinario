import { FC } from "react";
import { Link } from "react-router-dom";

import style from "./CategoryCard.module.css"

const CategoryCard : FC<{name: string, route: string, img: string}> = ({ name, route, img}) => {

    return <Link to={route} reloadDocument={true} className={style["box"]}>
        <div className={style.imgBox}>
            <img src={img} title={name} alt={name}/> 
        </div>
        
        <p>{name}</p>
    </Link>
}

export default CategoryCard;