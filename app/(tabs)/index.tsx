import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sparkles, User, Package, Play, ChevronRight } from 'lucide-react-native';
import { Fonts } from '@/constants/fonts';

// Note: The component files in the `/components` directory appear to be from a previous design
// and are not used on this screen. All UI is implemented below for clarity and to match the current design.

const { width, height } = Dimensions.get('window');

// --- DATA ---
const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&h=1200&fit=crop',
    subtitle: 'Products, characters, scenes, control',
    title: 'Google Nano\nBanana',
    profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face',
  },
];

const myCreations = [
    { id: '1', image: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=300&h=300&fit=crop&crop=faces', duration: '00:10' },
    { id: '2', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&h=300&fit=crop&crop=faces', duration: '00:15' },
    { id: '3', image: 'https://images.unsplash.com/photo-1581044777550-4cfa6ce6702e?w=300&h=300&fit=crop&crop=faces', duration: '00:08' },
    { id: '4', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=300&h=300&fit=crop&crop=faces', duration: '00:12' },
    { id: '5', image: 'https://images.unsplash.com/photo-1552693673-1bf95829b51f?w=300&h=300&fit=crop&crop=faces', duration: '00:20' },
];

const categories = [
  { id: 'clothes', title: 'Clothes', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop' },
  { id: 'shoes', title: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop' },
];

const clothesLooks = [
  { id: '1', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face' },
  { id: '2', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face' },
  { id: '3', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=face' },
  { id: '4', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face' },
];

const shoesLooks = [
  { id: '1', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop' },
  { id: '2', image: 'https://images.unsplash.com/photo-1588117260148-b47826782c76?w=400&h=400&fit=crop' },
  { id: '3', image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=400&fit=crop' },
];


// --- SUB-COMPONENTS ---

const HeroSection = ({ slides, currentSlide, onPageSelected, pagerRef }: any) => (
  <View style={styles.heroSection}>
    <PagerView
      ref={pagerRef}
      style={styles.pagerView}
      initialPage={0}
      onPageSelected={onPageSelected}
    >
      {slides.map((slide: any) => (
        <View key={slide.id} style={styles.heroSlide}>
          <ImageBackground source={{ uri: slide.image }} style={styles.heroImage} resizeMode="cover">
            <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)']} style={styles.heroOverlay} />
            <SafeAreaView edges={['top']} style={styles.heroTopSafeArea}>
              <View style={styles.heroTopOverlay}>
                <View style={styles.creditBadge}><Text style={styles.creditText}>5.1K</Text></View>
                <View style={styles.profilePhotoContainer}><Image source={{ uri: slide.profilePic }} style={styles.profilePhoto} /></View>
              </View>
            </SafeAreaView>
            <View style={styles.heroContent}>
              <Text style={styles.heroSubtitle}>{slide.subtitle}</Text>
              <Text style={styles.heroTitle}>{slide.title}</Text>
              <TouchableOpacity style={styles.startButton}><Text style={styles.startButtonText}>Start here</Text></TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      ))}
    </PagerView>
    <View style={styles.pageIndicators}>
      {slides.map((_: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={[styles.indicator, index === currentSlide && styles.activeIndicator]}
          onPress={() => pagerRef.current?.setPage(index)}
        />
      ))}
    </View>
  </View>
);

const CreationsSection = () => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>My creations</Text>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View all</Text>
        <ChevronRight color="#9EADAD" size={16} />
      </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContainer}>
      {myCreations.map((creation) => (
        <TouchableOpacity key={creation.id} style={styles.creationCard}>
          <ImageBackground source={{ uri: creation.image }} style={styles.creationImage} resizeMode="cover">
            <View style={styles.creationOverlay}>
              <View style={styles.playIconContainer}><Play fill="#FFFFFF" color="#FFFFFF" size={12} /></View>
              <Text style={styles.durationText}>{creation.duration}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const CategorySection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Choose your category</Text>
    <View style={styles.gridContainer}>
      {categories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.categoryCard}>
          <Image source={{ uri: category.image }} style={styles.categoryImage} resizeMode="contain" />
          <Text style={styles.categoryTitle}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const DisplayStyleSection = ({ selected, setSelected }: any) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Display Style</Text>
    <View style={styles.gridContainer}>
      <TouchableOpacity style={styles.displayStyleCard} onPress={() => setSelected('with-model')}>
        <View style={styles.displayStyleIcon}>
          <User color="#FFFFFF" size={32} strokeWidth={1.5} />
          <Sparkles color="#FFFFFF" size={16} style={styles.sparkleIcon} />
        </View>
        <Text style={styles.displayStyleText}>Present with{'\n'}a model</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.displayStyleCard} onPress={() => setSelected('without-model')}>
        <View style={styles.displayStyleIcon}>
          <Package color="#FFFFFF" size={32} strokeWidth={1.5} />
          <Sparkles color="#FFFFFF" size={16} style={styles.sparkleIcon} />
        </View>
        <Text style={styles.displayStyleText}>Present without{'\n'}a model</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const LooksSection = ({ title, looks }: any) => (
  <View style={styles.section}>
    <View style={styles.looksSectionHeader}>
      <Sparkles color="#00D4DD" size={20} />
      <Text style={styles.looksSectionTitle}>{title}</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContainer}>
      {looks.map((look: any) => (
        <TouchableOpacity key={look.id} style={styles.lookCard}>
          <ImageBackground source={{ uri: look.image }} style={styles.lookImage} resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);


// --- MAIN SCREEN COMPONENT ---

export default function HomeScreen() {
  const [selectedDisplayStyle, setSelectedDisplayStyle] = useState<'with-model' | 'without-model'>('with-model');
  const [currentSlide, setCurrentSlide] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const onPageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setCurrentSlide(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#102A2B', '#0A1D1E', '#051112']} style={styles.backgroundGradient}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          
          <HeroSection
            slides={heroSlides}
            currentSlide={currentSlide}
            onPageSelected={onPageSelected}
            pagerRef={pagerRef}
          />

          <View style={styles.contentContainer}>
            <CreationsSection />
            <CategorySection />
            <DisplayStyleSection selected={selectedDisplayStyle} setSelected={setSelectedDisplayStyle} />
            <LooksSection title="Try These Looks with clothes!" looks={clothesLooks} />
            <LooksSection title="Try These Looks with Shoes!" looks={shoesLooks} />
            <View style={styles.bottomSpacing} />
          </View>

        </ScrollView>
      </LinearGradient>
    </View>
  );
}

// --- STYLES ---

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundGradient: { flex: 1 },
  scrollView: { flex: 1 },
  contentContainer: { paddingHorizontal: 20, gap: 32 },
  section: { marginTop: 16 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontFamily: Fonts.bold, fontSize: 22, color: '#FFFFFF' },
  gridContainer: { flexDirection: 'row', gap: 16, marginTop: 16 },
  horizontalScrollContainer: { paddingRight: 20 },
  bottomSpacing: { height: 120 },

  // Hero Section
  heroSection: { height: height * 0.65, position: 'relative', marginBottom: 16 },
  pagerView: { flex: 1 },
  heroSlide: { flex: 1 },
  heroImage: { flex: 1, width: '100%', height: '100%' },
  heroOverlay: { ...StyleSheet.absoluteFillObject },
  heroTopSafeArea: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 3 },
  heroTopOverlay: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 },
  creditBadge: { backgroundColor: '#4A80F0', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  creditText: { color: '#FFFFFF', fontSize: 16, fontFamily: Fonts.bold },
  profilePhotoContainer: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: '#FFFFFF', overflow: 'hidden' },
  profilePhoto: { width: '100%', height: '100%' },
  heroContent: { flex: 1, justifyContent: 'flex-end', paddingHorizontal: 20, paddingBottom: 100 },
  heroSubtitle: { fontSize: 18, color: 'rgba(255, 255, 255, 0.9)', marginBottom: 8, fontFamily: Fonts.regular },
  heroTitle: { fontSize: 48, fontFamily: Fonts.bold, color: '#FFFFFF', marginBottom: 24, lineHeight: 52 },
  startButton: { backgroundColor: '#FFFFFF', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 30, alignSelf: 'flex-start' },
  startButtonText: { color: '#000000', fontSize: 18, fontFamily: Fonts.bold },
  pageIndicators: { position: 'absolute', bottom: 40, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center', gap: 8 },
  indicator: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0.4)' },
  activeIndicator: { backgroundColor: '#FFFFFF', width: 24 },

  // My Creations
  viewAllButton: { flexDirection: 'row', alignItems: 'center' },
  viewAllText: { fontFamily: Fonts.semiBold, fontSize: 16, color: '#9EADAD', marginRight: 4 },
  creationCard: { width: width * 0.25, height: width * 0.25, borderRadius: 16, overflow: 'hidden', marginRight: 12 },
  creationImage: { flex: 1 },
  creationOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'flex-end', padding: 8 },
  playIconContainer: { position: 'absolute', top: 8, left: 8, backgroundColor: 'rgba(0,0,0,0.4)', width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  durationText: { fontFamily: Fonts.semiBold, fontSize: 12, color: '#FFFFFF', alignSelf: 'flex-end' },
  
  // Category
  categoryCard: { flex: 1, backgroundColor: '#1A2D2E', borderRadius: 20, padding: 16, alignItems: 'center', height: 170 },
  categoryImage: { width: '100%', height: 100, marginBottom: 12 },
  categoryTitle: { fontFamily: Fonts.semiBold, fontSize: 18, color: '#FFFFFF' },
  
  // Display Style
  displayStyleCard: { flex: 1, backgroundColor: '#1A2D2E', borderRadius: 20, padding: 24, alignItems: 'center', gap: 16, minHeight: 140, justifyContent: 'center' },
  displayStyleIcon: { position: 'relative' },
  sparkleIcon: { position: 'absolute', top: -8, right: -8 },
  displayStyleText: { fontFamily: Fonts.semiBold, fontSize: 16, color: '#FFFFFF', textAlign: 'center', lineHeight: 20 },
  
  // Looks
  looksSectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  looksSectionTitle: { fontFamily: Fonts.semiBold, fontSize: 20, color: '#00D4DD' },
  lookCard: { width: width * 0.4, height: width * 0.5, borderRadius: 20, overflow: 'hidden', marginRight: 16 },
  lookImage: { flex: 1 },
});
