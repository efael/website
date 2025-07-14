'use client'

import { AppScreen, BackIcon, VideoIcon } from '@/components/AppScreen'
import { Avatar, ChatMessage } from './ChatMessage'
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft'
import { FaVideo } from '@react-icons/all-files/fa/FaVideo'

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
          <div className="flex items-center">
            <FaArrowLeft className="mr-3" />
            <Avatar text="H" color="amber" size="small" className="mr-2" />
            <div className="text-sm">Hamjamiyat</div>
            <FaVideo className="ml-auto" />
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
