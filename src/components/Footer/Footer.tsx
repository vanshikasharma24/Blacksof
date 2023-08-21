import React from "react";
import Image from "next/image";
import footer from "../../../public/Footer.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative">
      <Image src={footer} alt="footer" />
      <div className="">
        <div className="p-2 w-[80%] text-white flex justify-between absolute left-32 top-11 mx-auto ">
          <div className="flex gap-1 items-center">
            <Image
              src={"../../../headerlogo.svg"}
              alt={"image"}
              width={8}
              height={8}
              className="w-6 h-6"
            />
            <p className="font-inter">smart Lights</p>
          </div>
          <div className="flex gap-32 items-center">
            <Link href={"#"}>
              <p className="text-white">Products</p>
            </Link>
            <Link href={"#"}>
              <p className="text-white">Software Services</p>
            </Link>
            <Link href={"#"}>
              <p className="text-white">Follow Us</p>
            </Link>
          </div>
        </div>
        <div className="p-2 w-full text-white flex absolute bottom-11 mx-auto left-32">
          <p className="border-r border-white px-4">Privacy Policy</p>
          <p className="border-r border-white px-4">Terms and Conditions</p>
          <p className="border-r border-white px-4">Cookie Policy</p>
          <div className="absolute bottom-16 transform -translate-x-3/4 left-1/2">
            <div className="w-[958.222px] h-[1px] bg-white left-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
