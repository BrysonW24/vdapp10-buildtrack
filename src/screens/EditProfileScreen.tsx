import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function EditProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Display Name</Text>
          <TextInput style={styles.input} placeholder="Your name" placeholderTextColor={colors.text.tertiary} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="@username" placeholderTextColor={colors.text.tertiary} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { flex: 1, padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, marginBottom: spacing.xl },
  inputContainer: { marginBottom: spacing.md },
  label: { ...typography.caption, color: colors.text.secondary, marginBottom: spacing.xs },
  input: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, color: colors.text.primary, ...typography.body },
  button: { backgroundColor: colors.primary.main, borderRadius: 12, padding: spacing.md, alignItems: 'center', marginTop: spacing.lg },
  buttonText: { ...typography.body, color: colors.background.primary, fontWeight: '600' },
});
