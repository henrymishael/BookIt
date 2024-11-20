import { Heart } from "lucide-react";
import { MapPin } from "lucide-react";
import { House } from "lucide-react";
import { Bed } from "lucide-react";
import { Armchair } from "lucide-react";
import { Wand } from "lucide-react";
import { Tag } from "lucide-react";
import { Shrink } from "lucide-react";

import Image from "next/image";

export default function ListingSection() {
  return (
    <>
      <h1 className="text-center  m-14 font-inter text-[1.3125rem] md:text-[2.625rem] font-bold">
        Latest Listings
      </h1>
      <section className="bg-[#F4F4F2] p-4">
        <div className="flex items-center gap-3 bg-[#DFE9E2] w-20 p-2 mb-3 rounded-md">
          <p>Save</p>
          <Heart size={15} />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <Image
            alt="Image of Apartment 1"
            src="/images/Apartment1.jpeg"
            width={605}
            height={476}
          />
          <div className="flex flex-col lg:justify-center gap-6 lg:gap-20 w-full">
            <div className="">
              <p className="text-2xl">
                ₦ <span className="text-[#04A936] font-inter">8,000,000</span>{" "}
              </p>
              <p className="text-2xl text-[#2B3D02] font-inter font-medium">
                Flat for sale in Lekki, Lagos
              </p>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <p>Lagos</p>
              </div>
            </div>
            <section className="grid grid-cols-2 bg-[#DFE9E2] p-2 ">
              <div className="flex items-center gap-3 p-2">
                <House size={20} />
                <p>Duplex</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Tag size={20} />
                <p>Sale</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Bed size={20} />
                <p>2 BHK</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Wand size={20} />
                <p>Ready to move</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Armchair size={20} />
                <p>Semi-furnished</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Shrink size={20} />
                <p>Semi-furnished</p>
              </div>
            </section>
            <div className="flex gap-4">
              <button
                // variant={"default"}
                className="mt-4  w-[50%] lg:w-[315px] h-[60px] bg-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium font-montserrat"
              >
                View Property
              </button>
              <button
                // variant={"outline"}
                className="mt-4  w-[50%] lg:w-[315px] h-[60px] bg-[#F4F4F2] border-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium font-montserrat"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F2] p-4 mt-9">
        <div className="flex items-center gap-3 bg-[#DFE9E2] w-20 p-2 mb-3 rounded-md">
          <p>Save</p>
          <Heart size={15} />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <Image
            alt="Image of Apartment 2"
            src="/images/Apartment2.jpeg"
            width={605}
            height={476}
          />
          <div className="flex flex-col lg:justify-center gap-6 lg:gap-20 w-full">
            <div className="">
              <p className="text-2xl">
                ₦ <span className="text-[#04A936] font-inter">8,000,000</span>{" "}
              </p>
              <p className="text-2xl text-[#2B3D02] font-inter font-medium">
                Flat for sale in Lekki, Lagos
              </p>
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <p>Lagos</p>
              </div>
            </div>
            <section className="grid grid-cols-2 bg-[#DFE9E2] p-2 ">
              <div className="flex items-center gap-3 p-2">
                <House size={20} />
                <p>Duplex</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Tag size={20} />
                <p>Sale</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Bed size={20} />
                <p>2 BHK</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Wand size={20} />
                <p>Ready to move</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Armchair size={20} />
                <p>Semi-furnished</p>
              </div>
              <div className="flex items-center gap-3 p-2">
                <Shrink size={20} />
                <p>Semi-furnished</p>
              </div>
            </section>
            <div className="flex gap-4">
              <button
                // variant={"default"}
                className="mt-4  w-[50%] lg:w-[315px] h-[60px] bg-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium font-montserrat"
              >
                View Property
              </button>
              <button
                // variant={"outline"}
                className="mt-4  w-[50%] lg:w-[315px] h-[60px] bg-[#F4F4F2] border-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium font-montserrat"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>
      <button
        // variant={"default"}
        className="mt-9  mx-auto w-[8.5625rem] py-[1.25rem] px-[5.5rem] h-[60px] bg-brand-button flex justify-center items-center rounded-[15px] text-[16px] font-medium font-montserrat"
      >
        View All
      </button>
    </>
  );
}
