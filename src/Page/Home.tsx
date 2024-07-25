import { Link } from "react-router-dom";

import style from "./stylepage/Home.module.css";

import CategoryCard from "./../Component/CategoryCard/CategoryCard";

import FoodStore, {ANTIPASTI, BUN, CIABATTE, WRAP, BUNCLASSICI, CARNE, VEGINSALATE, CONTORNI, BIBITE, VINI, BIRREALLASPINA, BIRREINBOTTIGLIA, DOLCI} from "./../FoodStore/FoodStore"


import ImgAntipasti from "./../Resource/category/antipasti.jpg";
import ImgBun from "./../Resource/category/bun.jpg";
import ImgBunClassic from "./../Resource/category/bunclassic.jpg";
import ImgCiabatte from "./../Resource/category/ciabatte.jpg";
import ImgWrap from "./../Resource/category/wrap.jpg";
import ImgCarne from "./../Resource/category/carne.jpg";
import ImgVegInsalate from "./../Resource/category/veginsalate.png";
import ImgContorni from "./../Resource/category/contorni.png";
import ImgBibite  from "./../Resource/category/bibite.png";
import ImgVini from "./../Resource/category/vini.png";
import ImgBirreSpina from "./../Resource/category/birrespina.png";
import ImgBirreBottiglia from "./../Resource/category/birrebottiglia.jpg";
import ImgDolci from "./../Resource/category/birrebottiglia.jpg";

import PaninoDelMese from "./../Resource/panini/newyork.jpg";
import FritturaDelMese from "./../Resource/specialita/frittura.jpg";

import ImgStatusMenu from "./../Resource/icon/statusMenu.png";

import FoodInLine from "./../Component/FoodList/FoodInLine/FoodInLine";
import FoodCard from "./../Component/FoodList/FoodCard/FoodCard";
import { useRef } from "react";

