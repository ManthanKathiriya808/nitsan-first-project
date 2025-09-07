import { queryOptions } from "@tanstack/react-query";



const fetchApi = async (slug = "")=> {
  const resp = await fetch(`https://t3-reva.t3planet.de/${slug}`)
  if(!resp.ok) throw new Error("Faild To Fetch")
  return await resp.json()
} 

const Hotspots = async ()=>{
  const resp = await fetch(`https://t3-reva.t3planet.de/elements/infographic-elements/hotspots`)
  if(!resp.ok) throw Error("faild to fetch hotspots")
  return await resp.json()
}
const AppGallery = async ()=>{
  const resp = await fetch(`https://t3-reva.t3planet.de/elements/business-elements/app-gallery`)
  if(!resp.ok) throw Error("faild to fetch hotspots")
  return await resp.json()
}



export default function createQueryOptions(slug= ""){
  return queryOptions({
    queryKey: ["apis", slug],
    queryFn : ()=> fetchApi(slug)
  })
}


export function createHotspotsQueryOptions(){
  return queryOptions({
    queryKey: ["hotspots"],
    queryFn: Hotspots

  })
}
export function createAppGalleryQueryOptions(){
  return queryOptions({
    queryKey: ["appGallery"],
    queryFn: AppGallery

  })
}



