'use client'
export default  function DeleteButton({collectionId}){


   async function handleClick(e) {
        e.preventDefault()
        const data = {collectionId}
        const response = await fetch('/api/auth/delete-collection',{
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
                className=" block w-full rounded bg-red-500 p-4 text-sm font-medium transition hover:scale-105"
              >
               Delete Book From Collection
              </button>
        </>
    )
}