import React from "react"; 
// import './header.css';
import './content.css';
import Slider from "../Slider/slider";
function Content(){
    return(
        <div className="container my-5">
        <div className="row">
           <Slider />
            <div className="col-md-7">
                <div className="main-description px-2">
                    <div className="category text-bold">
                        Category: Women
                    </div>
                    <div className="product-title text-bold my-3">
                        Black dress for Women
                    </div>
    
    
                    <div className="price-area my-4">
                        <p className="old-price mb-1"><del>$100</del> <span className="old-price-discount text-danger">(20% off)</span></p>
                        <p className="new-price text-bold mb-1">$80</p>
                        <p className="text-secondary mb-1">(Additional tax may apply on checkout)</p>
    
                    </div>
    
    
                    <div className="buttons d-flex my-5">
                        <div className="block">
                            <a href="#" className="shadow btn custom-btn ">Wishlist</a>
                        </div>
                        <div className="block">
                            <button className="shadow btn custom-btn">Add to cart</button>
                        </div>
    
                        <div className="block quantity">
                            <input type="number" className="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity" />
                        </div>
                    </div>
    
    
    
    
                </div>
    
                <div className="product-details my-4">
                    <p className="details-title text-color mb-1">Product Details</p>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi odio recusandae aliquid ad impedit autem commodi earum voluptatem laboriosam? </p>
                </div>
              
                         <div className="row questions bg-light p-3">
                    <div className="col-md-1 icon">
                        <i className="fa-brands fa-rocketchat questions-icon"></i>
                    </div>
                    <div className="col-md-11 text">
                        Have a question about our products at E-Store? Feel free to contact our representatives via live chat or email.
                    </div>
                </div>
    
                <div className="delivery my-4">
                    <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-truck"></i></span> <b>Delivery done in 3 days from date of purchase</b> </p>
                    <p className="text-secondary">Order now to get this product delivery</p>
                </div>
                <div className="delivery-options my-4">
                    <p className="font-weight-bold mb-0"><span><i className="fa-solid fa-filter"></i></span> <b>Delivery options</b> </p>
                    <p className="text-secondary">View delivery options here</p>
                </div>
                
             
            </div>
        </div>
    </div>
    
    )
}


export default Content;