type ImgProps = {
  src: string;
  width?: string;
  height?: string;
  altText: string;
};

const Img = ({ src, width = "100%", height = "auto", altText }: ImgProps) => {
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

export default Img;
