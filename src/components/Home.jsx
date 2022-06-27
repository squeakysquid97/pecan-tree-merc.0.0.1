import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container d-flex justify-content-center align-items-center h-75">
        <div className="container-header">
          <h1 className="container-header-text">
            Welcome to Pecan Tree Mercantile
          </h1>
          <h2>Online Sellers of Quality Goods</h2>
          <div className="amz-brand">
            <a
              href="https://www.amazon.com/s?i=merchant-items&me=A1O30P2TUMQPEB&rh=p_4%3ANike&dc&marketplaceID=ATVPDKIKX0DER&qid=1656167078&ref=sr_nr_p_4_12&ds=v1%3A7gN%2BwvE0YkX3ODL6ArMQG%2BYuXHxAkPWidZL%2BoLYdajA"
              target="_blank"
              rel="noopener"
            >
              <img
                className="w-25 amz-button"
                src="https://dsm01pap003files.storage.live.com/y4mapx3BKEJH0hslFMwlbvYcVISFDA65AIwFmIYsd9BzHcmI_F-AGcAhd5kTRJc-Sv2upWHSAiYmc24V5ydN02LtaHWTf1UUj8ZdBQW2ZuNeleYeRODYZ8hKL1JqN0rdk3cJh7_E0cdXcXGf7kfEYzZnXTG3XiHE_81EWSRrMpJcl2MjOYOYNr8B34wpFMJndRs?width=820&height=454&cropmode=none"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
