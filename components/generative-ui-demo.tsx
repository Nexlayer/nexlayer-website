"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Send } from "lucide-react"

// Custom SVG Logo Components
const AnthropicLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 257" className="h-10 w-10">
    <path
      fill="#D97757"
      d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"
    />
  </svg>
)

const LovableLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="h-10 w-10">
    <defs>
      <linearGradient id="lovable-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF3D3D" />
        <stop offset="50%" stopColor="#FFAA00" />
        <stop offset="100%" stopColor="#3D85FF" />
      </linearGradient>
    </defs>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="url(#lovable-gradient)"
    />
  </svg>
)

const CopilotLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 208" className="h-10 w-10">
    <path
      fill="#fff"
      d="M205.3 31.4c14 14.8 20 35.2 22.5 63.6 6.6 0 12.8 1.5 17 7.2l7.8 10.6c2.2 3 3.4 6.6 3.4 10.4v28.7a12 12 0 0 1-4.8 9.5C215.9 187.2 172.3 208 128 208c-49 0-98.2-28.3-123.2-46.6a12 12 0 0 1-4.8-9.5v-28.7c0-3.8 1.2-7.4 3.4-10.5l7.8-10.5c4.2-5.7 10.4-7.2 17-7.2 2.5-28.4 8.4-48.8 22.5-63.6C77.3 3.2 112.6 0 127.6 0h.4c14.7 0 50.4 2.9 77.3 31.4ZM128 78.7c-3 0-6.5.2-10.3.6a27.1 27.1 0 0 1-6 12.1 45 45 0 0 1-32 13c-6.8 0-13.9-1.5-19.7-5.2-5.5 1.9-10.8 4.5-11.2 11-.5 12.2-.6 24.5-.6 36.8 0 6.1 0 12.3-.2 18.5 0 3.6 2.2 6.9 5.5 8.4C79.9 185.9 105 192 128 192s48-6 74.5-18.1a9.4 9.4 0 0 0 5.5-8.4c.3-18.4 0-37-.8-55.3-.4-6.6-5.7-9.1-11.2-11-5.8 3.7-13 5.1-19.7 5.1a45 45 0 0 1-32-12.9 27.1 27.1 0 0 1-6-12.1c-3.4-.4-6.9-.5-10.3-.6Zm-27 44c5.8 0 10.5 4.6 10.5 10.4v19.2a10.4 10.4 0 0 1-20.8 0V133c0-5.8 4.6-10.4 10.4-10.4Zm53.4 0c5.8 0 10.4 4.6 10.4 10.4v19.2a10.4 10.4 0 0 1-20.8 0V133c0-5.8 4.7-10.4 10.4-10.4Zm-73-94.4c-11.2 1.1-20.6 4.8-25.4 10-10.4 11.3-8.2 40.1-2.2 46.2A31.2 31.2 0 0 0 75 91.7c6.8 0 19.6-1.5 30.1-12.2 4.7-4.5 7.5-15.7 7.2-27-.3-9.1-2.9-16.7-6.7-19.9-4.2-3.6-13.6-5.2-24.2-4.3Zm69 4.3c-3.8 3.2-6.4 10.8-6.7 19.9-.3 11.3 2.5 22.5 7.2 27a41.7 41.7 0 0 0 30 12.2c8.9 0 17-2.9 21.3-7.2 6-6.1 8.2-34.9-2.2-46.3-4.8-5-14.2-8.8-25.4-9.9-10.6-1-20 .7-24.2 4.3ZM128 56c-2.6 0-5.6.2-9 .5.4 1.7.5 3.7.7 5.7 0 1.5 0 3-.2 4.5 3.2-.3 6-.3 8.5-.3 2.6 0 5.3 0 8.5.3-.2-1.6-.2-3-.2-4.5.2-2 .3-4 .7-5.7-3.4-.3-6.4-.5-9-.5Z"
    />
  </svg>
)

