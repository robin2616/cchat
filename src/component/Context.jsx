import React from "react";
import { createContext, useState } from "react";
import { useEffect } from "react";



const Mycontext = createContext();

function Ch({ children }) {

  
  const [name, updatename] = useState(() => {
    const b = localStorage.getItem('name');
    return b ? JSON.parse(b) : "";
  });

  function addname(u) {
    updatename(u)
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  return (<>
    <Mycontext.Provider value={{name,addname }}>
      {children}
    </Mycontext.Provider>

  </>)
}

export { Ch, Mycontext }
