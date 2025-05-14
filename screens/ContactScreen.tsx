import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Linking, LayoutAnimation, Platform, UIManager } from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ContactScreen() {
  const scale = useRef(new Animated.Value(1)).current;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqList = [
    { question: "Comment accéder aux cours après mon inscription ?", answer: "Une fois inscrit, vous recevrez un accès à votre espace personnel via email avec toutes les instructions pour commencer votre formation." },
    { question: "Y a-t-il un accompagnement ou un suivi personnalisé ?", answer: "Oui, chaque apprenant bénéficie d’un suivi régulier assuré par un formateur dédié." },
    { question: "Quels sont les prérequis pour suivre la formation ?", answer: "Aucun prérequis n’est nécessaire. Nos formations sont accessibles à tous niveaux." },
    { question: "Comment obtenir mon certificat en fin de formation ?", answer: "Un certificat est délivré après la validation des compétences, sur la base d’un test final ou d’un projet." },
    { question: "Puis-je suivre la formation à mon propre rythme ?", answer: "Oui, nos modules sont disponibles à tout moment pour s’adapter à votre emploi du temps." }
  ];

  const toggleFAQ = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.05, duration: 800, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const handleEmail = () => { Linking.openURL('mailto:contact@etudeplusforma.fr'); };
  const openEtudePlus = () => { Linking.openURL('https://etudeplus.org'); };
  const openEtudePlusForma = () => { Linking.openURL('https://www.etudeplusforma.fr'); };
  const openGoogleReview = () => { Linking.openURL('https://g.page/r/Ce9D1gWzvRPoEBM/review'); };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Nous contacter</Text>
      <Text style={styles.subtitle}>Une question ? Un projet ? N’hésitez pas à nous écrire, nous vous répondrons rapidement.</Text>

      <Animated.View style={[styles.buttonWrapper, { transform: [{ scale }] }]}>
        <TouchableOpacity style={styles.button} onPress={handleEmail}>
          <Text style={styles.buttonText}>Envoyer un email</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.linksContainer}>
        <Text style={styles.sectionTitle}>Découvrez nos sites</Text>

        <TouchableOpacity style={styles.linkButton} onPress={openEtudePlus}>
          <View style={styles.linkContent}>
            <Text style={styles.linkIcon}>🔗</Text>
            <Text style={styles.linkText}>Visiter Étude Plus</Text>
            <Text style={styles.linkArrow}>➔</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={openEtudePlusForma}>
          <View style={styles.linkContent}>
            <Text style={styles.linkIcon}>🔗</Text>
            <Text style={styles.linkText}>Visiter Étude Plus Formation</Text>
            <Text style={styles.linkArrow}>➔</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={openGoogleReview}>
          <View style={styles.linkContent}>
            <Text style={styles.linkIcon}>⭐</Text>
            <Text style={styles.linkText}>Laisser un avis Google</Text>
            <Text style={styles.linkArrow}>➔</Text>
          </View>
        </TouchableOpacity>
      </View>

{/* FAQ Section unchanged */}
      <View style={styles.faqSection}>
        <Text style={styles.faqTitle}>FOIRE AUX QUESTIONS (FAQ)</Text>
        <View style={styles.faqBox}>
          {faqList.map((item, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => toggleFAQ(index)} style={styles.faqQuestionWrapper}>
                <Text style={styles.faqQuestion}>{item.question}</Text>
                <Text style={styles.faqArrow}>{activeIndex === index ? '▲' : '▼'}</Text>
              </TouchableOpacity>
              {activeIndex === index && (
                <View style={styles.faqAnswerWrapper}>
                  <Text style={styles.faqAnswer}>{item.answer}</Text>
                </View>
              )}
              <View style={styles.divider} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 24,
    backgroundColor: '#fff7f0',
    alignItems: 'center',
  },
  title: {
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
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ec6b1e',
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
    borderColor: '#0f172a',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  linkText: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '600',
  },

linkContent: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
},

linkIcon: {
  fontSize: 18,
  marginRight: 8,
},

linkArrow: {
  color: '#0f52ba',
  fontSize: 20,
  fontWeight: 'bold',
},

  faqSection: {
    marginTop: 50,
    width: '100%',
    maxWidth: 700,
  },
  faqTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff8800',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  faqBox: {
    backgroundColor: '#0f3b67',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  faqQuestionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  faqQuestion: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    flex: 1,
    paddingRight: 10,
  },
  faqArrow: {
    color: '#ff8800',
    fontSize: 20,
    fontWeight: 'bold',
  },
  faqAnswerWrapper: {
    paddingVertical: 8,
  },
  faqAnswer: {
    color: '#ffffff',
    fontSize: 15,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#ffffff30',
    marginVertical: 8,
  },
});
