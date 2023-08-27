import React from 'react'

const ChildComponent = ({OnDataFromChild}) => {
    const SendDataToParent=()=>{
        const data = "login";
        OnDataFromChild(data);
    }

  return (
    <div>
    ChildComponent
    <button onClick={SendDataToParent}>Send</button>
    </div>
  )
}

export default ChildComponent