import { queryOptions } from "@tanstack/react-query";


export default function createQueryOptions(){
  return queryOptions({
    queryKey: ["apis"],
    queryFn : fetchApi
  })
}

const fetchApi = async ()=> {
  const resp = await fetch("https://t3-reva.t3planet.de/")
  return await resp.json()
} 