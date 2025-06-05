
import PropTypes from 'prop-types';
import Itens from './Item.jsx';

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Itens marca='Ferrari' ano_lancamento={1985} />
                <Itens marca='Fiat' ano_lancamento={1964} />
                <Itens marca='Renaut' />
                <Itens marca='Chevrolt' ano_lancamento={1999} />


            </ul>



        </>
    )
}

export default List;