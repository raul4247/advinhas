import { InformationCircleIcon, ChartBarIcon, CogIcon } from "@heroicons/react/outline";
import { TitleCell } from "./TitleCell";


export const Header = () => {
    return (
        <div className="flex">
            <InformationCircleIcon className="h-6 w-6 cursor-pointer"/>
            <div className="flex justify-center mx-auto pt-2 pr-6 gap-2">
                <TitleCell cellValue="S"/>
                <TitleCell cellValue="A"/>
                <TitleCell cellValue="B"/>
                <TitleCell cellValue="E"/>
                <TitleCell cellValue="S"/>
            </div>
            {/* <ChartBarIcon className="h-5 w-5"/>
            <CogIcon className="h-5 w-5"/> */}
        </div>
    )
};