/*
 * Copyright 2017, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
module.exports = function load(global) {
  global.Intl &&
    global.Intl._timeZoneData &&
    global.Intl._timeZoneData.load({
      zoneDefs: [
        "Pacific/Chuuk,Pacific/Port_Moresby,Pacific/Truk,Pacific/Yap,Antarctica/DumontDUrville||0,0,0,1,0,0,2,1,0",
      ],
      timeStamps: ["-2kkj9fp", "-26h4mrh", "-26h4mrg"],
      offsets: [588, 600],
    });
};
