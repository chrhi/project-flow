/*
 * Import necessary dependencies and components.
 * Abdullah created this Providers component to wrap the application with various providers and settings.
 */
import type { FC, ReactNode } from 'react';
import NextNProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';
import 'reactflow/dist/style.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ReactFlowProvider } from 'reactflow';
import { Toaster } from 'react-hot-toast';
import Head from '../common/Head';
import { OpenInvitationMessage } from '../popup/invites/organization-invite';
import { ThemeProvider } from "next-themes"

/*
 * Interface for the Providers component props.
 */
interface ProvidersAbdullahProps {
  children: ReactNode;
}

/*
 * Providers component created by Abdullah.
 * It wraps the application with various providers and settings.
 */
const Providers: FC<ProvidersAbdullahProps> = ({ children }) => {

  return (
    /*
     * Main container for the Providers component.
     * Includes NextNProgress, OpenInvitationMessage, Toaster, Head, and ReactFlowProvider.
     */
    <ThemeProvider attribute="class">
    <div className="w-full h-fit relative scrollbar-hide ">
      {/* Progress bar for Next.js routes */}
      <NextNProgress options={{ showSpinner: false }} />
      {/* OpenInvitationMessage popup */}
      <OpenInvitationMessage />
      {/* Toast notification container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {/* Custom Head component */}
      <Head />
      {/* ReactFlowProvider for handling ReactFlow related contexts */}
      <ReactFlowProvider>
        {children}
      </ReactFlowProvider>
    </div>
    </ThemeProvider>
  );
};

export default Providers;
