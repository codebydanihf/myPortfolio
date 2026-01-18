import { useCallback, useRef } from 'react';
import { Howl } from 'howler';

type SoundType = 'hover' | 'click' | 'transition' | 'error';

const soundUrls: Record<SoundType, string> = {
  hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  transition: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
  error: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
};

export const useSound = () => {
  const soundsRef = useRef<Record<SoundType, Howl | null>>({
    hover: null,
    click: null,
    transition: null,
    error: null,
  });

  const playSound = useCallback((type: SoundType, volume: number = 0.3) => {
    if (!soundsRef.current[type]) {
      soundsRef.current[type] = new Howl({
        src: [soundUrls[type]],
        volume,
        preload: true,
      });
    }
    soundsRef.current[type]?.play();
  }, []);

  const playHover = useCallback(() => playSound('hover', 0.15), [playSound]);
  const playClick = useCallback(() => playSound('click', 0.25), [playSound]);
  const playTransition = useCallback(() => playSound('transition', 0.2), [playSound]);

  return { playSound, playHover, playClick, playTransition };
};
