import { useSprings } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const useItemAnimations = (items) => {
  const [itemsRef, itemsInView] = useInView({ triggerOnce: true });

  const itemAnimations = useSprings(
    items.length,
    items.map((_, i) => ({
      from: { transform: 'translateX(100%)', opacity: 0 },
      to: {
        transform: itemsInView ? 'translateX(0%)' : 'translateX(100%)',
        opacity: itemsInView ? 1 : 0,
      },
      delay: itemsInView ? i * 200 : 0,
      config: { duration: 1000 },
    }))
  );

  return { itemsRef, itemAnimations };
};

export default useItemAnimations;