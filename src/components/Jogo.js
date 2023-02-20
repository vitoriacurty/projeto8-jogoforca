
export const Jogo = ({ wrong, show, onClick, disabled, gameOver, win }) => {
  const image = [
    "../assets/forca0.png",
    "../assets/forca1.png",
    "../assets/forca2.png",
    "../assets/forca3.png",
    "../assets/forca4.png",
    "../assets/forca5.png",
    "../assets/forca6.png",
  ]

  return (
    <div className="game-container">
      <div className="game-left">
        <img src={image[wrong]} alt="imagem forca" />
      </div>

      <div className="game-right">
        <button onClick={onClick}>
          <p className="p-game">Escolher Palavra</p>
        </button>
        <h1 style={gameOver ? win ? { color: "green" } : { color: "red" } : { color: "black" }}>
          {(!disabled || gameOver) ? (show ? show.join(" ") : "") : ""}
        </h1>
      </div>
    </div>
  )

}