import React from "react";

const filters = ["All", "Frontend", "Backend", "Full Stack", "DSA"];

const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }

        .filter-button {
          position: relative;
          padding: 0.75rem 1.75rem;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.025em;
          transition: all 0.3s ease-out;
          overflow: hidden;
          cursor: pointer;
          border: none;
          outline: none;
        }

        .filter-button:hover {
          transform: translateY(-4px);
        }

        .filter-button:focus {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }

        .filter-button::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: linear-gradient(to right, #4f46e5, #9333ea, #ec4899);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .filter-button:not(.active):hover::before {
          opacity: 0.1;
        }

        .filter-button.active {
          background: linear-gradient(to right, #4f46e5, #7c3aed, #4f46e5);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4);
          border: 2px solid #818cf8;
        }

        .filter-button.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 2rem;
          height: 4px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 9999px;
        }

        .filter-button:not(.active) {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          color: #374151;
          border: 2px solid #e5e7eb;
        }

        .filter-button:not(.active):hover {
          border-color: #a5b4fc;
          background: rgba(238, 242, 255, 0.8);
          color: #4338ca;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
        }

        .button-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-icon {
          width: 1rem;
          height: 1rem;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
        }
      `}</style>

      <div className="flex gap-3 flex-wrap justify-center py-10 px-4">
        {filters.map((filter, index) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
            className={`filter-button animate-fade-in-up ${
              activeFilter === filter ? "active" : ""
            }`}
          >
            <span className="button-content">
              {filter === "All" && (
                <svg className="filter-icon" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              )}
              {filter === "Frontend" && (
                <svg className="filter-icon" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              )}
              {filter === "Backend" && (
                <svg className="filter-icon" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              )}
              {filter === "Full Stack" && (
                <svg className="filter-icon" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              )}
              {filter === "DSA" && (
                <svg className="filter-icon" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              )}
              {filter}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default ProjectFilters;
