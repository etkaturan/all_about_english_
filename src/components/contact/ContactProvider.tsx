"use client";

import { createContext, useContext, useState, useCallback } from "react";
import ContactModal from "@/components/contact/ContactModal";

type ContactContextType = {
  open: (message: string) => void;
};

const ContactContext = createContext<ContactContextType | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used inside <ContactProvider>");
  return ctx;
}

export default function ContactProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState<string | null>(null);

  const open = useCallback((msg: string) => setMessage(msg), []);
  const close = useCallback(() => setMessage(null), []);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <ContactModal message={message} onClose={close} />
    </ContactContext.Provider>
  );
}