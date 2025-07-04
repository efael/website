'use client'

import { useId, useRef, useState } from 'react'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen, BackIcon, VideoIcon } from '@/components/AppScreen'
import { cn } from '@/lib/cn'

type Color = 'amber' | 'green' | 'red'

type User = {
  fullName: string
  color: Color
}

const Avatar: React.FC<{
  className?: string
  text?: string
  color?: Color
  size?: 'medium' | 'small'
}> = ({ className, text = 'H', color = 'amber', size = 'medium' }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full',
        {
          'bg-amber-900 text-amber-300': color == 'amber',
          'bg-green-900 text-green-300': color == 'green',
          'bg-red-900 text-red-300': color == 'red',
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

const ChatMessage: React.FC<{
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

export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body className="bg-gray-900 px-5 text-white">
        <div className="mb-2 text-xl font-bold">Chats</div>

        <div className="flex">
          <div className="flex flex-1 items-center gap-3">
            <Avatar text="H" color="amber" size="medium" />
            <div className="flex flex-col justify-center gap-0.5">
              <div className="text-sm font-bold">Hamjamiyat</div>
              <div className="text-xs">
                <strong>Abdusattor</strong>: Bizda yaxshi, rahmat
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end justify-center gap-2">
            <div className="text-xs">11:51</div>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>
      </AppScreen.Body>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex">
            <BackIcon className="mr-3 h-6 w-6 shrink-0" />
            <Avatar text="H" color="amber" size="small" className="mr-2" />
            <div className="text-sm">Hamjamiyat</div>
            <VideoIcon className="ml-auto h-6 w-6 shrink-0" />
          </div>
          <div className="mt-3 border-t border-gray-200 pt-5">
            <ChatMessage
              user={{ fullName: 'Olimjon', color: 'green' }}
              message="Hammaga salom!"
            />
            <ChatMessage
              user={{ fullName: 'Olimjon', color: 'green' }}
              message="Ishlar yaxshimi?"
              hideUserAvatar
            />
            <ChatMessage
              className="mt-4"
              user={{ fullName: 'Abdusattor', color: 'red' }}
              message="Salom qo‘shni"
            />
            <ChatMessage
              user={{ fullName: 'Abdusattor', color: 'red' }}
              message="Bizda yaxshi, rahmat"
              hideUserAvatar
            />
            <div className="h-60" />
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
