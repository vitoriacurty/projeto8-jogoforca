export const Letras = ({disabled, pickedLetters, handleButton}) => {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div className="letras-container">
      <div className="letra">
        {alfabeto.map(item => {
          const isPicked = pickedLetters.includes(item);
          return <button key={item} onClick={() => handleButton(item)} disabled={disabled || isPicked} data-test="letter">
            {item.toUpperCase()} 
          </button>
        })}
      </div>
    </div>
  )
}