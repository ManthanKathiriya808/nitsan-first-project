import { queryOptions } from "@tanstack/react-query";


export default function createQueryOptions(){
  return queryOptions({
    queryKey: ["apis"],
    queryFn : fetchApi
  })
}

const fetchApi = async ()=> {
  const resp = await fetch(`https://demo.t3planet.com/t3-reva/`)
  return await resp.json()
}