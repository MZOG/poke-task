type ContainerProps = {
  type?: "section" | "div";
  children: React.ReactNode;
};

export default function Container({
  type = "section",
  children,
}: ContainerProps) {
  if (type === "div") {
    return <div className="max-w-3xl mx-auto px-5">{children}</div>;
  }

  return <section className="max-w-3xl mx-auto px-5">{children}</section>;
}
