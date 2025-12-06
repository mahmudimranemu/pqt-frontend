"use client";

import {
  ArrowRightIcon,
  Award,
  BadgePercent,
  Building2,
  UserStar,
} from "lucide-react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const featureCards = [
  {
    icon: <BadgePercent size={32} />,
    title: "Best prices",
    description:
      "Find premium properties in Istanbul, Antalya, Bodrum and beyond — at rates far below market value. Whether it’s a luxury apartment in Kadıköy or a seaside villa in Beylikdüzü, we negotiate with developers to secure under-priced deals and outstanding value.",
  },
  {
    icon: <Award size={32} />,
    title: "Client satisfaction",
    description:
      "Our clients consistently praise our professionalism, responsiveness and transparency. Many note how smoothly their purchase went — from first contact to handing over the keys — and how well we guided them through legal, financial and citizenship processes.",
  },
  {
    icon: <Building2 />,
    title: "Huge portfolio",
    description:
      "With access to a wide range of properties — cozy condos, spacious family apartments, luxury villas and high-end new developments — we help you find a home or investment that matches your lifestyle or financial goals. From 1-bedroom flats to 5+1 villas and full projects, our collection caters to first-time buyers, families and investors alike",
  },
  {
    icon: <UserStar size={32} />,
    title: "Experienced team",
    description:
      "Our multilingual and globally- minded team offers deep expertise in Turkish real estate, from market insight to legal support and citizenship applications. We combine local market knowledge with international client care, ensuring that every transaction is safe, seamless, and customized to your needs.",
  },
];

export default function AboutPQTSection() {
  return (
    <section className='flex flex-col items-center gap-12 px-4 md:px-8 lg:px-[167px] py-20 md:py-32 lg:py-40 w-full bg-white'>
      <div className='flex flex-col items-center gap-8 max-w-[1106px] w-full'>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex flex-col items-center gap-3.5'>
            <h1 className="max-w-[430px] font-extrabold text-dark-red text-4xl text-center tracking-[-1.08px] leading-9 [font-family:'Inter',Helvetica]">
              Property Quest Turkey
            </h1>

            <h2 className="max-w-[430px] [font-family:'Playfair_Display'] font-normal text-center leading-9 text-dark-red text-4xl tracking-[-1.08px]">
              for Lifestyle &amp; Investment
            </h2>
          </div>

          <p className="max-w-[618px] text-neutral-700 text-base text-center leading-6 [font-family:'Inter',Helvetica] font-normal tracking-[0]">
            Turkish Citizenship is an advantageous option for those looking to
            invest $400K or more in Turkey. Rather investing or buying your
            dream home along Turkey&apos;s Turquoise Coast, the Citizenship by
            Investment program allows you the flexibility to build your life as
            a Turkish Citizen. Additionally, you can take advantage of the
            countries medical and education services all for free as a Turkish
            Citizen. Contact us today to find out how you can be apart of
            Turkey&apos;s future.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px] w-full'>
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className='flex flex-col border-0 shadow-none bg-transparent'>
              <CardContent className='flex flex-col items-start gap-3 p-0'>
                <div className='w-full h-[174px] bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center'>
                  {card.icon}
                </div>

                <h3 className=' text-dark-red font-extrabold'>{card.title}</h3>

                <CardDescription>{card.description}</CardDescription>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
