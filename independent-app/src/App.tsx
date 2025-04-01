import { parseDummyUtil } from "monorepo-external-lib"

function App() {

  return (
    <div>
      <p>External app</p>
      {parseDummyUtil({ id: 1, name: "John Doe s" }).name}
    </div>
  )
}

export default App
