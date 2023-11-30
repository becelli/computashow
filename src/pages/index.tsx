import Link from "next/link";
import { useState } from "react";

import TooltipsModal from "~/app/tooltips/tooltips-modal";
import { Topic, useQuestionTopicColor } from "~/data/questions/topic";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface Author {
  username: string;
  name: string;
}

const TopicButton = ({ topic }: { topic: Topic }) => {
  const translation = useTranslation();
  const topicUrl = `/singleplayer/${topic}`;
  const bgColor = useQuestionTopicColor("bg", topic);

  return (
    <Link href={topicUrl}>
      <button className={`w-full p-3 transition duration-300 ease-in rounded-sm ${bgColor} hover:scale-105 text-text`}>
        <span className="text-xl text-surface0">{translation.topics[topic].name}</span>
      </button>
    </Link>
  );
};

export default function App({ authors }: { authors: Author[] }) {
  const translation = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="px-4 bg-base text-text md:px-4">
      <TooltipsModal closeModal={() => setShowTooltip(false)} openModal={showTooltip} />

      <section className="flex items-center min-h-screen mx-auto via-green-900 from-black to-black">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-text">{translation.home.welcome}</h1>
          <h2 className="mb-8 text-xl text-text">{translation.home.welcomeMessage}</h2>
          <div className="space-y-3">
            {Object.values(Topic).map((topic) => (
              <TopicButton key={topic} topic={topic} />
            ))}
          </div>
          <button className="text-2xl" onClick={() => setShowTooltip(true)}>
            ❔
          </button>
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center w-full h-24">
        <div className="flex justify-around w-full h-1 gap-3">
          <div className="w-1/6 h-full bg-blue" />
          <div className="w-1/6 h-full bg-mauve" />
          <div className="w-1/6 h-full bg-red" />
          <div className="w-1/6 h-full bg-yellow" />
          <div className="w-1/6 h-full bg-green" />
          <div className="w-1/6 h-full bg-peach" />
        </div>

        <Authors authors={authors} />
      </footer>
    </section>
  );
}

function Authors({ authors }: { authors: Author[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {authors.map((author) => (
        <Link key={author.username} href={`https://github.com/${author.username}`} className="flex flex-col items-center">
          <img src={`https://github.com/${author.username}.png`} className="w-8 h-8 rounded-full" />
          <span className="text-text hover:underline">{author.name}</span>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  async function getNameFromGithub(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = (await response.json()) as { name: string };
    if (!data.name) throw new Error("No name found");
    return { username, name: data.name };
  }

  try {
    const authors = await Promise.all(["lucasvoltera", "becelli"].map(getNameFromGithub));
    return {
      props: {
        authors,
      },
      revalidate: 60 * 60 * 24,
    };
  } catch (e) {
    return {
      props: {
        authors: [
          { username: "lucasvoltera", name: "Lucas Voltera" },
          { username: "becelli", name: "Gustavo Becelli" },
        ],
      },
    };
  }
}
