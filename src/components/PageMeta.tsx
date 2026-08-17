import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  /** Path only, e.g. "/work" */
  canonicalPath: string;
}

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * PageMeta
 * Sets per-page title, description, OG/Twitter titles and canonical link.
 */
export default function PageMeta({ title, description, canonicalPath }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${window.location.origin}${canonicalPath}`;
  }, [title, description, canonicalPath]);

  return null;
}
