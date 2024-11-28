import { useState } from "react";
import image1 from "./assets/cat1.jpg";
import image2 from "./assets/cat2.jpg";
import image3 from "./assets/cat3.jpg";
import image4 from "./assets/cat4.jpg";
import "./App.css";

function App() {
  const [telaCheia, setTelaCheia] = useState(false);
  const [imagemAtual, setImagemAtual] = useState(null);
  const handleClick = (imagem) => {
    setTelaCheia(true);
    setImagemAtual(imagem);
  };
  const handleClose = () => {
    setTelaCheia(false);
  };
  return (
    <div className="app">
      <div className="galeria">
        <figure>
          <img src={image1} alt="" onClick={() => handleClick(image1)} />
        </figure>
        <figure>
        <img src={image2} alt="" onClick={() => handleClick(image2)} />
        </figure>
        <figure>
          <img src={image3} alt="" onClick={() => handleClick(image3)} />
        </figure>
        <figure>
        <img src={image4} alt="" onClick={() => handleClick(image4)} />
        </figure>
      </div>
      {telaCheia && (
      <div className="tela-cheia">
        <img src={imagemAtual} alt="" />
        <button onClick={handleClose}>Fechar</button>
      </div>
      )}
    </div>
  );
}
export default App;