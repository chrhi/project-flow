import React from 'react'

function Hero() {
  return (
    <div className="mx-auto mb-10 mt-20 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
    <a
      href="https://dub.sh/launch"
      target="_blank"
      rel="noreferrer"
      className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
    >
      {/* <Twitter className="h-5 w-5 text-[#1d9bf0]" /> */}
      <p className="text-sm font-semibold text-[#1d9bf0]">
        Introducing Dub.sh
      </p>
    </a>

    <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl sm:leading-[1.15]">
      Project Managment R&D with
      <br />
      <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
        Superpowers
      </span>
    </h1>
    <h2 className="mt-5 text-gray-600 sm:text-lg">
     project managment platform that implememnts the methode of pmbok and provide pre build templates for butter performence .
    </h2>

    <div className="mx-auto mt-10 flex max-w-fit space-x-4">
      <a
        href="https://app.dub.sh/register"
        className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
      >
        Start For Free
      </a>
      <a
        className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
        href="https://dub.sh/github"
        target="_blank"
        rel="noreferrer"
      >
        {/* <Github className="h-5 w-5 text-black" /> */}
        <p className="text-sm">Star on GitHub</p>
      </a>
    </div>
  </div>
  )
}

export default Hero