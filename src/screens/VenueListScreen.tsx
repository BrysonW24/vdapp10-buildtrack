import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function VenueListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Venues</Text>
        <TouchableOpacity style={styles.venue}>
          <Text style={styles.venueName}>Break Time Billiards</Text>
          <Text style={styles.venueInfo}>12 tables • 2.3km • Open now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.venue}>
          <Text style={styles.venueName}>Cue Masters Pool Hall</Text>
          <Text style={styles.venueInfo}>8 tables • 4.1km • Open now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.venue}>
          <Text style={styles.venueName}>The Rack Room</Text>
          <Text style={styles.venueInfo}>6 tables • 5.2km • Closes 11PM</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, marginBottom: spacing.xl },
  venue: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm },
  venueName: { ...typography.body, color: colors.text.primary, fontWeight: '600' },
  venueInfo: { ...typography.caption, color: colors.text.tertiary, marginTop: spacing.xs },
});
