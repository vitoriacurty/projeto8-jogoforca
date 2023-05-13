import palavras from "./palavras"
import alfabeto from "./alfabeto"

import forca0 from "./assets/forca0.png"

export default function App() {
  return (
    <>
      <div className="game-container">
        <div className="game-left">
          <img src={forca0} alt="imagem forca" />
        </div>

        <div className="game-right">
          <button>
            <p className="p-game">Escolher Palavra</p>
          </button>
          <h1>_ _ _ _ _ _ _ _ _</h1>
        </div>

      </div>
      <div className="letras-container">
        <div className="letra">
          {alfabeto.map((item) => <button>{item}</button>)}
        </div>
      </div>
    </>
  )
}
