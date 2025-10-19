const Plans = () => {
  return (
    <>
      <div className="plansDetails">
        <h1 className="planHeader">Course's Plans </h1>
        <div className="plans">
          <div className="plan-item">
            <div className="plan-header">
              <h4 className="plan-heading">FREE</h4>
            </div>

            <div className="plan-details">
              <div className="plan-desc">
                <div className="plan-price">$0</div>
                <div className="plan-price-desc">Limited Access</div>
              </div>
              <div className="plan-content ">
                <div className="plan-content-intro">You'll get:</div>
                <ul className="plan-content-list">
                  <li>
                    <i className="icon "></i>Access to basic modules
                  </li>
                  <li>
                    <i className="icon"></i>3 bonus resources
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan-cta">
              <a className="btn " href="#" target="_blank">
                Join Free
              </a>
            </div>
          </div>
              <div className="plan-item">
            <div className="plan-header">
              <h4 className="plan-heading">Standard</h4>
            </div>

            <div className="plan-details">
              <div className="plan-desc">
                <div className="plan-price">$199</div>
                <div className="plan-price-desc">Basic Access</div>
              </div>
              <div className="plan-content">
                <div className="plan-content-intro">You'll get:</div>
                <ul className="plan-content-list">
                  <li>
                    <i className="icon "></i>Access to basic modules
                  </li>
                  <li>
                    <i className="icon "></i>3 bonus resources
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan-cta">
              <a className="btn " href="#" target="_blank">
                Join Now
              </a>
            </div>
          </div>
              <div className="plan-item">
            <div className="plan-header">
              <h4 className="plan-heading">Advanced</h4>
            </div>

            <div className="plan-details">
              <div className="plan-desc">
                <div className="plan-price">$299</div>
                <div className="plan-price-desc">Unlimited Access</div>
              </div>
              <div className="plan-content px-3">
                <div className="plan-content-intro">You'll get:</div>
                <ul className="plan-content-list">
                  <li>
                    <i className="icon "></i>Access to basic modules
                  </li>
                  <li>
                    <i className="icon "></i>3 bonus resources
                  </li>
                </ul>
              </div>
            </div>
            <div className="plan-cta">
              <a className="btn " href="#" target="_blank">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
