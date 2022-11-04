import MenuLink from 'components/MenuLink';
import styles from './Menu.module.css';

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/Episodios">
                    Episódios
                </MenuLink>
                <MenuLink to="/Feedback">
                    Feedback
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;