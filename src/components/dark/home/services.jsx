import React, { Suspense } from 'react';
function Services({ data }) {
  return (
    <div
      className="sec-box services section-padding bord-thin-bottom"
      id="services"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Our Services</h6>
            <h3>
              Turn Information{' '}
              <span className="main-color">Into Actionable</span> Insights
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        {data.map((item) => (
          (item.enabled ?
            <div key={item?._id} className="col-md-6">
              <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
                <span className="icon-img-70 mb-30 opacity-7">
                  <Suspense fallback={<div>Loading...</div>}>
                    <img src={item?.image?.url} alt="" />
                  </Suspense>
                </span>
                <h6 className="text-u ls1 mb-15">{item?.name}</h6>
                <p>{item?.desc}</p>
                <span>Charge:-{item?.charge}</span>
                <div className="bord-color"></div>
              </div>
            </div> : 'No projects to show yet.')
        ))}
      </div>
    </div>
  );
}

export default Services;
