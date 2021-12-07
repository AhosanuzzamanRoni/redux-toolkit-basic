import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from '../actions'

const Auth = () => {
    const [phone, setPhone] = useState();
    const dispatch = useDispatch();

    return (
        <div>
        <h3>Please Login... </h3>
        <input
          type="number"
          name="phone"
          id="phone"
          value={phone}
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={() => dispatch(loginAction(phone))}>Login</button>
      </div>
   
    );
};

export default Auth;