import React, { useState } from "react";

function MySlider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    // <div>
    //   <input
    //     type="range"
    //     min="0"
    //     max="100"
    //     value={sliderValue}
    //     onChange={handleSliderChange}
    //   />
    //   <p>Value: {sliderValue}</p>
    // </div>
    <>
      <div>
        <header className="py-4 px-10 text-2xl text-white font-semibold bg-sky-600">
          <h1>Bank Of React</h1>
        </header>
        <div className="px-6 py-10">
          <div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800 font-semibold">Home Value</p>
              <p className="text-3xl font-semibold">$ 6600</p>
              <input
                className="text-sky-600 hover:drop-shadow-xl"
                type="range"
                min="1000"
                max="10000"
                value={sliderValue}
                onChange={handleSliderChange}
              />
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>$ 1000</span>
                <span>$ 10000</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800 font-semibold">Down Payment</p>
              <p className="text-3xl font-semibold">$ 1180</p>
              <input
                className="text-sky-600 hover:drop-shadow-xl"
                type="range"
                min="0"
                max="4500"
                value={sliderValue}
                onChange={handleSliderChange}
              />
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>$ 0</span>
                <span>$ 4500</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800 font-semibold">Loan Amount</p>
              <p className="text-3xl font-semibold">$ 6600</p>
              <input
                className="text-sky-600 hover:drop-shadow-xl"
                type="range"
                min="0"
                max="4500"
                value={sliderValue}
                onChange={handleSliderChange}
              />
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>$ 0</span>
                <span>$ 4500</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-800 font-semibold">Interest Rate</p>
              <p className="text-3xl font-semibold">% 5</p>
              <input
                className="text-sky-600 hover:drop-shadow-xl"
                type="range"
                min="2"
                max="18"
                value={sliderValue}
                onChange={handleSliderChange}
              />
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>$ 1000</span>
                <span>$ 10000</span>
              </div>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown button{" "}
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default MySlider;
