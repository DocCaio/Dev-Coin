
import PropTypes from 'prop-types';
import Item from './Item.jsx';

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985} />
                <Item marca='Fiat' ano_lancamento={1964} />
                <Item marca='Renaut' />
                <Item marca='Chevrolt' ano_lancamento={1999} />


            </ul>



        </>
    )
}

export default List;