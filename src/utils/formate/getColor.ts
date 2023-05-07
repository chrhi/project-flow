

export const getColor = ({text } : {text : string}) => {
    if(text === "low"){
        return "bg-green-500"
    }
    if(text === "medium"){
        return "bg-yellow-500"
    }
    if(text === "heigh"){
        return "bg-red-400"
    }
    if(text === "very height"){
        return "bg-red-600"
    }
    return "bg-black"
}