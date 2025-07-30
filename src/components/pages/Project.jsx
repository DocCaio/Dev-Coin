import {parse, v4 as uuidv4} from 'uuid';

import styles from './Project.module.css';
import { data, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loading } from '../layout/Loading';
import { Mensage } from '../layout/Message';
import { Container } from '../layout/Container';
import { ProjectForm } from '../project/ProjectForm';
import { ServiceForm } from '../service/ServiceForm';

export const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null); 
  const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setServiceForm] = useState(false);
  const [mensage , setMensage] = useState();
  const [type , setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/project/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => setProject(data))  
    }, 300);
  }, [id]);

  function editPost(project) {  
    setMensage('')  
    if (project.budget < project.cost) {
      setMensage('O orçamento não pode ser menos queo custo do projeto !')
      setType('error')
      return false

    }

      fetch(`http://localhost:5000/project/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProject),
      })
        .then(resp => resp.json())
        .then((data) => {
          setProject(data);
          setShowProjectForm(false);
          setMensage('Projeto atualizado !')
          setType('success')
        })
        .catch(err => console.log(err));
    
  }

  function createService(project) {

    const lastService = project.services[project.services.lenght - 1]
    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    if(newCost > parseFloat(project.budget)) {
      setMensage('Orçamento ultrapassado, verifique o valor do serviço')
      setType('error')
      project.services.pop()
      return false

      project.cost = newCost

      fetch(`http://localhost:5000/project/${project.id}` , {
        method: 'PATCH',
         headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify(project),
      }).then((resp) => resp.json())
        .then((data)=> {
          console.log(data)

        })
      .catch(err => console.log(err))
    }

  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

    function toggleServiceForm() {
    setServiceForm(!showServiceForm);
  }

  return (
    <>
      {project ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {mensage && <Mensage type={type} msg={mensage}/>  }
            <div className={styles.details_container}>
              <h1>Project: {project.name}</h1>
              <button
                className={styles.btn}
                onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span>{project.category.name}
                  </p>
                  <p>
                    <span>Total de orçamento:</span> R${project.budget}
                  </p>
                  <p>
                    <span>Total de utilizado:</span> R${project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adcione um serviço:</h2>
                 <button
                className={styles.btn}
                onClick={toggleServiceForm}>
                {!showServiceForm ? 'Adicionar servoço' : 'Fechar'}
              </button>
              <div className={styles.project_info}>
                {showProjectForm && (
                 <ServiceForm
                 handleSubmit={createService}
                 btnText="Adicionar Serviço"
                 projectData={project}
                 />
                )}

              </div>
              <h2>Serviço</h2>
              <Container customClass="start">
                <p>Itens do serviço</p>

              </Container>

            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
