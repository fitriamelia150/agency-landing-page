const Hero = () => {
    return (
        <div className="relative w-full h-1/3">
             <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                backgroundImage: "url('/images/mobile/image-header.jpg')",
                }}
            ></div>

            <div className="relative flex flex-col justify-center items-center gap-14 w-full h-[33rem]">
                <h1 className="text-white uppercase text-3xl font-fraunces font-bold tracking-[0.3em] text-center">we are creatives</h1>

                <img src="/images/icon-arrow-down.svg" alt="arrow-image" />
            </div>
        </div>
    )
}

export default Hero