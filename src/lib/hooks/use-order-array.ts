/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const OrderArrayTodo = ({data } : {data : any[]}) => {
    //@ts-ignore
    const arrayIdsOrder = JSON.parse(localStorage.getItem('taskOrderTodo'))

    if (!arrayIdsOrder && data?.length) {
        //@ts-ignore
        const idsOrderArray = data.map(task => task.id)
        localStorage.setItem('taskOrderTodo', JSON.stringify(idsOrderArray))
    }

    let myArray
    if (arrayIdsOrder?.length && data?.length) {
        //@ts-ignore
        myArray = arrayIdsOrder.map(pos => {
            //@ts-ignore
            return data.find(el => el.id === pos)
        })
    }
    return myArray
}

export const updateToDoOrderArray = ({data } : {data : any[]}) => {
    const idsOrderArray = data.map(task => task.id)
        localStorage.setItem('taskOrder', JSON.stringify(idsOrderArray))
}