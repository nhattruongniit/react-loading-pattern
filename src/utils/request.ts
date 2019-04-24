export default async function request(url : string, options?: {}) : Promise<Response> {
    const res = await fetch(url, options)
    return res.json()
}