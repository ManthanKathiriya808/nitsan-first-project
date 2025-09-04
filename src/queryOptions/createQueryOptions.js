import { queryOptions } from "@tanstack/react-query";



const fetchApi = async (slug = "")=> {
  const resp = await fetch(`https://t3-reva.t3planet.de/${slug}`)
  if(!resp.ok) throw new Error("Faild To Fetch")
  return await resp.json()
} 



export default function createQueryOptions(slug= ""){
  return queryOptions({
    queryKey: ["apis", slug],
    queryFn : ()=> fetchApi(slug)
  })
}




