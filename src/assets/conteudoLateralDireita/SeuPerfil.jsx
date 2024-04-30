
import FotoPerfil from '../../assets/img/img5.png'
import './SeuPerfil.css'
function SeuPerfil() {
  return (
    <div className='SeuPerfil'>
        <div className='containerImg'>
            <img src={FotoPerfil}/>
        </div>
        <div className='containerNome'>
          <h3>Megan0123
</h3>
          <h4>Megan Hunter Julls</h4>
        </div>
        <div className='containerButton'>
          <button>Mudar</button>
        </div>
    </div>
  )
}

export default SeuPerfil