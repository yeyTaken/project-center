import { Banner as NextraBanner } from "nextra/components";

export default function Banner() {
  return (
    <NextraBanner
      storageKey="template-docs-v1"
      className="custom-banner"
      style={{
        backgroundColor: "#00000",
        // adicione outros estilos inline aqui
      }}
    >
      Template Docs v1.0 is released 🎉
    </NextraBanner>
  );
}