const GeminiLogo = () => (
  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
    <defs>
      <linearGradient id="gemini-gradient" x1="0%" x2="68.73%" y1="100%" y2="30.395%">
        <stop offset="0%" stopColor="#1C7DFF"></stop>
        <stop offset="52.021%" stopColor="#1C69FF"></stop>
        <stop offset="100%" stopColor="#F0DCD6"></stop>
      </linearGradient>
    </defs>
    <path
      d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12"
      fill="url(#gemini-gradient)"
      fillRule="nonzero"
    ></path>
  </svg>
)

const ChatGPTLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 260" className="h-10 w-10">
    <path
      fill="#fff"
      d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
    />
  </svg>
)

const GrokLogo = () => (
  <svg width="24" height="24" viewBox="0 0 1024 1024" className="h-10 w-10">
    <path
      d="M395.479 633.828L735.91 381.105C752.599 368.715 776.454 373.548 784.406 392.792C826.26 494.285 807.561 616.253 724.288 699.996C641.016 783.739 525.151 802.104 419.247 760.277L303.556 814.143C469.49 928.202 670.987 899.995 796.901 773.282C896.776 672.843 927.708 535.937 898.785 412.476L899.047 412.739C857.105 231.37 909.358 158.874 1016.4 10.6326C1018.93 7.11771 1021.47 3.60279 1024 0L883.144 141.651V141.212L395.392 633.916"
      fill="white"
    />
    <path
      d="M325.226 695.251C206.128 580.84 226.662 403.776 328.285 301.668C403.431 226.097 526.549 195.254 634.026 240.596L749.454 186.994C728.657 171.88 702.007 155.623 671.424 144.2C533.19 86.9942 367.693 115.465 255.323 228.382C147.234 337.081 113.244 504.215 171.613 646.833C215.216 753.423 143.739 828.818 71.7385 904.916C46.2237 931.893 20.6216 958.87 0 987.429L325.139 695.339"
      fill="white"
    />
  </svg>
)

const BoltLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 45.65 160 68.7" className="h-10 w-10">
    <path
      fill="#ffffff"
      d="M75.61 106.195c-14.747 0-21.962-8.468-21.962-19.136s10.04-24.157 24.782-24.157c14.746 0 21.96 8.47 21.96 19.137 0 10.668-10.038 24.156-24.78 24.156Zm.624-13.488c5.02 0 8.473-4.707 8.473-9.727 0-5.02-2.512-6.273-6.902-6.273-4.395 0-8.473 4.703-8.473 9.723 0 5.02 2.512 6.277 6.902 6.277Zm39.844 12.547h-15.371l12.547-57.098h15.375l-12.55 56.785Zm0 0"
    />
    <path
      fillRule="evenodd"
      fill="#ffffff"
      d="M30.117 106.195c-4.707 0-9.41-1.566-11.922-5.332l-.941 4.39L0 114.353l1.883-9.098L14.43 48.156h15.375L25.41 68.234c3.453-3.765 6.902-5.332 11.297-5.332 9.41 0 15.371 5.961 15.371 17.254 0 11.293-7.215 26.04-21.96 26.04Zm5.961-22.902c0 5.336-3.766 9.414-8.785 9.414-5.02 0-5.332-.941-6.902-2.824l2.511-10.352c1.883-1.883 3.766-2.824 6.274-2.824 3.765 0 6.902 2.824 6.902 6.902Zm0 0"
    />
    <path
      fill="#ffffff"
      d="M144.629 106.195c-8.785 0-15.375-3.136-15.375-10.351 0-7.215 0-2.196.316-3.137l3.45-15.375h-6.903l3.137-13.176h6.902l2.512-11.293 17.254-7.215-1.883 7.215-2.508 11.293H160l-3.137 13.176h-8.472l-2.196 10.04v1.882c0 1.883 1.254 3.453 3.766 3.453 2.508 0 1.883 0 2.195-.316v12.238c-1.566 1.254-4.39 1.566-7.215 1.566Zm0 0"
    />
  </svg>
)

