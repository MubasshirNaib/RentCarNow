// LoginDataProvider.js
import React, { useState } from 'react';
import loginContext from './loginContext';

const LoginState = ({ children }) => {
  const [loginData, setLoginData] = useState({ email: ''});

  return (
    <loginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </loginContext.Provider>
  );
};

export default LoginState;
