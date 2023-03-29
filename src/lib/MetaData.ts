import Cookies from "js-cookie"

export const setoreProjectMetaData = ({
    project_id  
}:{project_id : string }) => {
    Cookies?.set("abdullah-project-id" , project_id)
}

export const getProjectMetaData= () : string => {
  const projec_id : string | undefined =   Cookies.get('abdullah-project-id') // => 'value'
  return projec_id || ""
}

export const getUserMetadata = () : string => {
    const user_id : string | undefined =   Cookies.get('abdullah-user-id') // => 'value'
    return user_id || ""
}

export const storeUserMetadata = ({
    user_id  
}:{user_id : string }) => {
    Cookies?.set("abdullah-user-id" , user_id)
}