import styles from '../project/ProjectForm.module.css';

import { Input } from '../form/Input';
import { useState } from 'react';
import { SubmitButton } from '../form/SubmitButton';

export const ServiceForm = ({handleSubmit , btnText , projectData}) => {

    const [service , setService] = useState({})


    function submit() {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    function handleChange(e) {
        setService({...service,[e.target.name]: e.target.value})

    }

  return (
    <form onSubmit={submit} className={styles.form}>
       <Input
       type='text'
       text='Nome do Serviço'
       name='name'
       placeholder='Insira o nome do serviço'
       handleOnChange={handleChange}       
       />

      <Input
       type='number'
       text='Custo do serviço'
       name='cost'
       placeholder='Insira ovalor total'
       handleOnChange={handleChange}       
       />
        

      <Input
       type='text'
       text='Descrição do Serviço'
       name='description'
       placeholder='Descreva o serviço'
       handleOnChange={handleChange}       
       />

       <SubmitButton text={btnText}/>
        
        

    </form>
  );
}
