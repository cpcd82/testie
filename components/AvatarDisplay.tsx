
import React from 'react';
// Fix: Import PersonalityProfile and World from ../types
import { PersonalityProfile, World } from '../types';
import { WORLDS_DATA } from '../constants';

interface AvatarDisplayProps {
  profile: PersonalityProfile;
  size?: 'small' | 'medium' | 'large';
}

const AvatarDisplay: React.FC<AvatarDisplayProps> = ({ profile, size = 'medium' }) => {
  const world = WORLDS_DATA[profile.worldId];
  
  let avatarSizeClasses = '';
  let textSizeClasses = '';
  let containerPadding = 'p-4';

  switch (size) {
    case 'small':
      avatarSizeClasses = 'w-16 h-16 text-3xl';
      textSizeClasses = 'text-sm';
      containerPadding = 'p-2';
      break;
    case 'large':
      avatarSizeClasses = 'w-32 h-32 text-7xl';
      textSizeClasses = 'text-xl';
      containerPadding = 'p-6';
      break;
    case 'medium':
    default:
      avatarSizeClasses = 'w-24 h-24 text-5xl';
      textSizeClasses = 'text-lg';
      break;
  }

  return (
    <div className={`flex flex-col items-center ${containerPadding} rounded-lg ${world.backgroundColor} shadow-lg`}>
      <div 
        className={`rounded-full flex items-center justify-center ${avatarSizeClasses} mb-3`}
        style={{ backgroundColor: profile.avatarColor }}
      >
        <span role="img" aria-label={profile.name} className="transform group-hover:scale-110 transition-transform">
          {profile.avatarIcon}
        </span>
      </div>
      <h3 className={`font-bold ${textSizeClasses} ${world.textColor}`}>{profile.name}</h3>
    </div>
  );
};

export default AvatarDisplay;