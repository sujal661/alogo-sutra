"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimate from '@/components/animations/ScrollAnimate';
import { Caveat, Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  product: z.string().min(1, "Please select a product"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Form Components
const FormField = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-2">{children}</div>
);

const FormLabel = ({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: boolean;
}) => (
  <label
    className={`block text-2xl font-medium ${
      error ? "text-red-500" : "text-gray-700"
    }`}
  >
    {children}
  </label>
);

const FormMessage = ({ children }: { children?: React.ReactNode }) =>
  children ? (
    <p className="text-sm text-red-500 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
      {children}
    </p>
  ) : null;

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none ${className}`}
    {...props}
  />
));

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className = "", children, ...props }, ref) => (
  <select
    ref={ref}
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none appearance-none bg-white ${className}`}
    {...props}
  >
    {children}
  </select>
));

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none ${className}`}
    {...props}
  />
));

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form Data:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-30  bg-[#F0F0F0] py-8 px-4 sm:px-6 lg:px-8">
      <ScrollAnimate>
        <div className=" mx-auto flex justify-start flex-col  md:items-center ">
        {/* Header */}
        <div className={`text-center ${poppins.className} mb-8 z-50 sm:mb-12 animate-in fade-in slide-in-from-top-4 duration-700`}>
          <p className="text-[39px] sm:text-6xl lg:text-[64px] font-normal text-[#161616] mb-4">
            Contact AlgoSutraa
          </p>
          <p className="sm:text-[18px] font-normal text-[#161616] text-base mt-10  md:px-40">
            Whether you want to learn algo trading, explore strategies, automate
            your own idea, or just general enquiry, our team is happy to help
            you find the right path.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white z-50 rounded-2xl lg:w-4xl shadow-xl  p-6 sm:p-8 lg:p-10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <p className={`text-center ${inter.className} font-normal  text-[17px] text-gray-700 mb-8`}>
            We'd love to hear from you. Fill out the form below and we'll reach
            out to you in 48hrs.
          </p>

          <div className={` ${poppins.className} font-medium space-y-6 text-[#1C4245] text-[14px] md:text-[18px]`}>
            {/* Name Field */}
            <FormField  >
              <FormLabel error={!!errors.name}><p className="text-[16px] md:text-[20px]">Name</p></FormLabel>
              <Input
                {...register("name")}
                placeholder="Your Name"
                className={errors.name ? "border-red-500" : ""}
              />
              <FormMessage>{errors.name?.message}</FormMessage>
            </FormField>

            {/* Email Field */}
            <FormField>
              <FormLabel error={!!errors.email}><p className="text-[16px] md:text-[20px]">Email</p></FormLabel>
              <Input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className={errors.email ? `border-red-500 placeholder:${inter.className}  ` : ` placeholder:${inter.className}`}
              />
              <FormMessage>{errors.email?.message}</FormMessage>
            </FormField>

            {/* Product Field */}
            <FormField>
              <FormLabel error={!!errors.product}><p className="text-[16px] md:text-[20px]">Product</p></FormLabel>
              <div className="relative">
                <Select
                  {...register("product")}
                  className={errors.product ? "border-red-500 placeholder:text-[#1C4245]" : " placeholder:text-[#1C4245]"}
                >
                  <option className="text-[#1C4245] text-[14px] md:text-[18px]" value="">Select Product</option>
                  <option className="text-[#1C4245] text-[14px] md:text-[18px]" value="algo-trading-course">
                    Algo Trading Course
                  </option>
                  <option className="text-[#1C4245] text-[14px] md:text-[18px]" value="strategy-development">
                    Strategy Development
                  </option>
                  <option className="text-[#1C4245] text-[14px] md:text-[18px]" value="automation-service">Automation Service</option>
                  <option className="text-[#1C4245] text-[14px] md:text-[18px]" value="consulting">Consulting</option>
                  <option className="text-[#1C4245] text-[14px] md:text-[18px]" value="other">Other</option>
                </Select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <FormMessage>{errors.product?.message}</FormMessage>
            </FormField>

            {/* Message Field */}
            <FormField>
              <FormLabel error={!!errors.message}><p className="text-[16px] md:text-[20px]">Message</p></FormLabel>
              <Textarea
                {...register("message")}
                placeholder="Write your Message"
                rows={5}
                className={errors.message ? `border-red-500  placeholder:${inter.className} `  : ` placeholder:${inter.className}`}
              />
              <FormMessage>{errors.message?.message}</FormMessage>
            </FormField>

            {/* Submit Button */}
            {/* <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : submitSuccess ? (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Message Sent!
                </span>
              ) : (
                "Submit Message"
              )}
            </button> */}

            <div className="w-full flex justify-center text-2xl ">
              <Button
                type="button"
                variant={"default"}
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className=" w-full           /* mobile: full width */
    sm:w-[70%]             /* small screens */
    md:w-[50%]             /* medium screens */
    lg:w-[360px]             /* large screens (original) */
    text-base sm:text-[14px] md:text-[16px] h-[50%] rounded-full md:px-[24px] md:py-[13px]  "

   
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : submitSuccess ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  "Submit Message"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimate>
      

      {/* Contact Information */}
     <ScrollAnimate>
      <div className=" w-full flex justify-center ">
        <div className=" w-[100%] bg-[#1A73E8] rounded-[20px] shadow-xl p-6 sm:p-8 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className={`text-[32px] justify-start px-8 sm:text-3xl font-normal md:text-[32px] ${poppins.className} text-white md:text-center mb-8`}>
            Contact Information
          </h2>

          <div className={`md:grid md:grid-cols-1 ${poppins.className} flex-col items-center  justify-center md:grid-cols-3 md:px-7 gap-1 lg:gap-2`}>
            {/* Office Address */}
            <div className="flex mb-4  flex-row items-start justify-start md:justify-center gap-4  group">
              <div className="px-2 rounded-full mb-4  transition-all duration-300 group-hover:scale-110">
                <MapPin   className="w-6 h-6 bg-transparent text-white " />
              </div>
              <div>

                <h3 className="md:text-[18] font-semibold text-white mb-2">
                Office Address
              </h3>
              <p className={`${inter.className} text-blue-100 md:text-[18px] `}>
                Al Marzouqi Building, Office No. 214, Al Goze
                <br />
                First, Sheikh Zayed Road, Dubai, UAE
              </p>

              </div>
              
            </div>

            {/* Email */}
            <div className="flex flex-row mb-4   h-full items-start justify-start md:justify-center gap-4  group">
              <div className=" px-2 rounded-full mb-4  transition-all duration-300 group-hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                  <h3 className="md:text-[18] font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:info@algosutraa.com"
                className={`${inter.className} text-blue-100 hover:text-white transition-colors duration-200 md:text-[18px]`}
              >
                info@algosutraa.com
              </a>
              </div>
            
            </div>

            {/* Phone Number */}
            <div className="flex flex-row h-full items-start justify-start md:justify-center gap-4  group">
              <div className=" px-2 rounded-full mb-4  transition-all duration-300 group-hover:scale-110">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                 <h3 className="md:text-[18] font-semibold text-white mb-2">
                Phone Number
              </h3>
              <a
                href="tel:+971502584173"
                className={`text-blue-100 hover:text-white transition-colors duration-200 ${inter.className} md:text-[18]`}
              >
                +971 502584173
              </a>
              </div>
             
            </div>

            
          </div>
        </div>
      </div>
      </ScrollAnimate>

      <div className=" absolute top-0 left-0 z-10 bg-dots-wave w-full h-[40vh]"/>
      
    </div>
  );
}
