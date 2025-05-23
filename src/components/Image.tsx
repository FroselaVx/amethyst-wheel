interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  logo: string;
  fallback: string;
}

export default function Image(props: IImage) {
  const { logo = "", fallback = "img", ...restProps } = props;

  return <img src={logo} alt={fallback} {...restProps} />;
}
