import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';

const notifications = [
  {
    id: 'note-1',
    title: 'Variation request approved',
    description: 'Oakview Duplex • Kitchen variation signed off.',
    status: 'Approved',
    time: '10 min ago',
  },
  {
    id: 'note-2',
    title: 'Issue flagged by subbie',
    description: 'Seabreeze Townhomes • Materials missing on site.',
    status: 'Action required',
    time: '1 hour ago',
  },
  {
    id: 'note-3',
    title: 'Inspection booked',
    description: 'Riverbend Residence • Frame inspection scheduled.',
    status: 'Booked',
    time: 'Yesterday',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Notifications
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Recent updates from your sites and teams.
        </Text>

        {notifications.map((note) => (
          <Card key={note.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <Text variant="titleSmall">{note.title}</Text>
                <Chip>{note.status}</Chip>
              </View>
              <Text variant="bodySmall" style={styles.mutedText}>
                {note.description}
              </Text>
              <Text variant="bodySmall" style={styles.timeText}>
                {note.time}
              </Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    color: '#64748B',
  },
  card: {
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mutedText: {
    color: '#64748B',
    marginTop: 6,
  },
  timeText: {
    color: '#94A3B8',
    marginTop: 8,
  },
});
