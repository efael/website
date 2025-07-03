import { forwardRef } from 'react'
import clsx from 'clsx'

function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 1000 1000" fill="none" aria-hidden="true" {...props}>
      <path
        d="M496.530742,737.090929 C498.295878,735.788092 500.704122,735.788092 502.469258,737.090929 L767.691912,932.850046 L231.306912,932.850046 Z M953.777912,407.577046 L786.854912,921.312046 L684.152203,602.304878 C683.506259,600.298514 684.189254,598.111804 685.839739,596.827481 L686.027089,596.688547 L953.777912,407.577046 Z M45.254912,407.678046 L311.828088,596.693706 C313.603958,597.952893 314.360996,600.216408 313.699988,602.290615 L212.088912,921.140046 L45.254912,407.678046 Z M950.463912,387.644046 L619.779012,387.644798 C617.625875,387.644798 615.714539,386.266408 615.03475,384.223399 L509.591912,67.3330461 L950.463912,387.644046 Z M489.557912,67.2240461 L385.289446,384.207148 C384.614686,386.258459 382.699247,387.644798 380.539807,387.644798 L48.535912,387.644046 L489.557912,67.2240461 Z"
        fill="#fff"
      />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <UserIcon className="h-6 w-6 flex-none" />
        <Logo className="h-6 flex-none" />
        <MenuIcon className="h-6 w-6 flex-none" />
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef<
  React.ElementRef<'div'>,
  { className?: string; children: React.ReactNode }
>(function AppScreenBody({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
    >
      {children}
    </div>
  )
})
