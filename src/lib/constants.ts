// Application constants and configuration

// Theme configuration - Cyberpunk Blue Theme 🔵
export const THEME = {
  colors: {
    primary: '#2563eb', // Electric Blue
    secondary: '#06b6d4', // Electric Cyan
    accent: '#3b82f6', // Royal Blue
    cosmic: '#0ea5e9', // Sky Blue
    star: '#60a5fa', // Light Blue Star
    background: {
      primary: '#0f172a', // Very Dark Navy
      secondary: '#1e293b', // Dark Blue Gray
      tertiary: '#334155', // Medium Blue Gray
      gradient: 'from-slate-900 via-blue-950 to-slate-900'
    },
    surface: {
      primary: 'rgba(37, 99, 235, 0.08)', // Electric blue glow
      secondary: 'rgba(6, 182, 212, 0.12)', // Cyan glow
      hover: 'rgba(59, 130, 246, 0.2)' // Royal blue glow
    }
  },
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500
    },
    easing: 'ease-out'
  },
  shadows: {
    soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    glow: '0 0 20px rgba(30, 64, 175, 0.3)'
  }
} as const;

// Navigation items
export const NAVIGATION = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const;

// Social links
export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/GengDev', iconName: 'Github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/watchara-sritonwong', iconName: 'Linkedin' },
  { name: 'Email', href: 'mailto:Watchara.geng.work@gmail.com', iconName: 'Mail' },
] as const;

// Contact information
export const CONTACT_INFO = [
  {
    iconName: 'Mail',
    label: 'Email',
    value: 'Watchara.geng.work@gmail.com',
    href: 'mailto:Watchara.geng.work@gmail.com'
  },
  {
    iconName: 'Phone',
    label: 'Phone',
    value: '095-962-5861',
    href: 'tel:+66959625861'
  },
  {
    iconName: 'MapPin',
    label: 'Location',
    value: 'Bangkok, Thailand',
    href: '#'
  }
] as const;
