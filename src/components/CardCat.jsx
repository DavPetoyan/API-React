export default function CardCat({ inpValue, setInpValue}) {
    return (
        <>

            <div className="cardInp">
                {/* <form onSubmit={sub}> */}
                    <input type="text" className='inp' placeholder='Search Product' value={inpValue} onChange={(e) => setInpValue(e.target.value)}/>
                {/* </form> */}

            </div>

        </>
    )
}