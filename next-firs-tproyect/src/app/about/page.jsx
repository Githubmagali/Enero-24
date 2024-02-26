import Link from "next/link";

function AboutPage(){
    return(
        <div>
        <div className="py-8">About</div>
        <Link href="/"className="bg-gray-200 px-3 py-2 rounded-md">Volver</Link>

        </div>
    )
}

export default AboutPage;