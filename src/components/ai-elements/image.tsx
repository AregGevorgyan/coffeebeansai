import type { Experimental_GeneratedImage } from "ai";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

export type ImageProps = Experimental_GeneratedImage &
  Omit<NextImageProps, "src" | "alt" | "width" | "height"> & {
    className?: string;
    alt?: string;
    width?: number;
    height?: number;
  };

export const Image = ({
  base64,
  mediaType,
  className,
  alt,
  width = 512,
  height = 512,
  uint8Array: _uint8Array,
  ...props
}: ImageProps) => {
  void _uint8Array;

  return (
    <NextImage
      {...props}
      alt={alt ?? ""}
      className={cn("h-auto max-w-full overflow-hidden rounded-md", className)}
      height={height}
      src={`data:${mediaType};base64,${base64}`}
      unoptimized
      width={width}
    />
  );
};
