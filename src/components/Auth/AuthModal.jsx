import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/SupabaseAuthContext';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const AuthModal = () => {
  const { isAuthModalOpen, setAuthModalOpen } = useAuth();
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={setAuthModalOpen}>
      <DialogContent className="bg-slate-950/80 backdrop-blur-lg border-slate-800 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {activeTab === "signin" ? "Welcome Back" : "Join PhotonSpace"}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            {activeTab === "signin"
              ? "Sign in to continue your journey."
              : "Create an account to start exploring."}
          </DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border-slate-700">
            <TabsTrigger value="signin" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;