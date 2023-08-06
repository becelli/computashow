import Link from "next/link";
import React from "react";

export interface HomeProps {
  setGameStarted: (gameStarted: boolean) => void;
}

export function Home({ setGameStarted }: HomeProps): React.ReactElement {
  return (
    <section className="bg-center bg-cover bg-game-background">
      <section className="flex items-center h-screen mx-auto bg-black bg-opacity-75">
        <div className="items-center max-w-xs mx-auto">
          <div>
            <h1 className="text-4xl font-bold text-center">Boas vindas ao Show do Milhão!</h1>
            <p className="text-xl text-justify">
              Este projeto foi desenvolvido por{" "}
              <Link target="_blank" href="https://github.com/lucasvoltera" className="underline">
                Lucas Voltera
              </Link>
              {" e "}
              <Link target="_blank" href="https://github.com/becelli" className="underline">
                Gustavo Becelli
              </Link>{" "}
              para a disciplina de FPGA.
            </p>
          </div>
          <button onClick={() => setGameStarted(true)} className="w-full p-5 mt-3 duration-150 bg-red-700 hover:bg-red-900 rounded-3xl">
            <span className="text-2xl font-bold text-white">Começar</span>
          </button>
        </div>
      </section>
    </section>
  );
}
