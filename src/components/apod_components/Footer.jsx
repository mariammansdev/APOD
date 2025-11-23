const Footer = (props) => {
    const { handleToggleModal, data } = props;
    return (
        <footer className="absolute bottom-0 left-0 w-full flex items-center justify-between gap-4 p-4 text-white">
            <div className='absolute inset-0 -z-10 bg-gradient-to-t from-[#030615] to-transparent '></div>
            <div>
                <h2 className="text-[1.4rem] font-audiowide">{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal} className="btn btn-ghost cursor-pointer hover:opacity-70" >
                < i className="fa-solid fa-circle-info text-[1.3rem]"></i>
            </button>
        </footer>
    )
}

export default Footer
