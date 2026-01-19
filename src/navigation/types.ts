import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  JobDetails: {
    id: string;
    name: string;
    stage: string;
    status?: string;
    progress?: number;
  };
  Notifications: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Jobs: undefined;
  Timeline: undefined;
  Issues: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
