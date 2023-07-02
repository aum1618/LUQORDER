import React, { useState } from "react";
import Cover from "../components/Cover";
import know1 from "../assets/images/know1.svg";
import know2 from "../assets/images/know2.svg";
import know3 from "../assets/images/know3.svg";
import know4 from "../assets/images/know4.svg";
import KryptoCard from "../components/KryptoCard";
import QA from "../components/QA";
import q1 from "../assets/images/q1.svg";
import q2 from "../assets/images/q2.svg";
import q3 from "../assets/images/q3.svg";
import q4 from "../assets/images/q4.svg";

export default function Krypto() {
  const tabs = [
    "stocks",
    "indices",
    "ETF's",
    "Commodities",
    "Cryptocurrencies",
    "Forex",
    "bonds",
  ];
  const cards = [
    {
      icon: know1,
      title: "Purchase",
      detail:
        "What should be considered when making a purchase? Where do I buy cryptocurrencies? How do I buy...",
    },
    {
      icon: know2,
      title: "Wallets",
      detail:
        "What is a wallet? What types are there? What are their advantages and disadvantages? Where do I buy a...",
    },
    {
      icon: know3,
      title: "Custody",
      detail:
        "How do I set up a cold wallet? What do I have to consider regarding safekeeping? Why should ...",
    },
    {
      icon: know4,
      title: "Transaction",
      detail:
        "How do I send cryptocurrencies? What should I put attention on? What happens if I...",
    },
  ];

  const QAData = [
    {
      question: "What are you actually buying?",
      answer:
        "It is important to research any investment thoroughly before investing your money in it. We recommend using...",
      btn: true,
      icons: [q1, q1, q2],
    },
    {
      question: "What is the tax side like?",
      answer:
        "Before making any investment, it is important to understand the applicable legal framework. This includes i...",
      btn: true,
    },
    {
      question: "How do I keep track?",
      answer:
        "In order to minimize tax risks and always have an overview of the tax-free sale of cryptocurrencies, we...",
      btn: true,
      icons: [q3],
    },
    {
      question: "Where do I buy cryptocurrencies? Broker vs Exchange",
      answer:
        "Buying cryptocurrencies through brokers can have disadvantages, as you are not actually buying a r...",
      btn: true,
      icons: [q4, q4, q4],
    },
    {
      question: "What are the 5 steps to registering on an exchange?",
      answer:
        "The steps to sign up for a cryptocurrency exchange may vary by exchange, but in general the following ste...",
      btn: true,
    },
    {
      question: "How does our analysis help you?",
      answer:
        "A buy limit is an instruction from an investor to a broker or exchange to purchase a security or other investment at the purchase price. With a buy limit, an investor indicates that they are willing to buy a specific security or other investment at a specific price. The buy limit can contain various parameters, such as the desired price, the desired trading volume, the trading period and the type of order (eg market order or limit order). When the price of the asset meets or falls below the purchase price specified by the investor, the buy order is automatically executed and the security is purchased at the agreed price. Our analysis gives you the opportunity to benefit from trends in the markets. We calculate trend reversal areas and publish three price zones, with the highest probability of entering the top price mark. The cheapest entry price has a lower probability, but can still be used. To trade these price zones, we recommend using a limit order, which sets the entry price and buy quantity and is executed when the entry price is reached. Also, using limit orders may result in a lower or no fee.",
      btn: true,
    },
    {
      question: "What is a buy limit and how do you use it?",
      answer:
        "A buy limit is an instruction from an investor to a broker or exchange to purchase a security or ot...",
      btn: true,
    },
    {
      question: "What is a sell limit and how do you use it?",
      answer:
        "A sell limit is a type of order placement in asset trading, where an investor gives an instruction to their bro...",
      btn: true,
      showBorder: true,
    },
    {
      question: "Day, leverage and short trading",
      answer:
        "We do not recommend engaging in day trading or leveraged trading. Without sound risk management it is very unlikely to be successful. We emphasize that RentFuchs makes no recommendation for such trading strategies and expressly advises against them. Our analysis is designed to range from several weeks to years, and time is of the essence. However, there are people who want to make money fast but are actually losing money. However, we do not want to withhold the information from you, which is why we advise against these trading methods.",
      btn: false,
    },
    {
      question: "What is day trading?",
      answer:
        "Day trading refers to buying and selling stocks, currencies or other assets within a single trading day. It is oft...",
      btn: true,
    },
    {
      question: "What is leverage trading?",
      answer:
        "Leverage trading is aimed at impatient investors who want quick profits but also take on a higher level of ri...",
      btn: true,
    },
    {
      question: "What is short trading?",
      answer:
        "Short trading can be rewarding, but only with proper risk management. It is important to understand that...",
      btn: true,
    },
    {
      question: "What is risk management?",
      answer:
        "To avoid losses, setting up stop-loss orders is of great importance. These allow you to set a maximum l...",
      btn: true,
      showBorder: true,
    },
    {
      question: "What is a wallet?",
      answer:
        "A wallet is a tool that gives you access to your cryptocurrency. A very important fact that you need...",
      btn: true,
      heading: "Wallets",
    },
    {
      question: "What is a software wallet? (hot wallet)",
      answer:
        "A software wallet is a computer program that runs on the operating system of your device (either a compu...",
      btn: true,
    },
    {
      question: "What is a hardware wallet? (cold wallet)",
      answer:
        "Hardware wallets are physical devices designed solely to hold the secret information (seeds and private ke...",
      btn: true,
    },
    {
      question: "What are the advantages of a hardware wallet?",
      answer:
        "Security: Hardware wallets are physical devices that operate in offline mode and are not connected to t...",
      btn: true,
    },
    {
      question: "What are the disadvantages of a hardware wallet?",
      answer:
        "The costs: Compared to other wallet types, hardware wallets are usually more expensive to buy. Costs vary...",
      btn: true,
    },
    {
      question: "Where do I buy a hardware wallet?",
      answer:
        "Most hardware wallets are sold directly by the manufacturers, who usually have their own website where y...",
      btn: true,
      showBorder: true,
    },
    {
      question: "Why is self-custody important?",
      answer: `One of the most important properties of cryptocurrencies is the possibility to take over your own custody and thus have control over your own coins. "Not your keys. Not your coins." is an often-quoted saying that indicates that storing cryptocurrencies in a wallet that you control yourself is essential. There are several w`,
      btn: true,
      heading: "Custody",
      info: "More coming soon",
      showBorder: true,
    },
    {
      question: "",
      answer: "",
      btn: false,
      heading: "Transaction",
      info: "Available soon",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("stocks");
  return (
    <div>
      <Cover
        heading="Crypto Knowledge Hub"
        para="In this section you will find answers to the most important questions about cryptocurrencies. In addition, some sections provide you with additional materials in the form of videos, documents or affiliate links that can help you gain an even deeper understanding."
        btnText="Explore now"
      />
      <div className="px-[10px] sm:px-[80px]">
        <div className="flex sm:overflow-hidden overflow-scroll space-x-4 justify-between items-center my-8 border-b border-black px-4">
          {tabs.map(tab => (
            <button
              onClick={() => setSelectedTab(tab)}
              className={`${
                selectedTab === tab && "border-b-4 border-[#E0B83C] "
              } pb-3 text-[16px] font-[1000] capitalize`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-16 ">
          {cards.map((card, index) => (
            <KryptoCard
              key={index}
              icon={card.icon}
              detail={card.detail}
              title={card.title}
            />
          ))}
        </div>
        <h1 className="text-[36px] font-[800] text-center mb-12">Purchase</h1>
        <div className="pb-20">
          {QAData.map(item => (
            <QA
              icons={item?.icons}
              answer={item.answer}
              question={item.question}
              showBorder={item.showBorder}
              heading={item.heading}
              info={item?.info}
              btn={item.btn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
