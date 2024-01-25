(() => {
  "use strict";
  var t = {
    d: (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    },
  };
  (t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (t.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        if (r.length) for (var a = r.length - 1; a > -1 && !e; ) e = r[a--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    t.d(
      {},
      {
        kj: () => ue,
        F5: () => se,
        k3: () => de,
        HA: () => ie,
        QP: () => ce,
        mo: () => re,
        qQ: () => oe,
      },
    );
  const e = {
    randomUUID:
      "undefined" != typeof crypto &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
  };
  let n;
  const r = new Uint8Array(16);
  function a() {
    if (
      !n &&
      ((n =
        "undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)),
      !n)
    )
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    return n(r);
  }
  const o = [];
  for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
  const i = function (t, n, r) {
    if (e.randomUUID && !n && !t) return e.randomUUID();
    const i = (t = t || {}).random || (t.rng || a)();
    if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), n)) {
      r = r || 0;
      for (let t = 0; t < 16; ++t) n[r + t] = i[t];
      return n;
    }
    return (function (t, e = 0) {
      return (
        o[t[e + 0]] +
        o[t[e + 1]] +
        o[t[e + 2]] +
        o[t[e + 3]] +
        "-" +
        o[t[e + 4]] +
        o[t[e + 5]] +
        "-" +
        o[t[e + 6]] +
        o[t[e + 7]] +
        "-" +
        o[t[e + 8]] +
        o[t[e + 9]] +
        "-" +
        o[t[e + 10]] +
        o[t[e + 11]] +
        o[t[e + 12]] +
        o[t[e + 13]] +
        o[t[e + 14]] +
        o[t[e + 15]]
      );
    })(i);
  };
  function s(t, e, n, r, a = i(), o = !1) {
    (t = t.toString()), (e = e.toString());
    const s = (t) => {
      r = t;
    };
    return {
      get title() {
        return t;
      },
      get description() {
        return e;
      },
      get dueDate() {
        return n;
      },
      get priority() {
        return r;
      },
      get completeState() {
        return o;
      },
      setComplete: () => {
        console.log("function innit", o),
          0 == o
            ? (console.log("inside if", o),
              (o = !0),
              console.log("inside if after true", o))
            : (o = !1),
          console.log("outside if", o);
      },
      changePriority: s,
      editTask: (r, a, o, i) => {
        (t = r), (e = a), (n = o), s(i);
      },
      printTask: () => {
        console.log(
          `Task title - ${t}, Desc - ${e}, Date - ${n}, Priority - ${r}`,
        );
      },
      myTaskUuid: a,
    };
  }
  function d(t, e = i()) {
    let n = [];
    return {
      title: t,
      tasks: n,
      myFolderUuid: e,
      addTask: (t) => {
        n.push(t);
      },
      displayTasks: () => {
        for (let t = 0; t < n.length; t++)
          console.log(
            `Task ${t} - ${n[t].title}, ${n[t].dueDate}, ${n[t].priority}`,
          );
      },
      deleteTask: (t) => {
        for (let e = n.length - 1; e >= 0; --e)
          n[e].myTaskUuid === t.myTaskUuid && n.splice(e, 1);
      },
    };
  }
  function u(t = i()) {
    let e = [];
    return {
      folders: e,
      addFolder: (t) => {
        e.push(t);
      },
      deleteFolder: (t) => {
        for (let n = e.length - 1; n >= 0; --n)
          e[n].myFolderUuid === t.myFolderUuid && e.splice(n, 1);
      },
      mySuperFolderUuid: t,
    };
  }
  function c(t) {
    const e = Object.prototype.toString.call(t);
    return t instanceof Date || ("object" == typeof t && "[object Date]" === e)
      ? new t.constructor(+t)
      : "number" == typeof t ||
          "[object Number]" === e ||
          "string" == typeof t ||
          "[object String]" === e
        ? new Date(t)
        : new Date(NaN);
  }
  function l(t) {
    if (
      !((e = t),
      e instanceof Date ||
        ("object" == typeof e &&
          "[object Date]" === Object.prototype.toString.call(e)) ||
        "number" == typeof t)
    )
      return !1;
    var e;
    const n = c(t);
    return !isNaN(Number(n));
  }
  const m = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  };
  function h(t) {
    return (e = {}) => {
      const n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  const f = {
      date: h({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: h({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: h({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    },
    g = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    };
  function w(t) {
    return (e, n) => {
      let r;
      if (
        "formatting" === (n?.context ? String(n.context) : "standalone") &&
        t.formattingValues
      ) {
        const e = t.defaultFormattingWidth || t.defaultWidth,
          a = n?.width ? String(n.width) : e;
        r = t.formattingValues[a] || t.formattingValues[e];
      } else {
        const e = t.defaultWidth,
          a = n?.width ? String(n.width) : t.defaultWidth;
        r = t.values[a] || t.values[e];
      }
      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  function y(t) {
    return (e, n = {}) => {
      const r = n.width,
        a = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
        o = e.match(a);
      if (!o) return null;
      const i = o[0],
        s = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
        d = Array.isArray(s)
          ? (function (t, e) {
              for (let e = 0; e < t.length; e++) if (t[e].test(i)) return e;
            })(s)
          : (function (t, e) {
              for (const e in t)
                if (Object.prototype.hasOwnProperty.call(t, e) && t[e].test(i))
                  return e;
            })(s);
      let u;
      return (
        (u = t.valueCallback ? t.valueCallback(d) : d),
        (u = n.valueCallback ? n.valueCallback(u) : u),
        { value: u, rest: e.slice(i.length) }
      );
    };
  }
  var p;
  const b = {
    code: "en-US",
    formatDistance: (t, e, n) => {
      let r;
      const a = m[t];
      return (
        (r =
          "string" == typeof a
            ? a
            : 1 === e
              ? a.one
              : a.other.replace("{{count}}", e.toString())),
        n?.addSuffix
          ? n.comparison && n.comparison > 0
            ? "in " + r
            : r + " ago"
          : r
      );
    },
    formatLong: f,
    formatRelative: (t, e, n, r) => g[t],
    localize: {
      ordinalNumber: (t, e) => {
        const n = Number(t),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + "st";
            case 2:
              return n + "nd";
            case 3:
              return n + "rd";
          }
        return n + "th";
      },
      era: w({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        },
        defaultWidth: "wide",
      }),
      quarter: w({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        },
        defaultWidth: "wide",
        argumentCallback: (t) => t - 1,
      }),
      month: w({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        defaultWidth: "wide",
      }),
      day: w({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        defaultWidth: "wide",
      }),
      dayPeriod: w({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        },
        defaultFormattingWidth: "wide",
      }),
    },
    match: {
      ordinalNumber:
        ((p = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: (t) => parseInt(t, 10),
        }),
        (t, e = {}) => {
          const n = t.match(p.matchPattern);
          if (!n) return null;
          const r = n[0],
            a = t.match(p.parsePattern);
          if (!a) return null;
          let o = p.valueCallback ? p.valueCallback(a[0]) : a[0];
          return (
            (o = e.valueCallback ? e.valueCallback(o) : o),
            { value: o, rest: t.slice(r.length) }
          );
        }),
      era: y({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/^b/i, /^(a|c)/i] },
        defaultParseWidth: "any",
      }),
      quarter: y({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: "any",
        valueCallback: (t) => t + 1,
      }),
      month: y({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: "any",
      }),
      day: y({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: "any",
      }),
      dayPeriod: y({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        defaultParseWidth: "any",
      }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
  let k = {};
  function x() {
    return k;
  }
  Math.pow(10, 8);
  const v = 6048e5,
    T = 864e5;
  function M(t) {
    const e = c(t);
    return e.setHours(0, 0, 0, 0), e;
  }
  function D(t) {
    const e = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
    return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
  }
  function E(t, e) {
    return t instanceof Date ? new t.constructor(e) : new Date(e);
  }
  function S(t) {
    const e = c(t);
    return (
      (function (t, e) {
        const n = M(t),
          r = M(e),
          a = n.getTime() - D(n),
          o = r.getTime() - D(r);
        return Math.round((a - o) / T);
      })(
        e,
        (function (t) {
          const e = c(t),
            n = E(t, 0);
          return (
            n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
          );
        })(e),
      ) + 1
    );
  }
  function P(t, e) {
    const n = x(),
      r =
        e?.weekStartsOn ??
        e?.locale?.options?.weekStartsOn ??
        n.weekStartsOn ??
        n.locale?.options?.weekStartsOn ??
        0,
      a = c(t),
      o = a.getDay(),
      i = (o < r ? 7 : 0) + o - r;
    return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
  }
  function N(t) {
    return P(t, { weekStartsOn: 1 });
  }
  function Y(t) {
    const e = c(t),
      n = e.getFullYear(),
      r = E(t, 0);
    r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
    const a = N(r),
      o = E(t, 0);
    o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
    const i = N(o);
    return e.getTime() >= a.getTime()
      ? n + 1
      : e.getTime() >= i.getTime()
        ? n
        : n - 1;
  }
  function C(t) {
    const e = c(t),
      n =
        N(e).getTime() -
        (function (t) {
          const e = Y(t),
            n = E(t, 0);
          return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), N(n);
        })(e).getTime();
    return Math.round(n / v) + 1;
  }
  function q(t, e) {
    const n = c(t),
      r = n.getFullYear(),
      a = x(),
      o =
        e?.firstWeekContainsDate ??
        e?.locale?.options?.firstWeekContainsDate ??
        a.firstWeekContainsDate ??
        a.locale?.options?.firstWeekContainsDate ??
        1,
      i = E(t, 0);
    i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
    const s = P(i, e),
      d = E(t, 0);
    d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
    const u = P(d, e);
    return n.getTime() >= s.getTime()
      ? r + 1
      : n.getTime() >= u.getTime()
        ? r
        : r - 1;
  }
  function F(t, e) {
    const n = c(t),
      r =
        P(n, e).getTime() -
        (function (t, e) {
          const n = x(),
            r =
              e?.firstWeekContainsDate ??
              e?.locale?.options?.firstWeekContainsDate ??
              n.firstWeekContainsDate ??
              n.locale?.options?.firstWeekContainsDate ??
              1,
            a = q(t, e),
            o = E(t, 0);
          return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), P(o, e);
        })(n, e).getTime();
    return Math.round(r / v) + 1;
  }
  function L(t, e) {
    return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0");
  }
  const H = {
      y(t, e) {
        const n = t.getFullYear(),
          r = n > 0 ? n : 1 - n;
        return L("yy" === e ? r % 100 : r, e.length);
      },
      M(t, e) {
        const n = t.getMonth();
        return "M" === e ? String(n + 1) : L(n + 1, 2);
      },
      d: (t, e) => L(t.getDate(), e.length),
      a(t, e) {
        const n = t.getHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
          case "a":
          case "aa":
            return n.toUpperCase();
          case "aaa":
            return n;
          case "aaaaa":
            return n[0];
          default:
            return "am" === n ? "a.m." : "p.m.";
        }
      },
      h: (t, e) => L(t.getHours() % 12 || 12, e.length),
      H: (t, e) => L(t.getHours(), e.length),
      m: (t, e) => L(t.getMinutes(), e.length),
      s: (t, e) => L(t.getSeconds(), e.length),
      S(t, e) {
        const n = e.length,
          r = t.getMilliseconds();
        return L(Math.floor(r * Math.pow(10, n - 3)), e.length);
      },
    },
    I = {
      G: function (t, e, n) {
        const r = t.getFullYear() > 0 ? 1 : 0;
        switch (e) {
          case "G":
          case "GG":
          case "GGG":
            return n.era(r, { width: "abbreviated" });
          case "GGGGG":
            return n.era(r, { width: "narrow" });
          default:
            return n.era(r, { width: "wide" });
        }
      },
      y: function (t, e, n) {
        if ("yo" === e) {
          const e = t.getFullYear(),
            r = e > 0 ? e : 1 - e;
          return n.ordinalNumber(r, { unit: "year" });
        }
        return H.y(t, e);
      },
      Y: function (t, e, n, r) {
        const a = q(t, r),
          o = a > 0 ? a : 1 - a;
        return "YY" === e
          ? L(o % 100, 2)
          : "Yo" === e
            ? n.ordinalNumber(o, { unit: "year" })
            : L(o, e.length);
      },
      R: function (t, e) {
        return L(Y(t), e.length);
      },
      u: function (t, e) {
        return L(t.getFullYear(), e.length);
      },
      Q: function (t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case "Q":
            return String(r);
          case "QQ":
            return L(r, 2);
          case "Qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "QQQ":
            return n.quarter(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "QQQQQ":
            return n.quarter(r, { width: "narrow", context: "formatting" });
          default:
            return n.quarter(r, { width: "wide", context: "formatting" });
        }
      },
      q: function (t, e, n) {
        const r = Math.ceil((t.getMonth() + 1) / 3);
        switch (e) {
          case "q":
            return String(r);
          case "qq":
            return L(r, 2);
          case "qo":
            return n.ordinalNumber(r, { unit: "quarter" });
          case "qqq":
            return n.quarter(r, {
              width: "abbreviated",
              context: "standalone",
            });
          case "qqqqq":
            return n.quarter(r, { width: "narrow", context: "standalone" });
          default:
            return n.quarter(r, { width: "wide", context: "standalone" });
        }
      },
      M: function (t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case "M":
          case "MM":
            return H.M(t, e);
          case "Mo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "MMM":
            return n.month(r, { width: "abbreviated", context: "formatting" });
          case "MMMMM":
            return n.month(r, { width: "narrow", context: "formatting" });
          default:
            return n.month(r, { width: "wide", context: "formatting" });
        }
      },
      L: function (t, e, n) {
        const r = t.getMonth();
        switch (e) {
          case "L":
            return String(r + 1);
          case "LL":
            return L(r + 1, 2);
          case "Lo":
            return n.ordinalNumber(r + 1, { unit: "month" });
          case "LLL":
            return n.month(r, { width: "abbreviated", context: "standalone" });
          case "LLLLL":
            return n.month(r, { width: "narrow", context: "standalone" });
          default:
            return n.month(r, { width: "wide", context: "standalone" });
        }
      },
      w: function (t, e, n, r) {
        const a = F(t, r);
        return "wo" === e
          ? n.ordinalNumber(a, { unit: "week" })
          : L(a, e.length);
      },
      I: function (t, e, n) {
        const r = C(t);
        return "Io" === e
          ? n.ordinalNumber(r, { unit: "week" })
          : L(r, e.length);
      },
      d: function (t, e, n) {
        return "do" === e
          ? n.ordinalNumber(t.getDate(), { unit: "date" })
          : H.d(t, e);
      },
      D: function (t, e, n) {
        const r = S(t);
        return "Do" === e
          ? n.ordinalNumber(r, { unit: "dayOfYear" })
          : L(r, e.length);
      },
      E: function (t, e, n) {
        const r = t.getDay();
        switch (e) {
          case "E":
          case "EE":
          case "EEE":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "EEEEE":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "EEEEEE":
            return n.day(r, { width: "short", context: "formatting" });
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      e: function (t, e, n, r) {
        const a = t.getDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case "e":
            return String(o);
          case "ee":
            return L(o, 2);
          case "eo":
            return n.ordinalNumber(o, { unit: "day" });
          case "eee":
            return n.day(a, { width: "abbreviated", context: "formatting" });
          case "eeeee":
            return n.day(a, { width: "narrow", context: "formatting" });
          case "eeeeee":
            return n.day(a, { width: "short", context: "formatting" });
          default:
            return n.day(a, { width: "wide", context: "formatting" });
        }
      },
      c: function (t, e, n, r) {
        const a = t.getDay(),
          o = (a - r.weekStartsOn + 8) % 7 || 7;
        switch (e) {
          case "c":
            return String(o);
          case "cc":
            return L(o, e.length);
          case "co":
            return n.ordinalNumber(o, { unit: "day" });
          case "ccc":
            return n.day(a, { width: "abbreviated", context: "standalone" });
          case "ccccc":
            return n.day(a, { width: "narrow", context: "standalone" });
          case "cccccc":
            return n.day(a, { width: "short", context: "standalone" });
          default:
            return n.day(a, { width: "wide", context: "standalone" });
        }
      },
      i: function (t, e, n) {
        const r = t.getDay(),
          a = 0 === r ? 7 : r;
        switch (e) {
          case "i":
            return String(a);
          case "ii":
            return L(a, e.length);
          case "io":
            return n.ordinalNumber(a, { unit: "day" });
          case "iii":
            return n.day(r, { width: "abbreviated", context: "formatting" });
          case "iiiii":
            return n.day(r, { width: "narrow", context: "formatting" });
          case "iiiiii":
            return n.day(r, { width: "short", context: "formatting" });
          default:
            return n.day(r, { width: "wide", context: "formatting" });
        }
      },
      a: function (t, e, n) {
        const r = t.getHours() / 12 >= 1 ? "pm" : "am";
        switch (e) {
          case "a":
          case "aa":
            return n.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "aaa":
            return n
              .dayPeriod(r, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "aaaaa":
            return n.dayPeriod(r, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      b: function (t, e, n) {
        const r = t.getHours();
        let a;
        switch (
          ((a =
            12 === r
              ? "noon"
              : 0 === r
                ? "midnight"
                : r / 12 >= 1
                  ? "pm"
                  : "am"),
          e)
        ) {
          case "b":
          case "bb":
            return n.dayPeriod(a, {
              width: "abbreviated",
              context: "formatting",
            });
          case "bbb":
            return n
              .dayPeriod(a, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "bbbbb":
            return n.dayPeriod(a, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(a, { width: "wide", context: "formatting" });
        }
      },
      B: function (t, e, n) {
        const r = t.getHours();
        let a;
        switch (
          ((a =
            r >= 17
              ? "evening"
              : r >= 12
                ? "afternoon"
                : r >= 4
                  ? "morning"
                  : "night"),
          e)
        ) {
          case "B":
          case "BB":
          case "BBB":
            return n.dayPeriod(a, {
              width: "abbreviated",
              context: "formatting",
            });
          case "BBBBB":
            return n.dayPeriod(a, { width: "narrow", context: "formatting" });
          default:
            return n.dayPeriod(a, { width: "wide", context: "formatting" });
        }
      },
      h: function (t, e, n) {
        if ("ho" === e) {
          let e = t.getHours() % 12;
          return 0 === e && (e = 12), n.ordinalNumber(e, { unit: "hour" });
        }
        return H.h(t, e);
      },
      H: function (t, e, n) {
        return "Ho" === e
          ? n.ordinalNumber(t.getHours(), { unit: "hour" })
          : H.H(t, e);
      },
      K: function (t, e, n) {
        const r = t.getHours() % 12;
        return "Ko" === e
          ? n.ordinalNumber(r, { unit: "hour" })
          : L(r, e.length);
      },
      k: function (t, e, n) {
        let r = t.getHours();
        return (
          0 === r && (r = 24),
          "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : L(r, e.length)
        );
      },
      m: function (t, e, n) {
        return "mo" === e
          ? n.ordinalNumber(t.getMinutes(), { unit: "minute" })
          : H.m(t, e);
      },
      s: function (t, e, n) {
        return "so" === e
          ? n.ordinalNumber(t.getSeconds(), { unit: "second" })
          : H.s(t, e);
      },
      S: function (t, e) {
        return H.S(t, e);
      },
      X: function (t, e, n, r) {
        const a = (r._originalDate || t).getTimezoneOffset();
        if (0 === a) return "Z";
        switch (e) {
          case "X":
            return W(a);
          case "XXXX":
          case "XX":
            return B(a);
          default:
            return B(a, ":");
        }
      },
      x: function (t, e, n, r) {
        const a = (r._originalDate || t).getTimezoneOffset();
        switch (e) {
          case "x":
            return W(a);
          case "xxxx":
          case "xx":
            return B(a);
          default:
            return B(a, ":");
        }
      },
      O: function (t, e, n, r) {
        const a = (r._originalDate || t).getTimezoneOffset();
        switch (e) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + O(a, ":");
          default:
            return "GMT" + B(a, ":");
        }
      },
      z: function (t, e, n, r) {
        const a = (r._originalDate || t).getTimezoneOffset();
        switch (e) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + O(a, ":");
          default:
            return "GMT" + B(a, ":");
        }
      },
      t: function (t, e, n, r) {
        const a = r._originalDate || t;
        return L(Math.floor(a.getTime() / 1e3), e.length);
      },
      T: function (t, e, n, r) {
        return L((r._originalDate || t).getTime(), e.length);
      },
    };
  function O(t, e = "") {
    const n = t > 0 ? "-" : "+",
      r = Math.abs(t),
      a = Math.floor(r / 60),
      o = r % 60;
    return 0 === o ? n + String(a) : n + String(a) + e + L(o, 2);
  }
  function W(t, e) {
    return t % 60 == 0 ? (t > 0 ? "-" : "+") + L(Math.abs(t) / 60, 2) : B(t, e);
  }
  function B(t, e = "") {
    const n = t > 0 ? "-" : "+",
      r = Math.abs(t);
    return n + L(Math.floor(r / 60), 2) + e + L(r % 60, 2);
  }
  const U = (t, e) => {
      switch (t) {
        case "P":
          return e.date({ width: "short" });
        case "PP":
          return e.date({ width: "medium" });
        case "PPP":
          return e.date({ width: "long" });
        default:
          return e.date({ width: "full" });
      }
    },
    Q = (t, e) => {
      switch (t) {
        case "p":
          return e.time({ width: "short" });
        case "pp":
          return e.time({ width: "medium" });
        case "ppp":
          return e.time({ width: "long" });
        default:
          return e.time({ width: "full" });
      }
    },
    j = {
      p: Q,
      P: (t, e) => {
        const n = t.match(/(P+)(p+)?/) || [],
          r = n[1],
          a = n[2];
        if (!a) return U(t, e);
        let o;
        switch (r) {
          case "P":
            o = e.dateTime({ width: "short" });
            break;
          case "PP":
            o = e.dateTime({ width: "medium" });
            break;
          case "PPP":
            o = e.dateTime({ width: "long" });
            break;
          default:
            o = e.dateTime({ width: "full" });
        }
        return o.replace("{{date}}", U(r, e)).replace("{{time}}", Q(a, e));
      },
    },
    R = ["D", "DD"],
    A = ["YY", "YYYY"];
  function G(t) {
    return -1 !== R.indexOf(t);
  }
  function X(t) {
    return -1 !== A.indexOf(t);
  }
  function $(t, e, n) {
    if ("YYYY" === t)
      throw new RangeError(
        `Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
      );
    if ("YY" === t)
      throw new RangeError(
        `Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
      );
    if ("D" === t)
      throw new RangeError(
        `Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
      );
    if ("DD" === t)
      throw new RangeError(
        `Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
      );
  }
  const z = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    J = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    V = /^'([^]*?)'?$/,
    K = /''/g,
    Z = /[a-zA-Z]/;
  function _(t, e, n) {
    const r = x(),
      a = n?.locale ?? r.locale ?? b,
      o =
        n?.firstWeekContainsDate ??
        n?.locale?.options?.firstWeekContainsDate ??
        r.firstWeekContainsDate ??
        r.locale?.options?.firstWeekContainsDate ??
        1,
      i =
        n?.weekStartsOn ??
        n?.locale?.options?.weekStartsOn ??
        r.weekStartsOn ??
        r.locale?.options?.weekStartsOn ??
        0,
      s = c(t);
    if (!l(s)) throw new RangeError("Invalid time value");
    const d = {
      firstWeekContainsDate: o,
      weekStartsOn: i,
      locale: a,
      _originalDate: s,
    };
    return e
      .match(J)
      .map(function (t) {
        const e = t[0];
        return "p" === e || "P" === e ? (0, j[e])(t, a.formatLong) : t;
      })
      .join("")
      .match(z)
      .map(function (r) {
        if ("''" === r) return "'";
        const o = r[0];
        if ("'" === o)
          return (function (t) {
            const e = t.match(V);
            return e ? e[1].replace(K, "'") : t;
          })(r);
        const i = I[o];
        if (i)
          return (
            !n?.useAdditionalWeekYearTokens && X(r) && $(r, e, String(t)),
            !n?.useAdditionalDayOfYearTokens && G(r) && $(r, e, String(t)),
            i(s, r, a.localize, d)
          );
        if (o.match(Z))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              o +
              "`",
          );
        return r;
      })
      .join("");
  }
  class tt {
    subPriority = 0;
    validate(t, e) {
      return !0;
    }
  }
  class et extends tt {
    constructor(t, e, n, r, a) {
      super(),
        (this.value = t),
        (this.validateValue = e),
        (this.setValue = n),
        (this.priority = r),
        a && (this.subPriority = a);
    }
    validate(t, e) {
      return this.validateValue(t, this.value, e);
    }
    set(t, e, n) {
      return this.setValue(t, e, this.value, n);
    }
  }
  class nt extends tt {
    priority = 10;
    subPriority = -1;
    set(t, e) {
      return e.timestampIsSet
        ? t
        : E(
            t,
            (function (t, e) {
              const n = e instanceof Date ? E(e, 0) : new e(0);
              return (
                n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
                n.setHours(
                  t.getHours(),
                  t.getMinutes(),
                  t.getSeconds(),
                  t.getMilliseconds(),
                ),
                n
              );
            })(t, Date),
          );
    }
  }
  class rt {
    run(t, e, n, r) {
      const a = this.parse(t, e, n, r);
      return a
        ? {
            setter: new et(
              a.value,
              this.validate,
              this.set,
              this.priority,
              this.subPriority,
            ),
            rest: a.rest,
          }
        : null;
    }
    validate(t, e, n) {
      return !0;
    }
  }
  const at = /^(1[0-2]|0?\d)/,
    ot = /^(3[0-1]|[0-2]?\d)/,
    it = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    st = /^(5[0-3]|[0-4]?\d)/,
    dt = /^(2[0-3]|[0-1]?\d)/,
    ut = /^(2[0-4]|[0-1]?\d)/,
    ct = /^(1[0-1]|0?\d)/,
    lt = /^(1[0-2]|0?\d)/,
    mt = /^[0-5]?\d/,
    ht = /^[0-5]?\d/,
    ft = /^\d/,
    gt = /^\d{1,2}/,
    wt = /^\d{1,3}/,
    yt = /^\d{1,4}/,
    pt = /^-?\d+/,
    bt = /^-?\d/,
    kt = /^-?\d{1,2}/,
    xt = /^-?\d{1,3}/,
    vt = /^-?\d{1,4}/,
    Tt = /^([+-])(\d{2})(\d{2})?|Z/,
    Mt = /^([+-])(\d{2})(\d{2})|Z/,
    Dt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    Et = /^([+-])(\d{2}):(\d{2})|Z/,
    St = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
  function Pt(t, e) {
    return t ? { value: e(t.value), rest: t.rest } : t;
  }
  function Nt(t, e) {
    const n = e.match(t);
    return n ? { value: parseInt(n[0], 10), rest: e.slice(n[0].length) } : null;
  }
  function Yt(t, e) {
    const n = e.match(t);
    return n
      ? "Z" === n[0]
        ? { value: 0, rest: e.slice(1) }
        : {
            value:
              ("+" === n[1] ? 1 : -1) *
              (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
            rest: e.slice(n[0].length),
          }
      : null;
  }
  function Ct(t) {
    return Nt(pt, t);
  }
  function qt(t, e) {
    switch (t) {
      case 1:
        return Nt(ft, e);
      case 2:
        return Nt(gt, e);
      case 3:
        return Nt(wt, e);
      case 4:
        return Nt(yt, e);
      default:
        return Nt(new RegExp("^\\d{1," + t + "}"), e);
    }
  }
  function Ft(t, e) {
    switch (t) {
      case 1:
        return Nt(bt, e);
      case 2:
        return Nt(kt, e);
      case 3:
        return Nt(xt, e);
      case 4:
        return Nt(vt, e);
      default:
        return Nt(new RegExp("^-?\\d{1," + t + "}"), e);
    }
  }
  function Lt(t) {
    switch (t) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      default:
        return 0;
    }
  }
  function Ht(t, e) {
    const n = e > 0,
      r = n ? e : 1 - e;
    let a;
    if (r <= 50) a = t || 100;
    else {
      const e = r + 50;
      a = t + 100 * Math.floor(e / 100) - (t >= e % 100 ? 100 : 0);
    }
    return n ? a : 1 - a;
  }
  function It(t) {
    return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
  }
  const Ot = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Wt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Bt(t, e) {
    const n = c(t);
    return isNaN(e) ? E(t, NaN) : e ? (n.setDate(n.getDate() + e), n) : n;
  }
  function Ut(t, e, n) {
    const r = x(),
      a =
        n?.weekStartsOn ??
        n?.locale?.options?.weekStartsOn ??
        r.weekStartsOn ??
        r.locale?.options?.weekStartsOn ??
        0,
      o = c(t),
      i = o.getDay(),
      s = 7 - a;
    return Bt(
      o,
      e < 0 || e > 6
        ? e - ((i + s) % 7)
        : (((((e % 7) + 7) % 7) + s) % 7) - ((i + s) % 7),
    );
  }
  function Qt(t, e) {
    const n = c(t);
    return Bt(
      n,
      e -
        (function (t) {
          let e = c(t).getDay();
          return 0 === e && (e = 7), e;
        })(n),
    );
  }
  const jt = {
      G: new (class extends rt {
        priority = 140;
        parse(t, e, n) {
          switch (e) {
            case "G":
            case "GG":
            case "GGG":
              return (
                n.era(t, { width: "abbreviated" }) ||
                n.era(t, { width: "narrow" })
              );
            case "GGGGG":
              return n.era(t, { width: "narrow" });
            default:
              return (
                n.era(t, { width: "wide" }) ||
                n.era(t, { width: "abbreviated" }) ||
                n.era(t, { width: "narrow" })
              );
          }
        }
        set(t, e, n) {
          return (e.era = n), t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = ["R", "u", "t", "T"];
      })(),
      y: new (class extends rt {
        priority = 130;
        incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
        parse(t, e, n) {
          const r = (t) => ({ year: t, isTwoDigitYear: "yy" === e });
          switch (e) {
            case "y":
              return Pt(qt(4, t), r);
            case "yo":
              return Pt(n.ordinalNumber(t, { unit: "year" }), r);
            default:
              return Pt(qt(e.length, t), r);
          }
        }
        validate(t, e) {
          return e.isTwoDigitYear || e.year > 0;
        }
        set(t, e, n) {
          const r = t.getFullYear();
          if (n.isTwoDigitYear) {
            const e = Ht(n.year, r);
            return t.setFullYear(e, 0, 1), t.setHours(0, 0, 0, 0), t;
          }
          const a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
          return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
        }
      })(),
      Y: new (class extends rt {
        priority = 130;
        parse(t, e, n) {
          const r = (t) => ({ year: t, isTwoDigitYear: "YY" === e });
          switch (e) {
            case "Y":
              return Pt(qt(4, t), r);
            case "Yo":
              return Pt(n.ordinalNumber(t, { unit: "year" }), r);
            default:
              return Pt(qt(e.length, t), r);
          }
        }
        validate(t, e) {
          return e.isTwoDigitYear || e.year > 0;
        }
        set(t, e, n, r) {
          const a = q(t, r);
          if (n.isTwoDigitYear) {
            const e = Ht(n.year, a);
            return (
              t.setFullYear(e, 0, r.firstWeekContainsDate),
              t.setHours(0, 0, 0, 0),
              P(t, r)
            );
          }
          const o = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
          return (
            t.setFullYear(o, 0, r.firstWeekContainsDate),
            t.setHours(0, 0, 0, 0),
            P(t, r)
          );
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ];
      })(),
      R: new (class extends rt {
        priority = 130;
        parse(t, e) {
          return Ft("R" === e ? 4 : e.length, t);
        }
        set(t, e, n) {
          const r = E(t, 0);
          return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), N(r);
        }
        incompatibleTokens = [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      u: new (class extends rt {
        priority = 130;
        parse(t, e) {
          return Ft("u" === e ? 4 : e.length, t);
        }
        set(t, e, n) {
          return t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "G",
          "y",
          "Y",
          "R",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      Q: new (class extends rt {
        priority = 120;
        parse(t, e, n) {
          switch (e) {
            case "Q":
            case "QQ":
              return qt(e.length, t);
            case "Qo":
              return n.ordinalNumber(t, { unit: "quarter" });
            case "QQQ":
              return (
                n.quarter(t, { width: "abbreviated", context: "formatting" }) ||
                n.quarter(t, { width: "narrow", context: "formatting" })
              );
            case "QQQQQ":
              return n.quarter(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.quarter(t, { width: "wide", context: "formatting" }) ||
                n.quarter(t, { width: "abbreviated", context: "formatting" }) ||
                n.quarter(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 4;
        }
        set(t, e, n) {
          return t.setMonth(3 * (n - 1), 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      q: new (class extends rt {
        priority = 120;
        parse(t, e, n) {
          switch (e) {
            case "q":
            case "qq":
              return qt(e.length, t);
            case "qo":
              return n.ordinalNumber(t, { unit: "quarter" });
            case "qqq":
              return (
                n.quarter(t, { width: "abbreviated", context: "standalone" }) ||
                n.quarter(t, { width: "narrow", context: "standalone" })
              );
            case "qqqqq":
              return n.quarter(t, { width: "narrow", context: "standalone" });
            default:
              return (
                n.quarter(t, { width: "wide", context: "standalone" }) ||
                n.quarter(t, { width: "abbreviated", context: "standalone" }) ||
                n.quarter(t, { width: "narrow", context: "standalone" })
              );
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 4;
        }
        set(t, e, n) {
          return t.setMonth(3 * (n - 1), 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      M: new (class extends rt {
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
        priority = 110;
        parse(t, e, n) {
          const r = (t) => t - 1;
          switch (e) {
            case "M":
              return Pt(Nt(at, t), r);
            case "MM":
              return Pt(qt(2, t), r);
            case "Mo":
              return Pt(n.ordinalNumber(t, { unit: "month" }), r);
            case "MMM":
              return (
                n.month(t, { width: "abbreviated", context: "formatting" }) ||
                n.month(t, { width: "narrow", context: "formatting" })
              );
            case "MMMMM":
              return n.month(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.month(t, { width: "wide", context: "formatting" }) ||
                n.month(t, { width: "abbreviated", context: "formatting" }) ||
                n.month(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 11;
        }
        set(t, e, n) {
          return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
        }
      })(),
      L: new (class extends rt {
        priority = 110;
        parse(t, e, n) {
          const r = (t) => t - 1;
          switch (e) {
            case "L":
              return Pt(Nt(at, t), r);
            case "LL":
              return Pt(qt(2, t), r);
            case "Lo":
              return Pt(n.ordinalNumber(t, { unit: "month" }), r);
            case "LLL":
              return (
                n.month(t, { width: "abbreviated", context: "standalone" }) ||
                n.month(t, { width: "narrow", context: "standalone" })
              );
            case "LLLLL":
              return n.month(t, { width: "narrow", context: "standalone" });
            default:
              return (
                n.month(t, { width: "wide", context: "standalone" }) ||
                n.month(t, { width: "abbreviated", context: "standalone" }) ||
                n.month(t, { width: "narrow", context: "standalone" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 11;
        }
        set(t, e, n) {
          return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      w: new (class extends rt {
        priority = 100;
        parse(t, e, n) {
          switch (e) {
            case "w":
              return Nt(st, t);
            case "wo":
              return n.ordinalNumber(t, { unit: "week" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 53;
        }
        set(t, e, n, r) {
          return P(
            (function (t, e, n) {
              const r = c(t),
                a = F(r, n) - e;
              return r.setDate(r.getDate() - 7 * a), r;
            })(t, n, r),
            r,
          );
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ];
      })(),
      I: new (class extends rt {
        priority = 100;
        parse(t, e, n) {
          switch (e) {
            case "I":
              return Nt(st, t);
            case "Io":
              return n.ordinalNumber(t, { unit: "week" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 53;
        }
        set(t, e, n) {
          return N(
            (function (t, e) {
              const n = c(t),
                r = C(n) - e;
              return n.setDate(n.getDate() - 7 * r), n;
            })(t, n),
          );
        }
        incompatibleTokens = [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      d: new (class extends rt {
        priority = 90;
        subPriority = 1;
        parse(t, e, n) {
          switch (e) {
            case "d":
              return Nt(ot, t);
            case "do":
              return n.ordinalNumber(t, { unit: "date" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          const n = It(t.getFullYear()),
            r = t.getMonth();
          return n ? e >= 1 && e <= Wt[r] : e >= 1 && e <= Ot[r];
        }
        set(t, e, n) {
          return t.setDate(n), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      D: new (class extends rt {
        priority = 90;
        subpriority = 1;
        parse(t, e, n) {
          switch (e) {
            case "D":
            case "DD":
              return Nt(it, t);
            case "Do":
              return n.ordinalNumber(t, { unit: "date" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return It(t.getFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
        }
        set(t, e, n) {
          return t.setMonth(0, n), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "E",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      E: new (class extends rt {
        priority = 90;
        parse(t, e, n) {
          switch (e) {
            case "E":
            case "EE":
            case "EEE":
              return (
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            case "EEEEE":
              return n.day(t, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return (
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            default:
              return (
                n.day(t, { width: "wide", context: "formatting" }) ||
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 6;
        }
        set(t, e, n, r) {
          return (t = Ut(t, n, r)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
      })(),
      e: new (class extends rt {
        priority = 90;
        parse(t, e, n, r) {
          const a = (t) => {
            const e = 7 * Math.floor((t - 1) / 7);
            return ((t + r.weekStartsOn + 6) % 7) + e;
          };
          switch (e) {
            case "e":
            case "ee":
              return Pt(qt(e.length, t), a);
            case "eo":
              return Pt(n.ordinalNumber(t, { unit: "day" }), a);
            case "eee":
              return (
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            case "eeeee":
              return n.day(t, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return (
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            default:
              return (
                n.day(t, { width: "wide", context: "formatting" }) ||
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 6;
        }
        set(t, e, n, r) {
          return (t = Ut(t, n, r)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T",
        ];
      })(),
      c: new (class extends rt {
        priority = 90;
        parse(t, e, n, r) {
          const a = (t) => {
            const e = 7 * Math.floor((t - 1) / 7);
            return ((t + r.weekStartsOn + 6) % 7) + e;
          };
          switch (e) {
            case "c":
            case "cc":
              return Pt(qt(e.length, t), a);
            case "co":
              return Pt(n.ordinalNumber(t, { unit: "day" }), a);
            case "ccc":
              return (
                n.day(t, { width: "abbreviated", context: "standalone" }) ||
                n.day(t, { width: "short", context: "standalone" }) ||
                n.day(t, { width: "narrow", context: "standalone" })
              );
            case "ccccc":
              return n.day(t, { width: "narrow", context: "standalone" });
            case "cccccc":
              return (
                n.day(t, { width: "short", context: "standalone" }) ||
                n.day(t, { width: "narrow", context: "standalone" })
              );
            default:
              return (
                n.day(t, { width: "wide", context: "standalone" }) ||
                n.day(t, { width: "abbreviated", context: "standalone" }) ||
                n.day(t, { width: "short", context: "standalone" }) ||
                n.day(t, { width: "narrow", context: "standalone" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 6;
        }
        set(t, e, n, r) {
          return (t = Ut(t, n, r)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T",
        ];
      })(),
      i: new (class extends rt {
        priority = 90;
        parse(t, e, n) {
          const r = (t) => (0 === t ? 7 : t);
          switch (e) {
            case "i":
            case "ii":
              return qt(e.length, t);
            case "io":
              return n.ordinalNumber(t, { unit: "day" });
            case "iii":
              return Pt(
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                  n.day(t, { width: "short", context: "formatting" }) ||
                  n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
            case "iiiii":
              return Pt(
                n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
            case "iiiiii":
              return Pt(
                n.day(t, { width: "short", context: "formatting" }) ||
                  n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
            default:
              return Pt(
                n.day(t, { width: "wide", context: "formatting" }) ||
                  n.day(t, { width: "abbreviated", context: "formatting" }) ||
                  n.day(t, { width: "short", context: "formatting" }) ||
                  n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 7;
        }
        set(t, e, n) {
          return (t = Qt(t, n)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      a: new (class extends rt {
        priority = 80;
        parse(t, e, n) {
          switch (e) {
            case "a":
            case "aa":
            case "aaa":
              return (
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) || n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
            case "aaaaa":
              return n.dayPeriod(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        set(t, e, n) {
          return t.setHours(Lt(n), 0, 0, 0), t;
        }
        incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
      })(),
      b: new (class extends rt {
        priority = 80;
        parse(t, e, n) {
          switch (e) {
            case "b":
            case "bb":
            case "bbb":
              return (
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) || n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
            case "bbbbb":
              return n.dayPeriod(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        set(t, e, n) {
          return t.setHours(Lt(n), 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
      })(),
      B: new (class extends rt {
        priority = 80;
        parse(t, e, n) {
          switch (e) {
            case "B":
            case "BB":
            case "BBB":
              return (
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) || n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
            case "BBBBB":
              return n.dayPeriod(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        set(t, e, n) {
          return t.setHours(Lt(n), 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "b", "t", "T"];
      })(),
      h: new (class extends rt {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "h":
              return Nt(lt, t);
            case "ho":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 12;
        }
        set(t, e, n) {
          const r = t.getHours() >= 12;
          return (
            r && n < 12
              ? t.setHours(n + 12, 0, 0, 0)
              : r || 12 !== n
                ? t.setHours(n, 0, 0, 0)
                : t.setHours(0, 0, 0, 0),
            t
          );
        }
        incompatibleTokens = ["H", "K", "k", "t", "T"];
      })(),
      H: new (class extends rt {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "H":
              return Nt(dt, t);
            case "Ho":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 23;
        }
        set(t, e, n) {
          return t.setHours(n, 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
      })(),
      K: new (class extends rt {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "K":
              return Nt(ct, t);
            case "Ko":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 11;
        }
        set(t, e, n) {
          return (
            t.getHours() >= 12 && n < 12
              ? t.setHours(n + 12, 0, 0, 0)
              : t.setHours(n, 0, 0, 0),
            t
          );
        }
        incompatibleTokens = ["h", "H", "k", "t", "T"];
      })(),
      k: new (class extends rt {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "k":
              return Nt(ut, t);
            case "ko":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 24;
        }
        set(t, e, n) {
          const r = n <= 24 ? n % 24 : n;
          return t.setHours(r, 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
      })(),
      m: new (class extends rt {
        priority = 60;
        parse(t, e, n) {
          switch (e) {
            case "m":
              return Nt(mt, t);
            case "mo":
              return n.ordinalNumber(t, { unit: "minute" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 59;
        }
        set(t, e, n) {
          return t.setMinutes(n, 0, 0), t;
        }
        incompatibleTokens = ["t", "T"];
      })(),
      s: new (class extends rt {
        priority = 50;
        parse(t, e, n) {
          switch (e) {
            case "s":
              return Nt(ht, t);
            case "so":
              return n.ordinalNumber(t, { unit: "second" });
            default:
              return qt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 59;
        }
        set(t, e, n) {
          return t.setSeconds(n, 0), t;
        }
        incompatibleTokens = ["t", "T"];
      })(),
      S: new (class extends rt {
        priority = 30;
        parse(t, e) {
          return Pt(qt(e.length, t), (t) =>
            Math.floor(t * Math.pow(10, 3 - e.length)),
          );
        }
        set(t, e, n) {
          return t.setMilliseconds(n), t;
        }
        incompatibleTokens = ["t", "T"];
      })(),
      X: new (class extends rt {
        priority = 10;
        parse(t, e) {
          switch (e) {
            case "X":
              return Yt(Tt, t);
            case "XX":
              return Yt(Mt, t);
            case "XXXX":
              return Yt(Dt, t);
            case "XXXXX":
              return Yt(St, t);
            default:
              return Yt(Et, t);
          }
        }
        set(t, e, n) {
          return e.timestampIsSet ? t : E(t, t.getTime() - D(t) - n);
        }
        incompatibleTokens = ["t", "T", "x"];
      })(),
      x: new (class extends rt {
        priority = 10;
        parse(t, e) {
          switch (e) {
            case "x":
              return Yt(Tt, t);
            case "xx":
              return Yt(Mt, t);
            case "xxxx":
              return Yt(Dt, t);
            case "xxxxx":
              return Yt(St, t);
            default:
              return Yt(Et, t);
          }
        }
        set(t, e, n) {
          return e.timestampIsSet ? t : E(t, t.getTime() - D(t) - n);
        }
        incompatibleTokens = ["t", "T", "X"];
      })(),
      t: new (class extends rt {
        priority = 40;
        parse(t) {
          return Ct(t);
        }
        set(t, e, n) {
          return [E(t, 1e3 * n), { timestampIsSet: !0 }];
        }
        incompatibleTokens = "*";
      })(),
      T: new (class extends rt {
        priority = 20;
        parse(t) {
          return Ct(t);
        }
        set(t, e, n) {
          return [E(t, n), { timestampIsSet: !0 }];
        }
        incompatibleTokens = "*";
      })(),
    },
    Rt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    At = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Gt = /^'([^]*?)'?$/,
    Xt = /''/g,
    $t = /\S/,
    zt = /[a-zA-Z]/;
  function Jt(t, e, n, r) {
    const a = Object.assign({}, x()),
      o = r?.locale ?? a.locale ?? b,
      i =
        r?.firstWeekContainsDate ??
        r?.locale?.options?.firstWeekContainsDate ??
        a.firstWeekContainsDate ??
        a.locale?.options?.firstWeekContainsDate ??
        1,
      s =
        r?.weekStartsOn ??
        r?.locale?.options?.weekStartsOn ??
        a.weekStartsOn ??
        a.locale?.options?.weekStartsOn ??
        0;
    if ("" === e) return "" === t ? c(n) : E(n, NaN);
    const d = { firstWeekContainsDate: i, weekStartsOn: s, locale: o },
      u = [new nt()],
      l = e
        .match(At)
        .map((t) => {
          const e = t[0];
          return e in j ? (0, j[e])(t, o.formatLong) : t;
        })
        .join("")
        .match(Rt),
      m = [];
    for (let a of l) {
      !r?.useAdditionalWeekYearTokens && X(a) && $(a, e, t),
        !r?.useAdditionalDayOfYearTokens && G(a) && $(a, e, t);
      const i = a[0],
        s = jt[i];
      if (s) {
        const { incompatibleTokens: e } = s;
        if (Array.isArray(e)) {
          const t = m.find((t) => e.includes(t.token) || t.token === i);
          if (t)
            throw new RangeError(
              `The format string mustn't contain \`${t.fullToken}\` and \`${a}\` at the same time`,
            );
        } else if ("*" === s.incompatibleTokens && m.length > 0)
          throw new RangeError(
            `The format string mustn't contain \`${a}\` and any other token at the same time`,
          );
        m.push({ token: i, fullToken: a });
        const r = s.run(t, a, o.match, d);
        if (!r) return E(n, NaN);
        u.push(r.setter), (t = r.rest);
      } else {
        if (i.match(zt))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              i +
              "`",
          );
        if (
          ("''" === a
            ? (a = "'")
            : "'" === i && (a = a.match(Gt)[1].replace(Xt, "'")),
          0 !== t.indexOf(a))
        )
          return E(n, NaN);
        t = t.slice(a.length);
      }
    }
    if (t.length > 0 && $t.test(t)) return E(n, NaN);
    const h = u
      .map((t) => t.priority)
      .sort((t, e) => e - t)
      .filter((t, e, n) => n.indexOf(t) === e)
      .map((t) =>
        u
          .filter((e) => e.priority === t)
          .sort((t, e) => e.subPriority - t.subPriority),
      )
      .map((t) => t[0]);
    let f = c(n);
    if (isNaN(f.getTime())) return E(n, NaN);
    const g = {};
    for (const t of h) {
      if (!t.validate(f, d)) return E(n, NaN);
      const e = t.set(f, g, d);
      Array.isArray(e) ? ((f = e[0]), Object.assign(g, e[1])) : (f = e);
    }
    return E(n, f);
  }
  const Vt = t.p + "59ace5a974bea4c8d0d5.png",
    Kt = t.p + "f541347b8394d1ea26f4.png",
    Zt = t.p + "03964590feca9b830c6a.png";
  function _t(t) {
    t.tasks.forEach((t) => {
      !(function (t, e) {
        let n = (function (t) {
          const e = document.createElement("div"),
            n = document.createElement("h4"),
            r = document.createElement("p"),
            a = document.createElement("p"),
            o = document.createElement("p"),
            i = document.createElement("div"),
            s = document.createElement("div"),
            d = document.createElement("div"),
            u = document.createElement("div");
          var c, l;
          return (
            e.classList.add("task-div"),
            (n.textContent = t.title),
            (r.textContent = t.description),
            (a.textContent = "Due: " + t.dueDate),
            (o.textContent = t.priority),
            i.classList.add("task-left-div"),
            s.classList.add("task-right-div"),
            d.classList.add("task-title-div"),
            u.classList.add("task-description-div"),
            d.appendChild(n),
            u.appendChild(r),
            i.appendChild(d),
            i.appendChild(u),
            s.appendChild(a),
            (c = e),
            (l = t.priority.toLowerCase()),
            c.classList.add(l),
            0 != t.completeState &&
              (function (t, e) {
                t.classList.add("complete-task");
              })(e),
            e.appendChild(i),
            e.appendChild(s),
            ((function (t) {
              const e = document.createElement("button");
              let n = new Image();
              return (
                (n.src = Vt),
                n.classList.add("task-modify-btn"),
                e.appendChild(n),
                t.appendChild(e),
                e.addEventListener("click", function (t) {
                  let e = t.target;
                  ue(e.value),
                    (function (t) {
                      t.parentNode.parentNode.classList.contains(
                        "complete-task",
                      )
                        ? t.parentNode.parentNode.classList.remove(
                            "complete-task",
                          )
                        : t.parentNode.parentNode.classList.add(
                            "complete-task",
                          );
                    })(e),
                    oe();
                }),
                e
              );
            })(s).value = t.myTaskUuid),
            ((function (t) {
              const e = document.createElement("button");
              let n = new Image();
              return (
                (n.src = Kt),
                n.classList.add("task-modify-btn"),
                e.appendChild(n),
                t.appendChild(e),
                e.addEventListener("click", function (t) {
                  const e = document.getElementById("edit-form"),
                    n = document.createElement("button");
                  n.classList.add("edit-btn-id"),
                    (n.value = t.target.value),
                    e.appendChild(n),
                    (function (t) {
                      const e = document.getElementById("edit-form"),
                        n = e.elements["task-title"],
                        r = e.elements["task-description"],
                        a = e.elements["task-due-date"],
                        o = e.elements["task-priority"];
                      let i = Jt(t.dueDate, "MMM do, yyyy", new Date());
                      (n.value = t.title),
                        (r.value = t.description),
                        (a.valueAsDate = i),
                        (o.value = t.priority);
                    })(ce(t.target.value)),
                    re().showModal();
                }),
                e
              );
            })(s).value = t.myTaskUuid),
            ((function (t) {
              const e = document.createElement("button");
              let n = new Image();
              return (
                (n.src = Zt),
                n.classList.add("task-modify-btn"),
                e.appendChild(n),
                t.appendChild(e),
                e.addEventListener("click", function (t) {
                  let e = t.target;
                  de(e.value), e.parentNode.parentNode.remove(), oe();
                }),
                e
              );
            })(s).value = t.myTaskUuid),
            e
          );
        })(t);
        document.getElementById(["task-container"]).appendChild(n);
      })(t);
    });
  }
  function te(t) {
    let e = (function (t) {
      const e = document.querySelector(".sidebar-top"),
        n = document.createElement("div"),
        r = document.createElement("button");
      if (
        (n.classList.add("folder-div"),
        r.classList.add("folder-button"),
        (r.textContent = t.title),
        (r.value = t.myFolderUuid),
        n.appendChild(r),
        ((function (t) {
          const e = document.createElement("button");
          let n = new Image();
          return (
            (n.src = Zt),
            n.classList.add("folder-delete-icon"),
            e.appendChild(n),
            t.appendChild(e),
            e.addEventListener("click", function (t) {
              let e = t.target;
              se(e.value), e.parentNode.remove(), oe();
            }),
            e
          );
        })(n).value = t.myFolderUuid),
        "inboxFolder" === t.myFolderUuid)
      ) {
        let t = n.childNodes[1];
        t.parentNode.removeChild(t);
      }
      return (
        e.appendChild(n),
        r.addEventListener("click", function () {
          document.querySelector(".title-display-div"),
            (document.querySelector(".folder-display-title").textContent =
              t.title);
          let e = t.myFolderUuid;
          return ie(t.myFolderUuid), console.log(t.title, t.myFolderUuid), e;
        }),
        n
      );
    })(t);
    const n = document.querySelector(".sidebar-top"),
      r = document.querySelector(".inbox-div");
    "inboxFolder" === t.myFolderUuid ? r.appendChild(e) : n.appendChild(e);
  }
  let ee = u("123456");
  function ne() {
    return document.getElementById("task-dialog");
  }
  function re() {
    return document.getElementById("edit-dialog");
  }
  function ae(t) {
    const { mySuperFolderUuid: e } = t;
    return (
      (ee = u(e)),
      t.folders.forEach((t) => {
        ee.addFolder(
          (function (t) {
            const { title: e, myFolderUuid: n } = t;
            let r = d(e, n);
            return (
              t.tasks.forEach((t) => {
                r.addTask(
                  (function (t) {
                    const {
                      title: e,
                      description: n,
                      dueDate: r,
                      priority: a,
                      myTaskUuid: o,
                      completeState: i,
                    } = t;
                    return (
                      console.log("TASK RECREATE", s(e, n, r, a, o)),
                      s(e, n, r, a, o, i)
                    );
                  })(t),
                );
              }),
              r
            );
          })(t),
        );
      }),
      ee
    );
  }
  function oe() {
    localStorage.setItem("folders", JSON.stringify(ee));
  }
  function ie(t) {
    ee.folders.forEach((e) => {
      t === e.myFolderUuid &&
        ((document.getElementById("task-container").textContent = ""),
        _t(e),
        console.log("match found"));
    });
  }
  function se(t) {
    ee.folders.forEach((e) => {
      t === e.myFolderUuid && (console.log(t), ee.deleteFolder(e));
    });
  }
  function de(t) {
    ee.folders.forEach((e) => {
      e.tasks.forEach((n) => {
        t === n.myTaskUuid && e.deleteTask(n);
      });
    });
  }
  function ue(t) {
    ee.folders.forEach((e) => {
      e.tasks.forEach((e) => {
        t === e.myTaskUuid &&
          (e.setComplete(), console.log(e.completeState), oe());
      });
    });
  }
  function ce(t) {
    let e;
    return (
      ee.folders.forEach((n) => {
        n.tasks.forEach((n) => {
          t === n.myTaskUuid && (e = n);
        });
      }),
      e
    );
  }
  document
    .getElementById("open-task-modal-btn")
    .addEventListener("click", function () {
      ne().reset,
        ne().showModal(),
        (function (t) {
          const e = document.getElementById("folder-selection");
          !(function (t) {
            for (let e = t.options.length; e >= 0; e--) t.remove(0);
          })(e),
            t.folders.forEach((t) => {
              const n = document.createElement("option");
              (n.textContent = t.title),
                (n.value = t.myFolderUuid),
                e.appendChild(n);
            });
        })(JSON.parse(localStorage.getItem("folders")));
    }),
    document
      .getElementById("folder-add-btn")
      .addEventListener("click", function () {
        document.getElementById("folder-form").reset(),
          document.getElementById("folder-dialog").showModal();
      }),
    document
      .getElementById("folder-confirm-btn")
      .addEventListener("click", function (t) {
        t.preventDefault();
        const e = document.getElementById("folder-dialog"),
          { folderTitleInForm: n } = (function () {
            const t = document.getElementById("folder-form");
            return {
              folderForm: t,
              folderTitleInForm: t.elements["folder-title"].value,
            };
          })();
        let r = d(n);
        te(r),
          ee.addFolder(r),
          localStorage.setItem("folders", JSON.stringify(ee)),
          ae(JSON.parse(localStorage.getItem("folders"))),
          e.close();
      }),
    document
      .getElementById("task-add-btn")
      .addEventListener("click", function (t) {
        t.preventDefault();
        const e = document.getElementById("folder-selection").value,
          {
            taskTitle: n,
            taskDescription: r,
            taskDueDate: a,
            taskPriority: o,
          } = (function () {
            const t = document.getElementById("main-form"),
              e = t.elements["task-title"],
              n = t.elements["task-description"],
              r = t.elements["task-due-date"],
              a = t.elements["task-priority"];
            return {
              taskTitle: e.value,
              taskDescription: n.value,
              taskDueDate: _(new Date(r.value), "MMM do, yyyy"),
              taskPriority: a.value,
            };
          })(),
          i = s(n, r, a, o);
        ee.folders.forEach((t) => {
          e === t.myFolderUuid &&
            (t.addTask(i), console.log("oi", i.completeState));
        }),
          localStorage.setItem("folders", JSON.stringify(ee)),
          ae(JSON.parse(localStorage.getItem("folders"))),
          ie(e),
          document.getElementById("main-form").reset(),
          ne().close();
      }),
    document
      .getElementById("task-edit-btn")
      .addEventListener("click", function (t) {
        t.preventDefault();
        const e = document.querySelector(".edit-btn-id"),
          {
            taskTitle: n,
            taskDescription: r,
            taskDueDate: a,
            taskPriority: o,
          } = (function () {
            const t = document.getElementById("edit-form"),
              e = t.elements["task-title"],
              n = t.elements["task-description"],
              r = t.elements["task-due-date"],
              a = t.elements["task-priority"];
            return {
              taskTitle: e.value,
              taskDescription: n.value,
              taskDueDate: _(new Date(r.value), "MMM do, yyyy"),
              taskPriority: a.value,
            };
          })();
        ee.folders.forEach((t) => {
          t.tasks.forEach((i) => {
            e.value === i.myTaskUuid &&
              (i.editTask(n, r, a, o), ie(t.myFolderUuid));
          });
        }),
          oe(),
          e.remove(),
          re().close();
      }),
    (function () {
      if (localStorage.getItem("folders"))
        ae(JSON.parse(localStorage.getItem("folders"))),
          ee.folders.forEach((t) => {
            te(t);
          });
      else {
        const t = s(
            "Wash dishes",
            "Finish washing rest of the dishes",
            _(new Date(2024, 2, 19), "MMM do, yyyy"),
            "High",
          ),
          e = s(
            "Vaccuum",
            "Clean 2nd floor",
            _(new Date(2024, 3, 20), "MMM do, yyyy"),
            "Medium",
          ),
          n = s(
            "Finish project",
            "Iron out bugs from THAT project",
            _(new Date(2024, 1, 30), "MMM do, yyyy"),
            "Low",
          );
        let r = d("Inbox", "inboxFolder");
        r.addTask(n), ee.addFolder(r), te(r);
        let a = d("House Chores");
        a.addTask(e),
          a.addTask(t),
          ee.addFolder(a),
          te(a),
          e.setComplete(),
          console.log("else stuff happened", e.completeState),
          oe();
      }
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSyxnQkFBa0IsVUFDM0ZzZCxFQUFRMWYsRUFBSyxpQkFBa0Isa0NBQW1DNlIsRUFBTyxJQUFJelAsS0FBSyxLQUFNLEVBQUcsSUFBSyxnQkFBa0IsT0FFeEgsSUFBSXVkLEVBQWMxZSxFQUFPLFFBQVMsZUFDbEMwZSxFQUFZdmUsUUFBUXNlLEdBQ3BCekMsR0FBWXBiLFVBQVU4ZCxHQUN0QjdELEdBQWE2RCxHQUViLElBQUlDLEVBQVMzZSxFQUFPLGdCQUNwQjJlLEVBQU94ZSxRQUFRcWUsR0FDZkcsRUFBT3hlLFFBQVFvZSxHQUNmdkMsR0FBWXBiLFVBQVUrZCxHQUN0QjlELEdBQWE4RCxHQUNiSCxFQUFNaGYsY0FDTkMsUUFBUUMsSUFBSSxzQkFBdUI4ZSxFQUFNbmYsZUFFekM4WixJQUNKLENBQ0osQ0FFQXlGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2FkZExlYWRpbmdaZXJvcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9TZXR0ZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90cmFuc3Bvc2UubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi91dGlscy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXRlUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldERheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldElTT0RheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT0RheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9FcmFQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtZZWFyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1dlZWtZZWFyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0V4dGVuZGVkWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9RdWFydGVyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL01vbnRoUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1N0YW5kQWxvbmVNb250aFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Mb2NhbFdlZWtQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1dlZWtQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0RheU9mWWVhclBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXlQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvTG9jYWxEYXlQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT0RheVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9BTVBNUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0FNUE1NaWRuaWdodFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9EYXlQZXJpb2RQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjF0bzEyUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0hvdXIwdG8yM1BhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9Ib3VyMFRvMTFQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvSG91cjFUbzI0UGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL01pbnV0ZVBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9TZWNvbmRQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvRnJhY3Rpb25PZlNlY29uZFBhcnNlci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3BhcnNlL19saWIvcGFyc2Vycy9JU09UaW1lem9uZVdpdGhaUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL0lTT1RpbWV6b25lUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvX2xpYi9wYXJzZXJzL1RpbWVzdGFtcFNlY29uZHNQYXJzZXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9fbGliL3BhcnNlcnMvVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbXlUYXNrVXVpZCA9IHV1aWR2NCgpLCBjb21wbGV0ZVN0YXRlID0gZmFsc2UpIHtcblxuICAgIC8vIGxldCBjb21wbGV0ZVN0YXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCBzZXRDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Z1bmN0aW9uIGlubml0JywgY29tcGxldGVTdGF0ZSk7XG4gICAgICAgIGlmIChjb21wbGV0ZVN0YXRlID09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIGlmJywgY29tcGxldGVTdGF0ZSk7XG4gICAgICAgICAgICBjb21wbGV0ZVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgaWYgYWZ0ZXIgdHJ1ZScsIGNvbXBsZXRlU3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcGxldGVTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdvdXRzaWRlIGlmJywgY29tcGxldGVTdGF0ZSk7XG4gICAgfVxuXG4gICAgdGl0bGUgPSB0aXRsZS50b1N0cmluZygpO1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRhc2sgPSAobmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW50VGFzayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgdGl0bGUgLSAke3RpdGxlfSwgRGVzYyAtICR7ZGVzY3JpcHRpb259LCBEYXRlIC0gJHtkdWVEYXRlfSwgUHJpb3JpdHkgLSAke3ByaW9yaXR5fWApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGl0bGV9LCBcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiBkZXNjcmlwdGlvbn0sIFxuICAgICAgICBnZXQgZHVlRGF0ZSgpIHtyZXR1cm4gZHVlRGF0ZX0sIFxuICAgICAgICBnZXQgcHJpb3JpdHkoKSB7cmV0dXJuIHByaW9yaXR5fSxcbiAgICAgICAgZ2V0IGNvbXBsZXRlU3RhdGUoKSB7cmV0dXJuIGNvbXBsZXRlU3RhdGV9LFxuICAgICAgICBzZXRDb21wbGV0ZSwgXG4gICAgICAgIGNoYW5nZVByaW9yaXR5LFxuICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgcHJpbnRUYXNrLFxuICAgICAgICBteVRhc2tVdWlkXG4gICAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb2xkZXIodGl0bGUsIG15Rm9sZGVyVXVpZD11dWlkdjQoKSkge1xuICAgIFxuICAgIGxldCB0YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9IChuZXdUYXNrTmFtZSkgPT4ge1xuICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXNrICR7aX0gLSAke3Rhc2tzW2ldLnRpdGxlfSwgJHt0YXNrc1tpXS5kdWVEYXRlfSwgJHt0YXNrc1tpXS5wcmlvcml0eX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICAgICAgLy8gdGFza3Muc3BsaWNlKHRhc2tOYW1lLCAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRhc2tzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICBpZiAodGFza3NbaV0ubXlUYXNrVXVpZCA9PT0gdGFza05hbWUubXlUYXNrVXVpZCkge1xuICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge3RpdGxlLCB0YXNrcywgbXlGb2xkZXJVdWlkLCBhZGRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZVRhc2t9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3VwZXJGb2xkZXIobXlTdXBlckZvbGRlclV1aWQ9dXVpZHY0KCkpIHtcbiAgICBsZXQgZm9sZGVycyA9IFtdXG5cbiAgICBjb25zdCBhZGRGb2xkZXIgPSAobmV3Rm9sZGVyTmFtZSkgPT4ge1xuICAgICAgICBmb2xkZXJzLnB1c2gobmV3Rm9sZGVyTmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlRm9sZGVyID0gKGZvbGRlck5hbWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGZvbGRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIGlmIChmb2xkZXJzW2ldLm15Rm9sZGVyVXVpZCA9PT0gZm9sZGVyTmFtZS5teUZvbGRlclV1aWQpIHtcbiAgICAgICAgICAgICAgICBmb2xkZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7Zm9sZGVycywgYWRkRm9sZGVyLCBkZWxldGVGb2xkZXIsIG15U3VwZXJGb2xkZXJVdWlkfVxufSIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCJpbXBvcnQgeyBpc0RhdGUgfSBmcm9tIFwiLi9pc0RhdGUubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGUpXG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdmFsaWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoZGF0ZSkge1xuICBpZiAoIWlzRGF0ZShkYXRlKSAmJiB0eXBlb2YgZGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoX2RhdGUpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1ZhbGlkO1xuIiwiLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc0RhdGU7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogVGhlIGxvY2FsaXplIGZ1bmN0aW9uIGFyZ3VtZW50IGNhbGxiYWNrIHdoaWNoIGFsbG93cyB0byBjb252ZXJ0IHJhdyB2YWx1ZSB0b1xuICogdGhlIGFjdHVhbCB0eXBlLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCB2YWx1ZVxuICovXG5cbi8qKlxuICogVGhlIG1hcCBvZiBsb2NhbGl6ZWQgdmFsdWVzIGZvciBlYWNoIHdpZHRoLlxuICovXG5cbi8qKlxuICogVGhlIGluZGV4IHR5cGUgb2YgdGhlIGxvY2FsZSB1bml0IHZhbHVlLiBJdCB0eXBlcyBjb252ZXJzaW9uIG9mIHVuaXRzIG9mXG4gKiB2YWx1ZXMgdGhhdCBkb24ndCBzdGFydCBhdCAwIChpLmUuIHF1YXJ0ZXJzKS5cbiAqL1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSB1bml0IHZhbHVlIHRvIHRoZSB0dXBsZSBvZiB2YWx1ZXMuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGVyYSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgQkMsXG4gKiB0aGUgc2Vjb25kIGVsZW1lbnQgcmVwcmVzZW50cyBBRC5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgcXVhcnRlciB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgUTEuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIGRheSB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgU3VuZGF5LlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBtb250aCB2YWx1ZXMuIFRoZSBmaXJzdCBlbGVtZW50IHJlcHJlc2VudHMgSmFudWFyeS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBvcHRpb25zPy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiBcInN0YW5kYWxvbmVcIjtcblxuICAgIGxldCB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gXCJmb3JtYXR0aW5nXCIgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9XG4gICAgICAgIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgIGNvbnN0IG1hdGNoUGF0dGVybiA9XG4gICAgICAod2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUGF0dGVybnMgPVxuICAgICAgKHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG5cbiAgICBjb25zdCBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpXG4gICAgICA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKVxuICAgICAgOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIGZpbmRLZXkocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSk7XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKVxuICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmXG4gICAgICBwcmVkaWNhdGUob2JqZWN0W2tleV0pXG4gICAgKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKGxldCBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIChzdHJpbmcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgbGV0IHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrXG4gICAgICA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSlcbiAgICAgIDogcGFyc2VSZXN1bHRbMF07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXRlLmdldERhdGUoKSxcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59XG4iLCIvKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZShkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnRydXN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApXG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC1cbiAgICBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luV2VlayB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2Vla1llYXIgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9XG4gICAgc3RhcnRPZklTT1dlZWsoX2RhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPVxuICAgIHN0YXJ0T2ZXZWVrKF9kYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tIFwiLi4vLi4vZ2V0RGF5T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4uLy4uL2dldFdlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5pbXBvcnQgeyBsaWdodEZvcm1hdHRlcnMgfSBmcm9tIFwiLi9saWdodEZvcm1hdHRlcnMubWpzXCI7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2lnbmVkV2Vla1llYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBpc29XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJRUVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwid29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSBcImVcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiZWVcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgXCJpb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJob1wiKSB7XG4gICAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwibW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJPXCI6XG4gICAgICBjYXNlIFwiT09cIjpcbiAgICAgIGNhc2UgXCJPT09cIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICBjb25zdCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJjb25zdCBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbXCJEXCIsIFwiRERcIl07XG5jb25zdCBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFtcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSBcIllZWVlcIikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgYFVzZSBcXGB5eXl5XFxgIGluc3RlYWQgb2YgXFxgWVlZWVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGAsXG4gICAgKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICBgVXNlIFxcYHl5XFxgIGluc3RlYWQgb2YgXFxgWVlcXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgLFxuICAgICk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09IFwiRFwiKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICBgVXNlIFxcYGRcXGAgaW5zdGVhZCBvZiBcXGBEXFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSBcIkREXCIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgIGBVc2UgXFxgZGRcXGAgaW5zdGVhZCBvZiBcXGBERFxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGAsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL2lzVmFsaWQubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB0aHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGUsXG4gIH07XG5cbiAgY29uc3QgcmVzdWx0ID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiBcIidcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiZcbiAgICAgICAgICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0dGVyKFxuICAgICAgICAgIG9yaWdpbmFsRGF0ZSxcbiAgICAgICAgICBzdWJzdHJpbmcsXG4gICAgICAgICAgbG9jYWxlLmxvY2FsaXplLFxuICAgICAgICAgIGZvcm1hdHRlck9wdGlvbnMsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIik7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgdHJhbnNwb3NlIH0gZnJvbSBcIi4uLy4uL3RyYW5zcG9zZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuY29uc3QgVElNRVpPTkVfVU5JVF9QUklPUklUWSA9IDEwO1xuXG5leHBvcnQgY2xhc3MgU2V0dGVyIHtcbiAgc3ViUHJpb3JpdHkgPSAwO1xuXG4gIHZhbGlkYXRlKF91dGNEYXRlLCBfb3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVNldHRlciBleHRlbmRzIFNldHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbHVlLFxuXG4gICAgdmFsaWRhdGVWYWx1ZSxcblxuICAgIHNldFZhbHVlLFxuXG4gICAgcHJpb3JpdHksXG4gICAgc3ViUHJpb3JpdHksXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsaWRhdGVWYWx1ZSA9IHZhbGlkYXRlVmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSA9IHNldFZhbHVlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBpZiAoc3ViUHJpb3JpdHkpIHtcbiAgICAgIHRoaXMuc3ViUHJpb3JpdHkgPSBzdWJQcmlvcml0eTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShkYXRlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVWYWx1ZShkYXRlLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHNldChkYXRlLCBmbGFncywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnNldFZhbHVlKGRhdGUsIGZsYWdzLCB0aGlzLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIgZXh0ZW5kcyBTZXR0ZXIge1xuICBwcmlvcml0eSA9IFRJTUVaT05FX1VOSVRfUFJJT1JJVFk7XG4gIHN1YlByaW9yaXR5ID0gLTE7XG4gIHNldChkYXRlLCBmbGFncykge1xuICAgIGlmIChmbGFncy50aW1lc3RhbXBJc1NldCkgcmV0dXJuIGRhdGU7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgdHJhbnNwb3NlKGRhdGUsIERhdGUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgdHJhbnNwb3NlXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIHRyYW5zcG9zZXMgdGhlIGRhdGUgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yLiBJdCBoZWxwcyB5b3VcbiAqIHRvIHRyYW5zcG9zZSB0aGUgZGF0ZSBpbiB0aGUgc3lzdGVtIHRpbWUgem9uZSB0byBzYXkgYFVUQ0RhdGVgIG9yIGFueSBvdGhlclxuICogZGF0ZSBleHRlbnNpb24uXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlSW5wdXRUeXBlIC0gVGhlIGlucHV0IGBEYXRlYCB0eXBlIGRlcml2ZWQgZnJvbSB0aGUgcGFzc2VkIGFyZ3VtZW50LlxuICogQHR5cGVQYXJhbSBEYXRlT3V0cHV0VHlwZSAtIFRoZSBvdXRwdXQgYERhdGVgIHR5cGUgZGVyaXZlZCBmcm9tIHRoZSBwYXNzZWQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIGZyb21EYXRlIC0gVGhlIGRhdGUgdG8gdXNlIHZhbHVlcyBmcm9tXG4gKiBAcGFyYW0gY29uc3RydWN0b3IgLSBUaGUgZGF0ZSBjb25zdHJ1Y3RvciB0byB1c2VcbiAqXG4gKiBAcmV0dXJucyBEYXRlIHRyYW5zcG9zZWQgdG8gdGhlIGdpdmVuIGNvbnN0cnVjdG9yXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSBKdWx5IDEwLCAyMDIyIDAwOjAwIGluIGxvY2FsZSB0aW1lIHpvbmVcbiAqIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgyMDIyLCA2LCAxMClcbiAqIC8vPT4gJ1N1biBKdWwgMTAgMjAyMiAwMDowMDowMCBHTVQrMDgwMCAoU2luZ2Fwb3JlIFN0YW5kYXJkIFRpbWUpJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUcmFuc3Bvc2UgdGhlIGRhdGUgdG8gSnVseSAxMCwgMjAyMiAwMDowMCBpbiBVVENcbiAqIHRyYW5zcG9zZShkYXRlLCBVVENEYXRlKVxuICogLy89PiAnU3VuIEp1bCAxMCAyMDIyIDAwOjAwOjAwIEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSknXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UoZnJvbURhdGUsIGNvbnN0cnVjdG9yKSB7XG4gIGNvbnN0IGRhdGUgPVxuICAgIGNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgPyBjb25zdHJ1Y3RGcm9tKGNvbnN0cnVjdG9yLCAwKVxuICAgICAgOiBuZXcgY29uc3RydWN0b3IoMCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoXG4gICAgZnJvbURhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBmcm9tRGF0ZS5nZXRNb250aCgpLFxuICAgIGZyb21EYXRlLmdldERhdGUoKSxcbiAgKTtcbiAgZGF0ZS5zZXRIb3VycyhcbiAgICBmcm9tRGF0ZS5nZXRIb3VycygpLFxuICAgIGZyb21EYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBmcm9tRGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgZnJvbURhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICk7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRyYW5zcG9zZTtcbiIsImltcG9ydCB7IFZhbHVlU2V0dGVyIH0gZnJvbSBcIi4vU2V0dGVyLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcbiAgcnVuKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNldHRlcjogbmV3IFZhbHVlU2V0dGVyKFxuICAgICAgICByZXN1bHQudmFsdWUsXG4gICAgICAgIHRoaXMudmFsaWRhdGUsXG4gICAgICAgIHRoaXMuc2V0LFxuICAgICAgICB0aGlzLnByaW9yaXR5LFxuICAgICAgICB0aGlzLnN1YlByaW9yaXR5LFxuICAgICAgKSxcbiAgICAgIHJlc3Q6IHJlc3VsdC5yZXN0LFxuICAgIH07XG4gIH1cblxuICB2YWxpZGF0ZShfdXRjRGF0ZSwgX3ZhbHVlLCBfb3B0aW9ucykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgbnVtZXJpY1BhdHRlcm5zID0ge1xuICBtb250aDogL14oMVswLTJdfDA/XFxkKS8sIC8vIDAgdG8gMTJcbiAgZGF0ZTogL14oM1swLTFdfFswLTJdP1xcZCkvLCAvLyAwIHRvIDMxXG4gIGRheU9mWWVhcjogL14oMzZbMC02XXwzWzAtNV1cXGR8WzAtMl0/XFxkP1xcZCkvLCAvLyAwIHRvIDM2NlxuICB3ZWVrOiAvXig1WzAtM118WzAtNF0/XFxkKS8sIC8vIDAgdG8gNTNcbiAgaG91cjIzaDogL14oMlswLTNdfFswLTFdP1xcZCkvLCAvLyAwIHRvIDIzXG4gIGhvdXIyNGg6IC9eKDJbMC00XXxbMC0xXT9cXGQpLywgLy8gMCB0byAyNFxuICBob3VyMTFoOiAvXigxWzAtMV18MD9cXGQpLywgLy8gMCB0byAxMVxuICBob3VyMTJoOiAvXigxWzAtMl18MD9cXGQpLywgLy8gMCB0byAxMlxuICBtaW51dGU6IC9eWzAtNV0/XFxkLywgLy8gMCB0byA1OVxuICBzZWNvbmQ6IC9eWzAtNV0/XFxkLywgLy8gMCB0byA1OVxuXG4gIHNpbmdsZURpZ2l0OiAvXlxcZC8sIC8vIDAgdG8gOVxuICB0d29EaWdpdHM6IC9eXFxkezEsMn0vLCAvLyAwIHRvIDk5XG4gIHRocmVlRGlnaXRzOiAvXlxcZHsxLDN9LywgLy8gMCB0byA5OTlcbiAgZm91ckRpZ2l0czogL15cXGR7MSw0fS8sIC8vIDAgdG8gOTk5OVxuXG4gIGFueURpZ2l0c1NpZ25lZDogL14tP1xcZCsvLFxuICBzaW5nbGVEaWdpdFNpZ25lZDogL14tP1xcZC8sIC8vIDAgdG8gOSwgLTAgdG8gLTlcbiAgdHdvRGlnaXRzU2lnbmVkOiAvXi0/XFxkezEsMn0vLCAvLyAwIHRvIDk5LCAtMCB0byAtOTlcbiAgdGhyZWVEaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSwzfS8sIC8vIDAgdG8gOTk5LCAtMCB0byAtOTk5XG4gIGZvdXJEaWdpdHNTaWduZWQ6IC9eLT9cXGR7MSw0fS8sIC8vIDAgdG8gOTk5OSwgLTAgdG8gLTk5OTlcbn07XG5cbmV4cG9ydCBjb25zdCB0aW1lem9uZVBhdHRlcm5zID0ge1xuICBiYXNpY09wdGlvbmFsTWludXRlczogL14oWystXSkoXFxkezJ9KShcXGR7Mn0pP3xaLyxcbiAgYmFzaWM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KXxaLyxcbiAgYmFzaWNPcHRpb25hbFNlY29uZHM6IC9eKFsrLV0pKFxcZHsyfSkoXFxkezJ9KSgoXFxkezJ9KSk/fFovLFxuICBleHRlbmRlZDogL14oWystXSkoXFxkezJ9KTooXFxkezJ9KXxaLyxcbiAgZXh0ZW5kZWRPcHRpb25hbFNlY29uZHM6IC9eKFsrLV0pKFxcZHsyfSk6KFxcZHsyfSkoOihcXGR7Mn0pKT98Wi8sXG59O1xuIiwiaW1wb3J0IHtcbiAgbWlsbGlzZWNvbmRzSW5Ib3VyLFxuICBtaWxsaXNlY29uZHNJbk1pbnV0ZSxcbiAgbWlsbGlzZWNvbmRzSW5TZWNvbmQsXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBWYWx1ZShwYXJzZUZuUmVzdWx0LCBtYXBGbikge1xuICBpZiAoIXBhcnNlRm5SZXN1bHQpIHtcbiAgICByZXR1cm4gcGFyc2VGblJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IG1hcEZuKHBhcnNlRm5SZXN1bHQudmFsdWUpLFxuICAgIHJlc3Q6IHBhcnNlRm5SZXN1bHQucmVzdCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtZXJpY1BhdHRlcm4ocGF0dGVybiwgZGF0ZVN0cmluZykge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IGRhdGVTdHJpbmcubWF0Y2gocGF0dGVybik7XG5cbiAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogcGFyc2VJbnQobWF0Y2hSZXN1bHRbMF0sIDEwKSxcbiAgICByZXN0OiBkYXRlU3RyaW5nLnNsaWNlKG1hdGNoUmVzdWx0WzBdLmxlbmd0aCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRpbWV6b25lUGF0dGVybihwYXR0ZXJuLCBkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gZGF0ZVN0cmluZy5tYXRjaChwYXR0ZXJuKTtcblxuICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBJbnB1dCBpcyAnWidcbiAgaWYgKG1hdGNoUmVzdWx0WzBdID09PSBcIlpcIikge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHJlc3Q6IGRhdGVTdHJpbmcuc2xpY2UoMSksXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHNpZ24gPSBtYXRjaFJlc3VsdFsxXSA9PT0gXCIrXCIgPyAxIDogLTE7XG4gIGNvbnN0IGhvdXJzID0gbWF0Y2hSZXN1bHRbMl0gPyBwYXJzZUludChtYXRjaFJlc3VsdFsyXSwgMTApIDogMDtcbiAgY29uc3QgbWludXRlcyA9IG1hdGNoUmVzdWx0WzNdID8gcGFyc2VJbnQobWF0Y2hSZXN1bHRbM10sIDEwKSA6IDA7XG4gIGNvbnN0IHNlY29uZHMgPSBtYXRjaFJlc3VsdFs1XSA/IHBhcnNlSW50KG1hdGNoUmVzdWx0WzVdLCAxMCkgOiAwO1xuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6XG4gICAgICBzaWduICpcbiAgICAgIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArXG4gICAgICAgIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArXG4gICAgICAgIHNlY29uZHMgKiBtaWxsaXNlY29uZHNJblNlY29uZCksXG4gICAgcmVzdDogZGF0ZVN0cmluZy5zbGljZShtYXRjaFJlc3VsdFswXS5sZW5ndGgpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZykge1xuICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuYW55RGlnaXRzU2lnbmVkLCBkYXRlU3RyaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTkRpZ2l0cyhuLCBkYXRlU3RyaW5nKSB7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zaW5nbGVEaWdpdCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnR3b0RpZ2l0cywgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLnRocmVlRGlnaXRzLCBkYXRlU3RyaW5nKTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuZm91ckRpZ2l0cywgZGF0ZVN0cmluZyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG5ldyBSZWdFeHAoXCJeXFxcXGR7MSxcIiArIG4gKyBcIn1cIiksIGRhdGVTdHJpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU5EaWdpdHNTaWduZWQobiwgZGF0ZVN0cmluZykge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMuc2luZ2xlRGlnaXRTaWduZWQsIGRhdGVTdHJpbmcpO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50d29EaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy50aHJlZURpZ2l0c1NpZ25lZCwgZGF0ZVN0cmluZyk7XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmZvdXJEaWdpdHNTaWduZWQsIGRhdGVTdHJpbmcpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihuZXcgUmVnRXhwKFwiXi0/XFxcXGR7MSxcIiArIG4gKyBcIn1cIiksIGRhdGVTdHJpbmcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlQZXJpb2RFbnVtVG9Ib3VycyhkYXlQZXJpb2QpIHtcbiAgc3dpdGNoIChkYXlQZXJpb2QpIHtcbiAgICBjYXNlIFwibW9ybmluZ1wiOlxuICAgICAgcmV0dXJuIDQ7XG4gICAgY2FzZSBcImV2ZW5pbmdcIjpcbiAgICAgIHJldHVybiAxNztcbiAgICBjYXNlIFwicG1cIjpcbiAgICBjYXNlIFwibm9vblwiOlxuICAgIGNhc2UgXCJhZnRlcm5vb25cIjpcbiAgICAgIHJldHVybiAxMjtcbiAgICBjYXNlIFwiYW1cIjpcbiAgICBjYXNlIFwibWlkbmlnaHRcIjpcbiAgICBjYXNlIFwibmlnaHRcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcih0d29EaWdpdFllYXIsIGN1cnJlbnRZZWFyKSB7XG4gIGNvbnN0IGlzQ29tbW9uRXJhID0gY3VycmVudFllYXIgPiAwO1xuICAvLyBBYnNvbHV0ZSBudW1iZXIgb2YgdGhlIGN1cnJlbnQgeWVhcjpcbiAgLy8gMSAtPiAxIEFDXG4gIC8vIDAgLT4gMSBCQ1xuICAvLyAtMSAtPiAyIEJDXG4gIGNvbnN0IGFic0N1cnJlbnRZZWFyID0gaXNDb21tb25FcmEgPyBjdXJyZW50WWVhciA6IDEgLSBjdXJyZW50WWVhcjtcblxuICBsZXQgcmVzdWx0O1xuICBpZiAoYWJzQ3VycmVudFllYXIgPD0gNTApIHtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgfHwgMTAwO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJhbmdlRW5kID0gYWJzQ3VycmVudFllYXIgKyA1MDtcbiAgICBjb25zdCByYW5nZUVuZENlbnR1cnkgPSBNYXRoLmZsb29yKHJhbmdlRW5kIC8gMTAwKSAqIDEwMDtcbiAgICBjb25zdCBpc1ByZXZpb3VzQ2VudHVyeSA9IHR3b0RpZ2l0WWVhciA+PSByYW5nZUVuZCAlIDEwMDtcbiAgICByZXN1bHQgPSB0d29EaWdpdFllYXIgKyByYW5nZUVuZENlbnR1cnkgLSAoaXNQcmV2aW91c0NlbnR1cnkgPyAxMDAgOiAwKTtcbiAgfVxuXG4gIHJldHVybiBpc0NvbW1vbkVyYSA/IHJlc3VsdCA6IDEgLSByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCk7XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7XG4gIGlzTGVhcFllYXJJbmRleCxcbiAgcGFyc2VORGlnaXRzLFxuICBwYXJzZU51bWVyaWNQYXR0ZXJuLFxufSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmNvbnN0IERBWVNfSU5fTU9OVEggPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5jb25zdCBEQVlTX0lOX01PTlRIX0xFQVBfWUVBUiA9IFtcbiAgMzEsIDI5LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSxcbl07XG5cbi8vIERheSBvZiB0aGUgbW9udGhcbmV4cG9ydCBjbGFzcyBEYXRlUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA5MDtcbiAgc3ViUHJpb3JpdHkgPSAxO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5kYXRlLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJkb1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGRhdGUsIHZhbHVlKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBpc0xlYXBZZWFyID0gaXNMZWFwWWVhckluZGV4KHllYXIpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIGlmIChpc0xlYXBZZWFyKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSBEQVlTX0lOX01PTlRIX0xFQVBfWUVBUlttb250aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IERBWVNfSU5fTU9OVEhbbW9udGhdO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXREYXRlKHZhbHVlKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwiWVwiLFxuICAgIFwiUlwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwid1wiLFxuICAgIFwiSVwiLFxuICAgIFwiRFwiLFxuICAgIFwiaVwiLFxuICAgIFwiZVwiLFxuICAgIFwiY1wiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBhZGREYXlzO1xuIiwiaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCIuL2FkZERheXMubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzZXREYXl9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gZGF5IC0gVGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5IG9mIHRoZSB3ZWVrIHNldFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgd2VlayBkYXkgdG8gU3VuZGF5LCB3aXRoIHRoZSBkZWZhdWx0IHdlZWtTdGFydHNPbiBvZiBTdW5kYXk6XG4gKiBjb25zdCByZXN1bHQgPSBzZXREYXkobmV3IERhdGUoMjAxNCwgOCwgMSksIDApXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgd2VlayBkYXkgdG8gU3VuZGF5LCB3aXRoIGEgd2Vla1N0YXJ0c09uIG9mIE1vbmRheTpcbiAqIGNvbnN0IHJlc3VsdCA9IHNldERheShuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMCwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXkoZGF0ZSwgZGF5LCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgY3VycmVudERheSA9IF9kYXRlLmdldERheSgpO1xuXG4gIGNvbnN0IHJlbWFpbmRlciA9IGRheSAlIDc7XG4gIGNvbnN0IGRheUluZGV4ID0gKHJlbWFpbmRlciArIDcpICUgNztcblxuICBjb25zdCBkZWx0YSA9IDcgLSB3ZWVrU3RhcnRzT247XG4gIGNvbnN0IGRpZmYgPVxuICAgIGRheSA8IDAgfHwgZGF5ID4gNlxuICAgICAgPyBkYXkgLSAoKGN1cnJlbnREYXkgKyBkZWx0YSkgJSA3KVxuICAgICAgOiAoKGRheUluZGV4ICsgZGVsdGEpICUgNykgLSAoKGN1cnJlbnREYXkgKyBkZWx0YSkgJSA3KTtcbiAgcmV0dXJuIGFkZERheXMoX2RhdGUsIGRpZmYpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldERheTtcbiIsImltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPRGF5IH0gZnJvbSBcIi4vZ2V0SVNPRGF5Lm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHNldElTT0RheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICogSVNPIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LlxuICogNyBpcyB0aGUgaW5kZXggb2YgU3VuZGF5LCAxIGlzIHRoZSBpbmRleCBvZiBNb25kYXkgZXRjLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGRheSAtIFRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBuZXcgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIHNldFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgU3VuZGF5IHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBzZXRJU09EYXkobmV3IERhdGUoMjAxNCwgOCwgMSksIDcpXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPRGF5KGRhdGUsIGRheSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgY3VycmVudERheSA9IGdldElTT0RheShfZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSBkYXkgLSBjdXJyZW50RGF5O1xuICByZXR1cm4gYWRkRGF5cyhfZGF0ZSwgZGlmZik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc2V0SVNPRGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT0RheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggaXMgNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXkgZXRjLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIElTTyB3ZWVrIGlzIDI2IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09EYXkobmV3IERhdGUoMjAxMiwgMSwgMjYpKVxuICogLy89PiA3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09EYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgbGV0IGRheSA9IF9kYXRlLmdldERheSgpO1xuXG4gIGlmIChkYXkgPT09IDApIHtcbiAgICBkYXkgPSA3O1xuICB9XG5cbiAgcmV0dXJuIGRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09EYXk7XG4iLCJpbXBvcnQgeyBFcmFQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0VyYVBhcnNlci5tanNcIjtcbmltcG9ydCB7IFllYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1llYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBMb2NhbFdlZWtZZWFyUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Mb2NhbFdlZWtZZWFyUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSVNPV2Vla1llYXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT1dlZWtZZWFyUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgRXh0ZW5kZWRZZWFyUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9FeHRlbmRlZFllYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBRdWFydGVyUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9RdWFydGVyUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1N0YW5kQWxvbmVRdWFydGVyUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgTW9udGhQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL01vbnRoUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgU3RhbmRBbG9uZU1vbnRoUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9TdGFuZEFsb25lTW9udGhQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBMb2NhbFdlZWtQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0xvY2FsV2Vla1BhcnNlci5tanNcIjtcbmltcG9ydCB7IElTT1dlZWtQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT1dlZWtQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBEYXRlUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9EYXRlUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgRGF5T2ZZZWFyUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9EYXlPZlllYXJQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBEYXlQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RheVBhcnNlci5tanNcIjtcbmltcG9ydCB7IExvY2FsRGF5UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Mb2NhbERheVBhcnNlci5tanNcIjtcbmltcG9ydCB7IFN0YW5kQWxvbmVMb2NhbERheVBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvU3RhbmRBbG9uZUxvY2FsRGF5UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSVNPRGF5UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9JU09EYXlQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBBTVBNUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9BTVBNUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgQU1QTU1pZG5pZ2h0UGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9BTVBNTWlkbmlnaHRQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBEYXlQZXJpb2RQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0RheVBlcmlvZFBhcnNlci5tanNcIjtcbmltcG9ydCB7IEhvdXIxdG8xMlBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSG91cjF0bzEyUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSG91cjB0bzIzUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9Ib3VyMHRvMjNQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBIb3VyMFRvMTFQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0hvdXIwVG8xMVBhcnNlci5tanNcIjtcbmltcG9ydCB7IEhvdXIxVG8yNFBhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvSG91cjFUbzI0UGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgTWludXRlUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9NaW51dGVQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBTZWNvbmRQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL1NlY29uZFBhcnNlci5tanNcIjtcbmltcG9ydCB7IEZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0ZyYWN0aW9uT2ZTZWNvbmRQYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBJU09UaW1lem9uZVdpdGhaUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2Vycy9JU09UaW1lem9uZVdpdGhaUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgSVNPVGltZXpvbmVQYXJzZXIgfSBmcm9tIFwiLi9wYXJzZXJzL0lTT1RpbWV6b25lUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wU2Vjb25kc1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvVGltZXN0YW1wU2Vjb25kc1BhcnNlci5tanNcIjtcbmltcG9ydCB7IFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlciB9IGZyb20gXCIuL3BhcnNlcnMvVGltZXN0YW1wTWlsbGlzZWNvbmRzUGFyc2VyLm1qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBwYXJzZWAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEl0J3Mgb2ssIHdlIHdhbnQgYW55IGhlcmVcbmV4cG9ydCBjb25zdCBwYXJzZXJzID0ge1xuICBHOiBuZXcgRXJhUGFyc2VyKCksXG4gIHk6IG5ldyBZZWFyUGFyc2VyKCksXG4gIFk6IG5ldyBMb2NhbFdlZWtZZWFyUGFyc2VyKCksXG4gIFI6IG5ldyBJU09XZWVrWWVhclBhcnNlcigpLFxuICB1OiBuZXcgRXh0ZW5kZWRZZWFyUGFyc2VyKCksXG4gIFE6IG5ldyBRdWFydGVyUGFyc2VyKCksXG4gIHE6IG5ldyBTdGFuZEFsb25lUXVhcnRlclBhcnNlcigpLFxuICBNOiBuZXcgTW9udGhQYXJzZXIoKSxcbiAgTDogbmV3IFN0YW5kQWxvbmVNb250aFBhcnNlcigpLFxuICB3OiBuZXcgTG9jYWxXZWVrUGFyc2VyKCksXG4gIEk6IG5ldyBJU09XZWVrUGFyc2VyKCksXG4gIGQ6IG5ldyBEYXRlUGFyc2VyKCksXG4gIEQ6IG5ldyBEYXlPZlllYXJQYXJzZXIoKSxcbiAgRTogbmV3IERheVBhcnNlcigpLFxuICBlOiBuZXcgTG9jYWxEYXlQYXJzZXIoKSxcbiAgYzogbmV3IFN0YW5kQWxvbmVMb2NhbERheVBhcnNlcigpLFxuICBpOiBuZXcgSVNPRGF5UGFyc2VyKCksXG4gIGE6IG5ldyBBTVBNUGFyc2VyKCksXG4gIGI6IG5ldyBBTVBNTWlkbmlnaHRQYXJzZXIoKSxcbiAgQjogbmV3IERheVBlcmlvZFBhcnNlcigpLFxuICBoOiBuZXcgSG91cjF0bzEyUGFyc2VyKCksXG4gIEg6IG5ldyBIb3VyMHRvMjNQYXJzZXIoKSxcbiAgSzogbmV3IEhvdXIwVG8xMVBhcnNlcigpLFxuICBrOiBuZXcgSG91cjFUbzI0UGFyc2VyKCksXG4gIG06IG5ldyBNaW51dGVQYXJzZXIoKSxcbiAgczogbmV3IFNlY29uZFBhcnNlcigpLFxuICBTOiBuZXcgRnJhY3Rpb25PZlNlY29uZFBhcnNlcigpLFxuICBYOiBuZXcgSVNPVGltZXpvbmVXaXRoWlBhcnNlcigpLFxuICB4OiBuZXcgSVNPVGltZXpvbmVQYXJzZXIoKSxcbiAgdDogbmV3IFRpbWVzdGFtcFNlY29uZHNQYXJzZXIoKSxcbiAgVDogbmV3IFRpbWVzdGFtcE1pbGxpc2Vjb25kc1BhcnNlcigpLFxufTtcbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFcmFQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDE0MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5lcmEoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZXJhKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgZmxhZ3MsIHZhbHVlKSB7XG4gICAgZmxhZ3MuZXJhID0gdmFsdWU7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIlJcIiwgXCJ1XCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIG5vcm1hbGl6ZVR3b0RpZ2l0WWVhciwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG4vLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X1BhdHRlcm5zXG4vLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4vLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4vLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4vLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4vLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4vLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4vLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5leHBvcnQgY2xhc3MgWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTMwO1xuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJZXCIsIFwiUlwiLCBcInVcIiwgXCJ3XCIsIFwiSVwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAoeWVhcikgPT4gKHtcbiAgICAgIHllYXIsXG4gICAgICBpc1R3b0RpZ2l0WWVhcjogdG9rZW4gPT09IFwieXlcIixcbiAgICB9KTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoNCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgY2FzZSBcInlvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwieWVhclwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5pc1R3b0RpZ2l0WWVhciB8fCB2YWx1ZS55ZWFyID4gMDtcbiAgfVxuXG4gIHNldChkYXRlLCBmbGFncywgdmFsdWUpIHtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmICh2YWx1ZS5pc1R3b0RpZ2l0WWVhcikge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFR3b0RpZ2l0WWVhciA9IG5vcm1hbGl6ZVR3b0RpZ2l0WWVhcihcbiAgICAgICAgdmFsdWUueWVhcixcbiAgICAgICAgY3VycmVudFllYXIsXG4gICAgICApO1xuICAgICAgZGF0ZS5zZXRGdWxsWWVhcihub3JtYWxpemVkVHdvRGlnaXRZZWFyLCAwLCAxKTtcbiAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCB5ZWFyID1cbiAgICAgICEoXCJlcmFcIiBpbiBmbGFncykgfHwgZmxhZ3MuZXJhID09PSAxID8gdmFsdWUueWVhciA6IDEgLSB2YWx1ZS55ZWFyO1xuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhciwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuLi8uLi8uLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgbm9ybWFsaXplVHdvRGlnaXRZZWFyLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCBjbGFzcyBMb2NhbFdlZWtZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh5ZWFyKSA9PiAoe1xuICAgICAgeWVhcixcbiAgICAgIGlzVHdvRGlnaXRZZWFyOiB0b2tlbiA9PT0gXCJZWVwiLFxuICAgIH0pO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyg0LCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICBjYXNlIFwiWW9cIjpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKFxuICAgICAgICAgIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgdW5pdDogXCJ5ZWFyXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLmlzVHdvRGlnaXRZZWFyIHx8IHZhbHVlLnllYXIgPiAwO1xuICB9XG5cbiAgc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodmFsdWUuaXNUd29EaWdpdFllYXIpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUd29EaWdpdFllYXIgPSBub3JtYWxpemVUd29EaWdpdFllYXIoXG4gICAgICAgIHZhbHVlLnllYXIsXG4gICAgICAgIGN1cnJlbnRZZWFyLFxuICAgICAgKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoXG4gICAgICAgIG5vcm1hbGl6ZWRUd29EaWdpdFllYXIsXG4gICAgICAgIDAsXG4gICAgICAgIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgICAgKTtcbiAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgeWVhciA9XG4gICAgICAhKFwiZXJhXCIgaW4gZmxhZ3MpIHx8IGZsYWdzLmVyYSA9PT0gMSA/IHZhbHVlLnllYXIgOiAxIC0gdmFsdWUueWVhcjtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIDAsIG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcIlFcIixcbiAgICBcInFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbmV4cG9ydCBjbGFzcyBJU09XZWVrWWVhclBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTMwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgaWYgKHRva2VuID09PSBcIlJcIikge1xuICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0c1NpZ25lZCg0LCBkYXRlU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0V2Vla09mWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gICAgZmlyc3RXZWVrT2ZZZWFyLnNldEZ1bGxZZWFyKHZhbHVlLCAwLCA0KTtcbiAgICBmaXJzdFdlZWtPZlllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZpcnN0V2Vla09mWWVhcik7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJHXCIsXG4gICAgXCJ5XCIsXG4gICAgXCJZXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJRXCIsXG4gICAgXCJxXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzU2lnbmVkIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRZZWFyUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT09IFwidVwiKSB7XG4gICAgICByZXR1cm4gcGFyc2VORGlnaXRzU2lnbmVkKDQsIGRhdGVTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU5EaWdpdHNTaWduZWQodG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSwgMCwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIkdcIiwgXCJ5XCIsIFwiWVwiLCBcIlJcIiwgXCJ3XCIsIFwiSVwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFF1YXJ0ZXJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEyMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgY2FzZSBcIlFRXCI6IC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJZXCIsXG4gICAgXCJSXCIsXG4gICAgXCJxXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhbmRBbG9uZVF1YXJ0ZXJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEyMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgY2FzZSBcInFxXCI6IC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5xdWFydGVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLnF1YXJ0ZXIoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gucXVhcnRlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNDtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCgodmFsdWUgLSAxKSAqIDMsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJZXCIsXG4gICAgXCJSXCIsXG4gICAgXCJRXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJ3XCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJjXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb250aFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcblxuICBwcmlvcml0eSA9IDExMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBjb25zdCB2YWx1ZUNhbGxiYWNrID0gKHZhbHVlKSA9PiB2YWx1ZSAtIDE7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMubW9udGgsIGRhdGVTdHJpbmcpLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUocGFyc2VORGlnaXRzKDIsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiBcIm1vbnRoXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5tb250aChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMTE7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0TW9udGgodmFsdWUsIDEpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IG51bWVyaWNQYXR0ZXJucyB9IGZyb20gXCIuLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YW5kQWxvbmVNb250aFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTEwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+IHZhbHVlIC0gMTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5tb250aCwgZGF0ZVN0cmluZyksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHMoMiwgZGF0ZVN0cmluZyksIHZhbHVlQ2FsbGJhY2spO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwibW9udGhcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm1vbnRoKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2gubW9udGgoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCh2YWx1ZSwgMSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcIkRcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHNldFdlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4uLy4uLy4uL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIExvY2FsIHdlZWsgb2YgeWVhclxuZXhwb3J0IGNsYXNzIExvY2FsV2Vla1BhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gMTAwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy53ZWVrLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJ3b1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDUzO1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc3RhcnRPZldlZWsoc2V0V2VlayhkYXRlLCB2YWx1ZSwgb3B0aW9ucyksIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1xuICAgIFwieVwiLFxuICAgIFwiUlwiLFxuICAgIFwidVwiLFxuICAgIFwicVwiLFxuICAgIFwiUVwiLFxuICAgIFwiTVwiLFxuICAgIFwiTFwiLFxuICAgIFwiSVwiLFxuICAgIFwiZFwiLFxuICAgIFwiRFwiLFxuICAgIFwiaVwiLFxuICAgIFwidFwiLFxuICAgIFwiVFwiLFxuICBdO1xufVxuIiwiaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuL2dldFdlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzZXRXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc2V0V2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBsb2NhbCB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBsb2NhbCB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLCBzYXZpbmcgdGhlIHdlZWtkYXkgbnVtYmVyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHdlZWsgLSBUaGUgd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBsb2NhbCB3ZWVrIHNldFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgdGhlIDFzdCB3ZWVrIHRvIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zOlxuICogY29uc3QgcmVzdWx0ID0gc2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwgMSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgMXN0IHdlZWsgdG8gMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5OlxuICogY29uc3QgcmVzdWx0ID0gc2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwgMSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gU3VuIEphbiA0IDIwMDQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFdlZWsoZGF0ZSwgd2Vlaywgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGdldFdlZWsoX2RhdGUsIG9wdGlvbnMpIC0gd2VlaztcbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmICogNyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzZXRXZWVrO1xuIiwiaW1wb3J0IHsgc2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi8uLi9zZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi4vLi4vLi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gSVNPIHdlZWsgb2YgeWVhclxuZXhwb3J0IGNsYXNzIElTT1dlZWtQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEwMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiSVwiOlxuICAgICAgICByZXR1cm4gcGFyc2VOdW1lcmljUGF0dGVybihudW1lcmljUGF0dGVybnMud2VlaywgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwiSW9cIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLm9yZGluYWxOdW1iZXIoZGF0ZVN0cmluZywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMSAmJiB2YWx1ZSA8PSA1MztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKHNldElTT1dlZWsoZGF0ZSwgdmFsdWUpKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHNldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZSwgc2F2aW5nIHRoZSB3ZWVrZGF5IG51bWJlci5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gd2VlayAtIFRoZSBJU08gd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgSVNPIHdlZWsgc2V0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgNTNyZCBJU08gd2VlayB0byA3IEF1Z3VzdCAyMDA0OlxuICogY29uc3QgcmVzdWx0ID0gc2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA0LCA3LCA3KSwgNTMpXG4gKiAvLz0+IFNhdCBKYW4gMDEgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPV2VlayhkYXRlLCB3ZWVrKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZ2V0SVNPV2VlayhfZGF0ZSkgLSB3ZWVrO1xuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYgKiA3KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHNldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7XG4gIGlzTGVhcFllYXJJbmRleCxcbiAgcGFyc2VORGlnaXRzLFxuICBwYXJzZU51bWVyaWNQYXR0ZXJuLFxufSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXlPZlllYXJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDkwO1xuXG4gIHN1YnByaW9yaXR5ID0gMTtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiRFwiOlxuICAgICAgY2FzZSBcIkREXCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5kYXlPZlllYXIsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIkRvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoZGF0ZSwgdmFsdWUpIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGlzTGVhcFllYXIgPSBpc0xlYXBZZWFySW5kZXgoeWVhcik7XG4gICAgaWYgKGlzTGVhcFllYXIpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDM2NjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMzY1O1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNb250aCgwLCB2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcIllcIixcbiAgICBcIlJcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkVcIixcbiAgICBcImlcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHNldERheSB9IGZyb20gXCIuLi8uLi8uLi9zZXREYXkubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuXG4vLyBEYXkgb2Ygd2Vla1xuZXhwb3J0IGNsYXNzIERheVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG5cbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA2O1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBkYXRlID0gc2V0RGF5KGRhdGUsIHZhbHVlLCBvcHRpb25zKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiRFwiLCBcImlcIiwgXCJlXCIsIFwiY1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgc2V0RGF5IH0gZnJvbSBcIi4uLy4uLy4uL3NldERheS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBtYXBWYWx1ZSwgcGFyc2VORGlnaXRzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG4vLyBMb2NhbCBkYXkgb2Ygd2Vla1xuZXhwb3J0IGNsYXNzIExvY2FsRGF5UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA5MDtcbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoLCBvcHRpb25zKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgd2hvbGVXZWVrRGF5cyA9IE1hdGguZmxvb3IoKHZhbHVlIC0gMSkgLyA3KSAqIDc7XG4gICAgICByZXR1cm4gKCh2YWx1ZSArIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgNikgJSA3KSArIHdob2xlV2Vla0RheXM7XG4gICAgfTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDNcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICBjYXNlIFwiZWVcIjogLy8gMDNcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgICAgIC8vIDNyZFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHVuaXQ6IFwiZGF5XCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KVxuICAgICAgICApO1xuXG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcInNob3J0XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwibmFycm93XCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gNjtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgZGF0ZSA9IHNldERheShkYXRlLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIlJcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIklcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImlcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IHNldERheSB9IGZyb20gXCIuLi8uLi8uLi9zZXREYXkubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgbWFwVmFsdWUsIHBhcnNlTkRpZ2l0cyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbmV4cG9ydCBjbGFzcyBTdGFuZEFsb25lTG9jYWxEYXlQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDkwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IHdob2xlV2Vla0RheXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIDEpIC8gNykgKiA3O1xuICAgICAgcmV0dXJuICgodmFsdWUgKyBvcHRpb25zLndlZWtTdGFydHNPbiArIDYpICUgNykgKyB3aG9sZVdlZWtEYXlzO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAzXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgY2FzZSBcImNjXCI6IC8vIDAzXG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKSwgdmFsdWVDYWxsYmFjayk7XG4gICAgICAvLyAzcmRcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB1bml0OiBcImRheVwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwic2hvcnRcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJuYXJyb3dcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSlcbiAgICAgICAgKTtcblxuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywgeyB3aWR0aDogXCJzaG9ydFwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7IHdpZHRoOiBcIm5hcnJvd1wiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDY7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGRhdGUgPSBzZXREYXkoZGF0ZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXG4gICAgXCJ5XCIsXG4gICAgXCJSXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJxXCIsXG4gICAgXCJRXCIsXG4gICAgXCJNXCIsXG4gICAgXCJMXCIsXG4gICAgXCJJXCIsXG4gICAgXCJkXCIsXG4gICAgXCJEXCIsXG4gICAgXCJFXCIsXG4gICAgXCJpXCIsXG4gICAgXCJlXCIsXG4gICAgXCJ0XCIsXG4gICAgXCJUXCIsXG4gIF07XG59XG4iLCJpbXBvcnQgeyBzZXRJU09EYXkgfSBmcm9tIFwiLi4vLi4vLi4vc2V0SVNPRGF5Lm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbi8vIElTTyBkYXkgb2Ygd2Vla1xuZXhwb3J0IGNsYXNzIElTT0RheVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gOTA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgY29uc3QgdmFsdWVDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgY2FzZSBcImlpXCI6IC8vIDAyXG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbWFwVmFsdWUoXG4gICAgICAgICAgbWF0Y2guZGF5KGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVDYWxsYmFjayxcbiAgICAgICAgKTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZUNhbGxiYWNrLFxuICAgICAgICApO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtYXBWYWx1ZShcbiAgICAgICAgICBtYXRjaC5kYXkoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgICAgfSkgfHxcbiAgICAgICAgICAgIG1hdGNoLmRheShkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlQ2FsbGJhY2ssXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gNztcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZSA9IHNldElTT0RheShkYXRlLCB2YWx1ZSk7XG4gICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcbiAgICBcInlcIixcbiAgICBcIllcIixcbiAgICBcInVcIixcbiAgICBcInFcIixcbiAgICBcIlFcIixcbiAgICBcIk1cIixcbiAgICBcIkxcIixcbiAgICBcIndcIixcbiAgICBcImRcIixcbiAgICBcIkRcIixcbiAgICBcIkVcIixcbiAgICBcImVcIixcbiAgICBcImNcIixcbiAgICBcInRcIixcbiAgICBcIlRcIixcbiAgXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBkYXlQZXJpb2RFbnVtVG9Ib3VycyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEFNUE1QYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDgwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXlQZXJpb2RFbnVtVG9Ib3Vycyh2YWx1ZSksIDAsIDAsIDApO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiYlwiLCBcIkJcIiwgXCJIXCIsIFwia1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IGRheVBlcmlvZEVudW1Ub0hvdXJzIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG5leHBvcnQgY2xhc3MgQU1QTU1pZG5pZ2h0UGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSA4MDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbiwgbWF0Y2gpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGRhdGUuc2V0SG91cnMoZGF5UGVyaW9kRW51bVRvSG91cnModmFsdWUpLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJCXCIsIFwiSFwiLCBcImtcIiwgXCJ0XCIsIFwiVFwiXTtcbn1cbiIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBkYXlQZXJpb2RFbnVtVG9Ib3VycyB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuZXhwb3J0IGNsYXNzIERheVBlcmlvZFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gODA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSkgfHxcbiAgICAgICAgICBtYXRjaC5kYXlQZXJpb2QoZGF0ZVN0cmluZywge1xuICAgICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pIHx8XG4gICAgICAgICAgbWF0Y2guZGF5UGVyaW9kKGRhdGVTdHJpbmcsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KSB8fFxuICAgICAgICAgIG1hdGNoLmRheVBlcmlvZChkYXRlU3RyaW5nLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldEhvdXJzKGRheVBlcmlvZEVudW1Ub0hvdXJzKHZhbHVlKSwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJhXCIsIFwiYlwiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBIb3VyMXRvMTJQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDcwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5ob3VyMTJoLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJob1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAxICYmIHZhbHVlIDw9IDEyO1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBjb25zdCBpc1BNID0gZGF0ZS5nZXRIb3VycygpID49IDEyO1xuICAgIGlmIChpc1BNICYmIHZhbHVlIDwgMTIpIHtcbiAgICAgIGRhdGUuc2V0SG91cnModmFsdWUgKyAxMiwgMCwgMCwgMCk7XG4gICAgfSBlbHNlIGlmICghaXNQTSAmJiB2YWx1ZSA9PT0gMTIpIHtcbiAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGUuc2V0SG91cnModmFsdWUsIDAsIDAsIDApO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcIkhcIiwgXCJLXCIsIFwia1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBIb3VyMHRvMjNQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDcwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5ob3VyMjNoLCBkYXRlU3RyaW5nKTtcbiAgICAgIGNhc2UgXCJIb1wiOlxuICAgICAgICByZXR1cm4gbWF0Y2gub3JkaW5hbE51bWJlcihkYXRlU3RyaW5nLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKF9kYXRlLCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDIzO1xuICB9XG5cbiAgc2V0KGRhdGUsIF9mbGFncywgdmFsdWUpIHtcbiAgICBkYXRlLnNldEhvdXJzKHZhbHVlLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcImFcIiwgXCJiXCIsIFwiaFwiLCBcIktcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIwVG8xMVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIktcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIxMWgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIktvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gMTE7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGlzUE0gPSBkYXRlLmdldEhvdXJzKCkgPj0gMTI7XG4gICAgaWYgKGlzUE0gJiYgdmFsdWUgPCAxMikge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSArIDEyLCAwLCAwLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZS5zZXRIb3Vycyh2YWx1ZSwgMCwgMCwgMCk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1wiaFwiLCBcIkhcIiwgXCJrXCIsIFwidFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBudW1lcmljUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlTkRpZ2l0cywgcGFyc2VOdW1lcmljUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIEhvdXIxVG8yNFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHByaW9yaXR5ID0gNzA7XG5cbiAgcGFyc2UoZGF0ZVN0cmluZywgdG9rZW4sIG1hdGNoKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtZXJpY1BhdHRlcm4obnVtZXJpY1BhdHRlcm5zLmhvdXIyNGgsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcImtvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VORGlnaXRzKHRva2VuLmxlbmd0aCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoX2RhdGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMjQ7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gdmFsdWUgPD0gMjQgPyB2YWx1ZSAlIDI0IDogdmFsdWU7XG4gICAgZGF0ZS5zZXRIb3Vycyhob3VycywgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJhXCIsIFwiYlwiLCBcImhcIiwgXCJIXCIsIFwiS1wiLCBcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBNaW51dGVQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDYwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5taW51dGUsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIm1vXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA1OTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNaW51dGVzKHZhbHVlLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgbnVtZXJpY1BhdHRlcm5zIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZU5EaWdpdHMsIHBhcnNlTnVtZXJpY1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWNvbmRQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDUwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuLCBtYXRjaCkge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgIHJldHVybiBwYXJzZU51bWVyaWNQYXR0ZXJuKG51bWVyaWNQYXR0ZXJucy5zZWNvbmQsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcInNvXCI6XG4gICAgICAgIHJldHVybiBtYXRjaC5vcmRpbmFsTnVtYmVyKGRhdGVTdHJpbmcsIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwYXJzZU5EaWdpdHModG9rZW4ubGVuZ3RoLCBkYXRlU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShfZGF0ZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSA1OTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRTZWNvbmRzKHZhbHVlLCAwKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcInRcIiwgXCJUXCJdO1xufVxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IG1hcFZhbHVlLCBwYXJzZU5EaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBGcmFjdGlvbk9mU2Vjb25kUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAzMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgIGNvbnN0IHZhbHVlQ2FsbGJhY2sgPSAodmFsdWUpID0+XG4gICAgICBNYXRoLmZsb29yKHZhbHVlICogTWF0aC5wb3coMTAsIC10b2tlbi5sZW5ndGggKyAzKSk7XG4gICAgcmV0dXJuIG1hcFZhbHVlKHBhcnNlTkRpZ2l0cyh0b2tlbi5sZW5ndGgsIGRhdGVTdHJpbmcpLCB2YWx1ZUNhbGxiYWNrKTtcbiAgfVxuXG4gIHNldChkYXRlLCBfZmxhZ3MsIHZhbHVlKSB7XG4gICAgZGF0ZS5zZXRNaWxsaXNlY29uZHModmFsdWUpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gW1widFwiLCBcIlRcIl07XG59XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcbmltcG9ydCB7IHRpbWV6b25lUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlVGltZXpvbmVQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG4vLyBUaW1lem9uZSAoSVNPLTg2MDEuICswMDowMCBpcyBgJ1onYClcbmV4cG9ydCBjbGFzcyBJU09UaW1lem9uZVdpdGhaUGFyc2VyIGV4dGVuZHMgUGFyc2VyIHtcbiAgcHJpb3JpdHkgPSAxMDtcblxuICBwYXJzZShkYXRlU3RyaW5nLCB0b2tlbikge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmJhc2ljT3B0aW9uYWxNaW51dGVzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiWFhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuYmFzaWMsIGRhdGVTdHJpbmcpO1xuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbFNlY29uZHMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZE9wdGlvbmFsU2Vjb25kcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlhYWFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKHRpbWV6b25lUGF0dGVybnMuZXh0ZW5kZWQsIGRhdGVTdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIHNldChkYXRlLCBmbGFncywgdmFsdWUpIHtcbiAgICBpZiAoZmxhZ3MudGltZXN0YW1wSXNTZXQpIHJldHVybiBkYXRlO1xuICAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICAgICAgZGF0ZSxcbiAgICAgIGRhdGUuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSAtIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBbXCJ0XCIsIFwiVFwiLCBcInhcIl07XG59XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcbmltcG9ydCB7IHRpbWV6b25lUGF0dGVybnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4uL1BhcnNlci5tanNcIjtcbmltcG9ydCB7IHBhcnNlVGltZXpvbmVQYXR0ZXJuIH0gZnJvbSBcIi4uL3V0aWxzLm1qc1wiO1xuXG4vLyBUaW1lem9uZSAoSVNPLTg2MDEpXG5leHBvcnQgY2xhc3MgSVNPVGltZXpvbmVQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDEwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcsIHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIHBhcnNlVGltZXpvbmVQYXR0ZXJuKFxuICAgICAgICAgIHRpbWV6b25lUGF0dGVybnMuYmFzaWNPcHRpb25hbE1pbnV0ZXMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJ4eFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5iYXNpYywgZGF0ZVN0cmluZyk7XG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4oXG4gICAgICAgICAgdGltZXpvbmVQYXR0ZXJucy5iYXNpY09wdGlvbmFsU2Vjb25kcyxcbiAgICAgICAgICBkYXRlU3RyaW5nLFxuICAgICAgICApO1xuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICAgIHJldHVybiBwYXJzZVRpbWV6b25lUGF0dGVybihcbiAgICAgICAgICB0aW1lem9uZVBhdHRlcm5zLmV4dGVuZGVkT3B0aW9uYWxTZWNvbmRzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwieHh4XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFyc2VUaW1lem9uZVBhdHRlcm4odGltZXpvbmVQYXR0ZXJucy5leHRlbmRlZCwgZGF0ZVN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgc2V0KGRhdGUsIGZsYWdzLCB2YWx1ZSkge1xuICAgIGlmIChmbGFncy50aW1lc3RhbXBJc1NldCkgcmV0dXJuIGRhdGU7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gICAgICBkYXRlLFxuICAgICAgZGF0ZS5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIC0gdmFsdWUsXG4gICAgKTtcbiAgfVxuXG4gIGluY29tcGF0aWJsZVRva2VucyA9IFtcInRcIiwgXCJUXCIsIFwiWFwiXTtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuLi9QYXJzZXIubWpzXCI7XG5pbXBvcnQgeyBwYXJzZUFueURpZ2l0c1NpZ25lZCB9IGZyb20gXCIuLi91dGlscy5tanNcIjtcblxuZXhwb3J0IGNsYXNzIFRpbWVzdGFtcFNlY29uZHNQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDQwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIHJldHVybiBbY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSAqIDEwMDApLCB7IHRpbWVzdGFtcElzU2V0OiB0cnVlIH1dO1xuICB9XG5cbiAgaW5jb21wYXRpYmxlVG9rZW5zID0gXCIqXCI7XG59XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi4vUGFyc2VyLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VBbnlEaWdpdHNTaWduZWQgfSBmcm9tIFwiLi4vdXRpbHMubWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBUaW1lc3RhbXBNaWxsaXNlY29uZHNQYXJzZXIgZXh0ZW5kcyBQYXJzZXIge1xuICBwcmlvcml0eSA9IDIwO1xuXG4gIHBhcnNlKGRhdGVTdHJpbmcpIHtcbiAgICByZXR1cm4gcGFyc2VBbnlEaWdpdHNTaWduZWQoZGF0ZVN0cmluZyk7XG4gIH1cblxuICBzZXQoZGF0ZSwgX2ZsYWdzLCB2YWx1ZSkge1xuICAgIHJldHVybiBbY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSksIHsgdGltZXN0YW1wSXNTZXQ6IHRydWUgfV07XG4gIH1cblxuICBpbmNvbXBhdGlibGVUb2tlbnMgPSBcIipcIjtcbn1cbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9nZXREZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGVuVVMgYXMgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL2xvY2FsZS9lbi1VUy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGxvbmdGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQge1xuICBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLFxuICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sXG4gIHRocm93UHJvdGVjdGVkRXJyb3IsXG59IGZyb20gXCIuL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qc1wiO1xuaW1wb3J0IHsgcGFyc2VycyB9IGZyb20gXCIuL3BhcnNlL19saWIvcGFyc2Vycy5tanNcIjtcbmltcG9ydCB7IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyIH0gZnJvbSBcIi4vcGFyc2UvX2xpYi9TZXR0ZXIubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZX0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5cbmNvbnN0IG5vdFdoaXRlc3BhY2VSZWdFeHAgPSAvXFxTLztcbmNvbnN0IHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBwYXJzZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGF0ZSBwYXJzZWQgZnJvbSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyBpbiB0aGUgZm9ybWF0IHN0cmluZyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIGZvcm1hdCBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDUgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBOb3QgYWxsIHRva2VucyBhcmUgY29tcGF0aWJsZS4gQ29tYmluYXRpb25zIHRoYXQgZG9uJ3QgbWFrZSBzZW5zZSBvciBjb3VsZCBsZWFkIHRvIGJ1Z3MgYXJlIHByb2hpYml0ZWRcbiAqIGFuZCB3aWxsIHRocm93IGBSYW5nZUVycm9yYC4gRm9yIGV4YW1wbGUgdXNhZ2Ugb2YgMjQtaG91ciBmb3JtYXQgdG9rZW4gd2l0aCBBTS9QTSB0b2tlbiB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwYXJzZSgnMjMgQU0nLCAnSEggYScsIG5ldyBEYXRlKCkpXG4gKiAvLz0+IFJhbmdlRXJyb3I6IFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBgSEhgIGFuZCBgYWAgYXQgdGhlIHNhbWUgdGltZVxuICogYGBgXG4gKlxuICogU2VlIHRoZSBjb21wYXRpYmlsaXR5IHRhYmxlOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC9lLzJQQUNYLTF2UU9QVTN4VWhwbGxsNmR5b01tVlVYSEtsXzhDUkRzNl91ZUxtZXgzU29xd2h1b2xrdU4zTzA1bDRycXg1aDFkS1g4ZWI0NlVsLUNDU3JxL3B1Ymh0bWw/Z2lkPTAmc2luZ2xlPXRydWVcbiAqXG4gKiBBY2NlcHRlZCBmb3JtYXQgc3RyaW5nIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxQcmlvcnwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxNDAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCAxMzAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDk5OTkgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCAxMzAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcsIDkwMDAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCA5OTk5OTk5dGggICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA0LDYgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDEyMywgOTk5ICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDQsNiAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyLDQgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCAxMzAgfCBSICAgICAgIHwgLTQzLCAxLCAxOTAwLCAyMDE3LCA5OTk5LCAtOTk5OSAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlIgICAgICB8IC00MywgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICB8IDQsNSAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDEsIDEyMywgOTk5LCAtOTk5ICAgICAgICAgfCA0LDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDEsIDIwMTcsIDk5OTksIC05OTk5ICAgIHwgNCw1ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDIsNCw1IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IDEzMCB8IHUgICAgICAgfCAtNDMsIDEsIDE5MDAsIDIwMTcsIDk5OTksIC05OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgOTksIC05OSAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTIzLCA5OTksIC05OTkgICAgICAgICB8IDQgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMjAxNywgOTk5OSwgLTk5OTkgICAgfCA0ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiw0ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgMTIwIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgMTIwIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgMTEwIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgMTEwIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgMTAwIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgMTAwIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgIDkwIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCAgOTAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgIDkwIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDUgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDUgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8ICA5MCB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCAgOTAgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDgwIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgIDgwIHwgYi4uYmJiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgIDgwIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgIDcwIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDYwIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIDUwIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgIDQwIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCAgMzAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgIDIwIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCAgMTAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8ICAxMCB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgIE5BIHwgUCAgICAgICB8IDA1LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQICAgICAgfCBNYXkgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFAgICAgIHwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUCAgICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgICAgICAgICAgICB8IDIsNSw4IHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8ICBOQSB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgIE5BIHwgUHAgICAgICB8IDA1LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFBQcHAgICAgfCBNYXkgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBQUFBwcCAgIHwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgUFBQUHBwICB8IFN1bmRheSwgTWF5IDI5dGgsIDE0NTMgYXQgLi4uICAgICB8IDIsNSw4IHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXIuXG4gKiAgICBJbiBgZm9ybWF0YCBmdW5jdGlvbiwgdGhleSB3aWxsIHByb2R1Y2UgZGlmZmVyZW50IHJlc3VsdDpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogICAgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBib3RoIGZvcm1hdHRpbmcgYW5kIHN0YW5kLWFsb25lIHVuaXRzIGludGVyY2hhbmdhYmx5LlxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZTpcbiAqICAgIC0gZm9yIG51bWVyaWNhbCB1bml0cyAoYHl5eXl5eXl5YCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCBhIG51bWJlclxuICogICAgICBhcyB3aWRlIGFzIHRoZSBzZXF1ZW5jZVxuICogICAgLSBmb3IgdGV4dCB1bml0cyAoYE1NTU1NTU1NYCkgYHBhcnNlYCB3aWxsIHRyeSB0byBtYXRjaCB0aGUgd2lkZXN0IHZhcmlhdGlvbiBvZiB0aGUgdW5pdC5cbiAqICAgICAgVGhlc2UgdmFyaWF0aW9ucyBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAzLiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA0LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIHdpbGwgdHJ5IHRvIGd1ZXNzIHRoZSBjZW50dXJ5IG9mIHR3byBkaWdpdCB5ZWFyIGJ5IHByb3hpbWl0eSB3aXRoIGByZWZlcmVuY2VEYXRlYDpcbiAqXG4gKiAgICBgcGFyc2UoJzUwJywgJ3l5JywgbmV3IERhdGUoMjAxOCwgMCwgMSkpIC8vPT4gU2F0IEphbiAwMSAyMDUwIDAwOjAwOjAwYFxuICpcbiAqICAgIGBwYXJzZSgnNzUnLCAneXknLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBXZWQgSmFuIDAxIDE5NzUgMDA6MDA6MDBgXG4gKlxuICogICAgd2hpbGUgYHV1YCB3aWxsIGp1c3QgYXNzaWduIHRoZSB5ZWFyIGFzIGlzOlxuICpcbiAqICAgIGBwYXJzZSgnNTAnLCAndXUnLCBuZXcgRGF0ZSgyMDE4LCAwLCAxKSkgLy89PiBTYXQgSmFuIDAxIDAwNTAgMDA6MDA6MDBgXG4gKlxuICogICAgYHBhcnNlKCc3NScsICd1dScsIG5ldyBEYXRlKDIwMTgsIDAsIDEpKSAvLz0+IFR1ZSBKYW4gMDEgMDA3NSAwMDowMDowMGBcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtzZXRJU09XZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9zZXRJU09XZWVrWWVhcilcbiAqICAgIGFuZCBbc2V0V2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0V2Vla1llYXIpKS5cbiAqXG4gKiA1LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDYuIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogNy4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOC4gYFArYCB0b2tlbnMgZG8gbm90IGhhdmUgYSBkZWZpbmVkIHByaW9yaXR5IHNpbmNlIHRoZXkgYXJlIG1lcmVseSBhbGlhc2VzIHRvIG90aGVyIHRva2VucyBiYXNlZFxuICogICAgb24gdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiAgICB1c2luZyBgZW4tVVNgIGxvY2FsZTogYFBgID0+IGBNTS9kZC95eXl5YFxuICogICAgdXNpbmcgYGVuLVVTYCBsb2NhbGU6IGBwYCA9PiBgaGg6bW0gYWBcbiAqICAgIHVzaW5nIGBwdC1CUmAgbG9jYWxlOiBgUGAgPT4gYGRkL01NL3l5eXlgXG4gKiAgICB1c2luZyBgcHQtQlJgIGxvY2FsZTogYHBgID0+IGBISDptbWBcbiAqXG4gKiBWYWx1ZXMgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgZGF0ZSBpbiB0aGUgZGVzY2VuZGluZyBvcmRlciBvZiBpdHMgdW5pdCdzIHByaW9yaXR5LlxuICogVW5pdHMgb2YgYW4gZXF1YWwgcHJpb3JpdHkgb3ZlcndyaXRlIGVhY2ggb3RoZXIgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UuXG4gKlxuICogSWYgbm8gdmFsdWVzIG9mIGhpZ2hlciBwcmlvcml0eSBhcmUgcGFyc2VkIChlLmcuIHdoZW4gcGFyc2luZyBzdHJpbmcgJ0phbnVhcnkgMXN0JyB3aXRob3V0IGEgeWVhciksXG4gKiB0aGUgdmFsdWVzIHdpbGwgYmUgdGFrZW4gZnJvbSAzcmQgYXJndW1lbnQgYHJlZmVyZW5jZURhdGVgIHdoaWNoIHdvcmtzIGFzIGEgY29udGV4dCBvZiBwYXJzaW5nLlxuICpcbiAqIGByZWZlcmVuY2VEYXRlYCBtdXN0IGJlIHBhc3NlZCBmb3IgY29ycmVjdCB3b3JrIG9mIHRoZSBmdW5jdGlvbi5cbiAqIElmIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBgcmVmZXJlbmNlRGF0ZWAgdG8gc3VwcGx5LCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgRGF0ZTpcbiAqIGBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlgXG4gKiBJbiB0aGlzIGNhc2UgcGFyc2luZyB3aWxsIGJlIGRvbmUgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqIElmIGByZWZlcmVuY2VEYXRlYCBpcyBgSW52YWxpZCBEYXRlYCBvciBhIHZhbHVlIG5vdCBjb252ZXJ0aWJsZSB0byB2YWxpZCBgRGF0ZWAsXG4gKiB0aGVuIGBJbnZhbGlkIERhdGVgIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogSWYgYGZvcm1hdFN0cmluZ2AgbWF0Y2hlcyB3aXRoIGBkYXRlU3RyaW5nYCBidXQgZG9lcyBub3QgcHJvdmlkZXMgdG9rZW5zLCBgcmVmZXJlbmNlRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBJZiBwYXJzaW5nIGZhaWxlZCwgYEludmFsaWQgRGF0ZWAgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVTdHIgLSBUaGUgc3RyaW5nIHRvIHBhcnNlXG4gKiBAcGFyYW0gZm9ybWF0U3RyIC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSByZWZlcmVuY2VEYXRlIC0gZGVmaW5lcyB2YWx1ZXMgbWlzc2luZyBmcm9tIHRoZSBwYXJzZWQgZGF0ZVN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlXG4gKlxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbWF0Y2hgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDExIEZlYnJ1YXJ5IDIwMTQgZnJvbSBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnMDIvMTEvMjAxNCcsICdNTS9kZC95eXl5JywgbmV3IERhdGUoKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFBhcnNlIDI4dGggb2YgRmVicnVhcnkgaW4gRXNwZXJhbnRvIGxvY2FsZSBpbiB0aGUgY29udGV4dCBvZiAyMDEwIHllYXI6XG4gKiBpbXBvcnQgZW8gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IHBhcnNlKCcyOC1hIGRlIGZlYnJ1YXJvJywgXCJkbyAnZGUnIE1NTU1cIiwgbmV3IERhdGUoMjAxMCwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb1xuICogfSlcbiAqIC8vPT4gU3VuIEZlYiAyOCAyMDEwIDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShkYXRlU3RyLCBmb3JtYXRTdHIsIHJlZmVyZW5jZURhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGlmIChmb3JtYXRTdHIgPT09IFwiXCIpIHtcbiAgICBpZiAoZGF0ZVN0ciA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJGbk9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGUsXG4gIH07XG5cbiAgLy8gSWYgdGltZXpvbmUgaXNuJ3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgc3lzdGVtIHRpbWV6b25lXG4gIGNvbnN0IHNldHRlcnMgPSBbbmV3IERhdGVUb1N5c3RlbVRpbWV6b25lU2V0dGVyKCldO1xuXG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyIGluIGxvbmdGb3JtYXR0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YnN0cmluZztcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpXG4gICAgLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApO1xuXG4gIGNvbnN0IHVzZWRUb2tlbnMgPSBbXTtcblxuICBmb3IgKGxldCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pXG4gICAgKSB7XG4gICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXRTdHIsIGRhdGVTdHIpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbilcbiAgICApIHtcbiAgICAgIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgZGF0ZVN0cik7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSB0b2tlblswXTtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAocGFyc2VyKSB7XG4gICAgICBjb25zdCB7IGluY29tcGF0aWJsZVRva2VucyB9ID0gcGFyc2VyO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jb21wYXRpYmxlVG9rZW5zKSkge1xuICAgICAgICBjb25zdCBpbmNvbXBhdGlibGVUb2tlbiA9IHVzZWRUb2tlbnMuZmluZChcbiAgICAgICAgICAodXNlZFRva2VuKSA9PlxuICAgICAgICAgICAgaW5jb21wYXRpYmxlVG9rZW5zLmluY2x1ZGVzKHVzZWRUb2tlbi50b2tlbikgfHxcbiAgICAgICAgICAgIHVzZWRUb2tlbi50b2tlbiA9PT0gZmlyc3RDaGFyYWN0ZXIsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmNvbXBhdGlibGVUb2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgYFRoZSBmb3JtYXQgc3RyaW5nIG11c3RuJ3QgY29udGFpbiBcXGAke2luY29tcGF0aWJsZVRva2VuLmZ1bGxUb2tlbn1cXGAgYW5kIFxcYCR7dG9rZW59XFxgIGF0IHRoZSBzYW1lIHRpbWVgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VyLmluY29tcGF0aWJsZVRva2VucyA9PT0gXCIqXCIgJiYgdXNlZFRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIGBUaGUgZm9ybWF0IHN0cmluZyBtdXN0bid0IGNvbnRhaW4gXFxgJHt0b2tlbn1cXGAgYW5kIGFueSBvdGhlciB0b2tlbiBhdCB0aGUgc2FtZSB0aW1lYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdXNlZFRva2Vucy5wdXNoKHsgdG9rZW46IGZpcnN0Q2hhcmFjdGVyLCBmdWxsVG9rZW46IHRva2VuIH0pO1xuXG4gICAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlci5ydW4oXG4gICAgICAgIGRhdGVTdHIsXG4gICAgICAgIHRva2VuLFxuICAgICAgICBsb2NhbGUubWF0Y2gsXG4gICAgICAgIHN1YkZuT3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cblxuICAgICAgc2V0dGVycy5wdXNoKHBhcnNlUmVzdWx0LnNldHRlcik7XG5cbiAgICAgIGRhdGVTdHIgPSBwYXJzZVJlc3VsdC5yZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgIFwiRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGBcIiArXG4gICAgICAgICAgICBmaXJzdENoYXJhY3RlciArXG4gICAgICAgICAgICBcImBcIixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHRva2VuID09PSBcIicnXCIpIHtcbiAgICAgICAgdG9rZW4gPSBcIidcIjtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHRva2VuID0gY2xlYW5Fc2NhcGVkU3RyaW5nKHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3V0IHRva2VuIGZyb20gc3RyaW5nLCBvciwgaWYgc3RyaW5nIGRvZXNuJ3QgbWF0Y2ggdGhlIHRva2VuLCByZXR1cm4gSW52YWxpZCBEYXRlXG4gICAgICBpZiAoZGF0ZVN0ci5pbmRleE9mKHRva2VuKSA9PT0gMCkge1xuICAgICAgICBkYXRlU3RyID0gZGF0ZVN0ci5zbGljZSh0b2tlbi5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgcmVtYWluaW5nIGlucHV0IGNvbnRhaW5zIHNvbWV0aGluZyBvdGhlciB0aGFuIHdoaXRlc3BhY2VcbiAgaWYgKGRhdGVTdHIubGVuZ3RoID4gMCAmJiBub3RXaGl0ZXNwYWNlUmVnRXhwLnRlc3QoZGF0ZVN0cikpIHtcbiAgICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBOYU4pO1xuICB9XG5cbiAgY29uc3QgdW5pcXVlUHJpb3JpdHlTZXR0ZXJzID0gc2V0dGVyc1xuICAgIC5tYXAoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5KVxuICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSlcbiAgICAuZmlsdGVyKChwcmlvcml0eSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHByaW9yaXR5KSA9PT0gaW5kZXgpXG4gICAgLm1hcCgocHJpb3JpdHkpID0+XG4gICAgICBzZXR0ZXJzXG4gICAgICAgIC5maWx0ZXIoKHNldHRlcikgPT4gc2V0dGVyLnByaW9yaXR5ID09PSBwcmlvcml0eSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIuc3ViUHJpb3JpdHkgLSBhLnN1YlByaW9yaXR5KSxcbiAgICApXG4gICAgLm1hcCgoc2V0dGVyQXJyYXkpID0+IHNldHRlckFycmF5WzBdKTtcblxuICBsZXQgZGF0ZSA9IHRvRGF0ZShyZWZlcmVuY2VEYXRlKTtcblxuICBpZiAoaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdEZyb20ocmVmZXJlbmNlRGF0ZSwgTmFOKTtcbiAgfVxuXG4gIGNvbnN0IGZsYWdzID0ge307XG4gIGZvciAoY29uc3Qgc2V0dGVyIG9mIHVuaXF1ZVByaW9yaXR5U2V0dGVycykge1xuICAgIGlmICghc2V0dGVyLnZhbGlkYXRlKGRhdGUsIHN1YkZuT3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKHJlZmVyZW5jZURhdGUsIE5hTik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gc2V0dGVyLnNldChkYXRlLCBmbGFncywgc3ViRm5PcHRpb25zKTtcbiAgICAvLyBSZXN1bHQgaXMgdHVwbGUgKGRhdGUsIGZsYWdzKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgIGRhdGUgPSByZXN1bHRbMF07XG4gICAgICBPYmplY3QuYXNzaWduKGZsYWdzLCByZXN1bHRbMV0pO1xuICAgICAgLy8gUmVzdWx0IGlzIGRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZSA9IHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uc3RydWN0RnJvbShyZWZlcmVuY2VEYXRlLCBkYXRlKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgcGFyc2U7XG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyBhcyBnZXRJbnRlcm5hbERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXREZWZhdWx0T3B0aW9uc1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgZGVmYXVsdCBvcHRpb25zLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgZGVmYXVsdHMgZm9yXG4gKiBgb3B0aW9ucy5sb2NhbGVgLCBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgXG4gKiBhcmd1bWVudHMgZm9yIGFsbCBmdW5jdGlvbnMuXG4gKlxuICogWW91IGNhbiBjaGFuZ2UgdGhlc2Ugd2l0aCBbc2V0RGVmYXVsdE9wdGlvbnNdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3Mvc2V0RGVmYXVsdE9wdGlvbnMpLlxuICpcbiAqIEByZXR1cm5zIFRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgcmVzdWx0ID0gZ2V0RGVmYXVsdE9wdGlvbnMoKVxuICogLy89PiB7fVxuICpcbiAqIEBleGFtcGxlXG4gKiBzZXREZWZhdWx0T3B0aW9ucyh7IHdlZWtTdGFyc09uOiAxLCBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIGNvbnN0IHJlc3VsdCA9IGdldERlZmF1bHRPcHRpb25zKClcbiAqIC8vPT4geyB3ZWVrU3RhcnNPbjogMSwgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0SW50ZXJuYWxEZWZhdWx0T3B0aW9ucygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREZWZhdWx0T3B0aW9ucztcbiIsImltcG9ydCB7XG4gICAgZGlzcGxheUN1cnJlbnRGb2xkZXJXaXRoSWQsXG4gICAgZGVsZXRlRm9sZGVyV2l0aElkLFxuICAgIGRlbGV0ZVRhc2tXaXRoSWQsXG4gICAgY2hhbmdlVGFza1N0YXR1cyxcbiAgICBmaW5kVGFza1dpdGhJZCxcbiAgICBnZXRFZGl0RGlhbG9nLFxuICAgIHNldExvY2FsU3RvcmFnZVxuXG59IGZyb20gJy4uL2luZGV4LmpzJztcblxuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJy4uL2ltZy9jaGVjay5wbmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4uL2ltZy9lZGl0LnBuZyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi9pbWcvZGVsZXRlLnBuZyc7XG5cbi8vIENyZWF0ZSBhbGwgZWxlbWVudHMgZm9yIGVhY2ggdGFzayBwcm9wZXJ0eSBhbmQgY2hhbmdlIHRleHQgY29udGVudCB0byBjb3JyZXNwb25kaW5nIHZhbHVlXG4vLyBUaGVuIGFkZCB0aGVtIHRvIGEgbWFpbiBkaXYgYW5kIHJldHVyblxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodGFza05hbWUpIHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza1RpdGxlSW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlSW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGFza0xlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIFxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYnKTtcbiAgICB0YXNrVGl0bGVJbkRpdi50ZXh0Q29udGVudCA9IHRhc2tOYW1lLnRpdGxlO1xuICAgIHRhc2tEZXNjcmlwdGlvbkluRGl2LnRleHRDb250ZW50ID0gdGFza05hbWUuZGVzY3JpcHRpb247XG4gICAgdGFza0R1ZURhdGVJbkRpdi50ZXh0Q29udGVudCA9ICdEdWU6ICcrdGFza05hbWUuZHVlRGF0ZTtcbiAgICB0YXNrUHJpb3JpdHlJbkRpdi50ZXh0Q29udGVudCA9IHRhc2tOYW1lLnByaW9yaXR5O1xuXG4gICAgdGFza0xlZnREaXYuY2xhc3NMaXN0LmFkZCgndGFzay1sZWZ0LWRpdicpO1xuICAgIHRhc2tSaWdodERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXJpZ2h0LWRpdicpO1xuICAgIHRhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlLWRpdicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uLWRpdicpO1xuXG4gICAgdGFza1RpdGxlRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZUluRGl2KTtcbiAgICB0YXNrRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5EaXYpO1xuXG4gICAgdGFza0xlZnREaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlRGl2KTtcbiAgICB0YXNrTGVmdERpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25EaXYpO1xuICAgIHRhc2tSaWdodERpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUluRGl2KTtcblxuICAgIC8vIEFkZCBjb2xvdXIgb2YgcHJpb3JpdHlcbiAgICBjaGFuZ2VQcmlvcml0eVN0eWxlKHRhc2tEaXYsICh0YXNrTmFtZS5wcmlvcml0eSkudG9Mb3dlckNhc2UoKSk7XG5cbiAgICBpZiAodGFza05hbWUuY29tcGxldGVTdGF0ZSAhPSBmYWxzZSkge1xuICAgICAgICBjaGFuZ2VDb21wbGV0ZVN0YXRlU3R5bGUodGFza0RpdiwgJ2NvbXBsZXRlLXRhc2snKTtcbiAgICB9XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMZWZ0RGl2KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tSaWdodERpdik7XG5cbiAgICBjcmVhdGVUYXNrU3RhdHVzQnV0dG9uKHRhc2tSaWdodERpdikudmFsdWUgPSB0YXNrTmFtZS5teVRhc2tVdWlkO1xuICAgIGNyZWF0ZVRhc2tFZGl0QnV0dG9uKHRhc2tSaWdodERpdikudmFsdWUgPSB0YXNrTmFtZS5teVRhc2tVdWlkO1xuICAgIGNyZWF0ZVRhc2tEZWxldGVCdXR0b24odGFza1JpZ2h0RGl2KS52YWx1ZSA9IHRhc2tOYW1lLm15VGFza1V1aWQ7XG5cbiAgICByZXR1cm4gdGFza0Rpdjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlTdHlsZShlbGVtZW50LCBwcmlvcml0eSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlU3RhdGVTdHlsZShlbGVtZW50LCBjb21wbGV0ZUNsYXNzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbXBsZXRlQ2xhc3MpO1xufVxuXG4vLyBUYWtlIGluIHRhc2sgYW5kIHdoZXJlIHRvIGFwcGVuZFxuLy8gQ3JlYXRlIHRoZSB0YXNrIHVzaW5nIGNyZWF0ZVRhc2tFbGVtZW50IGFuZCBhc3NpZ24gdG8gdmFyaWFibGVcbi8vIFRhcmdldCBlbGVtZW50IHRvIGFwcGVuZCB0byBhbmQgYXBwZW5kXG5mdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2tOYW1lLCBsb2NhdGlvbikge1xuICAgIGxldCB0YXNrRE9NID0gY3JlYXRlVGFza0VsZW1lbnQodGFza05hbWUpO1xuXG4gICAgY29uc3QgbG9jYXRpb25ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbik7XG4gICAgbG9jYXRpb25ET00uYXBwZW5kQ2hpbGQodGFza0RPTSk7XG59XG5cbi8vIFRha2UgaW4gZm9sZGVyIG5hbWUgdGhlbiBsb29wIHRocm91Z2ggdGFza3MgaW5zaWRlIGZvbGRlciB0byBhcHBlbmQgdG8gc2NyZWVuXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVyVGFza3MoZm9sZGVyTmFtZSkge1xuICAgIGZvbGRlck5hbWUudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgYXBwZW5kVGFzayh0YXNrLCBbJ3Rhc2stY29udGFpbmVyJ10pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrRm9ybUluZm8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZUluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stdGl0bGUnXTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWRlc2NyaXB0aW9uJ107XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWR1ZS1kYXRlJ107XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5Gb3JtID0gZm9ybS5lbGVtZW50c1sndGFzay1wcmlvcml0eSddO1xuICAgIFxuICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVJbkZvcm0udmFsdWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkluRm9ybS52YWx1ZTtcbiAgICBsZXQgdGFza0R1ZURhdGUgPSBmb3JtYXQobmV3IERhdGUodGFza0R1ZURhdGVJbkZvcm0udmFsdWUpLCBcIk1NTSBkb1xcLCB5eXl5XCIpO1xuICAgIGxldCB0YXNrUHJpb3JpdHkgPSB0YXNrUHJpb3JpdHlJbkZvcm0udmFsdWU7XG5cbiAgICByZXR1cm4ge3Rhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5fTtcbn0gXG5cbmZ1bmN0aW9uIGdldFRhc2tFZGl0Rm9ybUluZm8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWZvcm0nKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZUluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stdGl0bGUnXTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWRlc2NyaXB0aW9uJ107XG4gICAgY29uc3QgdGFza0R1ZURhdGVJbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLWR1ZS1kYXRlJ107XG4gICAgY29uc3QgdGFza1ByaW9yaXR5SW5Gb3JtID0gZm9ybS5lbGVtZW50c1sndGFzay1wcmlvcml0eSddO1xuICAgIFxuICAgIGxldCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVJbkZvcm0udmFsdWU7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkluRm9ybS52YWx1ZTtcbiAgICBsZXQgdGFza0R1ZURhdGUgPSBmb3JtYXQobmV3IERhdGUodGFza0R1ZURhdGVJbkZvcm0udmFsdWUpLCBcIk1NTSBkb1xcLCB5eXl5XCIpO1xuICAgIGxldCB0YXNrUHJpb3JpdHkgPSB0YXNrUHJpb3JpdHlJbkZvcm0udmFsdWU7XG5cbiAgICByZXR1cm4ge3Rhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5fTtcbn0gXG5cbi8vIENyZWF0ZSBidXR0b24gdG8gaG9sZCBmb2xkZXIgYW5kIHRpdGxlXG4vLyBBZGQgdGl0bGUgdG8gZGl2IGFuZCByZXR1cm5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlckJ1dHRvbihmb2xkZXJOYW1lKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXRvcCcpO1xuICAgIGNvbnN0IGZvbGRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvbGRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgZm9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2ZvbGRlci1kaXYnKTtcbiAgICBmb2xkZXJCdG4uY2xhc3NMaXN0LmFkZCgnZm9sZGVyLWJ1dHRvbicpO1xuICAgIGZvbGRlckJ0bi50ZXh0Q29udGVudCA9IGZvbGRlck5hbWUudGl0bGU7XG4gICAgZm9sZGVyQnRuLnZhbHVlID0gZm9sZGVyTmFtZS5teUZvbGRlclV1aWQ7XG4gICAgXG4gICAgZm9sZGVyRGl2LmFwcGVuZENoaWxkKGZvbGRlckJ0bik7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHRoZSBkZWwgYnRuIGFuZCAgYXNzaWduIHNhbWUgaWQgYXMgZm9sZGVyIHRvIGl0XG4gICAgY3JlYXRlRm9sZGVyRGVsZXRlQnV0dG9uKGZvbGRlckRpdikudmFsdWUgPSBmb2xkZXJOYW1lLm15Rm9sZGVyVXVpZDtcblxuICAgIC8vIFJlbW92ZSBkZWxldGUgYnV0dG9uIG9mIGluYm94IGZvbGRlclxuICAgIGlmIChmb2xkZXJOYW1lLm15Rm9sZGVyVXVpZCA9PT0gJ2luYm94Rm9sZGVyJykge1xuICAgICAgICBsZXQgY2hpbGRCdG4gPSBmb2xkZXJEaXYuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgY2hpbGRCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZEJ0bik7XG4gICAgfVxuICAgIFxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZm9sZGVyRGl2KTtcbiAgICBcbiAgICBmb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWRpc3BsYXktZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvbGRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlci1kaXNwbGF5LXRpdGxlJyk7XG5cbiAgICAgICAgLy8gZm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgZm9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSBmb2xkZXJOYW1lLnRpdGxlO1xuICAgICAgICAvLyB0aXRsZURpc3BsYXkuYXBwZW5kQ2hpbGQoZm9sZGVyVGl0bGUpO1xuXG4gICAgICAgIGxldCBjdXJyZW50Rm9sZGVySWQgPSBmb2xkZXJOYW1lLm15Rm9sZGVyVXVpZDtcbiAgICAgICAgZGlzcGxheUN1cnJlbnRGb2xkZXJXaXRoSWQoZm9sZGVyTmFtZS5teUZvbGRlclV1aWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXJOYW1lLnRpdGxlLCBmb2xkZXJOYW1lLm15Rm9sZGVyVXVpZCk7XG4gICAgICAgIHJldHVybiBjdXJyZW50Rm9sZGVySWQ7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGZvbGRlckRpdjtcbn1cblxuLy8gVGFrZSBpbiBmb2xkZXIgbmFtZSBhbmQgY3JlYXRlIGZvbGRlciB1c2luZyBmdW5jdGlvblxuLy8gQXBwZW5kIHRvIHNpZGViYXJcbmZ1bmN0aW9uIGFwcGVuZEZvbGRlcihmb2xkZXJOYW1lKSB7XG4gICAgbGV0IGZvbGRlckRPTSA9IGNyZWF0ZUZvbGRlckJ1dHRvbihmb2xkZXJOYW1lKTtcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyRm9sZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLXRvcCcpO1xuICAgIGNvbnN0IGluYm94RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWRpdicpO1xuXG4gICAgaWYoZm9sZGVyTmFtZS5teUZvbGRlclV1aWQgPT09ICdpbmJveEZvbGRlcicpIHtcbiAgICAgICAgaW5ib3hEaXYuYXBwZW5kQ2hpbGQoZm9sZGVyRE9NKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRm9sZGVycy5hcHBlbmRDaGlsZChmb2xkZXJET00pO1xuICAgIH1cbn1cblxuLy8gVGFrZSBpbiBzdXBlciBmb2xkZXIgbmFtZSB0byBsb29wIHRocm91Z2ggZWFjaCBmb2xkZXIgYW5kIGFwcGVuZCB0byBzaWRlYmFyXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVycyhzdXBlckZvbGRlck5hbWUpIHtcbiAgICAvLyBjbGVhclNpZGViYXIoKTtcbiAgICBzdXBlckZvbGRlck5hbWUuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGFwcGVuZEZvbGRlcihmb2xkZXIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXJEZWxldGVCdXR0b24oZm9sZGVyKSB7XG4gICAgY29uc3QgZm9sZGVyRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBsZXQgZm9sZGVyRGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGZvbGRlckRlbGV0ZUljb24uc3JjID0gRGVsZXRlSWNvbjtcblxuICAgIGZvbGRlckRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZm9sZGVyLWRlbGV0ZS1pY29uJyk7XG4gICAgZm9sZGVyRGVsZXRlQnRuLmFwcGVuZENoaWxkKGZvbGRlckRlbGV0ZUljb24pO1xuXG4gICAgXG4gICAgZm9sZGVyLmFwcGVuZENoaWxkKGZvbGRlckRlbGV0ZUJ0bik7XG4gICAgXG5cbiAgICBmb2xkZXJEZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGxldCB0aGlzQnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGRlbGV0ZUZvbGRlcldpdGhJZCh0aGlzQnV0dG9uLnZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VwZXJGb2xkZXIpO1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVyJywgSlNPTi5zdHJpbmdpZnkoc3VwZXJGb2xkZXIpKTtcbiAgICAgICAgdGhpc0J1dHRvbi5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGZvbGRlckRlbGV0ZUJ0bjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0RlbGV0ZUJ1dHRvbih0YXNrKSB7XG4gICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCB0YXNrRGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRhc2tEZWxldGVJY29uLnNyYyA9IERlbGV0ZUljb247XG5cbiAgICB0YXNrRGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1vZGlmeS1idG4nKTtcbiAgICB0YXNrRGVsZXRlQnRuLmFwcGVuZENoaWxkKHRhc2tEZWxldGVJY29uKTtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG5cbiAgICB0YXNrRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBsZXQgdGhpc0J1dHRvbiA9IGUudGFyZ2V0O1xuICAgICAgICBkZWxldGVUYXNrV2l0aElkKHRoaXNCdXR0b24udmFsdWUpO1xuICAgICAgICB0aGlzQnV0dG9uLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgfSlcblxuICAgIHJldHVybiB0YXNrRGVsZXRlQnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWRpdEJ1dHRvbih0YXNrKSB7XG4gICAgY29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGxldCB0YXNrRWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICB0YXNrRWRpdEljb24uc3JjID0gRWRpdEljb247XG5cbiAgICB0YXNrRWRpdEljb24uY2xhc3NMaXN0LmFkZCgndGFzay1tb2RpZnktYnRuJyk7XG4gICAgdGFza0VkaXRCdG4uYXBwZW5kQ2hpbGQodGFza0VkaXRJY29uKTtcblxuICAgIC8vIHRhc2tFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdC1idG4nKTtcbiAgICAvLyB0YXNrRWRpdEJ0bi50ZXh0Q29udGVudCA9ICcrJztcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0VkaXRCdG4pO1xuXG4gICAgdGFza0VkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIGJ1dHRvbiB0byBob2xkIElkIHZhbHVlXG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZm9ybScpO1xuICAgICAgICBjb25zdCBidG5Gb3JJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGJ0bkZvcklkLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuLWlkJyk7XG4gICAgICAgIGJ0bkZvcklkLnZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoYnRuRm9ySWQpO1xuXG4gICAgICAgIC8vIENoYW5nZSBmb3JtIGZpZWxkcyB0byB0YXNrIGluZm8gYW5kIG9wZW4gbW9kYWxcbiAgICAgICAgY2hhbmdlVGFza0Zvcm1GaWVsZHMoZmluZFRhc2tXaXRoSWQoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgZ2V0RWRpdERpYWxvZygpLnNob3dNb2RhbCgpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gdGFza0VkaXRCdG47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tTdGF0dXNCdXR0b24odGFzaykge1xuICAgIGNvbnN0IHRhc2tTdGF0dXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGxldCB0YXNrU3RhdHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRhc2tTdGF0dXNJY29uLnNyYyA9IENoZWNrSWNvbjtcblxuICAgIHRhc2tTdGF0dXNJY29uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbW9kaWZ5LWJ0bicpO1xuICAgIHRhc2tTdGF0dXNCdG4uYXBwZW5kQ2hpbGQodGFza1N0YXR1c0ljb24pO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzQnRuKTtcblxuICAgIHRhc2tTdGF0dXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGxldCB0aGlzQnV0dG9uID0gZS50YXJnZXQ7XG4gICAgICAgIGNoYW5nZVRhc2tTdGF0dXModGhpc0J1dHRvbi52YWx1ZSk7XG5cbiAgICAgICAgdG9nZ2xlQ29tcGxldGVTdHlsZSh0aGlzQnV0dG9uKTtcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgfSlcblxuICAgIHJldHVybiB0YXNrU3RhdHVzQnRuO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDb21wbGV0ZVN0eWxlKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGUtdGFzaycpKSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlLXRhc2snKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlLXRhc2snKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tGb3JtRmllbGRzKHRhc2spIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZm9ybScpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlSW5Gb3JtID0gZm9ybS5lbGVtZW50c1sndGFzay10aXRsZSddO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stZGVzY3JpcHRpb24nXTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZUluRm9ybSA9IGZvcm0uZWxlbWVudHNbJ3Rhc2stZHVlLWRhdGUnXTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlJbkZvcm0gPSBmb3JtLmVsZW1lbnRzWyd0YXNrLXByaW9yaXR5J107XG5cbiAgICBsZXQgdGVtcERhdGUgPSBwYXJzZSh0YXNrLmR1ZURhdGUsICdNTU0gZG8sIHl5eXknLCBuZXcgRGF0ZSgpKTtcblxuICAgIHRhc2tUaXRsZUluRm9ybS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5Gb3JtLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRHVlRGF0ZUluRm9ybS52YWx1ZUFzRGF0ZSA9IHRlbXBEYXRlO1xuICAgIHRhc2tQcmlvcml0eUluRm9ybS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG59IFxuXG5mdW5jdGlvbiBnZXRGb2xkZXJGb3JtSW5mbygpIHtcbiAgICBjb25zdCBmb2xkZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1mb3JtJyk7XG5cbiAgICBjb25zdCBmb2xkZXJUaXRsZUluRm9ybSA9IGZvbGRlckZvcm0uZWxlbWVudHNbJ2ZvbGRlci10aXRsZSddLnZhbHVlO1xuXG4gICAgcmV0dXJuIHtmb2xkZXJGb3JtLCBmb2xkZXJUaXRsZUluRm9ybX07XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stY29udGFpbmVyJyk7XG5cbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZERyb3Bkb3duKHN1cGVyRm9sZGVyKSB7XG5cbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXNlbGVjdGlvbicpO1xuXG4gICAgY2xlYXJTZWxlY3RNZW51KHNlbGVjdCk7XG5cbiAgICBzdXBlckZvbGRlci5mb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBmb2xkZXIudGl0bGU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGZvbGRlci5teUZvbGRlclV1aWQ7IC8vIGZpZ3VyZSBvdXQgaWYgdGhpcyBpcyBnb29kIHdheSB0byBzZWxlY3RcbiAgICAgICAgLy8gb3B0aW9uLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpbmRleCsrKTtcblxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdE1lbnUoc2VsZWN0T3B0aW9uKSB7XG4gICAgZm9yIChsZXQgaSA9IHNlbGVjdE9wdGlvbi5vcHRpb25zLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgc2VsZWN0T3B0aW9uLnJlbW92ZSgwKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0VGFza0Zvcm1JbmZvLFxuICAgIGdldFRhc2tFZGl0Rm9ybUluZm8sXG4gICAgZ2V0Rm9sZGVyRm9ybUluZm8sXG4gICAgY3JlYXRlVGFza0VsZW1lbnQsXG4gICAgY3JlYXRlRm9sZGVyQnV0dG9uLFxuICAgIGFwcGVuZEZvbGRlcixcbiAgICBkaXNwbGF5Rm9sZGVyVGFza3MsXG4gICAgYXBwZW5kVGFzayxcbiAgICBkaXNwbGF5Rm9sZGVycyxcbiAgICBjbGVhclRhc2tDb250YWluZXIsXG4gICAgYXBwZW5kRHJvcGRvd24sXG4gICAgY2xlYXJTZWxlY3RNZW51LFxufSIsImltcG9ydCB7XG4gICAgVGFzayxcbiAgICBGb2xkZXIsXG4gICAgU3VwZXJGb2xkZXJcbn0gZnJvbSAnLi9tb2R1bGVzL2ZhY3Rvcmllcy5qcyc7XG5cbmltcG9ydCB7XG4gICAgZ2V0VGFza0Zvcm1JbmZvLFxuICAgIGdldFRhc2tFZGl0Rm9ybUluZm8sXG4gICAgZ2V0Rm9sZGVyRm9ybUluZm8sXG4gICAgYXBwZW5kRm9sZGVyLFxuICAgIGRpc3BsYXlGb2xkZXJUYXNrcyxcbiAgICBjbGVhclRhc2tDb250YWluZXIsXG4gICAgYXBwZW5kRHJvcGRvd24sXG4gICAgZGlzcGxheUZvbGRlcnNcblxufSBmcm9tICcuL21vZHVsZXMvZG9tLmpzJztcblxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vU3VwZXIgRm9sZGVyIFxubGV0IHN1cGVyRm9sZGVyID0gU3VwZXJGb2xkZXIoJzEyMzQ1NicpO1xuXG4vLyBPcGVuIHRhc2sgbW9kYWwgd2hlbiBjbGlja2VkXG5jb25zdCBvcGVuVGFza01vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4tdGFzay1tb2RhbC1idG4nKTtcbm9wZW5UYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBnZXRUYXNrRGlhbG9nKCkucmVzZXQ7XG4gICAgZ2V0VGFza0RpYWxvZygpLnNob3dNb2RhbCgpO1xuICAgIGFwcGVuZERyb3Bkb3duKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSkpO1xufSk7XG5cbi8vIEdldCB0YXNrIGRpYWxvZyBhbmQgcmV0dXJuIFxuZnVuY3Rpb24gZ2V0VGFza0RpYWxvZygpIHtcbiAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGlhbG9nJyk7XG5cbiAgICByZXR1cm4gdGFza0RpYWxvZztcbn1cblxuZnVuY3Rpb24gZ2V0RWRpdERpYWxvZygpIHtcbiAgICBjb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGlhbG9nJyk7XG5cbiAgICByZXR1cm4gZWRpdERpYWxvZztcbn1cblxuLy8gT3BlbiBmb2xkZXIgbW9kYWwgd2hlbiBjbGlja2VkXG5jb25zdCBhZGRGb2xkZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLWFkZC1idG4nKTtcbmFkZEZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZvbGRlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLWZvcm0nKTtcbiAgICBmb2xkZXJGb3JtLnJlc2V0KCk7XG4gICAgXG4gICAgY29uc3QgZm9sZGVyRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1kaWFsb2cnKTtcbiAgICBmb2xkZXJEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgXG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gc3VibWl0IGZvbGRlciBmb3JtXG4vLyBDcmVhdGUgYSBuZXcgZm9sZGVyIGluc3RhbmNlIHdpdGggaW5mbyBmcm9tIGZvcm1cbi8vIEFkZCB0byBET01cbi8vIEFkZCB0byBzdXBlciBmb2xkZXJcbi8vIFNob3VsZCBiZSBkb25lIG9uIHRoZSBmb3JtIGluc3RlYWQgb2YgYnV0dG9uIGJ1dCBNRE4gZXhhbXBsZSB3aXRoIGRpYWxvZyBkaWQgaXQgdGhpcyB3YXlcbmNvbnN0IGZvbGRlclN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItY29uZmlybS1idG4nKTtcbmZvbGRlclN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgY29uc3QgZm9sZGVyRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1kaWFsb2cnKTtcbiAgICBjb25zdCB7Zm9sZGVyVGl0bGVJbkZvcm19ID0gZ2V0Rm9sZGVyRm9ybUluZm8oKTtcblxuICAgIGxldCBuZXdGb2xkZXIgPSBGb2xkZXIoZm9sZGVyVGl0bGVJbkZvcm0pO1xuICAgIGFwcGVuZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIFxuICAgIHN1cGVyRm9sZGVyLmFkZEZvbGRlcihuZXdGb2xkZXIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoc3VwZXJGb2xkZXIpKTtcblxuICAgIGxldCBzdXBlckZvbGRlckZyb21McyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSk7XG5cbiAgICByZWNyZWF0ZVN1cGVyRm9sZGVyRnJvbU9iamVjdChzdXBlckZvbGRlckZyb21Mcyk7XG5cbiAgICBmb2xkZXJEaWFsb2cuY2xvc2UoKTtcblxufSk7XG5cbmNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1hZGQtYnRuJyk7XG4vLyBDcmVhdGUgbmV3IHRhc2sgaW5zdGFuY2UgdXNpbmcgaW5mbyBmcm9tIGZvcm1cbnRhc2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gR2V0IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBmaWVsZCAoSWQgYmVjYXVzZSB2YWx1ZSBpcyBzZXQgdG8gaWQgaW4gZG9tLmpzKVxuICAgIGNvbnN0IHNlbGVjdGVkRm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zZWxlY3Rpb24nKTtcbiAgICBjb25zdCBzZWxlY3RlZEZvbGRlclZhbHVlID0gc2VsZWN0ZWRGb2xkZXIudmFsdWU7XG4gICAgLy8gR2V0IHZhbHVlcyBvZiB0aGUgZm9ybVxuICAgIGNvbnN0IHt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eX0gPSBnZXRUYXNrRm9ybUluZm8oKTtcblxuICAgIC8vIENyZWF0ZSBuZXcgdGFzayBhbmQgbG9vcCB0aHJvdWdoIGZvbGRlciB0byBmaW5kIG1hdGNoaW5nIElkIGFuZCBhZGRcbiAgICBjb25zdCBuZXdUYXNrID0gVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSk7XG4gICAgc3VwZXJGb2xkZXIuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZEZvbGRlclZhbHVlID09PSBmb2xkZXIubXlGb2xkZXJVdWlkKSB7XG4gICAgICAgICAgICBmb2xkZXIuYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaScsbmV3VGFzay5jb21wbGV0ZVN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShzdXBlckZvbGRlcikpO1xuXG4gICAgbGV0IHN1cGVyRm9sZGVyRnJvbUxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKTtcblxuICAgIHJlY3JlYXRlU3VwZXJGb2xkZXJGcm9tT2JqZWN0KHN1cGVyRm9sZGVyRnJvbUxzKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgdGFza3Mgb2YgdGhlIGZvbGRlciB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBkaXNwbGF5ZWQgdG8gYXZvaWQgcmVsb2FkaW5nIGZvbGRlclxuICAgIGRpc3BsYXlDdXJyZW50Rm9sZGVyV2l0aElkKHNlbGVjdGVkRm9sZGVyVmFsdWUpO1xuICAgIFxuICAgIC8vIENsZWFyIGZvcm0gZmllbGRzXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1mb3JtJyk7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICBnZXRUYXNrRGlhbG9nKCkuY2xvc2UoKTtcbn0pXG5cbi8vIFNlbGVjdCB0aGUgYnV0dG9uIHdpdGggSWQgYW5kIGZpbmQgdGFzayB3aXRoIHRoYXQgSWRcbi8vIENoYW5nZSB0aGUgaW5mbyBvZiB0aGF0IHRhc2sgYW5kIHVwZGF0ZSBmb2xkZXJcbi8vIERlbGV0ZSBidXR0b24gYWZ0ZXIgYW5kIGNsb3NlXG5jb25zdCB0YXNrRWRpdENvbmZpcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1lZGl0LWJ0bicpO1xudGFza0VkaXRDb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICBjb25zdCBidG5JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1pZCcpO1xuICAgIFxuICAgIGNvbnN0IHt0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eX0gPSBnZXRUYXNrRWRpdEZvcm1JbmZvKCk7XG4gICAgXG4gICAgc3VwZXJGb2xkZXIuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGZvbGRlci50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKGJ0bklkLnZhbHVlID09PSB0YXNrLm15VGFza1V1aWQpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmVkaXRUYXNrKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q3VycmVudEZvbGRlcldpdGhJZChmb2xkZXIubXlGb2xkZXJVdWlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBcbiAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBidG5JZC5yZW1vdmUoKTtcbiAgICBnZXRFZGl0RGlhbG9nKCkuY2xvc2UoKTtcbiAgICBcbn0pXG5cblxuZnVuY3Rpb24gbG9hZFByZXNldEZvbGRlcnMoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpe1xuICAgICAgICBsZXQgc3VwZXJGb2xkZXJGcm9tTHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpO1xuICAgICAgICByZWNyZWF0ZVN1cGVyRm9sZGVyRnJvbU9iamVjdChzdXBlckZvbGRlckZyb21Mcyk7XG5cbiAgICAgICAgZGlzcGxheUZvbGRlcnMoc3VwZXJGb2xkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhc2sxID0gVGFzaygnV2FzaCBkaXNoZXMnLCAnRmluaXNoIHdhc2hpbmcgcmVzdCBvZiB0aGUgZGlzaGVzJywgZm9ybWF0KG5ldyBEYXRlKDIwMjQsIDIsIDE5KSwgXCJNTU0gZG9cXCwgeXl5eVwiKSwgJ0hpZ2gnKTtcbiAgICAgICAgY29uc3QgdGFzazIgPSBUYXNrKCdWYWNjdXVtJywgJ0NsZWFuIDJuZCBmbG9vcicsIGZvcm1hdChuZXcgRGF0ZSgyMDI0LCAzLCAyMCksIFwiTU1NIGRvXFwsIHl5eXlcIiksICdNZWRpdW0nKTtcbiAgICAgICAgY29uc3QgdGFzazMgPSBUYXNrKCdGaW5pc2ggcHJvamVjdCcsICdJcm9uIG91dCBidWdzIGZyb20gVEhBVCBwcm9qZWN0JywgZm9ybWF0KG5ldyBEYXRlKDIwMjQsIDEsIDMwKSwgXCJNTU0gZG9cXCwgeXl5eVwiKSwgJ0xvdycpO1xuXG4gICAgICAgIGxldCBpbmJveEZvbGRlciA9IEZvbGRlcignSW5ib3gnLCAnaW5ib3hGb2xkZXInKTtcbiAgICAgICAgaW5ib3hGb2xkZXIuYWRkVGFzayh0YXNrMyk7XG4gICAgICAgIHN1cGVyRm9sZGVyLmFkZEZvbGRlcihpbmJveEZvbGRlcik7XG4gICAgICAgIGFwcGVuZEZvbGRlcihpbmJveEZvbGRlcik7XG5cbiAgICAgICAgbGV0IGNob3JlcyA9IEZvbGRlcignSG91c2UgQ2hvcmVzJyk7XG4gICAgICAgIGNob3Jlcy5hZGRUYXNrKHRhc2syKTtcbiAgICAgICAgY2hvcmVzLmFkZFRhc2sodGFzazEpO1xuICAgICAgICBzdXBlckZvbGRlci5hZGRGb2xkZXIoY2hvcmVzKTtcbiAgICAgICAgYXBwZW5kRm9sZGVyKGNob3Jlcyk7XG4gICAgICAgIHRhc2syLnNldENvbXBsZXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbHNlIHN0dWZmIGhhcHBlbmVkJywgdGFzazIuY29tcGxldGVTdGF0ZSk7XG5cbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgfVxufVxuXG5sb2FkUHJlc2V0Rm9sZGVycygpO1xuXG4vLyBSZWNyZWF0ZSB0YXNrIGZyb20gZ2VuZXJpYyBvYmplY3RcbmZ1bmN0aW9uIHJlY3JlYXRlVGFza09iaih0YXJnZXRPYmopIHtcbiAgICBjb25zdCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbXlUYXNrVXVpZCwgY29tcGxldGVTdGF0ZX0gPSB0YXJnZXRPYmo7XG5cbiAgICBjb25zb2xlLmxvZygnVEFTSyBSRUNSRUFURScsVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBteVRhc2tVdWlkKSk7XG4gICAgcmV0dXJuIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbXlUYXNrVXVpZCwgY29tcGxldGVTdGF0ZSk7XG59XG5cbi8vIFJlY3JlYXRlIGEgZm9sZGVyIGZyb20gZ2VuZXJpYyBvYmplY3Rcbi8vIExvb3AgdGhyb3VnaCBHRU5FUklDIG9iamVjdHMgdGFza3Ncbi8vIEZvciBlYWNoIHRhc2ssIHJlY3JlYXRlIGEgdGFzayBhbmQgYWRkIHRvIHRoYXQgZm9sZGVyXG5mdW5jdGlvbiByZWNyZWF0ZUZvbGRlckZyb21PYmplY3QoZ2VuZXJpY09iaikge1xuXG4gICAgY29uc3Qge3RpdGxlLCAgbXlGb2xkZXJVdWlkfSA9IGdlbmVyaWNPYmo7XG4gICAgXG4gICAgbGV0IGZvbGRlckR1cGUgPSBGb2xkZXIodGl0bGUsIG15Rm9sZGVyVXVpZCk7XG5cbiAgICBnZW5lcmljT2JqLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGZvbGRlckR1cGUuYWRkVGFzayhyZWNyZWF0ZVRhc2tPYmoodGFzaykpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gZm9sZGVyRHVwZTtcbiAgICBcbn1cblxuZnVuY3Rpb24gcmVjcmVhdGVTdXBlckZvbGRlckZyb21PYmplY3QoZ2VuZXJpY09iaikge1xuICAgIGNvbnN0IHtteVN1cGVyRm9sZGVyVXVpZH0gPSBnZW5lcmljT2JqO1xuXG4gICAgc3VwZXJGb2xkZXIgPSBTdXBlckZvbGRlcihteVN1cGVyRm9sZGVyVXVpZCk7XG5cbiAgICBnZW5lcmljT2JqLmZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICBzdXBlckZvbGRlci5hZGRGb2xkZXIocmVjcmVhdGVGb2xkZXJGcm9tT2JqZWN0KGZvbGRlcikpXG4gICAgfSlcblxuICAgIHJldHVybiBzdXBlckZvbGRlcjtcbn1cblxuXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShzdXBlckZvbGRlcikpO1xufVxuXG4vLyBHbyB0aHJvdWdoIGFsbCBmb2xkZXJzIGFuZCBjaGVjayBpZiB0aGUgY2xpY2tlZCBidXR0b24gdmFsdWUgbWF0Y2hlcyBmb2xkZXIgdmFsdWVcbi8vIHRoZW4gZGlzcGxheSB0YXNrcyBvZiB0aGF0IGZvbGRlciB0byBzY3JlZW5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Rm9sZGVyV2l0aElkKHRlbXBJZCkge1xuXG4gICAgc3VwZXJGb2xkZXIuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGlmICh0ZW1wSWQgPT09IGZvbGRlci5teUZvbGRlclV1aWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGFza0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgLy9kaXNwbGF5IGFsbCB0YXNrcyBvZiB0aGlzIGZvbGRlciB0byBwYWdlXG4gICAgICAgICAgICBkaXNwbGF5Rm9sZGVyVGFza3MoZm9sZGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWF0Y2ggZm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRm9sZGVyV2l0aElkKGJ1dHRvbklkKSB7XG4gICAgc3VwZXJGb2xkZXIuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGlmIChidXR0b25JZCA9PT0gZm9sZGVyLm15Rm9sZGVyVXVpZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnV0dG9uSWQpO1xuICAgICAgICAgICAgc3VwZXJGb2xkZXIuZGVsZXRlRm9sZGVyKGZvbGRlcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza1dpdGhJZChidXR0b25JZCkge1xuICAgIHN1cGVyRm9sZGVyLmZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgICBmb2xkZXIudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b25JZCA9PT0gdGFzay5teVRhc2tVdWlkKSB7XG4gICAgICAgICAgICAgICAgZm9sZGVyLmRlbGV0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tTdGF0dXModGFza0lkKSB7XG4gICAgc3VwZXJGb2xkZXIuZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICAgIGZvbGRlci50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2tJZCA9PT0gdGFzay5teVRhc2tVdWlkKSB7XG4gICAgICAgICAgICAgICAgdGFzay5zZXRDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2suY29tcGxldGVTdGF0ZSk7XG4gICAgICAgICAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrV2l0aElkKGJ1dHRvbklkKSB7XG4gICAgbGV0IG91dHB1dDtcbiAgICBzdXBlckZvbGRlci5mb2xkZXJzLmZvckVhY2goZm9sZGVyID0+IHtcbiAgICAgICAgZm9sZGVyLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uSWQgPT09IHRhc2subXlUYXNrVXVpZCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IHtcbiAgICBkaXNwbGF5Q3VycmVudEZvbGRlcldpdGhJZCxcbiAgICBkZWxldGVGb2xkZXJXaXRoSWQsXG4gICAgZGVsZXRlVGFza1dpdGhJZCxcbiAgICBjaGFuZ2VUYXNrU3RhdHVzLFxuICAgIGdldFRhc2tEaWFsb2csXG4gICAgZmluZFRhc2tXaXRoSWQsXG4gICAgZ2V0RWRpdERpYWxvZyxcbiAgICBzdXBlckZvbGRlcixcbiAgICBzZXRMb2NhbFN0b3JhZ2Vcbn0iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwidGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJpIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsInJhbmRvbVVVSUQiLCJjcnlwdG8iLCJiaW5kIiwiZ2V0UmFuZG9tVmFsdWVzIiwicm5kczgiLCJVaW50OEFycmF5Iiwicm5nIiwiYnl0ZVRvSGV4IiwicHVzaCIsInRvU3RyaW5nIiwic2xpY2UiLCJvcHRpb25zIiwiYnVmIiwib2Zmc2V0Iiwicm5kcyIsInJhbmRvbSIsImFyciIsInVuc2FmZVN0cmluZ2lmeSIsIlRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwibXlUYXNrVXVpZCIsImNvbXBsZXRlU3RhdGUiLCJjaGFuZ2VQcmlvcml0eSIsIm5ld1ByaW9yaXR5Iiwic2V0Q29tcGxldGUiLCJjb25zb2xlIiwibG9nIiwiZWRpdFRhc2siLCJuZXdUaXRsZSIsIm5ld0Rlc2NyaXB0aW9uIiwibmV3RHVlRGF0ZSIsInByaW50VGFzayIsIkZvbGRlciIsIm15Rm9sZGVyVXVpZCIsInRhc2tzIiwiYWRkVGFzayIsIm5ld1Rhc2tOYW1lIiwiZGlzcGxheVRhc2tzIiwiZGVsZXRlVGFzayIsInRhc2tOYW1lIiwic3BsaWNlIiwiU3VwZXJGb2xkZXIiLCJteVN1cGVyRm9sZGVyVXVpZCIsImZvbGRlcnMiLCJhZGRGb2xkZXIiLCJuZXdGb2xkZXJOYW1lIiwiZGVsZXRlRm9sZGVyIiwiZm9sZGVyTmFtZSIsInRvRGF0ZSIsImFyZ3VtZW50IiwiYXJnU3RyIiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiTmFOIiwiaXNWYWxpZCIsImRhdGUiLCJ2YWx1ZSIsIl9kYXRlIiwiaXNOYU4iLCJOdW1iZXIiLCJmb3JtYXREaXN0YW5jZUxvY2FsZSIsImxlc3NUaGFuWFNlY29uZHMiLCJvbmUiLCJvdGhlciIsInhTZWNvbmRzIiwiaGFsZkFNaW51dGUiLCJsZXNzVGhhblhNaW51dGVzIiwieE1pbnV0ZXMiLCJhYm91dFhIb3VycyIsInhIb3VycyIsInhEYXlzIiwiYWJvdXRYV2Vla3MiLCJ4V2Vla3MiLCJhYm91dFhNb250aHMiLCJ4TW9udGhzIiwiYWJvdXRYWWVhcnMiLCJ4WWVhcnMiLCJvdmVyWFllYXJzIiwiYWxtb3N0WFllYXJzIiwiYnVpbGRGb3JtYXRMb25nRm4iLCJhcmdzIiwid2lkdGgiLCJTdHJpbmciLCJkZWZhdWx0V2lkdGgiLCJmb3JtYXRzIiwiZm9ybWF0TG9uZyIsImZ1bGwiLCJsb25nIiwibWVkaXVtIiwic2hvcnQiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJmb3JtYXRSZWxhdGl2ZUxvY2FsZSIsImxhc3RXZWVrIiwieWVzdGVyZGF5IiwidG9kYXkiLCJ0b21vcnJvdyIsIm5leHRXZWVrIiwiYnVpbGRMb2NhbGl6ZUZuIiwidmFsdWVzQXJyYXkiLCJjb250ZXh0IiwiZm9ybWF0dGluZ1ZhbHVlcyIsImRlZmF1bHRGb3JtYXR0aW5nV2lkdGgiLCJ2YWx1ZXMiLCJhcmd1bWVudENhbGxiYWNrIiwiYnVpbGRNYXRjaEZuIiwic3RyaW5nIiwibWF0Y2hQYXR0ZXJuIiwibWF0Y2hQYXR0ZXJucyIsImRlZmF1bHRNYXRjaFdpZHRoIiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsIm1hdGNoZWRTdHJpbmciLCJwYXJzZVBhdHRlcm5zIiwiZGVmYXVsdFBhcnNlV2lkdGgiLCJBcnJheSIsImlzQXJyYXkiLCJhcnJheSIsInByZWRpY2F0ZSIsInRlc3QiLCJmaW5kSW5kZXgiLCJvYmplY3QiLCJmaW5kS2V5IiwidmFsdWVDYWxsYmFjayIsInJlc3QiLCJlblVTIiwiY29kZSIsImZvcm1hdERpc3RhbmNlIiwidG9rZW4iLCJjb3VudCIsInJlc3VsdCIsInRva2VuVmFsdWUiLCJhZGRTdWZmaXgiLCJjb21wYXJpc29uIiwiZm9ybWF0UmVsYXRpdmUiLCJfYmFzZURhdGUiLCJfb3B0aW9ucyIsImxvY2FsaXplIiwib3JkaW5hbE51bWJlciIsImRpcnR5TnVtYmVyIiwibnVtYmVyIiwicmVtMTAwIiwiZXJhIiwibmFycm93IiwiYWJicmV2aWF0ZWQiLCJ3aWRlIiwicXVhcnRlciIsIm1vbnRoIiwiZGF5IiwiZGF5UGVyaW9kIiwiYW0iLCJwbSIsIm1pZG5pZ2h0Iiwibm9vbiIsIm1vcm5pbmciLCJhZnRlcm5vb24iLCJldmVuaW5nIiwibmlnaHQiLCJwYXJzZVBhdHRlcm4iLCJwYXJzZUludCIsInBhcnNlUmVzdWx0IiwiYW55IiwiaW5kZXgiLCJ3ZWVrU3RhcnRzT24iLCJmaXJzdFdlZWtDb250YWluc0RhdGUiLCJkZWZhdWx0T3B0aW9ucyIsImdldERlZmF1bHRPcHRpb25zIiwiTWF0aCIsInBvdyIsIm1pbGxpc2Vjb25kc0luV2VlayIsIm1pbGxpc2Vjb25kc0luRGF5Iiwic3RhcnRPZkRheSIsInNldEhvdXJzIiwiZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyIsInV0Y0RhdGUiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJzZXRVVENGdWxsWWVhciIsImdldFRpbWUiLCJjb25zdHJ1Y3RGcm9tIiwiZ2V0RGF5T2ZZZWFyIiwiZGF0ZUxlZnQiLCJkYXRlUmlnaHQiLCJzdGFydE9mRGF5TGVmdCIsInN0YXJ0T2ZEYXlSaWdodCIsInRpbWVzdGFtcExlZnQiLCJ0aW1lc3RhbXBSaWdodCIsInJvdW5kIiwiZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIiwiY2xlYW5EYXRlIiwic2V0RnVsbFllYXIiLCJzdGFydE9mWWVhciIsInN0YXJ0T2ZXZWVrIiwibG9jYWxlIiwiZ2V0RGF5IiwiZGlmZiIsInNldERhdGUiLCJzdGFydE9mSVNPV2VlayIsImdldElTT1dlZWtZZWFyIiwieWVhciIsImZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIiLCJzdGFydE9mTmV4dFllYXIiLCJmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyIiwic3RhcnRPZlRoaXNZZWFyIiwiZ2V0SVNPV2VlayIsImZvdXJ0aE9mSmFudWFyeSIsInN0YXJ0T2ZJU09XZWVrWWVhciIsImdldFdlZWtZZWFyIiwiZmlyc3RXZWVrT2ZOZXh0WWVhciIsImZpcnN0V2Vla09mVGhpc1llYXIiLCJnZXRXZWVrIiwiZmlyc3RXZWVrIiwic3RhcnRPZldlZWtZZWFyIiwiYWRkTGVhZGluZ1plcm9zIiwidGFyZ2V0TGVuZ3RoIiwiYWJzIiwicGFkU3RhcnQiLCJsaWdodEZvcm1hdHRlcnMiLCJ5Iiwic2lnbmVkWWVhciIsIk0iLCJkIiwiYSIsImRheVBlcmlvZEVudW1WYWx1ZSIsInRvVXBwZXJDYXNlIiwiaCIsIkgiLCJtIiwicyIsIlMiLCJudW1iZXJPZkRpZ2l0cyIsIm1pbGxpc2Vjb25kcyIsImZsb29yIiwiZm9ybWF0dGVycyIsIkciLCJ1bml0IiwiWSIsInNpZ25lZFdlZWtZZWFyIiwid2Vla1llYXIiLCJSIiwidSIsIlEiLCJjZWlsIiwicSIsIkwiLCJ3Iiwid2VlayIsIkkiLCJpc29XZWVrIiwiRCIsImRheU9mWWVhciIsIkUiLCJkYXlPZldlZWsiLCJsb2NhbERheU9mV2VlayIsImMiLCJpc29EYXlPZldlZWsiLCJ0b0xvd2VyQ2FzZSIsImIiLCJob3VycyIsIkIiLCJLIiwiayIsIlgiLCJfbG9jYWxpemUiLCJ0aW1lem9uZU9mZnNldCIsIl9vcmlnaW5hbERhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsImZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyIsImZvcm1hdFRpbWV6b25lIiwieCIsIk8iLCJmb3JtYXRUaW1lem9uZVNob3J0IiwieiIsInQiLCJvcmlnaW5hbERhdGUiLCJUIiwiZGVsaW1pdGVyIiwic2lnbiIsImFic09mZnNldCIsIm1pbnV0ZXMiLCJkYXRlTG9uZ0Zvcm1hdHRlciIsInBhdHRlcm4iLCJ0aW1lTG9uZ0Zvcm1hdHRlciIsImxvbmdGb3JtYXR0ZXJzIiwiUCIsImRhdGVQYXR0ZXJuIiwidGltZVBhdHRlcm4iLCJkYXRlVGltZUZvcm1hdCIsInByb3RlY3RlZERheU9mWWVhclRva2VucyIsInByb3RlY3RlZFdlZWtZZWFyVG9rZW5zIiwiaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiIsImluZGV4T2YiLCJpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4iLCJ0aHJvd1Byb3RlY3RlZEVycm9yIiwiZm9ybWF0IiwiaW5wdXQiLCJSYW5nZUVycm9yIiwiZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwIiwiZXNjYXBlZFN0cmluZ1JlZ0V4cCIsImRvdWJsZVF1b3RlUmVnRXhwIiwidW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAiLCJmb3JtYXRTdHIiLCJmb3JtYXR0ZXJPcHRpb25zIiwibWFwIiwic3Vic3RyaW5nIiwiZmlyc3RDaGFyYWN0ZXIiLCJsb25nRm9ybWF0dGVyIiwiam9pbiIsIm1hdGNoZWQiLCJjbGVhbkVzY2FwZWRTdHJpbmciLCJmb3JtYXR0ZXIiLCJ1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwiU2V0dGVyIiwic3ViUHJpb3JpdHkiLCJ2YWxpZGF0ZSIsIl91dGNEYXRlIiwiVmFsdWVTZXR0ZXIiLCJ2YWxpZGF0ZVZhbHVlIiwic2V0VmFsdWUiLCJzdXBlciIsInNldCIsImZsYWdzIiwiRGF0ZVRvU3lzdGVtVGltZXpvbmVTZXR0ZXIiLCJ0aW1lc3RhbXBJc1NldCIsImZyb21EYXRlIiwidHJhbnNwb3NlIiwiUGFyc2VyIiwicnVuIiwiZGF0ZVN0cmluZyIsInBhcnNlIiwic2V0dGVyIiwiX3ZhbHVlIiwibnVtZXJpY1BhdHRlcm5zIiwidGltZXpvbmVQYXR0ZXJucyIsIm1hcFZhbHVlIiwicGFyc2VGblJlc3VsdCIsIm1hcEZuIiwicGFyc2VOdW1lcmljUGF0dGVybiIsInBhcnNlVGltZXpvbmVQYXR0ZXJuIiwicGFyc2VBbnlEaWdpdHNTaWduZWQiLCJwYXJzZU5EaWdpdHMiLCJuIiwiUmVnRXhwIiwicGFyc2VORGlnaXRzU2lnbmVkIiwiZGF5UGVyaW9kRW51bVRvSG91cnMiLCJub3JtYWxpemVUd29EaWdpdFllYXIiLCJ0d29EaWdpdFllYXIiLCJjdXJyZW50WWVhciIsImlzQ29tbW9uRXJhIiwiYWJzQ3VycmVudFllYXIiLCJyYW5nZUVuZCIsImlzTGVhcFllYXJJbmRleCIsIkRBWVNfSU5fTU9OVEgiLCJEQVlTX0lOX01PTlRIX0xFQVBfWUVBUiIsImFkZERheXMiLCJhbW91bnQiLCJzZXREYXkiLCJjdXJyZW50RGF5IiwiZGVsdGEiLCJzZXRJU09EYXkiLCJnZXRJU09EYXkiLCJwYXJzZXJzIiwiaW5jb21wYXRpYmxlVG9rZW5zIiwiaXNUd29EaWdpdFllYXIiLCJub3JtYWxpemVkVHdvRGlnaXRZZWFyIiwiX2ZsYWdzIiwiZmlyc3RXZWVrT2ZZZWFyIiwic2V0TW9udGgiLCJzZXRXZWVrIiwic2V0SVNPV2VlayIsImlzTGVhcFllYXIiLCJzdWJwcmlvcml0eSIsIndob2xlV2Vla0RheXMiLCJpc1BNIiwic2V0TWludXRlcyIsInNldFNlY29uZHMiLCJzZXRNaWxsaXNlY29uZHMiLCJub3RXaGl0ZXNwYWNlUmVnRXhwIiwiZGF0ZVN0ciIsInJlZmVyZW5jZURhdGUiLCJhc3NpZ24iLCJzdWJGbk9wdGlvbnMiLCJzZXR0ZXJzIiwidG9rZW5zIiwidXNlZFRva2VucyIsInBhcnNlciIsImluY29tcGF0aWJsZVRva2VuIiwiZmluZCIsInVzZWRUb2tlbiIsImluY2x1ZGVzIiwiZnVsbFRva2VuIiwidW5pcXVlUHJpb3JpdHlTZXR0ZXJzIiwic29ydCIsImZpbHRlciIsInNldHRlckFycmF5IiwiZGlzcGxheUZvbGRlclRhc2tzIiwiZm9yRWFjaCIsInRhc2siLCJ0YXNrRE9NIiwidGFza0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJ0YXNrVGl0bGVJbkRpdiIsInRhc2tEZXNjcmlwdGlvbkluRGl2IiwidGFza0R1ZURhdGVJbkRpdiIsInRhc2tQcmlvcml0eUluRGl2IiwidGFza0xlZnREaXYiLCJ0YXNrUmlnaHREaXYiLCJ0YXNrVGl0bGVEaXYiLCJ0YXNrRGVzY3JpcHRpb25EaXYiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNvbXBsZXRlQ2xhc3MiLCJjaGFuZ2VDb21wbGV0ZVN0YXRlU3R5bGUiLCJ0YXNrU3RhdHVzQnRuIiwidGFza1N0YXR1c0ljb24iLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGlzQnV0dG9uIiwidGFyZ2V0IiwiY2hhbmdlVGFza1N0YXR1cyIsInBhcmVudE5vZGUiLCJjb250YWlucyIsInJlbW92ZSIsInRvZ2dsZUNvbXBsZXRlU3R5bGUiLCJzZXRMb2NhbFN0b3JhZ2UiLCJjcmVhdGVUYXNrU3RhdHVzQnV0dG9uIiwidGFza0VkaXRCdG4iLCJ0YXNrRWRpdEljb24iLCJlZGl0Rm9ybSIsImdldEVsZW1lbnRCeUlkIiwiYnRuRm9ySWQiLCJmb3JtIiwidGFza1RpdGxlSW5Gb3JtIiwiZWxlbWVudHMiLCJ0YXNrRGVzY3JpcHRpb25JbkZvcm0iLCJ0YXNrRHVlRGF0ZUluRm9ybSIsInRhc2tQcmlvcml0eUluRm9ybSIsInRlbXBEYXRlIiwidmFsdWVBc0RhdGUiLCJjaGFuZ2VUYXNrRm9ybUZpZWxkcyIsImZpbmRUYXNrV2l0aElkIiwiZ2V0RWRpdERpYWxvZyIsInNob3dNb2RhbCIsImNyZWF0ZVRhc2tFZGl0QnV0dG9uIiwidGFza0RlbGV0ZUJ0biIsInRhc2tEZWxldGVJY29uIiwiZGVsZXRlVGFza1dpdGhJZCIsImNyZWF0ZVRhc2tEZWxldGVCdXR0b24iLCJjcmVhdGVUYXNrRWxlbWVudCIsImFwcGVuZFRhc2siLCJhcHBlbmRGb2xkZXIiLCJmb2xkZXJET00iLCJzaWRlYmFyIiwicXVlcnlTZWxlY3RvciIsImZvbGRlckRpdiIsImZvbGRlckJ0biIsImZvbGRlciIsImZvbGRlckRlbGV0ZUJ0biIsImZvbGRlckRlbGV0ZUljb24iLCJkZWxldGVGb2xkZXJXaXRoSWQiLCJjcmVhdGVGb2xkZXJEZWxldGVCdXR0b24iLCJjaGlsZEJ0biIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImN1cnJlbnRGb2xkZXJJZCIsImRpc3BsYXlDdXJyZW50Rm9sZGVyV2l0aElkIiwiY3JlYXRlRm9sZGVyQnV0dG9uIiwic2lkZWJhckZvbGRlcnMiLCJpbmJveERpdiIsInN1cGVyRm9sZGVyIiwiZ2V0VGFza0RpYWxvZyIsInJlY3JlYXRlU3VwZXJGb2xkZXJGcm9tT2JqZWN0IiwiZ2VuZXJpY09iaiIsImZvbGRlckR1cGUiLCJ0YXJnZXRPYmoiLCJyZWNyZWF0ZVRhc2tPYmoiLCJyZWNyZWF0ZUZvbGRlckZyb21PYmplY3QiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXBJZCIsImJ1dHRvbklkIiwidGFza0lkIiwib3V0cHV0IiwicmVzZXQiLCJzZWxlY3QiLCJzZWxlY3RPcHRpb24iLCJjbGVhclNlbGVjdE1lbnUiLCJvcHRpb24iLCJhcHBlbmREcm9wZG93biIsImdldEl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsImZvbGRlckRpYWxvZyIsImZvbGRlclRpdGxlSW5Gb3JtIiwiZm9sZGVyRm9ybSIsImdldEZvbGRlckZvcm1JbmZvIiwibmV3Rm9sZGVyIiwiY2xvc2UiLCJzZWxlY3RlZEZvbGRlclZhbHVlIiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza0R1ZURhdGUiLCJ0YXNrUHJpb3JpdHkiLCJnZXRUYXNrRm9ybUluZm8iLCJuZXdUYXNrIiwiYnRuSWQiLCJnZXRUYXNrRWRpdEZvcm1JbmZvIiwidGFzazEiLCJ0YXNrMiIsInRhc2szIiwiaW5ib3hGb2xkZXIiLCJjaG9yZXMiLCJsb2FkUHJlc2V0Rm9sZGVycyJdLCJzb3VyY2VSb290IjoiIn0=
