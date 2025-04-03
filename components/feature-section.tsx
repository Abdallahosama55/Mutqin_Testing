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
      title: dictionary.featureSection.advancedLinguisticChecking.title,
      description: dictionary.featureSection.advancedLinguisticChecking.description,
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      title: dictionary.featureSection.diverseContentSupport.title,
      description: dictionary.featureSection.diverseContentSupport.description,
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      title: dictionary.featureSection.highQualityContent.title,
      description: dictionary.featureSection.highQualityContent.description,
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      title: dictionary.featureSection.styleControl.title,
      description: dictionary.featureSection.styleControl.description,
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      title: dictionary.featureSection.seoOptimization.title,
      description: dictionary.featureSection.seoOptimization.description,
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      title: dictionary.featureSection.customTemplates.title,
      description: dictionary.featureSection.customTemplates.description,
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section className={`py-16 md:py-24 ${theme === "dark" ? "bg-[#0D1530]" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
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
      className={`rounded-lg overflow-hidden ${theme === "dark" ? "bg-[#0A1128] border border-[#1A2642]" : "bg-white border border-gray-100 shadow-sm"}`}
    >
      <div className="p-6">
        <div className="flex items-start gap-2 mb-4">
          <span className="text-xl font-bold text-right flex-1">{title}</span>
          <span className="text-primary">✨</span>
        </div>
        <p className={`mb-6 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{description}</p>
        <div
          className="relative rounded-lg overflow-hidden"
          style={{ background: "linear-gradient(to bottom right, #6C31FF, #FF9D4A)" }}
        >
          <div className="absolute inset-[1px] rounded-lg overflow-hidden">
            <div className={`w-full h-full ${theme === "dark" ? "bg-[#0A1128]" : "bg-white"}`}>
              <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-auto rounded-lg" />
            </div>
          </div>
          <div className="pt-[56.25%]"></div> {/* 16:9 aspect ratio */}
        </div>
      </div>
    </div>
  )
}

