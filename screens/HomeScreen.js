import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ActivityIndicator, TextInput } from "react-native-paper";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [feed, setFeed] = useState([]);

  //get the feed
  useEffect(() => {
    fetch("https://aurora-django-app.herokuapp.com/feed?feed_count=0")
      .then((re) => re.json())
      .then((re) => {
        setFeed(re.response);
        console.log(re.response);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Feed </Text>
      <View style={styles.textinputView}>
        <TextInput
          value={searchInput}
          onChangeText={(searchInput) => setSearchInput(searchInput)}
          placeholder='Enter song title or artist name'
          placeholderTextColor={"#000"}
          style={styles.textinput}
        />
      </View>
      <View style={styles.main_postView}>
        {feed.length < 1 ? (
          <ActivityIndicator size={"large"} color={"#2FBBF0"} />
        ) : (
          <FlatList
            data={feed}
            keyExtractor={(item, index) => {
              return item.post_id.toFixed();
            }}
            renderItem={({ item, index }) => (
              <View style={styles.postView}>
                <View style={styles.postTitle}>
                  <View style={styles.imgView}>
                    <Image
                      style={styles.artistPhoto}
                      source={{ uri: item.artist_photo }}
                    />
                    <View style={styles.titleView}>
                      <Text style={styles.artistName}>{item.post_artist}</Text>
                      <Text style={styles.subTitle}>{item.post_title}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>Options</Text>
                  </View>
                </View>
                <Image style={styles.cover} source={{ uri: item.cover_poto }} />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 32,
    marginTop: 60,
    marginLeft: 15,
    fontWeight: "bold",
  },
  textinputView: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  textinput: {
    height: 39,
    width: "90%",
    backgroundColor: "#EBEBEB",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 15,
    marginBottom: 10,
  },
  main_postView: {
    width: "100%",
    marginBottom: 250,
  },
  postView: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  postTitle: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  artistPhoto: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 50,
  },
  imgView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  artistName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    color: "#989898",
  },
  titleView: {
    marginLeft: 15,
  },
  cover: {
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 200,
    marginTop: 20,
    marginLeft: 50,
  },
});

export default Home;
