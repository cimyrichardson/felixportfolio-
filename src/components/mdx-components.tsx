import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-12 text-4xl font-semibold tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-semibold tracking-tight">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="my-5 leading-8 text-muted-foreground">{children}</p>
    ),
    a: ({ href = "", children }) => (
      <Link className="font-medium text-accent underline underline-offset-4" href={href}>
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-muted-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-accent pl-5 text-lg italic">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-muted p-5 font-mono text-sm">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]">
        {children}
      </code>
    ),
    img: ({ alt = "", src = "", width, height }) => (
      <Image
        alt={alt}
        className="my-8 h-auto max-w-full rounded-xl border border-border"
        height={typeof height === "number" ? height : 720}
        sizes="(max-width: 768px) 100vw, 768px"
        src={src}
        width={typeof width === "number" ? width : 1280}
      />
    ),
  };
}
