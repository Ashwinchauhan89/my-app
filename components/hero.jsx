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
        <section className="relative w-full pt-36 md:pt-48 pb-10 overflow-hidden">
            <div className="grid-background absolute inset-0 -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0 -z-10 pointer-events-none"></div>

            <div className="space-y-6 text-center container mx-auto px-4 md:px-6 relative z-10">
                <div className="space-y-6 mx-auto">
                    <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient pb-2">
                        Your AI Career Guide for
                        <br />
                        Professional Growth
                    </h1>
                    <p className="mx-auto max-w-[600px] text-purple-700 md:text-xl">
                        Advance your career with personalized guidance, interview prep, and
                        AI-powered tools for job success.
                    </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8 shadow-lg shadow-blue-500/20">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="https://www.youtube.com/roadsidecoder" target="_blank" rel="noreferrer">
                        <Button size="lg" variant="outline" className="px-8">
                            Watch Demo
                        </Button>
                    </Link>
                </div>
                
                <div className="hero-image-wrapper mt-16 md:mt-24">
                    <div className="relative w-full max-w-6xl mx-auto group rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
                        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-4 pointer-events-none mix-blend-overlay">
                            <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl opacity-90 tracking-tighter text-slate-200">
                                SkillSync AI
                            </h1>
                            <p className="text-lg md:text-3xl mt-3 drop-shadow-lg opacity-80 font-light text-slate-300">
                                Your AI Career Coach for Professional Success
                            </p>
                        </div>
                        
                        <div className="relative w-full aspect-video md:aspect-[16/9]">
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
                            
                            <div className="absolute inset-0 bg-slate-950/40 md:group-hover:bg-slate-950/20 transition-colors duration-700 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

// {/* Poster Image (Desktop Only Before Hover) */}
//                         <Image
//                             src="/banner6.png"
//                             width={1280}
//                             height={450}
//                             alt="Hero Preview"
//                             className="
//         rounded-lg shadow-2xl border w-full h-auto
//         md:group-hover:opacity-0
//         transition-opacity duration-300
//       "
//                             priority
//                         />

//                         {/* Infinite Loop Video Animation */}
//                         <video
//                             src="/videomain.mp4"
//                             muted
//                             loop        // play again and again
//                             autoPlay    // start immediately
//                             playsInline // required for mobile autoplay
//                             preload="auto"
//                             className="
//         absolute inset-0 w-full h-450 rounded-lg shadow-2xl border 
//         opacity-100 md:opacity-0 md:group-hover:opacity-100
//         transition-opacity duration-300 object-cover
//       "
//                             onMouseEnter={(e) => e.target.play()}
//                             onMouseLeave={(e) => e.target.pause()}
//                         />