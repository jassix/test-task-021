const {
    configure,
    presets
} = require("eslint-kit");

module.exports = configure({
    allowDebug: process.env.NODE_ENV !== "production",

    presets: [
        presets.imports({
            sort: {
                newline: true,
                groups: [
                    ['^\\u0000'],
                    ['^(child_process|crypto|events|fs|http|https|os|path)(/.*)?$', '^@?\\w'],
                    ['^@/app', '^@/stores', '^@/components/pages', '^@/components/templates', '^@/components/organisms', '^@/components/molecules', '^@/components/atoms', '^~', '^'],
                    ['^\\.'],
                ]
              },
        }),
        presets.node(),
        presets.prettier(),
        presets.typescript({
            tsconfig: 'tsconfig.app.json'
        }),
        presets.vue()
    ],

    extend: {
        rules: {
            'vue/multi-word-component-names': 'off'
        }
    }
});