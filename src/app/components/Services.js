"use client";
import { useState, useEffect } from "react";
import { MonitorSmartphone, ShoppingCart, Network, Layout } from "lucide-react";
import { services } from "../../../Data/data.js";

const iconMap = {
  MonitorSmartphone: MonitorSmartphone,
  ShoppingCart: ShoppingCart,
  Network: Network,
  Layout: Layout,
};

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="services" className="px-0 py-1 sm:py-10 lg:py-15 sm:px-6 lg:px-8">
      <h2 className="text-xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-slate-400">
        My Services
      </h2>

      {/* Mobile Slider */}
      {isMobile && (
        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={(e) => {
              const touch = e.touches[0];
              setTouchStart(touch.clientX);
            }}
            onTouchMove={(e) => {
              if (touchStart === null) return;

              const touch = e.touches[0];
              const diff = touchStart - touch.clientX;

              if (diff > 50 && currentSlide < services.length - 1) {
                setCurrentSlide((prev) => prev + 1);
                setTouchStart(null);
              } else if (diff < -50 && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
                setTouchStart(null);
              }
            }}
            onTouchEnd={() => {
              setTouchStart(null);
            }}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map(({ id, icon, title, description }) => {
                const IconComponent = iconMap[icon];
                return (
                  <div key={id} className="w-full flex-shrink-0">
                    <div className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/50">
                      <div className="flex flex-col gap-4">
                        <div className="mb-4">
                          {IconComponent && (
                            <IconComponent className="w-10 h-10 text-primary-400" />
                          )}
                        </div>
                        <div className="flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {title}
                          </h3>
                          <p className="text-sm text-gray-400">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Grid */}
      {!isMobile && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, icon, title, description }) => {
            const IconComponent = iconMap[icon];
            return (
              <div
                key={id}
                className="bg-gray-700/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/30 hover:border-primary-500/30 transition-colors hover:shadow-sm"
              >
                <div className="flex flex-col gap-4">
                  <div className="mb-4">
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-primary-400" />
                    )}
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-400">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Services;