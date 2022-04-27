import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr />

            {
                categories.map(elemento => <GifGrid key={elemento} category={elemento} />)
            }
        </>
    )
}

export default GifExpertApp;