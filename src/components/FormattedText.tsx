import React from "react";

/**
 * FormattedText parses and renders a string that may contain safe, simple inline HTML
 * formatting tags created via the WYSIWYG editor:
 * <strong> / <b>, <em> / <i>, <u>, <s> / <strike>, <a href="...">, <mark>, <br>,
 * and paragraphs (<p>).
 *
 * If no HTML tags are present, it renders plain text with line breaks preserved.
 */

interface FormattedTextProps {
  content?: string | null;
  className?: string;
  as?: React.ElementType;
}

// Matches tags we allow: <b>, <strong>, <i>, <em>, <u>, <s>, <strike>, <mark>, <br>, <p>, <a>, <ul>, <ol>, <li>, <h3>, <h4>, <blockquote>, <span>
const HTML_TAG_REGEX =
  /<\/?(b|strong|i|em|u|s|strike|mark|br|p|a|ul|ol|li|h3|h4|blockquote|span)(\s+[^>]*)?>/gi;

const ALLOWED_SPAN_CLASSES = new Set([
  "font-serif",
  "text-lg",
  "text-sm",
  "text-xs",
  "text-[#4F6752]",
  "text-[#1C241E]",
  "uppercase",
  "tracking-wider",
]);

function sanitizeSafeHtml(html: string): string {
  // Only permit safe tags and attributes
  return html.replace(/<(\/?[a-zA-Z0-9]+)([^>]*)>/g, (_match, tag, rawAttrs) => {
    const lowerTag = tag.toLowerCase();
    const isClosing = lowerTag.startsWith("/");
    const cleanTag = isClosing ? lowerTag.slice(1) : lowerTag;

    const allowedTags = [
      "b",
      "strong",
      "i",
      "em",
      "u",
      "s",
      "strike",
      "mark",
      "br",
      "p",
      "a",
      "ul",
      "ol",
      "li",
      "h3",
      "h4",
      "blockquote",
      "span",
    ];
    if (!allowedTags.includes(cleanTag)) {
      return "";
    }

    if (isClosing) {
      return `</${cleanTag}>`;
    }

    if (cleanTag === "br") {
      return "<br />";
    }

    if (cleanTag === "a") {
      const hrefMatch = /href=(["'])(.*?)\1/i.exec(rawAttrs);
      let href = hrefMatch ? hrefMatch[2].trim() : "#";
      // Prevent javascript: or unsafe schemas
      if (!/^(https?:\/\/|\/|mailto:|tel:)/i.test(href)) {
        href = "#";
      }
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="underline hover:text-[#4F6752] transition-colors">`;
    }

    if (cleanTag === "ul") {
      return `<ul class="list-disc pl-5 my-2 space-y-1 text-left">`;
    }

    if (cleanTag === "ol") {
      return `<ol class="list-decimal pl-5 my-2 space-y-1 text-left">`;
    }

    if (cleanTag === "h3") {
      return `<h3 class="font-serif text-xl font-medium text-[#1C241E] mt-3 mb-1">`;
    }

    if (cleanTag === "h4") {
      return `<h4 class="font-serif text-lg font-medium text-[#1C241E] mt-2 mb-1">`;
    }

    if (cleanTag === "blockquote") {
      return `<blockquote class="border-l-2 border-[#4F6752] pl-4 italic my-2 text-[#4A544C]">`;
    }

    if (cleanTag === "span") {
      const classMatch = /class=(["'])(.*?)\1/i.exec(rawAttrs);
      const safeClasses = classMatch
        ? classMatch[2]
            .split(/\s+/)
            .filter((c) => ALLOWED_SPAN_CLASSES.has(c))
            .join(" ")
        : "";
      return safeClasses ? `<span class="${safeClasses}">` : "<span>";
    }

    return `<${cleanTag}>`;
  });
}

export function FormattedText({ content, className = "", as: Tag = "span" }: FormattedTextProps) {
  if (!content) return null;

  const hasHtml = HTML_TAG_REGEX.test(content);

  if (!hasHtml) {
    return <Tag className={className}>{content}</Tag>;
  }

  const clean = sanitizeSafeHtml(content);

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
