// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// This is needed for Metro to resolve files with the .cjs extension.
// It's a common requirement for some packages.
config.resolver.sourceExts.push('cjs');

module.exports = config;
