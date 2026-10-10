import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/site";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "secondary" | "whatsapp" | "nav";
  className?: string;
  children: React.ReactNode;
}

export function WhatsAppButton({
  message,
  variant = "whatsapp",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);
  const baseClass =
    variant === "nav"
      ? "inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1da851]"
      : variant === "primary"
        ? "btn-primary"
        : variant === "secondary"
          ? "btn-secondary"
          : "btn-whatsapp";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${baseClass} ${className}`}>
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

export function WhatsAppLink({ message, children }: { message?: string; children: React.ReactNode }) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-600 hover:text-brand-700 font-medium underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

export function StickyWhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:hidden"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#1da851]"></span>
      </span>
    </a>
  );
}
