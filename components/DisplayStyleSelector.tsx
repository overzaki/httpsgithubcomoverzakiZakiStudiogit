import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, UserX } from 'lucide-react-native';
import { Fonts } from '@/constants/fonts';

export default function DisplayStyleSelector() {
  const [selectedStyle, setSelectedStyle] = useState<'with-model' | 'without-model'>('with-model');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, selectedStyle === 'with-model' && styles.selectedOption]}
        onPress={() => setSelectedStyle('with-model')}
      >
        <LinearGradient
          colors={selectedStyle === 'with-model' ? ['#222B34', '#161E29'] : ['rgba(34, 43, 52, 0.5)', 'rgba(22, 30, 41, 0.5)']}
          style={styles.optionGradient}
        >
          <View style={styles.optionContent}>
            <View style={styles.iconContainer}>
              <User color="#FFFFFF" size={20} strokeWidth={3} />
              <User color="#FFFFFF" size={20} strokeWidth={3} style={styles.secondIcon} />
            </View>
            <Text style={styles.optionText}>Present with a model</Text>
          </View>
          {selectedStyle === 'with-model' && (
            <View style={styles.checkmark}>
              <View style={styles.checkmarkInner} />
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.option, selectedStyle === 'without-model' && styles.selectedOption]}
        onPress={() => setSelectedStyle('without-model')}
      >
        <LinearGradient
          colors={selectedStyle === 'without-model' ? ['#222B34', '#161E29'] : ['rgba(34, 43, 52, 0.5)', 'rgba(22, 30, 41, 0.5)']}
          style={styles.optionGradient}
        >
          <View style={styles.optionContent}>
            <UserX color="#FFFFFF" size={52} strokeWidth={2} />
            <Text style={styles.optionText}>Present without a model</Text>
          </View>
          {selectedStyle === 'without-model' && (
            <View style={styles.checkmark}>
              <View style={styles.checkmarkInner} />
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 26,
  },
  option: {
    flex: 1,
    height: 200,
    borderRadius: 25,
    overflow: 'hidden',
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  optionGradient: {
    flex: 1,
    padding: 38,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  optionContent: {
    alignItems: 'center',
    gap: 32,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  secondIcon: {
    marginLeft: -10,
  },
  optionText: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: -0.92,
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#212A35',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkInner: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#FFFFFF',
  },
});
