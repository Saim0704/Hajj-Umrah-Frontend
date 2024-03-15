import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import { Steps } from 'antd';
import { IoDocumentsOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";

const stepData = [
  {
    icon: <IoDocumentsOutline className="inline-block w-6 h-6" />,
    title: "Basic Details",
    isActive: true,
    link: "/admin/create-package/basic-details",
  },
  {
    icon: <IoImageOutline className="inline-block w-6 h-6" />,
    title: "Gallery",
    isActive: false,
    link: "/admin/create-package/gallery",
  },
  {
    icon: <MdFlight className="inline-block w-6 h-6" />,
    title: "Flight Details",
    isActive: false,
    link: "/admin/create-package/flight-details",
  },
  {
    icon: <HiOutlineHomeModern className="inline-block w-6 h-6" />,
    title: "Accommodation",
    isActive: false,
    link: "/admin/create-package/accommodation",
  },
  {
    icon: <MdOutlineDirectionsBus className="inline-block w-6 h-6" />,
    title: "Local Transport",
    isActive: false,
    link: "/admin/create-package/local-transport",
  },
  {
    icon: <MdOutlineTravelExplore className="inline-block w-6 h-6" />,
    title: "Tour Itinerary",
    isActive: false,
    link: "/admin/create-package/tour-itinerary",
  },
];

const Stepper = ({ children }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const activeStepIndex = stepData.findIndex((step) => router.pathname === step.link);
    setCurrent(activeStepIndex !== -1 ? activeStepIndex : 0);
  }, [router.pathname]);

  const onChange = (value) => {
   
    setCurrent(value);
    router.push(stepData[value].link);
  };

  return (
    <>
      <ul className="tab-ui p-4 rounded-xl max-lg:hidden">
        <Steps
          current={current}
          onChange={onChange}
          items={stepData.map((item) => ({
            title: item.title,
            onClick: () => onChange(stepData.indexOf(item)),
          }))}
        />
      </ul>
      <div>{children}</div>
    </>
  );
};

export default Stepper;
