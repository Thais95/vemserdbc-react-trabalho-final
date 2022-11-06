import imagemErro from '../../assets/imagem-error.png'
import { Link } from 'react-router-dom'
import styles from './Erro.module.css'
function Erro() {
    return (
        <div className={styles.fundo}>
            <div className={styles.error}>
                <h1>ERROR - 404</h1>
                <p>Nada para ver por aqui.
                    <br /><br />
                    A página solicitada não foi encontrada.</p>

                <Link className={styles.btn} to='/'>Volte ao Início</Link>
            </div>
            <div className={styles.imagemError}>
                <img className={styles.img} src={imagemErro} alt="Imagem" />
            </div>
        </div>
    )
}

export default Erro;