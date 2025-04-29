import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking } from 'react-native';

export default function ContactScreen() {
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

  const handleEmail = () => {
    Linking.openURL('mailto:contact@etudeplusforma.fr');
  };

  const openEtudePlus = () => {
    Linking.openURL('https://etudeplus.org');
  };

  const openEtudePlusForma = () => {
    Linking.openURL('https://www.etudeplusforma.fr');
  };

  const openGoogleReview = () => {
    Linking.openURL('https://g.page/r/Ce9D1gWzvRPoEBM/review'); // Exemple de lien Google avis
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Nous contacter</Text>

      <Text style={styles.subtitle}>
        Une question ? Un projet ? N’hésitez pas à nous écrire, nous vous répondrons rapidement.
      </Text>

      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
        <TouchableOpacity style={styles.button} onPress={handleEmail}>
          <Text style={styles.buttonText}>Envoyer un email</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.linksContainer}>
        <Text style={styles.sectionTitle}>Découvrez nos sites</Text>

        <TouchableOpacity style={styles.linkButton} onPress={openEtudePlus}>
          <Text style={styles.linkText}>🔗 Visiter Étude Plus</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={openEtudePlusForma}>
          <Text style={styles.linkText}>🔗 Visiter Étude Plus Formation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={openGoogleReview}>
          <Text style={styles.linkText}>⭐ Laisser un avis Google</Text>
        </TouchableOpacity>
      </View>
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
  buttonWrapper: {
    marginBottom: 40,
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
  linksContainer: {
    width: '100%',
    maxWidth: 600,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 20,
    textAlign: 'center',
  },
  linkButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    alignItems: 'center',
    borderColor: '#1e3a8a',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  linkText: {
    color: '#1e3a8a',
    fontSize: 16,
    fontWeight: '600',
  },
});
