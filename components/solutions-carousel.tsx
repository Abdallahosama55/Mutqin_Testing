"use client";

import type * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Pencil, Video } from "lucide-react";
import { useTheme } from "next-themes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SolutionsCarouselProps {
  dictionary: any;
  direction: "rtl" | "ltr";
}

export function SolutionsCarousel({
  dictionary,
  direction,
}: SolutionsCarouselProps) {
  const { theme } = useTheme();

  const solutions = [
    {
      icon: <Monitor className="h-5 w-5" />,
      title: dictionary.customSolutions.contentManagers.title,
      description: dictionary.customSolutions.contentManagers.description,
    },
    {
      icon: <Pencil className="h-5 w-5" />,
      title: dictionary.customSolutions.contentWriters.title,
      description: dictionary.customSolutions.contentWriters.description,
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: dictionary.customSolutions.contentCreators.title,
      description: dictionary.customSolutions.contentCreators.description,
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: dictionary.customSolutions.contentManagers.title,
      description: dictionary.customSolutions.contentManagers.description,
    },
    {
      icon: <Pencil className="h-5 w-5" />,
      title: dictionary.customSolutions.contentWriters.title,
      description: dictionary.customSolutions.contentWriters.description,
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: dictionary.customSolutions.contentCreators.title,
      description: dictionary.customSolutions.contentCreators.description,
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: dictionary.customSolutions.contentManagers.title,
      description: dictionary.customSolutions.contentManagers.description,
    },
    {
      icon: <Pencil className="h-5 w-5" />,
      title: dictionary.customSolutions.contentWriters.title,
      description: dictionary.customSolutions.contentWriters.description,
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: dictionary.customSolutions.contentCreators.title,
      description: dictionary.customSolutions.contentCreators.description,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    // speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    // swipeToSlide: true,
  
    cssEase: "linear",
    rtl: direction === "rtl",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            centerMode: true,

          slidesToShow: 3.4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <section className="py-16 md:py-12 full-width h-full border-t faded-edges border-gray-100 dark:border-gray-800">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
          {dictionary.customSolutions.title}
        </h2>

        <div className="relative px-6">
          <div className="absolute left-0 h-full w-6 bg-gradient-to-l z-10 from-transparent to-gray-50 dark:to-[#0D1530]" />
          <div className="absolute right-0 h-full w-6 bg-gradient-to-r z-10 from-transparent to-gray-50 dark:to-[#0D1530]" />
          
          <Slider {...settings}>
            {solutions.map((solution, index) => (
              <div key={index} className="px-2">
                <SolutionCard
                direction={direction}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  buttons={dictionary.customSolutions.buttons}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

interface SolutionCardProps {
  icon: React.ReactNode;
  direction?:any,
  title: string;
  description: string;
  buttons: {
    writeAbout: string;
    chooseLanguage: string;
    waitForCreativity: string;
  };
}

function SolutionCard({
  icon,
  title,
  description,
  direction,
  buttons,
}: SolutionCardProps) {
  return (
    <div className="p-[1px] h-[360px] rounded-lg bg-gradient-to-b from-[#692BEF] to-[#FFCA64]" dir={direction}>
      <Card className="h-full text-start bg-white dark:bg-[#0D1530] rounded-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-start">
            <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg mb-4 inline-flex">
              {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
          </div>
          <div className="my-3 text-xs rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 text-center text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {buttons.writeAbout}
            </div>
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 text-center text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {buttons.chooseLanguage}
            </div>
            <div className="bg-gray-100 px-4 py-3 text-center text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {buttons.waitForCreativity}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}