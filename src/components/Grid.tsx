import { Cell } from "./Cell";

export const Grid = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 gap-4 items-center">
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
                <div className="grid grid-cols-5 gap-2 items-center">
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </div>
            </div>
        </div>
    )
};