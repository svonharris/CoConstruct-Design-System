import style from "./PricingCard.module.css";
import Button from "../Button/Button";

type PricingCardProps = {
  plan: string;
  price: string;
  promo: string;
  description: string;
};

const PricingCard = ({ plan, price, promo, description }: PricingCardProps) => {
  return (
    <div className={style.card}>
      <div className={style.cardTitle}>{plan}</div>
      <p className={style.cardAmount}>
        <span>{price}</span>
        <span className={style.cardFrequency}>/mo</span>
      </p>
      <p className={style.cardSubtitle}>{promo}</p>
      <div className={style.featureList}>
        <div className={style.featureContent}>{description}</div>
      </div>
      <Button
        onClick={() => {
          window.location.href =
            "https://buildertrend.net/app/Signups/E302M/true/0/0/?t=con";
        }}
        ariaLabel={`Sign up for the ${plan} plan`}
      >
        Sign up
      </Button>
    </div>
  );
};

export default PricingCard;
