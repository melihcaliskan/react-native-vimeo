import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IVimeo } from '../interfaces/IVimeo.interface';
import Colors from '../Colors';

const OTHER_BUTTONS_ML = 10;

export function Controls(props: IVimeo.IControlsProps) {
  const { onPlay, onPause, isPlaying, volume, updateState } = props;

  function toggleVolume() {
    let newVolume = volume === 1 ? 0 : volume + 0.2;
    updateState('volume', newVolume);
  }

  function renderVolumeControl() {
    return (
      <TouchableOpacity style={styles.volumeContainer} onPress={toggleVolume}>
        <View style={[styles.volumeBar, { height: 6, backgroundColor: volume >= 0.2 ? Colors.volumeBarColor : Colors.volumeInactiveColor }]} />
        <View style={[styles.volumeBar, { height: 8, backgroundColor: volume >= 0.4 ? Colors.volumeBarColor : Colors.volumeInactiveColor }]} />
        <View style={[styles.volumeBar, { height: 10, backgroundColor: volume >= 0.6 ? Colors.volumeBarColor : Colors.volumeInactiveColor }]} />
        <View style={[styles.volumeBar, { height: 12, backgroundColor: volume >= 0.8 ? Colors.volumeBarColor : Colors.volumeInactiveColor }]} />
        <View style={[styles.volumeBar, { height: 14, backgroundColor: volume === 1 ? Colors.volumeBarColor : Colors.volumeInactiveColor }]} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.play}>
        {isPlaying ? (
          <TouchableOpacity onPress={onPause}>
            <Image
              style={styles.playPauseButton}
              source={require('../assets/pause.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPlay}>
            <Image
              style={styles.playPauseButton}
              source={require('../assets/play.png')}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.controls}>
        <View style={styles.seekBar} />

        <View style={styles.others}>
          {renderVolumeControl()}

          <TouchableOpacity onPress={onPause}>
            <Image
              style={styles.settings}
              source={require('../assets/settings.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPause}>
            <Image
              style={styles.fullScreen}
              source={require('../assets/full-screen.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  play: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202633',
    width: 65,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  playPauseButton: {
    width: 24,
    height: 24,
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 3,
    backgroundColor: '#202633',
  },
  seekBar: {
    flex: 1,
    height: 12,
    borderWidth: 1,
    borderColor: Colors.seekBarBorder,
  },
  others: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settings: {
    width: 18,
    height: 18,
    marginLeft: OTHER_BUTTONS_ML,
  },
  fullScreen: {
    width: 16,
    height: 16,
    marginLeft: OTHER_BUTTONS_ML,
  },
  volumeContainer: {
    marginLeft: OTHER_BUTTONS_ML,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  volumeBar: {
    width: 3,
    marginRight: 2,
    backgroundColor: Colors.volumeInactiveColor,
  },
});

export default Controls;
