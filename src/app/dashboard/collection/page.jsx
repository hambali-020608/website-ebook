
import AuthUser from "../../../lib/authUser"
import prisma from "../../../lib/prisma"

export default async function Page() {
        const user = AuthUser()
        const collection = await prisma.collections.findMany({
            where:{userEmail:user.email}
        })
        

    return(
        <>
        Your Collection
        <div className="grid grid-cols-3  gap-5">
        {collection.map(async(c)=>{
                const response = await fetch(`https://www.dbooks.org/api/book/${c.bookId}`)
                const book = await response.json()
                return(
                    <div href="#" className=" border-2 group relative block overflow-hidden">
                    <button
                      className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                    >
                      <span className="sr-only">Wishlist</span>
                  
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                  
                    <img
                      src={book.image}
                      alt=""
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                    />
                  
                    <div className="relative border border-gray-100 bg-white p-6">
                      <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>
                  
                      <h3 className="mt-4 text-lg font-medium text-gray-900">{book.title}</h3>
                  
                      <p className="mt-1.5 text-sm text-gray-700">Author: {book.authors}</p>
                  
                      <form className="mt-4 flex gap-3">
                        <a href={book.url}
                          className="block w-full text-center rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                        >
                          Read This Book
                        </a>
                        <a href={`/books/${book.id}`}
                          className="block text-center w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                        >
                          See The Detail
                        </a>
                      </form>
                    </div>
                  </div>
                  
                )
            })}

        </div>
            
        </>
        
    )
    
}