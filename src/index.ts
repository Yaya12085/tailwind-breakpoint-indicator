import plugin from "tailwindcss/plugin";

interface PluginOptions {
  indicatorPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  indicatorBackground?: string;
  indicatorColor?: string;
  showInProduction?: boolean;
}

const defaultOptions: Required<PluginOptions> = {
  indicatorPosition: "bottom-right",
  indicatorBackground: "rgba(0, 0, 0, 0.8)",
  indicatorColor: "white",
  showInProduction: false,
};

export = plugin.withOptions<PluginOptions>(
  (options = {}) => {
    const finalOptions: Required<PluginOptions> = {
      ...defaultOptions,
      ...options,
    };

    return ({ addBase, theme }) => {
      const screens = theme("screens", {}) as Record<string, string>;

      const positionClasses = {
        "top-left": {
          top: "1rem",
          left: "1rem",
        },
        "top-right": {
          top: "1rem",
          right: "1rem",
        },
        "bottom-left": {
          bottom: "1rem",
          left: "1rem",
        },
        "bottom-right": {
          bottom: "1rem",
          right: "1rem",
        },
      };

      // Add the base styles for the indicator
      addBase({
        ".breakpoint-indicator": {
          position: "fixed",
          zIndex: "9999",
          backgroundColor: finalOptions.indicatorBackground,
          color: finalOptions.indicatorColor,
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          fontSize: "0.875rem",
          fontWeight: "500",
          ...positionClasses[finalOptions.indicatorPosition],
          display: finalOptions.showInProduction ? "block" : "none",
          "@media (min-width: 1px)": {
            display:
              process.env.NODE_ENV === "production" && !finalOptions.showInProduction
                ? "none"
                : "block",
          },
          "&::before": {
            content: '"default"',
          },
        },
      });

      // Add responsive variants for each breakpoint
      Object.entries(screens).forEach(([breakpoint]) => {
        addBase({
          [`@screen ${breakpoint}`]: {
            ".breakpoint-indicator::before": {
              content: `"${breakpoint}"`,
            },
          },
        });
      });
    };
  },
  () => ({
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  })
);
