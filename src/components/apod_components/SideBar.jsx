import { BsArrowRight } from "react-icons/bs"

export default function SideBar(props) {
    const { handleInfoModal, data } = props

    return (

        <div className="fixed left-0 right-0 bottom-0 top-[70px] flex flex-col z-10">
            {/* Overlay */}
            <div
                onClick={handleInfoModal}
                className="absolute inset-0 bg-black/60"
            ></div>

            {/* Modal */}
            <div className="relative z-20 flex flex-col items-start gap-4 p-4 overflow-y-scroll h-full w-[80%] sm:w-[40%] max-w-[800px] ml-auto bg-base-100 text-base-content">
                <h2 className=" font-space font-normal text-[1.4rem] leading-tight">
                    {data?.title}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="text-[1.1rem] font-light opacity-70">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleInfoModal}>
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
                    <BsArrowRight />
                </button>
            </div>
        </div>

    )
}