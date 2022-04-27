import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types'


const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category)

    return (
        <div>
            <h3>{ category }</h3>
            { loading && <p>Cargando...</p> }

            <div className='content'>
            {
                images.map(({ id, title, url }) =>
                    <GifGridItem key={id} url={url} tittle={title} />
                )
            }
            </div>
        </div>
    );
}

export default GifGrid;

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}