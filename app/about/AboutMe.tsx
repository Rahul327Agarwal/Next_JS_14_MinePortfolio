import React from "react";
import userData from "../../constants/data";
import imagesDetails, {
  imagesDetailsType,
} from "../../constants/techStackImages";
import SocialMediaDetails, {
  SocialMediaDetailsType,
} from "../../constants/SocialData";
import Image from "next/image";

interface AboutMeProps {
  // Add any props if needed
}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto h-48 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-5xl md:text-9xl font-bold py-12 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-gray-100 -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  target="_blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  rel="noopener noreferrer"
                >
                  mail
                </a>{" "}
                and I will get back. I swear.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I am looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  rel="noopener noreferrer"
                >
                  CV
                </a>{" "}
                and I would love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              {SocialMediaDetails.map(
                ({ name, title }: SocialMediaDetailsType) => (
                  <div
                    className="flex flex-row justify-start items-center "
                    key={name}
                  >
                    <a
                      href={userData.socialLinks[name]}
                      target="__blank"
                      className="flex flex-row items-center space-x-4 group"
                      rel="noopener noreferrer"
                    >
                      <div className="my-4">&rarr;</div>
                      <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                        {title}
                      </div>
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc: string, idx: number) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              {imagesDetails.map(({ name, alt }: imagesDetailsType) => (
                <Image
                  src={`/techStackImages/${name}`}
                  alt={alt}
                  key={name}
                  width={20}
                  height={20}
                  className="h-20 w-20 mx-4 my-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
