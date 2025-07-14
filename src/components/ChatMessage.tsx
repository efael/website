'use client'

import { useId, useRef, useState } from 'react'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/cn'

export type Color = 'amber' | 'green' | 'red'

export type User = {
  fullName: string
  color: Color
}

export const Avatar: React.FC<{
  className?: string
  text?: string
  color?: Color
  size?: 'medium' | 'small' | 'large'
}> = ({ className, text = 'H', color = 'amber', size = 'medium' }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full',
        {
          'bg-amber-900 text-amber-300': color == 'amber',
          'bg-green-900 text-green-300': color == 'green',
          'bg-red-900 text-red-300': color == 'red',
          'h-16 w-16 text-3xl font-bold': size == 'large',
          'h-10 w-10 text-lg font-bold': size == 'medium',
          'h-6 w-6 text-xs font-bold': size == 'small',
        },
        className,
      )}
    >
      <div>{text}</div>
    </div>
  )
}

export const ChatMessage: React.FC<{
  user: User
  message: string
  hideUserAvatar?: boolean
  className?: string
}> = ({ user, message, hideUserAvatar = false, className }) => {
  return (
    <div className="relative">
      <div
        className={cn(
          'relative top-0 left-0 pl-3',
          {
            'mt-0.5': hideUserAvatar,
          },
          className,
        )}
      >
        {!hideUserAvatar && (
          <>
            <Avatar
              text={user.fullName.at(0) ?? 'U'}
              color={user.color}
              size="small"
              className="absolute top-1 left-0 scale-125 border-2 border-white"
            />
            <div className="mb-1 ml-4 text-xs font-semibold">
              {user.fullName}
            </div>
          </>
        )}
        <div className="inline-flex rounded-lg bg-gray-200 p-2 text-xs">
          <div>{message}</div>
        </div>
      </div>
    </div>
  )
}
