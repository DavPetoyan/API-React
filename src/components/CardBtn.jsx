export default function CardBtn({ title, url, selectCategoryUrl }) {
    return (
        <>
            <button className="catBtn" onClick={() => selectCategoryUrl(url)} >
                {title}
            </button>
        </>
    )
}