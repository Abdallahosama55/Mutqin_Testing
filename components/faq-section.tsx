"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cn } from "@/lib/utils"; // if you're using classnames helper

interface FAQSectionProps {
  dictionary: any;
  direction: "rtl" | "ltr";
}

export function FAQSection({ dictionary, direction }: FAQSectionProps) {
  const { theme } = useTheme();
  const faqItems = dictionary.faq.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-16 md:py-12`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {dictionary.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            {dictionary.faq.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
            onValueChange={(value) => {
              const index = faqItems.findIndex((_, i) => `item-${i}` === value);
              setOpenIndex(index === -1 ? null : index);
            }}
          >
            {faqItems.map((item: any, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b bg-white dark:bg-[#0A1128] border-[1px] no-underline border-[#D9D8D8] rounded-lg px-6 dark:border-[#1A6ADC] transition-all duration-300"
              >
                <AccordionTrigger
                  className="flex justify-between items-center text-lg font-medium py-5 text-right dark:text-white hover:text-primary transition-colors duration-300 [&>svg]:hidden"
                  style={{ textDecoration: "none" }}
                >
                  <span>{item.question}</span>
                  <span className="ml-2 text-xl ">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground dark:text-gray-300 text-right transition-all duration-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
