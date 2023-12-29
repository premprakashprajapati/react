import React from "react";
function Slider(){
    return(
        <div className="col-md-5">
        <div className="main-img">
            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858753_960_720.jpg" alt="ProductS" />
            <div className="row my-3 previews">
                <div className="col-md-3">
                    <img className="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg" alt="Sale" />
                </div>
                <div className="col-md-3">
                    <img className="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg" alt="Sale" />
                </div>
                <div className="col-md-3">
                    <img className="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg" alt="Sale" />
                </div>
                <div className="col-md-3">
                    <img className="w-100" src="https://cdn.pixabay.com/photo/2015/07/24/18/37/model-858748_960_720.jpg" alt="Sale" />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Slider;