import { Input } from '../Form/input';
import styles from './ProjectForm.module.css';


export const ProjectForm = () => {
    return (
        <form className={styles.form}>
            <Input
            type="text" 
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            
            />
            <div>
                <input type="number" placeholder="Insira o orçamento toal" />
            </div>

            <div>
                <select name='category_id'>
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>

            <div>
                <input type='submit' value="Criar projeto"/>
            </div>


        </form>
    );
}
