import React from 'react';
import { ChipIcon } from '@heroicons/react/solid';
import { skills } from '../data/data';
import { animated } from '@react-spring/web';
import useItemAnimations from '../hooks/useItemAnimations';
import useHeaderAnimation from '../hooks/useHeaderAnimation';

export default function Skills() {
  const { headerRef, headerAnimation } = useHeaderAnimation();
  const { itemsRef, itemAnimations } = useItemAnimations(skills);

  return (
    <section id="skills" className="body-font font-roboto bg-accent">
      <div className="container px-5 py-10 mx-auto">
        <animated.div ref={headerRef} style={headerAnimation} className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-darkerSecondary" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-darkerPrimary mb-6">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-darkerSecondary">
            I'm adept at using a range of modern technologies to build versatile and efficient applications.
          </p>
        </animated.div>
        <div ref={itemsRef} className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {itemAnimations.map((style, index) => {
            const IconComponent = skills[index].icon;
            return (
              <animated.div key={skills[index].name} style={style} className="p-2 sm:w-1/2 w-1/2">
                <div className="bg-darkerSecondary rounded flex p-4 h-full items-center">
                  <IconComponent className="text-primary w-8 h-8 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-secondary">
                    {skills[index].name}
                  </span>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}