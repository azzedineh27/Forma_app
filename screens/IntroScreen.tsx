import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

export default function IntroScreen({ navigation }: any) {
  const scale = useRef(new Animated.Value(0.9)).current;
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      navigation.replace('Main');
    });
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo_etudeplusbg.png')}
        style={[styles.logo, { transform: [{ scale }] }]}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bienvenue dans Étude Plus</Text>
      <Text style={styles.tagline}>Accompagner. Soutenir. Faire réussir.</Text>
      <Text style={styles.quote}>« Chaque élève a un potentiel unique. »</Text>

      <Text style={styles.description}>
        Spécialistes du soutien scolaire et de la formation professionnelle depuis 8 ans.
      </Text>

      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
      </View>

      <Text style={styles.signature}>+ de 200 élèves déjà accompagnés</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ec6b1e',
    marginBottom: 12,
    textAlign: 'center',
  },
  quote: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#0f3b67',
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#0f3b67',
    textAlign: 'center',
    marginBottom: 30,
  },
  progressBarContainer: {
    width: '80%',
    height: 8,
    backgroundColor: '#ececec',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#ec6b1e',
  },
  signature: {
    fontSize: 12,
    color: '#0f3b67',
    opacity: 0.6,
    textAlign: 'center',
  },
});
