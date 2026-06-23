import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload } from "react-icons/fi";

export default function CVModal({ isOpen, onClose }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDownload = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(6px)",
              zIndex: 1000,
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1001,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "860px",
                height: "90vh",
                background: "var(--bg-card, #1a1a2e)",
                borderRadius: "18px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
                pointerEvents: "all",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary, #f0ede8)",
                  }}
                >
                  Emmanuel Udofot — CV
                </span>

                <div
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    alignItems: "center",
                  }}
                >
                  {/*
                  <button
                    onClick={handleDownload}
                    className="btn-outline"
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.4rem 0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      cursor: "pointer",
                    }}
                  >
                    <FiDownload size={13} /> Download PDF
                  </button>
                  */}
                  <button
                    onClick={onClose}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "var(--text-secondary, #888)",
                      cursor: "pointer",
                      padding: "0.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.12)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.06)")
                    }
                  >
                    <FiX size={16} />
                  </button>
                </div>
              </div>

              {/* CV Viewer */}
              <iframe
                ref={iframeRef}
                src="/cv.html"
                title="Emmanuel Udofot CV"
                style={{
                  flex: 1,
                  width: "100%",
                  border: "none",
                  background: "#ffffff",
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
