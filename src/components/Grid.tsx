import { Cell } from "./Cell";

export const Grid = () => {
    return (
        <div className="">
            <div className="grid grid-cols-5 items-center">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="grid grid-cols-5 items-center">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="grid grid-cols-5 items-center">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="grid grid-cols-5 items-center">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="grid grid-cols-5 items-center">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    )
};