const CursorLogo = () => (
  <svg height="24" width="24" viewBox="0 0 24 24" className="h-10 w-10">
    <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#cursor-fill-0)"></path>
    <path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#cursor-fill-1)"></path>
    <path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#cursor-fill-2)"></path>
    <path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"></path>
    <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#ffff"></path>
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-fill-0" x1="11.925" x2="11.925" y1="12" y2="24">
        <stop offset=".16" stopColor="#ffff" stopOpacity=".39"></stop>
        <stop offset=".658" stopColor="#ffff" stopOpacity=".8"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-fill-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15">
        <stop offset=".182" stopColor="#ffff" stopOpacity=".31"></stop>
        <stop offset=".715" stopColor="#ffff" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-fill-2" x1="11.925" x2="1.5" y1="0" y2="18">
        <stop stopColor="#ffff" stopOpacity=".6"></stop>
        <stop offset=".667" stopColor="#ffff" stopOpacity=".22"></stop>
      </linearGradient>
    </defs>
  </svg>
)

const FigmaLogo = () => (
  <svg width="24" height="24" viewBox="0 0 54 80" className="h-10 w-10">
    <g clipPath="url(#figma-clip)">
      <path
        d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
        fill="#0ACF83"
      />
      <path
        d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
        fill="#A259FF"
      />
      <path
        d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
        fill="#F24E1E"
      />
      <path
        d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
        fill="#FF7262"
      />
      <path
        d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
        fill="#1ABCFE"
      />
    </g>
    <defs>
      <clipPath id="figma-clip">
        <rect width="53.3333" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const WindsurfLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 166 263" className="h-10 w-10">
    <g filter="url(#windsurf-a)">
      <path
        fill="#58E5BB"
        d="M42.086 128.474 28.427 90.089c-2.383-6.696 2.436-13.802 9.291-13.48 76.537 3.589 115.804 31.534 112.144 112.12-13.311-56.28-77.153-60.255-107.776-60.255Z"
      />
    </g>
    <g filter="url(#windsurf-b)">
      <path
        fill="#58E5BB"
        d="M21.453 57.833 7.236 20.639C4.662 13.908 9.478 6.6 16.44 6.683c78.163.938 132.738 6.243 132.738 110.722-13.311-56.28-97.101-59.572-127.725-59.572Z"
      />
    </g>
    <g filter="url(#windsurf-c)">
      <path
        fill="#58E5BB"
        d="m63.245 201.377-14.653-41.075c-2.376-6.661 2.376-13.751 9.196-13.388 62.444 3.327 93.677 30.587 90.06 110.239-13.311-56.28-53.76-55.776-84.604-55.776Z"
      />
    </g>
    <defs>
      <filter
        id="windsurf-a"
        width="122.286"
        height="116.131"
        x="27.81"
        y="76.598"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_15473_4390" />
      </filter>
      <filter
        id="windsurf-b"
        width="142.645"
        height="114.724"
        x="6.533"
        y="6.682"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_15473_4390" />
      </filter>
      <filter
        id="windsurf-c"
        width="100.158"
        height="114.252"
        x="47.972"
        y="146.9"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_15473_4390" />
      </filter>
    </defs>
  </svg>
)

const VercelLogo = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 16 16"
    className="h-10 w-10"
    xmlns="http://www.w3.org/2000/svg"
    strokeLinejoin="round"
  >
    <path
      clipRule="evenodd"
      d="M9.50321 5.5H13.2532C13.3123 5.5 13.3704 5.5041 13.4273 5.51203L9.51242 9.42692C9.50424 9.36912 9.5 9.31006 9.5 9.25L9.5 5.5L8 5.5L8 9.25C8 10.7688 9.23122 12 10.75 12H14.5V10.5L10.75 10.5C10.6899 10.5 10.6309 10.4958 10.5731 10.4876L14.4904 6.57028C14.4988 6.62897 14.5032 6.68897 14.5032 6.75V10.5H16.0032V6.75C16.0032 5.23122 14.772 4 13.2532 4H9.50321V5.5ZM0 5V5.00405L5.12525 11.5307C5.74119 12.3151 7.00106 11.8795 7.00106 10.8822V5H5.50106V9.58056L1.90404 5H0Z"
      fill="white"
      fillRule="evenodd"
    />
  </svg>
)

