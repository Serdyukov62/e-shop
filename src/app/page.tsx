/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  width={400}
                  height={400}
                  src="/snake-1.png"
                  alt="Логотип"
                />
              </div>
              <h1
                className="relative w-fit tracking-tighter text-balance 
              mt-16 font-bold !leading-tight text-gray-900 text-5xl 
              md:text-6xl lg:text-7xl"
              >
                Твоя цитата для{" "}
                <span className="bg-green-600 px-2 text-white">Твоего</span>{" "}
                Магазина
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Еще одна цитата для{" "}
                <span className="font-semibold">Твоего</span> Магазина
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Опции услуги
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Опции услуги
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Опции услуги
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/user-1.png"
                    alt="Иконка пользователя"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/user-2.png"
                    alt="Иконка пользователя"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/user-3.png"
                    alt="Иконка пользователя"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/user-4.jpg"
                    alt="Иконка пользователя"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/user-5.jpg"
                    alt="Иконка пользователя"
                  />
                </div>
                <div className="flex justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                </div>
                <p>
                  <span className="font-semibold">1.250</span> счастливых
                  пользователей
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 
          w-full flex justify-center px-8 
          sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/your-image.png" alt="" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" />
              <img src="/line.png" alt="" className="absolute w-20 -left-6 -bottom-6 select-none " />
              <Phone className="w-64" imgSrc='/testimonials/1.jpg'/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
