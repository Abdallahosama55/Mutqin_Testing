import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  direction: "rtl" | "ltr";
  dictionary: any;
}

export function Footer({ direction, dictionary }: FooterProps) {
  return (
    <section className=" footerbg ">
      <footer
        className="bg-[#6C31FF]  lg:mx-32  my-6 rounded-lg  text-white py-12"
        dir={direction}
      >
        <div className="container  mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:order-1 text-center md:text-right">
              <div className="flex justify-center md:justify-start mb-4">
                <div className=" rounded-full h-16 w-16 flex items-center justify-end">
                  <img src="./png/whitelogo.png" />
                </div>
              </div>
              <p className="text-sm md:text-base mb-4">
                {dictionary.footer.description}
              </p>
            </div>

            {/* Features Column */}
            <div className="md:order-2 text-center md:text-right">
              <h3 className="font-bold text-lg mb-4">
                {dictionary.footer.features.title}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.features.crossPlatform}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.features.accurateRecording}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.features.realTimeSearch}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.features.instantInteraction}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.features.customizedResponses}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.features.multilingual}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.features.discoverMore}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="md:order-3 text-center md:text-right">
              <h3 className="font-bold text-lg mb-4">
                {dictionary.footer.solutions.title}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.solutions.articleWriting}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.solutions.socialMediaContent}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.solutions.seoOptimization}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.solutions.contentStrategies}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.solutions.emailMarketing}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.solutions.discoverMore}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Users Column */}
            <div className="md:order-4 text-center md:text-right">
              <h3 className="font-bold text-lg mb-4">
                {dictionary.footer.users.title}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.users.contentWriters}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.users.contentCreators}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.users.podcastCreators}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.users.trainers}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.users.contentManagers}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {dictionary.footer.users.socialMediaMarketers}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/30 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col    md:flex-row-reverse justify-between items-start">
            {/* Social Media Icons */}
            <div className="flex items-center flex-row-reverse gap-3 mb-4 md:mb-0">
              <Link
                href="https://www.linkedin.com/company/mutqinai"
                className="hover:text-white/80 w-[22px]"
              >
                <img src="/png/fac.png" />
              </Link>
              <Link
                href="https://twitter.com/mutqinai"
                className="hover:text-white/80 w-[22px]"
              >
                <img src="/png/xx.svg" />
              </Link>
              <Link
                href="https://www.instagram.com/mutqinai1"
                className="hover:text-white/80 w-[22px]"
              >
                <img src="/png/insa.svg" />
              </Link>
              <Link
                href="https://www.facebook.com/mutqinai"
                className="hover:text-white/80 w-[22px]"
              >
                <img src="/png/ins.svg" />
              </Link>
              <Link
                href="https://www.tiktok.com/@mutqinai"
                className="hover:text-white/80 w-[22px]"
              >
                <img src="/png/tik.svg" />
              </Link>
              <Link
                href="https://www.youtube.com/@mutqinai"
                className="hover:text-white/80 w-[22px]"
              >
                <img src="/png/you.svg" />
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm">{dictionary.footer.copyright}</div>
          </div>
        </div>
      </footer>
    </section>
  );
}
