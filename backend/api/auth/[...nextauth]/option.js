// import { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import bcrypt from 'bcryptjs';
// // import dbConnect from '@/lib/dbConnect';
// import UserModel from '../../../model/user';
// import dbConnect from '../../../lib/dbConnect';
// // import UserModel from '@/model/user';

// export const authOptions= {
//   providers: [
//     CredentialsProvider({
//       id: 'credentials',
//       name: 'Credentials',
//       credentials: {
//         identifier: { label: 'Email or Username', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials){
//         await dbConnect();

//         try {
//           // Find user by email or username
//           const user = await UserModel.findOne({
//             $or: [
//               { email: credentials.identifier },
//               { username: credentials.identifier },
//             ],
//           });

//           if (!user) {
//             throw new Error('No user found with this email or username.');
//           }

//           if (!user.isVerified) {
//             throw new Error('Please verify your account before logging in.');
//           }

//           // Compare the provided password with the stored hash
//           const isPasswordCorrect = await bcrypt.compare(
//             credentials.password,
//             user.password
//           );

//           if (!isPasswordCorrect) {
//             throw new Error('Incorrect password.');
//           }

//           return user;
//         } catch (err) {
//           console.error('Error during authorization:', err.message);
//           throw new Error('Login failed. Please check your credentials.');
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {

//               token.id = user.id.toString(); // Convert ObjectId to string
//         token.username = user.username;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//         session.user.username = token.username;
//       }
      
//     },
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/employee/auth/sign-in',
//   },
// };

import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../lib/dbConnect';
import UserModel from '../../../model/user';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Email or Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect();

        try {
          // Find the user by email or username
          const user = await UserModel.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });

          if (!user) {
            throw new Error('No user found with this email or username.');
          }

          // Compare passwords
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) {
            throw new Error('Incorrect password.');
          }

          return user;
        } catch (err) {
          console.error('Error during authorization:', err.message);
          throw new Error('Login failed. Please check your credentials.');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id.toString();
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/employee/auth/sign-in',
  },
};
