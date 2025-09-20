import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Wand2 } from 'lucide-react-native';
import { Fonts } from '@/constants/fonts';

interface AILooksSectionProps {
  title: string;
  images: string[];
}

export default function AILooksSection({ title, images }: AILooksSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Wand2 color="#91EFF7" size={24} />
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imagesContainer}
      >
        {images.map((image, index) => (
          <TouchableOpacity key={index} style={styles.imageCard}>
            <ImageBackground
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.6)']}
                style={styles.imageOverlay}
              />
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.5,
    flex: 1,
    color: '#91EFF7',
  },
  imagesContainer: {
    paddingRight: 24,
  },
  imageCard: {
    width: 120,
    height: 160,
    borderRadius: 25,
    marginRight: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#386E77',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});
