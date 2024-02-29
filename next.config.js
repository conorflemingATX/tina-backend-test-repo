const output =
    process.env["NODE_ENV"] === "production"
        ? "export"
        : process.env["NODE_ENV"] === "staging"
            ? "standalone"
            : null;

module.exports = {
    output,
    images: { unoptimized: true },
    async rewrites() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
            },
        ]
    },
}
