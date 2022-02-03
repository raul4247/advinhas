import { Key } from "./keyboard/Key";
import { Enter } from "./keyboard/Enter";
import { Backspace } from "./keyboard/Backspace";

export const Keyboard = () => {
    return (
        <div className = "">
            <div className="flex justify-center">
                <Key keyValue="Q"/>
                <Key keyValue="W"/>
                <Key keyValue="E"/>
                <Key keyValue="R"/>
                <Key keyValue="T"/>
                <Key keyValue="Y"/>
                <Key keyValue="U"/>
                <Key keyValue="I"/>
                <Key keyValue="O"/>
                <Key keyValue="P"/>
            </div>
            <div className="flex justify-center">
                <Key keyValue="A"/>
                <Key keyValue="S"/>
                <Key keyValue="D"/>
                <Key keyValue="F"/>
                <Key keyValue="G"/>
                <Key keyValue="H"/>
                <Key keyValue="J"/>
                <Key keyValue="K"/>
                <Key keyValue="L"/>
            </div>
            <div className="flex justify-center">
                <Key keyValue="Z"/>
                <Key keyValue="X"/>
                <Key keyValue="C"/>
                <Key keyValue="V"/>
                <Key keyValue="B"/>
                <Key keyValue="N"/>
                <Key keyValue="M"/>
                <Backspace />
                <Enter />
            </div>
        </div>
    )
}