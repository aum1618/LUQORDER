import React, { useState } from "react";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import youtube from "../assets/images/youtube.png";
import Badge from "../assets/images/badge.svg";
import Card from "../components/Card";
import bitcoin from "../assets/images/bitcoin.png";
import solana from "../assets/images/solana.png";
import etherium from "../assets/images/etherium.png";
import quant from "../assets/images/quant.png";

export default function BitconBlog() {
  const [selectedButton, setSelectedButton] = useState("all");
  const cardData = [
    {
      pic: quant,
      title: "Weekend analysis: (QNT)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
      name: "QUANT",
    },

    {
      name: "SOLANA",
      pic: solana,
      title: "Weekend analysis: (SOL)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
    },
    {
      name: "ETHERIUM",
      pic: etherium,
      title: "Weekend analysis: (ETH)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
    },
    {
      name: "BITCOIN",
      pic: bitcoin,
      title: "Weekend analysis: (BTC)",
      details:
        "Minota laboras ex eam, omnium tritani dissentiet quimo tei quod quidam.",
    },
  ];
  return (
    <div>
      <div className="flex items-center overflow-scroll sm:overflow-hidden justify-between bg-[#E0B83C] px-[10px] sm:px-[80px]">
        {[
          "all",
          "bitcoin",
          "ethereum",
          "cardano",
          "cosmos",
          "polygon",
          "quant",
          "solana",
          "veChain",
          "more",
        ].map(tab => (
          <button
            onClick={() => setSelectedButton(tab)}
            className={`capitalize p-2.5 px-4 text-[16px] font-[900] ${
              selectedButton === tab && "bg-white"
            } `}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="sm:px-[80px] px-[10px] mt-[50px]">
        <h1 className="text-[30px] font-extrabold">
          Weekend Analysis 03/19/23: Bitcoin (BTC)
        </h1>
        <span className="text-[#E0B83C] font-[1000] text-[18px]">
          19th March, 2023
        </span>
        <p className="font-[900] text-[15px] opacity-100 pb-2 mb-0 mt-12">
          Dear readers and viewers,
        </p>
        <p className="tracking-[0.5px] text-[13px] opacity-100 font-[400] pb-0 mb-0 ">
          After a month of looking back at the analysis of Bitcoin from
          02/17/2023 , we can draw the necessary conclusions. In summary, the
          previously marked red box has not been reached and the price has
          followed a direct downtrend, keeping the previously defined
          coordinates of the box at $19,219 - $16,585 unchanged and not touched
          so far. The price fell as low as $19,569 and has been on an impulsive
          climb ever since. Initially, the mentioned box was missed by $350, but
          there is still a possibility that the mentioned price ranges can be
          reached.
        </p>
        <img className="my-4" src={blog2} />
        <h6 className="text-[18px] text-center font-[400]">
          Bitcoin | 03/19/23 | Short term
        </h6>
        <p className="tracking-[0.5px] text-[13px] opacity-100 font-[400] pb-0 mb-0 my-3 ">
          If not, Bitcoin is on course towards the $37,000 level. Minimum
          targets for normal extension of the Turquoise Wave [3] are between
          $37,859 - $42,177, while we also see price ranges of $49,000 and
          $60,000 as possible should inner wave structure extension materialize.
        </p>
        <img className="my-4" src={blog1} />
        <h6 className="text-[18px] text-center font-[400]">
          Bitcoin | 03/19/23 | medium term
        </h6>
      </div>
      <div className="px-[10px] sm:px-[80px] bg-[#F0F0F0] mt-8 py-10">
        <div className="flex space-x-6 items-center mb-16">
          <img src={Badge} />
          <div className="h-[8px] w-full bg-[#E0B83C]" />
        </div>
        <img className="w-full h-full" src={youtube} />
        <h4 className="leading-[38px] sm:text-[28px] text-[20px] pt-4">
          In our video contribution we also deal explicitly with the structure
          of wave (c) .
        </h4>
        <h4 className="text-center py-4 sm:text-[28px] text-[20px]">
          Your ReturnFuchs Team
        </h4>
      </div>
      <div className="bg-white sm:px-[80px] px-[10px] sm:py-16 py-8 mt-8">
        <div className="flex space-x-6 items-center mb-16">
          <img src={Badge} />
          <div className="h-[8px] w-full bg-[#E0B83C]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map(item => (
            <Card
              name={item.name}
              pic={item.pic}
              title={item.title}
              detail={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
