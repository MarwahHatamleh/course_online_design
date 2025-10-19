const CourseLearnerReviews = () => {
  return (
    <>
      <div className="reviewContainer">
        <h1 className="reviewHeader">Course Learner Reviews </h1>
        <div className="reviews">
          <div className="review-item">
            <div className="review-header">
              <div className="profile">
                <img
                  className="profile-image img-fluid"
                  src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="name">Emma Sanders</div>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-star"></i>
                </div>
              </div>
            </div>
            <div className="review-content">
              Great course lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vivamus condimentum mi sed tortor lobortis, nec feugiat nisi
              venenatis.
            </div>
          </div>
          <div className="review-item">
            <div className="review-header">
              <div className="profile">
                <img
                  className="profile-image img-fluid"
                  src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="name">Jone Doe</div>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-star"></i>
                </div>
              </div>
            </div>
            <div className="review-content">
              I've learnt so much lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus quam magna, vulputate at sem id,
              gravida laoreet risus.
            </div>
          </div>
          <div className="review-item">
            <div className="review-header">
              <div className="profile">
                <img
                  className="profile-image img-fluid"
                  src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="name">Emily Sanders</div>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
            <div className="review-content">
              Highly recommend lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi porttitor id velit in ullamcorper nam eu
              elit nec nunc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLearnerReviews;
