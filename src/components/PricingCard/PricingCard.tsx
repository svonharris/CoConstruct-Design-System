// import React from "react";
import style from "./PricingCard.module.css";

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
        <span id="PlanPriceStand">{price}</span>
        <span id="PlanFrequencyStand" className={style.cardFrequency}>
          /mo
        </span>
      </p>
      <p id="PlanDisclaimerStand" className={style.cardSubtitle}>
        {promo}
      </p>
      <div className={style.featureList}>
        <div className={style.featureContent}>{description}</div>
      </div>
      <a
        href="https://buildertrend.net/app/Signups/E302M/true/0/0/?t=con"
        id="PlanBtnStand"
        className={style.btnPricingSignup}
      >
        Sign up
      </a>
    </div>
  );
};

export default PricingCard;
