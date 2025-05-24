interface MarginWrapperProps {
  children: React.ReactNode;
}

export default function NoMarginWrapper({ children }: MarginWrapperProps) {
  return <div className="flex flex-1 justify-center">{children}</div>;
}
