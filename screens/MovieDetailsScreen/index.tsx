import React, { useState } from 'react'
import { Text, View } from '../../components/Themed';
import { Image, Pressable,FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import movie from '../../assets/data/movie';
import { MaterialIcons,Entypo,AntDesign,Feather,Ionicons  } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';
import { ScrollView } from 'react-native-gesture-handler';
import VideoPlayer from '../../components/VideoPlayer';
const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0]
const MovieDetailScreen = () => {
    const [currentSeason,setCurrentSeason]= useState(firstSeason);
    const [currentEpisode,setCurrentEpisode]=useState(firstSeason.episodes.items[0]);
    const SeasonNames = movie.seasons.items.map(season=>season.name);
    return (
        <View >
          <VideoPlayer episode={currentEpisode}/>
           
            <FlatList 
            data={currentSeason.episodes.items}
            renderItem={({item})=>( 
            <EpisodeItem 
                episode={item} 
                onPress={setCurrentEpisode} 
                
            />)}
            
            style={{marginBottom:250}}
            ListHeaderComponent={(
                <View style={{padding:12}}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.match}>98% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                
                <View style={styles.ageContainer}>
                    <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
                <MaterialIcons name="hd" size={24} color="white" />
                </View>
                {/* Play Button */}
                <Pressable onPress={()=>{console.warn('plage')}} style={styles.playButton}>
                    <Text style={styles.playButtonText}>
                    <Entypo name="controller-play" size={16} color="black"  />
                    {' '}
                    Play
                    </Text>
                </Pressable>
                {/* Download Button */}
                <Pressable onPress={()=>{console.warn('Download')}} style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" />
                {' '}
                Download
                </Text>
                </Pressable>

                <Text style={{marginVertical:10}}>{movie.plot}</Text>
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>
        {/* Row with icon buttons */}
                <View style={{flexDirection:'row',marginTop:20}}>
                    <View style={{alignItems:'center',marginHorizontal:20}}>
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={{color:'darkgrey'}}>My List</Text>
                    </View>
                    <View style={{alignItems:'center',marginHorizontal:20}}>
                    <Feather name="thumbs-up" size={24} color="white" />

                        <Text style={{color:'darkgrey'}}>Rate</Text>
                    </View>
                    <View style={{alignItems:'center',marginHorizontal:20}}>
                    <Ionicons name="paper-plane-outline" size={24} color="white" />
                        <Text style={{color:'darkgrey'}}>Share</Text>
                    </View>
                </View>
                <Picker
                selectedValue={currentSeason.name}
                style={{color:'white',width:130,}}
                dropdownIconColor='white'
                onValueChange={(itemValue, itemIndex) =>{
                    setCurrentSeason(movie.seasons.items[itemIndex])
                }}>
                    {SeasonNames.map(SeasonName=>(
                        <Picker.Item label={SeasonName} value={SeasonName} key={SeasonName}/>

                    ))}
              
                </Picker>
            </View>
            )}
            />

        </View>
    
    )
}

export default MovieDetailScreen;
