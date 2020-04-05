(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(14),o=a.n(i),s=a(8),c=a(2),r=a(3),m=a(5),u=a(4),d=a(6),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).clikShow=function(){a.setState({show:!a.state.show})},a.state={willWatch:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.moviesWillWatch,n=t.movie,i=t.removeMovie,o=t.appThis,s=t.addMovieToWillWatch,c=t.removeMovieFromWillWatch;return l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(n.backdrop_path||n.poster_path),alt:""}),l.a.createElement("div",{className:"card-body align-items-stretch",style:{background:!this.state.willWatch&&0===a.filter(function(e){return e.id===n.id}).length||null===localStorage.getItem("mov")?"rgba(211, 211, 211, 0.616)":"rgba(166, 253, 199, 0.705)"}},l.a.createElement("h6",{className:"card-title"},n.title),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("p",{className:"mb-0"},"Rating: ",n.vote_average)),this.state.show?l.a.createElement("p",{className:"mt-2"},n.overview):null,l.a.createElement("div",{className:"d-flex justify-content-center align-items-stretch mt-3"},l.a.createElement("button",{type:"button",className:"btn align-self-center  btn-primary btn-sm mr-2 p-2 p-sm-3 p-md-2 p-xl-3",onClick:this.clikShow},this.state.show?"Hide":"Show"),!this.state.willWatch&&0===a.filter(function(e){return e.id===n.id}).length||null===localStorage.getItem("mov")?l.a.createElement("button",{type:"button",className:"btn btn-success btn-sm p-2 p-sm-3 p-md-2 p-xl-3",onClick:function(){e.setState({willWatch:!e.state.willWatch}),s(n)}},"Will Watch"):l.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm p-2 p-sm-3 p-md-2 p-xl-3",onClick:function(){e.setState({willWatch:!e.state.willWatch}),c(n)}},"Remove Watch"),l.a.createElement("button",{type:"button",title:"{movie.title}",className:"btn btn-danger align-self-center btn-sm mx-2 p-2 p-sm-3 p-md-2 p-xl-3",onClick:i.bind(o,n)},l.a.createElement("span",{className:"material-icons"},"\u2718")))))}}]),t}(l.a.Component),h=a(7),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){return function(){a.props.uppdateSortBy(a.state.value),a.setState({value:""})}},a.state={value:""},a.handleChang=a.handleChang.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state.value)}},{key:"handleChang",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"input-group flex-wrap justify-content-center justify-content-lg-end"},l.a.createElement("input",{type:"text",className:"rounded col-5 col-sm-7 mx-0",onChange:this.handleChang,value:this.state.value,placeholder:"\nFind Page"}),l.a.createElement("button",{type:"submit",onClick:this.handleClick(this.state.value),className:"btn bg-success"},"Search"))}}]),t}(l.a.Component),b=a(10),f=a(12),g=function(e){var t,a=e.sort_by,n=e.uppdateSortBy,i=e.data;return l.a.createElement("div",{className:"d-flex justify-content-center justify-content-lg-around flex-wrap mx-0"},l.a.createElement("ul",{className:"tabs nav nav-pills mt-2 flex-nowrap justify-content-center"},l.a.createElement("li",{className:"nav-item navigation align-self-center"},l.a.createElement("div",{style:{cursor:"pointer",borderRadius:"5px"},className:"navigation n\x1dav-link p-1",onClick:(t=a,function(){t>=2?n(t-1):1===t&&alert("Non page")})},l.a.createElement(b.a,{className:"icon",style:{fontSize:"50px"},icon:f.a,color:"white"}))),l.a.createElement("li",{className:"nav-item mx-1"},l.a.createElement("div",{style:{border:"1px black solid",borderRadius:"5px",color:"white"},className:"px-1 bg-info"},l.a.createElement("div",null,"Total Pages: ",i.total_pages),l.a.createElement("div",{className:"n\x1dav-link mt-2 mx-2"},"This page: ",a))),l.a.createElement("li",{className:"nav-item navigation align-self-center"},l.a.createElement("div",{style:{cursor:"pointer",borderRadius:"5px"},className:"navigation n\x1dav-link p-1",onClick:function(e){return function(){n(e+1)}}(a)},l.a.createElement(b.a,{className:"icon",style:{fontSize:"50px"},icon:f.b,color:"white"})))),l.a.createElement("div",{className:"mt-2 align-self-center justify-content-center"},l.a.createElement(p,{sort_by:e.sort_by,uppdateSortBy:e.uppdateSortBy})))};function W(e){console.log("/// removeMovie"),console.log(this,"MOVIE single",e),this.removeMovieFromWillWatch(e);var t=this.state.movies.filter(function(t){return t.id!==e.id});console.log(t),this.setState({movies:t})}var y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getMovies=function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=3f4ca4f3a9750da53450646ced312397&page=".concat(e.state.sort_by)).then(function(e){return console.log("then"),e.json()}).then(function(t){e.setState({data:t}),console.log(t),e.setState({movies:t.results})})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(s.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a}),e.local(a)},e.removeMovieFromWillWatch=function(t){var a=Object(s.a)(e.state.moviesWillWatch),n=a.indexOf(t);n>-1&&a.splice(n,1),console.log(a);var l=localStorage.getItem("mov"),i=JSON.parse(l),o=i.filter(function(e){return e.id===t.id&&i.splice(e,1),i});localStorage.setItem("mov",JSON.stringify(i)),console.log("loc",i,o),e.setState({moviesWillWatch:i})},e.uppdateSortBy=function(t){e.setState({sort_by:t})},e.uppdateMoviesWillWatch=function(t){e.setState({moviesWillWatch:t})},e.local=function(e){localStorage.setItem("mov",JSON.stringify(e))},e.dell=function(){var t=Object(s.a)(e.state.moviesWillWatch);t.splice(0,t.length),e.setState({moviesWillWatch:t}),localStorage.clear("mov")},e.state={movies:[],moviesWillWatch:[],sort_by:1,data:""},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){if(this.getMovies(),null!==localStorage.getItem("mov")){var e=localStorage.getItem("mov"),t=JSON.parse(e);this.setState({moviesWillWatch:t}),console.log(t)}}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container px-0"},l.a.createElement("div",{className:"row mx-0 justify-content-center"},l.a.createElement(E,{moviesWillWatch:this.state.moviesWillWatch,arrMoviesId:this.state.arrMoviesId,uppdateSortBy:this.uppdateSortBy,data:this.state.data,sort_by:this.state.sort_by,movies:this.state.movies,appThis:this,addMovieToWillWatch:this.addMovieToWillWatch,removeMovieFromWillWatch:this.removeMovieFromWillWatch}),l.a.createElement("div",{className:"col-12 col-sm-3 mt-3 mb-5"},l.a.createElement("h4",{className:"text-white"},"Will Watch: ",this.state.moviesWillWatch.length," movies"),l.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:this.dell,type:"button"},"Dell. All"),l.a.createElement("ul",{className:"list-group rounded text-drk list_mov"},this.state.moviesWillWatch.map(function(e){return l.a.createElement("li",{key:e.id,className:"li_movie list-group-item bg-info mt-2"},l.a.createElement("div",{style:{border:"1px solid gray",padding:"5px",borderRadius:"3px"},className:"d-flex mx-n3 my-n2 flex-nowrap justify-content-between bg-white"},l.a.createElement("div",null,l.a.createElement("p",{style:{lineHeight:"20px",marginBottom:"0px",paddingBottom:"0px"}},e.title),l.a.createElement("br",null),l.a.createElement("p",{style:{lineHeight:"15px",marginTop:"-10px",paddingTop:"5px"}},"Rating: ",e.vote_average))))})))))}}]),t}(l.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.moviesWillWatch,a=e.arrMoviesId,n=e.movies,i=e.appThis,o=e.removeMovieFromWillWatch,s=e.addMovieToWillWatch;return l.a.createElement("div",{className:"col-10 col-sm-9"},l.a.createElement("div",{className:"row mx-0 justify-content-center"},l.a.createElement("div",{className:"mt-2 w-100"},l.a.createElement(g,{sort_by:this.props.sort_by,uppdateSortBy:this.props.uppdateSortBy,data:this.props.data}))),l.a.createElement("div",{className:"row mb-5 justify-content-center"},n.map(function(e){return l.a.createElement("div",{className:"card-deck offset-1 col-12 mx-0 offset-sm-0 col-md-6 mt-4",key:e.id},l.a.createElement(v,{moviesWillWatch:t,arrMoviesId:a,movie:e,removeMovie:W,appThis:i,addMovieToWillWatch:s,removeMovieFromWillWatch:o}))})))}}]),t}(l.a.Component),N=y;a(25);o.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.48d8b2f8.chunk.js.map