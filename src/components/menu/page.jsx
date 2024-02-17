function MenuPage() {
    return (
        <section id="menu" className="grid md:grid-cols-2 md:gap-x-40 bg-gray-100">
           
                <div className="flex flex-col justify-center items-center ">
                    <h2 className="font-bold p-7 text-2xl ">Brunch</h2>
                    <div className="grid gap-y-4 ">
                        <h3 className="text-center font-bold ">Scrambled eggs</h3>
                        <div className="text-center text-gray-400">two toasts with scrambled egg</div>

                        <h3 className="text-center font-bold">Croissant</h3>
                        <div className="text-center text-gray-400">of butter or fat</div>

                        <h3 className="text-center font-bold">Brownie</h3>
                        <div className="text-center text-gray-400">with chocolate chips</div>

                        <h3 className="text-center font-bold">Cookies</h3>
                        <div className="text-center text-gray-400">with chocolate chips</div>

                        <h3 className="text-center font-bold">Omelette</h3>
                        <div className="text-center text-gray-400">eggs with roquefort cheese and basil</div>
                    </div>
                </div>


                <div className="flex flex-col justify-center items-center ">
                    <h2 className="font-bold p-7 text-2xl">Coffee</h2>
                    <div className="grid gap-y-4 ">
                        <h3 className="text-center font-bold">Expresso</h3>
                        <div className="text-center text-gray-400">black coffee</div>

                        <h3 className="text-center font-bold">Cappuccino</h3>
                        <div className="text-center text-gray-400">coffee with chocolate</div>

                        <h3 className="text-center font-bold">Ristretto</h3>
                        <div className="text-center text-gray-400">short made with a normal amount of ground coffee</div>

                        <h3 className="text-center font-bold">Americano</h3>
                        <div className="text-center text-gray-400">soft coffee</div>

                        <h3 className="text-center font-bold">Lungo</h3>
                        <div className="text-center text-gray-400">espresso but with double the water</div>
                    </div>
                </div>

        </section>
    )
}

export default MenuPage