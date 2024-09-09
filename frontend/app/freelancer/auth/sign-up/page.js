'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDebounceCallback } from 'usehooks-ts'
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { signUpSchema } from "@/schemas/signUpSchema"
import axios from 'axios'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import { Loader2 } from "lucide-react"
const { FormControl, FormField, FormItem, FormLabel, FormMessage } = require("@/components/ui/form")
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import TagModel from "@/components/ui/TagModel"
import Backend_Url from "@/config"

const Page = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debounced = useDebounceCallback(setUsername, 300)

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  // const onSubmit = async (data) => {
  //   setIsSubmitting(true)
  //   try {
  //     const response = await axios.post(`${Backend_Url}freelancer/auth/signup`, data)
  //     console.log(response)
  //   } catch (error) {
  //     const errorMessage = error.response?.data.message ?? "Signup failed"
  //     toast({
  //       title: "Signup Failed",
  //       description: errorMessage,
  //       variant: "destructive"
  //     })
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  return (
    <div className="flex items-center min-h-screen bg-black h-screen w-screen justify-around gap-5">
      <div className="relative w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 mx-auto ml-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Join <span className="text-teal-400">LearnIT</span>
          </h1>
          <p className="text-gray-400 mb-6">Connect with top talent! Sign up to post your jobs.</p>
        </div>

        <FormProvider {...form}>
          <form className="space-y-6">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormLabel className="text-gray-300">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e)
                          setUsername(e.target.value)
                          debounced(e.target.value)
                        }}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-500 hover:shadow-lg"
                        style={{ borderRadius: '8px' }}
                      />
                    </FormControl>
                    {username === '' && (
                      <FaUser className="absolute left-3 bottom-1 transform -translate-y-1/2 text-gray-500" />
                    )}
                    {isCheckingUsername && (
                      <Loader2 className="animate-spin absolute right-3 top-1/2 transform -translate-y-1/2" />
                    )}
                    {usernameMessage && (
                      <p className={`text-sm mt-1 ${usernameMessage === "Username is unique" ? "text-green-500" : "text-red-500"}`}>
                        {usernameMessage}
                      </p>
                    )}
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="email" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(e)
                          setEmail(e.target.value)
                        }}
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-500 hover:shadow-lg"
                        style={{ borderRadius: '8px' }}
                      />
                    </FormControl>
                    {email === '' && (
                      <FaEnvelope className="absolute left-3 bottom-1 transform -translate-y-1/2 text-gray-500" />
                    )}
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormLabel className="text-gray-300">Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="password" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(e)
                          setPassword(e.target.value)
                        }}
                        className="w-full pl-10 pr-4 py-3  bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-500 hover:shadow-lg"
                        style={{ borderRadius: '8px' }}
                      />
                    </FormControl>
                    {password === '' && (
                      <FaLock className="absolute left-3 bottom-1 transform -translate-y-1/2 text-gray-500" />
                    )}
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button 
              type="button" 
              disabled={isSubmitting} 
              className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
              onClick = {async ()=>{
                console.log(username,email)
                const response = await axios.post(`${Backend_Url}freelancer/auth/signup`, {
                  username,
                  email,
                  password
                })
                if(response.data.token){
                  localStorage.setItem("token",`Bearer ${response.data.token}`)
                  location.href = "/Freelancer/Dashboard"
                }
                console.log(response.data)
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </FormProvider>
        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already a member?{' '}
            <Link href="sign-in" className="text-teal-400 hover:text-white font-medium transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className='w-full h-full hidden lg:block'>
        <TagModel />
      </div>
    </div>
  )
}

export default Page
