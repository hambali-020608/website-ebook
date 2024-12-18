'use server'

import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'
const JWT_SECRET = 'books'

export default async function AuthUser() {
    const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value
        let data 
        if(!token){
            data=null
            return data
        }
    
        try{
            const user = jwt.verify(token,JWT_SECRET)
            data = user
            return data
            
        }catch (error){
            
    
        }
}