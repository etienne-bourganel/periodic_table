import React, { useState, useEffect } from "react"

function Element() {
  const [data, setData] = useState([])
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)
        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='Element'>
      {data && data.length > 0 && data.map((item) => <p>{item.name}</p>)}
    </div>
  )
}

export default Element
