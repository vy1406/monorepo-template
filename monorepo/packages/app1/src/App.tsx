import { Button } from "@my-scope/scs-ui"
import { parsePartner } from "scs-contracts"

function App() {

  return (
    <div>
      <Button label="lol ?" />
      {parsePartner({ id: 1, name: "John Doe s" }).name}
    </div>
  )
}

export default App
