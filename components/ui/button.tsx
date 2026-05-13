import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-enari-blue disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-white text-black hover:bg-enari-blue hover:text-white',
        outline:
          'border border-enari-border bg-transparent text-white hover:border-enari-blue hover:text-enari-blue',
        ghost:
          'text-white/60 hover:text-white hover:bg-white/5',
        blue:
          'bg-enari-blue text-black hover:bg-enari-blue/80',
        warm:
          'bg-enari-warm text-black hover:bg-enari-warm/80',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm:      'h-9 px-4 text-xs',
        lg:      'h-13 px-8 text-base',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
