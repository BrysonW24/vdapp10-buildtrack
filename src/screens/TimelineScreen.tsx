import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Chip, Button } from 'react-native-paper';

const timeline = [
  {
    date: 'Today',
    items: [
      {
        id: 'tl-1',
        title: 'Frame inspection',
        job: 'Riverbend Residence',
        time: '10:30 AM',
        status: 'Booked',
      },
      {
        id: 'tl-2',
        title: 'Electrical rough-in',
        job: 'Oakview Duplex',
        time: '2:00 PM',
        status: 'In progress',
      },
    ],
  },
  {
    date: 'This week',
    items: [
      {
        id: 'tl-3',
        title: 'Lock-up checklist',
        job: 'Oakview Duplex',
        time: 'Wed',
        status: 'Scheduled',
      },
      {
        id: 'tl-4',
        title: 'Client walk-through',
        job: 'Seabreeze Townhomes',
        time: 'Fri',
        status: 'Pending approval',
      },
    ],
  },
];

export default function TimelineScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Build timeline
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Upcoming inspections, key milestones, and booked-in trades.
        </Text>

        {timeline.map((section) => (
          <View key={section.date} style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              {section.date}
            </Text>
            {section.items.map((item) => (
              <Card key={item.id} style={styles.card}>
                <Card.Content>
                  <View style={styles.rowBetween}>
                    <View>
                      <Text variant="titleSmall">{item.title}</Text>
                      <Text variant="bodySmall" style={styles.mutedText}>
                        {item.job}
                      </Text>
                    </View>
                    <Chip>{item.status}</Chip>
                  </View>
                  <Text variant="bodySmall" style={styles.timeText}>
                    {item.time}
                  </Text>
                  <Button mode="text" compact style={styles.button}>
                    View details
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </View>
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
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
  },
  card: {
    marginBottom: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mutedText: {
    color: '#64748B',
    marginTop: 4,
  },
  timeText: {
    marginTop: 10,
    color: '#0F172A',
  },
  button: {
    alignSelf: 'flex-start',
  },
});
