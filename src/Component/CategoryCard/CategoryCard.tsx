import { FC } from "react";
import { Link } from "react-router-dom";

import style from "./CategoryCard.module.css"
import { CategoryProps } from "./CategoryCard.model";

const CategoryCard : FC<CategoryProps> = ({ name, route, img, onClick}) => {

    return <Link to={route} reloadDocument={true} className={style["box"]} onClick={onClick}>
        <div className={style.imgBox}>
            <img src={img} title={name} alt={name}/> 
        </div>
        
        <p>{name}</p>
    </Link>
}

export default CategoryCard;