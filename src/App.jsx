import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Ch } from "./component/Context";
import Mess from "./component/Mess";
import Home from "./component/Home";
function App() {
return(<>

<Ch>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/mess" element={<Mess/>}></Route>
</Routes>
</BrowserRouter>


</Ch>
   
    </>
  )
}

export default App