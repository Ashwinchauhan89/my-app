"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
    // const imageRef = useRef(null);
    // useEffect(() => {
    //     const imageElement = imageRef.current;

    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const scrollThreshold = 100;

    //         if (scrollPosition > scrollThreshold) {
    //             imageElement.classList.add("scrolled");
    //         } else {
    //             imageElement.classList.remove("scrolled");
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <section className="w-full pt-36 md:pt-48 pb-10">
            <div className="space-y-6 text-center">
                <div className="space-y-6 mx-auto">
                    <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
                        Your AI Career Guide for
                        <br />
                        Professional Growth
                    </h1>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                        Advance your career with personalized guidance, interview prep, and
                        AI-powered tools for job success.
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="https://www.youtube.com/roadsidecoder">
                        <Button size="lg" variant="outline" className="px-8">
                            Watch Demo
                        </Button>
                    </Link>
                </div>
                {/* <div className="hero-image-wrapper mt-5 md:mt-0">
                    <div ref={imageRef} className="hero-image">
                        <Image
                            src={"/banner6.png"}
                            width={1280}
                            height={720}
                            alt="Dashboard Preview"
                            className="rounded-lg shadow-2xl border mx-auto"
                            priority
                        />
                    </div>
                </div> */}
                <div className="hero-image-wrapper mt-5 md:mt-0">
                    <div className="relative w-full mx-auto group">
                        {/* Overlay Text */}
                        <div className="
          absolute inset-0 z-20 flex flex-col justify-center items-center text-center
          text-white px-4
        ">
                            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient opacity-100">
                                SkillSync AI
                            </h1>
                            <p className="text-lg md:text-3xl mt-3 drop-shadow-lg">
                                Your AI Career Coach for Professional Success
                            </p>
                        </div>
                        {/* Poster Image (Desktop Only Before Hover) */}
                        <Image
                            src="/banner6.png"
                            width={1280}
                            height={450}
                            alt="Hero Preview"
                            className="
        rounded-lg shadow-2xl border w-full h-auto
        md:group-hover:opacity-0
        transition-opacity duration-300
      "
                            priority
                        />

                        {/* Infinite Loop Video Animation */}
                        <video
                            src="/videomain.mp4"
                            muted
                            loop        // play again and again
                            autoPlay    // start immediately
                            playsInline // required for mobile autoplay
                            preload="auto"
                            className="
        absolute inset-0 w-full h-450 rounded-lg shadow-2xl border 
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        transition-opacity duration-300 object-cover
      "
                            onMouseEnter={(e) => e.target.play()}
                            onMouseLeave={(e) => e.target.pause()}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection