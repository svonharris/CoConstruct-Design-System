import PricingCard from "./components/PricingCard/PricingCard";
import SectionFixed3Col from "./components/SectionFixed3Col/SectionFixed3Col";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        onClick={() => {
          window.location.href = "/pricing";
        }}
        ariaLabel="View pricing page"
        variant="secondary"
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
    </>
  );
}

export default App;
