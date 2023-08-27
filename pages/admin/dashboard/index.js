import React from "react";
import { SlUser } from "react-icons/sl";
import { IoDocumentsOutline } from "react-icons/io5";
import { TbPackages } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaCcVisa } from "react-icons/lia";
import { MdOutlineTravelExplore } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <div className="p-5 bg-white">
        <div class="grid gap-6 mb-6 grid-cols-3">
          <div className=" theme-blue-bg-light p-8 rounded-xl flex">
            <div className="w-20 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <div class="w-16 h-16 inline-flex items-center justify-center rounded-full theme-blue-bg mb-4">
                <SlUser className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="theme-blue-text pb-3">Number Of Agents</p>
              <h2 className="text-4xl font-light">23</h2>
            </div>
          </div>
          <div className="theme-green-bg-light p-8 rounded-xl  flex">
            <div className="w-20 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <div class="w-16 h-16 inline-flex items-center justify-center rounded-full theme-green-bg mb-4">
                <IoDocumentsOutline className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="theme-green-text pb-3">Number Of Applicants</p>
              <h2 className="text-4xl font-light">400</h2>
            </div>
          </div>
          <div className=" theme-orange-bg-light p-8 rounded-xl flex">
            <div className="w-20 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <div class="w-16 h-16 inline-flex items-center justify-center rounded-full theme-orange-bg mb-4">
                <TbPackages className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="theme-orange-text pb-3">Number Of Packages</p>
              <h2 className="text-4xl font-light">50</h2>
            </div>
          </div>
          <div className="theme-red-bg-light p-8 rounded-xl flex">
            <div className="w-20 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <div class="w-16 h-16 inline-flex items-center justify-center rounded-full theme-red-bg mb-4">
                <HiOutlineUsers className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="theme-red-text pb-3">Number Of Agent List</p>
              <h2 className="text-4xl font-light">55</h2>
            </div>
          </div>
          <div className="theme-pink-bg-light p-8 rounded-xl flex">
            <div className="w-20 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <div class="w-16 h-16 inline-flex items-center justify-center rounded-full theme-pink-bg mb-4">
                <LiaCcVisa className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="theme-pink-text pb-3">Number Of Visa Processed</p>
              <h2 className="text-4xl font-light">399</h2>
            </div>
          </div>
          <div className="theme-gray-bg-light p-8 rounded-xl flex">
            <div className="w-20 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <div class="w-16 h-16 inline-flex items-center justify-center rounded-full theme-gray-bg mb-4">
                <MdOutlineTravelExplore className="text-4xl text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="theme-gray-text pb-3">No. of People Travelled</p>
              <h2 className="text-4xl font-light">790</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

export async function getStaticProps() {
  return {
    props: {
      asLayout: "DefaultLayout",
      withSideBar: true,
    },
  };
}
