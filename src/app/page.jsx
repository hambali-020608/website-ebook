'use client'
import AuthUser from "../lib/authUser";
import FetchBook from "../actions/fetchBooks";
import NavBar from "../components/navbar";
import { useEffect, useState } from "react";


export default function Home() {
const [data,setData]=useState([])
const [user,setUser] = useState(null)

useEffect(()=>{
async function fetchData(){
  const books = await FetchBook()
  setData(books.books)
  const dataUser = await AuthUser()

  setUser(dataUser)

}
fetchData()
},[])


  return (
    <div className="">
<NavBar user={user}/>
<section
  className="relative bg-[url('../images/image.png')] bg-cover bg-center bg-no-repeat"
>
  <div 
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative flex justify-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center  ">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
        Let us find your
        <strong className="block font-extrabold text-rose-500 text-center"> Favorite Books. </strong>
      </h1>
      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>
        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section> 

<main>

  <section className="pt-5">
    <div className="grid grid-cols-4  gap-5">
      {data.map((book)=>{
        
        return(
          <a href="#" className="border-2 group relative block overflow-hidden">
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
              <button
                className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Read This Book
              </button>
              <a href={`/books/${book.id}`}
                className="block text-center w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                See The Detail
              </a>
            </form>
          </div>
        </a>
        
        )
      })}
</div>
  </section>
</main>

      </div>
  );
}
