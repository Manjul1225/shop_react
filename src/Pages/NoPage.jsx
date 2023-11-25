export default function NoPage() {
    const imageStyle = {
        minWidth: '272px',
        width: '362px'
    };

    return (
        <div className='bg-white h-screen flex flex-col justify-center items-center gap-4 p-2'>
            <h1 className='text-4xl tracking-wider hover:cursor-pointer'>404 Not Found!!</h1>
            <div className='flex justify-center items-center'>
                <img src='/error.jpeg' alt='' style={imageStyle} />
            </div>

            <p className='text-2xl font-bold'>
                The Page you are looking for does not exist or has been moved.
            </p>
        </div>
    );
}
