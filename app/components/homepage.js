"use client";

import React, { useState } from "react";
import Startpage from "./Startpage";
import ParticipantInfo from "./ParticipantInfo";
import Calibrationpage from "./Calibrationpage";
import FullScreenButton from "./FullScreen";
import Visualsearch from "./Visualsearch";
import RedTriangleQuestion from "./RedTriangleQuestion";
import AnswerBook from "./AnswerBook";
import EndOfPractice from "./EndOfPractice";

const trialImages = [
  { image: "/practice.png", hasRedTriangle: true },
  { image: "/practice2.png", hasRedTriangle: false },
];

const features = [
  { title: "Challenging Levels", desc: "Progress through increasingly difficult levels and test your memory skills.", icon: "🧠" },
  { title: "Leaderboard", desc: "Compete with friends and see your ranking on the global leaderboard.", icon: "🏆" },
  { title: "Custom Themes", desc: "Personalize your game with beautiful themes and card designs.", icon: "🎨" },
  { title: "Daily Rewards", desc: "Log in daily to earn exciting rewards and power-ups.", icon: "🏱" },
];

const testimonials = [
  { name: "Shanti Singh", text: "This memory game is so addictive! The animations make it super fun.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Cksurya", text: "I love competing with my friends on the leaderboard!", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
];

export default function Homepage() {
  const [hovered, setHovered] = useState(null);
  const [currentStep, setCurrentStep] = useState("home");
  const [participantData, setParticipantData] = useState(null);
  const [lineWidth, setLineWidth] = useState(500);
  const [trialSequence, setTrialSequence] = useState([]);
  const [trialCount, setTrialCount] = useState(0);
  const [currentTrialImage, setCurrentTrialImage] = useState(null);

  const handlePlayNow = () => setCurrentStep("start");
  const handleStartDone = () => setCurrentStep("calibration");
  const handleCalibrationOk = () => setCurrentStep("participant");
  const handleParticipantNext = (data) => {
    setParticipantData(data);
    setCurrentStep("FullScreen");
  };

  const handleFullScreenClick = () => {
    document.documentElement.requestFullscreen();
    setCurrentStep("visualSearch");
  };

  const startTrialSequence = () => {
    const [yesImg, noImg] = trialImages[0].hasRedTriangle
      ? [trialImages[0], trialImages[1]]
      : [trialImages[1], trialImages[0]];

    const order = Math.random() < 0.5 ? [yesImg, noImg] : [noImg, yesImg];
    setTrialSequence(order);
    setTrialCount(0);
    setCurrentTrialImage(order[0]);
    setCurrentStep("redPrompt");
  };

  // All render conditions
  if (currentStep === "start") return <Startpage onDone={handleStartDone} />;
  if (currentStep === "calibration") return <Calibrationpage lineWidth={lineWidth} setLineWidth={setLineWidth} onOk={handleCalibrationOk} />;
  if (currentStep === "participant") return <ParticipantInfo lineWidth={lineWidth} onNext={handleParticipantNext} />;
  if (currentStep === "FullScreen") return <FullScreenButton onClick={handleFullScreenClick} />;
  if (currentStep === "visualSearch") return <Visualsearch onStart={startTrialSequence} />;
  if (currentStep === "endOfPractice") return <EndOfPractice onStart={() => setCurrentStep("home")} />;

  if (currentStep === "redPrompt" && currentTrialImage) {
    return (
      <RedTriangleQuestion
        image={currentTrialImage.image}
        hasRedTriangle={currentTrialImage.hasRedTriangle}
        onAnswer={(userAnswer, correctAnswer) => {
          setParticipantData({ userAnswer, correctAnswer });
          setCurrentStep("answerPage");
        }}
      />
    );
  }

  if (currentStep === "answerPage") {
    return (
      <AnswerBook
        userAnswer={participantData.userAnswer}
        correctAnswer={participantData.correctAnswer}
        onNext={() => {
          if (trialCount + 1 < trialSequence.length) {
            const nextImage = trialSequence[trialCount + 1];
            setTrialCount(trialCount + 1);
            setCurrentTrialImage(nextImage);
            setCurrentStep("redPrompt");
          } else {
            setTrialCount(0);
            setTrialSequence([]);
            setCurrentStep("endOfPractice"); // ✅ Show end-of-practice page
          }
        }}
      />
    );
  }

  // Home default UI
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1><span className="animated-title">Memory Game</span></h1>
          <p className="subtitle">Sharpen your mind with our interactive and animated memory game!</p>
          <button className="cta-btn" onClick={handlePlayNow}>Play Now</button>
        </div>
        <div className="hero-animation">
          <div className="card-grid">
            {[...Array(6)].map((_, i) => <div key={i} className={`card card-anim-${i + 1}`}></div>)}
          </div>
        </div>
      </header>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={f.title} className={`feature-card ${hovered === idx ? "hovered" : ""}`} onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Players Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <img src={t.avatar} alt={t.name} className="avatar" />
              <p className="testimonial-text">"{t.text}"</p>
              <span className="testimonial-name">- {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Memory Game. All rights reserved.</p>
      </footer>
    </div>
  );
}
