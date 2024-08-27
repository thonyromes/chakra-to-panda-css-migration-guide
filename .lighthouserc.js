module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm run web:dev",
      startServerReadyPattern: "ready on",
      url: [
        "http://localhost:3000/chakra-components",
        "http://localhost:3000/panda-components",
      ],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.8 }],
        "categories:best-practices": ["error", { minScore: 0.8 }],
        "categories:seo": ["error", { minScore: 0.8 }],
      },
    },
    upload: {
      // Set to 'filesystem' to save reports locally
      target: "filesystem",
      outputDir: "./lhci-reports",
    },
  },
};
