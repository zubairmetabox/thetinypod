export default function Hero() {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Sky background */}
      <img
        src="/assets/framerusercontent.com/images/w57WLWk8CMezkSVZtS1sg5tcqi0.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Clouds overlay */}
      <img
        src="/assets/framerusercontent.com/images/cmV31b0IR7aC2wQd7SnRjo4klI.png"
        alt=""
        style={{
          position: "absolute",
          width: "101%",
          height: "101%",
          objectFit: "cover",
          objectPosition: "center",
          transform: "scale(1.7)",
          pointerEvents: "none",
        }}
      />

      {/* Content row: text | product | text */}
      <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "48px",
        padding: "0 40px",
        width: "100%",
        maxWidth: "1200px",
      }}>
        {/* Left text */}
        <h1 style={{
          fontFamily: '"ITC Garamond Std Light Narrow", sans-serif',
          fontSize: "clamp(28px, 3.5vw, 52px)",
          fontWeight: 300,
          color: "white",
          letterSpacing: "-0.8px",
          lineHeight: "1.1em",
          textAlign: "right",
          flex: "1",
          margin: 0,
        }}>
          Reinventing the wheel...
        </h1>

        {/* Product image */}
        <img
          src="/assets/framerusercontent.com/images/5FegqzzK7NLHwPcw4fbCiMPDJU.png"
          alt="tinyPod"
          style={{
            width: "clamp(160px, 18vw, 280px)",
            height: "auto",
            flexShrink: 0,
            filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.3))",
          }}
        />

        {/* Right text */}
        <h1 style={{
          fontFamily: '"ITC Garamond Std Light Narrow", sans-serif',
          fontSize: "clamp(28px, 3.5vw, 52px)",
          fontWeight: 300,
          color: "white",
          letterSpacing: "-0.8px",
          lineHeight: "1.1em",
          textAlign: "left",
          flex: "1",
          margin: 0,
        }}>
          A <em>tiny</em> bit.
        </h1>
      </div>
    </section>
  );
}
