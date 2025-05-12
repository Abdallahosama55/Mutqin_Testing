"use client"

import { useTheme } from "next-themes"

interface FeatureSectionProps {
  direction: "rtl" | "ltr"
  dictionary: any
}

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
}

export function FeatureSection({ direction, dictionary }: FeatureSectionProps) {
  const { theme } = useTheme()

  const features: FeatureCardProps[] = [
    {
      title: dictionary.featureSection.highQualityContent.title,
      description: dictionary.featureSection.highQualityContent.description,
      imageSrc: "/png/f1.png",
    },
    {
      title: dictionary.featureSection.diverseContentSupport.title,
      description: dictionary.featureSection.diverseContentSupport.description,
      imageSrc: "/png/f2.png",
    },
    {
      title: dictionary.featureSection.advancedLinguisticChecking.title,
      description: dictionary.featureSection.advancedLinguisticChecking.description,
      imageSrc: "/png/f3.png",
    },
 
    {
      title: dictionary.featureSection.customTemplates.title,
      description: dictionary.featureSection.customTemplates.description,
      imageSrc: "/png/f4.png",
    },
    {
      title: dictionary.featureSection.seoOptimization.title,
      description: dictionary.featureSection.seoOptimization.description,
      imageSrc: "/png/f5.png",
    },
    {
      title: dictionary.featureSection.styleControl.title,
      description: dictionary.featureSection.styleControl.description,
      imageSrc: "/png/f6.png",
    },
    
  
  ]

  return (
    <section className={`py-16 md:py-8  `}>
      <div className="container mx-auto px-4">
        <div className="lg:w-[36%] mb-16">
        <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 bg-[#E6DCFC] text-sm">
              {dictionary.featureSection.propeties}
            </div>
          <h2 className={`text-3xl leading-[1.9] md:text-[32px] font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {dictionary.featureSection.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              direction={direction}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description, imageSrc, direction }: FeatureCardProps & { direction: "rtl" | "ltr" }) {
  const { theme } = useTheme()

  return (
    <div
      className={`rounded-lg border-[#1A6ADC]  backdrop-blur light:text-[#1B223C] overflow-hidden ${theme == "dark" ? " border border-[#1A2642]" : "bg-white border border-[#1A6ADC]  shadow-sm"}`}
    >
      <div className="p-6">
        <div className="flex items-start gap-2 mb-4">
          <img src="/png/start.svg"/>
          <span className="text-xl font-bold text-right flex-1">{title}</span>
   
        </div>
        <p className={`mb-6 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
        <div
          className="relative rounded-lg overflow-hidden"

        >
          <div className="absolute inset-[1px] rounded-lg overflow-hidden">
            <div className={`w-full h-full }`}>
              <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-auto rounded-lg" />
            </div>
          </div>
          <div className="pt-[56.25%]"></div> {/* 16:9 aspect ratio */}
        </div>
      </div>
    </div>
  )
}

