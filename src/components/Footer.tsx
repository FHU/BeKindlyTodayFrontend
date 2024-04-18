import { FaRegCopyright } from "react-icons/fa6";


function footer() {

    return(
        <footer className="flex flex-row w-full bg-kindly-blue text-kindly-offWhite space-x-4 p-5 mt-8">
            <FaRegCopyright className='opacity-80' />
            <p className='opacity-80'>2024 CIS467</p>
            <div className='flex items-end space-x-2'>
                <a href="" className='underline opacity-80 hover:opacity-100'>Terms</a>
                <p className='opacity-80'>|</p>
                <a href="" className='underline opacity-80 hover:opacity-100'>Conditions</a>
                <p className='opacity-80'>|</p>
                <a href="" className='underline opacity-80 hover:opacity-100'>About</a>
            </div>
                            
        </footer>
    )
}

export default footer;