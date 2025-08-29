import { queryOptions } from "@tanstack/react-query";


export default function createQueryOptions(){
  return queryOptions({
    queryKey: ["apis"],
    queryFn : fetchApi
  })
}

const fetchApi = async ()=> {
  const resp = await fetch("api.json")
  return await resp.json()
} 