import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Community</Text>
        <Text style={styles.subtitle}>Connect with players</Text>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.postAuthor}>Mike C.</Text>
              <Text style={styles.postTime}>2h ago</Text>
            </View>
          </View>
          <Text style={styles.postContent}>
            Great session at Break Time today! Anyone up for a game tomorrow evening?
          </Text>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.avatar} />
            <View>
              <Text style={styles.postAuthor}>Sarah T.</Text>
              <Text style={styles.postTime}>5h ago</Text>
            </View>
          </View>
          <Text style={styles.postContent}>
            Just hit my first century break! 🎱 Thanks to everyone who helped me practice.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    padding: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.tertiary,
    textAlign: 'center',
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },
  post: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary.main,
    marginRight: spacing.sm,
  },
  postAuthor: {
    ...typography.body,
    color: colors.text.primary,
    fontWeight: '600',
  },
  postTime: {
    ...typography.caption,
    color: colors.text.tertiary,
  },
  postContent: {
    ...typography.body,
    color: colors.text.secondary,
    lineHeight: 22,
  },
});
