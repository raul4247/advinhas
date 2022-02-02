import { InformationCircleIcon, ChartBarIcon, CogIcon } from "@heroicons/react/outline";


export const Header = () => {
    return (
        <div className="flex">
            <InformationCircleIcon className="h-5 w-5"/>
            <h1 className="grow text-center text-transform: uppercase">Sabes</h1>
            <ChartBarIcon className="h-5 w-5"/>
            <CogIcon className="h-5 w-5"/>
        </div>
    )
};