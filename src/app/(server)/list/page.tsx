import { type Metadata } from 'next'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField } from '@/components/Fields'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useId } from 'react'


export const metadata: Metadata = {
  title: 'Servers',
}

const servers = ["efael.net", "efael.net", "floss.uz"]

export default function Login() {
  const id = useId();

  return (
    <AuthLayout
      title="Choose your home"
      subtitle={
        <>
          A place where you will build your own ether!
        </>
      }
    >
      {servers.map((s) => (
        <Link key={id} href={`https://chat.${s}`}>
          <Button key={id} color="gray" className="mt-2 w-full">
            {s}
          </Button>
        </Link>
      ))}
    </AuthLayout >
  )
}
