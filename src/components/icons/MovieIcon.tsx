export const MovieIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <title>Movie</title>

      {/* Film Frame */}
      <path
        d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="currentColor"
        fillOpacity="0.08"
      />

      {/* Left holes */}
      <circle cx="7" cy="7" r="0.9" fill="currentColor" />
      <circle cx="7" cy="12" r="0.9" fill="currentColor" />
      <circle cx="7" cy="17" r="0.9" fill="currentColor" />

      {/* Right holes */}
      <circle cx="17" cy="7" r="0.9" fill="currentColor" />
      <circle cx="17" cy="12" r="0.9" fill="currentColor" />
      <circle cx="17" cy="17" r="0.9" fill="currentColor" />

      {/* Play button */}
      <path
        d="M10 9.5V14.5L14.5 12L10 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
};