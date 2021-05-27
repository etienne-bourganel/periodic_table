import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>🚧 Periodic Table of Elements under construction! 🚧</p>
        <a
          className='App-link'
          href='https://en.wikipedia.org/wiki/Periodic_table'
          target='_blank'
          rel='noopener noreferrer'
        >
          Periodic Table on Wikipedia
        </a>
      </header>
    </div>
  )
}

export default App
