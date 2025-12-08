import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const aboutUsLinks = [
  { label: "Mission", href: "#" },
  { label: "Our team", href: "#" },
  { label: "Awards", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Privacy policy", href: "#" },
];

const buyersGuideLinks = [
  { label: "Investing in Turkey", href: "#" },
  { label: "Purchase Process", href: "#" },
  { label: "Residency Permit", href: "#" },
  { label: "Visas", href: "#" },
  { label: "Concierge Service", href: "#" },
];

const propertiesLinks = [
  { label: "Properties in istanbul", href: "/search?location%5B%5D=Istanbul" },
  { label: "Luxury apartment", href: "#" },
  { label: "Villas", href: "#" },
  { label: "Apartment", href: "#" },
  { label: "Bursa villas", href: "#" },
];

export default function Footer() {
  return (
    <footer className='flex flex-col items-start p-6 mt-20 w-full border-t [border-top-style:solid] border-[#e1e3ec] bg-[linear-gradient(0deg,rgba(0,20,48,0.95)_0%,rgba(0,20,48,0.95)_100%)]'>
      <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 py-8'>
        <div className='w-full flex flex-col lg:flex-row items-end justify-between pb-10 gap-6 border-b [border-bottom-style:solid] border-[#e1e3ec]'>
          <div className='flex flex-col items-start w-full lg:w-auto'>
            <div className='inline-flex flex-col items-center justify-center mb-6 lg:mb-0'>
              <Link href='/'>
                <Image
                  src='/PQT_logo.svg'
                  alt='Property Quest Logo'
                  width={150}
                  height={80}
                />
              </Link>
            </div>

            <p className='text-white max-w-md'>
              Find your dream property in Turkey. We provide beautiful Villas &
              Properties in cities of Turkey like Istanbul and Bursa. Luxurious
              Villas for Sale. Government Guaranteed.
            </p>
          </div>

          <div className='flex flex-col items-center w-full sm:w-1/2 gap-2'>
            <h3 className='text-white font-bold'>
              Subscribe to our newsletter
            </h3>

            <div className='inline-flex flex-col sm:flex-row items-center sm:items-stretch px-2 py-2 border border-solid border-[#f1f2f6] shadow-neutral-shadow-02 bg-[#ffffff] rounded-lg w-full gap-3'>
              <Input
                placeholder='Enter your email address'
                className='py-3 focus-visible:ring-0 shadow-none border-0 w-full sm:flex-1'
              />

              <Button className='bg-primary text-white hover:bg-app-secondary/90 w-full sm:w-auto whitespace-nowrap'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row items-start gap-8 justify-between'>
          <nav className='inline-flex flex-col items-start gap-4 lg:gap-8 w-full md:w-auto'>
            <h4 className=' text-white font-semibold'>About us</h4>

            <ul className='inline-flex flex-col items-start gap-4 lg:gap-6 '>
              {aboutUsLinks.map((link, index) => (
                <li
                  key={index}
                  className='inline-flex items-center gap-1.5'>
                  <Link
                    href={link.href}
                    className='text-[#b3b8c8] hover:text-primary transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className='inline-flex flex-col items-start gap-8 w-full md:w-auto'>
            <h4 className='font-semibold text-white '>Buyers Guide</h4>

            <ul className='inline-flex flex-col items-start gap-6'>
              {buyersGuideLinks.map((link, index) => (
                <li
                  key={index}
                  className='inline-flex items-center gap-1.5'>
                  <Link
                    href={link.href}
                    className='text-[#b3b8c8] hover:text-primary transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className='inline-flex flex-col items-start gap-8 w-full md:w-auto'>
            <h4 className='font-semibold text-white '>Properties</h4>

            <ul className='inline-flex flex-col items-start gap-6'>
              {propertiesLinks.map((link, index) => (
                <li
                  key={index}
                  className='inline-flex items-center gap-1.5'>
                  <Link
                    href={link.href}
                    className='text-[#b3b8c8] hover:text-primary transition-colors'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='inline-flex flex-col items-start gap-4 w-full md:w-auto'>
            <h4 className='font-semibold text-white '>Contact us</h4>

            <div className='inline-flex items-center gap-4 '>
              <Mail className='text-[#b3b8c8]' />
              <Link
                href='mailto:contact@propertyquestturkey.com'
                className='text-[#b3b8c8] hover:text-primary transition-colors'>
                contact@propertyquestturkey.com
              </Link>
            </div>

            <div className='inline-flex items-center gap-4'>
              <Phone className='text-[#b3b8c8]' />
              <Link
                href='tel:+14146875892'
                className='text-[#b3b8c8] hover:text-primary transition-colors'>
                (414) 687 - 5892
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full border-t [border-top-style:solid] border-[#e1e3ec]'>
        <div className='flex items-center justify-center gap-2.5 px-4 py-6 max-w-screen-xl mx-auto w-full'>
          <p className='w-full text-center'>
            <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              Copyright © 2025{" "}
            </span>

            <span className='text-[#b3b8c8] leading-[22px]'>
              Property Quest Turkey
            </span>

            <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              &nbsp;
            </span>

            <span className='text-[#e1e3ec] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              |
            </span>

            <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              {" "}
              All Rights Reserved{" "}
            </span>

            <span className='text-[#e1e3ec] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              |
            </span>

            <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              &nbsp;
            </span>

            <a
              href='#'
              className='text-[#6c748f] leading-[22px] underline hover:text-white transition-colors'>
              Terms and Conditions
            </a>

            <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              &nbsp;
            </span>

            <span className='text-[#e1e3ec] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              |
            </span>

            <span className='text-[#b3b8c8] leading-[var(--display-3-regular-line-height)] font-display-3-regular [font-style:var(--display-3-regular-font-style)] font-[number:var(--display-3-regular-font-weight)] tracking-[var(--display-3-regular-letter-spacing)] text-[length:var(--display-3-regular-font-size)]'>
              &nbsp;
            </span>

            <a
              href='#'
              className='text-[#6c748f] leading-[22px] underline hover:text-white transition-colors'>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
