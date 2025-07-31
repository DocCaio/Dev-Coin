import { BsFillTrashFill } from 'react-icons/bs';
import styles from '../project/ProjectCard.module.css';

function ServiceCard({ id, name, cost, description, hndleRemove }) {

    const remove = (e) => {

    }


    return (
        <div className={styles.projrct_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total</span>R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.projrct_card_actions}></div>
            <button onClick={remove}>
                <BsFillTrashFill />
                Excluir

            </button>

        </div>
    )
}

export default ServiceCard;