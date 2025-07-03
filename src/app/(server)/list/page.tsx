import { type Metadata } from 'next'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <AuthLayout
      title="Choose your home"
      subtitle={
        <>
          A place where you will build your own ether!
        </>
      }
    >
      <form>
        <div className="space-y-6">
          <SelectField label='Available servers:' >
            <optgroup label="Global Servers">
              <option>efael.net</option>
              <option>floss.uz</option>
            </optgroup>
            <optgroup label="Local Servers">
              <option>efael.uz</option>
            </optgroup>
          </SelectField>
        </div>
        <Button type="submit" color="cyan" className="mt-8 w-full">
          Let's Go!
        </Button>
      </form>
    </AuthLayout>
  )
}
