import React from "react";

export type IconName =
  | "arrow"
  | "chevron"
  | "phone"
  | "message"
  | "pin"
  | "menu"
  | "close"
  | "search"
  | "pipe"
  | "shield"
  | "layers"
  | "building"
  | "check"
  | "plus"
  | "home"
  | "clock"
  | "users"
  | "star"
  | "truck";

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    chevron: <path d="m7 10 5 5 5-5" />,
    phone: (
      <path d="M5.2 4.8 8.1 4l1.7 4-1.9 1.4a15.1 15.1 0 0 0 6.7 6.7l1.4-1.9 4 1.7-.8 2.9c-.3 1-1.4 1.6-2.4 1.4C9.9 19 5 14.1 3.8 7.2c-.2-1 .4-2.1 1.4-2.4Z" />
    ),
    message: (
      <>
        <path d="M20 11.5a7.8 7.8 0 0 1-8 7.5c-1.1 0-2.1-.2-3-.6L4 20l1.6-4.2A7.2 7.2 0 0 1 4 11.5 7.8 7.8 0 0 1 12 4a7.8 7.8 0 0 1 8 7.5Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 10-8 10S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),
    pipe: (
      <>
        <path d="M5 5v5h4v4H5v5h14v-5h-4v-4h4V5H5Z" />
        <path d="M9 10h6v4H9z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.7-2.8 8.1-7 10-4.2-1.9-7-5.3-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M8 21v-4h8v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    home: (
      <>
        <path d="m3 12 9-8 9 8" />
        <path d="M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    star: (
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
    ),
    truck: (
      <>
        <path d="M1 3h15v13H1zM16 8h4l3 4v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  };
  return <svg {...common}>{paths[name]}</svg>;
}
