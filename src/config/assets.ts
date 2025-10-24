/**
 * Asset Configuration
 * 
 * Handles environment-based asset URLs and paths
 * Provides consistent asset management across the application
 */

// Environment-based asset base URL
export const ASSET_BASE_URL = import.meta.env.PROD 
  ? '/images' 
  : 'http://localhost:3000/images';

// Asset path builders
export const getImagePath = (category: string, filename: string): string => {
  return `${ASSET_BASE_URL}/${category}/${filename}`;
};

export const getSkillIconPath = (filename: string): string => {
  return getImagePath('skills', filename);
};

export const getExperienceIconPath = (filename: string): string => {
  return getImagePath('experience', filename);
};

export const getHomeImagePath = (filename: string): string => {
  return getImagePath('home', filename);
};

// Common asset paths
export const ASSET_PATHS = {
  skills: {
    angular: getSkillIconPath('Angular_full_color_logo.svg.png'),
    spring: getSkillIconPath('Spring_Boot.svg.png'),
    react: getSkillIconPath('React.png'),
    nest: getSkillIconPath('Nest.js.png'),
    katalon: getSkillIconPath('Katalon-logo-png.png'),
    docker: getSkillIconPath('docker.png'),
    scrum: getSkillIconPath('scrum.png'),
    publicRelation: getSkillIconPath('public-relation.png'),
    quality: getSkillIconPath('quality.png'),
  },
  experience: {
    iscod: getExperienceIconPath('iscod_logo.jpg'),
    kapela: getExperienceIconPath('kapela.png'),
    simplon: getExperienceIconPath('Logo_simplon.co.svg.png'),
    popschool: getExperienceIconPath('popschool.png'),
  },
  home: {
    presentation: getHomeImagePath('4380744.png'),
    contact: getHomeImagePath('contact.png'),
  }
} as const;
