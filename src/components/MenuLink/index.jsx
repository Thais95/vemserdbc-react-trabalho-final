import { Link, useLocation } from "react-router-dom";
import styles from  './MenuLink.module.css';

function MenuLink({children, to}) {
    const location = useLocation();

    return(
        <Link className={`
            ${styles.link}
            ${location.pathname === to ? styles.linkActive : ''}
        `} to={to}>
            {children}
        </Link>
    )
}

export default MenuLink;