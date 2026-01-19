import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Chip, Button } from 'react-native-paper';

const issues = [
  {
    id: 'issue-1',
    title: 'Materials missing on site',
    job: 'Seabreeze Townhomes',
    status: 'Open',
    owner: 'Procurement',
  },
  {
    id: 'issue-2',
    title: 'Variation approval pending',
    job: 'Oakview Duplex',
    status: 'Waiting on client',
    owner: 'Admin',
  },
  {
    id: 'issue-3',
    title: 'Weather delay flagged',
    job: 'Riverbend Residence',
    status: 'Resolved',
    owner: 'Site manager',
  },
];

export default function IssuesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.title}>
            Issues & approvals
          </Text>
          <Button mode="contained" icon="plus">
            New issue
          </Button>
        </View>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Track blockers, approvals, and resolution progress.
        </Text>

        {issues.map((issue) => (
          <Card key={issue.id} style={styles.card}>
            <Card.Content>
              <View style={styles.rowBetween}>
                <View style={styles.issueInfo}>
                  <Text variant="titleSmall">{issue.title}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {issue.job}
                  </Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    Owner: {issue.owner}
                  </Text>
                </View>
                <Chip>{issue.status}</Chip>
              </View>
              <Button mode="text" compact style={styles.button}>
                View details
              </Button>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    alignItems: 'flex-start',
  },
  issueInfo: {
    flex: 1,
  },
  mutedText: {
    color: '#64748B',
    marginTop: 4,
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 8,
  },
});
