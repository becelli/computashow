import React from "react";
import { UnclosableModalProps } from "~/components/unclosable-modal/types";

export function UnclosableModal({ showModal, title, children }: UnclosableModalProps) {
  if (!showModal) {
    return <></>;
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-4 bg-black bg-opacity-50 md:p-0">
      <div className="relative z-50 w-full max-w-2xl px-6 py-3 mx-auto bg-white rounded-md shadow-lg">
        <h1 className="mb-3 text-2xl font-semibold text-gray-800">{title}</h1>
        <div className="w-full h-px mb-3 bg-gray-300"></div>
        {children}
      </div>
    </section>
  );
}
