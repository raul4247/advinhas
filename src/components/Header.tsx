import { InformationCircleIcon } from "@heroicons/react/outline";


export const Header = () => {
    return (
        <div className="flex flex-col w-80 mx-auto cursor-default select-none">
            <div className="pt-2 font-kanit text-7xl  uppercase text-center">Sabes</div>

            <div className="flex mt-2">
                <InformationCircleIcon className="h-6 w-6 m-1 cursor-pointer" />
            </div>

            <hr />
        </div>
    )
};