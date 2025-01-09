"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function RedirectWithDelay() {
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { shortId } = useParams();

  useEffect(() => {
    if (!shortId) {
      setError("Short URL is required.");
      return;
    }
    const fetchRedirectUrl = async () => {
      try {
        const response = await fetch(`/api/${shortId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch the redirect URL.");
        }
        const data = await response.json();
        setRedirectUrl(data.url);
      } catch (err) {
        setError("Unable to fetch redirect URL.");
        console.error(err);
      }
    };

    fetchRedirectUrl();
  }, [shortId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
    if (redirectUrl) {
      router.push(redirectUrl);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-primario text-white">
        <h1 className="text-4xl font-bold mb-12 text-center">
          {error
            ? "Error: Unable to redirect."
            : "Presiona el botón para redirigirte al sitio."}
        </h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="relative w-24 h-24">
              <div
                className={`w-24 h-24 border-4 border-secundario border-dashed rounded-full text-center text-bold text-3xl flex items-center justify-center ${
                  secondsLeft > 0 ? "animate-bounce" : ""
                }`}
              >
                {secondsLeft}
              </div>
            </div>
            <button
              onClick={handleRedirect}
              disabled={secondsLeft > 0 || !redirectUrl}
              className={`mt-8 px-6 py-2 rounded-md text-white font-medium transition-all ${
                secondsLeft > 0 || !redirectUrl
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-secundario hover:bg-terciario"
              }`}
            >
              Continue
            </button>
          </>
        )}
      </div>
    </>
  );
}
