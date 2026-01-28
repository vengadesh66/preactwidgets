const esbuild = require("esbuild");

Promise.all([
  esbuild.build({
    entryPoints: ["src/calendar/widget.js"],
    bundle: true,
    minify: true,
    outfile: "dist/calendar/app.js",
    format: "iife",
    target: ["es2017"],
    loader: { '.js': 'jsx' }
  }),
  esbuild.build({
    entryPoints: ["src/signup/widget.js"],
    bundle: true,
    minify: true,
    outfile: "dist/signup/app.js",
    format: "iife",
    target: ["es2017"],
    loader: { '.js': 'jsx' }
  })
]).catch(() => process.exit(1));
