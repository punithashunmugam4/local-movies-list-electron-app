module.exports = {
  makers: [
    {
      name: "@electron-forge/maker-squirrel", // Creates a standard Windows installer
      config: {
        authors: "Punitha",
        description: "A brief description of your movie list app",
        name: "local_movies_list",
      },
    },
    {
      name: "@electron-forge/maker-zip", // Creates a portable .zip distributable
      platforms: ["win32"],
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "punithashunmugam4",
          name: "local-movies-list-electron-app",
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
};
