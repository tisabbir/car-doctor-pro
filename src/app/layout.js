import AuthProvider from "@/services/AuthProvider";

// app/layout.js (root, minimal)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider> 
        {/* Keep authProvider inside the body to avoid unwanted error */}
      </body>
    </html>
  );
}
