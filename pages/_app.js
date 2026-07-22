// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
// pages/_app.js



import { useEffect, useState } from "react";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <NextIntlClientProvider
  locale={pageProps.locale || "me"}
  messages={pageProps.messages || {}}
>
      <div className="min-h-screen bg-black">
        <Component
          {...pageProps}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </div>
    </NextIntlClientProvider>
  );
}