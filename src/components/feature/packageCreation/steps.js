import Link from "next/link";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Steps, Icon } from 'antd';

import React from "react";

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

const Stepper = ({ activeStep, children }) => {

  const Step = Steps.Step;
  return (
    <div>
      <ul className="tab-ui p-4 rounded-xl max-lg:hidden">
        {stepData.map((item, idx) => (
          <li className="list-none" key={idx}>
            <Link
              href={item.link}
              className={activeStep == item.title ? "active" : null}
            >
              {item.icon} {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <Steps>
        <Step status="finish" title="Login" icon={<Icon type="user" />} />
        <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
        <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
        <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
      </Steps> */}

      <div>{children}</div>
      
    </div>
  );
};

export default Stepper;
