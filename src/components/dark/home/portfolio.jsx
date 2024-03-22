import React, { Suspense } from 'react';
function Portfolio({ data }) {
  const sortedArray = data.sort((a, b) => a.sequence - b.sequence)
  return (
    <div className="sec-box portfolio section-padding" id="portfolio">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="sub-title opacity-7 mb-15">Our Portfolio</h6>
            <h3>
              Look at my work & <br /> give us{' '}
              <span className="main-color">your feedback</span>
            </h3>
          </div>
          <div className="col-lg-6 valign">
            <div className="go-more full-width d-flex justify-content-end">
              <a href="/works" className="d-flex">
                <span>
                  View All Works{' '}
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 34.2 32.3"
                    xmlSpace="preserve"
                    style={{ strokeWidth: 2 }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {sortedArray?.slice(0, 4).map((item) => (
            (item.enabled ?
              <div key={item?._id} className="col-lg-6 items">
                <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                  <div className="img">
                    <a href={item?.liveurl}>
                      <Suspense fallback={<div>Loading...</div>}>
                        <img src={item?.image?.url} alt="" />
                      </Suspense>
                    </a>
                  </div>
                  <div className="cont mt-30 d-flex align-items-center">
                    <div>
                      {item?.techStack.map(el => <span className="tag" key={el}>{el}</span>)}
                      <h6 className="line-height-1">
                        <a href="single-project">{item._id}</a>
                      </h6>
                    </div>
                    <div className="ml-auto">
                      <div className="arrow">
                        <a href="single-project">
                          <svg
                            className="arrow-right"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 34.2 32.3"
                            xmlSpace="preserve"
                            style={{ strokeWidth: 2 }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : 'No Projects to show yet.')
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
