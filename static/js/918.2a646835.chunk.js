"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[918],{9155:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(501),a=n(6871),c="MoviesList_FilmList__thYmG",s="MoviesList_FilmItem__z-vm5",i="MoviesList_FilmLink__ikiIg",u="MoviesList_FilmTitle__wwTbt",o="MoviesList_FilmImage__Y14PL",l=n(184);function p(e){var t=e.films,n=(0,a.TH)();return(0,l.jsx)("ul",{className:c,children:t.map((function(e){return(0,l.jsx)("li",{className:s,children:(0,l.jsxs)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},className:i,children:[(0,l.jsx)("p",{className:u,children:e.original_title}),(0,l.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title})]})},e.id)}))})}},5918:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),a=n(2791),c=n(501),s=n(719),i=n(9980),u="MoviesPage_Searchbar__6wXJT",o="MoviesPage_SearchForm__lx4S3",l="MoviesPage_SearchFormButton__fbEl0",p="MoviesPage_SearchFormInput__weghc",f=n(6066),m=n(9155),h=n(184);function v(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],v=t[1],g=(0,a.useState)([]),_=(0,r.Z)(g,2),d=_[0],x=_[1],w=(0,c.lr)(),y=(0,r.Z)(w,2),k=y[0],b=y[1],S=k.get("query");(0,a.useEffect)((function(){S&&(0,i.gH)(S).then((function(e){console.log(e.results),0===e.results.length&&f.Am.warning("Movie with this name not found!"),x(e.results)}))}),[S]);return(0,h.jsx)("div",{children:(0,h.jsxs)("main",{children:[(0,h.jsx)("div",{className:u,children:(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()?(b({query:n}),v("")):f.Am.error("Enter a search value, please!")},className:o,children:[(0,h.jsx)("input",{type:"text",className:p,placeholder:"Search movies",value:n,onChange:function(e){v(e.target.value)}}),(0,h.jsx)("button",{type:"submit",className:l,children:(0,h.jsx)(s.wTD,{size:32})})]})}),d&&(0,h.jsx)(m.Z,{films:d})]})})}},9980:function(e,t,n){n.d(t,{Je:function(){return l},M1:function(){return g},TP:function(){return h},gH:function(){return f},tx:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),i=n.n(s),u="2ca840a255afc3da30ab5f6fe1a7340a",o="https://api.themoviedb.org/3/";function l(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"trending/movie/week?api_key=").concat(u,"&language='en-US'"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"search/movie?api_key=").concat(u,"&query=").concat(t,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"movie/").concat(t,"?api_key=").concat(u,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(u,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language='en-US'"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=918.2a646835.chunk.js.map