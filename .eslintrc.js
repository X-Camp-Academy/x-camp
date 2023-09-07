module.exports = {
    root: true,
    "extends": ["next/core-web-vitals", require.resolve('./src/rules')],
    "rules": {
        "@next/next/no-img-element": "off",
    }
}
