import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req) {

const {userEmail,bookId} = await req.json()
const data = {userEmail,bookId}
const collections = await prisma.collections.create({
    data: {
        userEmail,
        bookId
    }

})

return NextResponse.json({message:'api berhasil dibuat',collections})
}
