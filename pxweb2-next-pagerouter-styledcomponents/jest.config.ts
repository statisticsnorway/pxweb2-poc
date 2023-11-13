/* eslint-disable */
export default {
  displayName: 'pxweb2-next-pagerouter-styledcomponents',
  preset: '../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../coverage/pxweb2-next-pagerouter-styledcomponents',
};
