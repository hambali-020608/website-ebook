import prisma from "../../../lib/prisma"
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
const JWT_SECRET = 'books'


export async function POST(req) {
const data = await req.json()
const user = await prisma.users.findUnique({
    where:{
        email:data.email
    }
})

if(!user){
    return NextResponse.json({message:'user not found'})

}

if(data.password !== user.password){
    return NextResponse.json({message:'password salah'})

}

const token = jwt.sign({
    id:user.id,
    name: user.name,
    email:user.email,
    
},JWT_SECRET,{expiresIn:'1h'})

const cookieStore = await cookies()
cookieStore.set({
    name:'token',
    value:token,
    httpOnly:true,
    maxAge: 60 * 60
    
})

return NextResponse.json({message:'login berhasil',token,status:200})
}
