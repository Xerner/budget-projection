import type { Config } from 'jest';

const esModules = ['@angular' ];

const config: Config = {
  preset: 'ts-jest',
  // preset: 'jest-preset-angular',
  transform: {
    // '^.+\\.ts$': 'ts-jest',
    // "^.+\\.js$": "babel-jest",
    '^.+\\.(ts|js|mjs|html)$': 'jest-preset-angular'
  },
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: [
    // "/node_modules/(?!(@angular/core)/)",
    `node_modules/(?!.*\\.mjs$|${esModules.join('|')})`,
  ],
  // fakeTimers: {
  //   enableGlobally: true,
  // },
};

export default config;
