import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, Star, Zap } from 'lucide-react-native';
import { Fonts } from '@/constants/fonts';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '5 AI generations per month',
      'Basic image resolution',
      'Attribution required',
      'Community support',
    ],
    color: '#C2CCCB',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'Best for professionals',
    features: [
      '100 AI generations per month',
      'High-resolution images',
      'No attribution required',
      'Priority support',
      'Commercial license',
    ],
    color: '#91EFF7',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For teams and businesses',
    features: [
      'Unlimited AI generations',
      '4K resolution images',
      'Custom AI models',
      'API access',
      'Dedicated support',
      'White-label solution',
    ],
    color: '#67D2F3',
    popular: false,
  },
];

export default function PlansScreen() {
  return (
    <LinearGradient
      colors={['#0F4142', '#0D1520']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Choose Your Plan</Text>
          <Text style={styles.headerSubtitle}>
            Unlock the power of AI-generated media
          </Text>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.plansContainer}>
            {plans.map((plan) => (
              <TouchableOpacity key={plan.id} style={styles.planCard}>
                <LinearGradient
                  colors={['rgba(21, 43, 47, 0.8)', 'rgba(36, 49, 57, 0.8)']}
                  style={styles.planGradient}
                >
                  {plan.popular && (
                    <View style={styles.popularBadge}>
                      <Star color="#FFFFFF" size={12} fill="#FFFFFF" />
                      <Text style={styles.popularText}>Most Popular</Text>
                    </View>
                  )}

                  <View style={styles.planHeader}>
                    <Text style={[styles.planName, { color: plan.color }]}>
                      {plan.name}
                    </Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.price}>{plan.price}</Text>
                      <Text style={styles.period}>{plan.period}</Text>
                    </View>
                    <Text style={styles.description}>{plan.description}</Text>
                  </View>

                  <View style={styles.featuresContainer}>
                    {plan.features.map((feature, index) => (
                      <View key={index} style={styles.feature}>
                        <Check color={plan.color} size={16} />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity style={[styles.selectButton, { borderColor: plan.color }]}>
                    <Text style={[styles.selectButtonText, { color: plan.color }]}>
                      {plan.id === 'free' ? 'Current Plan' : 'Upgrade'}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.creditsSection}>
            <LinearGradient
              colors={['rgba(21, 43, 47, 0.8)', 'rgba(36, 49, 57, 0.8)']}
              style={styles.creditsCard}
            >
              <View style={styles.creditsHeader}>
                <Zap color="#91EFF7" size={24} />
                <Text style={styles.creditsTitle}>Buy Credits</Text>
              </View>
              <Text style={styles.creditsDescription}>
                Need more generations? Purchase additional credits
              </Text>
              <View style={styles.creditsOptions}>
                <TouchableOpacity style={styles.creditOption}>
                  <Text style={styles.creditAmount}>50 Credits</Text>
                  <Text style={styles.creditPrice}>$9.99</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.creditOption}>
                  <Text style={styles.creditAmount}>100 Credits</Text>
                  <Text style={styles.creditPrice}>$17.99</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.creditOption}>
                  <Text style={styles.creditAmount}>250 Credits</Text>
                  <Text style={styles.creditPrice}>$39.99</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
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
    paddingVertical: 24,
    paddingTop: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 12,
    lineHeight: 38,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#C2CCCB',
    textAlign: 'center',
    lineHeight: 22,
  },
  scrollView: {
    flex: 1,
  },
  plansContainer: {
    gap: 20,
    marginBottom: 32,
  },
  planCard: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  planGradient: {
    padding: 24,
    position: 'relative',
  },
  popularBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#91EFF7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    gap: 4,
  },
  popularText: {
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    color: '#0F4142',
  },
  planHeader: {
    marginBottom: 24,
  },
  planName: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  price: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: '#FFFFFF',
  },
  period: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#C2CCCB',
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#C2CCCB',
  },
  featuresContainer: {
    gap: 12,
    marginBottom: 24,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  selectButton: {
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
  },
  selectButtonText: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
  },
  creditsSection: {
    marginBottom: 120,
  },
  creditsCard: {
    padding: 24,
    borderRadius: 25,
  },
  creditsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  creditsTitle: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: '#FFFFFF',
  },
  creditsDescription: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#C2CCCB',
    marginBottom: 20,
  },
  creditsOptions: {
    gap: 12,
  },
  creditOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
  },
  creditAmount: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: '#FFFFFF',
  },
  creditPrice: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: '#91EFF7',
  },
});
