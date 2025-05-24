interface MarginWrapperProps {
  children: React.ReactNode;
}

export default function MarginWrapper({ children }: MarginWrapperProps) {
  return <div className="m-0 mx-auto p-8 max-w-[1280px]">{children}</div>;
}
