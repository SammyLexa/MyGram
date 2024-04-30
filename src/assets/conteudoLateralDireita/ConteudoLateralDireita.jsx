

import './ConteudoLateralDireita.css'
import '../../assets/conteudoLateralDireita/SugestoesPessoas.css'
import SeuPerfil from './SeuPerfil'
import SugestoesPessoas from './SugestoesPessoas'
import InfoMeta from './InfoMeta'
import Perfil1 from '../../assets/img/img7.png'
import Perfil2 from "../../assets/img/img6.png"
import Perfil3 from '../../assets/img/img9.png'
import Perfil4 from '../../assets/img/img4.png'
import Perfil5 from '../../assets/img/img3.png'

function ConteudoLateralDireita() {
  return (
    <div className='ConteudoLateralDireita'>
        <div className='containerContentDireita'>
            <SeuPerfil/>
        <div className='SugestoesPessoas'>
            <div className='topSide'>
                <p>Sugestões para você</p>
                <button>Ver tudo</button>
            </div>
            <div className='bottomSide'>
                <SugestoesPessoas imgPerfil={Perfil1} nome ='Corinthiano' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil2}  nome ='JojoFAG' acao='Seguido(a) por Tutu' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil3}  nome ='Casal Amoroso' acao='Sugestões para você' seguir='Seguir' />
                <SugestoesPessoas imgPerfil={Perfil4} nome ='i<3Skate' acao='Seguido(a) por Tony Hawk' seguir='Seguindo' />
                <SugestoesPessoas imgPerfil={Perfil5}  nome ='Fallen' acao='Seguido(a) Por Gabriel' seguir='Seguindo'/>
            </div>   
        </div>
        <InfoMeta/>
    </div>
  
    </div>
  )
}

export default ConteudoLateralDireita