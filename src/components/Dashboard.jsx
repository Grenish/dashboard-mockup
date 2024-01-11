import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from "chart.js";

import { userProfile } from "../assets";
import { UilAngleDown } from "@iconscout/react-unicons";

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const Dashboard = () => {
  const data = {
    accBal: "19,892",
    ytdContributions: "4,000",
    totalIntrest: "1,892",
  };

  const transaction = [
    {
      date: "2020-08-07",
      desc: "Withdrawal Transfer to Bank-XXX11",
    },
    {
      date: "2020-07-21",
      desc: "Withdrawal Transfer to Bank-XXX11",
    },
    {
      date: "2020-07-16",
      desc: "Withdrawal Transfer to Bank-XXX11",
    },
  ];

  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div className="sm:w-auto w-full sm:bg-gray-100 bg-transparent flex justify-center">
        <div className="sm:px-5 md:px-10 px-5 flex flex-col sm:items-start items-center w-full">
          {/* User profile */}
          <div className="flex items-center justify-start sm:justify-center sm:px-3 px-0 gap-3 mt-10 md:mt-6 sm:w-auto w-full">
            <img
              src={userProfile}
              alt="user profile"
              className="sm:w-20 w-28 sm:h-20 h-28 rounded-full shadow-lg"
            />
            <div className="flex flex-col font-pop">
              <span className="font-semibold sm:text-2xl text-3xl">
                Hi Mike,
              </span>
              <span className="sm:text-xs text-md">welcome back.</span>
            </div>
          </div>
          {/* Account Info */}
          <div className="flex items-center justify-center sm:justify-start gap-5 mt-6 bg-gray-100 sm:bg-tranparent p-5 rounded-2xl w-full">
            <div className="sm:w-auto w-full ">
              <div className="mb-3 font-pop text-lg font-semibold">Today</div>
              <div className="flex flex-col font-pop">
                <span className="font-bold text-4xl sm:text-3xl text-gray-800">
                  ${data.accBal}
                </span>
                <span className="text-xs text-gray-500">Account Balance</span>
              </div>
              <div className="sm:block flex sm:w-auto w-full gap-10">
                <div className="flex flex-col font-pop mt-5">
                  <span className="font-bold text-lg text-gray-700">
                    ${data.ytdContributions}
                  </span>
                  <span className="text-xs text-gray-500 sm:block hidden">
                    Year-to-Date Contributions
                  </span>
                  <span className="text-xs text-gray-500 sm:hidden block">
                    Year-to-Date
                  </span>
                </div>
                <div className="flex flex-col font-pop mt-5">
                  <span className="font-bold text-lg text-gray-700">
                    ${data.totalIntrest}
                  </span>
                  <span className="text-xs text-gray-500">Total interest</span>
                </div>
              </div>
              <button className="mt-5 sm:flex hidden items-center justify-center bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200 p-2 rounded-lg text-white text-xs px-5">
                I want to <UilAngleDown />{" "}
              </button>
              <button className="mt-5 w-full sm:hidden flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 transition-colors duration-200 p-4 rounded-lg text-white text-md px-5">
                I want to...
              </button>
            </div>
          </div>
          {/*Recent Transaction */}
          <div className="flex items-center sm:justify-center justify-start gap-5 sm:p-4 p-7 sm:mt-0 mt-5 sm:mb-0 mb-20 rounded-2xl bg-gray-100 sm:bg-transparent sm:w-auto w-full">
            <div>
              <div className="font-pop font-semibold text-xl sm:text-md sm:pt-0">
                Recent Transactions
              </div>
              {transaction.map((transInfo, index) => (
                <div
                  className="flex flex-col font-pop border-b-2 sm:my-4 my-6 pb-2"
                  key={index}
                >
                  <span className="sm:text-xs text-md text-gray-500">
                    {transInfo.date}
                  </span>
                  <span className="font-semibold sm:text-xs text-md">
                    {transInfo.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" sm:w-[50%] w-full border-r-2 sm:mb-0 mb-20">
        <div className="flex flex-col w-full sm:px-20 px-5 pt-10">
          <div className="flex flex-col font-pop">
            <span className="text-indigo-600 font-semibold sm:text-sm text-md">
              Retirement Income
            </span>
            <span className="sm:text-xl text-2xl font-semibold">
              Starting year 2056
            </span>
          </div>
          {/* Desktop Panel */}
          <div className="w-full font-pop sm:flex hidden justify-between gap-5 mt-7">
            <div className="flex flex-col border-b-2 pb-2 border-indigo-500 w-1/2">
              <span className="font-semibold text-2xl ">$300,000</span>
              <span className="text-xs text-gray-400">My Goal</span>
            </div>
            <div className="flex flex-col border-b-2 pb-2 border-indigo-500  w-1/2">
              <span className="font-semibold text-2xl">59%</span>
              <span className="text-xs text-gray-400">Goal Achieved</span>
            </div>
            <div className="flex flex-col border-b-2 pb-2 border-indigo-500  w-1/2">
              <span className="font-semibold text-2xl">$300</span>
              <span className="text-xs text-gray-400">Est. Monthly Income</span>
            </div>
          </div>
          {/* Mobile Panel */}
          <div className="w-full font-pop flex flex-col sm:hidden justify-between gap-5 mt-7">
            <div className="flex flex-col border-b-2 pb-2 border-indigo-500 w-full">
              <span className="font-semibold text-3xl ">$300,000</span>
              <span className="text-sm text-gray-400">My Goal</span>
            </div>
            <div className="flex space-x-6">
              <div className="flex flex-col border-b-2 pb-2 border-indigo-500  w-1/2">
                <span className="font-semibold text-3xl">59%</span>
                <span className="text-sm text-gray-400">Goal Achieved</span>
              </div>
              <div className="flex flex-col border-b-2 pb-2 border-indigo-500  w-1/2">
                <span className="font-semibold text-3xl">$300</span>
                <span className="text-sm text-gray-400">
                  Est. Monthly Income
                </span>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="font-semibold font-pop text-xl mb-5">
              Contributions Overtime
            </div>
            <div className="sm:h-[40vh] h-[50vh]">
              <StackedBarChart />
            </div>
          </div>
          <div className="mt-7 sm:block hidden">
            <div className="flex flex-col font-pop">
              <span className="font-semibold">How do I compare my peers?</span>
              <span className="text-xs text-gray-400">
                These numbers represent current goal achievement
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col font-pop text-md">
                <div className="pb-2 border-b-2 flex gap-1">
                  <span className="font-semibold">Age: </span>
                  <span className=" cursor-pointer flex">
                    Under 30 <UilAngleDown />{" "}
                  </span>
                </div>
                <div className="pb-2 border-b-2 flex gap-1">
                  <span className="font-semibold">Salary: </span>
                  <span className=" cursor-pointer flex">
                    K 20 - K 30 <UilAngleDown />{" "}
                  </span>
                </div>
                <div className="pb-2 border-b-2 flex gap-1">
                  <span className="font-semibold">Gender: </span>
                  <span className=" cursor-pointer flex">
                    Male <UilAngleDown />{" "}
                  </span>
                </div>
              </div>
              <div className="flex gap-5">
                <ProgressBar progress={78} />
                <ProgressBar progress={95} />
                <ProgressBar progress={59} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
       
      </div>
    </div>
  );
};

export default Dashboard;

const StackedBarChart = () => {
  const employerData = [30, 40, 50, 60, 90, 100, 130];
  const employeeData = [30, 30, 40, 60, 70, 75, 80];
  const intrestData = [30, 40, 50, 60, 70, 90, 90];
  const data = {
    labels: [20, 25, 30, 35, 40, 60, 65],
    datasets: [
      {
        data: employerData,
        backgroundColor: "darkblue",
        label: "Employer: K 73,500",
      },
      {
        data: employeeData,
        backgroundColor: "mediumblue",
        label: "Employee: K 52,500",
      },
      {
        data: intrestData,
        backgroundColor: "lightblue",
        label: "Intrest: K 244,313",
      },
    ],
  };
  const config = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    legend: {
      position: "top",
    },
  };
  return <Bar data={data} options={config} />;
};

const ProgressBar = ({ progress }) => {
  const strokeDashoffset = 2 * Math.PI * 45 * (1 - progress / 100);
  return (
    <>
      <div className="flex items-center justify-center">
        <svg className="w-20 h-20 text-green-500" viewBox="0 0 100 100">
          <circle
            className="w-full h-full stroke-current text-gray-200"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="7"
            fill="none"
          />
          <circle
            className="w-full h-full stroke-current transform rotate-90 origin-center"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${strokeDashoffset}`}
          />
        </svg>
        <span className="absolute text-2xl font-semibold font-pop">
          {progress}
          <sup className="text-xs">%</sup>
        </span>
      </div>
    </>
  );
};
