import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Fonts } from '@/constants/fonts';

interface CategoryCardProps {
  title: string;
  image: string;
  onPress?: () => void;
}

export default function CategoryCard({ title, image, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={['#152B2F', '#243139']}
        style={styles.gradient}
      >
        <BlurView intensity={20} style={styles.blurContainer}>
          <View style={styles.content}>
            <ImageBackground
              source={{ uri: image }}
              style={styles.imageContainer}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.1)']}
                style={styles.imageOverlay}
              />
            </ImageBackground>
            <Text style={styles.title}>{title}</Text>
          </View>
        </BlurView>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 183,
    height: 258,
    borderRadius: 25,
    marginRight: 12,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 25,
  },
  blurContainer: {
    flex: 1,
    borderRadius: 25,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 28,
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 127,
    height: 169,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: -0.69,
  },
});
