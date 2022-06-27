import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row align-items-center my-5">
          <div className="col-lg-5 blurb rounded">
            <h1 className="font-weight-light">About</h1>
            <p className="text-left">
              Pecan Tree Mercantile is a family-owned and family-operated online
              seller of a wide variety of products, including apparel, shoes,
              health and beauty aids, kitchen and household goods, gardening and
              lifestyle products.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dsm01pap003files.storage.live.com/y4mGum2iGfn-4RI3U_5EEwi7SD4q3Xd6NBJfJgm-2Pv3yeQWF2I5Coey3bvKAbgs5JKghzZrlvT7Z-8HOMfTGBNLyhAsid6catQnApzepIUwEMx9ffgf_k8hgSrOzV4x-ECvCimnBQ5KkpEfG-cYMre0feaSAXr2SY5E9N-RD3KRE4wKsSgrPA3YuIrBE9ehs4J?width=4200&height=3300&cropmode=none"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
