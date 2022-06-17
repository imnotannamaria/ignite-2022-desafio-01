import styles from './Header.module.css';
import logo from '../assets/FullLogo.svg'

export function Header(){
    return(
        <>
            <header className={styles.header}>
                <img src={logo} alt="Logo do site" />
            </header>
        </>
    )
}