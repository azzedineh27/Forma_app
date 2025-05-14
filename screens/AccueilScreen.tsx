import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function AccueilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Logo et titre */}
      <View style={styles.header}>
        <Image source={require('../assets/book.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.mainTitle}>Étude Plus</Text>
        <Text style={styles.tagline}>Accompagner, soutenir, faire réussir.</Text>
      </View>

      {/* Présentation */}
      <View style={styles.presentationCard}>
        <Text style={styles.presentationText}>
          Depuis plus de 8 ans, Étude Plus accompagne les élèves du primaire à la terminale pour leur permettre d’exprimer pleinement leur potentiel.
        </Text>
      </View>

      {/* Nos valeurs */}
      <Text style={styles.sectionTitle}>Nos valeurs</Text>
      <View style={styles.valuesRow}>
        <View style={styles.valueCard}>
          <Text style={styles.valueIcon}>🤝</Text>
          <Text style={styles.valueLabel}>Bienveillance</Text>
        </View>
        <View style={styles.valueCard}>
          <Text style={styles.valueIcon}>📈</Text>
          <Text style={styles.valueLabel}>Excellence</Text>
        </View>
        <View style={styles.valueCard}>
          <Text style={styles.valueIcon}>🧭</Text>
          <Text style={styles.valueLabel}>Méthode</Text>
        </View>
      </View>

      {/* Chiffres clés */}
      <View style={styles.statsRow}>
        <View style={[styles.statBubble, { backgroundColor: '#2dc7c8' }]}>
          <Text style={styles.statValue}>+200</Text>
          <Text style={styles.statLabel}>élèves suivis</Text>
        </View>
        <View style={[styles.statBubble, { backgroundColor: '#5aaaff' }]}>
          <Text style={styles.statValue}>97%</Text>
          <Text style={styles.statLabel}>satisfaction</Text>
        </View>
        <View style={[styles.statBubble, { backgroundColor: '#7b61ff' }]}>
          <Text style={styles.statValue}>8 ans</Text>
          <Text style={styles.statLabel}>d’expérience</Text>
        </View>
      </View>

      {/* Témoignages */}
      <View style={styles.presentationCard}>
        <Text style={styles.testimonialTitle}>Ils nous ont fait confiance</Text>
        <Text style={styles.testimonialText}>« Un suivi remarquable, des progrès visibles en quelques semaines ! » — Parent de collégien</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#e6f0ff',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0f3b67',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: '#2dc7c8',
    marginTop: 4,
    textAlign: 'center',
  },
  presentationCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
  },
  presentationText: {
    fontSize: 16,
    color: '#0f3b67',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 16,
    textAlign: 'center',
  },
  valuesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  valueCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  valueIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  valueLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f3b67',
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  statBubble: {
    borderRadius: 50,
    padding: 16,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValue: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
  },
  testimonialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 10,
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: 16,
    color: '#0f3b67',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
