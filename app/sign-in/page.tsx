import { SignIn } from "@stackframe/stack";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-md w-full space-y-8 border p-8 bg-white rounded-lg shadow-lg">
        <SignIn />
        <Link href="/">Go Back Home</Link>
      </div>
    </div>
  );
};

export default SignInPage;
