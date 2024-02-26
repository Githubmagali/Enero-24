


function Delivery() {

    return (<>
        <div className="flex items-center justify-center text-sm pb-20">
            <form>
                <label className="text-graay-500">Email *</label>
                <input
                    type="text"
                    id="email"
                    className="border p-2 mb-4 rounded"
                    placeholder="Email" required />
                <label className="text-gray-500">Name *</label>
                <input
                    type="text"
                    id="name"
                    className="border p-2 mb-4 rounded"
                    placeholder="Name" required />
                <label className="text-gray-500">Address *</label>
                <input
                    type="text"
                    id="address"
                    className="border p-2 mb-4 rounded"
                    placeholder="Address" required />
                <label className="text-gray-500">Dto *</label>
                <input
                    type="text"
                    id="dto"
                    className="border p-2 mb-4 rounded"
                    placeholder="dto" required />
                <label className="text-gray-500">Observations </label>
                <input
                    type="text"
                    id="date"
                    className="border p-2 mb-4 rounded"
                    placeholder="Date" required />
                    <button className="border p-2 mb-4 rounded bg-gray-400 hover:bg-gray-500 hover:text-white">Send</button>
            </form>
        </div></>

    )
}

export default Delivery