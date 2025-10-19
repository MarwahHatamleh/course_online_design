const CourseLandingHeader = () => {
  return (
    <>
      <div className="courseLandingHeader">
        <div className="contentCourse">
          <div className="course-badge">Popular Course</div>
          <h2 className="course_name">Full Stack Web Development</h2>
          <div className="introCourse">
            Are you ready to take your skills to the next level? Join our
            transformative course and embark on a journey of personal and
            professional growth like never before.
          </div>
          <div className="StartLearningBtn">
            <a className="btn" href="">
              Start Learning Now
            </a>
          </div>
          <div className="meta">
            <ul className="meta-list">
              <li className="list-inline-item">
                <span className="badge">Intermediate</span>
              </li>
              <li className="list-inline-item">
                <span className="badge">8+ Hours</span>
              </li>
              <li className="list-inline-item">
                <span className="badge">50+ Videos</span>
              </li>
              <li className="list-inline-item">
                <span className="badge">2000+ Learners</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="img">
          <img src="course-1.jpg" alt="course"></img>
        </div>
      </div>
    </>
  );
};

export default CourseLandingHeader;
