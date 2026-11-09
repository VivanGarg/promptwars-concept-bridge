import { useState } from "react";
import {
  Brain,
  LayoutDashboard,
  Compass,
  Network,
  BookOpen,
  Settings,
  Search,
  Bell,
  ChevronRight,
  Clock,
  CheckCircle2,
  CircleHelp,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./App.css";

const topics = [
  {
    name: "Dynamic Programming",
    subject: "Data Structures & Algorithms",
    difficulty: "Advanced",
    duration: "45 min",
    prerequisites: [
      { name: "Programming Fundamentals", level: "Mastered" },
      { name: "Recursion", level: "Needs Revision" },
      { name: "Time Complexity", level: "Mastered" },
      { name: "Arrays & Strings", level: "Mastered" },
      { name: "Memoization", level: "Not Started" },
    ],
  },
  {
    name: "Graph Algorithms",
    subject: "Data Structures & Algorithms",
    difficulty: "Intermediate",
    duration: "35 min",
    prerequisites: [
      { name: "Programming Fundamentals", level: "Mastered" },
      { name: "Arrays & Strings", level: "Mastered" },
      { name: "Trees", level: "Needs Revision" },
      { name: "Queues", level: "Mastered" },
      { name: "Time Complexity", level: "Not Started" },
    ],
  },
  {
    name: "Object-Oriented Programming",
    subject: "C++ Programming",
    difficulty: "Intermediate",
    duration: "30 min",
    prerequisites: [
      { name: "Variables & Functions", level: "Mastered" },
      { name: "Structs", level: "Needs Revision" },
      { name: "Pointers", level: "Not Started" },
    ],
  },
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [activeNav, setActiveNav] = useState("Dashboard");

  const mastered = selectedTopic.prerequisites.filter(
    (item) => item.level === "Mastered"
  ).length;

  const revision = selectedTopic.prerequisites.filter(
    (item) => item.level === "Needs Revision"
  ).length;

  const missing = selectedTopic.prerequisites.filter(
    (item) => item.level === "Not Started"
  ).length;

  const readiness = Math.round(
    (mastered / selectedTopic.prerequisites.length) * 100
  );

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <Brain size={23} />
          </div>
          <div>
            <h2>ConceptBridge</h2>
            <p>Learn without gaps</p>
          </div>
        </div>

        <p className="nav-label">WORKSPACE</p>

        <nav>
          {[
            { name: "Dashboard", icon: LayoutDashboard },
            { name: "Topic Explorer", icon: Compass },
            { name: "Prerequisite Map", icon: Network },
            { name: "Revision Paths", icon: BookOpen },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activeNav === item.name ? "active" : ""
                }`}
                onClick={() => setActiveNav(item.name)}
              >
                <Icon size={19} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <Sparkles size={20} />
            <h3>Learning gets easier</h3>
            <p>Build strong foundations, one concept at a time.</p>
          </div>

          <button className="nav-item">
            <Settings size={19} />
            Settings
          </button>

          <div className="user-profile">
            <div className="avatar">VG</div>
            <div>
              <h4>Student Workspace</h4>
              <p>Computer Science</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <p className="eyebrow">YOUR LEARNING WORKSPACE</p>
            <h1>Let's bridge some knowledge gaps. 👋</h1>
            <p className="subtitle">
              Understand what you need before diving into something new.
            </p>
          </div>

          <div className="header-actions">
            <button className="icon-button">
              <Search size={19} />
            </button>
            <button className="icon-button">
              <Bell size={19} />
            </button>
            <div className="avatar">VG</div>
          </div>
        </header>

        <section className="welcome-banner">
          <div>
            <span className="banner-tag">
              <Sparkles size={14} /> YOUR PERSONAL LEARNING GUIDE
            </span>
            <h2>Every complex concept starts with a simple one.</h2>
            <p>
              Choose a topic. Discover its prerequisites. Build your
              understanding step by step.
            </p>
          </div>

          <div className="banner-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="brain-circle">
              <Brain size={48} />
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon purple">
              <BookOpen size={21} />
            </div>
            <p>Topics Explored</p>
            <h2>12</h2>
            <span>Across 3 subjects</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <CheckCircle2 size={21} />
            </div>
            <p>Concepts Mastered</p>
            <h2>24</h2>
            <span>Keep up the momentum</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">
              <Clock size={21} />
            </div>
            <p>Revision Time</p>
            <h2>3.5 hrs</h2>
            <span>This week's learning plan</span>
          </div>
        </section>

        <section className="content-grid">
          <div className="main-content">
            <div className="section-heading">
              <div>
                <h2>Explore a topic</h2>
                <p>Select something you're about to learn.</p>
              </div>
            </div>

            <div className="topic-selector">
              {topics.map((topic) => (
                <button
                  key={topic.name}
                  className={`topic-card ${
                    selectedTopic.name === topic.name ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTopic(topic)}
                >
                  <div className="topic-card-top">
                    <span className="topic-icon">
                      <GraduationCap size={21} />
                    </span>
                    <ChevronRight size={18} />
                  </div>

                  <p>{topic.subject}</p>
                  <h3>{topic.name}</h3>

                  <div className="topic-meta">
                    <span>{topic.difficulty}</span>
                    <span>{topic.duration}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="section-heading prerequisite-heading">
              <div>
                <h2>Prerequisite knowledge</h2>
                <p>
                  Concepts you should understand before studying{" "}
                  <strong>{selectedTopic.name}</strong>.
                </p>
              </div>

              <span className="concept-count">
                {selectedTopic.prerequisites.length} concepts
              </span>
            </div>

            <div className="prerequisite-list">
              {selectedTopic.prerequisites.map((item, index) => (
                <div className="prerequisite-item" key={item.name}>
                  <div className="concept-number">{index + 1}</div>

                  <div className="concept-info">
                    <h4>{item.name}</h4>
                    <p>Foundation concept</p>
                  </div>

                  <span
                    className={`concept-status ${
                      item.level === "Mastered"
                        ? "mastered"
                        : item.level === "Needs Revision"
                        ? "revision"
                        : "missing"
                    }`}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="right-panel">
            <div className="readiness-card">
              <div className="section-heading">
                <div>
                  <h3>Learning readiness</h3>
                  <p>Your current foundation</p>
                </div>
                <CircleHelp size={18} />
              </div>

              <div className="readiness-circle">
                <div>
                  <h2>{readiness}%</h2>
                  <p>Ready</p>
                </div>
              </div>

              <p className="readiness-description">
                You have mastered {mastered} out of{" "}
                {selectedTopic.prerequisites.length} prerequisites.
              </p>

              <div className="readiness-breakdown">
                <div>
                  <span className="legend-dot green-dot"></span>
                  Mastered
                  <strong>{mastered}</strong>
                </div>
                <div>
                  <span className="legend-dot orange-dot"></span>
                  Needs revision
                  <strong>{revision}</strong>
                </div>
                <div>
                  <span className="legend-dot gray-dot"></span>
                  Not started
                  <strong>{missing}</strong>
                </div>
              </div>
            </div>

            <div className="revision-card">
              <span className="revision-tag">
                <Sparkles size={14} /> PERSONALIZED FOR YOU
              </span>

              <h3>Your revision path</h3>
              <p>
                Strengthen your foundations before tackling{" "}
                {selectedTopic.name}.
              </p>

              <div className="revision-steps">
                {selectedTopic.prerequisites
                  .filter((item) => item.level !== "Mastered")
                  .map((item, index) => (
                    <div className="revision-step" key={item.name}>
                      <div className="step-number">{index + 1}</div>
                      <div>
                        <h4>{item.name}</h4>
                        <p>
                          {item.level === "Needs Revision"
                            ? "Quick refresher"
                            : "Learn the fundamentals"}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <button className="revision-button">
                Start revision path <ArrowRight size={17} />
              </button>
            </div>
          </aside>
        </section>

        <footer>
          <p>ConceptBridge · Build knowledge, not confusion.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;