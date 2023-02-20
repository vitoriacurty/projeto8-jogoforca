export const Letras = () => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="letras-container">
            <div className="letra">
                {alfabeto.map(item => {
                    return <button key={item} disabled={true}>
                        {item.toUpperCase()}
                    </button>
                }
                )}
            </div>
        </div>
    )
}