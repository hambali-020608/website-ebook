export default async function FetchBook() {
    const response = await fetch('https://www.dbooks.org/api/recent')
    const data = await response.json()
    return data
    
}