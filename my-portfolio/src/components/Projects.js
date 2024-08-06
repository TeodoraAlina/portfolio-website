import React from 'react';
import { animated } from '@react-spring/web';
import { CodeIcon } from '@heroicons/react/solid';
import { projects } from '../data/data';
import useItemAnimations from '../hooks/useItemAnimations';
import useHeaderAnimation from '../hooks/useHeaderAnimation';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { headerRef, headerAnimation } = useHeaderAnimation();
  const { itemsRef, itemAnimations } = useItemAnimations(projects);
  const { t } = useTranslation();

  return (
    <section id="projects" className="text-primary body-font font-roboto overflow-hidden">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <animated.div ref={headerRef} style={headerAnimation} className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-darkerSecondary" />
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-darkerPrimary">
            {t('projects.header')}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-darkerSecondary mt-2">
            {t('projects.description')}
          </p>
        </animated.div>
        <div ref={itemsRef} className="flex flex-wrap m-4">
          {itemAnimations.map((style, index) => (
            <animated.div
              onClick={() => window.location.href = projects[index].link}
              key={projects[index].key}
              style={style}
              className="sm:w-1/2 w-full p-4 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={projects[index].image}
                />
                <div className="relative w-full h-full border-4 border-primary bg-gray-200 bg-opacity-80 hover:bg-opacity-90 transition duration-300 ease-in-out p-6 rounded-lg shadow-lg opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
                  <h2 className="text-xs font-semibold tracking-wider text-gray-700 mb-4 uppercase">
                    {projects[index].subtitle}
                  </h2>
                  <h1 className="text-xl font-bold text-darkerPrimary mb-4">
                    {t(`projects.data.${projects[index].key}.title`)}
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {t(`projects.data.${projects[index].key}.description`)}
                  </p>
                  <a
                    href={projects[index].github}
                    className="mt-4 px-6 py-2 text-accent bg-primary border-0 focus:outline-none hover:bg-secondaryButtonHover hover:text-textPrimary rounded"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}