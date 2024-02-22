module.exports = {
    output: "export",
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
