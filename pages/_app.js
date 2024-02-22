import "../styles/globals.css";
import Script from "next/script";
// import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "src/redux/store";
// import Layout from "src/Layout";

// export default function App({ Component, pageProps }) {
//   const persistor = persistStore(store, {}, function () {
//     persistor.persist();
//   });

//   return (
//     <Layout {...pageProps}>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           {() => <Component {...pageProps} />}
//         </PersistGate>
//       </Provider>
//     </Layout>
//   );
// }

import "../styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "src/Layout";
import { wrapper } from "src/redux/store";

function App({ Component, pageProps }) {
  const store = useStore();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, refetchOnMount: false },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <PersistGate
            persistor={store.__persistor}
            loading={<h1>Loading...</h1>}
          >
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Hydrate>
      </QueryClientProvider>

      <Script
        src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
        strategy="beforeInteractive"
      />
    </>
  );
}

export default wrapper.withRedux(App);
