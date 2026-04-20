export default function CardBtn({ title, getCats}) {
    return (
        <>
            <button 
            className="catBtn"
             onClick={() => 
                getCats(`https://dummyjson.com/products/category/${title}`)}
             >
                {title}
            </button>
        </>
    )
}