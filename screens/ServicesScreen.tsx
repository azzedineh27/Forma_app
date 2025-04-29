import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking } from 'react-native';

export default function ServicesScreen() {
  const scale = useRef(new Animated.Value(1)).current;

  // Animation "pulse" pour le bouton
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

  const openServicesPage = () => {
    Linking.openURL('https://etudeplus.org');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Nos Services</Text>

      <Text style={styles.subtitle}>
        Un accompagnement pédagogique sur-mesure pour chaque élève
      </Text>

      <View style={styles.servicesContainer}>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Cours Particuliers</Text>
          <Text style={styles.serviceDescription}>
            Cours à domicile en mathématiques, français, physique-chimie, anglais, et plus encore.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Soutien Scolaire</Text>
          <Text style={styles.serviceDescription}>
            Aide hebdomadaire pour renforcer les acquis, comprendre les leçons et réussir les examens.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Méthodologie</Text>
          <Text style={styles.serviceDescription}>
            Ateliers de méthodologie pour apprendre à s'organiser, mieux travailler et devenir autonome.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Préparation aux Examens</Text>
          <Text style={styles.serviceDescription}>
            Stages intensifs pour préparer efficacement le Brevet, le Bac ou des concours d’entrée.
          </Text>
        </View>
      </View>

      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
        <TouchableOpacity onPress={openServicesPage} style={styles.button}>
          <Text style={styles.buttonText}>Voir plus sur notre site</Text>
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
  servicesContainer: {
    width: '100%',
    maxWidth: 700,
    marginBottom: 40,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#1e3a8a',
    lineHeight: 24,
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
