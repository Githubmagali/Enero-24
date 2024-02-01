import Link from "next/link";

function Navbar(){
    return(
        <nav className="bg-white">
            <div className="container mx-auto flex justify-between items-center py-2">
            <h3 className="font-bold px-4 hover:text-brown">Next</h3>
        
        <ul className="flex gap-x-5 px-5">
            <li>
                <Link href="/" className="hover:text-brown">Tasks</Link>
            </li>
            <li>
                <Link href="/new"className="hover:text-brown">New</Link>
            </li>
            <li>
                <Link href="/about"className="hover:text-brown">About</Link>
            </li>
        </ul>
        </div>
        </nav>
    )
}
export default Navbar