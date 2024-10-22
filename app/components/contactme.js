import { Children } from "react";

export default function ContactMe(
    {children}
) {
  return (
    <a className="bg-gradient-to-br from-scampi-900 to-scampi-700 w-full px-7 py-2 rounded-full text-white font-bold text-xl md:text-2xl" href="#about">
        {children}
    </a>
  );
}
