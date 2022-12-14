import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"
import { useScrollLock } from "../hooks/useScrollLock"
import { tools } from "~/tools"
import { Sponsors } from "./Sponsors"

const APP_VERSION = process.env.COMMIT_SHA
  ? `${process.env.PKG_VERSION}-${process.env.COMMIT_SHA.slice(0, 6)}`
  : `${process.env.PKG_VERSION}-dev`
const COMMIT_LINK = process.env.COMMIT_SHA
  ? `https://github.com/egoist/tooling.one/commit/${process.env.COMMIT_SHA}`
  : "#"

const footLinks = [
  {
    text: APP_VERSION,
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
        ></path>
      </svg>
    ),
    href: COMMIT_LINK,
  },
  {
    text: "@_egoistlily",
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
        ></path>
      </svg>
    ),
    href: "https://twitter.com/_egoistlily",
  },
]

export const Sidebar = () => {
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false)

  useScrollLock(showSidebar)

  return (
    <div className="md:block md:w-72 bg-gray-100 border-r md:fixed left-0 top-0 bottom-0 overflow-auto">
      <header className="px-5 h-12 fixed w-full left-0 top-0 items-center justify-between flex md:relative md:px-3 backdrop-blur-lg border-b">
        <div className="flex items-center h-full">
          <h1 className="text-xl font-medium">
            <Link href="/">
              <a className="flex space-x-2 items-center px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <linearGradient
                    id="logo-fill"
                    gradientUnits="userSpaceOnUse"
                    x1="-34.107"
                    y1="644.988"
                    x2="-34.107"
                    y2="620.713"
                    gradientTransform="matrix(20.48 0 0 -20.48 954.52 13224.2)"
                  >
                    <stop offset="0" stopColor="#ff5d3b" />
                    <stop offset="1" stopColor="#ff2d67" />
                  </linearGradient>
                  <path
                    d="M366.49 241.807l-143.36 184.32a10.251 10.251 0 01-8.09 3.953c-1.577 0-3.154-.369-4.628-1.106-4.362-2.232-6.554-7.229-5.202-11.94l37.212-130.314H153.6a10.251 10.251 0 01-9.196-5.734 10.26 10.26 0 011.126-10.793l143.36-184.32c3.011-3.891 8.335-5.059 12.718-2.847a10.235 10.235 0 015.202 11.94L269.599 225.28H358.4c3.932 0 7.496 2.232 9.216 5.734a10.26 10.26 0 01-1.126 10.793M256 0C114.852 0 0 114.831 0 256c0 141.148 114.852 256 256 256 141.169 0 256-114.852 256-256C512 114.831 397.169 0 256 0"
                    fill="url(#logo-fill)"
                  />
                </svg>
                <span>The Toolbox</span>
              </a>
            </Link>
          </h1>
        </div>
        <button
          type="button"
          role="menu"
          className="md:hidden block h-full"
          onClick={() => setShowSidebar((show) => !show)}
        >
          {showSidebar ? (
            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
              ></path>
            </svg>
          ) : (
            <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              ></path>
            </svg>
          )}
        </button>
      </header>
      <div
        className={clsx(
          `fixed z-10 md:relative md:block backdrop-blur-lg top-12 bottom-0 left-0 w-full border-r md:top-0 md:border-r-0`,
          showSidebar ? `overflow-auto` : `hidden`
        )}
      >
        <div className="p-3">
          {tools.map((tool) => {
            const isActive = router.asPath === tool.link
            return (
              <Link href={tool.link} key={tool.link}>
                <a
                  className={clsx(
                    `px-4 py-1 rounded-lg flex`,
                    isActive && `bg-light-blue text-white`
                  )}
                >
                  {tool.name}
                </a>
              </Link>
            )
          })}
        </div>
        
      </div>
    </div>
  )
}
