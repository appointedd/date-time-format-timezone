/*
 * Copyright 2017, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
module.exports = function load(global) {global.Intl && global.Intl._localeData && global.Intl._localeData.load({
    "locales": {
        "se-FI": {
            "gmtFormat": "UTC{0}",
            "gmtZeroFormat": "UTC",
            "zone": {},
            "metazone": {
                "Europe_Central": "5,0,2,1,3|5,0,2,1,4|9|a",
                "Europe_Eastern": "6,0,2,1,3|6,0,2,1,4|b|c",
                "Europe_Western": "7,0,2,1,3|7,0,2,1,4|d|e",
                "GMT": "f,1,g,1,h||i|",
                "Moscow": "8,0,3|8,0,4||"
            }
        }
    },
    "zoneNameIndex": [
        "-",
        " ",
        "Eurohpá",
        "dábálašáigi",
        "geassiáigi",
        "gaska",
        "nuorti",
        "oarje",
        "Moskva",
        "CET",
        "CEST",
        "EET",
        "EEST",
        "WET",
        "WEST",
        "Greenwich",
        "gaskka",
        "áigi",
        "GMT"
    ]
});};
