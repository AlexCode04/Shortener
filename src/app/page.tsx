"use client";

import { useState, useRef } from "react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import Image from 'next/image';

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortUrl, setShortUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const url = inputRef.current?.value;

    fetch("/api/shortUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShortUrl(data.shortUrl);
        setMessage("");
        setCopied(false);
      })
      .catch(() => {
        setMessage("Ocurrió un error al acortar la URL, intenta de nuevo");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCopy = () => {
    const fullUrl = `${window.location.origin}/${shortUrl}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-12">
      <h1 className="text-6xl font-bold text-center py-6 text-secundario mt-16 md:mt-0 md:py-2 md:mb-6 animate-pulse hover:text-terciario transition-all duration-300 ">Shorter link</h1>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <form
            onSubmit={handleOnSubmit}
            className="p-4 w-11/12 h-36 items-center justify-center shadow-sm rounded-md flex flex-col space-y-4"
          >
            <label className="text-bold text-xl py-6 md:py-4">Ingresa el link que deseas acortar</label>
            <input
              type="text"
              ref={inputRef}
              name="url"
              placeholder="URL"
              className="border-2 ml-2 py-2 rounded-md bg-gray-500 text-center text-white border-gray-400 w-10/12 shadow-md shadow-black"
            />
            <button
              type="submit"
              className="border-gray-600 bg-secundario text-white shadow-md shadow-black border-2 px-6 py-2 rounded-md hover:bg-terciario hover:text-white hover:px-6 transition-all duration-300 ease-in-out"
            >
              Acortar
            </button>
            {shortUrl && (
              <div className="flex flex-col items-center space-y-2 md:pb-10">
                <span className="border-2 ml-2 rounded-sm border-gray-500 truncate bg-gray-600 shadow-black w-auto shadow-md text-start text-white p-2">
                  {`https://shorter-ac.vercel.app/${shortUrl}`}</span>
                  <button
                  type="button"
                  onClick={handleCopy}
                  className="bg-gray-700 ml-4 text-white px-4 py-2 rounded-md  hover:bg-gray-800 transition duration-200"
                >
                  <span>
                    <Image src="/copiar-alt.svg" alt="Copy" width={20} height={20} />
                  </span>
                </button>
              
                {copied && (
                  <span className="text-secundario text-center text-lg">
                    Copiado!
                    </span>
                    )}
              </div>
            )}
          </form>
        )}
        {message && (
          <div className="text-secundario text-center text-lg">
            {message}
          </div>
        )}
      </div>
    </>
  );
}
