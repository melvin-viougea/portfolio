import {ComponentPropsWithoutRef} from 'react';

export const GitLabLogo = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 250"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      className="text-primary"
      {...props}
    >
      <title>GitLab</title>
      <g>
        <path d="M128.07485,236.074667 L128.07485,236.074667 L175.17885,91.1043048 L80.9708495,91.1043048 L128.07485,236.074667 L128.07485,236.074667 Z" fill="currentColor"></path>
        <path d="M128.07485,236.074423 L80.9708495,91.104061 L14.9557638,91.104061 L128.07485,236.074423 L128.07485,236.074423 Z" fill="currentColor"></path>
        <path d="M14.9558857,91.1044267 L14.9558857,91.1044267 L0.641828571,135.159589 C-0.663771429,139.17757 0.766171429,143.57955 4.18438095,146.06275 L128.074971,236.074789 L14.9558857,91.1044267 L14.9558857,91.1044267 Z" fill="currentColor"></path>
        <path d="M14.9558857,91.1045486 L80.9709714,91.1045486 L52.6000762,3.79026286 C51.1408762,-0.703146667 44.7847619,-0.701927619 43.3255619,3.79026286 L14.9558857,91.1045486 L14.9558857,91.1045486 Z" fill="currentColor"></path>
        <path d="M128.07485,236.074423 L175.17885,91.104061 L241.193935,91.104061 L128.07485,236.074423 L128.07485,236.074423 Z" fill="currentColor"></path>
        <path d="M241.193935,91.1044267 L241.193935,91.1044267 L255.507992,135.159589 C256.813592,139.17757 255.38365,143.57955 251.96544,146.06275 L128.07485,236.074789 L241.193935,91.1044267 L241.193935,91.1044267 Z" fill="currentColor"></path>
        <path d="M241.193935,91.1045486 L175.17885,91.1045486 L203.549745,3.79026286 C205.008945,-0.703146667 211.365059,-0.701927619 212.824259,3.79026286 L241.193935,91.1045486 L241.193935,91.1045486 Z" fill="currentColor"></path>
      </g>
    </svg>
  );
};

export default GitLabLogo;