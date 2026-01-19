import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, Switch, Button, List } from 'react-native-paper';

export default function SettingsScreen() {
  const [notifyApprovals, setNotifyApprovals] = useState(true);
  const [notifyIssues, setNotifyIssues] = useState(true);
  const [notifyTasks, setNotifyTasks] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Settings
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Manage your BuildTrack preferences and team settings.
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Profile</Text>
            <List.Item title="Role" description="Builder / Admin" />
            <List.Item title="Company" description="BuildTrack Projects" />
            <Button mode="outlined" style={styles.button}>
              Edit profile
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Notifications</Text>
            <View style={styles.toggleRow}>
              <Text variant="bodyMedium">Approvals & variations</Text>
              <Switch value={notifyApprovals} onValueChange={setNotifyApprovals} />
            </View>
            <View style={styles.toggleRow}>
              <Text variant="bodyMedium">Issue updates</Text>
              <Switch value={notifyIssues} onValueChange={setNotifyIssues} />
            </View>
            <View style={styles.toggleRow}>
              <Text variant="bodyMedium">Daily task digest</Text>
              <Switch value={notifyTasks} onValueChange={setNotifyTasks} />
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Team access</Text>
            <List.Item
              title="Subcontractors"
              description="12 invited • 9 active"
            />
            <List.Item title="Clients" description="7 active" />
            <Button mode="contained" style={styles.button}>
              Manage access
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
  button: {
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
});
