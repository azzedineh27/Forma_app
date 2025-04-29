import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AccueilScreen() {
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

  const openWebsite = () => {
    Linking.openURL('https://etudeplus.org');
  };

  return (
    <LinearGradient colors={['#e0f0ff', '#ffffff']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Logo ou Image */}
        <Image
          source={require('../assets/logo_etudeplus.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Étude Plus</Text>

        <Text style={styles.subtitle}>
          Accompagner, soutenir, faire réussir.
        </Text>

        {/* Présentation */}
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Depuis plus de 8 ans, Étude Plus accompagne les élèves du primaire à la terminale pour leur permettre d'exprimer pleinement leur potentiel.
          </Text>
        </View>

        {/* Valeurs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nos valeurs</Text>
          <View style={styles.valuesContainer}>
            <View style={styles.valueItem}>
              <Text style={styles.icon}>🤝</Text>
              <Text style={styles.valueLabel}>Bienveillance</Text>
            </View>
            <View style={styles.valueItem}>
              <Text style={styles.icon}>📈</Text>
              <Text style={styles.valueLabel}>Excellence</Text>
            </View>
            <View style={styles.valueItem}>
              <Text style={styles.icon}>🧭</Text>
              <Text style={styles.valueLabel}>Méthode</Text>
            </View>
          </View>
        </View>

        {/* Chiffres clés */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quelques chiffres</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statBubble}>
              <Text style={styles.statValue}>+200</Text>
              <Text style={styles.statLabel}>élèves suivis</Text>
            </View>
            <View style={styles.statBubble}>
              <Text style={styles.statValue}>97%</Text>
              <Text style={styles.statLabel}>satisfaction</Text>
            </View>
            <View style={styles.statBubble}>
              <Text style={styles.statValue}>8 ans</Text>
              <Text style={styles.statLabel}>d'expérience</Text>
            </View>
          </View>
        </View>

        {/* Témoignages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ils nous ont fait confiance</Text>
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              “Un suivi remarquable, des progrès visibles en quelques semaines !”
            </Text>
            <Text style={styles.testimonialAuthor}>— Parent de collégien</Text>
          </View>
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              “Des enseignants à l’écoute et motivants.”
            </Text>
            <Text style={styles.testimonialAuthor}>— Élève de terminale</Text>
          </View>
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              “Un enseignement de qualité, ils ont boosté mes capacités !”
            </Text>
            <Text style={styles.testimonialAuthor}>— Élève en Bac Pro</Text>
          </View>
        </View>

        {/* Call To Action */}
        <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
          <TouchableOpacity onPress={openWebsite} style={styles.button}>
            <Text style={styles.buttonText}>Visiter notre site</Text>
          </TouchableOpacity>
        </Animated.View>

      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollContainer: {
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
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
  textBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 20,
    marginBottom: 40,
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f3b67',
    marginBottom: 20,
    textAlign: 'center',
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  valueItem: {
    alignItems: 'center',
    width: 90,
  },
  icon: {
    fontSize: 40,
    marginBottom: 8,
    color: '#ff8800',
  },
  valueLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e3a8a',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  statBubble: {
    backgroundColor: '#0f3b67',
    borderRadius: 60,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff8800',
  },
  statLabel: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 4,
  },
  testimonialCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 4,
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1e3a8a',
    marginBottom: 10,
    lineHeight: 22,
  },
  testimonialAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff8800',
    textAlign: 'right',
  },
  buttonWrapper: {
    marginTop: 30,
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#ff8800',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
