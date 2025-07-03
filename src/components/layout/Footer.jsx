import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
   <footer className={styles.footer}>
    <ul className={styles.social_list }>
      <li>
        <FaTwitter/>
      </li>
         <li>
        <FaInstagram/>
      </li>
         <li>
        <FaLinkedin/>
      </li>
    </ul>
    <p className={styles.copy_right }>
      <span>Costs</span>&copy; 2025
      </p>
   </footer>
  );
}
