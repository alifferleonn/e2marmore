import Image from "next/image";

export function Logo({ size = 46 }: { size?: number }) {
  return (
    <>
      <Image className="logo-img" src="/img/logo.png" alt="E2 Mármores" width={size} height={size} priority />
      <span className="logo-text">Mármores</span>
    </>
  );
}
