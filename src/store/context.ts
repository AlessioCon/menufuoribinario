import { createContext } from "react";

export interface I_PopupContext {
    message: JSX.Element | null;
    buttons?: JSX.Element[] | null;
    wrapClass?: string ;
}

type I_PopupContextUseState  = [I_PopupContext , React.Dispatch<React.SetStateAction<I_PopupContext>>]

export  let PopUpContext = createContext<I_PopupContextUseState>(null as I_PopupContextUseState);