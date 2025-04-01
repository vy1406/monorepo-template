import base from 'private-configs';

export default [
  ...base,
  {
    files: ['src/special/**'],
    rules: {
      'no-console': 'off',
      'no-debugger': 'error'
    }
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react/jsx-uses-react': 'error'
    }
  }
];