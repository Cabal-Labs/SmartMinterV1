"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./componets/secondStage.js":
/*!**********************************!*\
  !*** ./componets/secondStage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SecondStage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/smart-minter2.module.css */ \"./styles/smart-minter2.module.css\");\n/* harmony import */ var _styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nft.storage */ \"./node_modules/nft.storage/src/lib.js\");\n/* harmony import */ var _imagesC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagesC */ \"./componets/imagesC.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SecondStage(param) {\n    let { mintPercent , setMintPercent , setLoading , abi , contractAdd , setStageNumber , stageNumber , setContractDeployed , setLastStage , setAlreadySet , alreadySet , counter , setCounter , setMainImages , mainImages , handleImages , nft , setNft , images , setImages , setInfoNFT , infoNFT , setReadyForInfo  } = param;\n    _s();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const [allSet, setAllSet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!alreadySet) {\n            let a = [];\n            for(let i = 0; i < images.length; i++){\n                a[i] = {\n                    name: \"\",\n                    description: \"\",\n                    image: images[i],\n                    attributes: [],\n                    filled: false,\n                    id: i\n                };\n            }\n            setNft(a);\n            setAlreadySet(true);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        for(let i = 0; i < nft.length; i++){\n            if (!nft[i].filled) return;\n        }\n        setAllSet(true);\n    }, []);\n    function increasePer(len, b) {\n        let sum = 100 / len;\n        let c = b + sum;\n        setMintPercent(c);\n        return c;\n    }\n    async function genMetadata() {\n        let uris = [];\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n        const signer = provider.getSigner();\n        setLoading(true);\n        const client = new nft_storage__WEBPACK_IMPORTED_MODULE_2__.NFTStorage({\n            token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERBOTVjZjgwNDBiNjY3YkI2OEEyQTBBMzVkNTg2MzNCNUE5RUNiNjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2NTI5ODU2OTQ1MCwibmFtZSI6IlRBUC1pbyJ9.z9GLxsO_7yR0au1d2kFscS477QrHOuJLMFnQQudVOUI\"\n        });\n        let a = 100 / nft.length;\n        let b = 0;\n        for(let i = 0; i < nft.length; i++){\n            await client.store({\n                image: new nft_storage__WEBPACK_IMPORTED_MODULE_2__.File([\n                    nft[i].image\n                ], \"\".concat(nft[i].name, \".jpg\"), {\n                    type: \"image/jpg\"\n                }),\n                name: nft[i].name,\n                description: nft[i].description,\n                attributes: nft[i].attributes\n            }).then(async (metadata)=>{\n                let metadataArray = metadata.url.split(\"/\");\n                console.log(\"https://\".concat(metadataArray[2], \".ipfs.w3s.link/\").concat(metadataArray[3]));\n                uris.push(\"https://\".concat(metadataArray[2], \".ipfs.w3s.link/\").concat(metadataArray[3]));\n            });\n            b = increasePer(nft.length, b);\n        }\n        try {\n            let _contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAdd, abi, signer);\n            const mint = await _contract.safeMint(uris);\n            console.log(\"metadata saved: \", mint.hash);\n        } catch (e) {\n            console.log(e);\n            setLoading(false);\n        }\n    }\n    async function end() {\n        await genMetadata();\n        setLoading(false);\n        if (allSet && isConnected) {\n            setContractDeployed(false);\n            setLastStage(true);\n            setStageNumber(3);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default().middle),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"images-sq\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_imagesC__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        mainImages: mainImages,\n                        handleImages: handleImages,\n                        counter: counter,\n                        setCounter: setCounter,\n                        setMainImages: setMainImages,\n                        setReadyForInfo: setReadyForInfo,\n                        infoNFT: infoNFT,\n                        setInfoNFT: setInfoNFT,\n                        images: images,\n                        setImages: setImages,\n                        nft: nft,\n                        setNft: setNft,\n                        setStageNumber: setStageNumber,\n                        stageNumber: stageNumber\n                    }, void 0, false, {\n                        fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/componets/secondStage.js\",\n                        lineNumber: 104,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/componets/secondStage.js\",\n                    lineNumber: 103,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/componets/secondStage.js\",\n                lineNumber: 102,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"minter-buttom\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>{\n                        end();\n                    },\n                    className: allSet && isConnected ? (_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttom) : (_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"buttom-disabled\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: allSet && isConnected ? (_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default().text12) : (_styles_smart_minter2_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"text12-disabled\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Continue\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/componets/secondStage.js\",\n                            lineNumber: 125,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/componets/secondStage.js\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/componets/secondStage.js\",\n                    lineNumber: 123,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mast/Projects/CabalLabs2022/SmartMinterV1/componets/secondStage.js\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SecondStage, \"p4qPyFzTuwh6Tv8SF8gxyenh+rc=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = SecondStage;\nvar _c;\n$RefreshReg$(_c, \"SecondStage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBSUMsV0FBVy9FLDBGQUF1QjswQkFDakMsNEVBQUM4RTtvQkFBSUUsU0FBVSxJQUFNO3dCQUFDSDtvQkFBSztvQkFBSUUsV0FBVyxVQUFXOUMsY0FBZWpDLGdGQUFnQixHQUFHQSw0RkFBeUI7OEJBQzlHLDRFQUFDaUY7d0JBQUtGLFdBQVcsVUFBVzlDLGNBQWVqQyxnRkFBZ0IsR0FBR0EsNEZBQXlCO2tDQUNyRiw0RUFBQ2lGO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QixDQUFDO0dBMUh1QnpFOztRQUNXSCw2Q0FBVUE7OztLQURyQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZXRzL3NlY29uZFN0YWdlLmpzPzhkMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi9zdHlsZXMvc21hcnQtbWludGVyMi5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtldGhlcnN9IGZyb20gXCJldGhlcnNcIlxuaW1wb3J0IHsgTkZUU3RvcmFnZSwgRmlsZSB9IGZyb20gXCJuZnQuc3RvcmFnZVwiO1xuaW1wb3J0IEltYWdlc0MgZnJvbSBcIi4vaW1hZ2VzQ1wiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29ubmVjdCwgdXNlRGlzY29ubmVjdCB9IGZyb20gJ3dhZ21pJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY29uZFN0YWdlKHsgbWludFBlcmNlbnQsIHNldE1pbnRQZXJjZW50LHNldExvYWRpbmcsYWJpLCBjb250cmFjdEFkZCwgc2V0U3RhZ2VOdW1iZXIsIHN0YWdlTnVtYmVyICxzZXRDb250cmFjdERlcGxveWVkLCBzZXRMYXN0U3RhZ2UsIHNldEFscmVhZHlTZXQsYWxyZWFkeVNldCxjb3VudGVyLCBzZXRDb3VudGVyLHNldE1haW5JbWFnZXMsbWFpbkltYWdlcyxoYW5kbGVJbWFnZXMsbmZ0LHNldE5mdCxpbWFnZXMsIHNldEltYWdlcywgc2V0SW5mb05GVCwgaW5mb05GVCwgc2V0UmVhZHlGb3JJbmZvfSkge1xuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KClcbiAgY29uc3QgW2FsbFNldCwgc2V0QWxsU2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZighYWxyZWFkeVNldCkge1xuICAgICAgbGV0IGEgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrICl7XG4gICAgICAgIGFbaV0gPSB7XG4gICAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXG4gICAgICAgICAgaW1hZ2U6aW1hZ2VzW2ldLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IFtdLFxuICAgICAgICAgIGZpbGxlZDogZmFsc2UsXG4gICAgICAgICAgaWQ6aVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXROZnQoYSlcbiAgICAgIHNldEFscmVhZHlTZXQodHJ1ZSlcbiAgICB9XG4gIH0sW10pXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5mdC5sZW5ndGg7IGkrKyl7XG4gICAgICBpZighbmZ0W2ldLmZpbGxlZCkgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRBbGxTZXQodHJ1ZSlcbiAgfSxbXSlcblxuICBmdW5jdGlvbiBpbmNyZWFzZVBlcihsZW4sYikge1xuICAgIGxldCBzdW0gPSAxMDAvbGVuXG4gICAgbGV0IGMgPSBiICsgc3VtXG4gICAgc2V0TWludFBlcmNlbnQoYylcbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdlbk1ldGFkYXRhKCkgeyAgXG5cbiAgICBsZXQgdXJpcyA9IFtdXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgTkZUU3RvcmFnZSh7XG4gICAgICB0b2tlbjogXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUprYVdRNlpYUm9jam93ZUVSQk9UVmpaamd3TkRCaU5qWTNZa0kyT0VFeVFUQkJNelZrTlRnMk16TkNOVUU1UlVOaU5qQWlMQ0pwYzNNaU9pSnVablF0YzNSdmNtRm5aU0lzSW1saGRDSTZNVFkyTlRJNU9EVTJPVFExTUN3aWJtRnRaU0k2SWxSQlVDMXBieUo5Lno5R0x4c09fN3lSMGF1MWQya0ZzY1M0NzdRckhPdUpMTUZuUVF1ZFZPVUlcIixcbiAgICB9KTtcbiAgICBsZXQgYSA9ICgxMDAvbmZ0Lmxlbmd0aClcbiAgICBsZXQgYiA9IDBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbmZ0Lmxlbmd0aDsgaSsrKXsgICBcblxuICAgICAgICBhd2FpdCBjbGllbnRcbiAgICAgICAgLnN0b3JlKHtcbiAgICAgICAgICBpbWFnZTogbmV3IEZpbGUoW25mdFtpXS5pbWFnZV0sIGAke25mdFtpXS5uYW1lfS5qcGdgLCB7IHR5cGU6ICdpbWFnZS9qcGcnIH0pLFxuICAgICAgICAgIG5hbWU6IG5mdFtpXS5uYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBuZnRbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgYXR0cmlidXRlczogbmZ0W2ldLmF0dHJpYnV0ZXNcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgKG1ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgbGV0IG1ldGFkYXRhQXJyYXkgPSBtZXRhZGF0YS51cmwuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBodHRwczovLyR7bWV0YWRhdGFBcnJheVsyXX0uaXBmcy53M3MubGluay8ke21ldGFkYXRhQXJyYXlbM119YClcbiAgICAgICAgICB1cmlzLnB1c2goYGh0dHBzOi8vJHttZXRhZGF0YUFycmF5WzJdfS5pcGZzLnczcy5saW5rLyR7bWV0YWRhdGFBcnJheVszXX1gKVxuICAgICAgICB9KTtcbiAgICAgICAgYiA9IGluY3JlYXNlUGVyKG5mdC5sZW5ndGgsIGIpXG4gICAgICB9XG5cbiAgICAgIHRyeXtcbiAgICAgICAgbGV0IF9jb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICAgICAgY29udHJhY3RBZGQsXG4gICAgICAgICAgYWJpLFxuICAgICAgICAgIHNpZ25lclxuICAgICAgICApOyAgXG4gICAgICAgIGNvbnN0IG1pbnQgPSBhd2FpdCBfY29udHJhY3Quc2FmZU1pbnQodXJpcyk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIm1ldGFkYXRhIHNhdmVkOiBcIiwgbWludC5oYXNoKTtcbiAgICAgIH1jYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH1cblxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZW5kKCkge1xuICAgIFxuICAgIGF3YWl0IGdlbk1ldGFkYXRhKCk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICBpZihhbGxTZXQgJiYgaXNDb25uZWN0ZWQgKXtcbiAgICAgIHNldENvbnRyYWN0RGVwbG95ZWQoZmFsc2UpXG4gICAgICBzZXRMYXN0U3RhZ2UodHJ1ZSlcbiAgICAgIHNldFN0YWdlTnVtYmVyKDMpXG4gICAgfVxuICB9XG4gXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ21pZGRsZSddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ltYWdlcy1zcSddfT5cbiAgICAgICAgICAgICAgPEltYWdlc0MgXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlcz17bWFpbkltYWdlc30gXG4gICAgICAgICAgICAgICAgaGFuZGxlSW1hZ2VzPXtoYW5kbGVJbWFnZXN9XG4gICAgICAgICAgICAgICAgY291bnRlcj17Y291bnRlcn0gXG4gICAgICAgICAgICAgICAgc2V0Q291bnRlcj17c2V0Q291bnRlcn0gXG4gICAgICAgICAgICAgICAgc2V0TWFpbkltYWdlcz17c2V0TWFpbkltYWdlc30gXG4gICAgICAgICAgICAgICAgc2V0UmVhZHlGb3JJbmZvPXtzZXRSZWFkeUZvckluZm99IFxuICAgICAgICAgICAgICAgIGluZm9ORlQ9e2luZm9ORlR9IFxuICAgICAgICAgICAgICAgIHNldEluZm9ORlQ9e3NldEluZm9ORlR9IFxuICAgICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfSBcbiAgICAgICAgICAgICAgICBzZXRJbWFnZXM9e3NldEltYWdlc30gXG4gICAgICAgICAgICAgICAgbmZ0PXtuZnR9IFxuICAgICAgICAgICAgICAgIHNldE5mdD17c2V0TmZ0fVxuICAgICAgICAgICAgICAgIHNldFN0YWdlTnVtYmVyPXtzZXRTdGFnZU51bWJlcn1cbiAgICAgICAgICAgICAgICBzdGFnZU51bWJlcj17c3RhZ2VOdW1iZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbWludGVyLWJ1dHRvbSddfT5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsgKCkgPT4ge2VuZCgpfX0gIGNsYXNzTmFtZT17KGFsbFNldCAmJiBpc0Nvbm5lY3RlZCkgPyBzdHlsZXNbJ2J1dHRvbSddIDogc3R5bGVzWydidXR0b20tZGlzYWJsZWQnXSB9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17KGFsbFNldCAmJiBpc0Nvbm5lY3RlZCkgPyBzdHlsZXNbJ3RleHQxMiddIDogc3R5bGVzWyd0ZXh0MTItZGlzYWJsZWQnXX0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Db250aW51ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlIiwic3R5bGVzIiwiZXRoZXJzIiwiTkZUU3RvcmFnZSIsIkZpbGUiLCJJbWFnZXNDIiwidXNlQWNjb3VudCIsInVzZUNvbm5lY3QiLCJ1c2VEaXNjb25uZWN0IiwiU2Vjb25kU3RhZ2UiLCJtaW50UGVyY2VudCIsInNldE1pbnRQZXJjZW50Iiwic2V0TG9hZGluZyIsImFiaSIsImNvbnRyYWN0QWRkIiwic2V0U3RhZ2VOdW1iZXIiLCJzdGFnZU51bWJlciIsInNldENvbnRyYWN0RGVwbG95ZWQiLCJzZXRMYXN0U3RhZ2UiLCJzZXRBbHJlYWR5U2V0IiwiYWxyZWFkeVNldCIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwic2V0TWFpbkltYWdlcyIsIm1haW5JbWFnZXMiLCJoYW5kbGVJbWFnZXMiLCJuZnQiLCJzZXROZnQiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJzZXRJbmZvTkZUIiwiaW5mb05GVCIsInNldFJlYWR5Rm9ySW5mbyIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsImFsbFNldCIsInNldEFsbFNldCIsImEiLCJpIiwibGVuZ3RoIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhdHRyaWJ1dGVzIiwiZmlsbGVkIiwiaWQiLCJpbmNyZWFzZVBlciIsImxlbiIsImIiLCJzdW0iLCJjIiwiZ2VuTWV0YWRhdGEiLCJ1cmlzIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNpZ25lciIsImdldFNpZ25lciIsImNsaWVudCIsInRva2VuIiwic3RvcmUiLCJ0eXBlIiwidGhlbiIsIm1ldGFkYXRhIiwibWV0YWRhdGFBcnJheSIsInVybCIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsInB1c2giLCJfY29udHJhY3QiLCJDb250cmFjdCIsIm1pbnQiLCJzYWZlTWludCIsImhhc2giLCJlIiwiZW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componets/secondStage.js\n"));

/***/ })

});