"use client";

import SimpleContactForm from "./SimpleContactForm";

export default function HomeCTAForm() {
  return (
    <section className='w-full py-10 bg-primary-soft/40 flex items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center justify-center p-4 space-y-3 md:space-y-0 md:space-x-4'>
        <div className='flex flex-col gap-0'>
          <p className='text-zinc-900 font-bold uppercase'>Contact</p>
          <p className='text-zinc-900 font-bold uppercase'>with us</p>
        </div>
        <SimpleContactForm />
      </div>
    </section>
  );
}
