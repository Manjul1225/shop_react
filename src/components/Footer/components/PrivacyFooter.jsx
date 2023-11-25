import { Link } from 'react-router-dom';

export default function PrivacyFooter() {

  return (
    <div className='flex flex-col justify-center items-center gap-5 w-full'>
        <h1 className='font-subFont text-xl'> Privacy </h1>
        <div className='flex justify-around w-[80%] mb-7 md:flex-col md:items-center'>
            <Link className='underline hover:text-gray-700' to='intellectual-property'> Intellectual Property </Link>
            <Link className='underline hover:text-gray-700' to='terms-and-conditions'> Terms and Conditions </Link>
        </div>
    </div>
  )
}
