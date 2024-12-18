import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req) {

const {collectionId} = await req.json()
const data = {collectionId}
const collections = await prisma.collections.delete({
    where:{id:collectionId}
})

return NextResponse.json({message:'collection berhasil dihapus'})
}
