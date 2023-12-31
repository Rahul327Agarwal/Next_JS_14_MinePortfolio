import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "../constants/data";
import Image from "next/image";
import Style from "./CustomStyles.module.css";

interface MainPageMidSectionProps {
  // Add any props if needed
}

const MainPageMidSection: React.FC<MainPageMidSectionProps> = () => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  const AboutMe = ["Developer.", "Designer.", "Programmer.", "Youtuber."];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          {AboutMe.map((role: string, idx: number) => {
            return (
              <RainbowHighlight color={colors[idx]} key={idx} role={role}>
                <h1 className="text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
                  {role}
                </h1>
              </RainbowHighlight>
            );
          })}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <Image
            src={userData.avatarUrl}
            width={300}
            height={20}
            alt="myProfilePic"
            className={`${Style.objectCover} h-80`}
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns={`${process.env.W3URL}`}
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That is me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPageMidSection;
