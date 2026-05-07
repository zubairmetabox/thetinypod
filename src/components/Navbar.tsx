export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.24)",
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
    }}>
      {/* Logo — left */}
      <a href="/" style={{ position: "absolute", left: "10px", display: "flex", alignItems: "center" }}>
        <svg width="17" height="26" viewBox="0 0 17 26" fill="white">
          <path d="M 8.503 6.387 C 9.956 6.387 11.134 5.181 11.134 3.693 C 11.134 2.206 9.956 1 8.503 1 C 7.05 1 5.872 2.206 5.872 3.693 C 5.872 5.181 7.05 6.387 8.503 6.387 Z M 0 9.312 C 0.87 8.124 1.983 7.126 3.267 6.39 C 4.296 8.305 6.255 9.598 8.503 9.598 C 10.746 9.598 12.701 8.311 13.732 6.405 C 15.009 7.142 16.116 8.139 16.981 9.324 C 14.191 9.865 12.079 12.426 12.079 15.503 C 12.079 18.58 14.191 21.14 16.981 21.682 C 15.071 24.299 11.977 26 8.487 26 C 5.001 26 1.911 24.304 0 21.693 C 2.819 21.177 4.962 18.602 4.962 15.503 C 4.962 12.404 2.819 9.829 0 9.312 Z" />
        </svg>
      </a>

      {/* Nav links — centered */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {[
          { label: "What", href: "#what" },
          { label: "How",  href: "#how" },
          { label: "Why",  href: "#why" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "white",
              opacity: 0.8,
              textDecoration: "none",
              lineHeight: "1.7em",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Buy button — right */}
      <a
        href="#buy"
        style={{
          position: "absolute",
          right: "10px",
          fontFamily: '"Albert Sans", sans-serif',
          fontWeight: 500,
          fontSize: "10px",
          letterSpacing: "-0.03em",
          color: "white",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          textDecoration: "none",
          padding: "0 24px",
          height: "31px",
          display: "flex",
          alignItems: "center",
          borderRadius: "200px",
        }}
      >
        Buy
      </a>
    </nav>
  );
}
