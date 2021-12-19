import React from 'react';
import { SafeAreaView } from 'react-native';
import Vimeo from './Vimeo';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Vimeo id={612447431} />
    </SafeAreaView>
  );
};

export default App;
