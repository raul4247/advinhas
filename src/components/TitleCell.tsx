type Props = {cellValue: string}

export const TitleCell:React.FC <Props> = ({cellValue}) => {
    return (
        <div className="w-9 h-9 mx-auto flex items-center rounded-md border-2 border-white cursor-default select-none bg-white text-black">
            <p className="grow uppercase text-lg font-bold text-center">{cellValue}</p>
        </div>
    )
};