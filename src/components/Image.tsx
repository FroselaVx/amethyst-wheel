interface IImage {
  logo: string;
  fallback: string;
  restProps?: any;
}

export default function Image(props: IImage) {
  const { logo = "", fallback = "img", ...restProps } = props;

  return <img src={logo} alt={fallback} {...restProps} />;
}
