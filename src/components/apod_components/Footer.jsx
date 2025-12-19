const Footer = (props) => {
    const { data } = props;
    return (
        <footer className="relative w-full flex items-center justify-between gap-4 p-4 text-white bg-gradient-to-t from-[#030615] to-transparent">
            <div>
                <h2 className="text-[1.4rem] font-audiowide">{data?.title}</h2>
            </div>
        </footer>
    )
}

export default Footer
