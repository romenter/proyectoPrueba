type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantStyles: Record<Variant, string> = {
  primary:   'bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100',
  secondary: 'border border-gray-300 text-gray-700 hover:border-gray-500 dark:border-gray-600 dark:text-gray-300',
  ghost:     'text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800',
  danger:    'bg-red-600 text-white hover:bg-red-700',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium
        transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
        ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  )
}
