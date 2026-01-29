type ImageProps = {
  src: string;
  width?: string;
  height?: string;
  altText: string;
};

const Image = ({
  src,
  width = "100%",
  height = "auto",
  altText,
}: ImageProps) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={altText}
      style={{ maxWidth: "100%" }}
    />
  );
};

export default Image;
