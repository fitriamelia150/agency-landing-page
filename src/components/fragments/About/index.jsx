const About = () => {
    return (
        <div className="">
            <img src="/images/mobile/image-transform.jpg" alt="transform-image" />

            <div className="flex flex-col justify-center items-center gap-10 px-10 py-20 bg-white ">
                <h1 className="font-fraunces font-bold text-4xl text-center text-very-dark-desaturated-blue">Transform your brand</h1>
                <p className="text-center font-barlow font-bold text-dark-grayish-blue">we are full-service creative agenct specializing in gelping brands grow fast. engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="#" className="font-fraunces uppercase font-bold text-very-dark-desaturated-blue">learn more</a>
            </div>

            <img src="/images/mobile/image-stand-out.jpg" alt="stand-out-image" />

            <div className="flex flex-col justify-center items-center gap-10 px-10 py-20 bg-white">
                <h1 className="font-fraunces font-bold text-4xl text-center text-very-dark-desaturated-blue">Stand out to the right audience</h1>
                <p className="text-center font-barlow font-bold text-dark-grayish-blue">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                <a href="#" className="font-fraunces uppercase font-bold text-very-dark-desaturated-blue">learn more</a>
            </div>
        </div>
    )
}

export default About