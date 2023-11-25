import Forms from '../components/Contact/Forms';
import Blob from '../components/Contact/Blob';

export default function Contact() {

    return (
        <div className='pt-20 md:pt-24 w-full h-full'>
            <h1 className='text-center text-3xl pb-8 md:pb-16 underline font-subFont'> Contact Us </h1>
            <div className='w-full justify-around md:flex md:items-center'>
              <Blob />
              <Forms />
            </div>
        </div>
    )
}
