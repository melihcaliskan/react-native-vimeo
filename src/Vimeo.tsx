import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { Loader } from './Loader';
import { IVimeo } from './IVimeo.interface';
import { VimeoService } from './Vimeo.service';

const initialState = {
  isStarted: false,
  isPlaying: false,
  isEnded: false,
  isMuted: false,
  isControlsVisible: true,
  progress: 0,
  duration: 0,
};

export default function Vimeo(props: IVimeo.IVimeoProps) {
  const { id } = props;

  const playerEl = useRef(null);
  const [videoInfo, setVideoInfo] = useState({ thumbnail: '', url: '' });
  const [player, setPlayer] = useState(initialState);
  const { width, height, resizeMode } = props;
  const { isMuted, isStarted, isPlaying } = player;

  useEffect(() => {
    if (id) {
      fetchVideoInfo();
    } else {
      throw new Error('No id provided.');
    }
  }, []);

  function fetchVideoInfo() {
    VimeoService.GetDetail(id)
      .then((res) => {
        const defaultCdn = res?.request?.files?.hls.default_cdn;
        setVideoInfo({
          thumbnail: res?.video?.thumbs?.base,
          url: res?.request?.files?.hls.cdns[defaultCdn]?.url,
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

  function onMute() {
    updateState('isMuted', true);
  }

  function onUnmute() {
    updateState('isMuted', false);
  }

  if (!videoInfo?.url) {
    return <Loader />;
  }

  return (
    <>
      <Video
        ref={playerEl}
        style={[styles.video, { width, height }]}
        paused={!isStarted && !isPlaying}
        muted={isMuted}
        source={{ uri: videoInfo.url }}
        resizeMode={resizeMode}
      />

      <TouchableOpacity onPress={onPlay}>
        <Text>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPause}>
        <Text>Pause</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onMute}>
        <Text>Mute</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onUnmute}>
        <Text>Unmute</Text>
      </TouchableOpacity>
    </>
  );
}

Vimeo.defaultProps = {
  width: Dimensions.get('window').width,
  height: 720,
  resizeMode: 'contain',
};

const styles = StyleSheet.create({
  video: {},
});
