"use client";

import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const cities = [
  {
    name: "Istanbul",
    description:
      "Where culture meets business, offering luxury living and endless opportunities.",
    image: "/images/istanbul.jpg",
    link: "Explore Istanbul",
    size: "large",
  },
  {
    name: "Antalya",
    description:
      "Sunny beaches, resorts, and a relaxed lifestyle with high rental returns.",
    image: "/images/antalya.jpg",
    link: "Explore Antalya",
    size: "small",
  },
  {
    name: "Ankara",
    description:
      "The capital city with affordable housing and modern living for families.",
    image: "/images/ankara.jpg",
    link: "Explore Ankara",
    size: "small",
  },
  {
    name: "Izmir",
    description:
      "A coastal city with a laid-back vibe, modern life, and rising investments.",
    image: "/images/izmir.jpg",
    link: "Explore Izmir",
    size: "small",
  },
];

export function CitySection() {
  const largeCityCard = cities[0];
  const smallCityCards = cities.slice(1);

  return (
    <section className='flex flex-col w-full max-w-screen-xl mx-auto items-center justify-center gap-8 px-4 py-12 md:py-20'>
      <div className='flex flex-col md:flex-row items-start justify-between w-full gap-6 md:gap-8'>
        <Card
          className='w-full md:w-[540px] h-64 sm:h-80 md:h-[440px] p-0 rounded-lg overflow-hidden border-0 shadow-none cursor-pointer hover:opacity-90 transition-opacity'
          style={{
            backgroundImage: `url(${largeCityCard.image})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}>
          <CardContent className='flex gap-2.5 w-full h-full rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(7,11,27,0)_0%,rgba(7,11,27,1)_100%)] flex-col justify-end p-0'>
            <div className='flex flex-col items-start w-full px-6 sm:px-8 pb-12 pt-0'>
              <h3 className='font-extrabold text-xl sm:text-2xl md:text-2xl tracking-tighter text-white'>
                {largeCityCard.name}
              </h3>

              <p className='text-white text-xs sm:text-sm md:text-sm'>
                {largeCityCard.description}
              </p>

              <Link
                href='#'
                className='inline-flex items-center gap-2 mt-4 text-white'>
                <span className='font-medium text-sm'>
                  {largeCityCard.link}
                </span>
                <ArrowRightIcon className='w-4 h-4 text-white' />
              </Link>
            </div>
          </CardContent>
        </Card>
        <div className='flex flex-col items-center md:items-start gap-6 md:pl-6 lg:pl-10 w-full md:w-1/2'>
          <h2 className="w-full md:w-auto font-normal text-2xl sm:text-3xl md:text-4xl text-center md:text-left leading-8 md:leading-9 [font-family:'Inter',Helvetica]">
            <span className='font-extrabold text-[#8c0008] tracking-tighter leading-8 md:leading-10 block'>
              Discover the Best Cities
            </span>
            <span className="[font-family:'Playfair_Display',Helvetica] font-extrabold text-[#8c0008] tracking-[-0.39px] leading-8 md:leading-10 block">
              to Live &amp; Invest in Turkey
            </span>
          </h2>

          <p className='w-full md:w-[500px] text-neutral-700 text-sm md:text-base text-center md:text-left leading-relaxed'>
            Each city offers a unique blend of culture, lifestyle, and
            opportunities. Explore and choose the one that feels like home.
          </p>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {smallCityCards.map((city, index) => (
          <Card
            key={index}
            className='w-full h-64 sm:h-80 md:h-[440px] p-0 rounded-lg overflow-hidden border-0 shadow-none cursor-pointer hover:opacity-90 transition-opacity'
            style={{
              backgroundImage: `url(${city.image})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
            }}>
            <CardContent className='flex gap-2.5 h-full w-full rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(7,11,27,0)_0%,rgba(7,11,27,1)_100%)] flex-col justify-end p-0'>
              <div className='flex flex-col items-start w-full px-6 sm:px-8 pb-12 pt-0'>
                <h3 className='font-extrabold text-xl sm:text-2xl tracking-tighter text-white'>
                  {city.name}
                </h3>

                <p className='text-white text-xs sm:text-sm'>
                  {city.description}
                </p>

                <div className='inline-flex items-center gap-2 mt-4'>
                  <Link
                    href='#'
                    className='inline-flex items-center gap-2 mt-4 text-white'>
                    <span className='font-medium text-sm'>{city.link}</span>
                    <ArrowRightIcon className='w-4 h-4 text-white' />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
