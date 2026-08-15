type LogoProps = {
  className?: string;
  alt?: string;
};

export function Logo({ className = "h-12 w-auto", alt = "Baby Med" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`object-contain ${className}`.trim()}
    />
  );
}
