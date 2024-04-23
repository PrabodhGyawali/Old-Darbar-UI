import React from "react";
function Card({ img, name, price, isVeg}) {
    return (
        <div className="Card">
            <img src={img} alt="Food"
                width="200px"
                height="100px"
            />
            <div>
                <p className="inline">{name}</p>
                <p className="inline warm">{"$" + price}</p>
                {isVeg ? <img src="../assets/veg.png" alt="Veg" className="veg" /> : null}
            </div>
        </div>
    )
}

export default Card;