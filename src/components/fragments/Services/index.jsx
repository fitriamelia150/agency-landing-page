const Services = () => {
    return (
        <div className=" flex flex-col">
            <div className="relative">
                <div className="flex flex-col justify-center items-center gap-10 p-5 absolute mt-[25rem]">
                    <h1 className="font-fraunces font-bold text-dark-desaturated-cyan text-3xl">Graphic Design</h1>
                    <p className="text-center font-barlow font-semibold text-dark-desaturated-cyan">Great design makes you memorable. We deliver artwork that underscores your brand message and capture potential clients attention.</p>
                </div>

                <img src="/images/mobile/image-graphic-design.jpg" alt="" className=""/>

            </div>

            <div className="relative">
                <div className="flex flex-col justify-center items-center gap-10 p-5 absolute mt-[25rem]">
                    <h1 className="font-fraunces font-bold text-dark-blue text-3xl">Photography</h1>
                    <p className="text-center font-barlow font-semibold text-dark-blue">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>

                <img src="/images/mobile/image-photography.jpg" alt="" className=""/>
            </div>
        </div>
    )
}

export default Services