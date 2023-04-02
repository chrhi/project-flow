// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import { FormContainer } from '~/components/ui/used/FormContainer';
import { FormHead } from '~/components/ui/used/FormHead';
import { api } from '~/utils/api';
import { getProjectMetaData } from '~/lib/MetaData';
import { toast } from 'react-toastify';
import { loading_Reducer } from '~/store/app-reducer/loadingReducer';
import { RawNodeDatum } from 'react-d3-tree/lib/types/types/common';
import { Treepopup } from '~/components/planning/tree/Treepopup';

import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";


type mileStone =  {
  name : string ,
  
  start_at : string ,
  ends_at : string,
  id : string 
}

type task = {
  name : string , 
  id : string , 
  parent_id : string
}

const Page: NextPage = () => {
  
  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [isOpenAlert , setIsOpenAlert] = useState<boolean>(true)
  const set_loading = loading_Reducer(state => state.set_isLoading)
  const [MainTasks , setMainTasks] = useState<mileStone[]>([] as mileStone[])
  const [tasks , setTasks] = useState<task[]>([] as task[])
  const [treeData , setTreeData] = useState< RawNodeDatum | RawNodeDatum[] | undefined>( {
    name : "project title",
    children: [],
  })

  const tasksGet = api.tasksRouter.getAllTasks.useQuery({project_id : getProjectMetaData()},{
    onSuccess(data) {
      setTasks(data as task[])
      prepareTheArray()
    
      set_loading(false)
    },
    onError(err) {
      console.log(err)
      toast("error fetching the tasks  ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
       },
  })
  const {isFetching ,refetch : refetchMileStones} =  api.MilestonesRouter.getMileStones.useQuery({project_id : getProjectMetaData()},{
    onSuccess(data) {
      setMainTasks(data as mileStone[])
      prepareTheArray()
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
    if(isFetching || tasksGet.isFetching){
      set_loading(true)
    }
  }, [ isFetching , set_loading , tasksGet.isFetching])

  function preparetheArrayChildren (id : string)  {
    const array =   tasks?.filter(current => current.parent_id === id)
     const childrenData = array.map(item => {
       return {
         id : item.id ,
         name: item.name,
         attributes: {
         },
         children:[]}
       })
       console.log(tasks)
      
       return childrenData
   } 
  function prepareTheArray  ()  {
  const  data = MainTasks.map (item => {
    console.log(item.id)
    return {
      id : item.id ,
      name: item.name,
      attributes: {
      },
      children: preparetheArrayChildren(item.id) ,
    }
  })
    const orgChart = {
      name : "project title",
      children: data,
    }
    console.log(orgChart)
  
    setTreeData(orgChart)
  }
 
  const [id, setId] = useState("")
  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <PlanningSideBar setIsOpen ={setIsOpenAlert} isOpen = {isOpenAlert} />
       <FormContainer className ={` ${isOpenAlert ? "ml-[30rem]" : "ml-[5rem]"}`}>
      <Treepopup setIsOpen ={setIsOpen} isOpen ={isOpen} refetch={refetchMileStones} parent_id={id}/>
      <FormHead  text='break your project into small pieses 🐱'  />
    <div id="treeWrapper" className='mx-auto ' style={{ width: '100%', height: '100%' }}>

      <Tree
       data={treeData} orientation='vertical'
      
        onNodeClick={(node) => {
          setIsOpen(true)
          
          setId(node.data?.id  as string)
          
         
        }}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        />
    </div>
    </FormContainer>
      </main>
    </>
  );
};

export default Page;