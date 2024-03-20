import Section from "./Section";
import curve from "../assets/hero/curve.png";
import robot from "../assets/hero/robot.jpg";
import heroBackground from "../assets/hero/hero-background.jpg";
import Button from "./Button";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import { BackgroundCircles, Gradient } from "./design/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      id="hero"
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem]
        md:mb-20 lg:mb-[6.25rem]"
        >
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div
                className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden
              md:aspect-[688/490] lg:aspect-[1024/490]"
              >
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] 
                  md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 
                  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
                  >
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div
            className="absolute -top-[54%] left-1/2 w-[234%]
          -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"
          >
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
      </div>
    </Section>
  );
};

export default Hero;