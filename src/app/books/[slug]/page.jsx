import AuthUser from "../../../lib/authUser"
import AddButton from "../../../components/collection/addButton"
import NavBar from "../../../components/navbar"
import prisma from "../../../lib/prisma"
import DeleteButton from "../../../components/collection/deleteButton"

export default async function Page({ params }) {
    const user = await AuthUser()
    const slug = (await params).slug
    const res = await fetch(`https://www.dbooks.org/api/book/${slug}`)
    
    const book = await  res.json()
    const collections = await prisma.collections.findFirst({
        where:{userEmail:user.email,bookId:book.id}
    })


    
    
    return(
        <>
        <NavBar user={user}/>
    
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
            <hr  className="mb-5"/>
           
            {!collections &&  <AddButton bookId={book.id} userEmail={user.email}/>}
            {collections &&  <DeleteButton collectionId={collections.id}/>}

        </div>
        </div>
        </div>
        </>
    )
  }