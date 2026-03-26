import logoProwall from "@/assets/logo-prowall.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-landing text-center">
        <img src={logoProwall} alt="ProWall" className="h-32 sm:h-40 mx-auto mb-4" />
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Profissão ProWall. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
