import React from "react";
import { FeatureCard } from "./feature-card";
import { Edit, Search, Settings, Users } from "lucide-react";

interface featureAllProps {
  direction: "rtl" | "ltr";
  dictionary: any;
}

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}
function AllFeatures({ direction, dictionary }: featureAllProps) {
  return (
    <div>
      <section className="container mx-auto px-4 py-16 md:py-12">
        <div className="lg:w-[36%] mb-16">
          <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 bg-[#E6DCFC] text-sm">
            {dictionary.featureAll.propeties}
          </div>
          <h2
            className={`text-3xl leading-[1.7] md:text-[32px] font-bold mb-4 dark:text-gray-100 text-gray-900`}
          >
            {dictionary.featureAll.title}
          </h2>
          <p className="text-lg text-muted-foreground text-start dark:text-gray-300">
            {dictionary.featureAll.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={`/png/g1.png`}
            title={dictionary.featureAll.effectiveWriting.title}
            description={dictionary.featureAll.effectiveWriting.description}
          />
          <FeatureCard
          icon={`/png/g2.png`}
            title={dictionary.featureAll.writingTools.title}
            description={dictionary.featureAll.writingTools.description}
          />
          <FeatureCard
          icon={`/png/g3.png`}
            title={dictionary.featureAll.seoOptimization.title}
            description={dictionary.featureAll.seoOptimization.description}
          />
          <FeatureCard
          icon={`/png/g4.png`}
            title={dictionary.featureAll.continuousSupport.title}
            description={dictionary.featureAll.continuousSupport.description}
          />
        </div>
      </section>
    </div>
  );
}
export default AllFeatures;
