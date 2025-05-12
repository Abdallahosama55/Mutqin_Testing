"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";
import { useTheme } from "next-themes";

interface PricingPlansProps {
  dictionary: any;
  direction: "rtl" | "ltr";
}

export function PricingPlans({ dictionary, direction }: PricingPlansProps) {
  const { theme } = useTheme();
  const [couponCode, setCouponCode] = useState("");
  const plans = dictionary.pricingPlans;

  return (
    <section
      className={`py-16 md:py-12  border-t border-gray-100 dark:border-gray-800`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {plans.title}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300">
            {plans.subtitle}
          </p>

          <img
            src="/png/l.png"
            className="  mt-8 mb-4 w-[800px] h-[2px] mx-auto container"
          />
        </div>

        {/* Special Offer */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className=" space-y-4">
            <h3 className="text-xl text-center font-bold dark:text-white">
              {plans.specialOffer.title}
            </h3>
            <p className="text-lg text-center dark:text-gray-300">
              {plans.specialOffer.description}
            </p>
            <p className="text-primary text-center font-bold">
              {plans.specialOffer.couponCode}
            </p>

            <div className="flex  sm:flex-row gap-2 justify-center mt-4">
              <Input
                placeholder={plans.specialOffer.enterCoupon}
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="max-w-auto lg:max-w-[250px] border-[1px] border-[#1B223C] outline-0 focus:outline-none mx-auto sm:mx-0"
              />

              <Button
                className="relative overflow-hidden group transition-all duration-300 bg-primary md:flex  py-5 px-4   hover:bg-[#5a29d4] text-white"
                size="sm"
              >
                <span className="flex items-center text-sm">
                  <span className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 text-lg text-base-black w-full font-semibold transition-all duration-500 group-hover:bottom-[-30px] text-center">
                    {plans.specialOffer.apply}
                  </span>

                  {/* Main text */}
                  <span className="text-[16px] text-base-black font-medium leading-[160%]">
                    {plans.specialOffer.apply}
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Annual Plan */}
          <div
            className={`rounded-lg border  dark:bg-[#0A1128] dark:border-gray-700 bg-white border-gray-200 overflow-hidden shadow-sm`}
          >
            <div className="p-6 flex flex-col gap-2 ">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {plans.annual.title}
              </h3>
              <div className=" flex justify-between">
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-extrabold dark:text-white">
                    ${plans.annual.price}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {plans.annual.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {plans.annual.perDay}
                  </p>
                </div>
              </div>
              <Button className="w-full bg-[#FFCA64] hover:bg-amber-500 text-gray-800">
                {direction === "rtl" ? (
                  <span className="flex items-center">
                    {plans.subscribeNow}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ms-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center">
                    {plans.subscribeNow}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ms-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Quarterly Plan (Most Popular) */}
          <div className="rounded-lg border  border-primary overflow-hidden shadow-lg relative">
            <div className="  z-30 inset-x-0 bg-primary text-white py-1 text-center">
              <div className="flex items-center py-1 justify-center">
                <Star className="h-4 w-4 me-1 fill-white" />
                <span>{plans.mostPopular}</span>
              </div>
            </div>
            <div className="p-6 pt-8  bg-primary/0 backdrop-blur dark:bg-primary/20 h-full">
              <h3 className="text-xl font-medium mb-4 text-[#6B6566] dark:text-white">
                {plans.quarterly.title}
              </h3>
              <div className=" flex justify-between">
                <div className="flex justify-start items-baseline mb-4">
                  <span className="text-4xl font-bold dark:text-white">
                    ${plans.quarterly.price}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {plans.quarterly.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {plans.quarterly.perDay}
                  </p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                {direction === "rtl" ? (
                  <span className="flex items-center">
                    {plans.subscribeNow}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ms-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center">
                    {plans.subscribeNow}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ms-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            className={`rounded-lg border dark:bg-[#0A1128] dark:border-gray-700
            bg-white border-gray-200"
            overflow-hidden shadow-sm`}
          >
            <div className="p-6 ">
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {plans.monthly.title}
              </h3>
              <div className=" flex justify-between">
                <div className="flex  items-baseline mb-4">
                  <span className="text-4xl font-extrabold dark:text-white">
                    ${plans.monthly.price}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {plans.monthly.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {plans.monthly.perDay}
                  </p>
                </div>
              </div>
              <Button className="w-full bg-[#FFCA64] hover:bg-amber-500 text-gray-800">
                {direction === "rtl" ? (
                  <span className="flex items-center">
                    {plans.subscribeNow}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ms-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center">
                    {plans.subscribeNow}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ms-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
