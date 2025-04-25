
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ className, size = 'medium' }: LogoProps) {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <div className={cn('font-bold flex items-center', sizeClasses[size], className)}>
      <span className="gradient-text">Expiry</span>
      <span className="text-brand-purple">Guard</span>
    </div>
  );
}
