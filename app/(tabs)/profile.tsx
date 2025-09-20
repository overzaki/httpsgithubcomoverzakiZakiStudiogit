import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Settings,
  Download,
  Heart,
  Share2,
  HelpCircle,
  LogOut,
  Crown,
  Zap,
} from 'lucide-react-native';
import { Fonts } from '@/constants/fonts';

const menuItems = [
  { icon: Download, title: 'My Downloads', count: '247' },
  { icon: Heart, title: 'Favorites', count: '89' },
  { icon: Share2, title: 'Shared Collections', count: '12' },
  { icon: Settings, title: 'Settings' },
  { icon: HelpCircle, title: 'Help & Support' },
  { icon: LogOut, title: 'Sign Out', danger: true },
];

export default function ProfileScreen() {
  return (
    <LinearGradient
      colors={['#0F4142', '#0D1520']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100.png' }}
                style={styles.profileImage}
              />
              <View style={styles.proBadge}>
                <Crown color="#FFFFFF" size={12} />
              </View>
            </View>
            <Text style={styles.userName}>Sarah Johnson</Text>
            <Text style={styles.userEmail}>sarah.johnson@email.com</Text>
            <Text style={styles.memberSince}>Member since January 2024</Text>
          </View>

          <View style={styles.statsContainer}>
            <LinearGradient
              colors={['rgba(21, 43, 47, 0.8)', 'rgba(36, 49, 57, 0.8)']}
              style={styles.statsCard}
            >
              <View style={styles.stat}>
                <Text style={styles.statNumber}>1,247</Text>
                <Text style={styles.statLabel}>Total Downloads</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statNumber}>89</Text>
                <Text style={styles.statLabel}>Favorites</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.stat}>
                <Text style={styles.statNumber}>156</Text>
                <Text style={styles.statLabel}>Credits Left</Text>
              </View>
            </LinearGradient>
          </View>

          <View style={styles.creditsSection}>
            <LinearGradient
              colors={['rgba(145, 239, 247, 0.1)', 'rgba(103, 210, 243, 0.1)']}
              style={styles.creditsCard}
            >
              <View style={styles.creditsHeader}>
                <Zap color="#91EFF7" size={20} />
                <Text style={styles.creditsTitle}>156 Credits Remaining</Text>
              </View>
              <Text style={styles.creditsSubtitle}>
                Pro Plan • Renews on Feb 15, 2025
              </Text>
              <TouchableOpacity style={styles.upgradeButton}>
                <Text style={styles.upgradeButtonText}>Manage Plan</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <item.icon 
                    color={item.danger ? '#FF6B6B' : '#FFFFFF'} 
                    size={24} 
                  />
                  <Text style={[
                    styles.menuItemText,
                    item.danger && styles.dangerText
                  ]}>
                    {item.title}
                  </Text>
                </View>
                {item.count && (
                  <View style={styles.countBadge}>
                    <Text style={styles.countText}>{item.count}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Version 1.0.0</Text>
            <Text style={styles.footerText}>Made with ❤️ for creators</Text>
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
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingTop: 16,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#91EFF7',
  },
  proBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#91EFF7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 34,
    letterSpacing: -0.7,
  },
  userEmail: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#C2CCCB',
    marginBottom: 12,
    lineHeight: 22,
  },
  memberSince: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#91EFF7',
    lineHeight: 20,
  },
  statsContainer: {
    marginBottom: 24,
  },
  statsCard: {
    flexDirection: 'row',
    padding: 24,
    borderRadius: 20,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#C2CCCB',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 16,
  },
  creditsSection: {
    marginBottom: 32,
  },
  creditsCard: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(145, 239, 247, 0.3)',
  },
  creditsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  creditsTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 18,
    color: '#FFFFFF',
  },
  creditsSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#C2CCCB',
    marginBottom: 16,
  },
  upgradeButton: {
    backgroundColor: 'rgba(145, 239, 247, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  upgradeButtonText: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: '#91EFF7',
  },
  menuContainer: {
    gap: 2,
    marginBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuItemText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#FFFFFF',
  },
  dangerText: {
    color: '#FF6B6B',
  },
  countBadge: {
    backgroundColor: '#91EFF7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  countText: {
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    color: '#0F4142',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
    gap: 8,
    paddingBottom: 120,
  },
  footerText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#C2CCCB',
    textAlign: 'center',
  },
});
