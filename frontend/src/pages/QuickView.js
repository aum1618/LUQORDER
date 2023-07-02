import Cover from "../components/Cover";
import "../styles/components/quickview.scss";
import search from "../assets/images/search.svg";
import bit from "../assets/images/bit.svg";
import ethe from "../assets/images/ethe.svg";
import sola from "../assets/images/sola.svg";
import quan from "../assets/images/quan.svg";
import cardano from "../assets/images/cardana.svg";
import cosmos from "../assets/images/cosmos.svg";
import polygon from "../assets/images/polygon.svg";
import vechain from "../assets/images/vechain.svg";
import dax from "../assets/images/dax.svg";
import gd from "../assets/images/gd.svg";
import us from "../assets/images/us.svg";
import CustomButton from "../components/CustomButton";

export default function QuickView() {
  const para =
    "In this section you will find answers to the most important questions about cryptocurrencies. In addition, some sections provide you with additional materials in the form of videos, documents or affiliate links that can help you gain an even deeper understanding.";
  return (
    <>
      <Cover heading={"Cryptocurrencies"} para={para} btnText={"Explore Now"} />
      <div className="quick">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end position-relative">
              <div style={{ width: "360px" }} className="search-div">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="custom-search"
                  placeholder="search..."
                />
                <img src={search} alt="search-icon" className="search" />
              </div>
            </div>
          </div>
          <div className="digital">
            <div className="one">
              <div>
                <img src={bit} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>Bitcoin</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={ethe} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>Ethereum</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={sola} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>Solana</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={quan} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>Quant</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={cardano} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>Cardano</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={cosmos} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>Cosmos</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={polygon} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>Polygon</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={vechain} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>VeChain</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={dax} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>DAX</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={gd} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>GD</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
            <div className="one">
              <div>
                <img src={us} alt="bitcoin" />
              </div>
              <div className="my-4">
                <h2>US</h2>
              </div>
              <div style={{ width: "165px" }}>
                <CustomButton
                  text={"Quick View"}
                  styles={{ borderRadius: "4px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
