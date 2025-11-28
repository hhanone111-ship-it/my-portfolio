

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/20 text-center">
      {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Han Huynh — All Rights Reserved.
        </p>
      </footer>
  );
};

export default Footer;
