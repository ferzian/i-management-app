import React from "react";
import { getCurrentUser } from "@/lib/auth";
import Sidebar from "@/components/sidebar";
import { AccountSettings } from "@stackframe/stack";

const SettingsPage = async () => {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/settings" />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="">
              <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
              <p className="text-sm text-gray-500">
                Manage your account settings.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-screen">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <AccountSettings fullPage />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
