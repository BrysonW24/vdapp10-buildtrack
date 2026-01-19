import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function PremiumScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Go Premium</Text>
        <Text style={styles.subtitle}>Unlock all features</Text>
        <View style={styles.features}>
          <Text style={styles.feature}>Unlimited table bookings</Text>
          <Text style={styles.feature}>Priority matchmaking</Text>
          <Text style={styles.feature}>Advanced stats tracking</Text>
          <Text style={styles.feature}>No ads</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>$9.99/month</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { flex: 1, justifyContent: 'center', padding: spacing.lg },
  title: { ...typography.h1, color: colors.primary.main, textAlign: 'center' },
  subtitle: { ...typography.body, color: colors.text.tertiary, textAlign: 'center', marginTop: spacing.sm, marginBottom: spacing.xl },
  features: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.lg, marginBottom: spacing.xl },
  feature: { ...typography.body, color: colors.text.primary, marginBottom: spacing.sm },
  button: { backgroundColor: colors.primary.main, borderRadius: 12, padding: spacing.md, alignItems: 'center' },
  buttonText: { ...typography.body, color: colors.background.primary, fontWeight: '600' },
});
