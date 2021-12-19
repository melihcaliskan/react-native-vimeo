import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import { Loader } from './Loader';
import { IVimeo } from '../interfaces/IVimeo.interface';
import { VimeoService } from '../Vimeo.service';
import { IVimeoResponse } from '../interfaces/IVimeoResponse.interface';
import Controls from './Controls.component';

const initialState = {
  fullScreen: false,
  isStarted: false,
  isPlaying: false,
  isEnded: false,
  isMuted: false,
  progress: 0,
  duration: 0,
  volume: 1,
};

export default function Vimeo(props: IVimeo.IVimeoProps) {
  const { id } = props;

  const playerEl = useRef(null);
  const [videoInfo, setVideoInfo] = useState({ thumbnail: '', url: '' });
  const [player, setPlayer] = useState(initialState);
  const { width, height, resizeMode } = props;
  const { fullScreen, isMuted, isStarted, isPlaying, volume } = player;

  useEffect(() => {
    if (id) {
      fetchVideoInfo();
    } else {
      throw new Error('No id provided.');
    }
  }, []);

  function fetchVideoInfo() {
    VimeoService.GetDetail(id)
      .then((res: IVimeoResponse.IResponseBody) => {
        const defaultCdn = res?.request?.files?.hls.default_cdn;

        setVideoInfo({
          thumbnail: res?.video?.thumbs?.base,
          url: res?.request?.files?.hls.cdns[
            defaultCdn as keyof IVimeoResponse.Cdns
          ]?.url,
        });
      })
      .catch((err) => {
        console.log('Err:', err);
      });
  }

  function updateState(name: string, value: any) {
    setPlayer((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onPlay() {
    updateState('isPlaying', true);
  }

  function onPause() {
    updateState('isPlaying', false);
  }

  function exitFullScreen() {
    updateState('fullScreen', false);
    updateState('isPlaying', false);
  }

  if (!videoInfo?.url) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Video
        ref={playerEl}
        fullscreen={fullScreen}
        style={[styles.video, { width, height }]}
        muted={isMuted}
        paused={!isStarted && !isPlaying}
        resizeMode={resizeMode}
        source={{ uri: videoInfo.url }}
        volume={volume}
        onFullscreenPlayerWillDismiss={exitFullScreen}
      />

      <Controls
        onPlay={onPlay}
        onPause={onPause}
        updateState={updateState}
        {...player}
      />
    </View>
  );
}

Vimeo.defaultProps = {
  width: Dimensions.get('window').width,
  height: 240,
  resizeMode: 'contain',
};

const styles = StyleSheet.create({
  container: {},
  video: {},
});
