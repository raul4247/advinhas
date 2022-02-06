import { BackspaceIcon } from "@heroicons/react/outline";

export const Backspace = () => {
    return (
        <div className="w-12 h-14 mx-auto flex items-center rounded-md border-2 border-white cursor-pointer group hover:bg-red-600 mx-1 my-0.5 justify-center">
            <BackspaceIcon className="h-8 w-8"/>
        </div>
    )
};