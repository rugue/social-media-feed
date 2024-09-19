import React, { memo } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Post as PostType } from "../constants/type";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{post.username}</Text>
      <Text style={styles.description}>{post.description}</Text>
      {post.imageUrl && (
        <Image
          source={{ uri: post.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
});

export default memo(Post);
