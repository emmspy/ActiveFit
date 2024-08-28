import Navbar from "@/scenes/navbar/index"
import { useState } from "react"


function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <>
      <div className="app bg-main-white">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </>
  )
}

export default App
