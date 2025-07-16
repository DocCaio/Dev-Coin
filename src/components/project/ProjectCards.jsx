
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import styles from './ProjectCards.module.css';


export const ProjectCards = ({id , name , budget ,category, handleRemove}) => {
  return (
    <div>
       <h4>{name}</h4>
       <p>
        <span>Orçamento:</span>R${budget}
       </p>
       <p className={styles.category_text}>
        <span></span>{category}
       </p>
       <div>
        <p>Editar</p>
        <p>Remover</p>
       </div>
    </div>
   
    
  )

}


