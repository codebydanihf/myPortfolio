import { createContext, useContext, useState, type ReactNode } from 'react';
import { useSound } from '../hooks/useSound';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
  playTransition: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [isMuted, setIsMuted] = useState(false);
  const { playHover: _playHover, playClick: _playClick, playTransition: _playTransition } = useSound();

  const toggleMute = () => setIsMuted(!isMuted);

  const playHover = () => !isMuted && _playHover();
  const playClick = () => !isMuted && _playClick();
  const playTransition = () => !isMuted && _playTransition();

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick, playTransition }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};
