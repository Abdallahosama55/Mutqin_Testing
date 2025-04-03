import { FeatureCard } from "@/components/feature-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Edit, Search, Settings, Users } from "lucide-react"
import { FeatureSection } from "@/components/feature-section"
import { SolutionsCarousel } from "@/components/solutions-carousel"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { FAQSection } from "@/components/faq-section"
import { PricingPlans } from "@/components/pricing-plans"
import { ContentFramesSection } from "@/components/content-frames-section"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const direction = lang === "ar" ? "rtl" : "ltr"

  return (
    <div className="bg-white dark:bg-[#0D1530] transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
       
        <div className="flex flex-col md:flex-row items-center gap-8">
      
          <div className="md:w-1/2 space-y-6 text-center md:text-right order-1 md:order-1">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm">{dictionary.hero.tagline}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white">
              {dictionary.hero.title}
            </h1>
            <p className="text-lg text-muted-foreground dark:text-gray-300">{dictionary.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <span className="flex items-center">
                  {dictionary.hero.startButton}
                  <ChevronLeft className="ms-2 h-4 w-4" />
                </span>
              </Button>
              <Button variant="outline" size="lg">
                {dictionary.hero.noCardNeeded}
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 order-2 md:order-2">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Editor Interface"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Edit className="h-8 w-8" />}
            title={dictionary.features.effectiveWriting.title}
            description={dictionary.features.effectiveWriting.description}
          />
          <FeatureCard
            icon={<Settings className="h-8 w-8" />}
            title={dictionary.features.writingTools.title}
            description={dictionary.features.writingTools.description}
          />
          <FeatureCard
            icon={<Search className="h-8 w-8" />}
            title={dictionary.features.seoOptimization.title}
            description={dictionary.features.seoOptimization.description}
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title={dictionary.features.continuousSupport.title}
            description={dictionary.features.continuousSupport.description}
          />
        </div>
      </section>

      {/* Content Frames Section - NEW SECTION */}
      <ContentFramesSection dictionary={dictionary} direction={direction} />

      {/* New Feature Section that matches the images */}
      <FeatureSection direction={direction} dictionary={dictionary} />

      {/* Solutions Carousel */}
      <SolutionsCarousel dictionary={dictionary} direction={direction} />

      {/* Pricing Plans */}
      <PricingPlans dictionary={dictionary} direction={direction} />

      {/* FAQ Section */}
      <FAQSection dictionary={dictionary} direction={direction} />
    </div>
  )
}

