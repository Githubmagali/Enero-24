import { NextResponse } from "next/server"

export async function GET(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await res.json()

    return NextResponse.json (data)
}

export function POST(){
    return NextResponse.json ("creando datos")
}

export function PUT(){
    return NextResponse.json ("Actualizando datos")
}

export function DELETE(){
    return NextResponse.json ("Eliminando datos")
}