import React from "react";

const Education = () => {
  
  
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Bennett University",
      year: "2024 - Present",
      desc: "Pursuing MCA with focus on full-stack development, MERN stack, and real-world project building."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "SD College of Management Studies",
      year: "2021 - 2024",
      desc: "Completed BCA with strong foundation in programming, databases, and software development."
    },
   
  ];

  return (
    <section
      id="education"
      className="section"
      style={{ background: "var(--bg2)" }}
    >
      <div className="container">
        
        {/* Heading */}
        <div
          style={{ textAlign: "center", marginBottom: 60 }}
          className="reveal anim-fade-up"
        >
          

          <h2 className="section-heading">
            My <span className="violet-text">Education</span>
          </h2>

          <p className="section-sub">
            My academic background and learning path
          </p>
        </div>

        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 24,
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "linear-gradient(to bottom, var(--violet2), var(--cyan), transparent)",
            }}
          />

          {educationData.map((item, i) => (
            <div
              key={i}
              className="reveal anim-fade-right"
              style={{
                display: "flex",
                gap: 32,
                marginBottom: 40,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              
              {/* Icon */}
              <div style={{ flexShrink: 0, paddingTop: 4 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: "2px solid var(--violet)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    boxShadow: "0 0 20px rgba(167,139,250,0.3)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {i === 0 ? "🎓" : i === 1 ? "📘" : "🏫"}
                </div>
              </div>

              {/* Content */}
              <div className="card" style={{ flex: 1, padding: 24 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Syne",
                      fontWeight: 700,
                      fontSize: 17,
                    }}
                  >
                    {item.degree}
                  </h3>

                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      background: "rgba(167,139,250,0.12)",
                      border: "1px solid var(--border2)",
                      color: "var(--violet)",
                      padding: "3px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 13,
                    color: "var(--cyan)",
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  @ {item.institution}
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text2)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;