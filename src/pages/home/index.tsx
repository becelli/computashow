import Link from "next/link";
import React from "react";
import { useTranslation } from "~/i18n/hooks/use-translation";

export interface HomeProps {
  setGameStarted: (gameStarted: boolean) => void;
}

export default function Home({ setGameStarted }: HomeProps): React.ReactElement {
  const translation = useTranslation();
  return (
    <section className="bg-center bg-cover bg-game-background">
      <section className="flex items-center h-screen mx-auto bg-black bg-opacity-75">
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
          <button onClick={() => setGameStarted(true)} className="w-full p-5 mt-3 duration-150 bg-red-700 hover:bg-red-900 rounded-3xl">
            <span className="text-2xl font-bold text-white">{translation.home.startButton}</span>
          </button>
        </div>
      </section>
    </section>
  );
}