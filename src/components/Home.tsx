"use client";

import Navbar from "./Navbar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      <main className="isolate"></main>
    </div>
  );
}
