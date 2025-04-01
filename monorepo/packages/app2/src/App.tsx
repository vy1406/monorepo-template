import { parsePartner } from "scs-contracts"

function App() {

  return (
    <div>
      {parsePartner({ id: 1, name: "John Doe" }).name}
    </div>
  )
}

export default App