function Home() {
    const refMenu = useRef();

    function toggleMenu(e : React.MouseEvent, name: string, toggle: boolean = false){
        let menu : HTMLUListElement= refMenu.current;
        menu.childNodes.forEach(i => {
            let item = i as HTMLLIElement;
            !toggle && item.classList.remove(style.openSection);
            if(toggle){
                item.id === name && item.classList.toggle(style.openSection)
            }else{
                item.id === name && item.classList.add(style.openSection)
            }
        })
    }

    return (
        <>
            <h2>Specialità del mese</h2>
            <div className={style.hiro}>
                <div className={style.meseBox}>
                    <img src={PaninoDelMese} title="panino del mese" alt="foto panino del mese"/>
                    <p>NEW York</p>
                </div>
                <ul>
                    <li>Cotoletta di pollo crispy leggeremente speziata, </li>
                    <li>pomodori cuore di bue, </li>
                    <li>mais, </li>
                    <li>insalata iceberg, </li>
                    <li>parmacotto, </li>
                    <li>mayo </li>
                </ul>
    
                <ul className={style.rotateHiro}>
                    <li>Frittatina zucchine e speck, </li>
                    <li>fonduta, </li>
                    <li>chips di zucchine</li>
                </ul>
                <div className={style.meseBox +" "+ style.rotateHiro}>
                    <img src={FritturaDelMese} title="frittura del mese" alt="foto frittura del mese"/>
                    <p>Frittura del mese</p>
                </div>
            </div>
            <h2>Menu</h2>

            <div className={style.categoryBox} id="navigation">
                <CategoryCard name="Antipasti" route="#antipasti" img={ImgAntipasti} onClick={e => toggleMenu(e, "antipasti")}/>
                <CategoryCard name="Bun" route="#bun" img={ImgBun} onClick={e => toggleMenu(e, "bun")}/>
                <CategoryCard name="Ciabatte" route="#ciabatte" img={ImgCiabatte} onClick={e => toggleMenu(e, "ciabatte")}/>
                <CategoryCard name="Wrap" route="#wrap" img={ImgWrap} onClick={e => toggleMenu(e, "wrap")}/>
                <CategoryCard name="Bun classici" route="#bunclassici" img={ImgBunClassic} onClick={e => toggleMenu(e, "bunclassici")}/>
                <CategoryCard name="Carne" route="#carne" img={ImgCarne} onClick={e => toggleMenu(e, "carne")}/>
                <CategoryCard name="Veg Insalate" route="#veginsalate" img={ImgVegInsalate} onClick={e => toggleMenu(e, "veginsalate")}/>
                <CategoryCard name="Contorni" route="#contorni" img={ImgContorni} onClick={e => toggleMenu(e, "contorni")}/>
                <CategoryCard name="Bibite" route="#bibite" img={ImgBibite} onClick={e => toggleMenu(e, "bibite")}/>
                <CategoryCard name="Birre alla spina" route="#birreallaspina" img={ImgBirreSpina} onClick={e => toggleMenu(e, "birreallaspina")}/>
                <CategoryCard name="Birre in bottiglia" route="#birreinbottiglia" img={ImgBirreBottiglia} onClick={e => toggleMenu(e, "birreinbottiglia")}/>
                <CategoryCard name="Vini" route="#vini" img={ImgVini} onClick={e => toggleMenu(e, "vini")}/>
                <CategoryCard name="Dolci" route="#dolci" img={ImgDolci} onClick={e => toggleMenu(e, "dolci")}/>
            </div>
            <div>
                <ul className={style.menuBox} id="menuBox" ref={refMenu}>
                    <li id="antipasti" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Antipasti</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "antipasti", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {ANTIPASTI.map((food : FoodStore, index) => <FoodInLine food={food} treno="ANTIPASTO" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="bun" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Bun</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "bun", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {BUN.map((food : FoodStore, index) => <FoodCard food={food} key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="ciabatte" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Ciabatte</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "ciabatte", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {CIABATTE.map((food : FoodStore, index) => <FoodCard food={food} key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="wrap" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Wrap</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "wrap", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {WRAP.map((food : FoodStore, index) => <FoodInLine food={food} treno="WRAP" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="bunclassici" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Bun classici</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "bunclassici", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {BUNCLASSICI.map((food : FoodStore, index) => <FoodInLine food={food} treno="Bun CLASSICI" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="carne" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Carne</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "carne", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {CARNE.map((food : FoodStore, index) => <FoodCard food={food} key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="veginsalate" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Veg Insalate</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "veginsalate", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {VEGINSALATE.map((food : FoodStore, index) => <FoodInLine food={food} treno="VEG INSALATE" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="contorni" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Contorni</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "contorni", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {CONTORNI.map((food : FoodStore, index) => <FoodInLine food={food} treno="CONTORNI" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="bibite" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Bibite</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "bibite", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {BIBITE.map((food : FoodStore, index) => <FoodInLine food={food} treno="BIBITE" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="vini" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Vini</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "vini", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {VINI.map((food : FoodStore, index) => <FoodInLine food={food} treno="VINI" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="birreallaspina" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Birre alla spina</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "birreallaspina", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {BIRREALLASPINA.map((food : FoodStore, index) => <FoodInLine food={food} treno="BIRRE ALLA SPINA" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="birreinbottiglia" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Birre in bottiglia</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "birreinbottiglia", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {BIRREINBOTTIGLIA.map((food : FoodStore, index) => <FoodInLine food={food} treno="BIRRE IN BOTTIGLIA" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                    <li id="dolci" className={style.listBox}>
                        <div className={style.menuCategory}>
                            <p>Dolci</p>
                            <Link to="#navigation" reloadDocument>Vai su</Link>
                            <button onClick={e => toggleMenu(e , "dolci", true)}><img src={ImgStatusMenu} title="mostra/nascondi" alt="icona"/></button>
                        </div>
                        <div className={style.list}>
                            {DOLCI.map((food : FoodStore, index) => <FoodInLine food={food} treno="DOLCI" key={index+"_"+food.name}/>)}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
  }
  
  export default Home;