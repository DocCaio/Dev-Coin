import { Message } from '../layout/Message';
import styles from './Project.module.css';
import { useLocation } from 'react-router-dom';


export const Project = () => {
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    return (
    <div className={styles.form_control}>

   {message &&  <Message type="sucess" msg="Alguma mensagem"/>  }
        
    </div>
    );
}
