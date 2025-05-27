import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking } from 'react-native';

export default function SoutienScreen() {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.05, duration: 800, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const openSoutienPage = () => {
    Linking.openURL('https://etudeplus.org');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
      {/* En-tête */}
      <View style={styles.headerSection}>
        <Text style={styles.mainTitle}>Soutien scolaire</Text>
        <Text style={styles.mainSubtitle}>Un accompagnement pédagogique sur-mesure pour chaque élève</Text>

        <View style={styles.soutienGrid}>
          {[
            { title: 'Cours Particuliers', desc: 'Cours solitaire dans toutes les matières scolaires.' },
            { title: 'Cours en duo', desc: 'Cours par groupe de 2 dans les matières scolaires.' },
            { title: 'Cours en groupe', desc: 'Cours par groupe de 4 dans les matières scolaires.' },
            { title: 'Stages intensifs', desc: 'Cours par groupe durant les vacances scolaires' }
          ].map((service, index) => (
            <View key={index} style={styles.serviceCard}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Pourquoi nous ? */}
      <View style={styles.whiteSection}>
        <Text style={styles.sectionTitle}>Pourquoi choisir Etude Plus ?</Text>
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

      {/* CTA */}
      <View style={styles.ctaSection}>
        <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
          <TouchableOpacity style={styles.button} onPress={openSoutienPage}>
            <Text style={styles.buttonText}>Voir plus sur notre site</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { alignItems: 'center', backgroundColor: '#fff7f0' },

  headerSection: {
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 8,
    textAlign: 'center',
  },
  mainSubtitle: {
    fontSize: 18,
    color: '#ec6b1e',
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  soutienGrid: {
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
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
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

  whiteSection: {
  backgroundColor: '#ffffff',
  width: '100%',
  paddingVertical: 40,
  paddingHorizontal: 20,
  alignItems: 'center',
  marginTop: 20,
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  borderBottomLeftRadius: 40, // ✅ Ajouté
  borderBottomRightRadius: 40, // ✅ Ajouté
  shadowColor: '#ec6b1e',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  elevation: 6,
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
    gap: 16,
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: '#fff7f0',
    borderRadius: 16,
    padding: 16,
    width: 100,
    alignItems: 'center',
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
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
    gap: 16,
  },
  stepCard: {
    backgroundColor: '#fff7f0',
    borderRadius: 16,
    padding: 16,
    width: 100,
    alignItems: 'center',
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
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

  ctaSection: {
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ec6b1e',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
