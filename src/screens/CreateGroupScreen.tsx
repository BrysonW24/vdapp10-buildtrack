import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

export default function CreateGroupScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create Group</Text>
        <TextInput style={styles.input} placeholder="Group name" placeholderTextColor={colors.text.tertiary} />
        <TextInput style={[styles.input, styles.textArea]} placeholder="Description" placeholderTextColor={colors.text.tertiary} multiline />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Group</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background.primary },
  content: { flex: 1, padding: spacing.lg },
  title: { ...typography.h2, color: colors.text.primary, marginBottom: spacing.xl },
  input: { backgroundColor: colors.background.secondary, borderRadius: 12, padding: spacing.md, color: colors.text.primary, ...typography.body, marginBottom: spacing.md },
  textArea: { minHeight: 100, textAlignVertical: 'top' },
  button: { backgroundColor: colors.primary.main, borderRadius: 12, padding: spacing.md, alignItems: 'center', marginTop: spacing.lg },
  buttonText: { ...typography.body, color: colors.background.primary, fontWeight: '600' },
});
