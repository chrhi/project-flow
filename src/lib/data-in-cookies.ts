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
