import React, { FC } from "react";
import FoodStore from "./../../../FoodStore/FoodStore";

import style from "./FoodCard.module.css";
import AllImg from "./../../../Resource/ExportImg";



const FoodCard : FC<{food: FoodStore}> = ({ food }) => {


    function ToggleIngredients(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name:string){
        e.stopPropagation();

        let element = e.target as HTMLButtonElement;
        let ingredientsBox = document.getElementById(name);
        
        ingredientsBox.classList.toggle(style.active);
    }

    return <div className={style.box} id={"id_"+food.name}>
        <div className={style.front}>
            <p className={style.name + " " + (food.name.length > 24 && style.smallText) }>{food.name}</p>
            <svg className={style.svg} height="30px" width="150px" xmlns="http://www.w3.org/2000/svg">
                <polygon points="15,5 25,20 5,20"     />
                <polygon points="45,5 55,20 35,20"    />
                <polygon points="75,5 85,20 65,20"    />
                <polygon points="105,5 115,20 95,20"  />
                <polygon points="135,5 145,20 125,20" />
            </svg>
            <div className={style.imgBox}>
                <img src={AllImg[food.img || "NotFound"]}/>
            </div>
            <div className={style.info}>
                {food.ingredients.length > 1 && <button className={style.btn} title="vedi ingredienti" onClick={e =>ToggleIngredients(e, "id_"+food.name)}>Ingredienti</button>}
                <p className={style.price}>€ {food.price.toFixed(2)}</p> 
            </div>
        </div>
        {food.ingredients.length > 1 && <div className={style.back}>
            <ul className={style.listIngredients}>
                {food.ingredients.map((i, index) => {
                    return <li key={index+"_"+i}>{i}</li>
                })}
            </ul>
            <button className={style.btnOutIngredients + " " + style.btn} title="nascondi ingredienti" onClick={e =>ToggleIngredients(e, "id_"+food.name)}>Gira</button>
        </div> }
       
    </div>
}

export default FoodCard;