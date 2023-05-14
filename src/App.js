import palavras from "./palavras"
import { Jogo } from "./componentes/Jogo"
import { Letras } from "./componentes/Letras"
import { useState } from "react"

export default function App() {
  const [wrong, setWrong] = useState(0)
  const [word, setWord] = useState([])
  const [show, setShow] = useState([])
  const [pickedLetters, setPickedLetters] = useState([])
  const [disabled, setDisabled] = useState(true)

  function button() {
    setWrong(0)
    setDisabled(false)
    const newWord = palavras[Math.floor(Math.random() * (palavras.length - 1))]
    setWord(newWord.split(""))
    setShow(Array(newWord.length).fill(' _'))
    setPickedLetters([])
    console.log(newWord)
  }

  function handleButton(item) {
    setPickedLetters([...pickedLetters, item])

    const normalize = word.join("").normalize('NFD').replace(/[\u0300-\u036f]/g, "").split("")
    if (normalize.includes(item.toLowerCase())) {
      let newShow = [...show];
      normalize.forEach((letter, pos) => {
        if (item === letter)
          newShow[pos] = word[pos]
      })
      setShow(newShow)
    } else {
      const newWrong = wrong + 1
      setWrong(newWrong)
    }
  }

return (
  <main>
    <Jogo wrong={wrong} show={show} onClick={() => button()} disabled={disabled} />
    <Letras pickedLetters={pickedLetters} handleButton={handleButton} disabled={disabled} />
  </main>
)
}
