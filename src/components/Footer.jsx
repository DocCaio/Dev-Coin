import {FaTwitter , FaInstagram , FaWhatsapp} from 'react-icons/fa';
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={styles.socialList}>
                <li><FaInstagram/></li>
                <li><FaTwitter/></li>
                <li><FaWhatsapp/></li>
            </ul>
            <p>Nossa redes</p>
        </footer> 
    )

}

export default Footer;