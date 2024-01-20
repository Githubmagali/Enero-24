import Link from "next/link";

export const metadata = {
    title: 'Tienda',
    description: 'Tienda',
  }

export default function TiendaLayout ({children}){
    return <>


      
    <h1>Subnavegacion de tienda</h1>
    <ul>
        <li><Link href="/tienda/categorias">Categorias</Link></li>
        <li><Link href="/tienda/productos">Productos</Link></li>
    </ul>
    {children}
  
    
    </>;
}