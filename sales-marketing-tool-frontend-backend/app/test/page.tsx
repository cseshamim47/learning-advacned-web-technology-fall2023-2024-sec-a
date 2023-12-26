'use client'
import Component from "../components/test/Component"
import { AuthProvider } from "../context/AuthContext"


const page = () => {
  return (
    <AuthProvider>
      <Component />
    </AuthProvider>
  )
}
export default page