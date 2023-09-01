import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import TextEditor from "src/components/common/TextEditor";

const TourItinerary = () => {
  return (
    <>
      <div className="p-5">
        <p className="text-xl font-bold pb-2">Day 1</p>
        <TextEditor />
        <p className="text-xl font-bold pb-2">Day 2</p>
        <TextEditor />
        <p className="text-xl font-bold pb-2">Day 3</p>
        <TextEditor />
        <p className="text-xl font-bold pb-2">Day 4</p>
        <TextEditor />
        <p className="text-xl font-bold pb-2">Day 5</p>
        <TextEditor />
      </div>
    </>
  );
};

export default TourItinerary;
