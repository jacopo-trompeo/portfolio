import { ActivityIcon } from "@/components/icons/ActivityIcon";
import { BookOpenIcon } from "@/components/icons/BookOpenIcon";
import { TranslateIcon } from "@/components/icons/TranslateIcon";
import type { Hobby } from "@/types";

export const hobbies: Hobby[] = [
  {
    title: "Sports",
    description:
      "I like trying out new sports to see what they're about. Currently working on my golf game, before that it was bouldering. Always happy to be a beginner at something.",
    icon: ActivityIcon,
  },
  {
    title: "Language Learning",
    description:
      "Currently learning Japanese. I enjoy the process of picking up a new language: the structure, the patterns, and what it reveals about a different culture.",
    icon: TranslateIcon,
  },
  {
    title: "Reading",
    description:
      "I read a lot, mostly fantasy, sci-fi, and the occasional thriller or murder mystery. I always have something to read on the go.",
    icon: BookOpenIcon,
  },
];
