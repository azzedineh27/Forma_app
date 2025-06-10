import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FormationScreen() {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.05, duration: 800, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const openFormationWebsite = () => {
    Linking.openURL('https://www.etudeplusforma.fr');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>Etude Plus Formation</Text>
      <Text style={styles.subtitle}>Construisez votre avenir professionnel avec des formations certifiantes</Text>

      {/* Phrase mise en valeur */}
      <View style={styles.highlightBox}>
        <Text style={styles.highlightText}>
          Etude Plus Formation propose des parcours adaptés aux adultes, étudiants et professionnels souhaitant évoluer ou se reconvertir.
        </Text>
      </View>

      {/* Blocs formations 2x2 */}
      <View style={styles.blockSection}>
        <Text style={styles.sectionTitle}>Nos principales formations</Text>
        <View style={styles.gridContainer}>
          {['Remise à niveau scolaire', 'Préparation aux concours', 'Langues étrangères', 'Bureautique certifiante'].map((formation, index) => (
            <View key={index} style={styles.blockCard}>
              <Text style={styles.blockText}>📘 {formation}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Formules */}
      <View style={styles.whiteCard}>
        <Text style={styles.sectionTitle}>Nos Formules</Text>
        {[
          { name: 'STANDARD', color: '#ec6b1e', content: ['10h de cours', 'Support + Teams', 'Préparation TCF/DELF/DALF', 'Suivi personnalisé'] },
          { name: 'ESSENTIEL', color: '#0f3b67', content: ['20h de cours', 'Support + Teams', 'Réduction incluse', 'Suivi personnalisé'] },
          { name: 'PREMIUM', color: '#0f52ba', content: ['30h de cours', 'Support + Teams', 'Coaching individuel', 'Frais offerts'] },
        ].map((formule, idx) => (
          <View key={idx} style={[styles.formuleCard, { borderColor: formule.color }]}>
            <Text style={[styles.formuleTitle, { color: formule.color }]}>{formule.name}</Text>
            {formule.content.map((item, i) => (
              <View key={i} style={styles.listItem}>
                <Ionicons name="checkmark-circle-outline" size={18} color="green" style={{ marginRight: 6 }} />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
        <TouchableOpacity style={styles.button} onPress={openFormationWebsite}>
          <Text style={styles.buttonText}>Découvrir nos formations</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff7f0',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ec6b1e',
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },

  // Highlighted intro block
  highlightBox: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    maxWidth: 700,
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  highlightText: {
    fontSize: 16,
    color: '#0f3b67',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '500',
  },

  blockSection: {
    width: '100%',
    maxWidth: 700,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 12,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  blockCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '45%',
    margin: 5,
    alignItems: 'center',
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  blockText: {
    fontSize: 16,
    color: '#0f3b67',
    textAlign: 'center',
    fontWeight: '600',
  },

  whiteCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 700,
    marginBottom: 24,
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  formuleCard: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  formuleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  listItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 6,
  justifyContent: 'center',
},
listText: {
  fontSize: 16,
  color: '#0f3b67',
  textAlign: 'left',
},
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 40,
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
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
