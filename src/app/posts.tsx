import { FlatList, StyleSheet, Text, View } from "react-native";

import { usePosts } from "@/hooks/usePosts";

export default function PostsScreen() {
  const { data, isPending, isError, error } = usePosts();

  if (isPending) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text accessibilityRole="alert">{error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <View style={styles.post}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    padding: 16,
    gap: 16,
  },
  post: {
    gap: 4,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
});
