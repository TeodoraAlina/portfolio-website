import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const useHeaderAnimation = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  const headerAnimation = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: {
      transform: headerInView ? 'translateX(0%)' : 'translateX(-100%)',
      opacity: headerInView ? 1 : 0,
    },
    config: { duration: 1000 },
  });

  return { headerRef, headerAnimation };
};

export default useHeaderAnimation;