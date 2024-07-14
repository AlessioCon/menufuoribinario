import { FC, useContext } from "react";
import { createPortal } from "react-dom";
import { PopUpContext } from "./../../store/context";
import style from "./Popup.module.css";



const Backdrop: FC<{action: Function}> = ({action}) => {
    return <div onClick={() => action()} className={style.backdrop}></div>
}

const Overlay: FC = () =>{
    const [popup, setPopup] = useContext(PopUpContext);

    return <div className={style.wrap_popup}>
        {popup.message}
        <div className={style.wrap_btn + (popup.wrapClass ? " " + popup.wrapClass : "")}>
            {popup.buttons !== undefined ? popup.buttons : <button onClick={() => setPopup({message:null})}>ok</button>}
        </div>
    </div>
}


const Popup: FC<{}> = () => {
    const [popup, setPopup] = useContext(PopUpContext);
    return <>
        {Boolean(popup.message) && <>
            {createPortal(<Backdrop  action={() => setPopup({message:null}) }/>, document.getElementById("backdrop-root"))}
            {createPortal(<Overlay/>, document.getElementById("overlay-root"))}
        </>
        }
    </>
}

export default Popup;

