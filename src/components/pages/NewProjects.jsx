import { ProjectForm } from '../project/ProjectForm';
import styles from './NewProjects.module.css';

export const NewProject = () => {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Criar seu projeto para depois adcionar</p>
      <ProjectForm/>
    </div>
  );
}
