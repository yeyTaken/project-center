"use client";

import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-6">
        {t("description")}
      </p>

      <Link
        href="https://github.com/yeytaken/project-center/tree/main/monorepo-base/apps/next-base"
        target="_blank"
        className="flex items-center gap-2 
             bg-white text-black 
             dark:bg-black dark:text-white 
             px-5 py-3 rounded-xl text-base font-medium 
             hover:opacity-80 transition"
      >
        <FaGithub size={20} />
        {t("buttonGithub")}
      </Link>
    </main>
  );
}
