import Link from "next/link";

import { Topic } from "~/data/questions/topic";
import { useTranslation } from "~/i18n/hooks/use-translation";

interface Author {
  username: string;
  name: string;
}

const TopicButton = ({ topic }: { topic: Topic }) => {
  const translation = useTranslation();
  const topicUrl = `/singleplayer/${topic}`;
  return (
    <Link href={topicUrl}>
      <button className="w-full p-3 mt-3 duration-150 bg-blue-700 hover:bg-blue-900 rounded-3xl">
        <span className="text-2xl text-white">{translation.topics[topic]}</span>
      </button>
    </Link>
  );
};

function Authors({ authors }: { authors: Author[] }) {
  return (
    <div className="flex flex-row justify-center">
      {authors.map((author) => (
        <Link key={author.username} href={`https://github.com/${author.username}`}>
          {author.name}
        </Link>
      ))}
    </div>
  );
}

export default function App({ authors }: { authors: Author[] }) {
  const translation = useTranslation();
  console.log(authors);

  // Array of available topics
  const topics: Topic[] = ["computerArchitecture", "operatingSystems"];

  return (
    <section className="bg-white">
      <section className="flex items-center min-h-screen mx-auto via-green-900 from-black to-black">
        <div className="items-center max-w-md mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-center">{translation.home.welcome}</h1>
            <h2 className="text-2xl text-justify">{translation.home.welcomeMessage}</h2>
          </div>
          {topics.map((topic) => (
            <TopicButton key={topic} topic={topic} />
          ))}
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
        <Authors authors={authors} />
      </footer>
    </section>
  );
}

export async function getStaticProps() {
  async function getNameFromGithub(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = (await response.json()) as { name: string };
    return { username, name: data.name };
  }

  const authors = await Promise.all(["lucasvoltera", "becelli"].map(getNameFromGithub));

  return {
    props: {
      authors,
    },
  };
}
