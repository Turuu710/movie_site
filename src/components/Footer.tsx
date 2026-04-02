import { Facebook, Instagram, Popcorn, Twitter, Youtube } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-70 bg-[#4338CA] max-sm:h-83.75">
      <div className="w-full h-50 py-10 px-20 text-[#FAFAFA] flex flex-row justify-between max-sm:flex max-sm:flex-col max-sm:pl-7.5">
        <div className="flex flex-col w-61.75 h-13 max-sm:mb-7">
          <div className="flex flex-row gap-[9.67px] w-23 h-5 items-center text-[#FAFAFA]">
            <p className="font-bold text-[16px] flex items-center gap-1">
              <Popcorn color="white" />
              MovieWeb
            </p>
          </div>
          <div className="pt-3 font-normal text-[14px]">
            © 2026 Movie Web. All Rights Reserved.
          </div>
        </div>
        <div className="flex gap-24 max-sm:flex max-sm:justify-between ">
          <div className="text-[14px] text-[#FAFAFA]">
            <p>Contact Information</p>
            <div className="flex gap-3 pt-3 justify-center items-center">
              <img className="w-4 h-4" src="/Wifi icon.png" alt="" />
              <div className="flex flex-col">
                <h3 className="font-bold">Email:</h3>
                <p className="font-normal">support@movieZ.com</p>
              </div>
            </div>
            <div className="pt-6 flex gap-3 justify-center items-center">
              <img src="/Vector (11).png" alt="" />
              <div className="flex flex-col">
                <h3 className="font-bold">Phone:</h3>
                <p className="font-normal">+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-[14px] text-[#FAFAFA]">
            <p>Follow us</p>
            <div className="flex gap-3 pt-3 max-sm:flex max-sm:flex-col">
              <p className="flex items-center gap-2 text-xs">
                <Facebook />
                Facebook
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Instagram />
                Instagram
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Twitter />
                Twitter
              </p>
              <p className="flex items-center gap-2 text-xs">
                <Youtube />
                Youtube
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
