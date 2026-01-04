// Application constants and configuration

// Theme configuration
export const THEME = {
  colors: {
    primary: '#00FFFF', // Cyan
    secondary: '#0080FF', // Royal Blue
    accent: '#9333EA', // Purple
    background: {
      dark: '#000000',
      darker: '#111111',
      gradient: 'from-black via-gray-900 to-black'
    }
  },
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500
    },
    easing: 'ease-out'
  }
} as const;

// Navigation items
export const NAVIGATION = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const;

// Social links
export const SOCIAL_LINKS = [
  { name: 'GitHub', href: '#', iconName: 'Github' },
  { name: 'LinkedIn', href: '#', iconName: 'Linkedin' },
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
