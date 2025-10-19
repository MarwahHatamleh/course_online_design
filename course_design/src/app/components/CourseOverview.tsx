const CourseOverview = () => {
  return (
    <>
      <div className="courseOverview">
        <h2 className="section-title">What You'll Learn</h2>{" "}
        <div className="text_what_learn">
          <ul className="theme-column-list">
            <li className="item">
              {" "}
              <span className="icon"></span>Lorem ipsum dolor sit amet
            </li>
            <li className="item">
              {" "}
              <span className="icon"></span>
              Etiam nec ligula bibendum faucibus elit sed
            </li>
            <li className="item">
              {" "}
              <span className="icon"></span>
              Donec id nunc ac felis convallis vestibulum sit amet id erat
            </li>
            <li className="item">
              {" "}
              <span className="icon"></span>
              Suspendisse rutrum est arcu vitae semper libero
            </li>
            <li className="item">
              {" "}
              <span className="icon"></span>
              Donec id nunc ac felis convallis vestibulum sit amet id erat
            </li>
            <li className="item">
              {" "}
              <span className="icon"></span>Curabitur feugiat scelerisque quam
            </li>
            <li className="item">
              {" "}
              <span className="icon"></span>Cras pulvinar velit id lectus semper
            </li>
            <li className="item">
              {" "}
              <span className="icon"></span>
              Etiam convallis vulputate arcu sollicitudin blandit
            </li>
          </ul>
        </div>
        <div className="JoinBtn">
          <a className="join" href=""></a>Join Now
        </div>
        <div className="video">
          <iframe
            src=" https://www.youtube.com/embed/78b8RWdlnrY "
            width="600"
            height="400"
            title="Example Website"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CourseOverview;
