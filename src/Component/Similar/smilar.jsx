import React from "react";

function Similar(){
    return(
        <div className="container similar-products my-4">
    <hr/>
    <p className="display-5">Similar Products</p>

    <div className="row">
        <div className="col-md-3">
            <div className="similar-product">
                <img className="w-100" src="https://source.unsplash.com/gsKdPcIyeGg" alt="Preview" />
                <p className="title">Lovely black dress</p>
                <p className="price">$100</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="similar-product">
                <img className="w-100" src="https://source.unsplash.com/sg_gRhbYXhc" alt="Preview" />
                <p className="title">Lovely Dress with patterns</p>
                <p className="price">$85</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="similar-product">
                <img className="w-100" src="https://source.unsplash.com/gJZQcirK8aw" alt="Preview" />
                <p className="title">Lovely fashion dress</p>
                <p className="price">$200</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="similar-product">
                <img className="w-100" src="https://source.unsplash.com/qbB_Z2pXLEU" alt="Preview" />
                <p className="title">Lovely red dress</p>
                <p className="price">$120</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default Similar ;