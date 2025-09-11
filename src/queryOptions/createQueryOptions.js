import { queryOptions } from "@tanstack/react-query";

 const getBaseUrl = (lang)=>{
      return lang === "DE" ? 
      `https://t3-reva.t3planet.de/de`:
      `https://t3-reva.t3planet.de`

 }



const fetchApi = async (slug = "", lang="EN")=> {
  const baseUrl = getBaseUrl(lang)
  const resp = await fetch(`${baseUrl}/${slug}`)
  if(!resp.ok) throw new Error("Faild To Fetch")
  return await resp.json()
} 

const Hotspots = async (lang = "EN")=>{
  const baseUrl = getBaseUrl(lang)

  const resp = await fetch(`${baseUrl}/elements/infographic-elements/hotspots`)
  if(!resp.ok) throw Error("faild to fetch hotspots")
  return await resp.json()
}
const AppGallery = async (lang = "EN")=>{
  const baseUrl = getBaseUrl(lang)

  const resp = await fetch(`${baseUrl}/elements/business-elements/app-gallery`)
  if(!resp.ok) throw Error("faild to fetch hotspots")

  return await resp.json()
}


const contactUs = async (lang = "EN")=>{
  const baseUrl = getBaseUrl(lang)

  const resp = await fetch(`${baseUrl}/contact-us`)
  if(!resp.ok) throw Error("faild to fetch ContactUs")
  return await resp.json()
}



export default function createQueryOptions(slug= "",lang = "EN"){
  return queryOptions({
    queryKey: ["apis", slug,lang],
    queryFn : ()=> fetchApi(slug,lang)
  })
}


export function createHotspotsQueryOptions(lang = "EN"){
  return queryOptions({
    queryKey: ["hotspots",lang],
    queryFn: ()=> Hotspots(lang)

  })
}
export function createAppGalleryQueryOptions(lang = "EN"){
  return queryOptions({
    queryKey: ["appGallery",lang],
    queryFn: ()=> AppGallery(lang)

  })
}
export function createContactUsQueryOptions(lang = "EN"){
  return queryOptions({
    queryKey: ["contactUs",lang],
    queryFn: ()=> contactUs(lang)

  })
}



