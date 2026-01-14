function App() {
  return (
    <>
      <div className="pricing-card-grid">
        <div className="p02_card-2">
          <div className="pricing-card--title">Essential</div>
          <p className="pricing-card--amount po2_card--right">
            <span id="PlanPriceStand" className="pricing-card--price">
              $99
            </span>
            <span id="PlanFrequencyStand" className="pricing-card--frequency">
              /mo
            </span>
          </p>
          <p id="PlanDisclaimerStand" className="pricing-card--subtitle">
            $399 after 2 months
          </p>
          <div className="pricing-feature--list">
            <div className="pricing-feature--content">
              For teams looking to achieve more efficient job sites and simpler
              project planning. You may just be getting started with software or
              want to focus on project management and communication.
            </div>
          </div>
          <a
            href="https://buildertrend.net/app/Signups/E302M/true/0/0/?t=con"
            id="PlanBtnStand"
            className="button_pricing-signup"
          >
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
