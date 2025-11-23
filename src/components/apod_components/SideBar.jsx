export default function SideBar(props) {
    const { handleToggleModal, data, isOpen } = props

    return (
        <div className= "fixed left-0 right-0 bottom-0 top-[70px] flex flex-col z-10">
            <div onClick={handleToggleModal} className="absolute inset-0 bg-[#030615] bg-black/60"></div>
            <div className="relative z-15 flex flex-col items-start gap-4 p-4 overflow-y-scroll h-full w-[80%] sm:w-[40%] max-w-[800px] ml-auto bg-[#030615]">
                <h2 className="font-light text-[1.4rem] font-['Space_Mono']">{data?.title}</h2>
                <div className="flex flex-col gap-2">
                    <p className="text-[1.1rem] font-light opacity-80">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}