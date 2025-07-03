import styles from './Home.module.css';
import savings from '../../img/savings.svg'

import { LinkButton } from '../layout/LinkButton';

export const Home = () => {
  return (
    <section className={styles.home_constainer}>
      <h1>Bem-vindo ao <span>Coats</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo !</p>
      
      <LinkButton to="/newprojects" text="Criar Projeto"/>
      <img src={savings} alt='Costs'/>
    </section>
  );
}
