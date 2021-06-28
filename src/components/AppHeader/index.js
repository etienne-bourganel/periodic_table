import React from "react"
import "./index.css"

const AppHeader = () => {
  return (
    <header className='App-header'>
      <a
        className='Title'
        href='https://en.wikipedia.org/wiki/Periodic_table'
        target='_blank'
        rel='noopener noreferrer'
      >
        Periodic Table of Elements
      </a>
      <div className='credits'>
        Made by{" "}
        <a
          className='creditsName'
          href='https://github.com/etienne-bourganel'
          target='_blank'
          rel='noopener noreferrer'
        >
          Etienne Bourganel
        </a>
      </div>
    </header>
  )
}

export default AppHeader
