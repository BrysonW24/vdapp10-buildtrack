import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    expect(getByText('BuildTrack')).toBeTruthy();
    expect(getByText('Today’s snapshot')).toBeTruthy();
    expect(getByText('Active builds')).toBeTruthy();
  });
});
