import React from 'react';

export const AgroColors = {
  primary: '#1A6D5E', // Teal
  secondary: '#BF9B30', // Gold
  text: '#2D2D2D', // Dark Grey
  bgLight: '#F5F5F5',
  bgDark: '#1D1D1D',
};

export const CamelIcon = ({ className = 'w-12 h-12', color = AgroColors.primary }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 55 42" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M54.4503 2.42205C54.4503 2.42205 55.4917 14.4418 44.7005 23.2635C39.8396 27.2373 34.608 28.6162 30.326 28.9317C30.3729 27.3991 30.6176 23.1582 31.8959 20.668C33.4769 17.5882 35.5052 14.5114 39.9847 12.5028C40.1167 12.4436 40.2483 12.3835 40.3796 12.3226C40.3254 12.365 40.2711 12.4077 40.2165 12.4506C35.4851 16.1792 34.9594 22.8961 34.9594 22.8961C34.9594 22.8961 39.691 21.3459 43.8968 16.9458C47.5059 13.17 48.3151 8.71463 48.4721 7.52634C48.5744 7.45257 48.6283 7.41263 48.6283 7.41263C48.6283 7.41263 48.5915 7.39389 48.4912 7.37123C48.5023 7.27419 48.5062 7.2227 48.5062 7.2227C48.5062 7.2227 48.4215 7.25837 48.2609 7.33241C47.7108 7.26347 46.4217 7.23558 43.6218 7.68051C38.5631 8.48438 35.9092 9.97559 31.5614 15.4454C26.6651 21.6052 27.0819 29.5057 27.0819 29.5057H27.0979C27.1501 30.5449 27.2641 31.5263 27.4685 32.3486C28.3757 35.9991 30.0069 40.5351 30.4374 41.711C30.4892 41.8526 30.3833 42 30.2326 42H27.0953C26.9153 42 26.7541 41.8884 26.6907 41.7199L24.3336 35.4523C20.9759 35.6129 14.7073 34.9441 8.69678 29.0923C0.582389 21.1921 0.0361614 12.7266 0 11.4858C1.30484 11.3968 5.59276 11.3152 9.32933 13.6368C13.7981 16.4134 14.981 17.5561 16.6897 20.3799C17.0147 20.917 17.2874 21.5703 17.5159 22.2761C16.8247 21.3568 15.8407 20.4364 14.4553 19.5834C8.0148 15.6182 6.57607 16.2615 6.57607 16.2615C6.57607 16.2615 7.35769 21.0379 11.9579 24.8722C16.3355 28.5209 18.4517 28.937 18.6463 28.9687C18.657 29.1424 18.6612 29.2385 18.6612 29.2385L21.9471 30.1641C21.9471 30.1641 22.3628 22.3632 17.4783 16.2812C13.1409 10.8805 6.70063 9.27392 6.70063 9.27392C6.70063 9.27392 6.47184 9.28197 6.114 9.30884C9.57339 8.84714 14.1758 9.27612 19.0543 12.6525C21.2687 14.1852 22.8855 16.1229 24.0601 18.2151C25.6864 14.2685 28.1963 9.96078 32.0018 6.96107C40.8931 -0.0475564 54.4503 2.42205 54.4503 2.42205Z" fill={color}/>
  </svg>
);

export const CamelIcon2 = ({ className = 'w-12 h-12' }: { className?: string }) => (
  <svg
    viewBox="0 0 55 42"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M54.4503 2.42205C54.4503 2.42205 55.4917 14.4418 44.7005 23.2635C39.8396 27.2373 .... .... ..... .... 2.42205Z"
    />
  </svg>
);

export const InnovationIcon = ({ color = AgroColors.primary }: { color?: string }) => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.693-2.166-1.638l-.548-.547z" />
  </svg>
);

export const SustainabilityIcon = ({ color = AgroColors.primary }: { color?: string }) => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const IntegrityIcon = ({ color = AgroColors.primary }: { color?: string }) => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const ExcellenceIcon = ({ color = AgroColors.primary }: { color?: string }) => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l6.857-2.286L11 3z" />
  </svg>
);

export const CollaborationIcon = ({ color = AgroColors.primary }: { color?: string }) => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const DecorativeMask = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0 100 C 20 0, 50 0, 100 100" fill="currentColor" />
  </svg>
);
