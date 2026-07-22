import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? "me";

  return {
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});