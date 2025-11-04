'use client'

import * as motion from "motion/react-client"

// ===== Data =====
const cardsData = [
  { title: "Edit Task", paragraph: "Modify tasks efficiently.", colors: ["#40916C", "#52B788"] },
  { title: "Delete Task", paragraph: "Remove completed or unnecessary tasks.", colors: ["#FEC89A", "#FFD27F"] },
  { title: "Add Note", paragraph: "Add additional notes to your tasks.", colors: ["#669BBC", "#8EC3E5"] },
  { title: "Review", paragraph: "Check your task list and review progress.", colors: ["#C8B6FF", "#A694F1"] },
]

// ===== Main Component =====
export default function ScrollTriggeredCards() {
  return (
    <div style={container}>
      {cardsData.map((card, i) => (
        <Card key={i} i={i} {...card} />
      ))}
    </div>
  )
}

// ===== Card Component =====
function Card({ title, paragraph, colors, i }) {
  const background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`

  // Tilt left for left column, right for right column
  const rotate = i % 2 === 0 ? -15 : 15
  const translateY = i >= 2 ? -20 : 0

  return (
    <motion.div
      style={{
        ...cardContainer,
        zIndex: i,
        background,
      }}
      initial={{ y: 100, opacity: 0, rotate }}      // start tilted
      whileInView={{ y: 0, opacity: 1, rotate }}   // animate to same tilt
      viewport={{ amount: 0.2 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
    >
      <h2 style={cardTitle}>{title}</h2>
      <p style={cardParagraph}>{paragraph}</p>
    </motion.div>
  )
}

// ===== Styles =====
const container = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "15px",
  maxWidth: 450,
  margin: "0 auto",
  padding: "20px",
}

const cardContainer = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 10,          // less rounded for sharper edges
  minHeight: 90,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "15px",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
}

const cardTitle = {
  fontSize: "18px",
  fontWeight: 700,
  color: "#fff",
  marginBottom: "6px",
  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
}

const cardParagraph = {
  fontSize: "14px",
  color: "#fff",
  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
}
