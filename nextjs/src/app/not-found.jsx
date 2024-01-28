import Link from "next/link";

export default function NotFound(){
return( <section>
    <h1>404</h1>
    <p>Pagina no encontada</p>
    <Link href="/">Volver</Link>
</section>
);
}