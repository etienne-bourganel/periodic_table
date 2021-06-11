import React, { useState, useEffect } from "react"
import Cell from "../Cell"

function Element() {
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
    <div className='Element'>
      {data &&
        data.length > 0 &&
        data.map((item) => <Cell element={item.name} />)}
    </div>
  )
}

export default Element
