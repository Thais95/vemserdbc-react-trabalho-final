import imagemErro from '../../assets/imagem-error'
import {Link} from 'react-router-dom'
import styles from './Erro.module.css'
function Erro(){
    return(
        <div className={styles.fundo}>
            <div className={styles.error}>
            <h1>ERROR - 404</h1>
            <p>The page you requested could not be found </p>

            <Link className={styles.btn} to='/'>Return to Home</Link>
            </div>
            <div className={styles.imagemError}>
            <img className={styles.img} src={imagemErro} alt="Imagem" />
            </div>
        </div>
    )
}

export default Erro;