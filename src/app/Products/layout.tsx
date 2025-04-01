export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <div className="flex flex-col w-full h-full">{children}</div>
    </div>
  );
}
