import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";

export default function InvestCTASection() {
  return (
    <section className='py-12 md:py-20 flex justify-center items-center'>
      <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center'>
        <div className='hidden lg:block lg:w-1/5' />
        <div className='relative w-full lg:w-4/5 h-64 sm:h-80 md:h-[520px] p-6 bg-[url("/images/img2.jpg")] bg-cover bg-center rounded-lg'>
          <Card className='w-full md:w-3/4 lg:w-xl p-6 md:p-8 bg-white/90 backdrop-blur-sm shadow-lg lg:absolute lg:-left-1/4 lg:top-1/2 lg:-translate-y-1/2'>
            <CardHeader className='gap-0'>
              <h2 className='font-extrabold text-2xl md:text-3xl lg:text-[40px] tracking-tight leading-tight text-red-800'>
                Invest in Türkiye,
                <br /> Secure Your Future
              </h2>
            </CardHeader>
            <CardContent>
              <p className='text-sm md:text-base'>
                From affordable apartments to high-value projects, we help you
                make smart property investments.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href='/invest'
                passHref>
                <Button
                  asChild
                  className='bg-red-600 text-white'>
                  <span>
                    Learn more <ArrowRight />
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
