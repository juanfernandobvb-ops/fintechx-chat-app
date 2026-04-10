import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatProvider } from './context/chat-context';
import {
  SplashScreen,
  OnboardingScreen,
  HealthScreen,
  ChatScreen,
  ProfileScreen,
  PreferencesScreen,
  EditInformationScreen,
  InviteFriendsScreen
} from './components/screens';
import { BottomNavigation } from './components/ui';

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <div className="app-container">
          <div className="app-mobile-container">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/onboarding" element={<OnboardingScreen />} />
              <Route path="/health" element={<HealthScreen />} />
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/preferences" element={<PreferencesScreen />} />
              <Route path="/edit-information" element={<EditInformationScreen />} />
              <Route path="/invite-friends" element={<InviteFriendsScreen />} />
            </Routes>
            <BottomNavigation />
          </div>
        </div>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;
