import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/Hero_section.png";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <div className="relative text-white flex flex-col items-center text-2xl h-screen w-screen">
            <Image
                src={HeroImage}
                alt="hero_image"
                layout="fill"
                objectFit="cover"
                className="h-screen w-screen object-center "
            />
            <div className="absolute text-center w-full xl:w-2/3 flex-col px-20 top-1/3 xl:top-1/4">
                <p className="text-2xl font-inter">Smart Lighting Solutions</p>
                <p className="text-5xl font-inter m-4 opacity-50">
                    Bringing A New Perspective To Street Lights And The Cities Of Tomorrow
                </p>
                <Button
                    buttonText={"Login"}
                    buttonStyles={
                        "bg-[#3661FF] px-6 py-1 font-inter text-white mt-2 py-2 px-16 rounded-sm"
                    }
                    onClick={undefined}
                />
            </div>
        </div>
    );
};

export default Hero;
