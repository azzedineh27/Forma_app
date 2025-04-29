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

      <Text style={styles.subtitle}>Construisez votre avenir professionnel avec des formations certifiantes</Text>

      <View style={styles.textBox}>
        <Text style={styles.text}>
          Étude Plus Formation propose des parcours de formation adaptés aux adultes, étudiants et professionnels
          souhaitant évoluer ou se reconvertir. Nos programmes sont reconnus et orientés vers l'excellence.
        </Text>
      </View>

      {/* Formations principales */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos principales formations</Text>
        <View style={styles.cardContainer}>
          {[
            'Remise à niveau scolaire',
            'Préparation aux concours',
            'Formations en langues étrangères',
            'Formations certifiantes en bureautique',
          ].map((formation, index) => (
            <View key={index} style={styles.formationCard}>
              <Text style={styles.formationText}>📘 {formation}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Formules */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos Formules</Text>
        {[
          {
            name: 'STANDARD',
            content: [
              '10h de cours',
              'Support de cours + Compte Teams',
              'Préparation TCF/DELF/DALF',
              'Suivi personnalisé',
              'Frais d’inscription à définir',
            ],
            price: 'À partir de 290€',
          },
          {
            name: 'ESSENTIEL',
            content: [
              '20h de cours',
              'Support de cours + Compte Teams',
              'Réduction de 90€ incluse',
              'Suivi personnalisé',
              'Préparation TCF/DELF/DALF',
            ],
            price: 'À partir de 490€',
          },
          {
            name: 'PREMIUM',
            content: [
              '30h de cours',
              'Support de cours + Compte Teams',
              'Coaching individuel',
              'Préparation TCF/DELF/DALF',
              'Frais d’inscription offerts',
            ],
            price: '890€',
          },
        ].map((f, index) => (
          <View key={index} style={styles.formuleCard}>
            <Text style={styles.formuleTitle}>{f.name}</Text>
            {f.content.map((c, i) => (
              <Text key={i} style={styles.formuleItem}>• {c}</Text>
            ))}
            <Text style={styles.price}>{f.price}</Text>
          </View>
        ))}
      </View>

      {/* CTA */}
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
    maxWidth: 700,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  formationCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 3,
  },
  formationText: {
    fontSize: 16,
    color: '#1e3a8a',
  },
  formuleCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  formuleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff8800',
    marginBottom: 10,
  },
  formuleItem: {
    fontSize: 15,
    color: '#1e3a8a',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginTop: 12,
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
