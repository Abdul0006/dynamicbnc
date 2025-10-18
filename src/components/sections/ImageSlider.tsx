'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

const ImageSlider = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: "YOUR TRUSTED PARTNER IN CONSTRUCTION",
      subtitle: "Building Dreams, Crafting Excellence",
      description: "We blend creativity, quality, and integrity to deliver exceptional construction solutions in Rawalpindi & Islamabad.",
      ctaText: "Get Free Quote",
      ctaLink: "/contact",
      imageUrl: "slider.jpeg"
      // imageUrl: "https://picsum.photos/600/400?random=10"
    },
    {
      id: 2,
      title: "ARCHITECTURE & DESIGN EXPERTISE",
      subtitle: "Innovative Solutions for Modern Living",
      description: "Our team of experienced architects creates functional and beautiful designs that meet your unique needs.",
      ctaText: "View Our Work",
      ctaLink: "/projects",
      imageUrl: "image02.jpeg"
    },
    {
      id: 3,
      title: "REAL ESTATE DEVELOPMENT",
      subtitle: "Transforming Visions into Reality",
      description: "From concept to completion, we handle all aspects of real estate development with precision and care.",
      ctaText: "Contact Us",
      ctaLink: "/contact",
      imageUrl: "https://picsum.photos/600/400?random=10"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide, slides.length]);

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute inset-0 ${
            index === currentSlide ? 'z-10' : 'z-0'
          }`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            x: index === currentSlide ? 0 : (index < currentSlide ? -100 : 100)
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary-dark/80"></div>
            <div className="container relative z-20 h-full flex items-center justify-center">
              <div className="max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {slide.subtitle}
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight mb-6 text-white"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 mx-auto"
                >
                  {slide.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    {slide.ctaText}
                  </Button>
                  <Button variant="secondary" size="lg" href={`tel:+923361110444`}>
                    Get In Touch
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ImageSlider;