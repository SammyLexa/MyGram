import Stories from "./stories/Stories"
import Post from "./feeds/Feeds"
import './ConteudoCentral.css'
import Storie1 from '../../assets/img/img5.png'
import Storie2 from '../../assets/img/img8.png'
import Storie3 from '../../assets/img/img7.png'
import Storie4 from "../../assets/img/img6.png"
import Storie5 from '../../assets/img/img9.png'
import Storie6 from '../../assets/img/img4.png'
import Storie7 from '../../assets/img/img3.png'
import PostFoto from '../../assets/img/img5.png'
import PostFoto2 from '../../assets/img/img4.png'

function ConteudoCentral() {
  return (
    <div className="conteudoCentral">
      <div className="containerStories">
        <Stories fotoStorie={Storie1}
          nomeStorie='Megan0123'
        />
        <Stories fotoStorie={Storie2}
          nomeStorie='Fallenangel786' />
        <Stories fotoStorie={Storie3}
          nomeStorie='Brook_stel' />
        <Stories fotoStorie={Storie4}
          nomeStorie='Diana_Duna' />
        <Stories fotoStorie={Storie5}
          nomeStorie='AngelEstrogen' />
        <Stories fotoStorie={Storie6}
          nomeStorie='LovePurpl3' />
        <Stories fotoStorie={Storie7}
          nomeStorie='Yumico' />
      </div>
      <div className="containerPost">
        <Post fotoUser={Storie1} title='Megan0123•' imgPostagem={PostFoto} titledown='megan0123' titlepostagem='Amei essa make com essas luzes, me sentindo pretty!' />
        <Post fotoUser={Storie2} title='AngelEstrogen •' imgPostagem={PostFoto2} titledown='AngelEstrogen' titlepostagem='Um vicio? Tirar foto na frente do espelho, me sinto linda' />
      </div>
    </div>
  )
}

export default ConteudoCentral