
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import styles from './ProjectCards.module.css';
import { Link } from 'react-router';


export const ProjectCards = ({id , name , budget ,category, handleRemove}) => {
  return (
    <div>
       <h4>{name}</h4>
       <p>
        <span>Orçamento:</span>R${budget}
       </p>
       <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span>{category}
       </p>
       <div className={styles.project_card_action}>
        <Link to={'/'}>
          <BsPencil/>
        Editar
        </Link>
        <button>
          <BsFillTrashFill/>
          Excluir
        </button>       
    
       </div>
    </div>
   
    
  )

}


