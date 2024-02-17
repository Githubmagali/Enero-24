import "boxicons/css/boxicons.min.css";

function FooterPage() {
    return (
        <section className="">
            <div className="flex justify-center gap-x-10 py-8">
                
                <a href="" className="transition-transform transform hover:-translate-y-2 focus:outline-none">
                    <i className="bx bxl-instagram text-6xl text-yellow-900 hover:text-stone-500"></i>
                </a>

                <a href="" className="transition-transform transform hover:-translate-y-2 focus:outline-none">
                    <i className="bx bxl-twitter text-6xl text-yellow-900 hover:text-stone-500"></i>
                </a>

                <a href="" className="transition-transform transform hover:-translate-y-2 focus:outline-none">
                    <i className="bx bxl-facebook text-6xl text-yellow-900 hover:text-stone-500"></i>
                </a>

                <a href="" className="transition-transform transform hover:-translate-y-2 focus:outline-none">
                    <i className="bx bxl-youtube text-6xl text-yellow-900 hover:text-stone-500"></i>
                </a>

                <a href="" className="transition-transform transform hover:-translate-y-2 focus:outline-none">
                <i className='bx bx-envelope text-6xl text-yellow-900 hover:text-stone-500'></i>
                </a>

                <a href="" className="transition-transform transform hover:-translate-y-2 focus:outline-none">
                <i className='bx bxl-whatsapp text-6xl text-yellow-900 hover:text-stone-500'></i>
                </a>
            </div>

            <div className="flex justify-center md:gap-x-20">
                <a href="#" className="hover:text-stone-500">Privacy Policy</a>
                <a href="#" className="hover:text-stone-500">Terms of use</a>
                <a href="#" className="hover:text-stone-500">Our Company</a>
            </div>
            <p className="text-center p-10">&#169; Magali Victoria Fernandez</p>
        </section>

    )
}

export default FooterPage