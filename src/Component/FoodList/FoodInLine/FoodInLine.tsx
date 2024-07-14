import { FC } from "react";
import FoodStore from "../../../FoodStore/FoodStore";

import style from "./FoodInLine.module.css"


const FoodInLine : FC<{food: FoodStore, treno: string}> = ({ food, treno }) => {

    const DATE  = new Date();
    const DAY = DATE.getDate().toString().padStart(2,"0");
    const MONTH = (DATE.getMonth() + 1).toString().padStart(2,"0");
    const DATEFORMAT = `${DAY}/${MONTH}/${DATE.getFullYear()}`
    return <div className={style.box}>
        <p className={style.smallText +" "+style.trenoName}>TRENO {treno}</p>
        <p className={style.smallText}>UTILIZZABILE IL {DATEFORMAT}</p>
        <p className={style.smallText}>CLASSE 1°</p>
        <p className={style.name}>{food.name}</p> 
        
        
        {food.ingredients.length > 0 && <div className={style.info}>
            <ul className={style.listIngredients}>
                {food.ingredients.map((i, index) => {
                    return <li key={index+"_"+i}>{i}</li>
                })}
            </ul>
        </div>}

        <p className={style.qt}><span>N. 0{food.qt}</span> ADULTI  </p>
        <p className={style.price}>€ {food.price.toFixed(2)} </p>
        
        
       
       

    </div>
}

export default FoodInLine;