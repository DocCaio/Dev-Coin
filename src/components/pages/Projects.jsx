import styles from './Projects.module.css';
import { Container } from '../layout/Container';
import { Message } from '../layout/Message';
import { LinkButton } from '../layout/LinkButton';
import { Loading } from '../layout/Loading';
import { data, useLocation } from 'react-router';
import { ProjectCards } from '../project/ProjectCards';
import { useState, useEffect } from 'react';

export const Projects = () => {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState([false])
    const [projectMensage, setProjectMensage] = useState('')
  const location = useLocation();
  let message = '';

  if (location.state) {
    message = location.state.message;
  }

useEffect(() => {
  setTimeout(() => {
    fetch("http://localhost:5000/projects", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      setProjects(data);
      setRemoveLoading(true);
    })
    .catch((err) => console.log(err));
  }, 300);
}, []);

function removeProject(id) {
  fetch(`http://localhost:5000/projects/${id}`  ,{
method: 'DELETE',
headers: {

  'Content-Type': 'application/json'
},

  }).then(resp => resp.json())
  .then(data => {
    setProjects(projects.filter(projects => projects.id !== id))
    setProjectMensage('Projeto removido com sucesso!')
  })
    .catch(err => console.log(err))
} 




  return (
    <div className={styles.projeto_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos!</h1>
        <LinkButton to="/newprojects" text="Criar Projeto" />
     
      </div>
          {message && <Message type="success" msg={message} />}
          {message && <projectMensage type="success" msg={projectMensage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => {
            <ProjectCards
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category?.name}
              key={project.id}
              handleRemove={removeProject}

            />
          })}
        {removeLoading && <Loading />}
        {removeLoading && projects.length === 0 &&
         (<p>projetos cadastrados</p>)
        }
      </Container>
    </div>
  );
}
