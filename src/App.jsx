import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useEffect, useState } from "react";

function App () {
  return(
    <>   
    <RecoilRoot>
      <Count/>
    </RecoilRoot>
    </>
  )
}
export default App;


function Count() {
  console.log(`Count render`)
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)

  return (
    <div>
      <h1>{count}</h1>
      <EvenSelector/>
    </div>
  )
}

function EvenSelector() {
  const isEven = useRecoilValue(evenSelector)

  return (
    <div>
      {isEven ? "It is even" : null }
    </div>
  )
}

function Buttons(){
  // const [count ,setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  console.log(`buttons-rerenders`)
  return (
    <div>
      <button
        onClick={() => setCount(prev => prev + 1)}
      >Increase
      </button>
      <button
        onClick={() => setCount(prev => prev - 1)}
      >Decrease
      </button>
    </div>
  )
}


// using context api

// import { createContext, useContext, useState } from 'react'

// export const countContext = createContext()

// function App () {
//   const [count , setCount] = useState(0)
//   return (
//     <countContext.Provider value={{ count, setCount}}>
//       <Count/>
//     </countContext.Provider>
//   )
// }

// export default App;


// function Count () {
//   console.log(`Count rendered`)
//   return (
//     <div>
//       <CountRenderer/>
//       <Buttons/>
//     </div>
//   )
// }

// function CountRenderer () {
//     const {count} = useContext(countContext)
//   return (
//     <div>
//       <h1>
//         {count}
//       </h1>
//     </div>
//   )
// }

// function Buttons () {
//   const {setCount} = useContext(countContext)
//   return (
//     <div>
//       <button
//       onClick={() => setCount(prev => prev + 1)}
//       >
//         Increase
//       </button>
//       <button
//       onClick={() => setCount(prev => prev - 1)}
//       >
//         Decrease
//       </button>
//     </div>
//   )
// }


