import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="carousel-header">
                    <h1 className="carousel-header-text">Welcome to Pecan Tree Mercentile</h1>
                    <h2 className="carousel-header-suggested">Suggested Items</h2>
                </div>
                <div className="feed-carousel">
                    <ul className="feed-carousel-list">
                        <a className="list-link"><li className="carousel-list-item"><img className="carousel-image" src="https://images-na.ssl-images-amazon.com/images/I/81ZQImyz3HL._AC_SY400_.jpg"></img></li></a>
                        <a className="list-link"><li className="carousel-list-item"><img className="carousel-image" src="https://images-na.ssl-images-amazon.com/images/I/81nSaeP3AvL._AC_SY400_.jpg"></img></li></a>
                        <a className="list-link"><li className="carousel-list-item"><img className="carousel-image" src="https://images-na.ssl-images-amazon.com/images/I/81l9Y+QKyRL._AC_SY400_.jpg"></img></li></a>
                        <a href="https://www.amazon.com/PG279Q-DisplayPort-Adjustable-Ergonomic-EyeCare/dp/B017EVR2VM?pf_rd_r=VT64SHRKYPK1Z96QHXSF&pf_rd_p=be25f964-4afb-442f-819e-9e628b270a7c&pd_rd_r=4993d358-7270-4a94-861c-f2fd29852aab&pd_rd_w=5tJGa&pd_rd_wg=ZmjLp&ref_=pd_gw_ci_mcx_mr_hp_d" target="blank" className="list-link"><li className="carousel-list-item"><img className="carousel-image" src="https://images-na.ssl-images-amazon.com/images/I/814L77LQTzL._AC_SY400_.jpg"></img></li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
