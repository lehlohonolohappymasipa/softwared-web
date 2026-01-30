"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  caption?: string;
  captionSrOnly?: boolean;
};

export default function EditorialImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
  caption,
  captionSrOnly = false,
}: Props) {
  const [hasError, setHasError] = useState(false);
  const captionId = useId();

  // If the asset is missing during local dev, keep a calm placeholder
  // with the same geometry so layout doesn't jump.
  if (hasError) {
    return (
      <figure className={className} aria-hidden>
        <div
          className="editorial-frame"
          style={{ aspectRatio: `${width} / ${height}` }}
        />
      </figure>
    );
  }

  return (
    <figure className={className} aria-describedby={caption ? captionId : undefined}>
      <div className="editorial-frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          onError={() => setHasError(true)}
          className="editorial-img"
        />
      </div>
      {caption ? (
        <figcaption
          id={captionId}
          className={captionSrOnly ? "sr-only" : "editorial-caption"}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
