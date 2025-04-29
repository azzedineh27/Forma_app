import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking } from 'react-native';

export default function ServicesScreen() {
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

  const openServicesPage = () => {
    Linking.openURL('https://etudeplus.org');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Nos Services</Text>

      <Text style={styles.subtitle}>
        Un accompagnement pédagogique sur-mesure pour chaque élève
      </Text>

      {/* Services list */}
      <View style={styles.servicesContainer}>
        {[
          { title: 'Cours Particuliers', desc: 'Cours à domicile dans toutes les matières scolaires.' },
          { title: 'Soutien Scolaire', desc: 'Aide hebdomadaire pour réussir toute l’année.' },
          { title: 'Méthodologie', desc: 'Apprendre à s’organiser, mieux travailler et devenir autonome.' },
          { title: 'Préparation aux Examens', desc: 'Stages intensifs pour le Brevet, le Bac, et concours.' }
        ].map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDescription}>{service.desc}</Text>
          </View>
        ))}
      </View>

      {/* Pourquoi choisir Étude Plus ? */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Pourquoi choisir Étude Plus ?</Text>
  <View style={styles.featuresRow}>
    {[
      { icon: '🤝', label: 'Suivi personnalisé' },
      { icon: '👩‍🏫', label: 'Enseignants experts' },
      { icon: '🚀', label: 'Progrès rapides' }
    ].map((item, index) => (
      <View key={index} style={styles.featureCard}>
        <Text style={styles.featureIcon}>{item.icon}</Text>
        <Text style={styles.featureText}>{item.label}</Text>
      </View>
    ))}
  </View>
</View>

{/* Comment se déroule l’accompagnement ? */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Comment se déroule l’accompagnement ?</Text>
  <View style={styles.stepsContainer}>
    {[
      { icon: '📞', label: 'Prise de contact' },
      { icon: '🎯', label: 'Analyse du besoin' },
      { icon: '📚', label: 'Mise en place du suivi' }
    ].map((step, index) => (
      <View key={index} style={styles.stepItem}>
        <Text style={styles.stepIcon}>{step.icon}</Text>
        <View style={styles.stepConnector} />
        <Text style={styles.stepLabel}>{step.label}</Text>
      </View>
    ))}
  </View>
</View>

      {/* CTA */}
      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
        <TouchableOpacity onPress={openServicesPage} style={styles.button}>
          <Text style={styles.buttonText}>Voir plus sur notre site</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}const styles = StyleSheet.create({
  scrollContainer: {
    padding: 24,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
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
    shadowRadius: 6,
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

  // Section générique
  section: {
    width: '100%',
    maxWidth: 700,
    marginBottom: 40,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 16,
    textAlign: 'center',
  },

  // Pourquoi Étude Plus (cartes horizontales)
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 20,
  },
  featureCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 30,
    marginBottom: 8,
    color: '#ff8800',
  },
  featureText: {
    fontSize: 14,
    color: '#1e3a8a',
    fontWeight: '600',
    textAlign: 'center',
  },

  // Timeline verticale stylisée
  stepsContainer: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 30,
  },
  stepItem: {
    width: 110,
    alignItems: 'center',
  },
  stepIcon: {
    fontSize: 34,
    color: '#ff8800',
    marginBottom: 10,
  },
  stepConnector: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ff8800',
    marginBottom: 10,
  },
  stepLabel: {
    fontSize: 13,
    color: '#1e3a8a',
    fontWeight: '600',
    textAlign: 'center',
  },

  // CTA
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#ff8800',
    paddingVertical: 14,
    paddingHorizontal: 32,
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
