export default function Card({ title, img, price }) {
    return (
        <>
            <div className="card">
                <div className="cardText">
                    <p className="cardTitle">{title}</p>
                    <a className="cardPrice">${price}</a>
                </div>
                <div className="cardImage">
                    <img src={img} alt="" />
                </div>
                <div className="cardFooter">
                    <button className="cardBtn">Add To Cart</button>
                </div>
            </div>
        </>
    )
}