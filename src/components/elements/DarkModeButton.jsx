import { MoonIcon } from '@heroicons/react/24/outline';


export default function DarkModeButton() {
    return (
        <div>
            <button className="flex items-center text-base font-bold text-gray-800">
            <MoonIcon className="w-5 h-5 mr-2 text-gray-800" />
                Dark Mode
            </button>
        </div>
    );
}



