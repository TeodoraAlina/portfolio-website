import React, { useCallback, useState } from 'react';
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

  const [imageLoadStates, setImageLoadStates] = useState(
    projects.reduce((acc, project) => ({ ...acc, [project.key]: true }), {})
  );

  const handleCardClick = useCallback((link) => {
    window.open(link, '_blank');
  }, []);

  const handleImageError = (key) => {
    setImageLoadStates((prevStates) => ({ ...prevStates, [key]: false }));
  };

  return (
    <section id="projects" className="text-primary body-font font-roboto overflow-hidden">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <animated.div ref={headerRef} style={headerAnimation} className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-darkerSecondary" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-darkerPrimary font-fira-code">
            {t('projects.header')}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-darkerSecondary mt-2">
            {t('projects.description')}
          </p>
        </animated.div>
        <div ref={itemsRef} className="flex flex-wrap -m-4">
          {itemAnimations.map((style, index) => {
            const project = projects[index];
            return (
              <animated.div
                onClick={() => handleCardClick(project.link)}
                key={project.key}
                style={style}
                className="sm:w-1/2 w-full p-4 cursor-pointer flex flex-col"
              >
                <div
                  className={`relative h-80 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ${
                    imageLoadStates[project.key] ? 'hover:scale-105' : 'hover:bg-opacity-90'
                  }`}
                >
                  <img
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      imageLoadStates[project.key] ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={project.image}
                    onError={() => handleImageError(project.key)}
                  />
                  <div
                    className={`absolute inset-0 bg-gray-200 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4 ${
                      imageLoadStates[project.key] ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                    }`}
                  >
                    <h2 className="text-xs font-semibold tracking-wider text-gray-700 mb-4 uppercase">
                      {project.subtitle}
                    </h2>
                    <h1 className="text-xl font-bold text-darkerPrimary mb-4">
                      {t(`projects.data.${project.key}.title`)}
                    </h1>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {t(`projects.data.${project.key}.description`)}
                    </p>
                    <a
                      href={project.github}
                      className="mt-4 px-4 py-2 text-accent bg-primary border-0 focus:outline-none hover:bg-secondaryButtonHover hover:text-textPrimary rounded text-sm"
                      onClick={(e) => e.stopPropagation()}
                      target='_blank'
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}