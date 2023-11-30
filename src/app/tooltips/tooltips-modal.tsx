import { useEffect, useRef } from "react";

import { useTranslation } from "~/i18n/hooks/use-translation";

interface TooltipsModalProps {
  openModal: boolean;
  closeModal: () => void;
}

export default function TooltipsModal({ openModal, closeModal }: TooltipsModalProps) {
  const translation = useTranslation();
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (openModal) {
      return ref.current?.showModal();
    }
    ref.current?.close();
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="relative w-full max-w-6xl p-4 mx-4 rounded-lg bg-surface0">
          <div className="flex flex-col items-center justify-center w-full h-full space-y-5">
            <h1 className="text-3xl font-bold text-center text-white">{translation.tooltips.title}</h1>
            <div className="flex flex-col items-start justify-center w-full h-full space-y-3 ">
              <div className="flex flex-col items-start w-full p-4 space-y-3 overflow-y-auto rounded-lg h-96">
                {translation.tooltips.tips.map((tooltip, index) => (
                  <div key={index} className="w-full h-full text-white">
                    <span className="text-xl font-bold text-white">
                      {index}. {tooltip.title}:
                    </span>
                    <span className="text-xl text-justify text-white"> {tooltip.description}</span>
                    <div className="w-full h-0.5 my-2 bg-surface1" />
                  </div>
                ))}
              </div>
              <button className="w-full p-3 text-xl text-center text-black rounded-md bg-blue" onClick={() => closeModal()}>
                {translation.tooltips.close}
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
