import { FaRegCopyright } from "react-icons/fa6";


function footer() {

    return(
        <footer className="flex flex-row text-xs sm:text-base justify-center items-center w-full bg-kindly-blue text-kindly-offWhite space-x-4 p-5 mt-8">
            <FaRegCopyright className='opacity-80' />
            <p className='opacity-80'>2024 CIS467</p>              
        </footer>
    )
}

export default footer;