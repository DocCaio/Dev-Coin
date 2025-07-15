import styles from './Projects.module.css';
import { Container } from '../layout/Container';
import { Message } from '../layout/Message';
import { LinkButton } from '../layout/LinkButton';
import { useLocation } from 'react-router';

export const Projects = () => {
  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.projeto_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos!</h1>
        <LinkButton to="/newprojects" text="Criar Projeto"/>
        {message && <Message type="success" msg={message} />}
      </div>
      <Container customClass="start">
        <p>Projetos...</p>        
      </Container>
    </div>
  );
}
