'use client'

import { useEffect } from 'react'
import { createClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SignOut() {
  const router = useRouter()

  useEffect(() => {
    const signOut = async () => {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push('/')
    }

    signOut()
  }, [router])

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Signing out...</h2>
      <p className="text-gray-600">Please wait while we sign you out.</p>
    </div>
  )
}
