import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const activeJobs = [
  { id: 'job-101', name: 'Riverbend Residence', stage: 'Frame', progress: 42 },
  { id: 'job-102', name: 'Oakview Duplex', stage: 'Lock-up', progress: 68 },
];

const todayTasks = [
  { id: 'task-1', title: 'Install window frames', job: 'Riverbend Residence' },
  { id: 'task-2', title: 'Electrical rough-in', job: 'Oakview Duplex' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          BuildTrack
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Today’s snapshot</Text>
            <View style={styles.chipRow}>
              <Chip icon="check-circle-outline" style={styles.chip}>
                7 tasks due
              </Chip>
              <Chip icon="alert-circle-outline" style={styles.chip}>
                2 issues open
              </Chip>
              <Chip icon="clock-outline" style={styles.chip}>
                3 approvals pending
              </Chip>
            </View>
            <Button
              mode="contained"
              icon="clipboard-list"
              onPress={() => navigation.navigate('Main', { screen: 'Jobs' })}
            >
              View all jobs
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Active builds</Text>
            {activeJobs.map((job) => (
              <View key={job.id} style={styles.listRow}>
                <View>
                  <Text variant="bodyLarge">{job.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {job.stage} • {job.progress}% complete
                  </Text>
                </View>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate('JobDetails', {
                      id: job.id,
                      name: job.name,
                      stage: job.stage,
                      progress: job.progress,
                    })
                  }
                >
                  View
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Today’s tasks</Text>
            {todayTasks.map((task) => (
              <View key={task.id} style={styles.taskRow}>
                <Text variant="bodyMedium">{task.title}</Text>
                <Text variant="bodySmall" style={styles.mutedText}>
                  {task.job}
                </Text>
              </View>
            ))}
            <Button mode="outlined" icon="calendar-clock">
              Check schedule
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
    fontWeight: '700',
  },
  card: {
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  taskRow: {
    paddingVertical: 8,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
});
