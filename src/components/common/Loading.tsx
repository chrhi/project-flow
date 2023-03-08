import CircularProgress from '@mui/material/CircularProgress';
import {loading_Reducer} from '~/store/app-reducer/loadingReducer'

export   function Loading() {

    const is_loading = loading_Reducer( state => state.is_loading)
    
  return (
    <div className={`${is_loading ? "absolute" : "hidden"} z-[30000] top-0 bottom-0 left-0 right-0 bg-white bg-opacity-60 flex justify-center items-center`}>
        <CircularProgress disableShrink />
    </div>
  )
}

