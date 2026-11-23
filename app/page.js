
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#f4f6fa",
      padding: "50px 20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "18px",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
      }}>
        <h1 style={{ fontSize: "32px", color: "#2563eb" }}>
          My File Box
        </h1>

        <p style={{ color: "#666", marginBottom: "35px" }}>
          누구나 쉽고 편리하게 파일을 공유하세요.
        </p>

        <div style={{
          border: "2px dashed #93b4f5",
          borderRadius: "12px",
          padding: "40px 20px",
          backgroundColor: "#f8faff"
        }}>
          <div style={{ fontSize: "45px" }}>📁</div>
          <h3>파일 공유 공간</h3>
          <p style={{ color: "#777" }}>
            파일 업로드 기능을 준비하고 있습니다.
          </p>
        </div>

        <p style={{
          marginTop: "30px",
          fontSize: "13px",
          color: "#999"
        }}>
          My File Box © 2026
        </p>
      </div>
    </main>
  );
}
