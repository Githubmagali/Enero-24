import Link from "next/link";


function Navbar(){
    return(
        <nav className="bg-slate-300 mb-4 flex justify-between px-8 py-3">
            <Link href="/" className="hover:text-gray-100">Home</Link>
        
        <ul>
            <li>
                <Link href="/about" className="hover:text-gray-100">Users</Link>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar