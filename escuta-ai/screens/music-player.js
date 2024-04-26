import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import data from "./data.json";

const MusicPlayer = () => {
  const audio_player = document.querySelector("#audio-player");

  const playlists = data;

  let current_song = 0;
  let current_playlist = 0;

  const load_song = () => {
    const playlists = data;
    const song = playlists[current_playlist].musics[current_song];

    const cover_element = document.querySelector("#cover");
    const title_element = document.querySelector("#title");

    audio_player.src = song.src;
    cover_element.src = song.cover;
    title_element.textContent = song.name;
  }

  const play_music = () => {
    if (audio_player.paused) {
        audio_player.play();
        play_button.firstElementChild.src = "./assets/icons/pause.png";
    } else {
        audio_player.pause();
        play_button.firstElementChild.src = "./assets/icons/play-buttton.png";
    }
  }

  const next_music = () => {
    current_song = (current_song + 1) % playlists[current_playlist].musics.length;
    load_song();
  }

  const prev_music = () => {
    current_song = (current_song - 1 + playlists[current_playlist].musics.length) % playlists[current_playlist].musics.length;
    load_song();
  }

  return (
    <View style={styles.container}>
        <Image 
          source={{ uri: "../assets/covers/guilty-gear-cover.jpg" }}
          style={{ width: 300, height: 300, borderRadius: 10, marginBottom: 25 }}
        />
        <View style={styles.audioPlayer}>
          <audio id="audio-player" controls>
            <source src="../assets/songs/playlist1/Smell-of-the-Game.mp3" type="audio-mpeg"/>
          </audio>
        </View>
        <View style={styles.mediaController}>
          <TouchableOpacity style={styles.button} onPress={prev_music}>
            <Image 
              source={{ uri: "../assets/icons/back-arrow.png" }}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={play_music}>
            <Image 
              source={{ uri: "../assets/icons/play-buttton.png" }}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={next_music}>
            <Image 
              source={{ uri: "../assets/icons/right-arrow.png" }}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFAF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaController: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#EADBC8",
    borderRadius: 100,
    marginRight: 20,
    padding: 15,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  audioPlayer: {
    marginBottom: 25
  }
});

export default MusicPlayer;