export default function AICodeEditorDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [typedText, setTypedText] = useState("")
  const fullPrompt = "Build me an AI app that builds arcade browser games"
  const [selectedPromptType, setSelectedPromptType] = useState("arcade")

  const startDemo = (skipTyping = false) => {
    setIsPlaying(true)
    setCurrentStep(0)

    if (skipTyping) {
      // Skip typing animation and just show the UI
      setTimeout(() => setCurrentStep(1), 500)
      // Add a timeout to reset the demo state after it completes
      setTimeout(() => setIsPlaying(false), 2000)
    } else {
      // Start typing animation
      setTypedText("")
    }
  }

  const startTypingPrompt = (promptText, promptType) => {
    // Reset any existing state
    setIsPlaying(false)
    setCurrentStep(0)
    setSelectedPromptType(promptType)
    setTypedText("")

    let i = 0
    const typing = setInterval(() => {
      if (i < promptText.length) {
        setTypedText(promptText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, 50)
  }

  useEffect(() => {
    if (isPlaying && currentStep === 0 && typedText === "") {
      let i = 0
      const typing = setInterval(() => {
        if (i < fullPrompt.length) {
          setTypedText(fullPrompt.substring(0, i + 1))
          i++
        } else {
          clearInterval(typing)
          setTimeout(() => {
            setCurrentStep(1)
            // Reset isPlaying after a delay to allow the user to see the result
            setTimeout(() => setIsPlaying(false), 1500)
          }, 500)
        }
      }, 50)
      return () => clearInterval(typing)
    }
  }, [isPlaying, currentStep, fullPrompt, typedText])

  return (
    <section className="relative">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-text">
          I built something cool with AI.
        </h2>
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            You can describe what you want. AI can generate the code.
          </p>

          {/* AI Tool Logos */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {/* v0 Logo */}
            <div className="flex flex-col items-center">
              <VercelLogo />
              <span className="text-xs text-gray-400">v0</span>
            </div>

            {/* Lovable Logo */}
            <div className="flex flex-col items-center">
              <LovableLogo />
              <span className="text-xs text-gray-400">Lovable</span>
            </div>

            {/* Bolt Logo */}
            <div className="flex flex-col items-center">
              <BoltLogo />
              <span className="text-xs text-gray-400">Bolt</span>
            </div>

            {/* Cursor Logo */}
            <div className="flex flex-col items-center">
              <CursorLogo />
              <span className="text-xs text-gray-400">Cursor</span>
            </div>

            {/* Windsurf Logo */}
            <div className="flex flex-col items-center">
              <WindsurfLogo />
              <span className="text-xs text-gray-400">Windsurf</span>
            </div>

            {/* Copilot Logo */}
            <div className="flex flex-col items-center">
              <CopilotLogo />
              <span className="text-xs text-gray-400">Copilot</span>
            </div>

            {/* Figma Logo */}
            <div className="flex flex-col items-center">
              <FigmaLogo />
              <span className="text-xs text-gray-400">Figma</span>
            </div>

            {/* Claude Logo */}
            <div className="flex flex-col items-center">
              <AnthropicLogo />
              <span className="text-xs text-gray-400">Claude</span>
            </div>

            {/* ChatGPT Logo */}
            <div className="flex flex-col items-center">
              <ChatGPTLogo />
              <span className="text-xs text-gray-400">ChatGPT</span>
            </div>

            {/* Grok Logo */}
            <div className="flex flex-col items-center">
              <GrokLogo />
              <span className="text-xs text-gray-400">Grok</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side: Prompt Input (v0.dev style) */}
          <motion.div
            className="bg-black/60 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Prompt Header */}
            <div className="border-b border-white/10 p-4 flex justify-between items-center">
              <div className="text-sm font-semibold text-gray-300">Prompt</div>
              <motion.button
                className={`hidden p-2 rounded-md ${isPlaying ? "bg-neon-aqua/20 text-neon-aqua" : "bg-white/5 text-gray-300 hover:bg-white/10"}`}
                onClick={startDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isPlaying}
              >
                <Play className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Prompt Area (v0.dev style) */}
            <div className="p-6 h-[500px] flex flex-col">
              <div className="flex-1">
                <div className="text-lg text-gray-300 font-medium mb-2">What would you like to build?</div>
                <div className="relative">
                  <div className="min-h-[100px] p-3 bg-black/30 rounded-lg border border-white/10 text-gray-300 flex">
                    <div className="flex-1">
                      {typedText}
                      {isPlaying && currentStep === 0 && (
                        <motion.span
                          className="inline-block h-5 w-0.5 bg-neon-aqua ml-0.5"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </div>
                    <motion.button
                      className="self-end ml-2 px-3 py-1.5 bg-neon-aqua text-black rounded-md flex items-center gap-1.5 font-medium text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (!isPlaying) {
                          console.log("Starting demo with prompt type:", selectedPromptType)
                          startDemo(true)
                        }
                      }}
                      disabled={isPlaying}
                    >
                      <Send className="h-3.5 w-3.5" /> Send
                    </motion.button>
                  </div>

                  {/* Sample prompts */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2">Try these prompts:</p>
                    <div className="flex flex-col gap-2">
                      <motion.button
                        className="text-left p-2 bg-white/5 hover:bg-white/10 rounded-md text-gray-300 text-sm transition-colors"
                        whileHover={{ x: 3 }}
                        onClick={() => {
                          // Always allow switching between prompts
                          startTypingPrompt(
                            "Build me an AI app that builds browser games with a single prompt",
                            "arcade",
                          )
                        }}
                      >
                        1. Build me an AI app that builds browser games with a single prompt
                      </motion.button>
                      <motion.button
                        className="text-left p-2 bg-white/5 hover:bg-white/10 rounded-md text-gray-300 text-sm transition-colors"
                        whileHover={{ x: 3 }}
                        onClick={() => {
                          // Always allow switching between prompts
                          startTypingPrompt("Create an AI powered search engine", "search")
                        }}
                      >
                        2. Create an AI powered search engine
                      </motion.button>
                      <motion.button
                        className="text-left p-2 bg-white/5 hover:bg-white/10 rounded-md text-gray-300 text-sm transition-colors"
                        whileHover={{ x: 3 }}
                        onClick={() => {
                          // Always allow switching between prompts
                          startTypingPrompt("Build an AI Text-to-Video landing page", "video")
                        }}
                      >
                        3. Build an AI Text-to-Video landing page
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side: Generated UI Preview */}
          <motion.div
            className="bg-black/60 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Preview Header */}
            <div className="border-b border-white/10 p-3 flex justify-between items-center">
              <div className="text-sm font-semibold text-gray-300">Generated UI</div>
              {currentStep >= 1 && (
                <div className="text-xs flex items-center gap-1 text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>I built an app using AI 🤯!!!
                </div>
              )}
            </div>

            {/* Arcade Game Builder UI Preview */}
            <div className="p-4 bg-gray-900 h-[500px] overflow-hidden">
              {currentStep >= 1 && (
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedPromptType === "arcade" && (
                    /* Existing arcade game UI */
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="h-12 bg-blue-600/30 rounded-t-lg mb-4 flex items-center px-4">
                        <div className="w-40 h-6 bg-white/20 rounded"></div>
                        <div className="ml-auto flex gap-3">
                          <div className="w-20 h-7 bg-white/20 rounded"></div>
                          <div className="w-20 h-7 bg-white/20 rounded"></div>
                          <div className="w-20 h-7 bg-neon-aqua/40 rounded"></div>
                        </div>
                      </div>

                      {/* Main content */}
                      <div className="flex-1 flex gap-4">
                        {/* Sidebar */}
                        <div className="w-1/4 bg-white/5 rounded p-3 flex flex-col gap-3">
                          <div className="w-full h-9 bg-white/10 rounded"></div>
                          <div className="w-full h-9 bg-white/10 rounded"></div>
                          <div className="w-full h-9 bg-neon-aqua/20 rounded"></div>
                          <div className="w-full h-9 bg-white/10 rounded"></div>
                          <div className="w-full h-9 bg-white/10 rounded"></div>
                          <div className="mt-4 w-full h-32 bg-white/5 rounded p-2">
                            <div className="w-full h-5 bg-white/10 rounded mb-2"></div>
                            <div className="w-full h-5 bg-white/10 rounded mb-2"></div>
                            <div className="w-3/4 h-5 bg-white/10 rounded"></div>
                          </div>
                          <div className="mt-auto w-full h-10 bg-neon-aqua/30 rounded"></div>
                        </div>

                        {/* Main area */}
                        <div className="flex-1 flex flex-col gap-4">
                          {/* Tabs */}
                          <div className="h-10 flex gap-1">
                            <div className="w-24 h-full bg-white/20 rounded-t-lg"></div>
                            <div className="w-24 h-full bg-neon-aqua/20 rounded-t-lg"></div>
                            <div className="w-24 h-full bg-white/10 rounded-t-lg"></div>
                          </div>

                          {/* Game canvas */}
                          <div className="flex-1 bg-black/40 rounded-lg border border-white/10 p-4 flex flex-col">
                            <div className="h-8 w-1/3 bg-white/10 rounded mb-4"></div>

                            {/* Game preview */}
                            <div className="flex-1 bg-black/60 rounded-lg flex items-center justify-center">
                              <div className="relative w-48 h-48">
                                <div className="absolute inset-0 bg-neon-aqua/10 rounded-lg"></div>
                                <div className="absolute left-1/4 top-1/4 w-12 h-12 bg-neon-aqua/40 rounded"></div>
                                <div className="absolute right-1/4 bottom-1/4 w-8 h-8 bg-electric-pink/40 rounded-full"></div>
                                <motion.div
                                  className="absolute left-1/2 bottom-1/4 w-6 h-6 bg-yellow-400/60 rounded"
                                  animate={{
                                    x: [0, 20, 0, -20, 0],
                                    y: [0, -10, -20, -10, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                  }}
                                />
                              </div>
                            </div>

                            {/* Controls */}
                            <div className="h-12 mt-4 flex gap-3">
                              <div className="flex-1 bg-white/10 rounded"></div>
                              <div className="w-32 h-full bg-neon-aqua/40 rounded flex items-center justify-center">
                                <div className="w-20 h-6 bg-white/30 rounded"></div>
                              </div>
                            </div>
                          </div>

                          {/* Properties panel */}
                          <div className="h-32 bg-white/5 rounded-lg p-3">
                            <div className="h-6 w-32 bg-white/10 rounded mb-3"></div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="h-8 bg-white/10 rounded"></div>
                              <div className="h-8 bg-white/10 rounded"></div>
                              <div className="h-8 bg-white/10 rounded"></div>
                              <div className="h-8 bg-neon-aqua/20 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPromptType === "search" && (
                    /* AI Search Engine UI */
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="h-12 bg-purple-600/30 rounded-t-lg mb-4 flex items-center px-4">
                        <div className="w-40 h-6 bg-white/20 rounded"></div>
                        <div className="ml-auto flex gap-3">
                          <div className="w-20 h-7 bg-white/20 rounded"></div>
                          <div className="w-20 h-7 bg-white/20 rounded"></div>
                        </div>
                      </div>

                      {/* Search bar */}
                      <div className="mx-4 mb-6">
                        <div className="h-12 bg-white/10 rounded-full flex items-center px-4">
                          <div className="w-full h-6 bg-white/10 rounded-full"></div>
                          <div className="ml-2 w-8 h-8 bg-purple-500/40 rounded-full flex-shrink-0"></div>
                        </div>
                      </div>

                      {/* Main content */}
                      <div className="flex-1 flex gap-4 mx-4">
                        {/* Filters */}
                        <div className="w-1/4 bg-white/5 rounded p-3 flex flex-col gap-3">
                          <div className="h-6 w-20 bg-white/20 rounded mb-2"></div>
                          <div className="w-full h-8 bg-white/10 rounded"></div>
                          <div className="w-full h-8 bg-white/10 rounded"></div>
                          <div className="w-full h-8 bg-purple-500/20 rounded"></div>
                          <div className="h-6 w-20 bg-white/20 rounded mt-4 mb-2"></div>
                          <div className="w-full h-8 bg-white/10 rounded"></div>
                          <div className="w-full h-8 bg-white/10 rounded"></div>
                        </div>

                        {/* Results */}
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="h-8 w-40 bg-white/10 rounded"></div>

                          {/* Result items */}
                          <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="bg-black/40 rounded-lg border border-white/10 p-4">
                                <div className="h-6 w-3/4 bg-white/20 rounded mb-2"></div>
                                <div className="h-4 w-1/2 bg-purple-500/30 rounded mb-3"></div>
                                <div className="space-y-2">
                                  <div className="h-4 w-full bg-white/10 rounded"></div>
                                  <div className="h-4 w-full bg-white/10 rounded"></div>
                                  <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Pagination */}
                          <div className="mt-auto h-10 flex justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div
                                key={i}
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  i === 1 ? "bg-purple-500/40" : "bg-white/10"
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPromptType === "video" && (
                    /* AI Text-to-Video Landing Page UI */
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="h-12 bg-red-600/30 rounded-t-lg mb-4 flex items-center px-4">
                        <div className="w-40 h-6 bg-white/20 rounded"></div>
                        <div className="ml-auto flex gap-3">
                          <div className="w-20 h-7 bg-white/20 rounded"></div>
                          <div className="w-20 h-7 bg-white/20 rounded"></div>
                          <div className="w-20 h-7 bg-neon-aqua/40 rounded"></div>
                        </div>
                      </div>

                      {/* Main content */}
                      <div className="flex-1 flex gap-4 mx-4">
                        {/* Video preview */}
                        <div className="w-1/2 bg-black/40 rounded-lg border border-white/10 p-4 flex items-center justify-center">
                          <div className="relative w-48 h-48">
                            <div className="absolute inset-0 bg-neon-aqua/10 rounded-lg"></div>
                            <div className="absolute left-1/4 top-1/4 w-12 h-12 bg-neon-aqua/40 rounded"></div>
                            <div className="absolute right-1/4 bottom-1/4 w-8 h-8 bg-electric-pink/40 rounded-full"></div>
                            <motion.div
                              className="absolute left-1/2 bottom-1/4 w-6 h-6 bg-yellow-400/60 rounded"
                              animate={{
                                x: [0, 20, 0, -20, 0],
                                y: [0, -10, -20, -10, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                            />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="w-1/2 flex flex-col gap-4">
                          <div className="h-8 w-40 bg-white/10 rounded"></div>
                          <div className="h-32 bg-white/5 rounded-lg p-3">
                            <div className="h-6 w-32 bg-white/10 rounded mb-3"></div>
                            <div className="space-y-2">
                              <div className="h-4 w-full bg-white/10 rounded"></div>
                              <div className="h-4 w-full bg-white/10 rounded"></div>
                              <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
