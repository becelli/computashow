import Link from "next/link";
import React from "react";

import { Topic } from "~/data/questions/topic";
import { useTranslation } from "~/i18n/hooks/use-translation";

// Sub-component for Topic Button
const TopicButton = ({ topic }: { topic: Topic }) => {
  const translation = useTranslation();
  const topicUrl = `/singleplayer/${topic}`;
  return (
    <Link href={topicUrl}>
      <button className="w-full p-5 mt-3 duration-150 bg-blue-700 hover:bg-blue-900 rounded-3xl">
        <span className="text-2xl font-bold text-white">{translation.topics[topic]}</span>
      </button>
    </Link>
  );
};

export default function Home(): React.ReactElement {
  const translation = useTranslation();

  // Array of available topics
  const topics: Topic[] = ["computerArchitecture", "operatingSystems"];

  return (
    <section className="bg-white">
      <section className="flex items-center min-h-screen mx-auto via-green-900 from-black to-black">
        <div className="items-center max-w-xs mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-center">{translation.home.welcomeMessage}</h1>
            <p className="text-xl text-justify">
              {translation.home.projectDevelopedBy}
              <Link target="_blank" href="https://github.com/lucasvoltera" className="underline">
                Lucas Voltera
              </Link>
              {" e "}
              <Link target="_blank" href="https://github.com/becelli" className="underline">
                Gustavo Becelli
              </Link>
              {translation.home.forTheDisciplineOfFPGA}
            </p>
          </div>
          {/* Dynamically generate topic buttons */}
          {topics.map((topic) => (
            <TopicButton key={topic} topic={topic} />
          ))}
        </div>
      </section>
    </section>
  );
}
