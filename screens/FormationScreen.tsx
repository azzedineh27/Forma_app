import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking } from 'react-native';

export default function FormationScreen() {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.05,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const openFormationWebsite = () => {
    Linking.openURL('https://www.etudeplusforma.fr');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Étude Plus Formation</Text>

      <Text style={styles.subtitle}>
        Construisez votre avenir professionnel avec des formations certifiantes
      </Text>

      <View style={styles.textBox}>
        <Text style={styles.text}>
          Étude Plus Formation propose des parcours de formation adaptés aux adultes, aux étudiants et aux professionnels souhaitant évoluer ou se reconvertir. Nos programmes sont reconnus et orientés vers l'excellence.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos principales formations</Text>
        <View style={styles.bulletList}>
          <Text style={styles.bullet}>• Remise à niveau scolaire</Text>
          <Text style={styles.bullet}>• Préparation aux concours</Text>
          <Text style={styles.bullet}>• Formations en langues étrangères</Text>
          <Text style={styles.bullet}>• Formations certifiantes en bureautique</Text>
        </View>
      </View>

      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
        <TouchableOpacity onPress={openFormationWebsite} style={styles.button}>
          <Text style={styles.buttonText}>Découvrir nos formations</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    padding: 24,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ff8800',
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  textBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    color: '#1e3a8a',
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    width: '100%',
    maxWidth: 600,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 16,
    textAlign: 'center',
  },
  bulletList: {
    paddingHorizontal: 16,
  },
  bullet: {
    fontSize: 16,
    color: '#1e3a8a',
    lineHeight: 26,
    marginBottom: 10,
  },
  buttonWrapper: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#ff8800',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
