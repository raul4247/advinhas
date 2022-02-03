import { Cell } from "./Cell";

export const Grid = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 gap-2 items-center">
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="S"/>
                    <Cell cellValue="A"/>
                    <Cell cellValue="B"/>
                    <Cell cellValue="E"/>
                    <Cell cellValue="S"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="X"/>
                    <Cell cellValue="O"/>
                    <Cell cellValue="R"/>
                    <Cell cellValue="A"/>
                    <Cell cellValue="S"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="M"/>
                    <Cell cellValue="A"/>
                    <Cell cellValue="M"/>
                    <Cell cellValue="A"/>
                    <Cell cellValue="S"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="S"/>
                    <Cell cellValue="U"/>
                    <Cell cellValue="G"/>
                    <Cell cellValue="A"/>
                    <Cell cellValue="S"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="S"/>
                    <Cell cellValue="E"/>
                    <Cell cellValue="N"/>
                    <Cell cellValue="T"/>
                    <Cell cellValue="A"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="P"/>
                    <Cell cellValue="A"/>
                    <Cell cellValue="N"/>
                    <Cell cellValue="O"/>
                    <Cell cellValue="S"/>
                </div>
            </div>
        </div>
    )
};