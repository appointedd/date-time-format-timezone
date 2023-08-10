/*
 * Copyright 2017, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
module.exports = function load(global) {global.Intl && global.Intl._localeData && global.Intl._localeData.load({
    "locales": {
        "nn": {
            "gmtFormat": "GMT{0}",
            "gmtZeroFormat": "GMT",
            "zone": {},
            "metazone": {
                "Africa_Central": "d,0,4|||",
                "Africa_Eastern": "e,0,4|||",
                "Africa_Southern": "f,0,4|||",
                "Africa_Western": "5,0,1|5,0,2||",
                "Australia_Central": "3,0,1|3,0,2||",
                "Australia_CentralWestern": "6,7,3,0,1|6,7,3,0,2||",
                "Australia_Eastern": "8,0,1|8,0,2||",
                "Australia_Western": "9,0,1|9,0,2||",
                "Europe_Central": "a,0,1|a,0,2|g|h",
                "Europe_Eastern": "b,0,1|b,0,2|i|j",
                "Europe_Western": "c,0,1|c,0,2|k|l",
                "GMT": "m,0,n||o|"
            }
        }
    },
    "zoneNameIndex": [
        " ",
        "standardtid",
        "sommartid",
        "sentralaustralsk",
        "tid",
        "vestafrikansk",
        "vest",
        "-",
        "austaustralsk",
        "vestaustralsk",
        "sentraleuropeisk",
        "austeuropeisk",
        "vesteuropeisk",
        "sentralafrikansk",
        "austafrikansk",
        "sørafrikansk",
        "CET",
        "CEST",
        "EET",
        "EEST",
        "WET",
        "WEST",
        "greenwich",
        "middeltid",
        "GMT"
    ]
});};
