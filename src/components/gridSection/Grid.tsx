import { Cell } from "./Cell";

export const Grid = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 gap-2 items-center">
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="S" cellState="correct"/>
                    <Cell cellValue="A" cellState="unchecked"/>
                    <Cell cellValue="B" cellState="misplaced"/>
                    <Cell cellValue="E" cellState="unpresent"/>
                    <Cell cellValue="S" cellState="unchecked"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="X" cellState="unchecked"/>
                    <Cell cellValue="O" cellState="unchecked"/>
                    <Cell cellValue="R" cellState="unchecked"/>
                    <Cell cellValue="A" cellState="unchecked"/>
                    <Cell cellValue="S" cellState="unchecked"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="M" cellState="unchecked"/>
                    <Cell cellValue="A" cellState="unchecked"/>
                    <Cell cellValue="M" cellState="unchecked"/>
                    <Cell cellValue="A" cellState="unchecked"/>
                    <Cell cellValue="S" cellState="unchecked"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="S" cellState="unchecked"/>
                    <Cell cellValue="U" cellState="unchecked"/>
                    <Cell cellValue="G" cellState="unchecked"/>
                    <Cell cellValue="A" cellState="unchecked"/>
                    <Cell cellValue="S" cellState="unchecked"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="S" cellState="unchecked"/>
                    <Cell cellValue="E" cellState="unchecked"/>
                    <Cell cellValue="N" cellState="unchecked"/>
                    <Cell cellValue="T" cellState="unchecked"/>
                    <Cell cellValue="A" cellState="unchecked"/>
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell cellValue="P" cellState="unchecked"/>
                    <Cell cellValue="A" cellState="unchecked"/>
                    <Cell cellValue="N" cellState="unchecked"/>
                    <Cell cellValue="O" cellState="unchecked"/>
                    <Cell cellValue="S" cellState="unchecked"/>
                </div>
            </div>
        </div>
    )
};