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
        {[
          { icon: '🤝', label: 'Bienveillance' },
          { icon: '📈', label: 'Excellence' },
          { icon: '🧭', label: 'Méthode' },
        ].map((val, idx) => (
          <View key={idx} style={styles.valueCard}>
            <Text style={styles.valueIcon}>{val.icon}</Text>
            <Text style={styles.valueLabel}>{val.label}</Text>
          </View>
        ))}
      </View>

      {/* Chiffres clés */}
      <View style={styles.statsRow}>
        {[
          { value: '+200', label: 'élèves suivis', color: '#ec6b1e' },
          { value: '97%', label: 'satisfaction', color: '#0f3b67' },
          { value: '8 ans', label: 'd’expérience', color: '#0f52ba' },
        ].map((stat, idx) => (
          <View key={idx} style={[styles.statBubble, { backgroundColor: stat.color }]}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Témoignages */}
      <Text style={styles.sectionTitle}>Ils nous ont fait confiance</Text>
      <View style={styles.testimonialsRow}>
        {[
          { text: '« Un suivi remarquable, des progrès visibles en quelques semaines ! »', author: 'Parent de collégien' },
          { text: '« Des enseignants à l’écoute et motivants. »', author: 'Élève de terminale' },
          { text: '« Un enseignement de qualité, ils ont boosté mes capacités ! »', author: 'Élève en Bac Pro' },
        ].map((testimonial, idx) => (
          <View key={idx} style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>{testimonial.text}</Text>
            <Text style={styles.testimonialAuthor}>— {testimonial.author}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff7f0',
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
    color: '#ec6b1e',
    marginTop: 4,
    textAlign: 'center',
  },
  presentationCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    width: '100%',
  },
  presentationText: {
    fontSize: 16,
    color: '#0f3b67',
    textAlign: 'center',
    lineHeight: 24,
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
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
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
  testimonialsRow: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  testimonialCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    width: '100%',
    shadowColor: '#ec6b1e',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#0f3b67',
    textAlign: 'center',
    marginBottom: 8,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ec6b1e',
    textAlign: 'right',
  },
});
