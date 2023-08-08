module.exports = ({ config }) => {
  return {
    project: {
      ios: {},
      android: {},
    },
    ...config,
    assets: ['./src/assets/fonts'],
  }
}
