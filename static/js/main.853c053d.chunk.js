(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a(246)},108:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(98),o=a.n(r),i=(a(108),a(7)),s=a(22),c=a(2),u=a(3),m=a(5),p=a(4),h=a(6),b=(a(31),function(){var e="",t="",a=-1,n=!1;return{getName:function(){if("undefined"!==typeof Storage){var t=localStorage.getItem("name");null!=t&&(e=t)}return e},setName:function(t){null!=t&&(e=t,console.log("Thisis storage"+Storage),"undefined"!==typeof Storage&&localStorage.setItem("name",e))},getEmail:function(){if("undefined"!==typeof Storage){var e=localStorage.getItem("email");null!==e&&(t=e)}return t},setEmail:function(e){null!==e&&(t=e,"undefined"!==typeof Storage&&localStorage.setItem("email",t))},getUserId:function(){if("undefined"!==typeof Storage){var e=localStorage.getItem("user_id");null!==e&&(a=e)}return parseInt(a)},setUserId:function(e){a=e,"undefined"!==typeof Storage&&localStorage.setItem("user_id",a)},getEmployer:function(){if("undefined"!==typeof Storage){console.log("hello"+Storage);var e=localStorage.getItem("employer");null!==e&&(n="true"===e||!0===e)}return n},setEmployer:function(e){n=e,"undefined"!==typeof Storage&&localStorage.setItem("employer",n)}}}()),d=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(""===b.getEmail())return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"nav"},l.a.createElement("img",{src:"http://blog.hireup.com.au/wp-content/uploads/2016/08/JOB_BOARD_blog.jpg",height:"50",width:"100"})),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/",className:"nav"},"Jobs")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/aboutme",className:"nav"},"About Me")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/login",className:"nav"},"Login")))));var e=b.getEmployer(),t=b.getUserId(),a=b.getName();return console.log("greeting name: "+a),l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"nav"},l.a.createElement("img",{src:"http://blog.hireup.com.au/wp-content/uploads/2016/08/JOB_BOARD_blog.jpg",height:"50",width:"100"})),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/",className:"nav"},"Jobs")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/aboutme",className:"nav"},"About Me")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/logout",className:"nav"},"LogOut")),e?l.a.createElement("li",null,l.a.createElement(i.b,{to:"/newjob",className:"nav"},"Post a Job")):"",l.a.createElement("li",null,l.a.createElement(i.b,{to:"/seeker/"+t,className:"nav"},"Welcome ",a)))))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 Purvi Pandya 2019")))}}]),t}(n.Component),E=a(1),v=a(9),y=a.n(v),f=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).fetchJobs=function(t,a){var n=a,l=t;y.a.get("https://server-job-board.herokuapp.com/jobs.json").then(function(t){for(var a=t.data,r=[],o=0;o<a.length;o++){var i=a[o];""===l&&""===n?r.push(i):""!==l&&""===n?null!==i.city&&i.city===l&&r.push(i):""===l&&null!==n?null!==i.title&&i.title===n&&r.push(i):i.city===l&&i.title===n&&r.push(i)}e.setState({jobs:r})})},e.state={jobs:[]},e.fetchJobs=e.fetchJobs.bind(Object(E.a)(e));return y.a.get("https://server-job-board.herokuapp.com/jobs.json").then(function(t){console.log(t.data),e.setState({jobs:t.data})}),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Search over current positions"),l.a.createElement("h1",null,"for developers in one sizzlin' spot"),l.a.createElement(_,{onSubmit:this.fetchJobs}),l.a.createElement(j,{jobs:this.state.jobs})),l.a.createElement(g,null))}}]),t}(n.Component),j=function(e){return 0===e.jobs.length?"Your search is not matching. Please try again.":l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),e.jobs.map(function(e){return l.a.createElement("div",null,l.a.createElement(i.b,{to:"/job/"+e.id,key:e.id,className:"job-macro"},l.a.createElement("h3",null,e.title)))}))},_=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={title:"",city:""},e._handleChangeCity=e._handleChangeCity.bind(Object(E.a)(e)),e._handleChangeJobTitle=e._handleChangeJobTitle.bind(Object(E.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(E.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"_handleChangeCity",value:function(e){console.log(e.target.value),this.setState({city:e.target.value})}},{key:"_handleChangeJobTitle",value:function(e){console.log(e.target.value),this.setState({title:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),console.log("hi"),this.props.onSubmit(this.state.city,this.state.title)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("label",{className:"job-search"},"Job title:"),l.a.createElement("select",{onChange:this._handleChangeJobTitle},l.a.createElement("option",null,""),l.a.createElement("option",null,"Graduate Software Engineer"),l.a.createElement("option",null,"Junior Software Engineer"),l.a.createElement("option",null,"React-developer"),l.a.createElement("option",null,"Front-end Developer"),l.a.createElement("option",null,"Software Engineer")),l.a.createElement("label",{className:"job-search"},"City:"),l.a.createElement("select",{onChange:this._handleChangeCity},l.a.createElement("option",null,""),l.a.createElement("option",null,"Sydney"),l.a.createElement("option",null,"Melbourne"),l.a.createElement("option",null,"Perth"),l.a.createElement("option",null,"Canberra")),l.a.createElement("button",{type:"submit",className:"button"},"Search")))}}]),t}(n.Component),O=f;var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null))},S=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={job:[]};var n=a.props.match.params.id;console.log("jobs"+n);var l="https://server-job-board.herokuapp.com/jobs/"+n+".json";return y.a.get(l).then(function(e){console.log("This Jobs: "+e.data),a.setState({job:e.data})}),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=b.getEmployer();return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(N,{job:this.state.job}),l.a.createElement("div",{className:"grid-container"},e?l.a.createElement(i.b,{to:"/newjob"},l.a.createElement("button",{className:"button-update"},"Update")):""),l.a.createElement(g,null))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=b.getEmployer(),t=b.getEmail();return console.log("is Email"+t),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"grid-container"},l.a.createElement("h3",null,this.props.job.title),l.a.createElement("p",null,l.a.createElement("strong",null,"Posted On: "),this.props.job.post_date),l.a.createElement("p",{className:"describe"},l.a.createElement("strong",null,"Description: "),this.props.job.description),l.a.createElement("p",null,l.a.createElement("strong",null,"Type of Company: "),this.props.job.company_type),l.a.createElement("p",null,l.a.createElement("strong",null,"Level: "),this.props.job.level),l.a.createElement("p",null,l.a.createElement("strong",null,"Type of Job: "),this.props.job.job_type),l.a.createElement("p",null,l.a.createElement("strong",null,"Salary: "),"$",this.props.job.salary),l.a.createElement("p",null,l.a.createElement("strong",null,"City: "),this.props.job.city),l.a.createElement("p",null,l.a.createElement("strong",null,"Job Closing Date: "),this.props.job.close_date),""===t?l.a.createElement(i.b,{to:"/login"},l.a.createElement("button",null,"Apply")):e?"":l.a.createElement(i.b,{to:"/job/"+this.props.job.id+"/apply"},l.a.createElement("button",{className:"button"},"Apply"))))}}]),t}(n.Component),C=S,w=a(42),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={newJob:[]},e.saveJob=e.saveJob.bind(Object(E.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"saveJob",value:function(e,t,a,n,l,r,o,i,s){var c=this,u=b.getUserId();y.a.post("https://server-job-board.herokuapp.com/jobs.json",{title:e,post_date:t,description:a,level:n,company_type:l,job_type:r,salary:o,city:i,close_date:s,user_id:u}).then(function(e){c.setState({newJob:[].concat(Object(w.a)(c.state.newJob),[e.data])}),console.log(e.data),c.props.history.push("/")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"New Job"),l.a.createElement(x,{onSubmit:this.saveJob})),l.a.createElement(g,null))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={title:"",post_date:"",description:"",company_type:"",level:"",job_type:"",salary:"",city:"",close_date:""},e._handleInputTitle=e._handleInputTitle.bind(Object(E.a)(e)),e._handleInputPost_date=e._handleInputPost_date.bind(Object(E.a)(e)),e._handleInputDescription=e._handleInputDescription.bind(Object(E.a)(e)),e._handleInputCompany_type=e._handleInputCompany_type.bind(Object(E.a)(e)),e._handleInputLevel=e._handleInputLevel.bind(Object(E.a)(e)),e._handleInputJob_type=e._handleInputJob_type.bind(Object(E.a)(e)),e._handleInputSalary=e._handleInputSalary.bind(Object(E.a)(e)),e._handleInputCity=e._handleInputCity.bind(Object(E.a)(e)),e._handleInputClose_date=e._handleInputClose_date.bind(Object(E.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(E.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"_handleInputTitle",value:function(e){console.log(e.target.value),this.setState({title:e.target.value})}},{key:"_handleInputPost_date",value:function(e){console.log(e.target.value),this.setState({post_date:e.target.value})}},{key:"_handleInputDescription",value:function(e){console.log(e.target.value),this.setState({description:e.target.value})}},{key:"_handleInputCompany_type",value:function(e){console.log(e.target.value),this.setState({company_type:e.target.value}),console.log(this.state.price)}},{key:"_handleInputLevel",value:function(e){console.log(e.target.value),this.setState({level:e.target.value})}},{key:"_handleInputJob_type",value:function(e){console.log(e.target.value),this.setState({job_type:e.target.value})}},{key:"_handleInputSalary",value:function(e){console.log(e.target.value),this.setState({salary:e.target.value})}},{key:"_handleInputCity",value:function(e){console.log(e.target.value),this.setState({city:e.target.value})}},{key:"_handleInputClose_date",value:function(e){console.log(e.target.value),this.setState({close_date:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.title,this.state.post_date,this.state.description,this.state.company_type,this.state.level,this.state.job_type,this.state.salary,this.state.city,this.state.close_date)}},{key:"render",value:function(){return l.a.createElement("div",{className:"grid-container"},l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("label",null,"Job Title:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onInput:this._handleInputTitle,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"Post Date:"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",onInput:this._handleInputPost_date,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"Description:"),l.a.createElement("br",null),l.a.createElement("textarea",{onInput:this._handleInputDescription,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"Type of Company:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onInput:this._handleInputCompany_type,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"Level:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onInput:this._handleInputLevel,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"Type of Job:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onInput:this._handleInputJob_type,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"Salary:"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",onInput:this._handleInputSalary,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"City:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onInput:this._handleInputCity,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("label",null,"Closing Date:"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",onInput:this._handleInputClose_date,className:"grid-input"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/"},l.a.createElement("button",{type:"submit",className:"button"},"Create Job!"))))}}]),t}(n.Component),J=I,P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={name:"",email:"",password:"",password_confirmation:"",phone:"",website:"",resume:"",notice_period:"",experience:"",current_title:"",employer:!1},a.getName=a.getName.bind(Object(E.a)(a)),a.getEmail=a.getEmail.bind(Object(E.a)(a)),a.getPassword=a.getPassword.bind(Object(E.a)(a)),a.getPassword_confirmation=a.getPassword_confirmation.bind(Object(E.a)(a)),a.getPhone=a.getPhone.bind(Object(E.a)(a)),a.getWebsite=a.getWebsite.bind(Object(E.a)(a)),a.getResume=a.getResume.bind(Object(E.a)(a)),a.getNotice=a.getNotice.bind(Object(E.a)(a)),a.getExperience=a.getExperience.bind(Object(E.a)(a)),a.getCurrentTitle=a.getCurrentTitle.bind(Object(E.a)(a)),a.signup=a.signup.bind(Object(E.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getName",value:function(e){this.setState({name:e.target.value})}},{key:"getEmail",value:function(e){this.setState({email:e.target.value})}},{key:"getPassword",value:function(e){this.setState({password:e.target.value})}},{key:"getPassword_confirmation",value:function(e){this.setState({password_confirmation:e.target.value})}},{key:"getPhone",value:function(e){this.setState({phone:e.target.value})}},{key:"getWebsite",value:function(e){this.setState({website:e.target.value})}},{key:"getResume",value:function(e){this.setState({resume:e.target.value})}},{key:"getNotice",value:function(e){this.setState({notice_period:e.target.value})}},{key:"getExperience",value:function(e){this.setState({experience:e.target.value})}},{key:"getCurrentTitle",value:function(e){this.setState({current_title:e.target.value})}},{key:"signup",value:function(e){var t=this;e.preventDefault(),y.a.post("https://server-job-board.herokuapp.com/users.json",{name:this.state.name,email:this.state.email,password:this.state.password,password_confirmation:this.state.password_confirmation,phone:this.state.phone,website:this.state.website,resume:this.state.resume,notice_period:this.state.notice_period,experience:this.state.experience,current_title:this.state.current_title,employer:this.state.employer}).then(function(e){console.log(e),t.props.history.push("/")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"grid-container container"},l.a.createElement("h3",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.name,onChange:this.getName,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.email,onChange:this.getEmail,placeholder:"E-mail"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"password",value:this.state.password,onChange:this.getPassword,placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"password",value:this.state.password_confirmation,onChange:this.getPassword_confirmation,placeholder:"Confirm Password"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"number",value:this.state.phone,onChange:this.getPhone,placeholder:"phone no."}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.website,onChange:this.getWebsite,placeholder:"website link"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.notice_period,onChange:this.getNotice,placeholder:"notice period"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"number",value:this.state.experience,onChange:this.getExperience,min:"0",placeholder:"experience years"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.current_title,onChange:this.getCurrentTitle,placeholder:"current title"}),l.a.createElement("br",null),l.a.createElement("button",{className:"signup-btn",type:"submit",value:""}," ","Sign Up"))),l.a.createElement(g,null))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={name:"",email:"",password:"",phone:"",website:"",company_size:"",company_type:"",description:"",ABN:"",image:"",employer:!0},a.getName=a.getName.bind(Object(E.a)(a)),a.getEmail=a.getEmail.bind(Object(E.a)(a)),a.getPassword=a.getPassword.bind(Object(E.a)(a)),a.getPhone=a.getPhone.bind(Object(E.a)(a)),a.getWebsite=a.getWebsite.bind(Object(E.a)(a)),a.getCompany_size=a.getCompany_size.bind(Object(E.a)(a)),a.getCompany_type=a.getCompany_type.bind(Object(E.a)(a)),a.getDescription=a.getDescription.bind(Object(E.a)(a)),a.getABN=a.getABN.bind(Object(E.a)(a)),a.getImage=a.getImage.bind(Object(E.a)(a)),a.signup=a.signup.bind(Object(E.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getName",value:function(e){this.setState({name:e.target.value})}},{key:"getEmail",value:function(e){this.setState({email:e.target.value})}},{key:"getPassword",value:function(e){this.setState({password:e.target.value})}},{key:"getPhone",value:function(e){this.setState({phone:e.target.value})}},{key:"getWebsite",value:function(e){this.setState({website:e.target.value})}},{key:"getResume",value:function(e){this.setState({resume:e.target.value})}},{key:"getCompany_size",value:function(e){this.setState({company_size:e.target.value})}},{key:"getCompany_type",value:function(e){this.setState({company_type:e.target.value})}},{key:"getDescription",value:function(e){this.setState({description:e.target.value})}},{key:"getABN",value:function(e){this.setState({ABN:e.target.value})}},{key:"getImage",value:function(e){this.setState({image:e.target.value})}},{key:"signup",value:function(e){var t=this;e.preventDefault(),y.a.post("https://server-job-board.herokuapp.com/users.json",{name:this.state.name,email:this.state.email,password:this.state.password,phone:this.state.phone,website:this.state.website,company_type:this.state.company_type,company_size:this.state.company_size,description:this.state.description,ABN:this.state.ABN,image:this.state.image,employer:this.state.employer}).then(function(e){console.log(e),t.props.history.push("/")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"grid-container container"},l.a.createElement("h3",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.name,onChange:this.getName,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.email,onChange:this.getEmail,placeholder:"E-mail"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"password",value:this.state.password,onChange:this.getPassword,placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"number",value:this.state.phone,onChange:this.getPhone,placeholder:"phone no."}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.website,onChange:this.getWebsite,placeholder:"website link"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.company_size,onChange:this.getCompany_size,placeholder:"size of company"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.company_type,onChange:this.getCompany_type,placeholder:"type of company"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"textarea",value:this.state.description,onChange:this.getDescription,placeholder:"describe your company"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.ABN,onChange:this.getABN,placeholder:"ABN"}),l.a.createElement("br",null),l.a.createElement("input",{className:"signup-input",type:"text",value:this.state.image,onChange:this.getImage,placeholder:"http"}),l.a.createElement("br",null),l.a.createElement("button",{className:"signup-btn",type:"submit",value:""}," ","Sign Up"))),l.a.createElement(g,null))}}]),t}(n.Component),T=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={seeker_user:[]};return y.a.get("https://server-job-board.herokuapp.com/users.json").then(function(t){console.log(t.data);for(var a=t.data,n=[],l=0;l<a.length;l++){var r=a[l];console.log(r),console.log("employer"+r.employer),!1===r.employer&&n.push(r)}e.setState({seeker_user:n}),console.log(n)}),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("h3",null,"All Seeker Profile"),l.a.createElement(D,{seeker_user:this.state.seeker_user}),l.a.createElement(g,null))}}]),t}(n.Component),D=function(e){b.getEmployer();return l.a.createElement("div",{className:"grid-container"},e.seeker_user.map(function(e){return l.a.createElement("div",{className:"job-macro"},l.a.createElement(i.b,{to:"/seeker/"+e.id,className:"seeker"},l.a.createElement("p",null,e.name)),l.a.createElement("p",null,e.current_title))}))},L=T,z=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={seeker:[],applications:[],jobList:[]};var n=[],l=[],r=a.props.match.params.id,o="https://server-job-board.herokuapp.com/users/"+r+".json";y.a.get(o).then(function(e){a.setState({seeker:e.data})});return y.a.get("https://server-job-board.herokuapp.com/applications.json").then(function(e){var t=e.data;console.log("application Data: "+e.data);for(var l=0;l<t.length;l++){var o=t[l];console.log("applicationData.user_id : "+o.user_id),console.log("user_id: "+r),o.user_id==r&&(console.log("come here: "+o),n.push(o))}console.log("listApplications: "+n),a.setState({applications:n})}),y.a.get("https://server-job-board.herokuapp.com/jobs.json").then(function(e){for(var t=e.data,r=0;r<t.length;r++)for(var o=t[r],i=0;i<n.length;i++)o.id===n[i].job_id&&l.push(o);a.setState({jobList:l})}),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("h3",null,"Seeker profile"),l.a.createElement(B,{seeker:this.state.seeker}),l.a.createElement(R,{jobList:this.state.jobList,applications:this.state.applications}),console.log("return ma listJobs"+this.state.jobList),console.log("return ma applications"+this.state.applications),l.a.createElement(g,null))}}]),t}(n.Component),B=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"grid-container"},l.a.createElement("h4",null,"Name of Candidate:",e.seeker.name),l.a.createElement("p",null,l.a.createElement("strong",null,"Email address:"),e.seeker.email),l.a.createElement("p",null,l.a.createElement("strong",null,"Contact number:"),e.seeker.phone),l.a.createElement("p",null,l.a.createElement("strong",null,"Social Website:"),e.seeker.website),l.a.createElement("p",null,l.a.createElement("strong",null,"Current title:"),e.seeker.current_title),l.a.createElement("p",null,l.a.createElement("strong",null,"Require Notice Period:"),e.seeker.notice_period),l.a.createElement("p",null,l.a.createElement("strong",null,"Total years of an experience:"),e.seeker.experience)),l.a.createElement("hr",null))},R=function(e){return 0===e.jobList.length?"You havnt Applied for any Job.":l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Applied Jobs by Seeker"),e.jobList.map(function(e){return l.a.createElement("div",{className:"applied-job grid-container"},l.a.createElement("h4",null,"Job Title:",e.title))}))},W=z,U=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={employer_user:[]};return y.a.get("https://server-job-board.herokuapp.com/users.json").then(function(t){console.log(t.data);for(var a=t.data,n=[],l=0;l<a.length;l++){var r=a[l];console.log(r),console.log("employer"+r.employer),!0===r.employer&&n.push(r)}e.setState({employer_user:n}),console.log(n)}),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("h3",null,"All Employer Profile"),l.a.createElement(F,{employer_user:this.state.employer_user}),l.a.createElement(g,null))}}]),t}(n.Component),F=function(e){b.getEmployer();return l.a.createElement("div",{className:"grid-container"},e.employer_user.map(function(e){return l.a.createElement("div",{className:"job-macro"},l.a.createElement(i.b,{to:"/employer/"+e.id,className:"seeker"},l.a.createElement("p",null,e.name)),l.a.createElement("p",null,e.employer))}))},Y=U,G=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={employer:[],applications:[],jobList:[]};var n=[],l=[],r=a.props.match.params.id,o="https://server-job-board.herokuapp.com/users/"+r+".json";y.a.get(o).then(function(e){a.setState({employer:e.data})});return y.a.get("https://server-job-board.herokuapp.com/jobs.json").then(function(e){var t=e.data;console.log("reaching here "+t[0].user_id);for(var l=0;l<t.length;l++){var o=t[l];o.user_id==r&&n.push(o)}a.setState({applications:n})}),y.a.get("https://server-job-board.herokuapp.com/jobs.json").then(function(e){for(var t=e.data,r=0;r<t.length;r++)for(var o=t[r],i=0;i<n.length;i++)o.id===n[i].job_id&&l.push(o);a.setState({jobList:l})}),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("h3",null,"Employer profile"),l.a.createElement(q,{employer:this.state.employer}),l.a.createElement(H,{jobList:this.state.jobList,applications:this.state.applications}),console.log("application detail:"+this.state.applications),l.a.createElement(g,null))}}]),t}(n.Component),q=function(e){return l.a.createElement("div",{className:"grid-container"},l.a.createElement("h4",null,"Name of Company:",e.employer.name),l.a.createElement("img",{src:e.employer.image,width:"200",height:"200"}),l.a.createElement("p",null,l.a.createElement("strong",null,"Email address:"),e.employer.email),l.a.createElement("p",null,l.a.createElement("strong",null,"Contact number:"),e.employer.phone),l.a.createElement("p",null,l.a.createElement("strong",null,"Social Website:"),e.employer.website),l.a.createElement("p",null,l.a.createElement("strong",null,"Size of Company:"),e.employer.company_size),l.a.createElement("p",null,l.a.createElement("strong",null,"Type of Company:"),e.employer.company_type),l.a.createElement("p",{className:"describe"},l.a.createElement("strong",null,"Description:"),e.employer.description),l.a.createElement("p",null,l.a.createElement("strong",null,"ABN:"),e.employer.ABN),l.a.createElement(i.b,{to:"/seeker",className:"employer-btn"},"See Seeker's Profile"))},H=function(e){return 0===e.applications.length?"You havnt Post any Job.":l.a.createElement("div",null,e.applications.map(function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,"Job Title:",e.title))}))},M=G,V=a(101),$=a(247),K=a(249),Q=a(248),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(V.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=-1,n=null;y.a.get("https://server-job-board.herokuapp.com/users.json").then(function(e){var l=e.data;console.log(a.state.email),console.log(l);for(var r=0;r<l.length;r++)if(l[r].email===a.state.email){t=l[r].id,n=l[r];break}if(console.log(t),t>0){b.setName(n.name),b.setUserId(t),b.setEmployer(n.employer),b.setEmail(n.email);var o=window.location.href;o.includes("#")&&(o=o.split("#")[0]+"#/"),window.location.replace(o)}})},a.state={email:"",password:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("header",{className:"login"},l.a.createElement("h1",null,"Login"),l.a.createElement("p",null,"Welcome Back! New to the site?"),l.a.createElement(i.b,{to:"/seekersignup",className:"signup-link"},l.a.createElement("p",null,"Signup here if you are a Seeker")),l.a.createElement(i.b,{to:"/employersignup",className:"signup-link"},l.a.createElement("p",null,"Signup here if you are an Employer")),l.a.createElement("form",{onSubmit:this.handleSubmit,action:"/"},l.a.createElement($.a,{controlId:"email",bsSize:"large"},l.a.createElement("span",{style:{color:"black"}}),l.a.createElement(K.a,{autoFocus:!0,type:"email",placeholder:"Your email address",value:this.state.email,onChange:this.handleChange,className:"login-input"})),l.a.createElement($.a,{controlId:"password",bsSize:"large"},l.a.createElement("span",{style:{color:"black"}}),l.a.createElement("br",null),l.a.createElement(K.a,{value:this.state.password,onChange:this.handleChange,type:"password",placeholder:"Password",className:"login-input"})),l.a.createElement(Q.a,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",className:"login-btn"},"Login"))),l.a.createElement(g,null))}}]),t}(n.Component),Z=function(e){function t(){var e;Object(c.a)(this,t),e=Object(m.a)(this,Object(p.a)(t).call(this)),b.setName(""),b.setEmail(""),b.setUserId(-1),"undefined"!==typeof Storage&&localStorage.clear();var a=window.location.href;return a.includes("#")&&(a=a.split("#")[0]+"#/"),console.log(a),window.location.replace(a),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"/"}}]),t}(n.Component),ee=(a(134),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={application:[]},e.saveJob=e.saveJob.bind(Object(E.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"saveJob",value:function(e,t,a){var n=this,l=b.getUserId(),r=this.props.match.params.id;console.log("Userid: "+l),console.log("Jobid: "+r),y.a.post("https://server-job-board.herokuapp.com/applications.json",{user_id:l,job_id:r,application_date:e,resume:a,cover_letter:t}).then(function(e){console.log("result.data : "+e.data);var t=window.location.href;console.log("urlstr: "+t),t.includes("#")&&(t=t.split("#")[0]+"/"),window.location.replace(t),n.setState({application:[].concat(Object(w.a)(n.state.application),[e.data])}),n.props.history.push("/")})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("h3",null,"Job Application"),l.a.createElement(te,{onSubmit:this.saveJob}),l.a.createElement(g,null))}}]),t}(n.Component)),te=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={application_date:"",resume:"",cover_letter:""},e._handleInputApplication_date=e._handleInputApplication_date.bind(Object(E.a)(e)),e._handleInputResume=e._handleInputResume.bind(Object(E.a)(e)),e._handleInputCover_letter=e._handleInputCover_letter.bind(Object(E.a)(e)),e._handleSubmit=e._handleSubmit.bind(Object(E.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"_handleInputApplication_date",value:function(e){console.log(e.target.value),this.setState({application_date:e.target.value})}},{key:"_handleInputResume",value:function(e){console.log(e.target.value),this.setState({resume:e.target.value})}},{key:"_handleInputCover_letter",value:function(e){console.log(e.target.value),this.setState({cover_letter:e.target.value})}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.application_date,this.state.resume,this.state.cover_letter)}},{key:"render",value:function(){return l.a.createElement("div",{className:"grid-container"},l.a.createElement("form",{onSubmit:this._handleSubmit},l.a.createElement("label",{className:"item"},"Resume:"),l.a.createElement("textarea",{onInput:this._handleInputResume}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"item"},"Cover letter:"),l.a.createElement("textarea",{onInput:this._handleInputCover_letter}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"item"},"Date: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),l.a.createElement("input",{type:"date",onInput:this._handleInputApplication_date}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/"},l.a.createElement("button",{type:"submit",className:"apply-btn"},"Apply"))))}}]),t}(n.Component),ae=ee,ne=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"container aboutme"},l.a.createElement("h3",null,"About me"),l.a.createElement("p",null,l.a.createElement("em",null,"Hi There! I am a sofware developer and enjoy making differernt kind of website. This is my dream to make a job-board website application. I have used react.js a front-end frame work. I am open to any feedback.")),l.a.createElement("li",{className:"about"},"Sydney | NSW"),l.a.createElement("li",{className:"about"},l.a.createElement("a",{href:"tel:1-212-555-5555",title:"Give me a call"},"(043) 2912-432")),l.a.createElement("li",{className:"about"},l.a.createElement("a",{href:"mailto:pandyapurvi13@gmail.com",title:"Send me an email"},"pandyapurvi13@gmail.com")),l.a.createElement("br",null),l.a.createElement("li",{className:"about"},l.a.createElement("a",{href:"https://github.com/pandyapurvi",target:"_blank"},l.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9OEYLj6VT6yKV0lolu62aN0F-4l_EU4ql791SzdxR9zW_rbI",height:"100",width:"100"}))),l.a.createElement("li",{className:"about"},l.a.createElement("a",{href:"https://www.linkedin.com/in/pandyapurvi/",target:"_blank"},l.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png",height:"100",width:"100"}))),l.a.createElement("div",{class:"copyright"},"\xa9 ALL OF THE RIGHTS RESERVED")),l.a.createElement(g,null))}}]),t}(n.Component),le=l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(s.a,{exact:!0,path:"/",component:k}),l.a.createElement(s.a,{exact:!0,path:"/job/:id",component:C}),l.a.createElement(s.a,{exact:!0,path:"/newjob",component:J}),l.a.createElement(s.a,{exact:!0,path:"/job/:id/apply",component:ae}),l.a.createElement(s.a,{exact:!0,path:"/login",component:X}),l.a.createElement(s.a,{exact:!0,path:"/logout",component:Z}),l.a.createElement(s.a,{exact:!0,path:"/seekersignup",component:P}),l.a.createElement(s.a,{exact:!0,path:"/employersignup",component:A}),l.a.createElement(s.a,{exact:!0,path:"/seeker",component:L}),l.a.createElement(s.a,{exact:!0,path:"/employer",component:Y}),l.a.createElement(s.a,{exact:!0,path:"/seeker/:id",component:W}),l.a.createElement(s.a,{exact:!0,path:"/employer/:id",component:M}),l.a.createElement(s.a,{exact:!0,path:"/aboutme",component:ne})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.853c053d.chunk.js.map