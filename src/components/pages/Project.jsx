import styles from 'Project.module.css';
import {data, useParams} from 'react-router-dom';
import {useState , useEffect} from 'react'

export const Project = () => {

  const {id} = useParams()
  const  [project,setProject] = useState([])  

  useEffect(() => {
    fetch(`http://localhost:5000/project/${id}` , {
        method: "GET",         
        headers: {
        'Content-Type': 'application/json',
        },
    }).then(resp => resp.json())
    .then((data) => {
        setProject(data)
    })

    .catch((err) => console.log)
  },[id])


    return (
      
        <>
        <p>{project.name}</p>
        </>

    )

    
        
    
}
