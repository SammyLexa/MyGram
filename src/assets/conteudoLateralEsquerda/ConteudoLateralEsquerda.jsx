import React from 'react'
import './ConteudoLateralEsquerda.css'
import  logo from "../img/logoMyGram.png"

function ConteudoLateralEsquerda() {
  return (
    <div>
      <div className="logoMyGram">
        <img src={logo} alt="Logo do MyGram" />
        
      </div>
      <div className="menu">

      </div>
    </div>
  )
}

export default ConteudoLateralEsquerda