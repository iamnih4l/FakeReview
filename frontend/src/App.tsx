import React, { useState, useEffect } from "react";

interface DemoResult {
  text: string;
  verdict: string;
  confidence: number;
}

const App: React.FC = () => {
  const [page, setPage] = useState<"home" | "demo">("home");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoResult, setDemoResult] = useState<DemoResult | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const sampleReviews = [
    "I’ve been using this product for three months and it works perfectly!",
    "Worst thing I’ve ever bought. Totally fake quality.",
    "It’s okay, nothing too special. Does the job.",
    "AMAZING PRODUCT!!! Everyone should buy this immediately!!!",
  ];

  const handleAnalyze = async () => {
    if (!review.trim()) return;
    setLoading(true);
    setDemoResult(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review }),
      });
      const data = await response.json();
      setDemoResult({
        text: review,
        verdict: data.verdict,
        confidence: parseFloat(data.confidence.toFixed(2)),
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoClick = async (text: string) => {
    setReview(text);
    setDemoResult(null);
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review: text }),
      });
      const data = await response.json();
      setDemoResult({
        text,
        verdict: data.verdict,
        confidence: data.confidence,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.fullBackground}></div>

      {/* Navbar */}
      <div style={styles.navbar}>
        <h1 style={styles.logo}>FakeReview AI</h1>
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            style={{
              ...styles.navBtn,
              background:
                page === "home"
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(255,255,255,0.1)",
            }}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            style={{
              ...styles.navBtn,
              background:
                page === "demo"
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(255,255,255,0.1)",
            }}
            onClick={() => setPage("demo")}
          >
            Try Demo
          </button>
        </div>
      </div>

      {/* -------------------- HOME PAGE -------------------- */}
      {page === "home" && (
        <div style={styles.container}>
          <div
            style={{
              marginTop: "120px",
              textAlign: "center",
              maxWidth: "800px",
              zIndex: 2,
            }}
          >
            <h1 style={{ ...styles.title, fontSize: isMobile ? "30px" : "42px" }}>
              Detect Fake Reviews Instantly
            </h1>
            <p style={styles.subtitle}>
              Powered by AI to identify authenticity in user reviews.
            </p>

            <textarea
              placeholder="Paste your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{
                ...styles.textarea,
                minHeight: isMobile ? "100px" : "140px",
                fontSize: isMobile ? "14px" : "16px",
              }}
            />

            <button
              onClick={handleAnalyze}
              disabled={loading}
              style={{
                ...styles.button,
                transform: loading ? "scale(0.95)" : "scale(1)",
                width: isMobile ? "100%" : "auto",
              }}
            >
              {loading ? <div style={styles.spinner} /> : "Check Authenticity"}
            </button>

            {demoResult && (
              <div
                style={{
                  ...styles.resultCard,
                  background:
                    demoResult.verdict === "Genuine"
                      ? "linear-gradient(135deg, #00ff88 0%, #007a3d 100%)"
                      : "linear-gradient(135deg, #ff0033 0%, #660000 100%)",
                  boxShadow:
                    demoResult.verdict === "Genuine"
                      ? "0 0 40px rgba(0,255,136,0.4)"
                      : "0 0 40px rgba(255,0,51,0.4)",
                  animation:
                    "fadeIn 0.5s ease-in-out, pulse 2s infinite ease-in-out",
                }}
              >
                {demoResult.verdict === "Genuine"
                  ? "✅ Genuine Review"
                  : "🚫 Fake Review"}{" "}
                - Confidence: {demoResult.confidence}%
              </div>
            )}
          </div>
        </div>
      )}

      {/* -------------------- DEMO PAGE -------------------- */}
      {page === "demo" && (
        <div style={styles.container}>
          <div style={{ marginTop: "120px", textAlign: "center" }}>
            <h1 style={styles.title}>Explore Fake Review Detection in Action</h1>
            <p style={styles.subtitle}>
              Here’s a visual showcase of how the AI identifies authenticity.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginTop: "50px",
                width: "90%",
                maxWidth: "1000px",
              }}
            >
             {[
  { img: "/frontend/src/public/demo1.png", caption: "Positive Genuine Review" },
  { img: "/frontend/src/public/demo2.png", caption: "Negative Genuine Review" },
].map((item, i) => (
  <div
    key={i}
    style={{
      background: "rgba(255,255,255,0.1)",
      borderRadius: "12px",
      padding: "15px",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 0 15px rgba(255,255,255,0.1)",
      transition: "all 0.3s ease",
    }}
  >
    <img
      src={item.img}
      alt={item.caption}
      style={{
        width: "100%",
        height: "160px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    />
    <p style={{ color: "#ddd", fontSize: "14px" }}>{item.caption}</p>
  </div>
))}

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.03); } 100% { transform: scale(1); } }
        @keyframes shimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </div>
  );
};

// 🎨 Same Netflix-style design
const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: { position: "relative", width: "100%", minHeight: "100%", backgroundColor: "#000", overflowX: "hidden" },
  fullBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(-45deg, #1a1a1a, #0a0a0a, #2c0000, #800000, #E50914)",
    backgroundSize: "400% 400%",
    animation: "shimmer 20s ease infinite",
    zIndex: 0,
  },
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Inter, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "80px",
    zIndex: 1,
  },
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    zIndex: 10,
  },
  logo: { color: "#E50914", fontWeight: 700, fontSize: "20px" },
  navBtn: {
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    padding: "6px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  title: { fontWeight: 700, textShadow: "0 0 10px rgba(229,9,20,0.6)" },
  subtitle: { color: "#ccc", marginTop: "10px" },
  textarea: {
    marginTop: "30px",
    width: "100%",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "15px",
    resize: "none",
    outline: "none",
  },
  button: {
    marginTop: "25px",
    background: "#E50914",
    border: "none",
    color: "white",
    padding: "12px 40px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 600,
    boxShadow: "0 0 20px rgba(229,9,20,0.4)",
    transition: "all 0.3s ease",
  },
  spinner: {
    border: "3px solid rgba(255,255,255,0.3)",
    borderTop: "3px solid white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    margin: "auto",
    animation: "spin 0.8s linear infinite",
  },
  resultCard: {
    marginTop: "40px",
    padding: "25px",
    borderRadius: "12px",
    fontSize: "22px",
    fontWeight: "600",
  },
};

export default App;
