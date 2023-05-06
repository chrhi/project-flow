
//get the current phase and this phase

export const PHASES = ['STARTUP', 'PLANNING' , 'EXECUTING' , 'CONTROLLING' , 'CLOSEING']

export const IsPhaseLocked = ({
    current_phase  ,
    
    thisPhaseIndex
}:{
    current_phase : string   ,
    
    thisPhaseIndex : number
}
) => {
    let currentPhaseIndex  = 0
   
    for(let i = 0 ; i < 5 ; i++) {
        if(current_phase === PHASES[i] ){
            currentPhaseIndex = i
            break ;
        }
    }

    if(thisPhaseIndex <= currentPhaseIndex ){
        return true 
    }
    return false
}