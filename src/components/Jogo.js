
export const Jogo = (props) => {
    return (
        <div className="game-container">
            <div className="game-left">
                <img src={props.src} alt="imagem forca" />
            </div>

            <div className="game-right">
                <button><p className="p-game">Escolher Palavra</p></button>
                <h1>quarentena</h1>
            </div>
        </div>
    )

}