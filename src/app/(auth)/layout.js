import React from 'react';
import "../globals.css"
import AuthNavbar from '@/components/Shared/AuthNavbar';
export default function SignUpLayout({ children }) {
    return (
      <div>
        <AuthNavbar />
        {children}
      </div>
    );
  }