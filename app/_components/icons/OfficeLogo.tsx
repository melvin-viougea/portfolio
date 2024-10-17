import { ComponentPropsWithoutRef } from 'react';

export const OfficeLogo = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 960 1074.5000000000002"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      className="text-primary"
      {...props}
    >
      <title>Office 365</title>
      <defs>
        <radialGradient id="a" cx="322" cy="207.3" gradientUnits="userSpaceOnUse" r="800.8">
          <stop offset=".064" stopColor="currentColor"/>
          <stop offset="1" stopColor="#1A202E"/>
        </radialGradient>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="324.3" x2="210" y1="860.8" y2="663.2">
          <stop offset="0" stopColor="currentColor"/>
          <stop offset="1" stopColor="#1A202E" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="c" cx="154.3" cy="824.4" gradientUnits="userSpaceOnUse" r="745.2">
          <stop offset=".134" stopColor="currentColor"/>
          <stop offset="1" stopColor="#1A202E"/>
        </radialGradient>
        <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="872.6" x2="750.1" y1="561" y2="736.6">
          <stop offset="0" stopColor="currentColor"/>
          <stop offset="1" stopColor="#1A202E" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id="e" cx="889.3" cy="588.1" gradientUnits="userSpaceOnUse" r="598.1">
          <stop offset=".058" stopColor="currentColor"/>
          <stop offset="1" stopColor="#1A202E"/>
        </radialGradient>
        <linearGradient id="f" gradientUnits="userSpaceOnUse" x1="311.4" x2="491.7" y1="25.4" y2="25.4">
          <stop offset="0" stopColor="currentColor"/>
          <stop offset="1" stopColor="#1A202E" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <g>
        <path d="M386 24.6l-5.4 3.3c-8.5 5.2-16.6 11-24.2 17.3L372 34.3h132L528 216 408 336l-120 83.4v96.2c0 67.2 35.1 129.5 92.6 164.2l126.3 76.5L240 912h-51.5l-95.9-58.1C35.1 819.1 0 756.9 0 689.7V366.3C0 299.1 35.1 236.7 92.6 202l288-174.2q2.7-1.7 5.4-3.2z" fill="url(#a)"/>
        <path d="M386 24.6l-5.4 3.3c-8.5 5.2-16.6 11-24.2 17.3L372 34.3h132L528 216 408 336l-120 83.4v96.2c0 67.2 35.1 129.5 92.6 164.2l126.3 76.5L240 912h-51.5l-95.9-58.1C35.1 819.1 0 756.9 0 689.7V366.3C0 299.1 35.1 236.7 92.6 202l288-174.2q2.7-1.7 5.4-3.2z" fill="url(#b)"/>
        <path d="M936 576l24 36v77.7c0 67.1-35.1 129.4-92.6 164.2l-288 174.4c-61.1 37-137.7 37-198.8 0L99.3 858c59.9 33.1 133.2 31.8 192.1-3.9l288-174.3C636.9 645 672 582.7 672 515.5V408z" fill="url(#c)"/>
        <path d="M936 576l24 36v77.7c0 67.1-35.1 129.4-92.6 164.2l-288 174.4c-61.1 37-137.7 37-198.8 0L99.3 858c59.9 33.1 133.2 31.8 192.1-3.9l288-174.3C636.9 645 672 582.7 672 515.5V408z" fill="url(#d)"/>
        <path d="M960 366.3v323.4q0 3.1-.1 6.3c-2.1-64.8-36.8-124.3-92.5-158l-288-174.2c-61.1-37-137.7-37-198.8 0l-92.6 56V192.2c0-67.2 35.1-129.5 92.6-164.3l5.7-3.5C446.5-9.2 520.2-8 579.4 27.8l288 174.2c57.5 34.7 92.6 97.1 92.6 164.3z" fill="url(#e)"/>
        <path d="M960 366.3v323.4q0 3.1-.1 6.3c-2.1-64.8-36.8-124.3-92.5-158l-288-174.2c-61.1-37-137.7-37-198.8 0l-92.6 56V192.2c0-67.2 35.1-129.5 92.6-164.3l5.7-3.5C446.5-9.2 520.2-8 579.4 27.8l288 174.2c57.5 34.7 92.6 97.1 92.6 164.3z" fill="url(#f)"/>
        </g>
    </svg>
);
};

export default OfficeLogo;