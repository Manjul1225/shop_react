import { Link } from 'react-router-dom';

export default function LinkFooter() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-full'>
       <Link to='/home'>
            <h1 className='font-subFont text-xl text-center'> React Shop </h1>
        </Link>
        <div className='flex justify-around w-[80%] mb-7 md:flex-col md:items-center'>
            <Link className='underline hover:text-gray-700' to='/home'>
                Home
            </Link>
            <Link className='underline hover:text-gray-700' to='/about'>
                About
            </Link>
            <Link className='underline hover:text-gray-700' to='/contact'>
                Contact
            </Link>
        </div>
    </div>
  )
}
