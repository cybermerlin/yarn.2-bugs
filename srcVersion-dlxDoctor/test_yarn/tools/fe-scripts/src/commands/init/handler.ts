import spawn from 'spawndamnit';

const isCI = !!process.env.BUILD_NUMBER;

export default async () => {
  if (isCI) {
    await spawn('pcbl', ['generate', 'solution-config'], { stdio: 'inherit' });
  } else {
    await spawn('yarn', ['init:development'], { stdio: 'inherit' });
  }
};
