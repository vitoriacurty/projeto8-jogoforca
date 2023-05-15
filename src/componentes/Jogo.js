import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export const Jogo = ({ wrong, show, onClick, disabled, win, gameOver }) => {
  const image = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

  return (
    <div className="game-container">
    <div className="game-left">
      <img src={image[wrong]} alt="imagem forca" data-test="game-image"/>
    </div>

    <div className="game-right">
      <button onClick={onClick} data-teste="choose-word">
        <p className="p-game">Escolher Palavra</p>
      </button>
      <h1 style={gameOver ? win ? { color: "green" } : { color: "red" } : { color: "black" }} data-test="word">{(!disabled || gameOver) ? (show ? show.join(" ") : "") : ""}</h1>
    </div>
  </div> 
  )
} 