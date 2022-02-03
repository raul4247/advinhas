type Props = {cellValue: string}

export const Cell:React.FC <Props> = ({cellValue}) => {
    return (
        <div className="w-14 h-14 mx-auto flex items-center rounded-md border-2 border-white cursor-default select-none">
            <p className="grow uppercase text-lg font-bold text-center">{cellValue}</p>
        </div>
    )
};