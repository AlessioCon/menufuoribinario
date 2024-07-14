import { Link } from "react-router-dom";

import style from "./stylepage/Home.module.css";

import CategoryCard from "../Component/CategoryCard/CategoryCard";

import FoodStore, {ANTIPASTI, BUN, CIABATTE, WRAP, BUNCLASSICI, CARNE, VEGINSALATE, CONTORNI, BIBITE, VINI, BIRREALLASPINA, BIRREINBOTTIGLIA} from "./../FoodStore/FoodStore"


import ImgAntipasti from "./../Resource/category/antipasti.png";
import ImgBun from "./../Resource/category/bun.png";
import ImgCiabatte from "./../Resource/category/ciabatte.png";
import ImgWrap from "./../Resource/category/wrap.png";
import ImgCarne from "./../Resource/category/carne.png";
import ImgVegInsalate from "./../Resource/category/veginsalate.png";
import ImgContorni from "./../Resource/category/contorni.png";
import ImgBibite  from "./../Resource/category/bibite.png";
import ImgVini from "./../Resource/category/vini.png";
import ImgBirreSpina from "./../Resource/category/birrespina.png";
import ImgBirreBottiglia from "./../Resource/category/birrebottiglia.png";



import ImgUpMenu from "./../Resource/icon/upMenu.png";

import FoodInLine from "./../Component/FoodList/FoodInLine/FoodInLine";
import FoodCard from "./../Component/FoodList/FoodCard/FoodCard";

function Home() {
    return (
        <>
            <div className={style.categoryBox} id="navigation">
                <CategoryCard name="Antipasti" route="#antipasti" img={ImgAntipasti}/>
                <CategoryCard name="Bun" route="#bun" img={ImgBun}/>
                <CategoryCard name="Ciabatte" route="#ciabatte" img={ImgCiabatte}/>
                <CategoryCard name="Wrap" route="#wrap" img={ImgWrap}/>
                <CategoryCard name="Bun classici" route="#bunclassici" img={ImgBun}/>
                <CategoryCard name="Carne" route="#carne" img={ImgCarne}/>
                <CategoryCard name="Veg Insalate" route="#veginsalate" img={ImgVegInsalate}/>
                <CategoryCard name="Contorni" route="#contorni" img={ImgContorni}/>
                <CategoryCard name="Bibite" route="#bibite" img={ImgBibite}/>
                <CategoryCard name="Vini" route="#vini" img={ImgVini}/>
                <CategoryCard name="Birre alla spina" route="#birreallaspina" img={ImgBirreSpina}/>
                <CategoryCard name="Birre in bottiglia" route="#birreinbottiglia" img={ImgBirreBottiglia}/>
            </div>
            <div>
                <ul className={style.menuBox}>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="antipasti">Antipasti</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {ANTIPASTI.map((food : FoodStore, index) => <FoodInLine food={food} treno="ANTIPASTO" key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="bun">Bun</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {BUN.map((food : FoodStore, index) => <FoodCard food={food} key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="ciabatte">Ciabatte</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {CIABATTE.map((food : FoodStore, index) => <FoodCard food={food} key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="wrap">Wrap</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {WRAP.map((food : FoodStore, index) => <FoodCard food={food} key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="bunclassici">Bun classici</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {BUNCLASSICI.map((food : FoodStore, index) => <FoodCard food={food} key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="carne">Carne</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {CARNE.map((food : FoodStore, index) => <FoodInLine food={food} treno="CARNE" key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="veginsalate">Veg Insalate</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {VEGINSALATE.map((food : FoodStore, index) => <FoodInLine food={food} treno="VEG INSALATE" key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="contorni">Contorni</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {CONTORNI.map((food : FoodStore, index) => <FoodInLine food={food} treno="CONTORNI" key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="bibite">Bibite</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {BIBITE.map((food : FoodStore, index) => <FoodInLine food={food} treno="BIBITE" key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="vini">Vini</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {VINI.map((food : FoodStore, index) => <FoodInLine food={food} treno="VINI" key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="birreallaspina">Birre alla spina</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {BIRREALLASPINA.map((food : FoodStore, index) => <FoodInLine food={food} treno="BIRRE ALLA SPINA" key={index+"_"+food.name}/>)}
                    </li>
                    <li>
                        <div className={style.menuCategory}>
                            <p id="birreinbottiglia">Birre in bottiglia</p>
                            <Link to="#navigation" reloadDocument><img src={ImgUpMenu} title="ritorno" alt="ritorno"/></Link>
                        </div>
                        {BIRREINBOTTIGLIA.map((food : FoodStore, index) => <FoodInLine food={food} treno="BIRRE IN BOTTIGLIA" key={index+"_"+food.name}/>)}
                    </li>
                </ul>
            </div>
        </>
    );
  }
  
  export default Home;