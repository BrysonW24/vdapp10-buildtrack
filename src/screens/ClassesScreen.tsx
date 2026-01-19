import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function ClassesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Classes</Text>
        <Text style={styles.subtitle}>Improve your game</Text>
        <View style={styles.classCard}>
          <Text style={styles.className}>Beginner Basics</Text>
          <Text style={styles.classInfo}>Mon & Wed 6PM • $30/session</Text>
        </View>
        <View style={styles.classCard}>
          <Text style={styles.className}>Advanced Techniques</Text>
          <Text style={styles.classInfo}>Tue & Thu 7PM • $45/session</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, textAlign: 'center', marginTop: spacing.lg },
  subtitle: { ...typography.body, color: colors.text.tertiary, textAlign: 'center', marginTop: spacing.sm, marginBottom: spacing.xl },
  classCard: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm },
  className: { ...typography.body, color: colors.text.primary, fontWeight: '600' },
  classInfo: { ...typography.caption, color: colors.text.tertiary, marginTop: spacing.xs },
});
