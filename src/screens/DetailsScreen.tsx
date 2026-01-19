import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Card, Text, Chip, Button, Divider, List } from 'react-native-paper';
import { RootStackParamList } from '../navigation/types';

type RouteProps = RouteProp<RootStackParamList, 'JobDetails'>;

const stages = [
  { name: 'Slab', status: 'Complete' },
  { name: 'Frame', status: 'In progress' },
  { name: 'Lock-up', status: 'Pending' },
  { name: 'Fit-out', status: 'Pending' },
  { name: 'Handover', status: 'Pending' },
];

const team = [
  { name: 'Apex Carpentry', role: 'Frame crew', status: 'On-site' },
  { name: 'BrightSpark Electrical', role: 'Rough-in', status: 'Booked' },
  { name: 'PlumbRight', role: 'Rough-in', status: 'Awaiting materials' },
];

const approvals = [
  { id: 'app-01', title: 'Window selections', status: 'Approved' },
  { id: 'app-02', title: 'Kitchen variation', status: 'Pending' },
];

export default function DetailsScreen() {
  const route = useRoute<RouteProps>();
  const { name, stage, status, progress } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          {name}
        </Text>
        <View style={styles.metaRow}>
          <Chip style={styles.chip}>{stage}</Chip>
          {status ? <Chip style={styles.chip}>{status}</Chip> : null}
          {typeof progress === 'number' ? (
            <Chip style={styles.chip}>{progress}% complete</Chip>
          ) : null}
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Stage checklist</Text>
            {stages.map((item) => (
              <List.Item
                key={item.name}
                title={item.name}
                description={item.status}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={
                      item.status === 'Complete'
                        ? 'check-circle'
                        : item.status === 'In progress'
                        ? 'progress-clock'
                        : 'circle-outline'
                    }
                  />
                )}
              />
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Assigned team</Text>
            {team.map((member) => (
              <View key={member.name} style={styles.rowBetween}>
                <View>
                  <Text variant="bodyLarge">{member.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {member.role}
                  </Text>
                </View>
                <Chip>{member.status}</Chip>
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Approvals</Text>
            {approvals.map((approval, index) => (
              <View key={approval.id}>
                <View style={styles.rowBetween}>
                  <Text variant="bodyLarge">{approval.title}</Text>
                  <Chip>{approval.status}</Chip>
                </View>
                {index < approvals.length - 1 ? <Divider style={styles.divider} /> : null}
              </View>
            ))}
            <Button mode="outlined" style={styles.button}>
              Request approval
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Site updates</Text>
            <Text variant="bodySmall" style={styles.mutedText}>
              Latest photos and notes from subcontractors.
            </Text>
            <Button mode="text" style={styles.button}>
              View photo log
            </Button>
          </Card.Content>
        </Card>

        <Button mode="contained" icon="alert-circle" style={styles.ctaButton}>
          Raise an issue
        </Button>
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
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  card: {
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  mutedText: {
    color: '#64748B',
    marginTop: 4,
  },
  divider: {
    marginVertical: 10,
  },
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  ctaButton: {
    marginBottom: 24,
  },
});
