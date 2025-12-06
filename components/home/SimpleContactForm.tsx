"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  simpleContactSchema,
  SimpleContactFormData,
} from "@/lib/contactSchema";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { ArrowRight, Mail, Phone, User } from "lucide-react";

export default function SimpleContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SimpleContactFormData>({
    resolver: zodResolver(simpleContactSchema as any),
  });

  const onSubmit = async (data: SimpleContactFormData) => {
    try {
      const submitData = {
        ...data,
        pageUrl: window.location.href, // Capture current URL
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Your message has been sent!", {
        description: "We will get back to you soon.",
        action: {
          label: "Close",
          onClick: () => {
            toast.dismiss();
          },
        },
      });

      reset();
    } catch {
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col lg:flex-row gap-4'>
      <InputGroup className='bg-white rounded-sm h-12 text-zinc-900'>
        <InputGroupInput
          id='name'
          {...register("name")}
          placeholder='Name'
        />
        <InputGroupAddon>
          <User />
        </InputGroupAddon>
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
      </InputGroup>

      <InputGroup className='bg-white rounded-sm h-12 text-zinc-900'>
        <InputGroupInput
          id='surname'
          {...register("surname")}
          placeholder='Surname'
        />
        <InputGroupAddon>
          <User />
        </InputGroupAddon>
        {errors.surname && (
          <p className='text-red-500'>{errors.surname.message}</p>
        )}
      </InputGroup>

      <InputGroup className='bg-white rounded-sm h-12 text-zinc-900'>
        <InputGroupInput
          id='email'
          type='email'
          placeholder='Email'
          {...register("email")}
        />
        <InputGroupAddon>
          <Mail />
        </InputGroupAddon>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
      </InputGroup>

      <InputGroup className='bg-white rounded-sm h-12 text-zinc-900'>
        <InputGroupInput
          id='phone'
          {...register("phone")}
          placeholder='Phone'
        />
        <InputGroupAddon>
          <Phone />
        </InputGroupAddon>
        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
      </InputGroup>

      <Button
        type='submit'
        disabled={isSubmitting}
        className='bg-red-600 hover:bg-red-700 text-white h-12 px-8 font-semibold text-lg cursor-pointer'>
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Contact
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}
