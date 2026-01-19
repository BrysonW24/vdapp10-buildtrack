import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function BookTableScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Book a Table</Text>
        <Text style={styles.subtitle}>Select your preferred time</Text>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Booking form coming soon</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { flex: 1, padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, textAlign: 'center', marginTop: spacing.lg },
  subtitle: { ...typography.body, color: colors.text.tertiary, textAlign: 'center', marginTop: spacing.sm },
  placeholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderText: { ...typography.body, color: colors.text.secondary },
});
