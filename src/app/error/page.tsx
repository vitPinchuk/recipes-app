"use client";

import { useSearchParams } from "next/navigation";

function ErrorPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") || "Unknown error";
  return <div>{message}</div>;
}

export default ErrorPage;
