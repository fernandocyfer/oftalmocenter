import Image from 'next/image'
import {Button} from '../components/Button/Button'
import styles from '../styles/404.module.sass'

function NotFound() {
  return (
    <div className={`container-sm ${styles.notFound}`}>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-9 d-flex justify-content-center flex-column ">
          <div className={`d-flex ${styles.notFound_title}`}>
            <Image alt="image-alt" title="image-title" src={''} />
          </div>
          <h2>OPS!</h2>
          <h3>Não foi possível encontrar a página :(</h3>
          <h5>
            A página que você está procurando não pôde ser encontrada no
            servidor.
          </h5>
          <div
            style={{width: '400px',margin: '0 auto',textAlign: 'center'}}
          >
            <Button title="Voltar para a página inicial" id={1} to={'/'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
