type Props = {keyValue: string}

export const Key:React.FC <Props>= ({keyValue}) => {
    return (
        <div className="w-11 h-14 mx-auto flex items-center rounded-md border-2 border-white cursor-pointer group hover:bg-white mx-1 my-0.5">
            <p className="grow text-center group-hover:text-black">{keyValue}</p>
        </div>
    )
};