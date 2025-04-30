import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  ActivityIndicator,
} from 'react-native';

export default function IntroScreen({ navigation }: any) {
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      <ActivityIndicator size="large" color="#ff8800" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    fontSize: 24,
    fontWeight: '700',
    color: '#1e3a8a',
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff8800',
    marginBottom: 16,
    textAlign: 'center',
  },
  quote: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#1e3a8a',
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 30,
  },
  loader: {
    marginTop: 10,
  },
});
