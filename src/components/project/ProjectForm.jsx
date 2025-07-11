import { useEffect, useState } from 'react';
import { Input } from '../Form/input';
import { Select } from '../Form/Select';
import { SubmitButton } from '../Form/SubmitButton';
import styles from './ProjectForm.module.css';



export const ProjectForm = ({handleSubmit ,  btnText ,projectData}) => {

    const [categories , setCategories] = useState([])
    const [project , setProject ] = useState(projectData || {})
     
    useEffect(() => {
        
    fetch("http://localhost:5000/categories" , {
        method: "GET",
        headers: {
            'Content-Type':'aplication/json'
        },
    },[])

    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    })

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }


    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    }

    function handleCategory(e) {
        setProject({...project, category: {
           id: e,target,value,
           name: e.target.options[e.target.selectedIndex].text,
        },          
        })
        console.log(project)
    }

    return (
        <form onSubmitCapture={submit} className={styles.form}>
            <Input
            type="text" 
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            
            />
           <Input
            type="number" 
            text="Orçamento do projeto"
            name="busget"
            placeholder="Insira o orçamento total"
            handleOnChange={handleCategory}
            value={project.budget ? project.budget : ''}
            
            />

           <Select 
           name="category_id" 
           text="Selecione a categoria"
           options={categories}
           handleOnChange={handleCategory}
           value={project.category ? project.category.id: ''}
            
           />

            <SubmitButton text={btnText}/>

        </form>
    );
}
