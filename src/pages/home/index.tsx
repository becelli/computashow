import Link from "next/link";
import React from "react";

import { useTranslation } from "~/i18n/hooks/use-translation";

export default function Home(): React.ReactElement {
  const translation = useTranslation();
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
          {/* switch the question theme: os, computer architecture... etc */}

          <Link href="/singleplayer">
            <button className="w-full p-5 mt-3 duration-150 bg-red-700 hover:bg-red-900 rounded-3xl">
              <span className="text-2xl font-bold text-white">{translation.home.singlePlayer}</span>
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}
