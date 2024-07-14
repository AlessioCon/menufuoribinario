import { CSSProperties, FC } from "react";
import logo from "./../../Resource/Logo.png";


const Logo : FC<{align: CSSProperties["textAlign"]}> = ({ align }) => {

    return <div style={{textAlign: align }}>
            <img alt="Fuori Binario" title="Fuori Binario" className="" src={logo} />
        </div>
}

export default Logo;