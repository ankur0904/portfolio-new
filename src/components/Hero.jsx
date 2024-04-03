import logo from '../ankur.png';

function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <div className="mx-auto max-w-2xl lg:max-w-4xl flex items-center justify-center">
                <img className="mx-auto h-24 rounded-md sm:h-24 md:h-32 lg:h-40 xl:h-48" src={logo} alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p className="text-2xl italic">“A passinate Full stack developer, Devops practictioner and open source contributor with an experience of 1 year.”</p>
                    </blockquote>
                </figure>
            </div>
        </section>
    )
}

export default Hero;