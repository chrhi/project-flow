

type Item = {
    properties : string[] ,
    callback : () => void 
}

type Props ={
    title : string , 
    descripton : string , 
    headers : string[],
    body : Item[] ,
    showHeaders? : boolean,
    Action? : boolean,

}


export const AbdullahTable = ({title , descripton , headers , body , showHeaders = true , Action = true}: Props) => {
  return (
    
<div className="relative overflow-x-auto  sm:rounded-lg  ">
    <table className="w-full text-sm text-left text-gray-500 ">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white  ">
           {title}
            <p className="mt-1 text-sm font-normal text-gray-500 ">{descripton}</p>
        </caption>
    {showHeaders && <thead className={`text-xs text-gray-700 uppercase bg-gray-50  `}>
        <tr>
            {headers?.map(item => (
                    <th key={item} scope="col" className="px-6 py-3">
                    {item}
                    </th>
            ))}
            <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    </thead>}
        <tbody>
            {body?.map((current , index) => (

            <tr key={current.properties[0]  } className="bg-white border-b ">
                {current.properties.map(item => (
                <th key={item + `${index}`} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                   {item}
                </th>
                ))}
              {Action &&   <td className={`px-6 py-4 text-right`}>
                    <button onClick={current.callback} className="font-medium text-blue-600 hover:underline">Edit</button>
                </td>}
            </tr>
            ))}
           
        </tbody>
    </table>
</div>

  )
}

