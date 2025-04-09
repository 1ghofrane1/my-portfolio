import "@/styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }) {
  <AuthProvider>
  return <Component {...pageProps} />;
  </AuthProvider>
}
