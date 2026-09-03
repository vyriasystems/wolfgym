type Props = {
  className?: string;
  glow?: boolean;
};

export default function WolfSilhouette({ className = "", glow = true }: Props) {
  return (
    <svg
      viewBox="0 0 400 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {glow && (
        <>
          <ellipse
            className="wolf-eye-glow"
            cx="148"
            cy="248"
            rx="28"
            ry="16"
          />
          <ellipse
            className="wolf-eye-glow"
            cx="252"
            cy="248"
            rx="28"
            ry="16"
          />
        </>
      )}

      {/* Ears */}
      <path
        d="M150 172 L70 22 L172 150Z"
        stroke="#D9D9D9"
        strokeWidth="2.4"
        strokeLinejoin="miter"
      />
      <path
        d="M150 172 L92 52 L164 156Z"
        stroke="#D9D9D9"
        strokeWidth="1.15"
        opacity="0.45"
      />
      <path
        d="M250 172 L330 22 L228 150Z"
        stroke="#D9D9D9"
        strokeWidth="2.4"
        strokeLinejoin="miter"
      />
      <path
        d="M250 172 L308 52 L236 156Z"
        stroke="#D9D9D9"
        strokeWidth="1.15"
        opacity="0.45"
      />

      {/* Head */}
      <path
        d="M200 86 L150 172 L72 228 L96 338 L162 422 L200 452 L238 422 L304 338 L328 228 L250 172Z"
        stroke="#D9D9D9"
        strokeWidth="2.4"
        strokeLinejoin="miter"
      />

      {/* Inner planes */}
      <path
        d="M200 112 L168 176 L200 210 L232 176Z"
        stroke="#D9D9D9"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <path
        d="M200 86 L200 248"
        stroke="#D9D9D9"
        strokeWidth="1.15"
        opacity="0.4"
      />
      <path
        d="M118 226 L200 250 L282 226"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
      <path
        d="M96 286 L158 308 L200 352 L242 308 L304 286"
        stroke="#D9D9D9"
        strokeWidth="1.35"
        opacity="0.7"
      />

      {/* Snout + nose */}
      <path
        d="M158 336 L200 304 L242 336 L200 402Z"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
      <path
        d="M186 352 L200 340 L214 352 L200 368Z"
        fill="#D9D9D9"
        opacity="0.9"
      />
      <path
        d="M200 368 L200 402"
        stroke="#D9D9D9"
        strokeWidth="1.4"
      />

      {/* Jaw notches */}
      <path
        d="M162 422 L178 398 M238 422 L222 398"
        stroke="#D9D9D9"
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* Eyes — slanted, predatory */}
      <polygon
        className="wolf-eye"
        points="126,250 172,236 178,258 132,272"
      />
      <polygon
        className="wolf-eye"
        points="274,250 228,236 222,258 268,272"
      />
    </svg>
  );
}
