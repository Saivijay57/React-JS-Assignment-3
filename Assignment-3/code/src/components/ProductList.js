import "./ProductList.css";
import React from 'react'
var arrow2 = ">"
export default function ProductList() {
    return (
        <>
            <div className='product-list'>
                    <div className='defaultCheckbox'>
                        <input type="checkbox" className='checkbox' name="checkBox1"></input>
                    </div>
                <div>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" width={150} height={150} alt="" />
                </div>
                <div>
                    <p className='product'><b>Boltaart Bosbessen</b></p>
                    <p className='product'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet! Lorem ipsum hello world</p>
                </div>
                <p className='arrow2'>
                    <a href="/">
                    {arrow2}
                    </a>
                </p>
            </div>
        </>
    )
}
