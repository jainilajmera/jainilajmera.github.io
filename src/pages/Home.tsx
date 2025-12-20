import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toggle from "../components/Toggle";
import CollapsibleSection from "../components/CollapsibleSection";

function Home() {
  const [activeTab, setActiveTab] = useState<"work" | "life">("work");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="intro">
        <p className="intro-tagline">
          Software Engineer @Plaid · CS '24 @Berkeley
        </p>
        <div className="intro-text">
          <p>
            <Toggle activeTab={activeTab} onToggle={setActiveTab} /> work,{" "}
            <AnimatePresence mode="wait">
              {activeTab === "work" ? (
                <motion.span
                  key="work-intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  I build secure, scalable systems. Recently, I helped ship an{" "}
                  <a
                    href="https://plaid.com/blog/plaid-internal-mcp-server-productivity/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    internal MCP server
                  </a>{" "}
                  at Plaid. I stay curious, chase hard problems, and care about
                  designing clean abstractions.
                </motion.span>
              ) : (
                <motion.span
                  key="life-intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  I enjoy climbing (rocks, trees, walls, you name it), dancing,
                  and geeking out over sports. Cricket, football, tennis, or the
                  Olympics – I'll watch it all. History nerd. Proudly Indian.
                </motion.span>
              )}
            </AnimatePresence>
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "work" ? (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="content-section"
          >
            <WorkContent />
          </motion.div>
        ) : (
          <motion.div
            key="life"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="content-section"
          >
            <LifeContent />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function WorkContent() {
  return (
    <>
      <CollapsibleSection title="Work" defaultOpen={false}>
        <ul className="experience-list">
          <li className="experience-item">
            <div className="experience-header">
              Working at <span className="highlight">Plaid</span> · 2024–Present
            </div>
            <div className="experience-subtitle">
              Software Engineer, Security
            </div>
            <div className="experience-details">
              JIT access control for Kubernetes. Signing service for
              cryptographic segregation of Plaid's traffic. Security for Plaid's
              internal MCP server.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              Won 3 hackathon awards at <span className="highlight">Plaid</span>{" "}
              · 2024–2025
            </div>
            <div className="experience-details">
              Slack bot that auto-updates runbooks and answers open channel
              questions. Internal Kalshi-like prediction market for
              crowdsourcing forecasts. Playground for experimenting with AI
              agents.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              Co-developed{" "}
              <a
                href="https://github.com/wkalt/dp3"
                target="_blank"
                rel="noopener noreferrer"
              >
                dp3
              </a>{" "}
              · 2024
            </div>
            <div className="experience-details">
              Multimodal log database for robotics. Implemented range deletion,
              logical data truncation, and reverse time-ordered traversal.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              Worked at <span className="highlight">Plaid</span> · 2023
            </div>
            <div className="experience-subtitle">SWE Intern, Security</div>
            <div className="experience-details">
              PlaidIAM: self-service tool for AWS access. Request temporary
              access to AWS resources without needing to write a single line of
              Terraform. Same-day AWS access (down from 1-2 weeks).
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              Built a{" "}
              <a
                href="https://sp23.cs161.org/proj2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                secure file sharing system
              </a>{" "}
              · 2023
            </div>
            <div className="experience-details">
              E2E encrypted file sharing with revocable access. Ranked 1st/650
              in CS 161.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              Worked at <span className="highlight">Salesforce</span> · 2022
            </div>
            <div className="experience-subtitle">SWE Intern</div>
            <div className="experience-details">
              Custom logic in MuleSoft Composer's condition cards
              (user-requested feature).
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              Won a hackathon award at{" "}
              <span className="highlight">Salesforce</span> · 2022
            </div>
            <div className="experience-details">
              CompoSearch: data lineage search for MuleSoft Composer. Find
              references to any data pill across flows.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              Co-founded Thought Processors · 2017–2020
            </div>
            <div className="experience-details">
              Cryptic hunt platform. 250+ users, 10k+ submissions.
            </div>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Publications">
        <ul className="experience-list">
          <li className="experience-item">
            <div className="experience-header">
              <a
                href="https://arxiv.org/abs/2303.08975"
                target="_blank"
                rel="noopener noreferrer"
              >
                HANDLOOM
              </a>{" "}
              · <span className="highlight">CoRL</span> 2023
            </div>
            <div className="experience-subtitle">
              Learned Tracing of One-Dimensional Objects for Inspection and
              Manipulation
            </div>
            <div className="experience-details">
              Research at{" "}
              <a
                href="https://bair.berkeley.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BAIR
              </a>{" "}
              . Novel crossing cancellation and correction algorithm for robotic
              cable untangling. Oral presentation at the 7th Conference on Robot
              Learning (CoRL).{" "}
              <a
                href="https://github.com/vainaviv/handloom"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              {" · "}
              <a
                href="https://sites.google.com/view/cable-tracing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site
              </a>
            </div>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Education">
        <div
          className="experience-item"
          style={{ border: "none", paddingBottom: 0, marginBottom: 0 }}
        >
          <div className="experience-header">
            BA Computer Science <span className="highlight">UC Berkeley</span> ·
            2020–2024
          </div>
          <div className="experience-subtitle">Summa Cum Laude · 4.0 GPA</div>
          <div className="experience-details">
            Security, Databases, OS, ML, AI.
          </div>
        </div>
      </CollapsibleSection>
    </>
  );
}

function LifeContent() {
  return (
    <>
      <CollapsibleSection title="Climbing" defaultOpen={false}>
        <div className="experience-details">
          Current maximum grade is V7 indoors. Working towards V10 indoors in
          2026.
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Playing">
        <ul className="experience-list">
          <li className="experience-item">
            <div className="experience-header">
              <a
                href="https://www.dailycal.org/archives/cal-cricket-wins-ncca-national-championship/article_85224cb2-3bbc-58e4-8961-92483859fdaf.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cricket
              </a>
            </div>
            <div className="experience-details">
              Vice captain of the UC Berkeley cricket team that won the NCCA
              nationals in 2023.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              <a
                href="https://gandalf.lakera.ai/leaderboard/password-reveal/gandalf-the-white-v1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gandalf the Eighth
              </a>
            </div>
            <div className="experience-details">
              24th person ever to finish level 8 (the then-final level) of the
              popular global prompt injection game.
            </div>
          </li>
          <li className="experience-item">
            <div className="experience-header">
              <a
                href="https://ctftime.org/ctf/1011/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sudocrypt v14.0
              </a>
            </div>
            <div className="experience-details">
              Placed 3rd at the international cryptic hunt and capture the flag
              (CTF) event.
            </div>
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Reading">
        <a
          href="https://www.goodreads.com/book/show/50523477-the-jasmine-throne"
          target="_blank"
          rel="noopener noreferrer"
          className="media-card"
        >
          <img
            src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1603885729i/50523477.jpg"
            alt="The Jasmine Throne"
            className="media-cover media-cover--book"
          />
          <div className="media-info">
            <span className="media-title">The Jasmine Throne</span>
            <span className="media-subtitle">Tasha Suri</span>
          </div>
        </a>
      </CollapsibleSection>

      <CollapsibleSection title="Watching">
        <a
          href="https://www.imdb.com/title/tt1690442/"
          target="_blank"
          rel="noopener noreferrer"
          className="media-card"
        >
          <img
            src="https://m.media-amazon.com/images/M/MV5BOTM4MjI3NGMtYjM1MS00N2JhLWFhYmItNjk1NjU3OTIxNzM1XkEyXkFqcGc@._V1_.jpg"
            alt="Ashita no Joe (S2)"
            className="media-cover media-cover--poster"
          />
          <div className="media-info">
            <span className="media-title">Ashita no Joe (S2)</span>
            <span className="media-subtitle">1981 · Anime</span>
          </div>
        </a>
      </CollapsibleSection>

      <CollapsibleSection title="Listening">
        <a
          href="https://open.spotify.com/track/1ifI8ipBJreNmLDYigFc6d"
          target="_blank"
          rel="noopener noreferrer"
          className="media-card"
        >
          <img
            src="https://i.scdn.co/image/ab67616d00001e02a501eb791db6baaa2c4deab8"
            alt="Dhurandhar"
            className="media-cover"
          />
          <div className="media-info">
            <span className="media-title">Dhurandhar - Title Track</span>
            <span className="media-subtitle">
              Shashwat Sachdev, Hanumankind
            </span>
          </div>
        </a>
      </CollapsibleSection>
    </>
  );
}

export default Home;
