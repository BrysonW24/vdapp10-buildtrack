import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Chip, ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const jobs = [
  {
    id: 'job-101',
    name: 'Riverbend Residence',
    address: '12 Riverbend Road, Geelong',
    stage: 'Frame',
    status: 'On track',
    progress: 42,
  },
  {
    id: 'job-102',
    name: 'Oakview Duplex',
    address: '88 Oakview Crescent, Ballarat',
    stage: 'Lock-up',
    status: 'Awaiting approval',
    progress: 68,
  },
  {
    id: 'job-103',
    name: 'Seabreeze Townhomes',
    address: '5 Pacific Avenue, Torquay',
    stage: 'Fit-out',
    status: 'Delayed',
    progress: 55,
  },
];

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Active Jobs
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Track progress, approvals, and site updates across all builds.
        </Text>

        {jobs.map((job) => (
          <Card key={job.id} style={styles.card}>
            <Card.Content>
              <View style={styles.cardHeader}>
                <View>
                  <Text variant="titleMedium">{job.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {job.address}
                  </Text>
                </View>
                <Chip style={styles.statusChip}>{job.status}</Chip>
              </View>

              <View style={styles.progressRow}>
                <Text variant="bodySmall" style={styles.mutedText}>
                  {job.stage} stage
                </Text>
                <Text variant="bodySmall" style={styles.mutedText}>
                  {job.progress}%
                </Text>
              </View>
              <ProgressBar progress={job.progress / 100} color="#1E3A8A" />

              <Button
                mode="outlined"
                style={styles.button}
                onPress={() =>
                  navigation.navigate('JobDetails', {
                    id: job.id,
                    name: job.name,
                    stage: job.stage,
                    status: job.status,
                    progress: job.progress,
                  })
                }
              >
                View job
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statusChip: {
    alignSelf: 'flex-start',
    marginLeft: 12,
  },
  progressRow: {
    marginTop: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 12,
  },
  mutedText: {
    color: '#64748B',
  },
});
