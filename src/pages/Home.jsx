import React, {
  useEffect,
  useState,
  Fragment,
  useRef,
  useCallback,
} from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Doughnut, Chart } from "react-chartjs-2";
import profileImg from '../assets/profile.png'
import GaugeChart from "react-gauge-chart";
import { useMemo } from "react";
import "../index.css";
import "./Home.css";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("chennai");
  const [temperature, setTemperature] = useState(null);

  const storeDetails = useSelector((state) => state.Login.userDetails);

  console.log("003", storeDetails?.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "inr",
              days: "0.1",
            },
          }
        );

        setCryptoData(response?.data?.prices);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, []);
  const chartData = {
    labels: cryptoData.map((entry) => new Date(entry[0]).toLocaleDateString()),
    datasets: [
      {
        label: "Crypto Price (INR)",
        data: cryptoData.map((entry) => entry[1]),
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          //   "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99",
          `https://api.openweathermap.org/data/2.5/weather?q=${city}`,
          {
            params: {
              appid: "e1dff8238b220cda7cc2e06b1b4d2701",
              units: "metric",
            },
          }
        );

        setTemperature(response?.data?.main?.temp);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [city]);
  console.log("002", temperature, city);

  function handleSubmitCity(e) {
    e.preventDefault();
    console.log("submit", inputCity);

    setCity(inputCity);
  }

  console.log("001", chartData);
  return (
    <Fragment>
      <div className="">
        <div className="top-nav">
          <p className="text-white hover:text-gray-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 nav-title">
            Home
          </p>
          <p className="text-white hover:text-gray-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 nav-title">
            Details
          </p>
          <p className="text-white hover:text-gray-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 nav-title">
            About
          </p>
          <p className="text-white hover:text-gray-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 nav-title">
            Contact
          </p>

          <div className="flex flex-row items-center gap-2">
            <img
              src={profileImg}
              className="w-12 h-12 rounded-full mx-auto "
              alt="user_image"
            />
            <p className="text-white">{storeDetails?.name}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full p-16 ">
          {/* Cypto Chart Component */}

          <div className="flex flex-col items-center my-1 mb-5 relative ">
            <h1 class="mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">
              Crypto API
            </h1>
            {/* Loader */}
            {!chartData ? (
              <div class="text-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <Line data={chartData} />
            )}
          </div>

          <hr className="bg-white m-5" />

          {/* Guage Conatiner */}
          <div className="flex flex-col items-center my-1 mt-8 relative">
            <h1 class="mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white">
              Guage - Weather API {city}
            </h1>
            {/* Loader */}
            {!temperature ? (
              <div class="text-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center w-3/4">
                <GaugeChartWrapper temperature={temperature} />
                <form onSubmit={handleSubmitCity} className="guage-form">
                  <input
                    type="text"
                    placeholder="bangalore,chennai,delhi..."
                    onChange={(e) => setInputCity(e.target.value)}
                    className="w-full p-4 text-gray-900 rounded-lg bg-gray-50 "
                  />

                  <button
                    type="submit"
                    className="text-white p-4 rounded-lg bg-blue-700 hover:bg-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const GaugeChartWrapper = ({ temperature }) => {
  const guage = useMemo(
    () => (
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={20}
        percent={temperature / 100}
      />
    ),
    [temperature]
  );

  return guage;
};
