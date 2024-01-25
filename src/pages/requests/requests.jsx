import React from "react";
import dot from "/public/mock-imges/icons/dot.svg";
import { CardSection } from "../../components/cardSection/cardSection";
import { Card } from "../../components/card/card";
import { cardsData } from "../../data/data";

export const Requests = () => {
  return (
    <div className="w-full pt-[20px] pl-[32px] bg-white overflow-scroll">
      <div className="">
        <h1 className="text-black text-[24px] font-semibold flex gap-2">
          Заявки <img src={dot} alt="dot" />
          <span className="text-[24px] font-medium text-grey">22</span>
        </h1>
      </div>
      <div className="flex gap-[24px]">
        <CardSection title="New cards" className="">
          {cardsData.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </CardSection>
        <CardSection title="right now" className="">
          {cardsData.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </CardSection>
        <CardSection title="New cards" className="">
          {cardsData.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </CardSection>
        <CardSection title="New cards " className="">
          {cardsData.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </CardSection>
      </div>
    </div>
  );
};
