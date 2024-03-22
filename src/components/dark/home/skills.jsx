import React from 'react';
function Skills({ data, timeline }) {
  const sortedData = data.sort((a, b) => a.sequence - b.sequence)
  const sortedTimeline = timeline.sort((a, b) => a.sequence - b.sequence)
  return (
    <div
      className="sec-box skills section-padding bord-thin-bottom"
      id="skills"
    >
      <div className="row skill-head ">
        <div className="col-lg-4 valign ">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title opacity-7 mb-15">Our Skills</h6>
            <h3>
              <span className="main-color">Awards</span> & Recognitions
            </h3>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            {sortedData.map((item) => (
              (item.enabled ?
                <div key={item?._id} className="col-md-6">
                  <div className="item mb-30">
                    <div className="d-flex align-items-center mb-30">
                      <div className="mr-30">
                        <div className="img icon-img-40">
                          <img src={item?.image?.url} alt="" />
                        </div>

                      </div>
                      <div>
                        <h6 className="fz-18">{item?.name}</h6>
                      </div>
                    </div>
                    <div className="skill-progress">
                      {/* item?.percentage */}
                      <span className="progres" data-value={25}></span>
                    </div>
                    <span className="value">{item?.percentage}%</span>
                  </div>
                </div> : 'No skills to show yet.')
            ))}
          </div>
        </div>
      </div>
      <div className="awards mt-100">
        <div className="row md-marg ">
          {sortedTimeline.map((item) => (
            (item.enabled &&
              <div key={item?._id} className="col-lg-4 skills-cont">
                <div
                  className="award-item sub-bg md-mb30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="d-flex">
                    <div>
                      <span>0{item?.sequence}</span>
                    </div>
                    <div className="ml-auto">
                      <span>joined at:- {new Date(item?.startDate).getFullYear()}/{new Date(item?.startDate).getMonth()}</span>
                    </div>
                  </div>
                  <div className="img icon-img-100 mt-80 mb-30">
                    <img src={item?.icon ? item.icon.url : 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710357775748-9vwq4q.jpeg'} alt="" />
                  </div>

                  <h6>{item?.company_name}</h6>
                  <span className="sub-title main-color mt-10">{item.jobTitle}</span>
                  {item?.forEducation && <span>(for-education)</span>}
                </div>
              </div>)
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
