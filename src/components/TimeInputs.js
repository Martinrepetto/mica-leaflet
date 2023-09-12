import { Fragment } from "react";
import Control from "react-leaflet-custom-control";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startYear, endYear } from "./handleTimeChange";


const TimeInputs = () => {
  const time = useSelector(state => state.time.value)
  const dispatch = useDispatch()
  return (
    <Control position="bottomleft">
      <Fragment>
        <input className="numimput" type="number" defaultValue={1810} onChange={(e)=> dispatch(startYear((e.target.value)*1))}></input>
      </Fragment>
      <Fragment>
        <input className="numimput" type="number" defaultValue={1982} onChange={(e)=> dispatch(endYear((e.target.value)*1))}></input>
      </Fragment>
    </Control>
  );
};
export {TimeInputs}
