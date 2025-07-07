import { Input } from '../Form/input';
import { Select } from '../Form/Select';
import { SubmitButton } from '../Form/SubmitButton';
import styles from './ProjectForm.module.css';


export const ProjectForm = ({btnText}) => {
    return (
        <form className={styles.form}>
            <Input
            type="text" 
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            
            />
           <Input
            type="text" 
            text="Nome do projeto"
            name="name"
            placeholder="Insira o orçamento total"
            
            />

           <Select 
           name="category_id" 
           text="Selecione a categoria"/>

            <SubmitButton text={btnText}/>

        </form>
    );
}
