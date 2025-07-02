import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
   <footer>
    <ul>
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
    <p><span>Costs</span>&copy; 2025</p>
   </footer>
  );
}
