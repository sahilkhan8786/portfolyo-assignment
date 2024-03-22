import React, { Suspense } from 'react';

function Profile({ data, socialHandles }) {
  return (
    <section id="home" className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <Suspense fallback={<div>Loading...</div>}>
                  <img src={data?.avatar?.url} alt="" />
                </Suspense>
                <span className="icon">
                  <img src="/assets/imgs/header/icon1.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon2.png" alt="" />
                </span>
                <span className="icon">
                  <img src="/assets/imgs/header/icon4.png" alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>{data?.name}</h5>
                <p className="fz-13 text-u">Available For Freelance</p>
              </div>
              <div className="social text-center mt-20">

                {socialHandles.map(el => (
                  (el?.enabled &&
                    <a href={el?.url} key={el._id}>
                      <i className={`fab fa-${el.platform.toLowerCase()}`}>
                      </i>
                    </a>)
                ))}

              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">{data?.name}</span>, {data?.title} and{' '}
            <span className="bord">
              {data?.subTitle} <i></i>
            </span>{' '}
            Based in California.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{data?.exp_year}</h2>
                  <p>
                    Years <br /> of Experance
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{data?.some_total}</h2>
                  <p>
                    Clients <br /> Worldwide
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 skew">
                    <span>Dwonload C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
