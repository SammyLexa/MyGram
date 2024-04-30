
import './App.css';
import ConteudoLateralEsquerda from './assets/conteudoLateralEsquerda/ConteudoLateralEsquerda.jsx'
import ConteudoCentral from './assets/conteudoCentral/ConteudoCentral.jsx'
import ConteudoLateralDireita from './assets/conteudoLateralDireita/ConteudoLateralDireita.jsx'

function App() {
  return (
    <>
      <ConteudoLateralEsquerda/>
      <ConteudoCentral/>
      <ConteudoLateralDireita/>
    </>
  );
}

export default App;
