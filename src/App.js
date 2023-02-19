import { Jogo } from "./components/jogo/Jogo";
import { Letras } from "./components/letras/Letras";
import palavras from "./palavras";

export default App;
function App() {
  const imagens = [
    { src: "./assets/forca0.png" },
    { src: "./assets/forca1.png" },
    { src: "./assets/forca2.png" },
    { src: "./assets/forca3.png" },
    { src: "./assets/forca4.png" },
    { src: "./assets/forca5.png" },
    { src: "./assets/forca6.png" }
  ]

  return (
    <>
      {imagens.map(item =>
        < Jogo src={item.src} />
      )
      }

      <Letras />
    </>
  );
}