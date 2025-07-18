import styles from './Select.module.css';


export const Select = ({ text , options , name ,handleOnChange , value}) => {
    return (
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        
        <select 
        name={name} 
        id={name} 
        onChange={handleOnChange} 
        value={value || ''}>

            <option>Seçecione uma opção</option>
            {options.map((option)=> {
                <option 
                value={option.id}
                key={option.id}                
                >
                {option.name}
                </option>

            })}


        </select>
              
        
    </div>
    );
}
