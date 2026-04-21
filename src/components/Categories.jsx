import { useEffect, useState } from "react"
import CardBtn from "./CardBtn";

function Categories({selectCategoryUrl}) {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(res => {setList(res)});
    })

    return (
        <>
        {list.map((e) => <CardBtn key={e.slug} url={e.url} selectCategoryUrl={selectCategoryUrl} title={e.name} />)}
        </>


    )
}

export default Categories
