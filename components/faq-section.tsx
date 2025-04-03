"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTheme } from "next-themes"

interface FAQSectionProps {
  dictionary: any
  direction: "rtl" | "ltr"
}

export function FAQSection({ dictionary, direction }: FAQSectionProps) {
  const { theme } = useTheme()
  const faqItems = dictionary.faq.items

  return (
    <section className={`py-16 md:py-24 ${theme === "dark" ? "bg-[#0D1530]" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{dictionary.faq.title}</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            {dictionary.faq.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item: any, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-lg font-medium py-5 text-right dark:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground dark:text-gray-300 text-right">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

