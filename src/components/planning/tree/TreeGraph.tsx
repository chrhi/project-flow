import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import { FormContainer } from '../../ui/used/FormContainer';
import { FormHead } from '../../ui/used/FormHead';
import { api } from '~/utils/api';
import { getProjectMetaData } from '~/lib/MetaData';
import { toast } from 'react-toastify';
import { loading_Reducer } from '~/store/app-reducer/loadingReducer';
import { RawNodeDatum } from 'react-d3-tree/lib/types/types/common';
import { Treepopup } from './Treepopup';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.


type task =  {
  name : string ,
  
  start_at : string ,
  ends_at : string,
  id : string 
}

export const  TreeGraph = () =>  {
  const set_loading = loading_Reducer(state => state.set_isLoading)
  const [MainTasks , setMainTasks] = useState<task[]>([] as task[])
  const {isFetching} = api.MilestonesRouter.getMileStones.useQuery({project_id : getProjectMetaData()},{
    onSuccess(data) {
      setMainTasks(data as task[])
      console.log(MainTasks)
      set_loading(false)
    },
    onError(err) {
      console.log(err)
      toast("something went wrong ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
       },
  })
  useEffect(() => {
    if(isFetching){
      set_loading(true)
    }
  }, [ isFetching , set_loading])


  const prepareTheArray = () :  RawNodeDatum | RawNodeDatum[] | undefined  => {
  const  data = MainTasks.map (item => {
    return {
      id : item.id ,
      name: item.name,
      attributes: {
      },
      children: [
        
      ],
    }
  })
    const orgChart = {
      name : "project title",
      children: data,
    }
    return orgChart
  }
  const [isOpen, setIsOpen] = useState(false)
  const [id, setId] = useState("")

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <FormContainer>
      <Treepopup setIsOpen ={setIsOpen} isOpen ={isOpen} id={id}/>
      <FormHead  text='break your project into small pieses 🐱'  />
    <div id="treeWrapper" className='mx-auto ' style={{ width: '100%', height: '100%' }}>

      <Tree
       data={prepareTheArray()} orientation='vertical'
      
        onNodeClick={(node) => {
          setIsOpen(true)
          const {id} = node?.data.__rd3t
          setId(id )
         
        }}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        />
    </div>
    </FormContainer>
  );
}