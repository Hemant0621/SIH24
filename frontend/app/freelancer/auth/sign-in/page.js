'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import { FaUser, FaLock } from 'react-icons/fa';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { signInSchema } from '@/schemas/signInSchema';
import { useState } from 'react';
import TagModel from '@/components/ui/TagModel';

export default function SignInForm() {
  const router = useRouter();
  const [identifierFocus, setIdentifierFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const { toast } = useToast();
  const onSubmit = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      if (result.error === 'CredentialsSignin') {
        toast({
          title: 'Login Failed',
          description: 'Incorrect email or password',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        });
      }
    }

    if (result?.url) {
      router.replace('/dashboard');
    }
  };

  return (
    <div className="flex items-center min-h-screen bg-black h-screen w-screen justify-around gap-5">
      <div className="relative w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 ml-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome Back to <span className="text-teal-400">LearnIT</span>
          </h1>
          <p className="text-gray-400 mb-6">
          Welcome back! Sign in to find your next project.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6"> 
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormLabel className="text-gray-300">Email/Username</FormLabel>
                    {!identifierFocus && !field.value && (
                      <FaUser className="absolute left-3 bottom-1 transform -translate-y-1/2 text-gray-500" />
                    )}
                    <Input 
                      {...field} 
                      className="w-full pl-10 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-500 hover:shadow-lg"
                      style={{ borderRadius: '8px' }}
                      onFocus={() => setIdentifierFocus(true)}
                      onBlur={() => setIdentifierFocus(false)}
                    />
                  </div>
                  <FormMessage />
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
                    {!passwordFocus && !field.value && (
                      <FaLock className="absolute left-3 bottom-1 transform -translate-y-1/2 text-gray-500" />
                    )}
                    <Input 
                      type="password" 
                      {...field} 
                      className="w-full pl-10 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-500 hover:shadow-lg"
                      style={{ borderRadius: '8px' }}
                      onFocus={() => setPasswordFocus(true)}
                      onBlur={() => setPasswordFocus(false)}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold shadow-xl transform transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
              type="submit"
              style={{ borderRadius: '8px' }}
            >
              Sign In
            </Button>
          </form>
        </Form>
        <div className="text-center mt-6">
          <p className="text-gray-400">
            Not a member yet?{' '}
            <Link href="sign-up" className="text-teal-400">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className='w-full h-full hidden lg:block'>
        <TagModel />
      </div>
    </div>
  );
}
