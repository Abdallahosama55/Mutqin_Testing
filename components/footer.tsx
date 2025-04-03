import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  direction: "rtl" | "ltr"
  dictionary: any
}

export function Footer({ direction, dictionary }: FooterProps) {
  return (
    <section className=" footerbg">
    <footer className="bg-[#6C31FF]  mx-24  my-6 rounded-lg  text-white py-12">
      <div className="container  mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:order-4 text-center md:text-right">
            <div className="flex justify-center md:justify-end mb-4">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z"
                    stroke="#6C31FF"
                    strokeWidth="3"
                  />
                  <path
                    d="M15 15C15 12.7909 16.7909 11 19 11C21.2091 11 23 12.7909 23 15C23 17.2091 21.2091 19 19 19"
                    stroke="#6C31FF"
                    strokeWidth="3"
                  />
                  <path d="M19 23V29" stroke="#6C31FF" strokeWidth="3" />
                </svg>
              </div>
            </div>
            <p className="text-sm md:text-base mb-4">{dictionary.footer.description}</p>
          </div>

          {/* Features Column */}
          <div className="md:order-3 text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">{dictionary.footer.features.title}</h3>
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
          <div className="md:order-2 text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">{dictionary.footer.solutions.title}</h3>
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
          <div className="md:order-1 text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">{dictionary.footer.users.title}</h3>
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
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white/80">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white/80">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white/80">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white/80">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="hover:text-white/80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5 4.5C12.5 4.5 15.5 4.5 17.5 6.5C19.5 8.5 19.5 12 19.5 12C19.5 12 19.5 15.5 17.5 17.5C15.5 19.5 12.5 19.5 12.5 19.5C12.5 19.5 9.5 19.5 7.5 17.5C5.5 15.5 5.5 12 5.5 12C5.5 12 5.5 8.5 7.5 6.5C9.5 4.5 12.5 4.5 12.5 4.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L15 12L10 10V14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white/80">
              <Youtube size={20} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm">{dictionary.footer.copyright}</div>
        </div>
      </div>
    </footer>

    </section>

  )
}

