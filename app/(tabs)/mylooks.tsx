import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Search, Filter } from 'lucide-react-native';
import { Fonts } from '@/constants/fonts';

const mockLooks = [
  {
    id: '1',
    title: 'Summer Vibes',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x400.png',
    category: 'Clothes',
    downloads: 1250,
  },
  {
    id: '2',
    title: 'Urban Style',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x400.png',
    category: 'Shoes',
    downloads: 890,
  },
  {
    id: '3',
    title: 'Elegant Look',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x400.png',
    category: 'Accessories',
    downloads: 2100,
  },
  {
    id: '4',
    title: 'Casual Friday',
    image: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x400.png',
    category: 'Clothes',
    downloads: 654,
  },
];

export default function MyLooksScreen() {
  return (
    <LinearGradient
      colors={['#0F4142', '#0D1520']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Looks</Text>
          <TouchableOpacity style={styles.addButton}>
            <Plus color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search color="#C2CCCB" size={20} />
            <Text style={styles.searchPlaceholder}>Search your looks...</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Filter color="#FFFFFF" size={20} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.grid}>
            {mockLooks.map((look) => (
              <TouchableOpacity key={look.id} style={styles.lookCard}>
                <ImageBackground
                  source={{ uri: look.image }}
                  style={styles.lookImage}
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
                    style={styles.lookOverlay}
                  >
                    <View style={styles.lookInfo}>
                      <Text style={styles.lookTitle}>{look.title}</Text>
                      <Text style={styles.lookCategory}>{look.category}</Text>
                      <Text style={styles.lookDownloads}>{look.downloads} downloads</Text>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingTop: 16,
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: '#FFFFFF',
    lineHeight: 38,
    letterSpacing: -0.8,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(145, 239, 247, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchPlaceholder: {
    fontFamily: Fonts.regular,
    color: '#C2CCCB',
    fontSize: 16,
    flex: 1,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: 'rgba(145, 239, 247, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 120,
  },
  lookCard: {
    width: '48%',
    height: 240,
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  lookImage: {
    flex: 1,
  },
  lookOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  lookInfo: {
    padding: 16,
  },
  lookTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  lookCategory: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#91EFF7',
    marginBottom: 4,
  },
  lookDownloads: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: '#C2CCCB',
  },
});
