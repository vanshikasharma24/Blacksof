import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-screen z-10">
            {/* Desktop Header */}
            <div
                className={
                    scrollPosition > 0
                        ? "bg-black md:flex md:justify-center md:items-center md:py-6"
                        : "bg-transparent md:flex md:justify-center md:items-center md:py-6"
                }
            >
                <div className="w-full text-white flex justify-between px-10 lg:px-28 xl:px-48 2xl:px-72 text-base lg:text-lg xl:text-xl">
                    <div className="flex gap-1 items-center">
                        <Image
                            src={"../../../headerlogo.svg"}  
                            width={8}
                            height={8}
                            className="w-6 lg:w-12 h-6 lg:h-12 mx-2"
                            alt="headerlogo"
                        />
                        <p className="font-inter text-base lg:text-lg xl:text-2xl ">Smart Lights</p>
                    </div>
                    <div className="hidden md:flex gap-14 items-center">
                        <Link href={"#"}>
                            <p className="text-white">Home</p>
                        </Link>
                        <Link href={"#"}>
                            <p className="text-white">Products</p>
                        </Link>
                        <Link href={"#"}>
                            <p className="text-white">Software Services</p>
                        </Link>
                        <Button
                            buttonText={"Login"}
                            buttonStyles={"bg-[#3661FF] px-6 py-1 font-inter text-white rounded-sm"}
                            onClick={undefined}
                        />
                    </div>
                </div>
            </div>
            
            {/* Mobile Header */}
            <div className="md:hidden">
                <div className="bg-black flex justify-between items-center py-6 px-4">
                    <Image
                        src={"/headerlogo.svg"}  
                        alt={"image"}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                    />
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white text-xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className="bg-black py-4 px-2">
                        <Link href={"#"}>
                            <p className="text-white block mb-2">Home</p>
                        </Link>
                        <Link href={"#"}>
                            <p className="text-white block mb-2">Products</p>
                        </Link>
                        <Link href={"#"}>
                            <p className="text-white block mb-2">Software Services</p>
                        </Link>
                        <Button
                            buttonText={"Login"}
                            buttonStyles={"bg-[#3661FF] px-6 py-1 font-inter text-white rounded-sm"}
                            onClick={undefined}
                        />
                    </div>
                )}
            </div>
            
            {/* Divider */}
            <div
                className={
                    scrollPosition > 0
                        ? "hidden w-full h-[2px] bg-white opacity-10"
                        : "block w-full h-[2px] bg-white opacity-10"
                }
            ></div>
        </div>
    );
};

export default Header;
