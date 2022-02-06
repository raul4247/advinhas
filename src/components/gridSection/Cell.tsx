import classNames from 'classnames'
import { CellState } from './CellState'



type Props = {
    cellValue: string, 
    cellState: CellState
}

export const Cell:React.FC <Props> = ({cellValue, cellState}) => {
    const textClasses = classNames(
            'h-full flex flex-col justify-center rounded-md text-3xl font-lato text-white uppercase text-center',
            {"bg-[#424242]" : cellState === "unchecked"},
            {"bg-[#212121]" : cellState === "unpresent"},
            {"bg-[#fdd835]" : cellState === "misplaced"},
            {"bg-[#9ccc65] " : cellState === "correct"}
    )

    return (
        <div className="w-14 h-14 cursor-default select-none">
            <div className={textClasses}>{cellValue} </div>
        </div>
    )
};