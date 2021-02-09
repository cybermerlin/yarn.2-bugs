declare module '@lerna/project' {
  interface Package {
    name: string;
    location: string;
  }
  async function getPackages(cwd: string): Promise<Package[]>;
  function getPackagesSync(cwd: string): Package[];
}
