import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">SkillSync AI</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Your AI-powered companion for resume building,  
            career insights, and professional growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Home</Link></li>
            <li><Link href="#" className="hover:text-white">AI Resume Builder</Link></li>
            <li><Link href="#" className="hover:text-white">AI Cover Letter</Link></li>
            <li><Link href="#" className="hover:text-white">Job Recommender</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Features</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4 mt-2">
            <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-white"><Github size={20} /></Link>
            <Link href="#" className="hover:text-white"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SkillSync AI. All rights reserved.
      </div>
    </footer>
  );
}
