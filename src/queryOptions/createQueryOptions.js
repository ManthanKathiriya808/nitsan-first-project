import { queryOptions } from "@tanstack/react-query";



const fetchApi = async ()=> {
  const resp = await fetch("https://t3-reva.t3planet.de/")
  return await resp.json()
} 

const germanApi = async ()=>{
  const resp = await fetch("https://t3-reva.t3planet.de/de")
  return await resp.json()
}

export default function createQueryOptions(){
  return queryOptions({
    queryKey: ["apis"],
    queryFn : fetchApi
  })
}

export function createGermanQueryOptions(){
  return queryOptions({
    queryKey: ["german"],
    queryFn: germanApi
  })
}


