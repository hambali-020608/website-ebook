import NavBar from "@/components/navbar"

export default async function Page({ params }) {
    const slug = (await params).slug
    const res = await fetch(`https://www.dbooks.org/api/book/${slug}`)
    const book = await  res.json()



    
    
    return(
        <>
        <NavBar/>
        {console.log(book)}
        <div className="ps-10">
        <h1 className="text-4xl text-blue-400 " >{book.title}</h1>
        <h4 className="text-lg text-gray-500 mt-2" >{book.authors}</h4>
        <div className="grid grid-cols-3 content-center">
            <div>
        
        <img src={book.image} className="border-2" alt="" />
        </div>

        <div>
            <p className="pb-4 text-sm">{book.description}</p>
            <hr />
            <ul className="text-sm">
                <li>Publisher: {book.publisher}</li>
                <li>Published: {book.year}</li>
                <li>Author: {book.authors}</li>
                <li>Title: {book.title}</li>
                <li>Number Of Pages: {book.pages}</li>

            </ul>
        </div>
        </div>
        </div>
        </>
    )
  }