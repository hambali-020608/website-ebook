'use client'
export default  function AddButton({userEmail,bookId}){


   async function handleClick(e) {
        e.preventDefault()
        const data = {userEmail, bookId}
        const response = await fetch('/api/auth/add-collection',{
          method:'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(data)
        })

        const datas = await response.json()
        
    }

    return(
        <>
        <button
                onClick={handleClick}
                className=" block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Add To Collection
              </button>
        </>
    )
}