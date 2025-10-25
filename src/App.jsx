import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

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