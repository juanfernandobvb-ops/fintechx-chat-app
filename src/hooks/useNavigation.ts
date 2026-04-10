import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();
  
  return {
    // Navegação principal
    goToSplash: () => navigate('/'),
    goToOnboarding: () => navigate('/onboarding'),
    goToHome: () => navigate('/home'),
    goToChat: () => navigate('/chat'),
    goToProfile: () => navigate('/profile'),
    goToPreferences: () => navigate('/preferences'),
    goToEditInformation: () => navigate('/edit-information'),
    goToInviteFriends: () => navigate('/invite-friends'),
    goToSettings: () => navigate('/settings'),
    goToHealth: () => navigate('/health'),
    
    // Navegação programática
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
    
    // Replace (não adiciona ao histórico)
    replaceWith: (path: string) => navigate(path, { replace: true }),
  };
};