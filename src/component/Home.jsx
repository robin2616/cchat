import React from 'react'
import { useContext, useState } from 'react'
import { Mycontext } from './Context';



function Home() {
    const { addname } = useContext(Mycontext)
    const [a, b] = useState()
    return (<>
        <div  class="form-floating mb-3 w-[200px] absolute top-[230px] left-[38%] border-blue-500 border-2 rounded-xl">
            <input  type="string" class="form-control" value={a} onChange={(e) => { b(e.target.value) }} id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Guchi Puchi ki Mummy</label>
        </div>

        <button type="button" class="btn btn-success absolute top-[300px] left-[42%] w-[100px]" onClick={async () => {


            const items = { password: a }

            const response = await fetch('https://node-mongo-pz0o.onrender.com/fetch', {
                method: 'POST',
                body: JSON.stringify(items),
                headers: { 'Content-Type': 'application/json' }
            })

            const findedone = await response.json()
            console.log(findedone.at(0))
            addname(findedone.at(0).name)
            window.open("/mess", "_self")

        }}>Login</button>
    </>)
}
export default Home