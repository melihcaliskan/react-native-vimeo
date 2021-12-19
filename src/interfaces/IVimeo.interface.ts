import { ViewStyle } from 'react-native';

export namespace IVimeo {
  export interface IVimeoProps {
    id: number;
    width?: number;
    height?: number;
    resizeMode?: 'cover' | 'contain' | 'stretch';
    style?: ViewStyle;
  }

  export interface IVimeoState {
    isStarted: boolean;
    isPlaying: boolean;
    isEnded: boolean;
    isMuted: boolean;
    progress: number;
    duration: number;
    volume: number;
  }

  export interface IControlsProps extends IVimeoState {
    updateState: (name: string, value: string | number | boolean) => void;
    onPlay: () => void;
    onPause: () => void;
  }
}
