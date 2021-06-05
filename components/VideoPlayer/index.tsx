import React from 'react'
import { View, Text } from 'react-native'
import { Episode } from '../../types';
import styles from './style';
import {Video} from 'expo-av'
interface VideoPlayerProps{
    episode:Episode;
}
const VideoPlayer = (props:VideoPlayerProps) => {
    const {episode}=props;
    const _handleVideoRef = (component) => {
        const playbackObject = component;
        const source={
            uri:episode.video,
        }
        playbackObject.loadAsync(
            source,
        );
      }
    return (
        <View>
            <Video
                ref={_handleVideoRef}
                
            />
        </View>
    )
}

export default VideoPlayer
