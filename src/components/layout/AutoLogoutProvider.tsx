import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {  useSession, signOut } from 'next-auth/react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Only enforce the automatic logout behavior for pages starting with "/app"
    if (router.pathname.startsWith('/app')) {
      const checkSessionExpiry = () => {
        // If the session status is 'authenticated' and the session is not null
        if (status === 'authenticated' && session) {
          const currentTime = Date.now() / 1000;
          const sessionExpiry = new Date(session.expires).getTime() / 1000;

          // Check if the session has expired
          if (sessionExpiry < currentTime) {
            // Session expired, log the user out
            signOut();
          } else {
            // Schedule the next check before the session expires (e.g., 1 minute before)
            const timeUntilExpiry = (sessionExpiry - currentTime - 60) * 1000;
            setTimeout(checkSessionExpiry, timeUntilExpiry);
          }
        }
      };

      checkSessionExpiry();
    }
  }, [status, session, router.pathname]);

  return <>{children}</>;
};

export default AuthWrapper;
