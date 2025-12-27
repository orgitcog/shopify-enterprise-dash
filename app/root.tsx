import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from '../src/components/Layout';
import './styles/tailwind.css';
import { TestModeProvider } from '../src/context/TestModeContext';

const queryClient = new QueryClient();

export function meta() {
  return [
    { title: "Shopify Enterprise Dashboard" },
    { charset: "utf-8" },
    { viewport: "width=device-width,initial-scale=1" }
  ];
}

export function links() {
  return [
    { rel: "icon", href: "/favicon.ico" }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <AppProvider i18n={enTranslations}>
            <TestModeProvider>
              <Layout>
                <Outlet />
              </Layout>
            </TestModeProvider>
          </AppProvider>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}