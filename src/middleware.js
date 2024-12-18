import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
const JWT_SECRET = new TextEncoder().encode('books')
 
// This function can be marked `async` if using `await` inside
export  async function middleware(request) {
 const dashboardPath = '/dashboard'
 const loginPath = '/login'
 const cookieStore = await cookies()
 const token = cookieStore.get('token')?.value


 

 try{
  if(!token){
    if (request.nextUrl.pathname !== loginPath){
        return NextResponse.redirect(new URL(loginPath,request.url))
    }
    return NextResponse.next()
  }
 await jwtVerify(token,JWT_SECRET)

if (request.nextUrl.pathname === loginPath) {
    return NextResponse.redirect(new URL(dashboardPath,request.url))
    
} 
return NextResponse.next()
}catch(error){
 
}

}
 

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login','/dashboard/:path*'],
}