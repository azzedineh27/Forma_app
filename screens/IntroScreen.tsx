import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function IntroScreen({ navigation }: any) {
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/intro-image.jpg')} // Image avec l'enfant
        style={styles.topImage}
        resizeMode="cover"
      />

      <View style={styles.card}>
        <Image
          source={require('../assets/logo_etudeplusbg.png')} // Logo Etude Plus
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Etude Plus</Text>
        <Text style={styles.slogan}>Accompagner. Soutenir. Faire réussir.</Text>

        <Text style={styles.subtitle}>
          Prêt à apprendre de manière efficace et ludique ?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Main')}
        >
          <Text style={styles.buttonText}>Découvrir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // tout le fond en blanc désormais
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topImage: {
    width: '100%',
    height: '50%',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  slogan: {
    fontSize: 14,
    color: '#ec6b1e',
    fontWeight: '600',
    marginBottom: 14,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0d23c8',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
