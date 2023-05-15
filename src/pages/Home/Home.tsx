import './Home.css';
import { useNavigate } from "react-router-dom";

import pixelCity from '../../assets/image/pixelCity.webp';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Home relative">
        <div className="section" onClick={()=> navigate("tournament")}>
          <div className="noise"></div>
        </div>

        <h1
          className="text-2xl md:w-full md:text-3xl tracking-wide"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          This website is currently under construction.
        </h1>
      </div>
      
      <div className="absolute bottom-0 left-0">
        <img
          src={pixelCity}
          className="opacity-50 city  prevent-select"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    </div>
  );
}

export default Home;
