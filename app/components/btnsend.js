import { Children } from "react";

export default function BtnSend(
    {children}
) {
  return (
    <a className="bg-gradient-to-br from-scampi-700 to-scampi-500 w-full px-5 py-2 rounded-full text-white font-bold" href="#about">
        {children}
    </a>
  );
}
