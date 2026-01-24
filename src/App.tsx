import PricingCard from "./components/PricingCard/PricingCard";
import SectionFixed3Col from "./components/SectionFixed3Col/SectionFixed3Col";
import Button from "./components/Button/Button";
import Toggle from "./components/ToggleSwitch/ToggleSwitch";
import Tabs from "./components/Tabs/Tabs";
import HeroSection from "./components/HeroSection/HeroSection";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <HeroSection
        heading="Section heading here"
        subheading="Write some subheading text here."
        hasBackground={true}
      />
      <Toggle firstLabel="Daily" secondLabel="Weekly" />
      <hr></hr>

      <Modal
        buttonLabel="Schedule a Demo"
        ariaLabel="Open the schedule a demo form"
        variant="secondary"
        title="Open the schedule a demo form"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <h3>SCHEDULE a demo now</h3>
            <hr style={{ width: "50%", display: "inline-block" }} />
            <h4>
              Fill out the form to book time with a designated product expert to
              answer all your questions.
            </h4>
          </div>
          <Form />
        </div>
      </Modal>

      <hr></hr>
      <Button
        onClick={() => {
          window.location.href = "/pricing";
        }}
        ariaLabel="Go to Pricing Page"
        variant="secondary"
        title="View pricing page"
      >
        Our Prices
      </Button>
      <br></br>
      <SectionFixed3Col>
        <PricingCard
          plan="Essential"
          price="$99"
          promo="$399 after 2 months"
          description="For teams looking to achieve more efficient job sites and simpler project planning. You may just be getting started with software or want to focus on project management and communication."
          href="https://www.coconstruct.com/Signups/A302M"
        />
        <PricingCard
          plan="Advanced"
          price="$399"
          promo="$699 after 2 months"
          description="For builders who need to create estimates with confidence and are looking for fuller financial control. All tools from Essential are included."
          href="https://www.coconstruct.com/Signups/B302M"
        />
        <PricingCard
          plan="Complete"
          price="$899"
          promo="$1,299 after 2 months"
          description="For those ready to centralize all complex processes – including selections and RFIs – into one simple platform. You’ll have the tools from Essential and Advanced, too."
          href="https://www.coconstruct.com/Signups/C302M"
        />
      </SectionFixed3Col>
      <br></br>
      <Tabs
        tabs={[
          { label: "Tab 1", children: <p>This is the content of Tab 1.</p> },
          {
            label: "Tab 2",
            children: (
              <PricingCard
                plan="Essential"
                price="$99"
                promo="$399 after 2 months"
                description="For teams looking to achieve more efficient job sites and simpler project planning. You may just be getting started with software or want to focus on project management and communication."
                href="https://www.coconstruct.com/Signups/A302M"
              />
            ),
          },
          {
            label: "Tab 3",
            children: (
              <Button
                onClick={() => {
                  window.location.href = "/pricing";
                }}
                ariaLabel="Go to Pricing Page"
                variant="secondary"
                title="View pricing page"
              >
                This is a Tab with a Button
              </Button>
            ),
          },
        ]}
        defaultActiveTab={0}
      />
      <br></br>
      <Form />
    </>
  );
}

export default App;
