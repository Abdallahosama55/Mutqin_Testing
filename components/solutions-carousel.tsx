"use client";

import type * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Pencil, Video, Mic, GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0D1530] border-t border-gray-100 dark:border-gray-800">
      <div className=" w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
          {dictionary.customSolutions.title}
        </h2>

        <div className="  ">
          <Carousel>
            <CarouselContent className="flex-nowrap  w-full">
              {solutions.map((solution, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/5 lg:basis-1/5 "
                >
                  <SolutionCard
                    icon={solution.icon}
                    title={solution.title}
                    description={solution.description}
                    buttons={dictionary.customSolutions.buttons}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

interface SolutionCardProps {
  icon: React.ReactNode;
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
  buttons,
}: SolutionCardProps) {
  return (
    <Card className="h-full bg-gray-50 dark:bg-[#0D1530] border border-gray-200 dark:border-gray-700 rounded-lg ">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg mb-4 inline-flex">
            {icon}
          </div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-0 p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full text-xs">
          {buttons.writeAbout}
        </Button>
        <Button variant="outline" size="sm" className="w-full text-xs">
          {buttons.chooseLanguage}
        </Button>
        <Button variant="outline" size="sm" className="w-full text-xs">
          {buttons.waitForCreativity}
        </Button>
      </CardFooter>
    </Card>
  );
}
