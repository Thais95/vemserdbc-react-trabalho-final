import MenuLink from 'components/MenuLink';
import styles from './Menu.module.css';

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/episodios">
                    Episódios
                </MenuLink>
                <MenuLink to="/trilha-sonora">
                    Trilha Sonora
                </MenuLink>
                <MenuLink to="/newsletter">
                    Newsletter
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;