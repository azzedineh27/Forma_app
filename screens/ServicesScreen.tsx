import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking } from 'react-native';

export default function ServicesScreen() {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.05, duration: 800, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const openServicesPage = () => {
    Linking.openURL('https://etudeplus.org');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Zone BLEUE FONCÉE */}
      <View style={styles.darkSection}>
        <Text style={styles.mainTitle}>Nos Services</Text>
        <Text style={styles.mainSubtitle}>Un accompagnement pédagogique sur-mesure pour chaque élève</Text>

        <View style={styles.servicesGrid}>
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
      </View>

      {/* Zone BLEUE CLAIRE */}
      <View style={styles.lightSection}>
        <Text style={styles.sectionTitle}>Pourquoi choisir Étude Plus ?</Text>
        <View style={styles.featuresRow}>
          {[
            { icon: '🤝', label: 'Suivi personnalisé' },
            { icon: '👩‍🏫', label: 'Enseignants experts' },
            { icon: '🚀', label: 'Progrès rapides' },
          ].map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <Text style={styles.featureText}>{feature.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Comment se déroule l’accompagnement ?</Text>
        <View style={styles.stepsRow}>
          {[
            { icon: '📞', label: 'Prise de contact' },
            { icon: '🎯', label: 'Analyse du besoin' },
            { icon: '📚', label: 'Mise en place du suivi' },
          ].map((step, index) => (
            <View key={index} style={styles.stepCard}>
              <Text style={styles.stepIcon}>{step.icon}</Text>
              <Text style={styles.stepText}>{step.label}</Text>
            </View>
          ))}
        </View>
      </View>

            {/* CTA avec fond bleu clair */}
      <View style={styles.lightSection}>
        <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
          <TouchableOpacity style={styles.button} onPress={openServicesPage}>
            <Text style={styles.buttonText}>Voir plus sur notre site</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { alignItems: 'center' },

  darkSection: {
    backgroundColor: '#0f3b67',
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  mainSubtitle: {
    fontSize: 18,
    color: '#ff8800',
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    width: 160,
    alignItems: 'center',
    shadowColor: '#ff8800',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#1e3a8a',
    textAlign: 'center',
  },

  lightSection: {
    backgroundColor: '#d0e8ff',
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    width: 100,
    alignItems: 'center',
    shadowColor: '#ff8800',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  featureIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f3b67',
    textAlign: 'center',
  },
  stepsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  stepCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    width: 100,
    alignItems: 'center',
    shadowColor: '#ff8800',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  stepIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  stepText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f3b67',
    textAlign: 'center',
  },

  // CTA mis à jour
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ff8800',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#ff8800',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#0f3b67',
    fontSize: 16,
    fontWeight: 'bold',
  },
});