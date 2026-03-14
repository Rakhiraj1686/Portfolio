import React from "react";

const shellBackground = {
  background:
    "radial-gradient(circle at top left, rgba(216, 164, 255, 0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(244, 114, 182, 0.16), transparent 32%), linear-gradient(135deg, rgba(14, 8, 18, 0.98) 0%, rgba(36, 11, 31, 0.96) 42%, rgba(63, 19, 52, 0.92) 100%)",
  borderColor: "rgba(255, 214, 224, 0.12)",
  boxShadow: "0 28px 70px rgba(5, 3, 7, 0.62)",
};

const PageShell = ({ eyebrow = "Portfolio Section", title, description, children }) => {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-12 text-(--color-text)">
      <div
        className="max-w-5xl mx-auto rounded-[28px] border p-6 sm:p-10 backdrop-blur-md overflow-hidden"
        style={shellBackground}
      >
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-pink-200/70">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            {title}
          </h1>
          {description ? (
            <p className="text-base sm:text-lg leading-8 mt-5 text-pink-100/80">
              {description}
            </p>
          ) : null}
        </div>

        {children ? <div className="mt-8 sm:mt-10">{children}</div> : null}
      </div>
    </div>
  );
};

export default PageShell;