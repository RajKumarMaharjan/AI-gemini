import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div className="flex">
    <div>
    <Sidebar/>
    </div>
    <div className="flex-1">
    <Main/>
    </div>
    </div>
  )
}

export default App