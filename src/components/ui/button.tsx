import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gradient"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild = false, children, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-white hover:bg-primary/90": variant === "default",
        "border border-border text-foreground bg-transparent hover:bg-accent hover:text-white": variant === "outline",
        "text-foreground hover:bg-accent/10 hover:text-accent": variant === "ghost",
        "bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90": variant === "gradient",
      },
      {
        "h-9 px-3": size === "sm",
        "h-10 px-4 py-2": size === "md",
        "h-11 px-8": size === "lg",
      },
      className
    )

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>
      return React.cloneElement(child, {
        ...props,
        className: cn(buttonClasses, child.props?.className),
      })
    }
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }