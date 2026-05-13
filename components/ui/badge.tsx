import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default: 'border border-enari-border bg-surface text-white/70',
        blue:    'border border-enari-blue/30 bg-enari-blue/10 text-enari-blue',
        warm:    'border border-enari-warm/30 bg-enari-warm/10 text-enari-warm',
        red:     'border border-enari-red/30 bg-enari-red/10 text-enari-red',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
