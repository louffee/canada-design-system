module.exports = {
  stories: ['../stories/**/*.stories.@(mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
}
