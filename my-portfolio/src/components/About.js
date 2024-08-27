import React from "react";
import { useSpring, animated, useSpringRef, useChain } from "@react-spring/web";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const textSpringRef = useSpringRef();
  const imageSpringRef = useSpringRef();

  const fadeIn = useSpring({
    ref: textSpringRef,
    from: { opacity: prefersReducedMotion ? 1 : 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const createSlideInAnimation = (direction) => ({
    from: { transform: `translateX(${direction})` },
    to: { transform: 'translateX(0%)' },
    config: { duration: 1000 },
  });

  const slideInFromLeft = useSpring(createSlideInAnimation('-100%'));
  const slideInFromRight = useSpring({
    ref: imageSpringRef,
    ...createSlideInAnimation('100%'),
  });

  useChain([textSpringRef, imageSpringRef], [0, 0.5]);

  return (
    <section id="about" className="overflow-hidden">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center font-roboto">
        <animated.div
          style={slideInFromLeft}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-darkerPrimary">
            <span className="block text-3xl sm:text-4xl font-extrabold">
              {t('about.greeting')}
            </span>
            <span className="block text-lg sm:text-xl font-medium text-darkerSecondary mt-2">
              {t('about.role')}
            </span>
          </h2>
          <animated.p
            style={fadeIn}
            className="mb-8 leading-relaxed text-darkerSecondary mt-2"
          >
            {t('about.description')}
          </animated.p>
          <div className="flex justify-center">
            <animated.a
              href="#contact"
              style={fadeIn}
              aria-label="Contact Me"
              className="inline-flex text-accent bg-darkerPrimary border-0 py-2 px-6 focus:outline-none hover:bg-buttonHover rounded text-lg"
            >
              {t('about.contactMe')}
            </animated.a>
            <animated.a
              href="#projects"
              style={fadeIn}
              aria-label="See My Projects"
              className="ml-4 inline-flex text-accent bg-darkerSecondary border-0 py-2 px-6 focus:outline-none hover:bg-secondaryButtonHover hover:text-textPrimary rounded text-lg"
            >
              {t('about.seeMyProjects')}
            </animated.a>
          </div>
        </animated.div>
        <animated.div style={slideInFromRight} className="grid min-h-[140px] w-medium place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <img
            className="object-cover object-center w-medium rounded-lg shadow-xl h-96 shadow-blue-gray-900/50"
            src='./assets/hero.jpeg'
            alt="hero"
            loading="lazy"
            onError={(e) => { e.target.src = './assets/fallback-image.jpeg'; }}
          />
        </animated.div>
      </div>
    </section>
  );
}