"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Skeleton
} from "@heroui/react";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const flagIcons: Record<string, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
};

export default function LocaleSwitcher() {
  const t = useTranslations("lib.i18n.localeSwitcher");

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 🔹 Skeleton enquanto carrega
  if (!mounted) {
    return (
      <Skeleton
        isLoaded={false}
        className="rounded-full w-10 h-10 bg-foreground/10 dark:bg-foreground/20"
      />
    );
  }

  function handlerSelectLocale(newLocale: (typeof routing.locales)[number]) {
    const query = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );

    router.replace({ pathname, query }, { locale: newLocale });
  }

  const iconVariants = {
    initial: { rotate: -90, opacity: 0, scale: 0.8 },
    animate: { rotate: 0, opacity: 1, scale: 1 },
    exit: { rotate: 90, opacity: 0, scale: 0.8 },
    transition: { stiffness: 250, damping: 15 },
  };

  const currentIcon = flagIcons[locale] ?? locale.toUpperCase();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          isIconOnly
          radius="full"
          variant="light"
          className="min-w-0 h-auto p-2 hover:bg-foreground/10 transition rounded-full"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={locale}
              initial={iconVariants.initial}
              animate={iconVariants.animate}
              exit={iconVariants.exit}
              transition={iconVariants.transition}
              className="text-xl"
            >
              {currentIcon}
            </motion.span>
          </AnimatePresence>
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label={t("ariaLabel")}
        onAction={(key) => handlerSelectLocale(String(key) as any)}
      >
        {routing.locales.map((loc) => (
          <DropdownItem
            key={loc}
            startContent={<span className="text-lg">{flagIcons[loc]}</span>}
          >
            {t(`languages.${loc}`)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
