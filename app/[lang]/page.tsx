
import { FeatureCard } from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Edit, Search, Settings, Users } from "lucide-react";
import { FeatureSection } from "@/components/feature-section";
import { SolutionsCarousel } from "@/components/solutions-carousel";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { FAQSection } from "@/components/faq-section";
import { PricingPlans } from "@/components/pricing-plans";
import { ContentFramesSection } from "@/components/content-frames-section";
import AllFeatures from "@/components/AllFeatures";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeImage from "@/components/ThemeImage";
import ProductionSection from "@/components/Production-Sections";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const direction = lang === "ar" ? "rtl" : "ltr";


  return (
    <div className=" bg-transparent  transition-colors duration-300">



{/* Hero Section */}
      <section
        className="container lg:px-0 px-4 z-30  mx-auto p-0  py-16 md:py-24"
        dir={direction}
      >
        
        <div className="flex flex-col md:flex-row z-10 justify-start items-start gap-8">
          <div className="md:w-1/2 flex  z-20 flex-col justify-start text-start space-y-6  md:text-right order-1 md:order-1">
            <div className=" flex">
              <div className="inline-block justify-start  text-start rounded-full dark:bg-primary/10 px-3 py-1 bg-[#E6DCFC] text-sm">
                {dictionary.hero.tagline}
              </div>
            </div>
            <h1
              className="text-4xl text-start md:text-4xl lg:text-5xl leading-[9rem]  text-[#1B223C]  font-bold text-foreground dark:text-white"
              style={{ lineHeight: "70px" }}
            >
              {dictionary.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground text-start dark:text-gray-300">
              {dictionary.hero.description}
            </p>
            <div className="flex flex-col sm:flex-col gap-4 justify-center md:justify-start md:items-start">
            <Button
            className=" relative overflow-hidden group transition-all duration-300 bg-[#6C31FF] md:flex  flex-inline lg:w-auto w-[48%]  py-6 px-6 hover:bg-[#5a29d4] text-white"
            size="sm"
          >
            <span className="flex items-center text-sm">
              <span className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 text-lg text-base-black w-full font-semibold transition-all duration-500 group-hover:bottom-[-30px] text-center">
                {dictionary.navbar.startNow}
              </span>

              {/* Main text */}
              <span className="text-[16px] text-base-black font-medium leading-[160%]">
                {dictionary.navbar.startNow}
              </span>

              <ChevronLeft className="ms-1 h-4 w-4" />
            </span>
          </Button>
              

              <span className=" flex items-center  gap-2 text-md  font-medium">
                {" "}
                <img src="./png/card.png" />
                {dictionary.hero.noCardNeeded}
              </span>
            </div>
          </div>

          <div className="md:w-1/2  flex justify-start relative order-2 md:order-2">
            {/* Main Image */}
            <ThemeImage />
          

            {/* Blob Image in the top-left corner */}
            <img
              src="/png/imgblob.png"
              alt="Blob Decoration"
              className="absolute lg:block hidden bottom-[-50px] end-[-60px]  z-0"
            />
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="container mx-auto px-4 py-16 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
      
            title={dictionary.features.effectiveWriting.title}
            description={dictionary.features.effectiveWriting.description}
          />
          <FeatureCard
          
            title={dictionary.features.writingTools.title}
            description={dictionary.features.writingTools.description}
          />
          <FeatureCard
    
            title={dictionary.features.seoOptimization.title}
            description={dictionary.features.seoOptimization.description}
          />
          <FeatureCard
      
            title={dictionary.features.continuousSupport.title}
            description={dictionary.features.continuousSupport.description}
          />
        </div>
      </section>
      {/* New Feature Section that matches the images */}
      <FeatureSection direction={direction} dictionary={dictionary} />
      <AllFeatures direction={direction} dictionary={dictionary} />

      {/* Content Frames Section - NEW SECTION */}
      <ContentFramesSection dictionary={dictionary} direction={direction} />

      {/* Solutions Carousel */}
      <SolutionsCarousel dictionary={dictionary} direction={direction} />

      {/* Pricing Plans */}
      <PricingPlans dictionary={dictionary} direction={direction} />

      {/* FAQ Section */}
      <FAQSection dictionary={dictionary} direction={direction} />
      {/**Production Section   */}
      <ProductionSection dictionary={dictionary} direction={direction} />
    </div>
  );
}
