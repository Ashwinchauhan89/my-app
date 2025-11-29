import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { colorThemes } from "@/data/theme";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QuoteIcon } from "./lib/qute";
import { stats } from "@/data/stats";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
         <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Powerful Features for Your Career Growth
            </h2>
            <p className="text-lg text-slate-400">
              Everything you need to land your next role and advance your career, all in one platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const theme = colorThemes[feature.theme];
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group relative rounded-2xl p-[1px] bg-gradient-to-br ${theme.gradient} hover:shadow-2xl ${theme.shadow} transition-all duration-300 ease-in-out hover:-translate-y-2`}
                >
                  <div className="relative rounded-2xl h-full bg-slate-950/80 backdrop-blur-md p-8 flex flex-col items-center text-center overflow-hidden transition-colors group-hover:bg-slate-950/60">
                    
                    {/* Dynamic Background Glow Spot */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${theme.solid} opacity-0 group-hover:opacity-20 blur-[60px] transition-all duration-500 group-hover:scale-150`}></div>
                    
                    <div className={`relative p-4 rounded-full mb-6 bg-slate-900 border border-slate-800 group-hover:border-slate-700/50 group-hover:scale-110 transition-all duration-300 shadow-lg ${theme.bg_glow} bg-opacity-10`}>
                      <Icon className={`w-8 h-8 ${theme.icon}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-100 relative z-10">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed relative z-10">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 border-y border-slate-800 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
             {stats.map((stat, index) => {
                const theme = colorThemes[stat.theme];
                return (
                 <div 
                   key={index}
                   className={`group relative rounded-xl p-[1px] bg-gradient-to-br ${theme.gradient} hover:shadow-xl ${theme.shadow} transition-all duration-300`}
                 >
                   <div className="rounded-xl h-full bg-slate-950/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center">
                     <h3 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-2`}>{stat.value}</h3>
                     <p className="text-slate-400 font-medium">{stat.label}</p>
                   </div>
                 </div>
                );
             })}
          </div>
        </div>
      </section>


      {/* How It Works Section */}
        <section className="w-full py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">How It Works</h2>
            <p className="text-lg text-slate-400">
              Four simple steps to accelerate your career growth using our intelligent platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 -z-10 border-t border-slate-700/50 border-dashed"></div>
            
            {howItWorks.map((item, index) => {
               const theme = colorThemes[item.theme];
               const Icon = item.icon;
               return (
                <div 
                    key={index}
                    className={`group relative rounded-xl p-[1px] bg-gradient-to-br ${theme.gradient} hover:shadow-xl ${theme.shadow} transition-all duration-300`}
                >
                    <div className="rounded-xl h-full bg-slate-900/90 backdrop-blur-sm p-6 flex flex-col items-center text-center">
                         <div className={`w-16 h-16 rounded-full bg-slate-950 border-2 ${theme.border} flex items-center justify-center shadow-lg mb-4 relative z-10 group-hover:scale-110 transition-transform`}>
                             <Icon className={`w-8 h-8 ${theme.icon}`} />
                        </div>
                        <h3 className="font-bold text-xl text-slate-100 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                </div>
               );
            })}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
    <section className="w-full py-20  border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => {
              const theme = colorThemes[testimonial.theme];
              return (
                <div 
                    key={index}
                    className={`group relative rounded-xl p-[1px] bg-gradient-to-br ${theme.gradient} hover:shadow-2xl ${theme.shadow} transition-all duration-300`}
                >
                  <div className="rounded-xl h-full bg-slate-950/90 backdrop-blur-sm p-8 flex flex-col justify-between">
                     <div className="relative mb-6">
                       <QuoteIcon className={`absolute -top-4 -left-2 w-8 h-8 ${theme.text} opacity-30`} />
                       <p className="text-slate-300 italic relative z-10 pl-4 leading-relaxed">
                        "{testimonial.quote}"
                       </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 border-t border-slate-800 pt-4 mt-auto">
                      <div className={`relative h-12 w-12 flex-shrink-0 rounded-full p-[2px] bg-gradient-to-br ${theme.gradient}`}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover w-full h-full border-2 border-slate-900"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                          {testimonial.role}
                        </p>
                        <p className={`text-xs ${theme.text} font-bold`}>
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-blue-700">
              Find answers to common questions about our platform
            </p>
          </div>
         <div className="max-w-6xl mx-auto relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-green-500 font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      

    </div>
  )
}
