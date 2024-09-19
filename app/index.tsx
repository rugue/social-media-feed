import React from "react";
import { FlatList, ActivityIndicator, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Post from "../components/Post";
import ErrorMessage from "../components/ErrorMessage";
import usePosts from "../hooks/usePosts";
import useInfiniteScroll from "../hooks/useInfiniteScrolls";

export default function FeedScreen() {
  const insets = useSafeAreaInsets();
  const { posts, error, loading, loadMore } = usePosts();
  const { onEndReached } = useInfiniteScroll(loadMore);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          loading && <ActivityIndicator size="large" />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
