module.exports = {

"[project]/postcss.config.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/** @type {import('postcss-load-config').Config} */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const config = {
    plugins: {
        tailwindcss: {}
    }
};
const __TURBOPACK__default__export__ = config;
}}),
"[externals]/ [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path");

module.exports = mod;
}}),
"[project]/postcss.config.mjs/transform.ts { CONFIG => \"[project]/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>transform),
    "init": (()=>init)
});
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/postcss.config.mjs [postcss] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (path, cjs)");
;
;
;
const contextDir = process.cwd();
function toPath(file) {
    const relPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["relative"])(contextDir, file);
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== "/" ? relPath.replaceAll(__TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"], "/") : relPath;
}
let processor;
const init = async (ipc)=>{
    let config = __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
    if (typeof config === "function") {
        config = await config({
            env: "development"
        });
    }
    if (typeof config === "undefined") {
        throw new Error("PostCSS config is undefined (make sure to export an function or object from config file)");
    }
    let plugins;
    if (Array.isArray(config.plugins)) {
        plugins = config.plugins.map((plugin)=>{
            if (Array.isArray(plugin)) {
                return plugin;
            } else if (typeof plugin === "string") {
                return [
                    plugin,
                    {}
                ];
            } else {
                return plugin;
            }
        });
    } else if (typeof config.plugins === "object") {
        plugins = Object.entries(config.plugins).filter(([, options])=>options);
    } else {
        plugins = [];
    }
    const loadedPlugins = plugins.map((plugin)=>{
        if (Array.isArray(plugin)) {
            const [arg, options] = plugin;
            let pluginFactory = arg;
            if (typeof pluginFactory === "string") {
                pluginFactory = __turbopack_external_require__(pluginFactory);
            }
            if (pluginFactory.default) {
                pluginFactory = pluginFactory.default;
            }
            return pluginFactory(options);
        }
        return plugin;
    });
    processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"])(loadedPlugins);
};
async function transform(ipc, cssContent, name) {
    const { css, map, messages } = await processor.process(cssContent, {
        from: name,
        to: name,
        map: {
            inline: false,
            annotation: false
        }
    });
    const assets = [];
    for (const msg of messages){
        switch(msg.type){
            case "asset":
                assets.push({
                    file: msg.file,
                    content: msg.content,
                    sourceMap: typeof msg.sourceMap === "string" ? msg.sourceMap : JSON.stringify(msg.sourceMap)
                });
                break;
            case "file-dependency":
            case "missing-dependency":
                ipc.sendInfo({
                    type: "fileDependency",
                    path: toPath(msg.file)
                });
                break;
            case "build-dependency":
                ipc.sendInfo({
                    type: "buildDependency",
                    path: toPath(msg.file)
                });
                break;
            case "dir-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.dir),
                    glob: msg.glob
                });
                break;
            case "context-dependency":
                ipc.sendInfo({
                    type: "dirDependency",
                    path: toPath(msg.file),
                    glob: "**"
                });
                break;
            default:
                break;
        }
    }
    return {
        css,
        map: JSON.stringify(map),
        assets
    };
}
}}),
"[project]/node_modules/postcss/lib/postcss.js [postcss] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
let AtRule = __turbopack_require__("[project]/node_modules/postcss/lib/at-rule.js [postcss] (ecmascript)");
let Comment = __turbopack_require__("[project]/node_modules/postcss/lib/comment.js [postcss] (ecmascript)");
let Container = __turbopack_require__("[project]/node_modules/postcss/lib/container.js [postcss] (ecmascript)");
let CssSyntaxError = __turbopack_require__("[project]/node_modules/postcss/lib/css-syntax-error.js [postcss] (ecmascript)");
let Declaration = __turbopack_require__("[project]/node_modules/postcss/lib/declaration.js [postcss] (ecmascript)");
let Document = __turbopack_require__("[project]/node_modules/postcss/lib/document.js [postcss] (ecmascript)");
let fromJSON = __turbopack_require__("[project]/node_modules/postcss/lib/fromJSON.js [postcss] (ecmascript)");
let Input = __turbopack_require__("[project]/node_modules/postcss/lib/input.js [postcss] (ecmascript)");
let LazyResult = __turbopack_require__("[project]/node_modules/postcss/lib/lazy-result.js [postcss] (ecmascript)");
let list = __turbopack_require__("[project]/node_modules/postcss/lib/list.js [postcss] (ecmascript)");
let Node = __turbopack_require__("[project]/node_modules/postcss/lib/node.js [postcss] (ecmascript)");
let parse = __turbopack_require__("[project]/node_modules/postcss/lib/parse.js [postcss] (ecmascript)");
let Processor = __turbopack_require__("[project]/node_modules/postcss/lib/processor.js [postcss] (ecmascript)");
let Result = __turbopack_require__("[project]/node_modules/postcss/lib/result.js [postcss] (ecmascript)");
let Root = __turbopack_require__("[project]/node_modules/postcss/lib/root.js [postcss] (ecmascript)");
let Rule = __turbopack_require__("[project]/node_modules/postcss/lib/rule.js [postcss] (ecmascript)");
let stringify = __turbopack_require__("[project]/node_modules/postcss/lib/stringify.js [postcss] (ecmascript)");
let Warning = __turbopack_require__("[project]/node_modules/postcss/lib/warning.js [postcss] (ecmascript)");
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
    }
    return new Processor(plugins);
}
postcss.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        // eslint-disable-next-line no-console
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            // eslint-disable-next-line no-console
            console.warn(name + ': postcss.plugin was deprecated. Migration guide:\n' + 'https://evilmartians.com/chronicles/postcss-8-plugin-migration');
            if (process.env.LANG && process.env.LANG.startsWith('cn')) {
                /* c8 ignore next 7 */ // eslint-disable-next-line no-console
                console.warn(name + ': 里面 postcss.plugin 被弃用. 迁移指南:\n' + 'https://www.w3ctech.com/topic/2226');
            }
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, 'postcss', {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment(defaults);
postcss.atRule = (defaults)=>new AtRule(defaults);
postcss.decl = (defaults)=>new Declaration(defaults);
postcss.rule = (defaults)=>new Rule(defaults);
postcss.root = (defaults)=>new Root(defaults);
postcss.document = (defaults)=>new Document(defaults);
postcss.CssSyntaxError = CssSyntaxError;
postcss.Declaration = Declaration;
postcss.Container = Container;
postcss.Processor = Processor;
postcss.Document = Document;
postcss.Comment = Comment;
postcss.Warning = Warning;
postcss.AtRule = AtRule;
postcss.Result = Result;
postcss.Input = Input;
postcss.Rule = Rule;
postcss.Root = Root;
postcss.Node = Node;
LazyResult.registerPostcss(postcss);
module.exports = postcss;
postcss.default = postcss;
}}),
"[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "AtRule": (()=>AtRule),
    "Comment": (()=>Comment),
    "Container": (()=>Container),
    "CssSyntaxError": (()=>CssSyntaxError),
    "Declaration": (()=>Declaration),
    "Document": (()=>Document),
    "Input": (()=>Input),
    "Node": (()=>Node),
    "Processor": (()=>Processor),
    "Result": (()=>Result),
    "Root": (()=>Root),
    "Rule": (()=>Rule),
    "Warning": (()=>Warning),
    "atRule": (()=>atRule),
    "comment": (()=>comment),
    "decl": (()=>decl),
    "default": (()=>__TURBOPACK__default__export__),
    "document": (()=>document),
    "fromJSON": (()=>fromJSON),
    "list": (()=>list),
    "parse": (()=>parse),
    "plugin": (()=>plugin),
    "root": (()=>root),
    "rule": (()=>rule),
    "stringify": (()=>stringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/postcss/lib/postcss.js [postcss] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
const stringify = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].stringify;
const fromJSON = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].fromJSON;
const plugin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].plugin;
const parse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].parse;
const list = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].list;
const document = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].document;
const comment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].comment;
const atRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].atRule;
const rule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].rule;
const decl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].decl;
const root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].root;
const CssSyntaxError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].CssSyntaxError;
const Declaration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Declaration;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Container;
const Processor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Processor;
const Document = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Document;
const Comment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Comment;
const Warning = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Warning;
const AtRule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].AtRule;
const Result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Result;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Input;
const Rule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Rule;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Root;
const Node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$js__$5b$postcss$5d$__$28$ecmascript$29$__["default"].Node;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b8f660._.js.map