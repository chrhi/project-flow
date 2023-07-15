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