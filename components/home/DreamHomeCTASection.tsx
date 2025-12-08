"use client";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const imageColumns = [
  {
    images: [
      {
        src: "/images/1.jpg",
        alt: "Property image 1",
      },
      {
        src: "/images/2.jpg",
        alt: "Property image 2",
      },
      {
        src: "/images/3.jpg",
        alt: "Property image 3",
      },
    ],
    offsetClass: "",
  },
  {
    images: [
      {
        src: "/images/1.jpg",
        alt: "Property image 4",
      },
      {
        src: "/images/2.jpg",
        alt: "Property image 5",
      },
      {
        src: "/images/3.jpg",
        alt: "Property image 6",
      },
    ],
    offsetClass: "pt-8",
  },
];

export default function DreamHomeCTASection() {
  return (
    <section className='relative w-full flex items-center justify-center py-12 md:py-16 bg-black bg-[url(/images/img1.jpg)] bg-cover bg-center'>
      <div className='absolute inset-0 bg-black/80' />
      <div className='w-full max-w-screen-xl mx-auto z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6'>
        <div className='flex flex-col items-start gap-6 max-w-[432px] w-full lg:w-auto'>
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-white text-3xl md:text-4xl lg:text-5xl tracking-[-1.08px] leading-8 md:leading-9">
            Own Your Dream Home
            <br />
            in Türkiye Today
          </h2>

          <p className='text-white text-sm md:text-base leading-relaxed'>
            Luxury apartments, villas, and investment opportunities with trusted
            guidance from Property Quest Turkey.
          </p>

          <Link
            href='/'
            passHref>
            <Button
              asChild
              className='bg-white text-zinc-900 hover:bg-red-700 hover:text-white h-auto'>
              <span>
                Explore Properties <ArrowRightIcon className='w-3.5 h-3.5' />
              </span>
            </Button>
          </Link>
        </div>
        {/* Decorative image grid — hidden on small screens to avoid overflow */}
        <div className='hidden md:block w-[420px] h-[420px] overflow-hidden lg:w-[460px] lg:h-[460px]'>
          <div className='inline-flex items-start gap-4 lg:gap-6'>
            {imageColumns.map((column, columnIndex) => (
              <div
                key={`column-${columnIndex}`}
                className={`inline-flex flex-col items-start gap-4 lg:gap-6 ${column.offsetClass}`}>
                {column.images.map((image, imageIndex) => (
                  <div
                    key={`image-${columnIndex}-${imageIndex}`}
                    className='w-[170px] h-[210px] md:w-[200px] md:h-[250px] lg:w-[218px] lg:h-[273px] rounded-lg overflow-hidden bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${image.src})`,
                    }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className='w-full h-full object-cover'
                      width={218}
                      height={273}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
