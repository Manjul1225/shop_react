function GoToTopBtn() {
    return (
        <button
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className='w-full mt-16 border-t border-b border-black bg-blue-400 hover:bg-blue-500 transition-all text-lg'
        >
            Back to top
        </button>
    );
}

export default GoToTopBtn;
