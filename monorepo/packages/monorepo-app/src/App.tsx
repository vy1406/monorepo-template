import { Button } from "@my-custom-scope/private-lib"
import { parseDummyUtil } from "monorepo-external-lib-public"

function App() {

  return (
    <div>
      <Button label="lol ?" />
      {parseDummyUtil({ id: 1, name: "John Doe s" }).name}
    </div>
  )
}

export default App
