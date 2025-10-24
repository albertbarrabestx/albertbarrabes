export const SITE = {
  website: "https://github.com/albertbarrabestx", // replace this with your deployed domain
  author: "Albert Barrabés",
  profile: "albertbarrabes.com",
  desc: "Desarrollo web y blog personal de Albert Barrabés",
  title: "lacarena.dev | Albert Barrabés",
  ogImage: "albertbarrabes.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Editar página",
    url: "https://github.com/albertbarrabestx",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "es", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Andorra", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
