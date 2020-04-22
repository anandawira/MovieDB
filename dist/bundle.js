!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 3));
})([
  function (t, e) {
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function o(t, e) {
      return !e || ("object" !== n(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function i(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (i = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return c(t, arguments, f(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          a(r, t)
        );
      })(t);
    }
    function c(t, e, n) {
      return (c = u()
        ? Reflect.construct
        : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && a(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function a(t, e) {
      return (a =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var l = (function (t) {
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && a(t, e);
      })(s, t);
      var e,
        n,
        i,
        c,
        l =
          ((e = s),
          function () {
            var t,
              n = f(e);
            if (u()) {
              var r = f(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return o(this, t);
          });
      function s() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, s),
          l.call(this)
        );
      }
      return (
        (n = s),
        (i = [
          {
            key: "connectedCallback",
            value: function () {
              this.render();
            },
          },
          {
            key: "render",
            value: function () {
              this.innerHTML = '\n    <div class="card shadow bg-white rounded m-0">\n            <img\n              src="https://image.tmdb.org/t/p/w500/'
                .concat(
                  this._movie.backdrop_path,
                  '"\n              class="card-img-top"\n              alt="..."\n            />\n            <div class="card-body bg-light">\n              <div class="d-flex flex-row">\n                <h3 class="card-title flex-grow-1 my-auto">\n                  '
                )
                .concat(
                  this._movie.original_title,
                  '\n                </h3>\n                <i class="far fa-heart my-auto" style="font-size: 30px;"></i>\n              </div>\n\n              <p class="card-text">\n                '
                )
                .concat(
                  this._movie.overview,
                  "\n              </p>\n            </div>\n          </div>"
                );
            },
          },
          {
            key: "movie",
            set: function (t) {
              (this._movie = t), this.render();
            },
          },
        ]) && r(n.prototype, i),
        c && r(n, c),
        s
      );
    })(i(HTMLElement));
    customElements.define("movie-item", l);
  },
  function (t, e) {
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function o(t, e) {
      return !e || ("object" !== n(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function i(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (i = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return c(t, arguments, f(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          a(r, t)
        );
      })(t);
    }
    function c(t, e, n) {
      return (c = u()
        ? Reflect.construct
        : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && a(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function a(t, e) {
      return (a =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var l = (function (t) {
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && a(t, e);
      })(s, t);
      var e,
        n,
        i,
        c,
        l =
          ((e = s),
          function () {
            var t,
              n = f(e);
            if (u()) {
              var r = f(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return o(this, t);
          });
      function s() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, s),
          l.call(this)
        );
      }
      return (
        (n = s),
        (i = [
          {
            key: "connectedCallback",
            value: function () {
              this.render();
            },
          },
          {
            key: "render",
            value: function () {
              this.innerHTML =
                '\n        <nav class="navbar navbar-light bg-light">\n        <a class="navbar-brand d-flex" href="#">\n          <i class="fas fa-film align-self-center" style="font-size: 70px;"></i>\n          <h1 class="align-self-center mx-3">Movie Database</h1>\n        </a>\n        <ul class="nav nav-pills mr-auto">\n          <li class="nav-item">\n            <a class="nav-link active" href="#">Top Movies</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="#">Now Showing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="#">Favorite Movies</a>\n          </li>\n        </ul>\n        <form class="form-inline">\n          <input\n            class="form-control mr-sm-2"\n            type="search"\n            placeholder="Search"\n            aria-label="Search"\n          />\n          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">\n            Search\n          </button>\n        </form>\n      </nav>';
            },
          },
        ]) && r(n.prototype, i),
        c && r(n, c),
        s
      );
    })(i(HTMLElement));
    customElements.define("app-bar", l);
  },
  function (t, e) {
    function n(t) {
      return (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function o(t, e) {
      return !e || ("object" !== n(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function i(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (i = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return c(t, arguments, f(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          a(r, t)
        );
      })(t);
    }
    function c(t, e, n) {
      return (c = u()
        ? Reflect.construct
        : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && a(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function a(t, e) {
      return (a =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var l = (function (t) {
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && a(t, e);
      })(s, t);
      var e,
        n,
        i,
        c,
        l =
          ((e = s),
          function () {
            var t,
              n = f(e);
            if (u()) {
              var r = f(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return o(this, t);
          });
      function s() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, s),
          l.call(this)
        );
      }
      return (
        (n = s),
        (i = [
          {
            key: "connectedCallback",
            value: function () {
              this.render();
            },
          },
          {
            key: "render",
            value: function () {
              this.innerHTML =
                '\n      <div class="container text-center">\n        <small>Copyright &copy; Ananda Wiradharma</small>\n      </div>';
            },
          },
        ]) && r(n.prototype, i),
        c && r(n, c),
        s
      );
    })(i(HTMLElement));
    customElements.define("copyright-footer", l);
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    n(1), n(0);
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function i(t, e) {
      return !e || ("object" !== r(e) && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function c(t) {
      var e = "function" == typeof Map ? new Map() : void 0;
      return (c = function (t) {
        if (
          null === t ||
          ((n = t), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
          return t;
        var n;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== e) {
          if (e.has(t)) return e.get(t);
          e.set(t, r);
        }
        function r() {
          return u(t, arguments, l(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          f(r, t)
        );
      })(t);
    }
    function u(t, e, n) {
      return (u = a()
        ? Reflect.construct
        : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var o = new (Function.bind.apply(t, r))();
            return n && f(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function a() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function f(t, e) {
      return (f =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function l(t) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var s = (function (t) {
      !(function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && f(t, e);
      })(s, t);
      var e,
        n,
        r,
        c,
        u =
          ((e = s),
          function () {
            var t,
              n = l(e);
            if (a()) {
              var r = l(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return i(this, t);
          });
      function s() {
        return (
          (function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, s),
          u.call(this)
        );
      }
      return (
        (n = s),
        (r = [
          {
            key: "render",
            value: function () {
              var t = this;
              this._movies.forEach(function (e) {
                var n = document.createElement("movie-item");
                (n.className = "card-deck col mx-auto my-3"),
                  (n.movie = e),
                  t.appendChild(n);
              });
            },
          },
          {
            key: "renderError",
            value: function (t) {
              console.log(t);
            },
          },
          {
            key: "movies",
            set: function (t) {
              (this._movies = t), this.render();
            },
          },
        ]) && o(n.prototype, r),
        c && o(n, c),
        s
      );
    })(c(HTMLElement));
    customElements.define("movie-list", s);
    n(2);
    function p(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var y = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var e, n, r;
        return (
          (e = t),
          (r = [
            {
              key: "popularMovie",
              value: function () {
                return fetch(
                  "https://api.themoviedb.org/3/movie/popular?api_key=f797ad5241ac076500dbb4f18824eb4b&language=en-US&page=1"
                )
                  .then(function (t) {
                    return t.json();
                  })
                  .then(function (t) {
                    return t.results
                      ? Promise.resolve(t.results)
                      : Promise.reject("Errorr");
                  })
                  .catch(function (t) {
                    console.log(t);
                  });
              },
            },
          ]),
          (n = null) && p(e.prototype, n),
          r && p(e, r),
          t
        );
      })(),
      b = function () {
        var t = document.querySelector("movie-list"),
          e = function (e) {
            t.movies = e;
          },
          n = function (t) {
            console.log(t);
          };
        y.popularMovie().then(e).catch(n);
      };
    document.addEventListener("DOMContentLoaded", b);
  },
]);
