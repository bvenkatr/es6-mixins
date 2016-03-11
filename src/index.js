/*

 The MIT License (MIT)
 Copyright (c) 2016 Narendra Sisodiya https://github.com/nsisodiya

 */

module.exports = function (Main, Rest) {
	Rest.map((v) => {
		return Object.getOwnPropertyNames(v.prototype);
	}).reduce(function (a, b) {
		return a.concat(b);
	}, []).filter(function (item, pos, arr) {
		return arr.indexOf(item) === pos && item !== 'constructor';
	}).map((method) => {
		var backup = Main.prototype[method];
		Main.prototype[method] = function () {
			Rest.map((v) => {
				if (typeof v.prototype[method] === "function") {
					v.prototype[method].apply(this, arguments);
				}
			});
			if (typeof backup === 'function') {
				backup.apply(this, arguments);
			}
		}
	})
};