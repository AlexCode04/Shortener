"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-primario md:mt-8 text-white px-4">
        <h1 className="text-4xl font-bold mb-6 text-center py-6 text-secundario mt-16 md:mt-0 md:py-2 md:mb-6 animate-pulse hover:text-terciario transition-all duration-300 ">Acerca de este Proyecto</h1>
        <p className="text-lg text-center mb-4 max-w-3xl">
          Bienvenido a nuestro acortador de URLs. Este proyecto fue creado para ofrecer una solución
          rápida, sencilla y eficiente para reducir enlaces largos a URLs cortas y manejables. Ideal para compartir en redes sociales, 
          emails o cualquier otro medio donde la brevedad sea importante.
        </p>
        <p className="text-lg text-center mb-8 max-w-3xl">
          Nuestro sistema no solo genera URLs únicas, sino que también garantiza que si ya existe un enlace en nuestro
          sistema, se reutilice la misma URL corta para optimizar recursos. Creemos en la simplicidad y la eficiencia, y 
          este proyecto refleja esos valores.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-center text-lg">
          Puedes ponerte en contacto conmigo a través de los siguientes medios:
        </p>
        <ul className="mt-6 space-y-4 text-center ">
          <li>
            <a
              href="mailto:angelrap.2222@gmail.com"
              className="flex items-center justify-center space-x-2 bg-terciario p-2 rounded-md shadow-lg hover:bg-secundario hover:-translate-y-1 transition-all duration-300"
            >
              <Image 
                src="/sobre.svg"
                alt="Email"
                width={20}
                height={20}
                className="mr-2"
            />
            angelrap.2222@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AlexCode04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-terciario p-2 rounded-md shadow-lg hover:bg-secundario hover:-translate-y-1 transition-all duration-300"

            >
                <Image 
                src="/github.svg"
                alt="Email"
                width={20}
                height={20}
                className="mr-2 flex items-start"
            />
              GitHub: AlexCode04
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/angel-alexis-del-castillo-lerma-a49b67268/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 md: mb-6 bg-terciario p-2 rounded-md shadow-lg hover:bg-secundario hover:-translate-y-1 transition-all duration-300"

            >
                <Image 
                src="/linkedin.svg"
                alt="Email"
                width={20}
                height={20}
                className="mr-2"
            />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
