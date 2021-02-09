module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', '@typescript-eslint', 'react-hooks', 'deprecate'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/standard',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'no-undef': 0,
        'no-unused-vars': 1,
        '@typescript-eslint/no-unused-vars': 2,
        'deprecate/member-expression': [
          'warn',
          {
            name: 'JSON.parse',
            use: 'safeJSONParse from @pcbl/utils',
          },
        ],
        'no-restricted-imports': [
          'warn',
          {
            paths: [
              {
                name: 'gql/QueryTypes',
                message:
                  "Не используйте написанные руками типы. Теперь типы генерируются динамически в модуле '@pcbl/gql'!",
              },
              {
                name: 'edu/src/gql/QueryTypes',
                message:
                  "Не используйте написанные руками типы. Теперь типы генерируются динамически в модуле '@pcbl/gql'!",
              },
              {
                name: 'edu/src/gql/interfaces',
                message: "Теперь типы генерируются в модуле '@pcbl/gql'!",
              },
              {
                name: 'gql/interfaces',
                message: "Теперь типы генерируются в модуле '@pcbl/gql'!",
              },
              {
                name: '@pcbl/gql/interfaces',
                message: "Теперь типы генерируются в модуле '@pcbl/gql' (без '/interfaces')!",
              },
              {
                name: 'configs/view',
                message:
                  "Не используйте устаревшие точки переходов. Теперь актуальные брэкпоинты лежат в теме: '${({ theme }): FlattenSimpleInterpolation => theme.layout.grid.breakpoints.lg'!",
              },
              {
                name: 'edu/src/configs/view',
                message:
                  "Не используйте устаревшие точки переходов. Теперь актуальные брэкпоинты лежат в теме: '${({ theme }): FlattenSimpleInterpolation => theme.layout.grid.breakpoints.lg'!",
              },
              {
                name: '@pcbl-ui/input',
                message: "Компонент устарел. Используйте актуальную версию '@pcbl-ui-v3/textfield'!",
              },
              {
                name: '@pcbl-ui/text',
                message: "Компонент устарел. Используйте '@pcbl-ui/typography'!",
              },
              {
                name: 'utils/declOfNum',
                message: 'Функция не актуальна. Вместо нее используйте react-intl, примеры есть в BEST-PRACTICES.md',
              },
              {
                name: 'shared/utils/pluralize',
                message: 'Функция не актуальна. Вместо нее используйте react-intl, примеры есть в BEST-PRACTICES.md',
              },
              {
                name: '@pcbl-ui/configs',
                message:
                  'Цвет не актуальны. Используйте цвета из темы (можно посмотреть в палитре storybook), примеры есть в CODE-CONVENTION.md',
              },
              {
                name: '@pcbl-ui/comfirmationmodal',
                message: 'Компонент не актуален. Используйте @pcbl-ui-v3/dialog, внутри есть пресет ConfirmationDialog',
              },
              {
                name: '@pcbl-ui/modal',
                message: 'Компонент не актуален. Используйте @pcbl-ui-v3/dialog',
              },
              {
                name: '@pcbl-ui/dialog',
                message: 'Компонент не актуален. Используйте @pcbl-ui-v3/dialog',
              },
              {
                name: '@pcbl-ui/uikit-link',
                message: 'Компонент не актуален. Используйте @pcbl-ui-v3/uikitlink',
              },
              {
                name: '@pcbl-ui/text',
                message: 'Компонент устарел. Испульзуйте @pcbl-ui/typography',
              },
              {
                name: '@pcbl-ui/table',
                message: 'Компонент устарел. Испульзуйте @pcbl-ui-v2/table',
              },
            ],
            // Правила запрета импортов конкретных айлов из пакетов
            // все файлы которые должны быть доступны из-вне пакета - должны экспортиться из index.ts/tsx файла
            patterns: ['@pcbl/*/*', '@pcbl-widgets/*/*', '@pcbl-ui*/*/*'],
          },
        ],
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        ],
      },
    },
    {
      files: ['**/*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/ban-types': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],
    'consistent-return': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': [
      2,
      {
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        printWidth: 120,
        trailingComma: 'all',
        proseWrap: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    curly: 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-continue': 'warn',
  },
};
