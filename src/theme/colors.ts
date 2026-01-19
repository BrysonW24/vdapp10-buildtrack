/**
 * PoolMate Color Palette
 * Inspired by Playtomic's design language
 */

export const colors = {
  // Primary brand colors
  primary: {
    main: '#3366FF',      // Playtomic blue
    light: '#5C85FF',
    dark: '#2952CC',
    contrast: '#FFFFFF',
  },

  // Accent colors
  accent: {
    main: '#D4FF00',      // Neon green/yellow for CTAs
    light: '#E5FF66',
    dark: '#A8CC00',
    contrast: '#1A1A2E',
  },

  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F7FA',
    tertiary: '#EEF1F5',
    dark: '#1A1A2E',
  },

  // Text colors
  text: {
    primary: '#1A1A2E',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
    link: '#3366FF',
  },

  // Status colors
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // UI element colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },

  // Card colors
  card: {
    background: '#FFFFFF',
    elevated: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.08)',
  },

  // Skill level colors (for player badges)
  skillLevel: {
    beginner: '#10B981',
    intermediate: '#3B82F6',
    intermediateHigh: '#8B5CF6',
    advanced: '#F59E0B',
    competition: '#EF4444',
  },

  // Game type colors
  gameType: {
    eightBall: '#1A1A2E',
    nineBall: '#F59E0B',
    snooker: '#10B981',
    english: '#8B5CF6',
  },
} as const;

export type Colors = typeof colors;
