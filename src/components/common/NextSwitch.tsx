import  { useState } from "react";
import Switch from "react-switch";

function NextSwitch() {
    const [checked, setChecked] = useState(false);

    const handleChange = (checked : boolean) => {
        setChecked(checked);
      };

  return (
    <div className='w-[90%] h-[200px] m-p border  flex flex-col justify-center items-center gap-y-8'>
        <p className="text-center text-gray-400 text-md ">if you have finisshed the work with this phase make sure to switch the betton below so you ca have access to the next phase</p>
        <Switch
         checked={checked} 
        onChange={handleChange}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        height={15}
        width={48}
        className="react-switch"
        id="material-switch"
        />
    </div>
  )
}

export default NextSwitch