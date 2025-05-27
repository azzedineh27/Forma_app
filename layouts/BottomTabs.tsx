import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AccueilScreen from '../screens/AccueilScreen';
import SoutienScreen from '../screens/SoutienScreen';
import FormationScreen from '../screens/FormationScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ff8800',
        tabBarInactiveTintColor: '#1e3a8a',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          paddingBottom: 5,
          height: 65,
          borderTopWidth: 1,
          borderTopColor: '#ddd',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'ellipse';

          switch (route.name) {
            case 'Accueil':
              iconName = 'home-outline';
              break;
            case 'Soutien':
              iconName = 'book-outline'; // <-- Icône de livre
              break;
            case 'Formation':
              iconName = 'school-outline';
              break;
            case 'Contact':
              iconName = 'mail-outline';
              break;
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={AccueilScreen} />
      <Tab.Screen name="Soutien" component={SoutienScreen} options={{ tabBarLabel: 'Soutien scolaire' }}/>
      <Tab.Screen name="Formation" component={FormationScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}
