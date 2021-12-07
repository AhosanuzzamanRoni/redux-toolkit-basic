import React, { useEffect } from 'react';

import { getDataAction, logOutAction } from '../actions';
import { useDispatch, useSelector } from "react-redux";

const BasePage = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
     dispatch(getDataAction())
    }, [])
     


    return (
        <div>
      
        WELCOME <p> Phone: {auth.phone}</p>
        <p> Title :{auth.data.title} </p>
        <p> ID :{auth.data.id} </p>
        <button onClick={()=>dispatch(logOutAction())} > LOGOUT</button>
      </div>
    );
};

export default BasePage;