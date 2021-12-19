import { ViewStyle } from 'react-native';

export namespace IVimeo {
  export interface IVimeoProps {
    id: number;
    width?: number;
    height?: number;
    resizeMode?: 'cover' | 'contain' | 'stretch';
    style?: ViewStyle;
  }
}
