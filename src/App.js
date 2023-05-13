import palavras from "./palavras"
import { Jogo } from "./componentes/Jogo"
import { Letras } from "./componentes/Letras"
import { useState } from "react"

export default function App() {
  const [wrong, setWrong] = useState(0)
  const [word, setWord] = useState([])
  const [show, setShow] = useState([])

  function button() {
    setWrong(0)
    const newWord = palavras[Math.floor(Math.random() * (palavras.length - 1))]
    setWord(newWord.split(""))
    setShow(Array(newWord.length).fill(' _'))
    console.log(newWord)

  }

  return (
    <main>
      <Jogo wrong={wrong} show={show} onClick={() => button()} />
      <Letras />
    </main>
  )
}
