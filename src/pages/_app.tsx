/*
 * Import necessary dependencies and components.
 * Abdullah created this MyApp component to wrap the entire application and provide session data and providers.
 * Email: mahdi.chahri55@gmail.com
 */
import { type AppType } from 'next/app';
import Providers from '~/components/layout/Providers';
import { api } from '~/utils/api';
import '~/styles/globals.css';
import '~/styles/editor.css';
import { SessionProvider } from "next-auth/react";
import { storeOrgName, storeOrganizationId } from '~/lib/data-in-cookies';
import 'react-clock/dist/Clock.css';

/*
 * MyApp component created by Abdullah to wrap the entire application.
 * It provides session data and essential providers to the app.
 * Email: mahdi.chahri55@gmail.com
 */
const MyApp: AppType = ({
  Component,
  //@ts-ignore
  pageProps: { session, ...pageProps },
}) => {

  // Query to get the user's selected organization and store its details in cookies
  api.organizationRouter.getUserSelectedOrg.useQuery(undefined, {
    onSuccess: (data) => {
      if (!data || !data.id || !data.name) {
        return;
      }
      storeOrgName({ org_name: data.name });
      storeOrganizationId({ org_id: data?.id });
    }
  });

  return (
    /*
     * Main container for the entire app.
     * Includes SessionProvider and custom Providers component.
     */
    <SessionProvider session={session}>
      <Providers>
        {/* Render the current page component */}
        <Component {...pageProps} />
      </Providers>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

