import "./App.css"
import React, { useState, useEffect } from "react"
import Table from "./components/Table"
import UnderConctruction from "./components/UnderConstruction"

function App() {
  const [data, setData] = useState([])

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        setData(myJson)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      <UnderConctruction />
      <Table data={data} />
    </div>
  )
}

export default App
