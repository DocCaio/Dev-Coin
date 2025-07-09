import { data, useNavigate } from 'react-router';
import { ProjectForm } from '../project/ProjectForm';
import styles from './NewProjects.module.css';


export const NewProject = () => {

  const history = useNavigate();

  function creatPost(project) {
    project.cost = 0
    project.services = []

    fetch("http:/localhost;5000/projetcs" , {
      method: "GET",
      headers: {
        "Content-Type": 'aplication/json',
      },
      body: JSON.stringify(project),
    }).then((repo => repo.json())
      .then((data) => {
        console.log(data)
      })    
    ).catch(err => console.log(err))
  }


  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Criar seu projeto para depois adcionar</p>
      <ProjectForm handleSubmit={creatPost} btnText="Criar Projeto"/>
    </div>
  );
}
