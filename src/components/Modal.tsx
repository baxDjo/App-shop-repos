// Modal.tsx — version Tailwind “vanilla”, fiable
import { type ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Box */}
      <div className="relative bg-white text-black dark:bg-neutral-900 dark:text-white w-full max-w-lg rounded-2xl shadow-2xl p-6 mx-4">
        {title && <h3 className="text-lg font-bold">{title}</h3>}
        <div className="py-4">{children ?? "Contenu du modal"}</div>
        <div className="mt-4 text-right">
          <button
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
