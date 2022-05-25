import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const getId = (WappedComponet) => {
  return (props) => {
    let getId = { params: useParams() }
    let navigate = useNavigate()
    return <WappedComponet {...props} getId={getId} navigate={navigate} />
  }


}

export default getId