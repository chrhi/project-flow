interface Project {
    id : string
    title : string  
    description : string
    avatar : string 
    tag : string 
}

interface Organization {
    id : string 
    name : string 
    members : json
    projects : json

}

interface MemberOrg {
    id: string,
    image : string,
    email : string,
    name : string,
    user : string,
    role : string,
   
}