import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload } from "react-icons/fi";

export default function CVModal({ isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
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

          {/* Modal */}
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-primary, #f0ede8)",
                    }}
                  >
                    Emmanuel Udofot — CV
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="/cv.pdf"
                    download
                    className="btn-outline"
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.4rem 0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <FiDownload size={13} /> Download
                  </a>
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

              {/* PDF Viewer */}
              <iframe
                src="/cv.pdf"
                title="Emmanuel Udofot CV"
                style={{
                  flex: 1,
                  width: "100%",
                  border: "none",
                  background: "#fff",
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
