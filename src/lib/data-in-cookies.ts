import Cookies from "js-cookie"

export const storeOrganizationId = ({
    org_id  
}:{org_id : string }) => {
    Cookies?.set("abdullah-org-id" , org_id)
}

export const getOrganizationId= () : string => {
  const org_id : string | undefined =   Cookies.get('abdullah-org-id') // => 'value'
  return org_id || ""
}

export const RemoveOrgId = () => {
  Cookies?.remove("abdullah-org-id")
}

export const storeOrgName = ({
  org_name  
}:{org_name : string }) => {
  Cookies?.set("abdullah-org-name-abdullah" , org_name)
}

export const getOrgName= () : string => {
const org_name : string | undefined =   Cookies.get('abdullah-org-name-abdullah') // => 'value'
return org_name || ""
}

export const RemoveOrgName = () => {
Cookies?.remove("abdullah-org-name-abdullah")
}