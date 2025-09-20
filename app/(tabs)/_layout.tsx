import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { StyleSheet, Platform } from 'react-native';
import { Home, Image, Star, User } from 'lucide-react-native';
import { Fonts } from '@/constants/fonts';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 13,
          left: 21,
          right: 21,
          height: 76,
          borderRadius: 60,
          backgroundColor: Platform.OS === 'ios' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(34, 43, 52, 0.9)',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.2)',
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 5,
        },
        tabBarBackground: () => (
          Platform.OS === 'ios' ? (
            <BlurView
              intensity={60}
              style={StyleSheet.absoluteFill}
              tint="dark"
            />
          ) : null
        ),
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(235, 235, 245, 0.6)',
        tabBarLabelStyle: {
          fontFamily: Fonts.semiBold,
          fontSize: 14,
          letterSpacing: 0.43,
          marginTop: 8,
        },
        tabBarIconStyle: {
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="mylooks"
        options={{
          title: 'My Looks',
          tabBarIcon: ({ color, size }) => (
            <Image color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          title: 'Plans',
          tabBarIcon: ({ color, size }) => (
            <Star color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
