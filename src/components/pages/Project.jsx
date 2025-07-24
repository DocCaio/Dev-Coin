import styles from 'Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';

export const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/project/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)

  }

  return (
    <>
      {project ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>          
            
            <h1>Project: {project.name}</h1>
            <button className={styles.btn}
            onClick={toggleProjectForm}>
              {!showProjectForm ? 'Editar projeto' : 'Fechar'}
            </button>
            {!showProjectForm ? (
              <div className={styles.project_info}>
                <p>
                  <span>Categpria:</span>{project.category.name}
                </p>
              </div>
            ): (
              <div className={styles.project_info}>
                 <p>
                  <span>Total de orçamento:</span>R${project.budget}
                 </p>
                  <p>
                  <span>Total de utilizado:</span>R${project.cost}
                 </p>
              </div>
            )}
            </div>
          
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
