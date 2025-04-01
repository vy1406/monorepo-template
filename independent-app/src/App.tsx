import { parseDummyUtil } from "monorepo-external-lib-public"

function App() {

  return (
    <div>
      <p>External app</p>
      {parseDummyUtil({ id: 1, name: "importing ... " }).name}
    </div>
  )
}

export default App
