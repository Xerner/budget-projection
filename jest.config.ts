import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const esModules = ['@angular' ];

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|js|mjs|html)$': 'jest-preset-angular'
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" }),
  transformIgnorePatterns: [
    `node_modules/(?!.*\\.mjs$|${esModules.join('|')})`,
  ],
};

export default config;
