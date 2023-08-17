interface TryAgainButtonProps {
  tryAgain: () => void;
}

export function TryAgainButton({ tryAgain }: TryAgainButtonProps) {
  return (
    <div className="mt-5 text-center">
      <button className="px-5 py-2 bg-blue-300 rounded-lg" onClick={tryAgain}>
        Jogar novamente
      </button>
    </div>
  );
}
