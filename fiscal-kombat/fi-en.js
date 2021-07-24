(function(){try{var $_console$$=console;Object.defineProperty(window,"console",{get:function(){if($_console$$._commandLineAPI)
throw"Sorry, for security reasons, the script console is deactivated on netflix.com";return $_console$$},set:function($val$$){$_console$$=$val$$}})
var GAME_MODE=MODE_GAME;var __console_log__=function(){}
__console_log__.apply=function(){}
!function(a){if("object"==typeof exports)module.exports=a();else if("function"==typeof define,1){var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.p2=a()}else define(a)}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(){}var e=a("./Scalar");b.exports=d,d.lineInt=function(a,b,c){c=c||0;var d,f,g,h,i,j,k,l=[0,0];return d=a[1][1]-a[0][1],f=a[0][0]-a[1][0],g=d*a[0][0]+f*a[0][1],h=b[1][1]-b[0][1],i=b[0][0]-b[1][0],j=h*b[0][0]+i*b[0][1],k=d*i-h*f,e.eq(k,0,c)||(l[0]=(i*g-f*j)/k,l[1]=(d*j-h*g)/k),l},d.segmentsIntersect=function(a,b,c,d){var e=b[0]-a[0],f=b[1]-a[1],g=d[0]-c[0],h=d[1]-c[1];if(g*f-h*e==0)return!1;var i=(e*(c[1]-a[1])+f*(a[0]-c[0]))/(g*f-h*e),j=(g*(a[1]-c[1])+h*(c[0]-a[0]))/(h*e-g*f);return i>=0&&i<=1&&j>=0&&j<=1}},{"./Scalar":4}],2:[function(a,b,c){function d(){}b.exports=d,d.area=function(a,b,c){return(b[0]-a[0])*(c[1]-a[1])-(c[0]-a[0])*(b[1]-a[1])},d.left=function(a,b,c){return d.area(a,b,c)>0},d.leftOn=function(a,b,c){return d.area(a,b,c)>=0},d.right=function(a,b,c){return d.area(a,b,c)<0},d.rightOn=function(a,b,c){return d.area(a,b,c)<=0};var e=[],f=[];d.collinear=function(a,b,c,g){if(g){var h=e,i=f;h[0]=b[0]-a[0],h[1]=b[1]-a[1],i[0]=c[0]-b[0],i[1]=c[1]-b[1];var j=h[0]*i[0]+h[1]*i[1],k=Math.sqrt(h[0]*h[0]+h[1]*h[1]),l=Math.sqrt(i[0]*i[0]+i[1]*i[1]),m=Math.acos(j/(k*l));return m<g}return 0==d.area(a,b,c)},d.sqdist=function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return c*c+d*d}},{}],3:[function(a,b,c){function d(){this.vertices=[]}function e(a,b,c,d,e){e=e||0;var f=b[1]-a[1],g=a[0]-b[0],i=f*a[0]+g*a[1],j=d[1]-c[1],k=c[0]-d[0],l=j*c[0]+k*c[1],m=f*k-j*g;return h.eq(m,0,e)?[0,0]:[(k*i-g*l)/m,(f*l-j*i)/m]}var f=a("./Line"),g=a("./Point"),h=a("./Scalar");b.exports=d,d.prototype.at=function(a){var b=this.vertices,c=b.length;return b[a<0?a%c+c:a%c]},d.prototype.first=function(){return this.vertices[0]},d.prototype.last=function(){return this.vertices[this.vertices.length-1]},d.prototype.clear=function(){this.vertices.length=0},d.prototype.append=function(a,b,c){if("undefined"==typeof b)throw new Error("From is not given!");if("undefined"==typeof c)throw new Error("To is not given!");if(c-1<b)throw new Error("lol1");if(c>a.vertices.length)throw new Error("lol2");if(b<0)throw new Error("lol3");for(var d=b;d<c;d++)this.vertices.push(a.vertices[d])},d.prototype.makeCCW=function(){for(var a=0,b=this.vertices,c=1;c<this.vertices.length;++c)(b[c][1]<b[a][1]||b[c][1]==b[a][1]&&b[c][0]>b[a][0])&&(a=c);g.left(this.at(a-1),this.at(a),this.at(a+1))||this.reverse()},d.prototype.reverse=function(){for(var a=[],b=0,c=this.vertices.length;b!==c;b++)a.push(this.vertices.pop());this.vertices=a},d.prototype.isReflex=function(a){return g.right(this.at(a-1),this.at(a),this.at(a+1))};var i=[],j=[];d.prototype.canSee=function(a,b){var c,d,e=i,h=j;if(g.leftOn(this.at(a+1),this.at(a),this.at(b))&&g.rightOn(this.at(a-1),this.at(a),this.at(b)))return!1;d=g.sqdist(this.at(a),this.at(b));for(var k=0;k!==this.vertices.length;++k)if((k+1)%this.vertices.length!==a&&k!==a&&g.leftOn(this.at(a),this.at(b),this.at(k+1))&&g.rightOn(this.at(a),this.at(b),this.at(k))&&(e[0]=this.at(a),e[1]=this.at(b),h[0]=this.at(k),h[1]=this.at(k+1),c=f.lineInt(e,h),g.sqdist(this.at(a),c)<d))return!1;return!0},d.prototype.copy=function(a,b,c){var e=c||new d;if(e.clear(),a<b)for(var f=a;f<=b;f++)e.vertices.push(this.vertices[f]);else{for(var f=0;f<=b;f++)e.vertices.push(this.vertices[f]);for(var f=a;f<this.vertices.length;f++)e.vertices.push(this.vertices[f])}return e},d.prototype.getCutEdges=function(){for(var a=[],b=[],c=[],e=new d,f=Number.MAX_VALUE,g=0;g<this.vertices.length;++g)if(this.isReflex(g))for(var h=0;h<this.vertices.length;++h)if(this.canSee(g,h)){b=this.copy(g,h,e).getCutEdges(),c=this.copy(h,g,e).getCutEdges();for(var i=0;i<c.length;i++)b.push(c[i]);b.length<f&&(a=b,f=b.length,a.push([this.at(g),this.at(h)]))}return a},d.prototype.decomp=function(){var a=this.getCutEdges();return a.length>0?this.slice(a):[this]},d.prototype.slice=function(a){if(0==a.length)return[this];if(a instanceof Array&&a.length&&a[0]instanceof Array&&2==a[0].length&&a[0][0]instanceof Array){for(var b=[this],c=0;c<a.length;c++)for(var d=a[c],e=0;e<b.length;e++){var f=b[e],g=f.slice(d);if(g){b.splice(e,1),b.push(g[0],g[1]);break}}return b}var d=a,c=this.vertices.indexOf(d[0]),e=this.vertices.indexOf(d[1]);return c!=-1&&e!=-1&&[this.copy(c,e),this.copy(e,c)]},d.prototype.isSimple=function(){for(var a=this.vertices,b=0;b<a.length-1;b++)for(var c=0;c<b-1;c++)if(f.segmentsIntersect(a[b],a[b+1],a[c],a[c+1]))return!1;for(var b=1;b<a.length-2;b++)if(f.segmentsIntersect(a[0],a[a.length-1],a[b],a[b+1]))return!1;return!0},d.prototype.quickDecomp=function(a,b,c,f,h,i){h=h||100,i=i||0,f=f||25,a="undefined"!=typeof a?a:[],b=b||[],c=c||[];var j=[0,0],k=[0,0],l=[0,0],m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=new d,u=new d,v=this,w=this.vertices;if(w.length<3)return a;if(i++,i>h)return console.warn("quickDecomp: max level ("+h+") reached."),a;for(var x=0;x<this.vertices.length;++x)if(v.isReflex(x)){b.push(v.vertices[x]),m=n=Number.MAX_VALUE;for(var y=0;y<this.vertices.length;++y)g.left(v.at(x-1),v.at(x),v.at(y))&&g.rightOn(v.at(x-1),v.at(x),v.at(y-1))&&(l=e(v.at(x-1),v.at(x),v.at(y),v.at(y-1)),g.right(v.at(x+1),v.at(x),l)&&(o=g.sqdist(v.vertices[x],l),o<n&&(n=o,k=l,r=y))),g.left(v.at(x+1),v.at(x),v.at(y+1))&&g.rightOn(v.at(x+1),v.at(x),v.at(y))&&(l=e(v.at(x+1),v.at(x),v.at(y),v.at(y+1)),g.left(v.at(x-1),v.at(x),l)&&(o=g.sqdist(v.vertices[x],l),o<m&&(m=o,j=l,q=y)));if(r==(q+1)%this.vertices.length)l[0]=(k[0]+j[0])/2,l[1]=(k[1]+j[1])/2,c.push(l),x<q?(t.append(v,x,q+1),t.vertices.push(l),u.vertices.push(l),0!=r&&u.append(v,r,v.vertices.length),u.append(v,0,x+1)):(0!=x&&t.append(v,x,v.vertices.length),t.append(v,0,q+1),t.vertices.push(l),u.vertices.push(l),u.append(v,r,x+1));else{if(r>q&&(q+=this.vertices.length),p=Number.MAX_VALUE,q<r)return a;for(var y=r;y<=q;++y)g.leftOn(v.at(x-1),v.at(x),v.at(y))&&g.rightOn(v.at(x+1),v.at(x),v.at(y))&&(o=g.sqdist(v.at(x),v.at(y)),o<p&&(p=o,s=y%this.vertices.length));x<s?(t.append(v,x,s+1),0!=s&&u.append(v,s,w.length),u.append(v,0,x+1)):(0!=x&&t.append(v,x,w.length),t.append(v,0,s+1),u.append(v,s,x+1))}return t.vertices.length<u.vertices.length?(t.quickDecomp(a,b,c,f,h,i),u.quickDecomp(a,b,c,f,h,i)):(u.quickDecomp(a,b,c,f,h,i),t.quickDecomp(a,b,c,f,h,i)),a}return a.push(this),a},d.prototype.removeCollinearPoints=function(a){for(var b=0,c=this.vertices.length-1;this.vertices.length>3&&c>=0;--c)g.collinear(this.at(c-1),this.at(c),this.at(c+1),a)&&(this.vertices.splice(c%this.vertices.length,1),c--,b++);return b}},{"./Line":1,"./Point":2,"./Scalar":4}],4:[function(a,b,c){function d(){}b.exports=d,d.eq=function(a,b,c){return c=c||0,Math.abs(a-b)<c}},{}],5:[function(a,b,c){b.exports={Polygon:a("./Polygon"),Point:a("./Point")}},{"./Point":2,"./Polygon":3}],6:[function(a,b,c){b.exports={name:"p2",version:"0.7.0",description:"A JavaScript 2D physics engine.",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["p2.js","p2","physics","engine","2d"],main:"./src/p2.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/p2.js.git"},bugs:{url:"https://github.com/schteppe/p2.js/issues"},licenses:[{type:"MIT"}],devDependencies:{grunt:"^0.4.5","grunt-contrib-jshint":"^0.11.2","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-uglify":"~0.4.0","grunt-contrib-watch":"~0.5.0","grunt-browserify":"~2.0.1","grunt-contrib-concat":"^0.4.0"},dependencies:{"poly-decomp":"0.1.0"}}},{}],7:[function(a,b,c){function d(a){this.lowerBound=e.create(),a&&a.lowerBound&&e.copy(this.lowerBound,a.lowerBound),this.upperBound=e.create(),a&&a.upperBound&&e.copy(this.upperBound,a.upperBound)}var e=a("../math/vec2");a("../utils/Utils");b.exports=d;var f=e.create();d.prototype.setFromPoints=function(a,b,c,d){var g=this.lowerBound,h=this.upperBound;"number"!=typeof c&&(c=0),0!==c?e.rotate(g,a[0],c):e.copy(g,a[0]),e.copy(h,g);for(var i=Math.cos(c),j=Math.sin(c),k=1;k<a.length;k++){var l=a[k];if(0!==c){var m=l[0],n=l[1];f[0]=i*m-j*n,f[1]=j*m+i*n,l=f}for(var o=0;o<2;o++)l[o]>h[o]&&(h[o]=l[o]),l[o]<g[o]&&(g[o]=l[o])}b&&(e.add(this.lowerBound,this.lowerBound,b),e.add(this.upperBound,this.upperBound,b)),d&&(this.lowerBound[0]-=d,this.lowerBound[1]-=d,this.upperBound[0]+=d,this.upperBound[1]+=d)},d.prototype.copy=function(a){e.copy(this.lowerBound,a.lowerBound),e.copy(this.upperBound,a.upperBound)},d.prototype.extend=function(a){for(var b=2;b--;){var c=a.lowerBound[b];this.lowerBound[b]>c&&(this.lowerBound[b]=c);var d=a.upperBound[b];this.upperBound[b]<d&&(this.upperBound[b]=d)}},d.prototype.overlaps=function(a){var b=this.lowerBound,c=this.upperBound,d=a.lowerBound,e=a.upperBound;return(d[0]<=c[0]&&c[0]<=e[0]||b[0]<=e[0]&&e[0]<=c[0])&&(d[1]<=c[1]&&c[1]<=e[1]||b[1]<=e[1]&&e[1]<=c[1])},d.prototype.containsPoint=function(a){var b=this.lowerBound,c=this.upperBound;return b[0]<=a[0]&&a[0]<=c[0]&&b[1]<=a[1]&&a[1]<=c[1]},d.prototype.overlapsRay=function(a){var b=1/a.direction[0],c=1/a.direction[1],d=(this.lowerBound[0]-a.from[0])*b,e=(this.upperBound[0]-a.from[0])*b,f=(this.lowerBound[1]-a.from[1])*c,g=(this.upperBound[1]-a.from[1])*c,h=Math.max(Math.max(Math.min(d,e),Math.min(f,g))),i=Math.min(Math.min(Math.max(d,e),Math.max(f,g)));return i<0?-1:h>i?-1:h}},{"../math/vec2":30,"../utils/Utils":57}],8:[function(a,b,c){function d(a){this.type=a,this.result=[],this.world=null,this.boundingVolumeType=d.AABB}var e=a("../math/vec2"),f=a("../objects/Body");b.exports=d,d.AABB=1,d.BOUNDING_CIRCLE=2,d.prototype.setWorld=function(a){this.world=a},d.prototype.getCollisionPairs=function(a){};var g=e.create();d.boundingRadiusCheck=function(a,b){e.sub(g,a.position,b.position);var c=e.squaredLength(g),d=a.boundingRadius+b.boundingRadius;return c<=d*d},d.aabbCheck=function(a,b){return a.getAABB().overlaps(b.getAABB())},d.prototype.boundingVolumeCheck=function(a,b){var c;switch(this.boundingVolumeType){case d.BOUNDING_CIRCLE:c=d.boundingRadiusCheck(a,b);break;case d.AABB:c=d.aabbCheck(a,b);break;default:throw new Error("Bounding volume type not recognized: "+this.boundingVolumeType)}return c},d.canCollide=function(a,b){var c=f.KINEMATIC,d=f.STATIC;return(a.type!==d||b.type!==d)&&(!(a.type===c&&b.type===d||a.type===d&&b.type===c)&&((a.type!==c||b.type!==c)&&((a.sleepState!==f.SLEEPING||b.sleepState!==f.SLEEPING)&&!(a.sleepState===f.SLEEPING&&b.type===d||b.sleepState===f.SLEEPING&&a.type===d))))},d.NAIVE=1,d.SAP=2},{"../math/vec2":30,"../objects/Body":31}],9:[function(a,b,c){function d(){e.call(this,e.NAIVE)}var e=(a("../shapes/Circle"),a("../shapes/Plane"),a("../shapes/Shape"),a("../shapes/Particle"),a("../collision/Broadphase"));a("../math/vec2");b.exports=d,d.prototype=new e,d.prototype.constructor=d,d.prototype.getCollisionPairs=function(a){var b=a.bodies,c=this.result;c.length=0;for(var d=0,f=b.length;d!==f;d++)for(var g=b[d],h=0;h<d;h++){var i=b[h];e.canCollide(g,i)&&this.boundingVolumeCheck(g,i)&&c.push(g,i)}return c},d.prototype.aabbQuery=function(a,b,c){c=c||[];for(var d=a.bodies,e=0;e<d.length;e++){var f=d[e];f.aabbNeedsUpdate&&f.updateAABB(),f.aabb.overlaps(b)&&c.push(f)}return c}},{"../collision/Broadphase":8,"../math/vec2":30,"../shapes/Circle":39,"../shapes/Particle":43,"../shapes/Plane":44,"../shapes/Shape":45}],10:[function(a,b,c){function d(){this.contactEquations=[],this.frictionEquations=[],this.enableFriction=!0,this.enabledEquations=!0,this.slipForce=10,this.frictionCoefficient=.3,this.surfaceVelocity=0,this.contactEquationPool=new k({size:32}),this.frictionEquationPool=new l({size:64}),this.restitution=0,this.stiffness=n.DEFAULT_STIFFNESS,this.relaxation=n.DEFAULT_RELAXATION,this.frictionStiffness=n.DEFAULT_STIFFNESS,this.frictionRelaxation=n.DEFAULT_RELAXATION,this.enableFrictionReduction=!0,this.collidingBodiesLastStep=new m,this.contactSkinSize=.01}function e(a,b){g.set(a.vertices[0],.5*-b.length,-b.radius),g.set(a.vertices[1],.5*b.length,-b.radius),g.set(a.vertices[2],.5*b.length,b.radius),g.set(a.vertices[3],.5*-b.length,b.radius)}function f(a,b,c,d){for(var e=T,f=U,j=V,k=W,l=a,m=b.vertices,n=null,o=0;o!==m.length+1;o++){var p=m[o%m.length],q=m[(o+1)%m.length];g.rotate(e,p,d),g.rotate(f,q,d),i(e,e,c),i(f,f,c),h(j,e,l),h(k,f,l);var r=g.crossLength(j,k);if(null===n&&(n=r),r*n<=0)return!1;n=r}return!0}var g=a("../math/vec2"),h=g.sub,i=g.add,j=g.dot,k=(a("../utils/Utils"),a("../utils/ContactEquationPool")),l=a("../utils/FrictionEquationPool"),m=a("../utils/TupleDictionary"),n=a("../equations/Equation"),o=(a("../equations/ContactEquation"),a("../equations/FrictionEquation"),a("../shapes/Circle")),p=a("../shapes/Convex"),q=a("../shapes/Shape"),r=(a("../objects/Body"),a("../shapes/Box"));b.exports=d;var s=g.fromValues(0,1),t=g.fromValues(0,0),u=g.fromValues(0,0),v=g.fromValues(0,0),w=g.fromValues(0,0),x=g.fromValues(0,0),y=g.fromValues(0,0),z=g.fromValues(0,0),A=g.fromValues(0,0),B=g.fromValues(0,0),C=g.fromValues(0,0),D=g.fromValues(0,0),E=g.fromValues(0,0),F=g.fromValues(0,0),G=g.fromValues(0,0),H=g.fromValues(0,0),I=g.fromValues(0,0),J=g.fromValues(0,0),K=g.fromValues(0,0),L=[],M=g.create(),N=g.create();d.prototype.bodiesOverlap=function(a,b){for(var c=M,d=N,e=0,f=a.shapes.length;e!==f;e++){var g=a.shapes[e];a.toWorldFrame(c,g.position);for(var h=0,i=b.shapes.length;h!==i;h++){var j=b.shapes[h];if(b.toWorldFrame(d,j.position),this[g.type|j.type](a,g,c,g.angle+a.angle,b,j,d,j.angle+b.angle,!0))return!0}}return!1},d.prototype.collidedLastStep=function(a,b){var c=0|a.id,d=0|b.id;return!!this.collidingBodiesLastStep.get(c,d)},d.prototype.reset=function(){this.collidingBodiesLastStep.reset();for(var a=this.contactEquations,b=a.length;b--;){var c=a[b],d=c.bodyA.id,e=c.bodyB.id;this.collidingBodiesLastStep.set(d,e,!0)}for(var f=this.contactEquations,g=this.frictionEquations,h=0;h<f.length;h++)this.contactEquationPool.release(f[h]);for(var h=0;h<g.length;h++)this.frictionEquationPool.release(g[h]);this.contactEquations.length=this.frictionEquations.length=0},d.prototype.createContactEquation=function(a,b,c,d){var e=this.contactEquationPool.get();return e.bodyA=a,e.bodyB=b,e.shapeA=c,e.shapeB=d,e.restitution=this.restitution,e.firstImpact=!this.collidedLastStep(a,b),e.stiffness=this.stiffness,e.relaxation=this.relaxation,e.needsUpdate=!0,e.enabled=this.enabledEquations,e.offset=this.contactSkinSize,e},d.prototype.createFrictionEquation=function(a,b,c,d){var e=this.frictionEquationPool.get();return e.bodyA=a,e.bodyB=b,e.shapeA=c,e.shapeB=d,e.setSlipForce(this.slipForce),e.frictionCoefficient=this.frictionCoefficient,e.relativeVelocity=this.surfaceVelocity,e.enabled=this.enabledEquations,e.needsUpdate=!0,e.stiffness=this.frictionStiffness,e.relaxation=this.frictionRelaxation,e.contactEquations.length=0,e},d.prototype.createFrictionFromContact=function(a){var b=this.createFrictionEquation(a.bodyA,a.bodyB,a.shapeA,a.shapeB);return g.copy(b.contactPointA,a.contactPointA),g.copy(b.contactPointB,a.contactPointB),g.rotate90cw(b.t,a.normalA),b.contactEquations.push(a),b},d.prototype.createFrictionFromAverage=function(a){var b=this.contactEquations[this.contactEquations.length-1],c=this.createFrictionEquation(b.bodyA,b.bodyB,b.shapeA,b.shapeB),d=b.bodyA;b.bodyB;g.set(c.contactPointA,0,0),g.set(c.contactPointB,0,0),g.set(c.t,0,0);for(var e=0;e!==a;e++)b=this.contactEquations[this.contactEquations.length-1-e],b.bodyA===d?(g.add(c.t,c.t,b.normalA),g.add(c.contactPointA,c.contactPointA,b.contactPointA),g.add(c.contactPointB,c.contactPointB,b.contactPointB)):(g.sub(c.t,c.t,b.normalA),g.add(c.contactPointA,c.contactPointA,b.contactPointB),g.add(c.contactPointB,c.contactPointB,b.contactPointA)),c.contactEquations.push(b);var f=1/a;return g.scale(c.contactPointA,c.contactPointA,f),g.scale(c.contactPointB,c.contactPointB,f),g.normalize(c.t,c.t),g.rotate90cw(c.t,c.t),c},d.prototype[q.LINE|q.CONVEX]=d.prototype.convexLine=function(a,b,c,d,e,f,g,h,i){return!i&&0},d.prototype[q.LINE|q.BOX]=d.prototype.lineBox=function(a,b,c,d,e,f,g,h,i){return!i&&0};var O=new r({width:1,height:1}),P=g.create();d.prototype[q.CAPSULE|q.CONVEX]=d.prototype[q.CAPSULE|q.BOX]=d.prototype.convexCapsule=function(a,b,c,d,f,h,i,j,k){var l=P;g.set(l,h.length/2,0),g.rotate(l,l,j),g.add(l,l,i);var m=this.circleConvex(f,h,l,j,a,b,c,d,k,h.radius);g.set(l,-h.length/2,0),g.rotate(l,l,j),g.add(l,l,i);var n=this.circleConvex(f,h,l,j,a,b,c,d,k,h.radius);if(k&&(m||n))return!0;var o=O;e(o,h);var p=this.convexConvex(a,b,c,d,f,o,i,j,k);return p+m+n},d.prototype[q.CAPSULE|q.LINE]=d.prototype.lineCapsule=function(a,b,c,d,e,f,g,h,i){return!i&&0};var Q=g.create(),R=g.create(),S=new r({width:1,height:1});d.prototype[q.CAPSULE|q.CAPSULE]=d.prototype.capsuleCapsule=function(a,b,c,d,f,h,i,j,k){for(var l,m=Q,n=R,o=0,p=0;p<2;p++){g.set(m,(0===p?-1:1)*b.length/2,0),g.rotate(m,m,d),g.add(m,m,c);for(var q=0;q<2;q++){g.set(n,(0===q?-1:1)*h.length/2,0),g.rotate(n,n,j),g.add(n,n,i),this.enableFrictionReduction&&(l=this.enableFriction,this.enableFriction=!1);var r=this.circleCircle(a,b,m,d,f,h,n,j,k,b.radius,h.radius);if(this.enableFrictionReduction&&(this.enableFriction=l),k&&r)return!0;o+=r}}this.enableFrictionReduction&&(l=this.enableFriction,this.enableFriction=!1);var s=S;e(s,b);var t=this.convexCapsule(a,s,c,d,f,h,i,j,k);if(this.enableFrictionReduction&&(this.enableFriction=l),k&&t)return!0;if(o+=t,this.enableFrictionReduction){var l=this.enableFriction;this.enableFriction=!1}e(s,h);var u=this.convexCapsule(f,s,i,j,a,b,c,d,k);return this.enableFrictionReduction&&(this.enableFriction=l),!(!k||!u)||(o+=u,this.enableFrictionReduction&&o&&this.enableFriction&&this.frictionEquations.push(this.createFrictionFromAverage(o)),o)},d.prototype[q.LINE|q.LINE]=d.prototype.lineLine=function(a,b,c,d,e,f,g,h,i){return!i&&0},d.prototype[q.PLANE|q.LINE]=d.prototype.planeLine=function(a,b,c,d,e,f,k,l,m){var n=t,o=u,p=v,q=w,r=x,C=y,D=z,E=A,F=B,G=L,H=0;g.set(n,-f.length/2,0),g.set(o,f.length/2,0),g.rotate(p,n,l),g.rotate(q,o,l),i(p,p,k),i(q,q,k),g.copy(n,p),g.copy(o,q),h(r,o,n),g.normalize(C,r),g.rotate90cw(F,C),g.rotate(E,s,d),G[0]=n,G[1]=o;for(var I=0;I<G.length;I++){var J=G[I];h(D,J,c);var K=j(D,E);if(K<0){if(m)return!0;var M=this.createContactEquation(a,e,b,f);H++,g.copy(M.normalA,E),g.normalize(M.normalA,M.normalA),g.scale(D,E,K),h(M.contactPointA,J,D),h(M.contactPointA,M.contactPointA,a.position),h(M.contactPointB,J,k),i(M.contactPointB,M.contactPointB,k),h(M.contactPointB,M.contactPointB,e.position),this.contactEquations.push(M),this.enableFrictionReduction||this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(M))}}return!m&&(this.enableFrictionReduction||H&&this.enableFriction&&this.frictionEquations.push(this.createFrictionFromAverage(H)),H)},d.prototype[q.PARTICLE|q.CAPSULE]=d.prototype.particleCapsule=function(a,b,c,d,e,f,g,h,i){return this.circleLine(a,b,c,d,e,f,g,h,i,f.radius,0)},d.prototype[q.CIRCLE|q.LINE]=d.prototype.circleLine=function(a,b,c,d,e,f,k,l,m,n,o){var n=n||0,o="undefined"!=typeof o?o:b.radius,p=t,q=u,r=v,s=w,H=x,I=y,J=z,K=A,M=B,N=C,O=D,P=E,Q=F,R=G,S=L;g.set(K,-f.length/2,0),g.set(M,f.length/2,0),g.rotate(N,K,l),g.rotate(O,M,l),i(N,N,k),i(O,O,k),g.copy(K,N),g.copy(M,O),h(I,M,K),g.normalize(J,I),g.rotate90cw(H,J),h(P,c,K);var T=j(P,H);h(s,K,k),h(Q,c,k);var U=o+n;if(Math.abs(T)<U){g.scale(p,H,T),h(r,c,p),g.scale(q,H,j(H,Q)),g.normalize(q,q),g.scale(q,q,n),i(r,r,q);var V=j(J,r),W=j(J,K),X=j(J,M);if(V>W&&V<X){if(m)return!0;var Y=this.createContactEquation(a,e,b,f);return g.scale(Y.normalA,p,-1),g.normalize(Y.normalA,Y.normalA),g.scale(Y.contactPointA,Y.normalA,o),i(Y.contactPointA,Y.contactPointA,c),h(Y.contactPointA,Y.contactPointA,a.position),h(Y.contactPointB,r,k),i(Y.contactPointB,Y.contactPointB,k),h(Y.contactPointB,Y.contactPointB,e.position),this.contactEquations.push(Y),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(Y)),1}}S[0]=K,S[1]=M;for(var Z=0;Z<S.length;Z++){var $=S[Z];if(h(P,$,c),g.squaredLength(P)<Math.pow(U,2)){if(m)return!0;var Y=this.createContactEquation(a,e,b,f);return g.copy(Y.normalA,P),g.normalize(Y.normalA,Y.normalA),g.scale(Y.contactPointA,Y.normalA,o),i(Y.contactPointA,Y.contactPointA,c),h(Y.contactPointA,Y.contactPointA,a.position),h(Y.contactPointB,$,k),g.scale(R,Y.normalA,-n),i(Y.contactPointB,Y.contactPointB,R),i(Y.contactPointB,Y.contactPointB,k),h(Y.contactPointB,Y.contactPointB,e.position),this.contactEquations.push(Y),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(Y)),1}}return 0},d.prototype[q.CIRCLE|q.CAPSULE]=d.prototype.circleCapsule=function(a,b,c,d,e,f,g,h,i){return this.circleLine(a,b,c,d,e,f,g,h,i,f.radius)},d.prototype[q.CIRCLE|q.CONVEX]=d.prototype[q.CIRCLE|q.BOX]=d.prototype.circleConvex=function(a,b,c,d,e,j,k,l,m,n){for(var n="number"==typeof n?n:b.radius,o=t,p=u,q=v,r=w,s=x,y=C,z=D,A=F,B=G,E=H,J=I,K=!1,L=Number.MAX_VALUE,M=j.vertices,N=0;N!==M.length+1;N++){var O=M[N%M.length],P=M[(N+1)%M.length];if(g.rotate(o,O,l),g.rotate(p,P,l),i(o,o,k),i(p,p,k),h(q,p,o),g.normalize(r,q),g.rotate90cw(s,r),g.scale(B,s,-b.radius),i(B,B,c),f(B,j,k,l)){g.sub(E,o,B);var Q=Math.abs(g.dot(E,s));Q<L&&(g.copy(J,B),L=Q,g.scale(A,s,Q),g.add(A,A,B),K=!0)}}if(K){if(m)return!0;var R=this.createContactEquation(a,e,b,j);return g.sub(R.normalA,J,c),g.normalize(R.normalA,R.normalA),g.scale(R.contactPointA,R.normalA,n),i(R.contactPointA,R.contactPointA,c),h(R.contactPointA,R.contactPointA,a.position),h(R.contactPointB,A,k),i(R.contactPointB,R.contactPointB,k),h(R.contactPointB,R.contactPointB,e.position),this.contactEquations.push(R),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(R)),1}if(n>0)for(var N=0;N<M.length;N++){var S=M[N];if(g.rotate(z,S,l),i(z,z,k),h(y,z,c),g.squaredLength(y)<Math.pow(n,2)){if(m)return!0;var R=this.createContactEquation(a,e,b,j);return g.copy(R.normalA,y),g.normalize(R.normalA,R.normalA),g.scale(R.contactPointA,R.normalA,n),i(R.contactPointA,R.contactPointA,c),h(R.contactPointA,R.contactPointA,a.position),h(R.contactPointB,z,k),i(R.contactPointB,R.contactPointB,k),h(R.contactPointB,R.contactPointB,e.position),this.contactEquations.push(R),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(R)),1}}return 0};var T=g.create(),U=g.create(),V=g.create(),W=g.create();d.prototype[q.PARTICLE|q.CONVEX]=d.prototype[q.PARTICLE|q.BOX]=d.prototype.particleConvex=function(a,b,c,d,e,k,l,m,n){var o=t,p=u,q=v,r=w,s=x,A=y,B=z,D=C,E=F,G=J,H=K,I=Number.MAX_VALUE,L=!1,M=k.vertices;if(!f(c,k,l,m))return 0;if(n)return!0;for(var N=0;N!==M.length+1;N++){var O=M[N%M.length],P=M[(N+1)%M.length];g.rotate(o,O,m),g.rotate(p,P,m),i(o,o,l),i(p,p,l),h(q,p,o),g.normalize(r,q),g.rotate90cw(s,r),h(D,c,o);j(D,s);h(A,o,l),h(B,c,l),g.sub(G,o,c);var Q=Math.abs(g.dot(G,s));Q<I&&(I=Q,g.scale(E,s,Q),g.add(E,E,c),g.copy(H,s),L=!0)}if(L){var R=this.createContactEquation(a,e,b,k);return g.scale(R.normalA,H,-1),g.normalize(R.normalA,R.normalA),g.set(R.contactPointA,0,0),i(R.contactPointA,R.contactPointA,c),h(R.contactPointA,R.contactPointA,a.position),h(R.contactPointB,E,l),i(R.contactPointB,R.contactPointB,l),h(R.contactPointB,R.contactPointB,e.position),this.contactEquations.push(R),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(R)),1}return 0},d.prototype[q.CIRCLE]=d.prototype.circleCircle=function(a,b,c,d,e,f,j,k,l,m,n){var o=t,m=m||b.radius,n=n||f.radius;h(o,c,j);var p=m+n;if(g.squaredLength(o)>Math.pow(p,2))return 0;if(l)return!0;var q=this.createContactEquation(a,e,b,f);return h(q.normalA,j,c),g.normalize(q.normalA,q.normalA),g.scale(q.contactPointA,q.normalA,m),g.scale(q.contactPointB,q.normalA,-n),i(q.contactPointA,q.contactPointA,c),h(q.contactPointA,q.contactPointA,a.position),i(q.contactPointB,q.contactPointB,j),h(q.contactPointB,q.contactPointB,e.position),this.contactEquations.push(q),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(q)),1},d.prototype[q.PLANE|q.CONVEX]=d.prototype[q.PLANE|q.BOX]=d.prototype.planeConvex=function(a,b,c,d,e,f,k,l,m){var n=t,o=u,p=v,q=0;g.rotate(o,s,d);for(var r=0;r!==f.vertices.length;r++){var w=f.vertices[r];if(g.rotate(n,w,l),i(n,n,k),h(p,n,c),j(p,o)<=0){if(m)return!0;q++;var x=this.createContactEquation(a,e,b,f);h(p,n,c),g.copy(x.normalA,o);var y=j(p,x.normalA);g.scale(p,x.normalA,y),h(x.contactPointB,n,e.position),h(x.contactPointA,n,p),h(x.contactPointA,x.contactPointA,a.position),this.contactEquations.push(x),this.enableFrictionReduction||this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(x))}}return this.enableFrictionReduction&&this.enableFriction&&q&&this.frictionEquations.push(this.createFrictionFromAverage(q)),q},d.prototype[q.PARTICLE|q.PLANE]=d.prototype.particlePlane=function(a,b,c,d,e,f,i,k,l){var m=t,n=u;k=k||0,h(m,c,i),g.rotate(n,s,k);var o=j(m,n);if(o>0)return 0;if(l)return!0;var p=this.createContactEquation(e,a,f,b);return g.copy(p.normalA,n),g.scale(m,p.normalA,o),h(p.contactPointA,c,m),h(p.contactPointA,p.contactPointA,e.position),h(p.contactPointB,c,a.position),this.contactEquations.push(p),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(p)),1},d.prototype[q.CIRCLE|q.PARTICLE]=d.prototype.circleParticle=function(a,b,c,d,e,f,j,k,l){var m=t;if(h(m,j,c),g.squaredLength(m)>Math.pow(b.radius,2))return 0;if(l)return!0;var n=this.createContactEquation(a,e,b,f);return g.copy(n.normalA,m),g.normalize(n.normalA,n.normalA),g.scale(n.contactPointA,n.normalA,b.radius),i(n.contactPointA,n.contactPointA,c),h(n.contactPointA,n.contactPointA,a.position),h(n.contactPointB,j,e.position),this.contactEquations.push(n),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(n)),1};var X=new o({radius:1}),Y=g.create(),Z=g.create();g.create();d.prototype[q.PLANE|q.CAPSULE]=d.prototype.planeCapsule=function(a,b,c,d,e,f,h,j,k){var l=Y,m=Z,n=X;g.set(l,-f.length/2,0),g.rotate(l,l,j),i(l,l,h),g.set(m,f.length/2,0),g.rotate(m,m,j),i(m,m,h),n.radius=f.radius;var o;this.enableFrictionReduction&&(o=this.enableFriction,this.enableFriction=!1);var p=this.circlePlane(e,n,l,0,a,b,c,d,k),q=this.circlePlane(e,n,m,0,a,b,c,d,k);if(this.enableFrictionReduction&&(this.enableFriction=o),k)return p||q;var r=p+q;return this.enableFrictionReduction&&r&&this.frictionEquations.push(this.createFrictionFromAverage(r)),r},d.prototype[q.CIRCLE|q.PLANE]=d.prototype.circlePlane=function(a,b,c,d,e,f,k,l,m){var n=a,o=b,p=c,q=e,r=k,w=l;w=w||0;var x=t,y=u,z=v;h(x,p,r),g.rotate(y,s,w);var A=j(y,x);if(A>o.radius)return 0;if(m)return!0;var B=this.createContactEquation(q,n,f,b);return g.copy(B.normalA,y),g.scale(B.contactPointB,B.normalA,-o.radius),i(B.contactPointB,B.contactPointB,p),h(B.contactPointB,B.contactPointB,n.position),g.scale(z,B.normalA,A),h(B.contactPointA,x,z),i(B.contactPointA,B.contactPointA,r),h(B.contactPointA,B.contactPointA,q.position),this.contactEquations.push(B),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(B)),1},d.prototype[q.CONVEX]=d.prototype[q.CONVEX|q.BOX]=d.prototype[q.BOX]=d.prototype.convexConvex=function(a,b,c,e,f,k,l,m,n,o){var p=t,q=u,r=v,s=w,y=x,C=z,D=A,E=B,F=0,o="number"==typeof o?o:0,G=d.findSeparatingAxis(b,c,e,k,l,m,p);if(!G)return 0;h(D,l,c),j(p,D)>0&&g.scale(p,p,-1);var H=d.getClosestEdge(b,e,p,!0),I=d.getClosestEdge(k,m,p);if(H===-1||I===-1)return 0;for(var J=0;J<2;J++){var K=H,L=I,M=b,N=k,O=c,P=l,Q=e,R=m,S=a,T=f;if(0===J){var U;U=K,K=L,L=U,U=M,M=N,N=U,U=O,O=P,P=U,U=Q,Q=R,R=U,U=S,S=T,T=U}for(var V=L;V<L+2;V++){var W=N.vertices[(V+N.vertices.length)%N.vertices.length];g.rotate(q,W,R),i(q,q,P);for(var X=0,Y=K-1;Y<K+2;Y++){var Z=M.vertices[(Y+M.vertices.length)%M.vertices.length],$=M.vertices[(Y+1+M.vertices.length)%M.vertices.length];g.rotate(r,Z,Q),g.rotate(s,$,Q),i(r,r,O),i(s,s,O),h(y,s,r),g.rotate90cw(E,y),g.normalize(E,E),h(D,q,r);var _=j(E,D);(Y===K&&_<=o||Y!==K&&_<=0)&&X++}if(X>=3){if(n)return!0;var aa=this.createContactEquation(S,T,M,N);F++;var Z=M.vertices[K%M.vertices.length],$=M.vertices[(K+1)%M.vertices.length];g.rotate(r,Z,Q),g.rotate(s,$,Q),i(r,r,O),i(s,s,O),h(y,s,r),g.rotate90cw(aa.normalA,y),g.normalize(aa.normalA,aa.normalA),h(D,q,r);var _=j(aa.normalA,D);g.scale(C,aa.normalA,_),h(aa.contactPointA,q,O),h(aa.contactPointA,aa.contactPointA,C),i(aa.contactPointA,aa.contactPointA,O),h(aa.contactPointA,aa.contactPointA,S.position),h(aa.contactPointB,q,P),i(aa.contactPointB,aa.contactPointB,P),h(aa.contactPointB,aa.contactPointB,T.position),this.contactEquations.push(aa),this.enableFrictionReduction||this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(aa))}}}return this.enableFrictionReduction&&this.enableFriction&&F&&this.frictionEquations.push(this.createFrictionFromAverage(F)),F};var $=g.fromValues(0,0);d.projectConvexOntoAxis=function(a,b,c,d,e){var f,h,i=null,k=null,l=$;g.rotate(l,d,-c);for(var m=0;m<a.vertices.length;m++)f=a.vertices[m],h=j(f,l),(null===i||h>i)&&(i=h),(null===k||h<k)&&(k=h);if(k>i){var n=k;k=i,i=n}var o=j(b,d);g.set(e,k+o,i+o)};var _=g.fromValues(0,0),aa=g.fromValues(0,0),ba=g.fromValues(0,0),ca=g.fromValues(0,0),da=g.fromValues(0,0),ea=g.fromValues(0,0);d.findSeparatingAxis=function(a,b,c,e,f,i,j){var k=null,l=!1,m=!1,n=_,o=aa,p=ba,q=ca,s=da,t=ea;if(a instanceof r&&e instanceof r)for(var u=0;2!==u;u++){var v=a,w=c;1===u&&(v=e,w=i);for(var x=0;2!==x;x++){0===x?g.set(q,0,1):1===x&&g.set(q,1,0),0!==w&&g.rotate(q,q,w),d.projectConvexOntoAxis(a,b,c,q,s),d.projectConvexOntoAxis(e,f,i,q,t);var y=s,z=t,A=!1;s[0]>t[0]&&(z=s,y=t,A=!0);var B=z[0]-y[1];l=B<=0,(null===k||B>k)&&(g.copy(j,q),k=B,m=l)}}else for(var u=0;2!==u;u++){var v=a,w=c;1===u&&(v=e,w=i);for(var x=0;x!==v.vertices.length;x++){g.rotate(o,v.vertices[x],w),g.rotate(p,v.vertices[(x+1)%v.vertices.length],w),h(n,p,o),g.rotate90cw(q,n),g.normalize(q,q),d.projectConvexOntoAxis(a,b,c,q,s),d.projectConvexOntoAxis(e,f,i,q,t);var y=s,z=t,A=!1;s[0]>t[0]&&(z=s,y=t,A=!0);var B=z[0]-y[1];l=B<=0,(null===k||B>k)&&(g.copy(j,q),k=B,m=l)}}return m};var fa=g.fromValues(0,0),ga=g.fromValues(0,0),ha=g.fromValues(0,0);d.getClosestEdge=function(a,b,c,d){var e=fa,f=ga,i=ha;g.rotate(e,c,-b),d&&g.scale(e,e,-1);for(var k=-1,l=a.vertices.length,m=-1,n=0;n!==l;n++){h(f,a.vertices[(n+1)%l],a.vertices[n%l]),g.rotate90cw(i,f),g.normalize(i,i);var o=j(i,e);(k===-1||o>m)&&(k=n%l,m=o)}return k};var ia=g.create(),ja=g.create(),ka=g.create(),la=g.create(),ma=g.create(),na=g.create(),oa=g.create();d.prototype[q.CIRCLE|q.HEIGHTFIELD]=d.prototype.circleHeightfield=function(a,b,c,d,e,f,j,k,l,m){var n=f.heights,m=m||b.radius,o=f.elementWidth,p=ja,q=ia,r=ma,s=oa,t=na,u=ka,v=la,w=Math.floor((c[0]-m-j[0])/o),x=Math.ceil((c[0]+m-j[0])/o);w<0&&(w=0),x>=n.length&&(x=n.length-1);for(var y=n[w],z=n[x],A=w;A<x;A++)n[A]<z&&(z=n[A]),n[A]>y&&(y=n[A]);if(c[1]-m>y)return!l&&0;for(var B=!1,A=w;A<x;A++){g.set(u,A*o,n[A]),g.set(v,(A+1)*o,n[A+1]),g.add(u,u,j),g.add(v,v,j),g.sub(t,v,u),g.rotate(t,t,Math.PI/2),g.normalize(t,t),g.scale(q,t,-m),g.add(q,q,c),g.sub(p,q,u);var C=g.dot(p,t);if(q[0]>=u[0]&&q[0]<v[0]&&C<=0){if(l)return!0;B=!0,g.scale(p,t,-C),g.add(r,q,p),g.copy(s,t);var D=this.createContactEquation(e,a,f,b);g.copy(D.normalA,s),g.scale(D.contactPointB,D.normalA,-m),i(D.contactPointB,D.contactPointB,c),h(D.contactPointB,D.contactPointB,a.position),g.copy(D.contactPointA,r),g.sub(D.contactPointA,D.contactPointA,e.position),this.contactEquations.push(D),this.enableFriction&&this.frictionEquations.push(this.createFrictionFromContact(D))}}if(B=!1,m>0)for(var A=w;A<=x;A++)if(g.set(u,A*o,n[A]),g.add(u,u,j),g.sub(p,c,u),g.squaredLength(p)<Math.pow(m,2)){if(l)return!0;
	return void 0===k&&(k=this.world),k.add(new c.Button(this.game,a,b,d,e,f,g,h,i,j))},graphics:function(a,b,d){return void 0===d&&(d=this.world),d.add(new c.Graphics(this.game,a,b))},emitter:function(a,b,d){return this.game.particles.add(new c.Particles.Arcade.Emitter(this.game,a,b,d))},retroFont:function(a,b,d,e,f,g,h,i,j){return new c.RetroFont(this.game,a,b,d,e,f,g,h,i,j)},bitmapText:function(a,b,d,e,f,g){return void 0===g&&(g=this.world),g.add(new c.BitmapText(this.game,a,b,d,e,f))},tilemap:function(a,b,d,e,f){return new c.Tilemap(this.game,a,b,d,e,f)},renderTexture:function(a,b,d,e){void 0!==d&&""!==d||(d=this.game.rnd.uuid()),void 0===e&&(e=!1);var f=new c.RenderTexture(this.game,a,b,d);return e&&this.game.cache.addRenderTexture(d,f),f},video:function(a,b){return new c.Video(this.game,a,b)},bitmapData:function(a,b,d,e){void 0===e&&(e=!1),void 0!==d&&""!==d||(d=this.game.rnd.uuid());var f=new c.BitmapData(this.game,d,a,b);return e&&this.game.cache.addBitmapData(d,f),f},filter:function(a){var b=Array.prototype.slice.call(arguments,1),a=new c.Filter[a](this.game);return a.init.apply(a,b),a},plugin:function(a){return this.game.plugins.add(a)}},c.GameObjectFactory.prototype.constructor=c.GameObjectFactory,c.GameObjectCreator=function(a){this.game=a,this.world=this.game.world},c.GameObjectCreator.prototype={image:function(a,b,d,e){return new c.Image(this.game,a,b,d,e)},sprite:function(a,b,d,e){return new c.Sprite(this.game,a,b,d,e)},tween:function(a){return new c.Tween(a,this.game,this.game.tweens)},group:function(a,b,d,e,f){return new c.Group(this.game,a,b,d,e,f)},spriteBatch:function(a,b,d){return void 0===b&&(b="group"),void 0===d&&(d=!1),new c.SpriteBatch(this.game,a,b,d)},audio:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},audioSprite:function(a){return this.game.sound.addSprite(a)},sound:function(a,b,c,d){return this.game.sound.add(a,b,c,d)},tileSprite:function(a,b,d,e,f,g){return new c.TileSprite(this.game,a,b,d,e,f,g)},rope:function(a,b,d,e,f){return new c.Rope(this.game,a,b,d,e,f)},text:function(a,b,d,e){return new c.Text(this.game,a,b,d,e)},button:function(a,b,d,e,f,g,h,i,j){return new c.Button(this.game,a,b,d,e,f,g,h,i,j)},graphics:function(a,b){return new c.Graphics(this.game,a,b)},emitter:function(a,b,d){return new c.Particles.Arcade.Emitter(this.game,a,b,d)},retroFont:function(a,b,d,e,f,g,h,i,j){return new c.RetroFont(this.game,a,b,d,e,f,g,h,i,j)},bitmapText:function(a,b,d,e,f,g){return new c.BitmapText(this.game,a,b,d,e,f,g)},tilemap:function(a,b,d,e,f){return new c.Tilemap(this.game,a,b,d,e,f)},renderTexture:function(a,b,d,e){void 0!==d&&""!==d||(d=this.game.rnd.uuid()),void 0===e&&(e=!1);var f=new c.RenderTexture(this.game,a,b,d);return e&&this.game.cache.addRenderTexture(d,f),f},bitmapData:function(a,b,d,e){void 0===e&&(e=!1),void 0!==d&&""!==d||(d=this.game.rnd.uuid());var f=new c.BitmapData(this.game,d,a,b);return e&&this.game.cache.addBitmapData(d,f),f},filter:function(a){var b=Array.prototype.slice.call(arguments,1),a=new c.Filter[a](this.game);return a.init.apply(a,b),a}},c.GameObjectCreator.prototype.constructor=c.GameObjectCreator,c.Sprite=function(a,b,d,e,f){b=b||0,d=d||0,e=e||null,f=f||null,this.type=c.SPRITE,this.physicsType=c.SPRITE,PIXI.Sprite.call(this,c.Cache.DEFAULT),c.Component.Core.init.call(this,a,b,d,e,f)},c.Sprite.prototype=Object.create(PIXI.Sprite.prototype),c.Sprite.prototype.constructor=c.Sprite,c.Component.Core.install.call(c.Sprite.prototype,["Angle","Animation","AutoCull","Bounds","BringToTop","Crop","Delta","Destroy","FixedToCamera","Health","InCamera","InputEnabled","InWorld","LifeSpan","LoadTexture","Overlap","PhysicsBody","Reset","ScaleMinMax","Smoothed"]),c.Sprite.prototype.preUpdatePhysics=c.Component.PhysicsBody.preUpdate,c.Sprite.prototype.preUpdateLifeSpan=c.Component.LifeSpan.preUpdate,c.Sprite.prototype.preUpdateInWorld=c.Component.InWorld.preUpdate,c.Sprite.prototype.preUpdateCore=c.Component.Core.preUpdate,c.Sprite.prototype.preUpdate=function(){return!!(this.preUpdatePhysics()&&this.preUpdateLifeSpan()&&this.preUpdateInWorld())&&this.preUpdateCore()},c.Image=function(a,b,d,e,f){b=b||0,d=d||0,e=e||null,f=f||null,this.type=c.IMAGE,PIXI.Sprite.call(this,c.Cache.DEFAULT),c.Component.Core.init.call(this,a,b,d,e,f)},c.Image.prototype=Object.create(PIXI.Sprite.prototype),c.Image.prototype.constructor=c.Image,c.Component.Core.install.call(c.Image.prototype,["Angle","Animation","AutoCull","Bounds","BringToTop","Crop","Destroy","FixedToCamera","InputEnabled","LifeSpan","LoadTexture","Overlap","Reset","ScaleMinMax","Smoothed"]),c.Image.prototype.preUpdateInWorld=c.Component.InWorld.preUpdate,c.Image.prototype.preUpdateCore=c.Component.Core.preUpdate,c.Image.prototype.preUpdate=function(){return!!this.preUpdateInWorld()&&this.preUpdateCore()},c.Button=function(a,b,d,e,f,g,h,i,j,k){b=b||0,d=d||0,e=e||null,f=f||null,g=g||this,c.Image.call(this,a,b,d,e,i),this.type=c.BUTTON,this.physicsType=c.SPRITE,this._onOverFrame=null,this._onOutFrame=null,this._onDownFrame=null,this._onUpFrame=null,this.onOverSound=null,this.onOutSound=null,this.onDownSound=null,this.onUpSound=null,this.onOverSoundMarker="",this.onOutSoundMarker="",this.onDownSoundMarker="",this.onUpSoundMarker="",this.onInputOver=new c.Signal,this.onInputOut=new c.Signal,this.onInputDown=new c.Signal,this.onInputUp=new c.Signal,this.onOverMouseOnly=!0,this.justReleasedPreventsOver=c.PointerMode.TOUCH,this.freezeFrames=!1,this.forceOut=!1,this.inputEnabled=!0,this.input.start(0,!0),this.input.useHandCursor=!0,this.setFrames(h,i,j,k),null!==f&&this.onInputUp.add(f,g),this.events.onInputOver.add(this.onInputOverHandler,this),this.events.onInputOut.add(this.onInputOutHandler,this),this.events.onInputDown.add(this.onInputDownHandler,this),this.events.onInputUp.add(this.onInputUpHandler,this),this.events.onRemovedFromWorld.add(this.removedFromWorld,this)},c.Button.prototype=Object.create(c.Image.prototype),c.Button.prototype.constructor=c.Button;var g="Over",h="Out",i="Down",j="Up";c.Button.prototype.clearFrames=function(){this.setFrames(null,null,null,null)},c.Button.prototype.removedFromWorld=function(){this.inputEnabled=!1},c.Button.prototype.setStateFrame=function(a,b,c){var d="_on"+a+"Frame";null!==b?(this[d]=b,c&&this.changeStateFrame(a)):this[d]=null},c.Button.prototype.changeStateFrame=function(a){if(this.freezeFrames)return!1;var b="_on"+a+"Frame",c=this[b];return"string"==typeof c?(this.frameName=c,!0):"number"==typeof c&&(this.frame=c,!0)},c.Button.prototype.setFrames=function(a,b,c,d){this.setStateFrame(g,a,this.input.pointerOver()),this.setStateFrame(h,b,!this.input.pointerOver()),this.setStateFrame(i,c,this.input.pointerDown()),this.setStateFrame(j,d,this.input.pointerUp())},c.Button.prototype.setStateSound=function(a,b,d){var e="on"+a+"Sound",f="on"+a+"SoundMarker";b instanceof c.Sound||b instanceof c.AudioSprite?(this[e]=b,this[f]="string"==typeof d?d:""):(this[e]=null,this[f]="")},c.Button.prototype.playStateSound=function(a){var b="on"+a+"Sound",c=this[b];if(c){var d="on"+a+"SoundMarker",e=this[d];return c.play(e),!0}return!1},c.Button.prototype.setSounds=function(a,b,c,d,e,f,k,l){this.setStateSound(g,a,b),this.setStateSound(h,e,f),this.setStateSound(i,c,d),this.setStateSound(j,k,l)},c.Button.prototype.setOverSound=function(a,b){this.setStateSound(g,a,b)},c.Button.prototype.setOutSound=function(a,b){this.setStateSound(h,a,b)},c.Button.prototype.setDownSound=function(a,b){this.setStateSound(i,a,b)},c.Button.prototype.setUpSound=function(a,b){this.setStateSound(j,a,b)},c.Button.prototype.onInputOverHandler=function(a,b){b.justReleased()&&(this.justReleasedPreventsOver&b.pointerMode)===b.pointerMode||(this.changeStateFrame(g),this.onOverMouseOnly&&!b.isMouse||(this.playStateSound(g),this.onInputOver&&this.onInputOver.dispatch(this,b)))},c.Button.prototype.onInputOutHandler=function(a,b){this.changeStateFrame(h),this.playStateSound(h),this.onInputOut&&this.onInputOut.dispatch(this,b)},c.Button.prototype.onInputDownHandler=function(a,b){this.changeStateFrame(i),this.playStateSound(i),this.onInputDown&&this.onInputDown.dispatch(this,b)},c.Button.prototype.onInputUpHandler=function(a,b,c){if(this.playStateSound(j),this.onInputUp&&this.onInputUp.dispatch(this,b,c),!this.freezeFrames)if(this.forceOut===!0||(this.forceOut&b.pointerMode)===b.pointerMode)this.changeStateFrame(h);else{var d=this.changeStateFrame(j);d||(c?this.changeStateFrame(g):this.changeStateFrame(h))}},c.SpriteBatch=function(a,b,d,e){void 0!==b&&null!==b||(b=a.world),PIXI.SpriteBatch.call(this),c.Group.call(this,a,b,d,e),this.type=c.SPRITEBATCH},c.SpriteBatch.prototype=c.Utils.extend(!0,c.SpriteBatch.prototype,PIXI.SpriteBatch.prototype,c.Group.prototype),c.SpriteBatch.prototype.constructor=c.SpriteBatch,c.BitmapData=function(a,b,d,e,f){void 0!==d&&0!==d||(d=256),void 0!==e&&0!==e||(e=256),void 0===f&&(f=!1),this.game=a,this.key=b,this.width=d,this.height=e,this.canvas=c.Canvas.create(this,d,e,null,f),this.context=this.canvas.getContext("2d",{alpha:!0}),this.ctx=this.context,this.smoothProperty=a.renderType===c.CANVAS?a.renderer.renderSession.smoothProperty:c.Canvas.getSmoothingPrefix(this.context),this.imageData=this.context.getImageData(0,0,d,e),this.data=null,this.imageData&&(this.data=this.imageData.data),this.pixels=null,this.data&&(this.imageData.data.buffer?(this.buffer=this.imageData.data.buffer,this.pixels=new Uint32Array(this.buffer)):window.ArrayBuffer?(this.buffer=new ArrayBuffer(this.imageData.data.length),this.pixels=new Uint32Array(this.buffer)):this.pixels=this.imageData.data),this.baseTexture=new PIXI.BaseTexture(this.canvas),this.texture=new PIXI.Texture(this.baseTexture),this.frameData=new c.FrameData,this.textureFrame=this.frameData.addFrame(new c.Frame(0,0,0,d,e,"bitmapData")),this.texture.frame=this.textureFrame,this.type=c.BITMAPDATA,this.disableTextureUpload=!1,this.dirty=!1,this.cls=this.clear,this._image=null,this._pos=new c.Point,this._size=new c.Point,this._scale=new c.Point,this._rotate=0,this._alpha={prev:1,current:1},this._anchor=new c.Point,this._tempR=0,this._tempG=0,this._tempB=0,this._circle=new c.Circle,this._swapCanvas=void 0},c.BitmapData.prototype={move:function(a,b,c){return 0!==a&&this.moveH(a,c),0!==b&&this.moveV(b,c),this},moveH:function(a,b){void 0===b&&(b=!0),void 0===this._swapCanvas&&(this._swapCanvas=PIXI.CanvasPool.create(this,this.width,this.height));var c=this._swapCanvas,d=c.getContext("2d"),e=this.height,f=this.canvas;if(d.clearRect(0,0,this.width,this.height),a<0){a=Math.abs(a);var g=this.width-a;b&&d.drawImage(f,0,0,a,e,g,0,a,e),d.drawImage(f,a,0,g,e,0,0,g,e)}else{var g=this.width-a;b&&d.drawImage(f,g,0,a,e,0,0,a,e),d.drawImage(f,0,0,g,e,a,0,g,e)}return this.clear(),this.copy(this._swapCanvas)},moveV:function(a,b){void 0===b&&(b=!0),void 0===this._swapCanvas&&(this._swapCanvas=PIXI.CanvasPool.create(this,this.width,this.height));var c=this._swapCanvas,d=c.getContext("2d"),e=this.width,f=this.canvas;if(d.clearRect(0,0,this.width,this.height),a<0){a=Math.abs(a);var g=this.height-a;b&&d.drawImage(f,0,0,e,a,0,g,e,a),d.drawImage(f,0,a,e,g,0,0,e,g)}else{var g=this.height-a;b&&d.drawImage(f,0,g,e,a,0,0,e,a),d.drawImage(f,0,0,e,g,0,a,e,g)}return this.clear(),this.copy(this._swapCanvas)},add:function(a){if(Array.isArray(a))for(var b=0;b<a.length;b++)a[b].loadTexture&&a[b].loadTexture(this);else a.loadTexture(this);return this},load:function(a){if("string"==typeof a&&(a=this.game.cache.getImage(a)),a)return this.resize(a.width,a.height),this.cls(),this.draw(a),this.update(),this},clear:function(a,b,c,d){return void 0===a&&(a=0),void 0===b&&(b=0),void 0===c&&(c=this.width),void 0===d&&(d=this.height),this.context.clearRect(a,b,c,d),this.dirty=!0,this},fill:function(a,b,c,d){return void 0===d&&(d=1),this.context.fillStyle="rgba("+a+","+b+","+c+","+d+")",this.context.fillRect(0,0,this.width,this.height),this.dirty=!0,this},generateTexture:function(a){var b=new Image;b.src=this.canvas.toDataURL("image/png");var c=this.game.cache.addImage(a,"",b);return new PIXI.Texture(c.base)},resize:function(a,b){return a===this.width&&b===this.height||(this.width=a,this.height=b,this.canvas.width=a,this.canvas.height=b,void 0!==this._swapCanvas&&(this._swapCanvas.width=a,this._swapCanvas.height=b),this.baseTexture.width=a,this.baseTexture.height=b,this.textureFrame.width=a,this.textureFrame.height=b,this.texture.width=a,this.texture.height=b,this.texture.crop.width=a,this.texture.crop.height=b,this.update(),this.dirty=!0),this},update:function(a,b,c,d){return void 0===a&&(a=0),void 0===b&&(b=0),void 0===c&&(c=Math.max(1,this.width)),void 0===d&&(d=Math.max(1,this.height)),this.imageData=this.context.getImageData(a,b,c,d),this.data=this.imageData.data,this.imageData.data.buffer?(this.buffer=this.imageData.data.buffer,this.pixels=new Uint32Array(this.buffer)):window.ArrayBuffer?(this.buffer=new ArrayBuffer(this.imageData.data.length),this.pixels=new Uint32Array(this.buffer)):this.pixels=this.imageData.data,this},processPixelRGB:function(a,b,d,e,f,g){void 0===d&&(d=0),void 0===e&&(e=0),void 0===f&&(f=this.width),void 0===g&&(g=this.height);for(var h=d+f,i=e+g,j=c.Color.createColor(),k={r:0,g:0,b:0,a:0},l=!1,m=e;m<i;m++)for(var n=d;n<h;n++)c.Color.unpackPixel(this.getPixel32(n,m),j),k=a.call(b,j,n,m),k!==!1&&null!==k&&void 0!==k&&(this.setPixel32(n,m,k.r,k.g,k.b,k.a,!1),l=!0);return l&&(this.context.putImageData(this.imageData,0,0),this.dirty=!0),this},processPixel:function(a,b,c,d,e,f){void 0===c&&(c=0),void 0===d&&(d=0),void 0===e&&(e=this.width),void 0===f&&(f=this.height);for(var g=c+e,h=d+f,i=0,j=0,k=!1,l=d;l<h;l++)for(var m=c;m<g;m++)i=this.getPixel32(m,l),j=a.call(b,i,m,l),j!==i&&(this.pixels[l*this.width+m]=j,k=!0);return k&&(this.context.putImageData(this.imageData,0,0),this.dirty=!0),this},replaceRGB:function(a,b,d,e,f,g,h,i,j){var k=0,l=0,m=this.width,n=this.height,o=c.Color.packPixel(a,b,d,e);void 0!==j&&j instanceof c.Rectangle&&(k=j.x,l=j.y,m=j.width,n=j.height);for(var p=0;p<n;p++)for(var q=0;q<m;q++)this.getPixel32(k+q,l+p)===o&&this.setPixel32(k+q,l+p,f,g,h,i,!1);return this.context.putImageData(this.imageData,0,0),this.dirty=!0,this},setHSL:function(a,b,d,e){var f=a||0===a,g=b||0===b,h=d||0===d;if(f||g||h){void 0===e&&(e=new c.Rectangle(0,0,this.width,this.height));for(var i=c.Color.createColor(),j=e.y;j<e.bottom;j++)for(var k=e.x;k<e.right;k++)c.Color.unpackPixel(this.getPixel32(k,j),i,!0),f&&(i.h=a),g&&(i.s=b),h&&(i.l=d),c.Color.HSLtoRGB(i.h,i.s,i.l,i),this.setPixel32(k,j,i.r,i.g,i.b,i.a,!1);return this.context.putImageData(this.imageData,0,0),this.dirty=!0,this}},shiftHSL:function(a,b,d,e){if(void 0!==a&&null!==a||(a=!1),void 0!==b&&null!==b||(b=!1),void 0!==d&&null!==d||(d=!1),a||b||d){void 0===e&&(e=new c.Rectangle(0,0,this.width,this.height));for(var f=c.Color.createColor(),g=e.y;g<e.bottom;g++)for(var h=e.x;h<e.right;h++)c.Color.unpackPixel(this.getPixel32(h,g),f,!0),a&&(f.h=this.game.math.wrap(f.h+a,0,1)),b&&(f.s=this.game.math.clamp(f.s+b,0,1)),d&&(f.l=this.game.math.clamp(f.l+d,0,1)),c.Color.HSLtoRGB(f.h,f.s,f.l,f),this.setPixel32(h,g,f.r,f.g,f.b,f.a,!1);return this.context.putImageData(this.imageData,0,0),this.dirty=!0,this}},setPixel32:function(a,b,d,e,f,g,h){return void 0===h&&(h=!0),a>=0&&a<=this.width&&b>=0&&b<=this.height&&(c.Device.LITTLE_ENDIAN?this.pixels[b*this.width+a]=g<<24|f<<16|e<<8|d:this.pixels[b*this.width+a]=d<<24|e<<16|f<<8|g,h&&(this.context.putImageData(this.imageData,0,0),this.dirty=!0)),this},setPixel:function(a,b,c,d,e,f){return this.setPixel32(a,b,c,d,e,255,f)},getPixel:function(a,b,d){d||(d=c.Color.createColor());var e=~~(a+b*this.width);return e*=4,d.r=this.data[e],d.g=this.data[++e],d.b=this.data[++e],d.a=this.data[++e],d},getPixel32:function(a,b){if(a>=0&&a<=this.width&&b>=0&&b<=this.height)return this.pixels[b*this.width+a]},getPixelRGB:function(a,b,d,e,f){return c.Color.unpackPixel(this.getPixel32(a,b),d,e,f)},getPixels:function(a){return this.context.getImageData(a.x,a.y,a.width,a.height)},getFirstPixel:function(a){void 0===a&&(a=0);var b=c.Color.createColor(),d=0,e=0,f=1,g=!1;1===a?(f=-1,e=this.height):3===a&&(f=-1,d=this.width);do c.Color.unpackPixel(this.getPixel32(d,e),b),0===a||1===a?(d++,d===this.width&&(d=0,e+=f,(e>=this.height||e<=0)&&(g=!0))):2!==a&&3!==a||(e++,e===this.height&&(e=0,d+=f,(d>=this.width||d<=0)&&(g=!0)));while(0===b.a&&!g);return b.x=d,b.y=e,b},getBounds:function(a){return void 0===a&&(a=new c.Rectangle),a.x=this.getFirstPixel(2).x,a.x===this.width?a.setTo(0,0,0,0):(a.y=this.getFirstPixel(0).y,a.width=this.getFirstPixel(3).x-a.x+1,a.height=this.getFirstPixel(1).y-a.y+1,a)},addToWorld:function(a,b,c,d,e,f){e=e||1,f=f||1;var g=this.game.add.image(a,b,this);return g.anchor.set(c,d),g.scale.set(e,f),g},copy:function(a,b,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(void 0!==a&&null!==a||(a=this),(a instanceof c.RenderTexture||a instanceof PIXI.RenderTexture)&&(a=a.getCanvas()),this._image=a,a instanceof c.Sprite||a instanceof c.Image||a instanceof c.Text||a instanceof PIXI.Sprite)this._pos.set(a.texture.crop.x,a.texture.crop.y),this._size.set(a.texture.crop.width,a.texture.crop.height),this._scale.set(a.scale.x,a.scale.y),this._anchor.set(a.anchor.x,a.anchor.y),this._rotate=a.rotation,this._alpha.current=a.alpha,a.texture instanceof c.RenderTexture||a.texture instanceof PIXI.RenderTexture?this._image=a.texture.getCanvas():this._image=a.texture.baseTexture.source,void 0!==g&&null!==g||(g=a.x),void 0!==h&&null!==h||(h=a.y),a.texture.trim&&(g+=a.texture.trim.x-a.anchor.x*a.texture.trim.width,h+=a.texture.trim.y-a.anchor.y*a.texture.trim.height),16777215!==a.tint&&(a.cachedTint!==a.tint&&(a.cachedTint=a.tint,a.tintedTexture=PIXI.CanvasTinter.getTintedTexture(a,a.tint)),this._image=a.tintedTexture,this._pos.set(0));else{if(this._pos.set(0),this._scale.set(1),this._anchor.set(0),this._rotate=0,this._alpha.current=1,a instanceof c.BitmapData)this._image=a.canvas;else if("string"==typeof a){if(a=this.game.cache.getImage(a),null===a)return;this._image=a}this._size.set(this._image.width,this._image.height)}if(void 0!==b&&null!==b||(b=0),void 0!==d&&null!==d||(d=0),e&&(this._size.x=e),f&&(this._size.y=f),void 0!==g&&null!==g||(g=b),void 0!==h&&null!==h||(h=d),void 0!==i&&null!==i||(i=this._size.x),void 0!==j&&null!==j||(j=this._size.y),"number"==typeof k&&(this._rotate=k),"number"==typeof l&&(this._anchor.x=l),"number"==typeof m&&(this._anchor.y=m),"number"==typeof n&&(this._scale.x=n),"number"==typeof o&&(this._scale.y=o),"number"==typeof p&&(this._alpha.current=p),void 0===q&&(q=null),void 0===r&&(r=!1),!(this._alpha.current<=0||0===this._scale.x||0===this._scale.y||0===this._size.x||0===this._size.y)){var s=this.context;return this._alpha.prev=s.globalAlpha,s.save(),s.globalAlpha=this._alpha.current,q&&(this.op=q),r&&(g|=0,h|=0),s.translate(g,h),s.scale(this._scale.x,this._scale.y),s.rotate(this._rotate),s.drawImage(this._image,this._pos.x+b,this._pos.y+d,this._size.x,this._size.y,-i*this._anchor.x,-j*this._anchor.y,i,j),s.restore(),s.globalAlpha=this._alpha.prev,this.dirty=!0,this}},copyTransform:function(a,b,d){if(void 0===b&&(b=null),void 0===d&&(d=!1),!a.hasOwnProperty("worldTransform")||!a.worldVisible||0===a.worldAlpha)return this;var e=a.worldTransform;if(this._pos.set(a.texture.crop.x,a.texture.crop.y),this._size.set(a.texture.crop.width,a.texture.crop.height),0===e.a||0===e.d||0===this._size.x||0===this._size.y)return this;a.texture instanceof c.RenderTexture||a.texture instanceof PIXI.RenderTexture?this._image=a.texture.getCanvas():this._image=a.texture.baseTexture.source;var f=e.tx,g=e.ty;a.texture.trim&&(f+=a.texture.trim.x-a.anchor.x*a.texture.trim.width,g+=a.texture.trim.y-a.anchor.y*a.texture.trim.height),16777215!==a.tint&&(a.cachedTint!==a.tint&&(a.cachedTint=a.tint,a.tintedTexture=PIXI.CanvasTinter.getTintedTexture(a,a.tint)),this._image=a.tintedTexture,this._pos.set(0)),d&&(f|=0,g|=0);var h=this.context;return this._alpha.prev=h.globalAlpha,h.save(),h.globalAlpha=this._alpha.current,b&&(this.op=b),h[this.smoothProperty]=a.texture.baseTexture.scaleMode===PIXI.scaleModes.LINEAR,h.setTransform(e.a,e.b,e.c,e.d,f,g),h.drawImage(this._image,this._pos.x,this._pos.y,this._size.x,this._size.y,-this._size.x*a.anchor.x,-this._size.y*a.anchor.y,this._size.x,this._size.y),h.restore(),h.globalAlpha=this._alpha.prev,this.dirty=!0,this},copyRect:function(a,b,c,d,e,f,g){return this.copy(a,b.x,b.y,b.width,b.height,c,d,b.width,b.height,0,0,0,1,1,e,f,g)},draw:function(a,b,c,d,e,f,g){return this.copy(a,null,null,null,null,b,c,d,e,null,null,null,null,null,null,f,g)},drawGroup:function(a,b,c){return a.total>0&&a.forEachExists(this.drawGroupProxy,this,b,c),this},drawGroupProxy:function(a,b,d){if(a.hasOwnProperty("texture")&&this.copyTransform(a,b,d),a.type===c.GROUP&&a.exists)this.drawGroup(a,b,d);else if(a.hasOwnProperty("children")&&a.children.length>0)for(var e=0;e<a.children.length;e++)a.children[e].exists&&this.copyTransform(a.children[e],b,d)},drawFull:function(a,b,d){if(a.worldVisible===!1||0===a.worldAlpha||a.hasOwnProperty("exists")&&a.exists===!1)return this;if(a.type!==c.GROUP&&a.type!==c.EMITTER&&a.type!==c.BITMAPTEXT)if(a.type===c.GRAPHICS){var e=a.getBounds();this.ctx.save(),this.ctx.translate(e.x,e.y),PIXI.CanvasGraphics.renderGraphics(a,this.ctx),this.ctx.restore()}else this.copy(a,null,null,null,null,a.worldPosition.x,a.worldPosition.y,null,null,a.worldRotation,null,null,a.worldScale.x,a.worldScale.y,a.worldAlpha,b,d);if(a.children)for(var f=0;f<a.children.length;f++)this.drawFull(a.children[f],b,d);return this},shadow:function(a,b,c,d){var e=this.context;return void 0===a||null===a?e.shadowColor="rgba(0,0,0,0)":(e.shadowColor=a,e.shadowBlur=b||5,e.shadowOffsetX=c||10,e.shadowOffsetY=d||10),this},alphaMask:function(a,b,c,d){return void 0===d||null===d?this.draw(b).blendSourceAtop():this.draw(b,d.x,d.y,d.width,d.height).blendSourceAtop(),void 0===c||null===c?this.draw(a).blendReset():this.draw(a,c.x,c.y,c.width,c.height).blendReset(),this},extract:function(a,b,c,d,e,f,g,h,i){return void 0===e&&(e=255),void 0===f&&(f=!1),void 0===g&&(g=b),void 0===h&&(h=c),void 0===i&&(i=d),f&&a.resize(this.width,this.height),this.processPixelRGB(function(f,j,k){return f.r===b&&f.g===c&&f.b===d&&a.setPixel32(j,k,g,h,i,e,!1),!1},this),a.context.putImageData(a.imageData,0,0),a.dirty=!0,a},rect:function(a,b,c,d,e){return"undefined"!=typeof e&&(this.context.fillStyle=e),this.context.fillRect(a,b,c,d),this},text:function(a,b,c,d,e,f){void 0===b&&(b=0),void 0===c&&(c=0),void 0===d&&(d="14px Courier"),void 0===e&&(e="rgb(255,255,255)"),void 0===f&&(f=!0);var g=this.context,h=g.font;return g.font=d,f&&(g.fillStyle="rgb(0,0,0)",g.fillText(a,b+1,c+1)),g.fillStyle=e,g.fillText(a,b,c),g.font=h,this},circle:function(a,b,c,d){var e=this.context;return void 0!==d&&(e.fillStyle=d),e.beginPath(),e.arc(a,b,c,0,2*Math.PI,!1),e.closePath(),e.fill(),this},line:function(a,b,c,d,e,f){void 0===e&&(e="#fff"),void 0===f&&(f=1);var g=this.context;return g.beginPath(),g.moveTo(a,b),g.lineTo(c,d),g.lineWidth=f,g.strokeStyle=e,g.stroke(),g.closePath(),this},textureLine:function(a,b,d){if(void 0===d&&(d="repeat-x"),"string"!=typeof b||(b=this.game.cache.getImage(b))){var e=a.length;"no-repeat"===d&&e>b.width&&(e=b.width);var f=this.context;return f.fillStyle=f.createPattern(b,d),this._circle=new c.Circle(a.start.x,a.start.y,b.height),this._circle.circumferencePoint(a.angle-1.5707963267948966,!1,this._pos),f.save(),f.translate(this._pos.x,this._pos.y),f.rotate(a.angle),f.fillRect(0,0,e,b.height),f.restore(),this.dirty=!0,this}},render:function(){return!this.disableTextureUpload&&this.dirty&&(this.baseTexture.dirty(),this.dirty=!1),this},destroy:function(){this.frameData.destroy(),this.texture.destroy(!0),PIXI.CanvasPool.remove(this)},blendReset:function(){return this.op="source-over",this},blendSourceOver:function(){return this.op="source-over",this},blendSourceIn:function(){return this.op="source-in",this},blendSourceOut:function(){return this.op="source-out",this},blendSourceAtop:function(){return this.op="source-atop",this},blendDestinationOver:function(){return this.op="destination-over",this},blendDestinationIn:function(){return this.op="destination-in",this},blendDestinationOut:function(){return this.op="destination-out",this},blendDestinationAtop:function(){return this.op="destination-atop",this},blendXor:function(){return this.op="xor",this},blendAdd:function(){return this.op="lighter",this},blendMultiply:function(){return this.op="multiply",this},blendScreen:function(){return this.op="screen",this},blendOverlay:function(){return this.op="overlay",this},blendDarken:function(){return this.op="darken",this},blendLighten:function(){return this.op="lighten",this},blendColorDodge:function(){return this.op="color-dodge",this},blendColorBurn:function(){return this.op="color-burn",this},blendHardLight:function(){return this.op="hard-light",this},blendSoftLight:function(){return this.op="soft-light",this},blendDifference:function(){return this.op="difference",this},blendExclusion:function(){return this.op="exclusion",this},blendHue:function(){return this.op="hue",this},blendSaturation:function(){return this.op="saturation",this},blendColor:function(){return this.op="color",this},blendLuminosity:function(){return this.op="luminosity",this}},Object.defineProperty(c.BitmapData.prototype,"smoothed",{get:function(){c.Canvas.getSmoothingEnabled(this.context)},set:function(a){c.Canvas.setSmoothingEnabled(this.context,a)}}),Object.defineProperty(c.BitmapData.prototype,"op",{get:function(){return this.context.globalCompositeOperation},set:function(a){this.context.globalCompositeOperation=a}}),c.BitmapData.getTransform=function(a,b,c,d,e,f){return"number"!=typeof a&&(a=0),"number"!=typeof b&&(b=0),"number"!=typeof c&&(c=1),"number"!=typeof d&&(d=1),"number"!=typeof e&&(e=0),"number"!=typeof f&&(f=0),{sx:c,sy:d,scaleX:c,scaleY:d,skewX:e,skewY:f,translateX:a,translateY:b,tx:a,ty:b}},c.BitmapData.prototype.constructor=c.BitmapData,PIXI.Graphics=function(){PIXI.DisplayObjectContainer.call(this),this.renderable=!0,this.fillAlpha=1,this.lineWidth=0,this.lineColor=0,this.graphicsData=[],this.tint=16777215,this.blendMode=PIXI.blendModes.NORMAL,this.currentPath=null,this._webGL=[],this.isMask=!1,this.boundsPadding=0,this._localBounds=new PIXI.Rectangle(0,0,1,1),this.dirty=!0,this._boundsDirty=!1,this.webGLDirty=!1,this.cachedSpriteDirty=!1},PIXI.Graphics.prototype=Object.create(PIXI.DisplayObjectContainer.prototype),PIXI.Graphics.prototype.constructor=PIXI.Graphics,PIXI.Graphics.prototype.lineStyle=function(a,b,c){return this.lineWidth=a||0,this.lineColor=b||0,this.lineAlpha=void 0===c?1:c,this.currentPath&&(this.currentPath.shape.points.length?this.drawShape(new PIXI.Polygon(this.currentPath.shape.points.slice(-2))):(this.currentPath.lineWidth=this.lineWidth,this.currentPath.lineColor=this.lineColor,this.currentPath.lineAlpha=this.lineAlpha)),this},PIXI.Graphics.prototype.moveTo=function(a,b){return this.drawShape(new PIXI.Polygon([a,b])),this},PIXI.Graphics.prototype.lineTo=function(a,b){return this.currentPath||this.moveTo(0,0),this.currentPath.shape.points.push(a,b),this.dirty=!0,this._boundsDirty=!0,this},PIXI.Graphics.prototype.quadraticCurveTo=function(a,b,c,d){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var e,f,g=20,h=this.currentPath.shape.points;0===h.length&&this.moveTo(0,0);for(var i=h[h.length-2],j=h[h.length-1],k=0,l=1;l<=g;++l)k=l/g,e=i+(a-i)*k,f=j+(b-j)*k,h.push(e+(a+(c-a)*k-e)*k,f+(b+(d-b)*k-f)*k);return this.dirty=!0,this._boundsDirty=!0,this},PIXI.Graphics.prototype.bezierCurveTo=function(a,b,c,d,e,f){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);for(var g,h,i,j,k,l=20,m=this.currentPath.shape.points,n=m[m.length-2],o=m[m.length-1],p=0,q=1;q<=l;++q)p=q/l,g=1-p,h=g*g,i=h*g,j=p*p,k=j*p,m.push(i*n+3*h*p*a+3*g*j*c+k*e,i*o+3*h*p*b+3*g*j*d+k*f);return this.dirty=!0,this._boundsDirty=!0,this},PIXI.Graphics.prototype.arcTo=function(a,b,c,d,e){this.currentPath?0===this.currentPath.shape.points.length&&this.currentPath.shape.points.push(a,b):this.moveTo(a,b);var f=this.currentPath.shape.points,g=f[f.length-2],h=f[f.length-1],i=h-b,j=g-a,k=d-b,l=c-a,m=Math.abs(i*l-j*k);if(m<1e-8||0===e)f[f.length-2]===a&&f[f.length-1]===b||f.push(a,b);else{var n=i*i+j*j,o=k*k+l*l,p=i*k+j*l,q=e*Math.sqrt(n)/m,r=e*Math.sqrt(o)/m,s=q*p/n,t=r*p/o,u=q*l+r*j,v=q*k+r*i,w=j*(r+s),x=i*(r+s),y=l*(q+t),z=k*(q+t),A=Math.atan2(x-v,w-u),B=Math.atan2(z-v,y-u);this.arc(u+a,v+b,e,A,B,j*k>l*i)}return this.dirty=!0,this._boundsDirty=!0,this},PIXI.Graphics.prototype.arc=function(a,b,c,d,e,f,g){if(d===e)return this;void 0===f&&(f=!1),void 0===g&&(g=40),!f&&e<=d?e+=2*Math.PI:f&&d<=e&&(d+=2*Math.PI);var h=f?(d-e)*-1:e-d,i=Math.ceil(Math.abs(h)/(2*Math.PI))*g;if(0===h)return this;var j=a+Math.cos(d)*c,k=b+Math.sin(d)*c;f&&this.filling?this.moveTo(a,b):this.moveTo(j,k);for(var l=this.currentPath.shape.points,m=h/(2*i),n=2*m,o=Math.cos(m),p=Math.sin(m),q=i-1,r=q%1/q,s=0;s<=q;s++){var t=s+r*s,u=m+d+n*t,v=Math.cos(u),w=-Math.sin(u);l.push((o*v+p*w)*c+a,(o*-w+p*v)*c+b)}return this.dirty=!0,this._boundsDirty=!0,this},PIXI.Graphics.prototype.beginFill=function(a,b){return this.filling=!0,this.fillColor=a||0,this.fillAlpha=void 0===b?1:b,this.currentPath&&this.currentPath.shape.points.length<=2&&(this.currentPath.fill=this.filling,this.currentPath.fillColor=this.fillColor,this.currentPath.fillAlpha=this.fillAlpha),this},PIXI.Graphics.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},PIXI.Graphics.prototype.drawRect=function(a,b,c,d){return this.drawShape(new PIXI.Rectangle(a,b,c,d)),this},PIXI.Graphics.prototype.drawRoundedRect=function(a,b,c,d,e){return this.drawShape(new PIXI.RoundedRectangle(a,b,c,d,e)),this},PIXI.Graphics.prototype.drawCircle=function(a,b,c){return this.drawShape(new PIXI.Circle(a,b,c)),this},PIXI.Graphics.prototype.drawEllipse=function(a,b,c,d){return this.drawShape(new PIXI.Ellipse(a,b,c,d)),this},PIXI.Graphics.prototype.drawPolygon=function(a){(a instanceof c.Polygon||a instanceof PIXI.Polygon)&&(a=a.points);var b=a;if(!Array.isArray(b)){b=new Array(arguments.length);for(var d=0;d<b.length;++d)b[d]=arguments[d]}return this.drawShape(new c.Polygon(b)),this},PIXI.Graphics.prototype.clear=function(){return this.lineWidth=0,this.filling=!1,this.dirty=!0,this._boundsDirty=!0,this.clearDirty=!0,this.graphicsData=[],this.updateLocalBounds(),this},PIXI.Graphics.prototype.generateTexture=function(a,b,c){void 0===a&&(a=1),void 0===b&&(b=PIXI.scaleModes.DEFAULT),void 0===c&&(c=0);var d=this.getBounds();d.width+=c,d.height+=c;var e=new PIXI.CanvasBuffer(d.width*a,d.height*a),f=PIXI.Texture.fromCanvas(e.canvas,b);return f.baseTexture.resolution=a,e.context.scale(a,a),e.context.translate(-d.x,-d.y),PIXI.CanvasGraphics.renderGraphics(this,e.context),f},PIXI.Graphics.prototype._renderWebGL=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){if(this._cacheAsBitmap)return(this.dirty||this.cachedSpriteDirty)&&(this._generateCachedSprite(),this.updateCachedSpriteTexture(),this.cachedSpriteDirty=!1,this.dirty=!1),this._cachedSprite.worldAlpha=this.worldAlpha,void PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite,a);if(a.spriteBatch.stop(),a.blendModeManager.setBlendMode(this.blendMode),this._mask&&a.maskManager.pushMask(this._mask,a),this._filters&&a.filterManager.pushFilter(this._filterBlock),this.blendMode!==a.spriteBatch.currentBlendMode){a.spriteBatch.currentBlendMode=this.blendMode;var b=PIXI.blendModesWebGL[a.spriteBatch.currentBlendMode];a.spriteBatch.gl.blendFunc(b[0],b[1])}if(this.webGLDirty&&(this.dirty=!0,this.webGLDirty=!1),PIXI.WebGLGraphics.renderGraphics(this,a),this.children.length){a.spriteBatch.start();for(var c=0;c<this.children.length;c++)this.children[c]._renderWebGL(a);a.spriteBatch.stop()}this._filters&&a.filterManager.popFilter(),this._mask&&a.maskManager.popMask(this.mask,a),a.drawCount++,
	a.spriteBatch.start()}},PIXI.Graphics.prototype._renderCanvas=function(a){if(this.visible!==!1&&0!==this.alpha&&this.isMask!==!0){if(this._prevTint!==this.tint&&(this.dirty=!0,this._prevTint=this.tint),this._cacheAsBitmap)return(this.dirty||this.cachedSpriteDirty)&&(this._generateCachedSprite(),this.updateCachedSpriteTexture(),this.cachedSpriteDirty=!1,this.dirty=!1),this._cachedSprite.alpha=this.alpha,void PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite,a);var b=a.context,c=this.worldTransform;this.blendMode!==a.currentBlendMode&&(a.currentBlendMode=this.blendMode,b.globalCompositeOperation=PIXI.blendModesCanvas[a.currentBlendMode]),this._mask&&a.maskManager.pushMask(this._mask,a);var d=a.resolution,e=c.tx*a.resolution+a.shakeX,f=c.ty*a.resolution+a.shakeY;b.setTransform(c.a*d,c.b*d,c.c*d,c.d*d,e,f),PIXI.CanvasGraphics.renderGraphics(this,b);for(var g=0;g<this.children.length;g++)this.children[g]._renderCanvas(a);this._mask&&a.maskManager.popMask(a)}},PIXI.Graphics.prototype.getBounds=function(a){if(!this._currentBounds){if(!this.renderable)return PIXI.EmptyRectangle;this.dirty&&(this.updateLocalBounds(),this.webGLDirty=!0,this.cachedSpriteDirty=!0,this.dirty=!1);var b=this._localBounds,c=b.x,d=b.width+b.x,e=b.y,f=b.height+b.y,g=a||this.worldTransform,h=g.a,i=g.b,j=g.c,k=g.d,l=g.tx,m=g.ty,n=h*d+j*f+l,o=k*f+i*d+m,p=h*c+j*f+l,q=k*f+i*c+m,r=h*c+j*e+l,s=k*e+i*c+m,t=h*d+j*e+l,u=k*e+i*d+m,v=n,w=o,x=n,y=o;x=p<x?p:x,x=r<x?r:x,x=t<x?t:x,y=q<y?q:y,y=s<y?s:y,y=u<y?u:y,v=p>v?p:v,v=r>v?r:v,v=t>v?t:v,w=q>w?q:w,w=s>w?s:w,w=u>w?u:w,this._bounds.x=x,this._bounds.width=v-x,this._bounds.y=y,this._bounds.height=w-y,this._currentBounds=this._bounds}return this._currentBounds},PIXI.Graphics.prototype.getLocalBounds=function(){var a=this.worldTransform;this.worldTransform=PIXI.identityMatrix;for(var b=0;b<this.children.length;b++)this.children[b].updateTransform();var c=this.getBounds();for(this.worldTransform=a,b=0;b<this.children.length;b++)this.children[b].updateTransform();return c},PIXI.Graphics.prototype.containsPoint=function(a){this.worldTransform.applyInverse(a,tempPoint);for(var b=this.graphicsData,c=0;c<b.length;c++){var d=b[c];if(d.fill&&d.shape&&d.shape.contains(tempPoint.x,tempPoint.y))return!0}return!1},PIXI.Graphics.prototype.updateLocalBounds=function(){var a=1/0,b=-(1/0),d=1/0,e=-(1/0);if(this.graphicsData.length)for(var f,g,h,i,j,k,l=0;l<this.graphicsData.length;l++){var m=this.graphicsData[l],n=m.type,o=m.lineWidth;if(f=m.shape,n===PIXI.Graphics.RECT||n===PIXI.Graphics.RREC)h=f.x-o/2,i=f.y-o/2,j=f.width+o,k=f.height+o,a=h<a?h:a,b=h+j>b?h+j:b,d=i<d?i:d,e=i+k>e?i+k:e;else if(n===PIXI.Graphics.CIRC)h=f.x,i=f.y,j=f.radius+o/2,k=f.radius+o/2,a=h-j<a?h-j:a,b=h+j>b?h+j:b,d=i-k<d?i-k:d,e=i+k>e?i+k:e;else if(n===PIXI.Graphics.ELIP)h=f.x,i=f.y,j=f.width+o/2,k=f.height+o/2,a=h-j<a?h-j:a,b=h+j>b?h+j:b,d=i-k<d?i-k:d,e=i+k>e?i+k:e;else{g=f.points;for(var p=0;p<g.length;p++)g[p]instanceof c.Point?(h=g[p].x,i=g[p].y):(h=g[p],i=g[p+1],p<g.length-1&&p++),a=h-o<a?h-o:a,b=h+o>b?h+o:b,d=i-o<d?i-o:d,e=i+o>e?i+o:e}}else a=0,b=0,d=0,e=0;var q=this.boundsPadding;this._localBounds.x=a-q,this._localBounds.width=b-a+2*q,this._localBounds.y=d-q,this._localBounds.height=e-d+2*q},PIXI.Graphics.prototype._generateCachedSprite=function(){var a=this.getLocalBounds();if(this._cachedSprite)this._cachedSprite.buffer.resize(a.width,a.height);else{var b=new PIXI.CanvasBuffer(a.width,a.height),c=PIXI.Texture.fromCanvas(b.canvas);this._cachedSprite=new PIXI.Sprite(c),this._cachedSprite.buffer=b,this._cachedSprite.worldTransform=this.worldTransform}this._cachedSprite.anchor.x=-(a.x/a.width),this._cachedSprite.anchor.y=-(a.y/a.height),this._cachedSprite.buffer.context.translate(-a.x,-a.y),this.worldAlpha=1,PIXI.CanvasGraphics.renderGraphics(this,this._cachedSprite.buffer.context),this._cachedSprite.alpha=this.alpha},PIXI.Graphics.prototype.updateCachedSpriteTexture=function(){var a=this._cachedSprite,b=a.texture,c=a.buffer.canvas;b.baseTexture.width=c.width,b.baseTexture.height=c.height,b.crop.width=b.frame.width=c.width,b.crop.height=b.frame.height=c.height,a._width=c.width,a._height=c.height,b.baseTexture.dirty()},PIXI.Graphics.prototype.destroyCachedSprite=function(){this._cachedSprite.texture.destroy(!0),this._cachedSprite=null},PIXI.Graphics.prototype.drawShape=function(a){this.currentPath&&this.currentPath.shape.points.length<=2&&this.graphicsData.pop(),this.currentPath=null,a instanceof c.Polygon&&(a=a.clone(),a.flatten());var b=new PIXI.GraphicsData(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,a);return this.graphicsData.push(b),b.type===PIXI.Graphics.POLY&&(b.shape.closed=this.filling,this.currentPath=b),this.dirty=!0,this._boundsDirty=!0,b},Object.defineProperty(PIXI.Graphics.prototype,"cacheAsBitmap",{get:function(){return this._cacheAsBitmap},set:function(a){this._cacheAsBitmap=a,this._cacheAsBitmap?this._generateCachedSprite():this.destroyCachedSprite(),this.dirty=!0,this.webGLDirty=!0}}),PIXI.GraphicsData=function(a,b,c,d,e,f,g){this.lineWidth=a,this.lineColor=b,this.lineAlpha=c,this._lineTint=b,this.fillColor=d,this.fillAlpha=e,this._fillTint=d,this.fill=f,this.shape=g,this.type=g.type},PIXI.GraphicsData.prototype.constructor=PIXI.GraphicsData,PIXI.GraphicsData.prototype.clone=function(){return new GraphicsData(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},PIXI.EarCut={},PIXI.EarCut.Triangulate=function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=PIXI.EarCut.linkedList(a,0,e,c,!0),g=[];if(!f)return g;var h,i,j,k,l,m,n;if(d&&(f=PIXI.EarCut.eliminateHoles(a,b,f,c)),a.length>80*c){h=j=a[0],i=k=a[1];for(var o=c;o<e;o+=c)l=a[o],m=a[o+1],l<h&&(h=l),m<i&&(i=m),l>j&&(j=l),m>k&&(k=m);n=Math.max(j-h,k-i)}return PIXI.EarCut.earcutLinked(f,g,c,h,i,n),g},PIXI.EarCut.linkedList=function(a,b,c,d,e){var f,g,h,i=0;for(f=b,g=c-d;f<c;f+=d)i+=(a[g]-a[f])*(a[f+1]+a[g+1]),g=f;if(e===i>0)for(f=b;f<c;f+=d)h=PIXI.EarCut.insertNode(f,a[f],a[f+1],h);else for(f=c-d;f>=b;f-=d)h=PIXI.EarCut.insertNode(f,a[f],a[f+1],h);return h},PIXI.EarCut.filterPoints=function(a,b){if(!a)return a;b||(b=a);var c,d=a;do if(c=!1,d.steiner||!PIXI.EarCut.equals(d,d.next)&&0!==PIXI.EarCut.area(d.prev,d,d.next))d=d.next;else{if(PIXI.EarCut.removeNode(d),d=b=d.prev,d===d.next)return null;c=!0}while(c||d!==b);return b},PIXI.EarCut.earcutLinked=function(a,b,c,d,e,f,g){if(a){!g&&f&&PIXI.EarCut.indexCurve(a,d,e,f);for(var h,i,j=a;a.prev!==a.next;)if(h=a.prev,i=a.next,f?PIXI.EarCut.isEarHashed(a,d,e,f):PIXI.EarCut.isEar(a))b.push(h.i/c),b.push(a.i/c),b.push(i.i/c),PIXI.EarCut.removeNode(a),a=i.next,j=i.next;else if(a=i,a===j){g?1===g?(a=PIXI.EarCut.cureLocalIntersections(a,b,c),PIXI.EarCut.earcutLinked(a,b,c,d,e,f,2)):2===g&&PIXI.EarCut.splitEarcut(a,b,c,d,e,f):PIXI.EarCut.earcutLinked(PIXI.EarCut.filterPoints(a),b,c,d,e,f,1);break}}},PIXI.EarCut.isEar=function(a){var b=a.prev,c=a,d=a.next;if(PIXI.EarCut.area(b,c,d)>=0)return!1;for(var e=a.next.next;e!==a.prev;){if(PIXI.EarCut.pointInTriangle(b.x,b.y,c.x,c.y,d.x,d.y,e.x,e.y)&&PIXI.EarCut.area(e.prev,e,e.next)>=0)return!1;e=e.next}return!0},PIXI.EarCut.isEarHashed=function(a,b,c,d){var e=a.prev,f=a,g=a.next;if(PIXI.EarCut.area(e,f,g)>=0)return!1;for(var h=e.x<f.x?e.x<g.x?e.x:g.x:f.x<g.x?f.x:g.x,i=e.y<f.y?e.y<g.y?e.y:g.y:f.y<g.y?f.y:g.y,j=e.x>f.x?e.x>g.x?e.x:g.x:f.x>g.x?f.x:g.x,k=e.y>f.y?e.y>g.y?e.y:g.y:f.y>g.y?f.y:g.y,l=PIXI.EarCut.zOrder(h,i,b,c,d),m=PIXI.EarCut.zOrder(j,k,b,c,d),n=a.nextZ;n&&n.z<=m;){if(n!==a.prev&&n!==a.next&&PIXI.EarCut.pointInTriangle(e.x,e.y,f.x,f.y,g.x,g.y,n.x,n.y)&&PIXI.EarCut.area(n.prev,n,n.next)>=0)return!1;n=n.nextZ}for(n=a.prevZ;n&&n.z>=l;){if(n!==a.prev&&n!==a.next&&PIXI.EarCut.pointInTriangle(e.x,e.y,f.x,f.y,g.x,g.y,n.x,n.y)&&PIXI.EarCut.area(n.prev,n,n.next)>=0)return!1;n=n.prevZ}return!0},PIXI.EarCut.cureLocalIntersections=function(a,b,c){var d=a;do{var e=d.prev,f=d.next.next;PIXI.EarCut.intersects(e,d,d.next,f)&&PIXI.EarCut.locallyInside(e,f)&&PIXI.EarCut.locallyInside(f,e)&&(b.push(e.i/c),b.push(d.i/c),b.push(f.i/c),PIXI.EarCut.removeNode(d),PIXI.EarCut.removeNode(d.next),d=a=f),d=d.next}while(d!==a);return d},PIXI.EarCut.splitEarcut=function(a,b,c,d,e,f){var g=a;do{for(var h=g.next.next;h!==g.prev;){if(g.i!==h.i&&PIXI.EarCut.isValidDiagonal(g,h)){var i=PIXI.EarCut.splitPolygon(g,h);return g=PIXI.EarCut.filterPoints(g,g.next),i=PIXI.EarCut.filterPoints(i,i.next),PIXI.EarCut.earcutLinked(g,b,c,d,e,f),void PIXI.EarCut.earcutLinked(i,b,c,d,e,f)}h=h.next}g=g.next}while(g!==a)},PIXI.EarCut.eliminateHoles=function(a,b,c,d){var e,f,g,h,i,j=[];for(e=0,f=b.length;e<f;e++)g=b[e]*d,h=e<f-1?b[e+1]*d:a.length,i=PIXI.EarCut.linkedList(a,g,h,d,!1),i===i.next&&(i.steiner=!0),j.push(PIXI.EarCut.getLeftmost(i));for(j.sort(compareX),e=0;e<j.length;e++)PIXI.EarCut.eliminateHole(j[e],c),c=PIXI.EarCut.filterPoints(c,c.next);return c},PIXI.EarCut.compareX=function(a,b){return a.x-b.x},PIXI.EarCut.eliminateHole=function(a,b){if(b=PIXI.EarCut.findHoleBridge(a,b)){var c=PIXI.EarCut.splitPolygon(b,a);PIXI.EarCut.filterPoints(c,c.next)}},PIXI.EarCut.findHoleBridge=function(a,b){var c,d=b,e=a.x,f=a.y,g=-(1/0);do{if(f<=d.y&&f>=d.next.y){var h=d.x+(f-d.y)*(d.next.x-d.x)/(d.next.y-d.y);h<=e&&h>g&&(g=h,c=d.x<d.next.x?d:d.next)}d=d.next}while(d!==b);if(!c)return null;if(a.x===c.x)return c.prev;var i,j=c,k=1/0;for(d=c.next;d!==j;)e>=d.x&&d.x>=c.x&&PIXI.EarCut.pointInTriangle(f<c.y?e:g,f,c.x,c.y,f<c.y?g:e,f,d.x,d.y)&&(i=Math.abs(f-d.y)/(e-d.x),(i<k||i===k&&d.x>c.x)&&PIXI.EarCut.locallyInside(d,a)&&(c=d,k=i)),d=d.next;return c},PIXI.EarCut.indexCurve=function(a,b,c,d){var e=a;do null===e.z&&(e.z=PIXI.EarCut.zOrder(e.x,e.y,b,c,d)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==a);e.prevZ.nextZ=null,e.prevZ=null,PIXI.EarCut.sortLinked(e)},PIXI.EarCut.sortLinked=function(a){var b,c,d,e,f,g,h,i,j=1;do{for(c=a,a=null,f=null,g=0;c;){for(g++,d=c,h=0,b=0;b<j&&(h++,d=d.nextZ,d);b++);for(i=j;h>0||i>0&&d;)0===h?(e=d,d=d.nextZ,i--):0!==i&&d?c.z<=d.z?(e=c,c=c.nextZ,h--):(e=d,d=d.nextZ,i--):(e=c,c=c.nextZ,h--),f?f.nextZ=e:a=e,e.prevZ=f,f=e;c=d}f.nextZ=null,j*=2}while(g>1);return a},PIXI.EarCut.zOrder=function(a,b,c,d,e){return a=32767*(a-c)/e,b=32767*(b-d)/e,a=16711935&(a|a<<8),a=252645135&(a|a<<4),a=858993459&(a|a<<2),a=1431655765&(a|a<<1),b=16711935&(b|b<<8),b=252645135&(b|b<<4),b=858993459&(b|b<<2),b=1431655765&(b|b<<1),a|b<<1},PIXI.EarCut.getLeftmost=function(a){var b=a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c},PIXI.EarCut.pointInTriangle=function(a,b,c,d,e,f,g,h){return(e-g)*(b-h)-(a-g)*(f-h)>=0&&(a-g)*(d-h)-(c-g)*(b-h)>=0&&(c-g)*(f-h)-(e-g)*(d-h)>=0},PIXI.EarCut.isValidDiagonal=function(a,b){return PIXI.EarCut.equals(a,b)||a.next.i!==b.i&&a.prev.i!==b.i&&!PIXI.EarCut.intersectsPolygon(a,b)&&PIXI.EarCut.locallyInside(a,b)&&PIXI.EarCut.locallyInside(b,a)&&PIXI.EarCut.middleInside(a,b)},PIXI.EarCut.area=function(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)},PIXI.EarCut.equals=function(a,b){return a.x===b.x&&a.y===b.y},PIXI.EarCut.intersects=function(a,b,c,d){return PIXI.EarCut.area(a,b,c)>0!=PIXI.EarCut.area(a,b,d)>0&&PIXI.EarCut.area(c,d,a)>0!=PIXI.EarCut.area(c,d,b)>0},PIXI.EarCut.intersectsPolygon=function(a,b){var c=a;do{if(c.i!==a.i&&c.next.i!==a.i&&c.i!==b.i&&c.next.i!==b.i&&PIXI.EarCut.intersects(c,c.next,a,b))return!0;c=c.next}while(c!==a);return!1},PIXI.EarCut.locallyInside=function(a,b){return PIXI.EarCut.area(a.prev,a,a.next)<0?PIXI.EarCut.area(a,b,a.next)>=0&&PIXI.EarCut.area(a,a.prev,b)>=0:PIXI.EarCut.area(a,b,a.prev)<0||PIXI.EarCut.area(a,a.next,b)<0},PIXI.EarCut.middleInside=function(a,b){var c=a,d=!1,e=(a.x+b.x)/2,f=(a.y+b.y)/2;do c.y>f!=c.next.y>f&&e<(c.next.x-c.x)*(f-c.y)/(c.next.y-c.y)+c.x&&(d=!d),c=c.next;while(c!==a);return d},PIXI.EarCut.splitPolygon=function(a,b){var c=new PIXI.EarCut.Node(a.i,a.x,a.y),d=new PIXI.EarCut.Node(b.i,b.x,b.y),e=a.next,f=b.prev;return a.next=b,b.prev=a,c.next=e,e.prev=c,d.next=c,c.prev=d,f.next=d,d.prev=f,d},PIXI.EarCut.insertNode=function(a,b,c,d){var e=new PIXI.EarCut.Node(a,b,c);return d?(e.next=d.next,e.prev=d,d.next.prev=e,d.next=e):(e.prev=e,e.next=e),e},PIXI.EarCut.removeNode=function(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)},PIXI.EarCut.Node=function(a,b,c){this.i=a,this.x=b,this.y=c,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1},PIXI.WebGLGraphics=function(){},PIXI.WebGLGraphics.stencilBufferLimit=6,PIXI.WebGLGraphics.renderGraphics=function(a,b){var c,d=b.gl,e=b.projection,f=b.offset,g=b.shaderManager.primitiveShader;a.dirty&&PIXI.WebGLGraphics.updateGraphics(a,d);for(var h=a._webGL[d.id],i=0;i<h.data.length;i++)1===h.data[i].mode?(c=h.data[i],b.stencilManager.pushStencil(a,c,b),d.drawElements(d.TRIANGLE_FAN,4,d.UNSIGNED_SHORT,2*(c.indices.length-4)),b.stencilManager.popStencil(a,c,b)):(c=h.data[i],b.shaderManager.setShader(g),g=b.shaderManager.primitiveShader,d.uniformMatrix3fv(g.translationMatrix,!1,a.worldTransform.toArray(!0)),d.uniform1f(g.flipY,1),d.uniform2f(g.projectionVector,e.x,-e.y),d.uniform2f(g.offsetVector,-f.x,-f.y),d.uniform3fv(g.tintColor,PIXI.hex2rgb(a.tint)),d.uniform1f(g.alpha,a.worldAlpha),d.bindBuffer(d.ARRAY_BUFFER,c.buffer),d.vertexAttribPointer(g.aVertexPosition,2,d.FLOAT,!1,24,0),d.vertexAttribPointer(g.colorAttribute,4,d.FLOAT,!1,24,8),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,c.indexBuffer),d.drawElements(d.TRIANGLE_STRIP,c.indices.length,d.UNSIGNED_SHORT,0))},PIXI.WebGLGraphics.updateGraphics=function(a,b){var c=a._webGL[b.id];c||(c=a._webGL[b.id]={lastIndex:0,data:[],gl:b}),a.dirty=!1;var d;if(a.clearDirty){for(a.clearDirty=!1,d=0;d<c.data.length;d++){var e=c.data[d];e.reset(),PIXI.WebGLGraphics.graphicsDataPool.push(e)}c.data=[],c.lastIndex=0}var f;for(d=c.lastIndex;d<a.graphicsData.length;d++){var g=a.graphicsData[d];if(g.type===PIXI.Graphics.POLY){if(g.points=g.shape.points.slice(),g.shape.closed&&(g.points[0]===g.points[g.points.length-2]&&g.points[1]===g.points[g.points.length-1]||g.points.push(g.points[0],g.points[1])),g.fill&&g.points.length>=PIXI.WebGLGraphics.stencilBufferLimit)if(g.points.length<2*PIXI.WebGLGraphics.stencilBufferLimit){f=PIXI.WebGLGraphics.switchMode(c,0);var h=PIXI.WebGLGraphics.buildPoly(g,f);h||(f=PIXI.WebGLGraphics.switchMode(c,1),PIXI.WebGLGraphics.buildComplexPoly(g,f))}else f=PIXI.WebGLGraphics.switchMode(c,1),PIXI.WebGLGraphics.buildComplexPoly(g,f);g.lineWidth>0&&(f=PIXI.WebGLGraphics.switchMode(c,0),PIXI.WebGLGraphics.buildLine(g,f))}else f=PIXI.WebGLGraphics.switchMode(c,0),g.type===PIXI.Graphics.RECT?PIXI.WebGLGraphics.buildRectangle(g,f):g.type===PIXI.Graphics.CIRC||g.type===PIXI.Graphics.ELIP?PIXI.WebGLGraphics.buildCircle(g,f):g.type===PIXI.Graphics.RREC&&PIXI.WebGLGraphics.buildRoundedRectangle(g,f);c.lastIndex++}for(d=0;d<c.data.length;d++)f=c.data[d],f.dirty&&f.upload()},PIXI.WebGLGraphics.switchMode=function(a,b){var c;return a.data.length?(c=a.data[a.data.length-1],c.mode===b&&1!==b||(c=PIXI.WebGLGraphics.graphicsDataPool.pop()||new PIXI.WebGLGraphicsData(a.gl),c.mode=b,a.data.push(c))):(c=PIXI.WebGLGraphics.graphicsDataPool.pop()||new PIXI.WebGLGraphicsData(a.gl),c.mode=b,a.data.push(c)),c.dirty=!0,c},PIXI.WebGLGraphics.buildRectangle=function(a,b){var c=a.shape,d=c.x,e=c.y,f=c.width,g=c.height;if(a.fill){var h=PIXI.hex2rgb(a.fillColor),i=a.fillAlpha,j=h[0]*i,k=h[1]*i,l=h[2]*i,m=b.points,n=b.indices,o=m.length/6;m.push(d,e),m.push(j,k,l,i),m.push(d+f,e),m.push(j,k,l,i),m.push(d,e+g),m.push(j,k,l,i),m.push(d+f,e+g),m.push(j,k,l,i),n.push(o,o,o+1,o+2,o+3,o+3)}if(a.lineWidth){var p=a.points;a.points=[d,e,d+f,e,d+f,e+g,d,e+g,d,e],PIXI.WebGLGraphics.buildLine(a,b),a.points=p}},PIXI.WebGLGraphics.buildRoundedRectangle=function(a,b){var c=a.shape,d=c.x,e=c.y,f=c.width,g=c.height,h=c.radius,i=[];if(i.push(d,e+h),i=i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d,e+g-h,d,e+g,d+h,e+g)),i=i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d+f-h,e+g,d+f,e+g,d+f,e+g-h)),i=i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d+f,e+h,d+f,e,d+f-h,e)),i=i.concat(PIXI.WebGLGraphics.quadraticBezierCurve(d+h,e,d,e,d,e+h)),a.fill){var j=PIXI.hex2rgb(a.fillColor),k=a.fillAlpha,l=j[0]*k,m=j[1]*k,n=j[2]*k,o=b.points,p=b.indices,q=o.length/6,r=PIXI.EarCut.Triangulate(i,null,2),s=0;for(s=0;s<r.length;s+=3)p.push(r[s]+q),p.push(r[s]+q),p.push(r[s+1]+q),p.push(r[s+2]+q),p.push(r[s+2]+q);for(s=0;s<i.length;s++)o.push(i[s],i[++s],l,m,n,k)}if(a.lineWidth){var t=a.points;a.points=i,PIXI.WebGLGraphics.buildLine(a,b),a.points=t}},PIXI.WebGLGraphics.quadraticBezierCurve=function(a,b,c,d,e,f){function g(a,b,c){var d=b-a;return a+d*c}for(var h,i,j,k,l,m,n=20,o=[],p=0,q=0;q<=n;q++)p=q/n,h=g(a,c,p),i=g(b,d,p),j=g(c,e,p),k=g(d,f,p),l=g(h,j,p),m=g(i,k,p),o.push(l,m);return o},PIXI.WebGLGraphics.buildCircle=function(a,b){var c,d,e=a.shape,f=e.x,g=e.y;a.type===PIXI.Graphics.CIRC?(c=e.radius,d=e.radius):(c=e.width,d=e.height);var h=40,i=2*Math.PI/h,j=0;if(a.fill){var k=PIXI.hex2rgb(a.fillColor),l=a.fillAlpha,m=k[0]*l,n=k[1]*l,o=k[2]*l,p=b.points,q=b.indices,r=p.length/6;for(q.push(r),j=0;j<h+1;j++)p.push(f,g,m,n,o,l),p.push(f+Math.sin(i*j)*c,g+Math.cos(i*j)*d,m,n,o,l),q.push(r++,r++);q.push(r-1)}if(a.lineWidth){var s=a.points;for(a.points=[],j=0;j<h+1;j++)a.points.push(f+Math.sin(i*j)*c,g+Math.cos(i*j)*d);PIXI.WebGLGraphics.buildLine(a,b),a.points=s}},PIXI.WebGLGraphics.buildLine=function(a,b){var c=0,d=a.points;if(0!==d.length){if(a.lineWidth%2)for(c=0;c<d.length;c++)d[c]+=.5;var e=new PIXI.Point(d[0],d[1]),f=new PIXI.Point(d[d.length-2],d[d.length-1]);if(e.x===f.x&&e.y===f.y){d=d.slice(),d.pop(),d.pop(),f=new PIXI.Point(d[d.length-2],d[d.length-1]);var g=f.x+.5*(e.x-f.x),h=f.y+.5*(e.y-f.y);d.unshift(g,h),d.push(g,h)}var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=b.points,G=b.indices,H=d.length/2,I=d.length,J=F.length/6,K=a.lineWidth/2,L=PIXI.hex2rgb(a.lineColor),M=a.lineAlpha,N=L[0]*M,O=L[1]*M,P=L[2]*M;for(k=d[0],l=d[1],m=d[2],n=d[3],q=-(l-n),r=k-m,E=Math.sqrt(q*q+r*r),q/=E,r/=E,q*=K,r*=K,F.push(k-q,l-r,N,O,P,M),F.push(k+q,l+r,N,O,P,M),c=1;c<H-1;c++)k=d[2*(c-1)],l=d[2*(c-1)+1],m=d[2*c],n=d[2*c+1],o=d[2*(c+1)],p=d[2*(c+1)+1],q=-(l-n),r=k-m,E=Math.sqrt(q*q+r*r),q/=E,r/=E,q*=K,r*=K,s=-(n-p),t=m-o,E=Math.sqrt(s*s+t*t),s/=E,t/=E,s*=K,t*=K,w=-r+l-(-r+n),x=-q+m-(-q+k),y=(-q+k)*(-r+n)-(-q+m)*(-r+l),z=-t+p-(-t+n),A=-s+m-(-s+o),B=(-s+o)*(-t+n)-(-s+m)*(-t+p),C=w*A-z*x,Math.abs(C)<.1?(C+=10.1,F.push(m-q,n-r,N,O,P,M),F.push(m+q,n+r,N,O,P,M)):(i=(x*B-A*y)/C,j=(z*y-w*B)/C,D=(i-m)*(i-m)+(j-n)+(j-n),D>19600?(u=q-s,v=r-t,E=Math.sqrt(u*u+v*v),u/=E,v/=E,u*=K,v*=K,F.push(m-u,n-v),F.push(N,O,P,M),F.push(m+u,n+v),F.push(N,O,P,M),F.push(m-u,n-v),F.push(N,O,P,M),I++):(F.push(i,j),F.push(N,O,P,M),F.push(m-(i-m),n-(j-n)),F.push(N,O,P,M)));for(k=d[2*(H-2)],l=d[2*(H-2)+1],m=d[2*(H-1)],n=d[2*(H-1)+1],q=-(l-n),r=k-m,E=Math.sqrt(q*q+r*r),q/=E,r/=E,q*=K,r*=K,F.push(m-q,n-r),F.push(N,O,P,M),F.push(m+q,n+r),F.push(N,O,P,M),G.push(J),c=0;c<I;c++)G.push(J++);G.push(J-1)}},PIXI.WebGLGraphics.buildComplexPoly=function(a,b){var c=a.points.slice();if(!(c.length<6)){var d=b.indices;b.points=c,b.alpha=a.fillAlpha,b.color=PIXI.hex2rgb(a.fillColor);for(var e,f,g=1/0,h=-(1/0),i=1/0,j=-(1/0),k=0;k<c.length;k+=2)e=c[k],f=c[k+1],g=e<g?e:g,h=e>h?e:h,i=f<i?f:i,j=f>j?f:j;c.push(g,i,h,i,h,j,g,j);var l=c.length/2;for(k=0;k<l;k++)d.push(k)}},PIXI.WebGLGraphics.buildPoly=function(a,b){var c=a.points;if(!(c.length<6)){var d=b.points,e=b.indices,f=c.length/2,g=PIXI.hex2rgb(a.fillColor),h=a.fillAlpha,i=g[0]*h,j=g[1]*h,k=g[2]*h,l=PIXI.EarCut.Triangulate(c,null,2);if(!l)return!1;var m=d.length/6,n=0;for(n=0;n<l.length;n+=3)e.push(l[n]+m),e.push(l[n]+m),e.push(l[n+1]+m),e.push(l[n+2]+m),e.push(l[n+2]+m);for(n=0;n<f;n++)d.push(c[2*n],c[2*n+1],i,j,k,h);return!0}},PIXI.WebGLGraphics.graphicsDataPool=[],PIXI.WebGLGraphicsData=function(a){this.gl=a,this.color=[0,0,0],this.points=[],this.indices=[],this.buffer=a.createBuffer(),this.indexBuffer=a.createBuffer(),this.mode=1,this.alpha=1,this.dirty=!0},PIXI.WebGLGraphicsData.prototype.reset=function(){this.points=[],this.indices=[]},PIXI.WebGLGraphicsData.prototype.upload=function(){var a=this.gl;this.glPoints=new PIXI.Float32Array(this.points),a.bindBuffer(a.ARRAY_BUFFER,this.buffer),a.bufferData(a.ARRAY_BUFFER,this.glPoints,a.STATIC_DRAW),this.glIndicies=new PIXI.Uint16Array(this.indices),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.glIndicies,a.STATIC_DRAW),this.dirty=!1},PIXI.CanvasGraphics=function(){},PIXI.CanvasGraphics.renderGraphics=function(a,b){var c=a.worldAlpha;a.dirty&&(this.updateGraphicsTint(a),a.dirty=!1);for(var d=0;d<a.graphicsData.length;d++){var e=a.graphicsData[d],f=e.shape,g=e._fillTint,h=e._lineTint;if(b.lineWidth=e.lineWidth,e.type===PIXI.Graphics.POLY){b.beginPath();var i=f.points;b.moveTo(i[0],i[1]);for(var j=1;j<i.length/2;j++)b.lineTo(i[2*j],i[2*j+1]);f.closed&&b.lineTo(i[0],i[1]),i[0]===i[i.length-2]&&i[1]===i[i.length-1]&&b.closePath(),e.fill&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle="#"+("00000"+(0|g).toString(16)).substr(-6),b.fill()),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),b.stroke())}else if(e.type===PIXI.Graphics.RECT)(e.fillColor||0===e.fillColor)&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle="#"+("00000"+(0|g).toString(16)).substr(-6),b.fillRect(f.x,f.y,f.width,f.height)),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),b.strokeRect(f.x,f.y,f.width,f.height));else if(e.type===PIXI.Graphics.CIRC)b.beginPath(),b.arc(f.x,f.y,f.radius,0,2*Math.PI),b.closePath(),e.fill&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle="#"+("00000"+(0|g).toString(16)).substr(-6),b.fill()),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),b.stroke());else if(e.type===PIXI.Graphics.ELIP){var k=2*f.width,l=2*f.height,m=f.x-k/2,n=f.y-l/2;b.beginPath();var o=.5522848,p=k/2*o,q=l/2*o,r=m+k,s=n+l,t=m+k/2,u=n+l/2;b.moveTo(m,u),b.bezierCurveTo(m,u-q,t-p,n,t,n),b.bezierCurveTo(t+p,n,r,u-q,r,u),b.bezierCurveTo(r,u+q,t+p,s,t,s),b.bezierCurveTo(t-p,s,m,u+q,m,u),b.closePath(),e.fill&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle="#"+("00000"+(0|g).toString(16)).substr(-6),b.fill()),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),b.stroke())}else if(e.type===PIXI.Graphics.RREC){var v=f.x,w=f.y,x=f.width,y=f.height,z=f.radius,A=Math.min(x,y)/2|0;z=z>A?A:z,b.beginPath(),b.moveTo(v,w+z),b.lineTo(v,w+y-z),b.quadraticCurveTo(v,w+y,v+z,w+y),b.lineTo(v+x-z,w+y),b.quadraticCurveTo(v+x,w+y,v+x,w+y-z),b.lineTo(v+x,w+z),b.quadraticCurveTo(v+x,w,v+x-z,w),b.lineTo(v+z,w),b.quadraticCurveTo(v,w,v,w+z),b.closePath(),(e.fillColor||0===e.fillColor)&&(b.globalAlpha=e.fillAlpha*c,b.fillStyle="#"+("00000"+(0|g).toString(16)).substr(-6),b.fill()),e.lineWidth&&(b.globalAlpha=e.lineAlpha*c,b.strokeStyle="#"+("00000"+(0|h).toString(16)).substr(-6),b.stroke())}}},PIXI.CanvasGraphics.renderGraphicsMask=function(a,b){var c=a.graphicsData.length;if(0!==c){b.beginPath();for(var d=0;d<c;d++){var e=a.graphicsData[d],f=e.shape;if(e.type===PIXI.Graphics.POLY){var g=f.points;b.moveTo(g[0],g[1]);for(var h=1;h<g.length/2;h++)b.lineTo(g[2*h],g[2*h+1]);g[0]===g[g.length-2]&&g[1]===g[g.length-1]&&b.closePath()}else if(e.type===PIXI.Graphics.RECT)b.rect(f.x,f.y,f.width,f.height),b.closePath();else if(e.type===PIXI.Graphics.CIRC)b.arc(f.x,f.y,f.radius,0,2*Math.PI),b.closePath();else if(e.type===PIXI.Graphics.ELIP){var i=2*f.width,j=2*f.height,k=f.x-i/2,l=f.y-j/2,m=.5522848,n=i/2*m,o=j/2*m,p=k+i,q=l+j,r=k+i/2,s=l+j/2;b.moveTo(k,s),b.bezierCurveTo(k,s-o,r-n,l,r,l),b.bezierCurveTo(r+n,l,p,s-o,p,s),b.bezierCurveTo(p,s+o,r+n,q,r,q),b.bezierCurveTo(r-n,q,k,s+o,k,s),b.closePath()}else if(e.type===PIXI.Graphics.RREC){var t=f.x,u=f.y,v=f.width,w=f.height,x=f.radius,y=Math.min(v,w)/2|0;x=x>y?y:x,b.moveTo(t,u+x),b.lineTo(t,u+w-x),b.quadraticCurveTo(t,u+w,t+x,u+w),b.lineTo(t+v-x,u+w),b.quadraticCurveTo(t+v,u+w,t+v,u+w-x),b.lineTo(t+v,u+x),b.quadraticCurveTo(t+v,u,t+v-x,u),b.lineTo(t+x,u),b.quadraticCurveTo(t,u,t,u+x),b.closePath()}}}},PIXI.CanvasGraphics.updateGraphicsTint=function(a){if(16777215!==a.tint)for(var b=(a.tint>>16&255)/255,c=(a.tint>>8&255)/255,d=(255&a.tint)/255,e=0;e<a.graphicsData.length;e++){var f=a.graphicsData[e],g=0|f.fillColor,h=0|f.lineColor;f._fillTint=((g>>16&255)/255*b*255<<16)+((g>>8&255)/255*c*255<<8)+(255&g)/255*d*255,f._lineTint=((h>>16&255)/255*b*255<<16)+((h>>8&255)/255*c*255<<8)+(255&h)/255*d*255}},c.Graphics=function(a,b,d){void 0===b&&(b=0),void 0===d&&(d=0),this.type=c.GRAPHICS,this.physicsType=c.SPRITE,this.anchor=new c.Point,PIXI.Graphics.call(this),c.Component.Core.init.call(this,a,b,d,"",null)},c.Graphics.prototype=Object.create(PIXI.Graphics.prototype),c.Graphics.prototype.constructor=c.Graphics,c.Component.Core.install.call(c.Graphics.prototype,["Angle","AutoCull","Bounds","Destroy","FixedToCamera","InputEnabled","InWorld","LifeSpan","PhysicsBody","Reset"]),c.Graphics.prototype.preUpdatePhysics=c.Component.PhysicsBody.preUpdate,c.Graphics.prototype.preUpdateLifeSpan=c.Component.LifeSpan.preUpdate,c.Graphics.prototype.preUpdateInWorld=c.Component.InWorld.preUpdate,c.Graphics.prototype.preUpdateCore=c.Component.Core.preUpdate,c.Graphics.prototype.preUpdate=function(){return!!(this.preUpdatePhysics()&&this.preUpdateLifeSpan()&&this.preUpdateInWorld())&&this.preUpdateCore()},c.Graphics.prototype.postUpdate=function(){c.Component.PhysicsBody.postUpdate.call(this),c.Component.FixedToCamera.postUpdate.call(this),this._boundsDirty&&(this.updateLocalBounds(),this._boundsDirty=!1);for(var a=0;a<this.children.length;a++)this.children[a].postUpdate()},c.Graphics.prototype.destroy=function(a){this.clear(),c.Component.Destroy.prototype.destroy.call(this,a)},c.Graphics.prototype.drawTriangle=function(a,b){void 0===b&&(b=!1);var d=new c.Polygon(a);if(b){var e=new c.Point(this.game.camera.x-a[0].x,this.game.camera.y-a[0].y),f=new c.Point(a[1].x-a[0].x,a[1].y-a[0].y),g=new c.Point(a[1].x-a[2].x,a[1].y-a[2].y),h=g.cross(f);e.dot(h)>0&&this.drawPolygon(d)}else this.drawPolygon(d)},c.Graphics.prototype.drawTriangles=function(a,b,d){void 0===d&&(d=!1);var e,f=new c.Point,g=new c.Point,h=new c.Point,i=[];if(b)if(a[0]instanceof c.Point)for(e=0;e<b.length/3;e++)i.push(a[b[3*e]]),i.push(a[b[3*e+1]]),i.push(a[b[3*e+2]]),3===i.length&&(this.drawTriangle(i,d),i=[]);else for(e=0;e<b.length;e++)f.x=a[2*b[e]],f.y=a[2*b[e]+1],i.push(f.copyTo({})),3===i.length&&(this.drawTriangle(i,d),i=[]);else if(a[0]instanceof c.Point)for(e=0;e<a.length/3;e++)this.drawTriangle([a[3*e],a[3*e+1],a[3*e+2]],d);else for(e=0;e<a.length/6;e++)f.x=a[6*e+0],f.y=a[6*e+1],g.x=a[6*e+2],g.y=a[6*e+3],h.x=a[6*e+4],h.y=a[6*e+5],this.drawTriangle([f,g,h],d)},c.RenderTexture=function(a,b,d,e,f,g){void 0===e&&(e=""),void 0===f&&(f=c.scaleModes.DEFAULT),void 0===g&&(g=1),this.game=a,this.key=e,this.type=c.RENDERTEXTURE,this._tempMatrix=new PIXI.Matrix,PIXI.RenderTexture.call(this,b,d,this.game.renderer,f,g),this.render=c.RenderTexture.prototype.render},c.RenderTexture.prototype=Object.create(PIXI.RenderTexture.prototype),c.RenderTexture.prototype.constructor=c.RenderTexture,c.RenderTexture.prototype.renderXY=function(a,b,c,d){a.updateTransform(),this._tempMatrix.copyFrom(a.worldTransform),this._tempMatrix.tx=b,this._tempMatrix.ty=c,this.renderer.type===PIXI.WEBGL_RENDERER?this.renderWebGL(a,this._tempMatrix,d):this.renderCanvas(a,this._tempMatrix,d)},c.RenderTexture.prototype.renderRawXY=function(a,b,c,d){this._tempMatrix.identity().translate(b,c),this.renderer.type===PIXI.WEBGL_RENDERER?this.renderWebGL(a,this._tempMatrix,d):this.renderCanvas(a,this._tempMatrix,d)},c.RenderTexture.prototype.render=function(a,b,c){void 0===b||null===b?this._tempMatrix.copyFrom(a.worldTransform):this._tempMatrix.copyFrom(b),this.renderer.type===PIXI.WEBGL_RENDERER?this.renderWebGL(a,this._tempMatrix,c):this.renderCanvas(a,this._tempMatrix,c)},c.Text=function(a,b,d,e,f){b=b||0,d=d||0,e=void 0===e||null===e?"":e.toString(),f=c.Utils.extend({},f),this.type=c.TEXT,this.physicsType=c.SPRITE,this.padding=new c.Point,this.textBounds=null,this.canvas=PIXI.CanvasPool.create(this),this.context=this.canvas.getContext("2d"),this.colors=[],this.strokeColors=[],this.fontStyles=[],this.fontWeights=[],this.autoRound=!1,this.useAdvancedWrap=!1,this._res=a.renderer.resolution,this._text=e,this._fontComponents=null,this._lineSpacing=0,this._charCount=0,this._width=0,this._height=0,c.Sprite.call(this,a,b,d,PIXI.Texture.fromCanvas(this.canvas)),this.setStyle(f),""!==e&&this.updateText()},c.Text.prototype=Object.create(c.Sprite.prototype),c.Text.prototype.constructor=c.Text,c.Text.prototype.preUpdate=function(){return!!(this.preUpdatePhysics()&&this.preUpdateLifeSpan()&&this.preUpdateInWorld())&&this.preUpdateCore()},c.Text.prototype.update=function(){},c.Text.prototype.destroy=function(a){this.texture.destroy(!0),c.Component.Destroy.prototype.destroy.call(this,a)},c.Text.prototype.setShadow=function(a,b,c,d,e,f){return void 0===a&&(a=0),void 0===b&&(b=0),void 0===c&&(c="rgba(0, 0, 0, 1)"),void 0===d&&(d=0),void 0===e&&(e=!0),void 0===f&&(f=!0),this.style.shadowOffsetX=a,this.style.shadowOffsetY=b,this.style.shadowColor=c,this.style.shadowBlur=d,this.style.shadowStroke=e,this.style.shadowFill=f,this.dirty=!0,this},c.Text.prototype.setStyle=function(a,b){void 0===b&&(b=!1),a=a||{},a.font=a.font||"bold 20pt Arial",a.backgroundColor=a.backgroundColor||null,a.fill=a.fill||"black",a.align=a.align||"left",a.boundsAlignH=a.boundsAlignH||"left",a.boundsAlignV=a.boundsAlignV||"top",a.stroke=a.stroke||"black",a.strokeThickness=a.strokeThickness||0,a.wordWrap=a.wordWrap||!1,a.wordWrapWidth=a.wordWrapWidth||100,a.maxLines=a.maxLines||0,a.shadowOffsetX=a.shadowOffsetX||0,a.shadowOffsetY=a.shadowOffsetY||0,a.shadowColor=a.shadowColor||"rgba(0,0,0,0)",a.shadowBlur=a.shadowBlur||0,a.tabs=a.tabs||0;var c=this.fontToComponents(a.font);return a.fontStyle&&(c.fontStyle=a.fontStyle),a.fontVariant&&(c.fontVariant=a.fontVariant),a.fontWeight&&(c.fontWeight=a.fontWeight),a.fontSize&&("number"==typeof a.fontSize&&(a.fontSize=a.fontSize+"px"),c.fontSize=a.fontSize),this._fontComponents=c,a.font=this.componentsToFont(this._fontComponents),this.style=a,this.dirty=!0,b&&this.updateText(),this},c.Text.prototype.updateText=function(){this.texture.baseTexture.resolution=this._res,this.context.font=this.style.font;var a=this.text;this.style.wordWrap&&(a=this.runWordWrap(this.text));var b=a.split(/(?:\r\n|\r|\n)/),c=this.style.tabs,d=[],e=0,f=this.determineFontProperties(this.style.font),g=b.length;this.style.maxLines>0&&this.style.maxLines<b.length&&(g=this.style.maxLines),this._charCount=0;for(var h=0;h<g;h++){if(0===c){var i=this.style.strokeThickness+this.padding.x;i+=this.colors.length>0||this.strokeColors.length>0||this.fontWeights.length>0||this.fontStyles.length>0?this.measureLine(b[h]):this.context.measureText(b[h]).width,this.style.wordWrap&&(i-=this.context.measureText(" ").width)}else{var j=b[h].split(/(?:\t)/),i=this.padding.x+this.style.strokeThickness;if(Array.isArray(c))for(var k=0,l=0;l<j.length;l++){var m=0;m=this.colors.length>0||this.strokeColors.length>0||this.fontWeights.length>0||this.fontStyles.length>0?this.measureLine(j[l]):Math.ceil(this.context.measureText(j[l]).width),l>0&&(k+=c[l-1]),i=k+m}else for(var l=0;l<j.length;l++){i+=this.colors.length>0||this.strokeColors.length>0||this.fontWeights.length>0||this.fontStyles.length>0?this.measureLine(j[l]):Math.ceil(this.context.measureText(j[l]).width);var n=this.game.math.snapToCeil(i,c)-i;i+=n}}d[h]=Math.ceil(i),e=Math.max(e,d[h])}this.canvas.width=e*this._res;var o=f.fontSize+this.style.strokeThickness+this.padding.y,p=o*g,q=this._lineSpacing;q<0&&Math.abs(q)>o&&(q=-o),0!==q&&(p+=q>0?q*b.length:q*(b.length-1)),this.canvas.height=p*this._res,this.context.scale(this._res,this._res),navigator.isCocoonJS&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),
	this.style.backgroundColor&&(this.context.fillStyle=this.style.backgroundColor,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)),this.context.fillStyle=this.style.fill,this.context.font=this.style.font,this.context.strokeStyle=this.style.stroke,this.context.textBaseline="alphabetic",this.context.lineWidth=this.style.strokeThickness,this.context.lineCap="round",this.context.lineJoin="round";var r,s;for(this._charCount=0,h=0;h<g;h++)r=this.style.strokeThickness/2,s=this.style.strokeThickness/2+h*o+f.ascent,h>0&&(s+=q*h),"right"===this.style.align?r+=e-d[h]:"center"===this.style.align&&(r+=(e-d[h])/2),this.autoRound&&(r=Math.round(r),s=Math.round(s)),this.colors.length>0||this.strokeColors.length>0||this.fontWeights.length>0||this.fontStyles.length>0?this.updateLine(b[h],r,s):(this.style.stroke&&this.style.strokeThickness&&(this.updateShadow(this.style.shadowStroke),0===c?this.context.strokeText(b[h],r,s):this.renderTabLine(b[h],r,s,!1)),this.style.fill&&(this.updateShadow(this.style.shadowFill),0===c?this.context.fillText(b[h],r,s):this.renderTabLine(b[h],r,s,!0)));this.updateTexture(),this.dirty=!1},c.Text.prototype.renderTabLine=function(a,b,c,d){var e=a.split(/(?:\t)/),f=this.style.tabs,g=0;if(Array.isArray(f))for(var h=0,i=0;i<e.length;i++)i>0&&(h+=f[i-1]),g=b+h,d?this.context.fillText(e[i],g,c):this.context.strokeText(e[i],g,c);else for(var i=0;i<e.length;i++){var j=Math.ceil(this.context.measureText(e[i]).width);g=this.game.math.snapToCeil(b,f),d?this.context.fillText(e[i],g,c):this.context.strokeText(e[i],g,c),b=g+j}},c.Text.prototype.updateShadow=function(a){a?(this.context.shadowOffsetX=this.style.shadowOffsetX,this.context.shadowOffsetY=this.style.shadowOffsetY,this.context.shadowColor=this.style.shadowColor,this.context.shadowBlur=this.style.shadowBlur):(this.context.shadowOffsetX=0,this.context.shadowOffsetY=0,this.context.shadowColor=0,this.context.shadowBlur=0)},c.Text.prototype.measureLine=function(a){for(var b=0,c=0;c<a.length;c++){var d=a[c];if(this.fontWeights.length>0||this.fontStyles.length>0){var e=this.fontToComponents(this.context.font);this.fontStyles[this._charCount]&&(e.fontStyle=this.fontStyles[this._charCount]),this.fontWeights[this._charCount]&&(e.fontWeight=this.fontWeights[this._charCount]),this.context.font=this.componentsToFont(e)}this.style.stroke&&this.style.strokeThickness&&(this.strokeColors[this._charCount]&&(this.context.strokeStyle=this.strokeColors[this._charCount]),this.updateShadow(this.style.shadowStroke)),this.style.fill&&(this.colors[this._charCount]&&(this.context.fillStyle=this.colors[this._charCount]),this.updateShadow(this.style.shadowFill)),b+=this.context.measureText(d).width,this._charCount++}return Math.ceil(b)},c.Text.prototype.updateLine=function(a,b,c){for(var d=0;d<a.length;d++){var e=a[d];if(this.fontWeights.length>0||this.fontStyles.length>0){var f=this.fontToComponents(this.context.font);this.fontStyles[this._charCount]&&(f.fontStyle=this.fontStyles[this._charCount]),this.fontWeights[this._charCount]&&(f.fontWeight=this.fontWeights[this._charCount]),this.context.font=this.componentsToFont(f)}this.style.stroke&&this.style.strokeThickness&&(this.strokeColors[this._charCount]&&(this.context.strokeStyle=this.strokeColors[this._charCount]),this.updateShadow(this.style.shadowStroke),this.context.strokeText(e,b,c)),this.style.fill&&(this.colors[this._charCount]&&(this.context.fillStyle=this.colors[this._charCount]),this.updateShadow(this.style.shadowFill),this.context.fillText(e,b,c)),b+=this.context.measureText(e).width,this._charCount++}},c.Text.prototype.clearColors=function(){return this.colors=[],this.strokeColors=[],this.dirty=!0,this},c.Text.prototype.clearFontValues=function(){return this.fontStyles=[],this.fontWeights=[],this.dirty=!0,this},c.Text.prototype.addColor=function(a,b){return this.colors[b]=a,this.dirty=!0,this},c.Text.prototype.addStrokeColor=function(a,b){return this.strokeColors[b]=a,this.dirty=!0,this},c.Text.prototype.addFontStyle=function(a,b){return this.fontStyles[b]=a,this.dirty=!0,this},c.Text.prototype.addFontWeight=function(a,b){return this.fontWeights[b]=a,this.dirty=!0,this},c.Text.prototype.precalculateWordWrap=function(a){this.texture.baseTexture.resolution=this._res,this.context.font=this.style.font;var b=this.runWordWrap(a);return b.split(/(?:\r\n|\r|\n)/)},c.Text.prototype.runWordWrap=function(a){return this.useAdvancedWrap?this.advancedWordWrap(a):this.basicWordWrap(a)},c.Text.prototype.advancedWordWrap=function(a){for(var b=this.context,c=this.style.wordWrapWidth,d="",e=a.replace(/ +/gi," ").split(/\r?\n/gi),f=e.length,g=0;g<f;g++){var h=e[g],i="";h=h.replace(/^ *|\s*$/gi,"");var j=b.measureText(h).width;if(j<c)d+=h+"\n";else{for(var k=c,l=h.split(" "),m=0;m<l.length;m++){var n=l[m],o=n+" ",p=b.measureText(o).width;if(p>k){if(0===m){for(var q=o;q.length&&(q=q.slice(0,-1),p=b.measureText(q).width,!(p<=k)););if(!q.length)throw new Error("This text's wordWrapWidth setting is less than a single character!");var r=n.substr(q.length);l[m]=r,i+=q}var s=l[m].length?m:m+1,t=l.slice(s).join(" ").replace(/[ \n]*$/gi,"");e[g+1]=t+" "+(e[g+1]||""),f=e.length;break}i+=o,k-=p}d+=i.replace(/[ \n]*$/gi,"")+"\n"}}return d=d.replace(/[\s|\n]*$/gi,"")},c.Text.prototype.basicWordWrap=function(a){for(var b="",c=a.split("\n"),d=0;d<c.length;d++){for(var e=this.style.wordWrapWidth,f=c[d].split(" "),g=0;g<f.length;g++){var h=this.context.measureText(f[g]).width,i=h+this.context.measureText(" ").width;i>e?(g>0&&(b+="\n"),b+=f[g]+" ",e=this.style.wordWrapWidth-h):(e-=i,b+=f[g]+" ")}d<c.length-1&&(b+="\n")}return b},c.Text.prototype.updateFont=function(a){var b=this.componentsToFont(a);this.style.font!==b&&(this.style.font=b,this.dirty=!0,this.parent&&this.updateTransform())},c.Text.prototype.fontToComponents=function(a){var b=a.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);if(b){var c=b[5].trim();return/^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(c)||/['",]/.exec(c)||(c="'"+c+"'"),{font:a,fontStyle:b[1]||"normal",fontVariant:b[2]||"normal",fontWeight:b[3]||"normal",fontSize:b[4]||"medium",fontFamily:c}}return console.warn("Phaser.Text - unparsable CSS font: "+a),{font:a}},c.Text.prototype.componentsToFont=function(a){var b,c=[];return b=a.fontStyle,b&&"normal"!==b&&c.push(b),b=a.fontVariant,b&&"normal"!==b&&c.push(b),b=a.fontWeight,b&&"normal"!==b&&c.push(b),b=a.fontSize,b&&"medium"!==b&&c.push(b),b=a.fontFamily,b&&c.push(b),c.length||c.push(a.font),c.join(" ")},c.Text.prototype.setText=function(a,b){return void 0===b&&(b=!1),this.text=a.toString()||"",b?this.updateText():this.dirty=!0,this},c.Text.prototype.parseList=function(a){if(!Array.isArray(a))return this;for(var b="",c=0;c<a.length;c++)Array.isArray(a[c])?(b+=a[c].join("\t"),c<a.length-1&&(b+="\n")):(b+=a[c],c<a.length-1&&(b+="\t"));return this.text=b,this.dirty=!0,this},c.Text.prototype.setTextBounds=function(a,b,d,e){return void 0===a?this.textBounds=null:(this.textBounds?this.textBounds.setTo(a,b,d,e):this.textBounds=new c.Rectangle(a,b,d,e),this.style.wordWrapWidth>d&&(this.style.wordWrapWidth=d)),this.updateTexture(),this},c.Text.prototype.updateTexture=function(){var a=this.texture.baseTexture,b=this.texture.crop,c=this.texture.frame,d=this.canvas.width,e=this.canvas.height;if(a.width=d,a.height=e,b.width=d,b.height=e,c.width=d,c.height=e,this.texture.width=d,this.texture.height=e,this._width=d,this._height=e,this.textBounds){var f=this.textBounds.x,g=this.textBounds.y;"right"===this.style.boundsAlignH?f+=this.textBounds.width-this.canvas.width/this.resolution:"center"===this.style.boundsAlignH&&(f+=this.textBounds.halfWidth-this.canvas.width/this.resolution/2),"bottom"===this.style.boundsAlignV?g+=this.textBounds.height-this.canvas.height/this.resolution:"middle"===this.style.boundsAlignV&&(g+=this.textBounds.halfHeight-this.canvas.height/this.resolution/2),this.pivot.x=-f,this.pivot.y=-g}this.renderable=0!==d&&0!==e,this.texture.requiresReTint=!0,this.texture.baseTexture.dirty()},c.Text.prototype._renderWebGL=function(a){this.dirty&&(this.updateText(),this.dirty=!1),PIXI.Sprite.prototype._renderWebGL.call(this,a)},c.Text.prototype._renderCanvas=function(a){this.dirty&&(this.updateText(),this.dirty=!1),PIXI.Sprite.prototype._renderCanvas.call(this,a)},c.Text.prototype.determineFontProperties=function(a){var b=c.Text.fontPropertiesCache[a];if(!b){b={};var d=c.Text.fontPropertiesCanvas,e=c.Text.fontPropertiesContext;e.font=a;var f=Math.ceil(e.measureText("|MÉq").width),g=Math.ceil(e.measureText("|MÉq").width),h=2*g;if(g=1.4*g|0,d.width=f,d.height=h,e.fillStyle="#f00",e.fillRect(0,0,f,h),e.font=a,e.textBaseline="alphabetic",e.fillStyle="#000",e.fillText("|MÉq",0,g),!e.getImageData(0,0,f,h))return b.ascent=g,b.descent=g+6,b.fontSize=b.ascent+b.descent,c.Text.fontPropertiesCache[a]=b,b;var i,j,k=e.getImageData(0,0,f,h).data,l=k.length,m=4*f,n=0,o=!1;for(i=0;i<g;i++){for(j=0;j<m;j+=4)if(255!==k[n+j]){o=!0;break}if(o)break;n+=m}for(b.ascent=g-i,n=l-m,o=!1,i=h;i>g;i--){for(j=0;j<m;j+=4)if(255!==k[n+j]){o=!0;break}if(o)break;n-=m}b.descent=i-g,b.descent+=6,b.fontSize=b.ascent+b.descent,c.Text.fontPropertiesCache[a]=b}return b},c.Text.prototype.getBounds=function(a){return this.dirty&&(this.updateText(),this.dirty=!1),PIXI.Sprite.prototype.getBounds.call(this,a)},Object.defineProperty(c.Text.prototype,"text",{get:function(){return this._text},set:function(a){a!==this._text&&(this._text=a.toString()||"",this.dirty=!0,this.parent&&this.updateTransform())}}),Object.defineProperty(c.Text.prototype,"cssFont",{get:function(){return this.componentsToFont(this._fontComponents)},set:function(a){a=a||"bold 20pt Arial",this._fontComponents=this.fontToComponents(a),this.updateFont(this._fontComponents)}}),Object.defineProperty(c.Text.prototype,"font",{get:function(){return this._fontComponents.fontFamily},set:function(a){a=a||"Arial",a=a.trim(),/^(?:inherit|serif|sans-serif|cursive|fantasy|monospace)$/.exec(a)||/['",]/.exec(a)||(a="'"+a+"'"),this._fontComponents.fontFamily=a,this.updateFont(this._fontComponents)}}),Object.defineProperty(c.Text.prototype,"fontSize",{get:function(){var a=this._fontComponents.fontSize;return a&&/(?:^0$|px$)/.exec(a)?parseInt(a,10):a},set:function(a){a=a||"0","number"==typeof a&&(a+="px"),this._fontComponents.fontSize=a,this.updateFont(this._fontComponents)}}),Object.defineProperty(c.Text.prototype,"fontWeight",{get:function(){return this._fontComponents.fontWeight||"normal"},set:function(a){a=a||"normal",this._fontComponents.fontWeight=a,this.updateFont(this._fontComponents)}}),Object.defineProperty(c.Text.prototype,"fontStyle",{get:function(){return this._fontComponents.fontStyle||"normal"},set:function(a){a=a||"normal",this._fontComponents.fontStyle=a,this.updateFont(this._fontComponents)}}),Object.defineProperty(c.Text.prototype,"fontVariant",{get:function(){return this._fontComponents.fontVariant||"normal"},set:function(a){a=a||"normal",this._fontComponents.fontVariant=a,this.updateFont(this._fontComponents)}}),Object.defineProperty(c.Text.prototype,"fill",{get:function(){return this.style.fill},set:function(a){a!==this.style.fill&&(this.style.fill=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"align",{get:function(){return this.style.align},set:function(a){a!==this.style.align&&(this.style.align=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"resolution",{get:function(){return this._res},set:function(a){a!==this._res&&(this._res=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"tabs",{get:function(){return this.style.tabs},set:function(a){a!==this.style.tabs&&(this.style.tabs=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"boundsAlignH",{get:function(){return this.style.boundsAlignH},set:function(a){a!==this.style.boundsAlignH&&(this.style.boundsAlignH=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"boundsAlignV",{get:function(){return this.style.boundsAlignV},set:function(a){a!==this.style.boundsAlignV&&(this.style.boundsAlignV=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"stroke",{get:function(){return this.style.stroke},set:function(a){a!==this.style.stroke&&(this.style.stroke=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"strokeThickness",{get:function(){return this.style.strokeThickness},set:function(a){a!==this.style.strokeThickness&&(this.style.strokeThickness=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"wordWrap",{get:function(){return this.style.wordWrap},set:function(a){a!==this.style.wordWrap&&(this.style.wordWrap=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"wordWrapWidth",{get:function(){return this.style.wordWrapWidth},set:function(a){a!==this.style.wordWrapWidth&&(this.style.wordWrapWidth=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"lineSpacing",{get:function(){return this._lineSpacing},set:function(a){a!==this._lineSpacing&&(this._lineSpacing=parseFloat(a),this.dirty=!0,this.parent&&this.updateTransform())}}),Object.defineProperty(c.Text.prototype,"shadowOffsetX",{get:function(){return this.style.shadowOffsetX},set:function(a){a!==this.style.shadowOffsetX&&(this.style.shadowOffsetX=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"shadowOffsetY",{get:function(){return this.style.shadowOffsetY},set:function(a){a!==this.style.shadowOffsetY&&(this.style.shadowOffsetY=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"shadowColor",{get:function(){return this.style.shadowColor},set:function(a){a!==this.style.shadowColor&&(this.style.shadowColor=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"shadowBlur",{get:function(){return this.style.shadowBlur},set:function(a){a!==this.style.shadowBlur&&(this.style.shadowBlur=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"shadowStroke",{get:function(){return this.style.shadowStroke},set:function(a){a!==this.style.shadowStroke&&(this.style.shadowStroke=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"shadowFill",{get:function(){return this.style.shadowFill},set:function(a){a!==this.style.shadowFill&&(this.style.shadowFill=a,this.dirty=!0)}}),Object.defineProperty(c.Text.prototype,"width",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.x*this.texture.frame.width},set:function(a){this.scale.x=a/this.texture.frame.width,this._width=a}}),Object.defineProperty(c.Text.prototype,"height",{get:function(){return this.dirty&&(this.updateText(),this.dirty=!1),this.scale.y*this.texture.frame.height},set:function(a){this.scale.y=a/this.texture.frame.height,this._height=a}}),c.Text.fontPropertiesCache={},c.Text.fontPropertiesCanvas=document.createElement("canvas"),c.Text.fontPropertiesContext=c.Text.fontPropertiesCanvas.getContext("2d"),c.BitmapText=function(a,b,d,e,f,g,h){b=b||0,d=d||0,e=e||"",f=f||"",g=g||32,h=h||"left",PIXI.DisplayObjectContainer.call(this),this.type=c.BITMAPTEXT,this.physicsType=c.SPRITE,this.textWidth=0,this.textHeight=0,this.anchor=new c.Point,this._prevAnchor=new c.Point,this._glyphs=[],this._maxWidth=0,this._text=f.toString()||"",this._data=a.cache.getBitmapFont(e),this._font=e,this._fontSize=g,this._align=h,this._tint=16777215,this.updateText(),this.dirty=!1,c.Component.Core.init.call(this,a,b,d,"",null)},c.BitmapText.prototype=Object.create(PIXI.DisplayObjectContainer.prototype),c.BitmapText.prototype.constructor=c.BitmapText,c.Component.Core.install.call(c.BitmapText.prototype,["Angle","AutoCull","Bounds","Destroy","FixedToCamera","InputEnabled","InWorld","LifeSpan","PhysicsBody","Reset"]),c.BitmapText.prototype.preUpdatePhysics=c.Component.PhysicsBody.preUpdate,c.BitmapText.prototype.preUpdateLifeSpan=c.Component.LifeSpan.preUpdate,c.BitmapText.prototype.preUpdateInWorld=c.Component.InWorld.preUpdate,c.BitmapText.prototype.preUpdateCore=c.Component.Core.preUpdate,c.BitmapText.prototype.preUpdate=function(){return!!(this.preUpdatePhysics()&&this.preUpdateLifeSpan()&&this.preUpdateInWorld())&&this.preUpdateCore()},c.BitmapText.prototype.postUpdate=function(){c.Component.PhysicsBody.postUpdate.call(this),c.Component.FixedToCamera.postUpdate.call(this),this.body&&this.body.type===c.Physics.ARCADE&&(this.textWidth===this.body.sourceWidth&&this.textHeight===this.body.sourceHeight||this.body.setSize(this.textWidth,this.textHeight))},c.BitmapText.prototype.setText=function(a){this.text=a};c.BitmapText.prototype.scanLine=function(a,b,c){for(var d=0,e=0,f=-1,g=0,h=null,i=this._maxWidth>0?this._maxWidth:null,j=[],k=0;k<c.length;k++){var l=k===c.length-1;if(/(?:\r\n|\r|\n)/.test(c.charAt(k)))return{width:e,text:c.substr(0,k),end:l,chars:j};var m=c.charCodeAt(k),n=a.chars[m],o=0;void 0===n&&(m=32,n=a.chars[m]);var p=h&&n.kerning[h]?n.kerning[h]:0;if(/(\s)/.test(c.charAt(k))&&(f=k,g=e),o=(p+n.texture.width+n.xOffset)*b,i&&e+o>=i&&f>-1)return{width:g||e,text:c.substr(0,k-(k-f)),end:l,chars:j};e+=(n.xAdvance+p)*b,j.push(d+(n.xOffset+p)*b),d+=(n.xAdvance+p)*b,h=m}return{width:e,text:c,end:l,chars:j}};c.BitmapText.prototype.cleanText=function(a,b){void 0===b&&(b="");var c=this._data.font;if(!c)return"";for(var d=/\r\n|\n\r|\n|\r/g,e=a.replace(d,"\n").split("\n"),f=0;f<e.length;f++){for(var g="",h=e[f],i=0;i<h.length;i++)g=c.chars[h.charCodeAt(i)]?g.concat(h[i]):g.concat(b);e[f]=g}return e.join("\n")},c.BitmapText.prototype.updateText=function(){var a=this._data.font;if(a){var b=this.text,c=this._fontSize/a.size,d=[],e=0;this.textWidth=0;do{var f=this.scanLine(a,c,b);f.y=e,d.push(f),f.width>this.textWidth&&(this.textWidth=f.width),e+=a.lineHeight*c,b=b.substr(f.text.length+1)}while(f.end===!1);this.textHeight=e;for(var g=0,h=0,i=this.textWidth*this.anchor.x,j=this.textHeight*this.anchor.y,k=0;k<d.length;k++){var f=d[k];"right"===this._align?h=this.textWidth-f.width:"center"===this._align&&(h=(this.textWidth-f.width)/2);for(var l=0;l<f.text.length;l++){var m=f.text.charCodeAt(l),n=a.chars[m];void 0===n&&(m=32,n=a.chars[m]);var o=this._glyphs[g];o?o.texture=n.texture:(o=new PIXI.Sprite(n.texture),o.name=f.text[l],this._glyphs.push(o)),o.position.x=f.chars[l]+h-i,o.position.y=f.y+n.yOffset*c-j,o.scale.set(c),o.tint=this.tint,o.texture.requiresReTint=!0,o.parent||this.addChild(o),g++}}for(k=g;k<this._glyphs.length;k++)this.removeChild(this._glyphs[k])}},c.BitmapText.prototype.purgeGlyphs=function(){for(var a=this._glyphs.length,b=[],c=0;c<this._glyphs.length;c++)this._glyphs[c].parent!==this?this._glyphs[c].destroy():b.push(this._glyphs[c]);return this._glyphs=[],this._glyphs=b,this.updateText(),a-b.length},c.BitmapText.prototype.updateTransform=function(){!this.dirty&&this.anchor.equals(this._prevAnchor)||(this.updateText(),this.dirty=!1,this._prevAnchor.copyFrom(this.anchor)),PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)},Object.defineProperty(c.BitmapText.prototype,"align",{get:function(){return this._align},set:function(a){a===this._align||"left"!==a&&"center"!==a&&"right"!==a||(this._align=a,this.updateText())}}),Object.defineProperty(c.BitmapText.prototype,"tint",{get:function(){return this._tint},set:function(a){a!==this._tint&&(this._tint=a,this.updateText())}}),Object.defineProperty(c.BitmapText.prototype,"font",{get:function(){return this._font},set:function(a){a!==this._font&&(this._font=a.trim(),this._data=this.game.cache.getBitmapFont(this._font),this.updateText())}}),Object.defineProperty(c.BitmapText.prototype,"fontSize",{get:function(){return this._fontSize},set:function(a){a=parseInt(a,10),a!==this._fontSize&&a>0&&(this._fontSize=a,this.updateText())}}),Object.defineProperty(c.BitmapText.prototype,"text",{get:function(){return this._text},set:function(a){a!==this._text&&(this._text=a.toString()||"",this.updateText())}}),Object.defineProperty(c.BitmapText.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(a){a!==this._maxWidth&&(this._maxWidth=a,this.updateText())}}),Object.defineProperty(c.BitmapText.prototype,"smoothed",{get:function(){return!this._data.base.scaleMode},set:function(a){a?this._data.base.scaleMode=0:this._data.base.scaleMode=1}}),c.RetroFont=function(a,b,d,e,f,g,h,i,j,k){if(!a.cache.checkImageKey(b))return!1;void 0!==g&&null!==g||(g=a.cache.getImage(b).width/d),this.characterWidth=d,this.characterHeight=e,this.characterSpacingX=h||0,this.characterSpacingY=i||0,this.characterPerRow=g,this.offsetX=j||0,this.offsetY=k||0,this.align="left",this.multiLine=!1,this.autoUpperCase=!0,this.customSpacingX=0,this.customSpacingY=0,this.fixedWidth=0,this.fontSet=a.cache.getImage(b),this._text="",this.grabData=[],this.frameData=new c.FrameData;for(var l=this.offsetX,m=this.offsetY,n=0,o=0;o<f.length;o++){var p=this.frameData.addFrame(new c.Frame(o,l,m,this.characterWidth,this.characterHeight));this.grabData[f.charCodeAt(o)]=p.index,n++,n===this.characterPerRow?(n=0,l=this.offsetX,m+=this.characterHeight+this.characterSpacingY):l+=this.characterWidth+this.characterSpacingX}a.cache.updateFrameData(b,this.frameData),this.stamp=new c.Image(a,0,0,b,0),c.RenderTexture.call(this,a,100,100,"",c.scaleModes.NEAREST),this.type=c.RETROFONT},c.RetroFont.prototype=Object.create(c.RenderTexture.prototype),c.RetroFont.prototype.constructor=c.RetroFont,c.RetroFont.ALIGN_LEFT="left",c.RetroFont.ALIGN_RIGHT="right",c.RetroFont.ALIGN_CENTER="center",c.RetroFont.TEXT_SET1=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",c.RetroFont.TEXT_SET2=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ",c.RetroFont.TEXT_SET3="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",c.RetroFont.TEXT_SET4="ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",c.RetroFont.TEXT_SET5="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",c.RetroFont.TEXT_SET6="ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ",c.RetroFont.TEXT_SET7="AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39",c.RetroFont.TEXT_SET8="0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",c.RetroFont.TEXT_SET9="ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!",c.RetroFont.TEXT_SET10="ABCDEFGHIJKLMNOPQRSTUVWXYZ",c.RetroFont.TEXT_SET11="ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789",c.RetroFont.prototype.setFixedWidth=function(a,b){void 0===b&&(b="left"),this.fixedWidth=a,this.align=b},c.RetroFont.prototype.setText=function(a,b,c,d,e,f){this.multiLine=b||!1,this.customSpacingX=c||0,this.customSpacingY=d||0,this.align=e||"left",f?this.autoUpperCase=!1:this.autoUpperCase=!0,a.length>0&&(this.text=a)},c.RetroFont.prototype.buildRetroFontText=function(){var a=0,b=0;if(this.clear(),this.multiLine){var d=this._text.split("\n");this.fixedWidth>0?this.resize(this.fixedWidth,d.length*(this.characterHeight+this.customSpacingY)-this.customSpacingY,!0):this.resize(this.getLongestLine()*(this.characterWidth+this.customSpacingX),d.length*(this.characterHeight+this.customSpacingY)-this.customSpacingY,!0);for(var e=0;e<d.length;e++)a=0,this.align===c.RetroFont.ALIGN_RIGHT?a=this.width-d[e].length*(this.characterWidth+this.customSpacingX):this.align===c.RetroFont.ALIGN_CENTER&&(a=this.width/2-d[e].length*(this.characterWidth+this.customSpacingX)/2,a+=this.customSpacingX/2),a<0&&(a=0),this.pasteLine(d[e],a,b,this.customSpacingX),b+=this.characterHeight+this.customSpacingY}else this.fixedWidth>0?this.resize(this.fixedWidth,this.characterHeight,!0):this.resize(this._text.length*(this.characterWidth+this.customSpacingX),this.characterHeight,!0),a=0,this.align===c.RetroFont.ALIGN_RIGHT?a=this.width-this._text.length*(this.characterWidth+this.customSpacingX):this.align===c.RetroFont.ALIGN_CENTER&&(a=this.width/2-this._text.length*(this.characterWidth+this.customSpacingX)/2,a+=this.customSpacingX/2),a<0&&(a=0),this.pasteLine(this._text,a,0,this.customSpacingX);this.requiresReTint=!0},c.RetroFont.prototype.pasteLine=function(a,b,c,d){for(var e=0;e<a.length;e++)if(" "===a.charAt(e))b+=this.characterWidth+d;else if(this.grabData[a.charCodeAt(e)]>=0&&(this.stamp.frame=this.grabData[a.charCodeAt(e)],this.renderXY(this.stamp,b,c,!1),b+=this.characterWidth+d,b>this.width))break},c.RetroFont.prototype.getLongestLine=function(){var a=0;if(this._text.length>0)for(var b=this._text.split("\n"),c=0;c<b.length;c++)b[c].length>a&&(a=b[c].length);return a},c.RetroFont.prototype.removeUnsupportedCharacters=function(a){for(var b="",c=0;c<this._text.length;c++){var d=this._text[c],e=d.charCodeAt(0);(this.grabData[e]>=0||!a&&"\n"===d)&&(b=b.concat(d))}return b},c.RetroFont.prototype.updateOffset=function(a,b){if(this.offsetX!==a||this.offsetY!==b){for(var c=a-this.offsetX,d=b-this.offsetY,e=this.game.cache.getFrameData(this.stamp.key).getFrames(),f=e.length;f--;)e[f].x+=c,e[f].y+=d;this.buildRetroFontText()}},Object.defineProperty(c.RetroFont.prototype,"text",{get:function(){return this._text},set:function(a){var b;b=this.autoUpperCase?a.toUpperCase():a,b!==this._text&&(this._text=b,this.removeUnsupportedCharacters(this.multiLine),this.buildRetroFontText())}}),Object.defineProperty(c.RetroFont.prototype,"smoothed",{get:function(){return this.stamp.smoothed},set:function(a){this.stamp.smoothed=a,this.buildRetroFontText()}}),c.Rope=function(a,b,d,e,f,g){this.points=[],this.points=g,this._hasUpdateAnimation=!1,this._updateAnimationCallback=null,b=b||0,d=d||0,e=e||null,f=f||null,this.type=c.ROPE,PIXI.Rope.call(this,c.Cache.DEFAULT,this.points),c.Component.Core.init.call(this,a,b,d,e,f)},c.Rope.prototype=Object.create(PIXI.Rope.prototype),c.Rope.prototype.constructor=c.Rope,c.Component.Core.install.call(c.Rope.prototype,["Angle","Animation","AutoCull","Bounds","BringToTop","Crop","Delta","Destroy","FixedToCamera","InWorld","LifeSpan","LoadTexture","Overlap","PhysicsBody","Reset","ScaleMinMax","Smoothed"]),c.Rope.prototype.preUpdatePhysics=c.Component.PhysicsBody.preUpdate,c.Rope.prototype.preUpdateLifeSpan=c.Component.LifeSpan.preUpdate,c.Rope.prototype.preUpdateInWorld=c.Component.InWorld.preUpdate,c.Rope.prototype.preUpdateCore=c.Component.Core.preUpdate,c.Rope.prototype.preUpdate=function(){return!!(this.preUpdatePhysics()&&this.preUpdateLifeSpan()&&this.preUpdateInWorld())&&this.preUpdateCore()},c.Rope.prototype.update=function(){this._hasUpdateAnimation&&this.updateAnimation.call(this)},c.Rope.prototype.reset=function(a,b){return c.Component.Reset.prototype.reset.call(this,a,b),this},Object.defineProperty(c.Rope.prototype,"updateAnimation",{get:function(){return this._updateAnimation},set:function(a){a&&"function"==typeof a?(this._hasUpdateAnimation=!0,this._updateAnimation=a):(this._hasUpdateAnimation=!1,this._updateAnimation=null)}}),Object.defineProperty(c.Rope.prototype,"segments",{get:function(){for(var a,b,d,e,f,g,h,i,j=[],k=0;k<this.points.length;k++)a=4*k,b=this.vertices[a]*this.scale.x,d=this.vertices[a+1]*this.scale.y,e=this.vertices[a+4]*this.scale.x,f=this.vertices[a+3]*this.scale.y,g=c.Math.difference(b,e),h=c.Math.difference(d,f),b+=this.world.x,d+=this.world.y,i=new c.Rectangle(b,d,g,h),j.push(i);return j}}),c.TileSprite=function(a,b,d,e,f,g,h){b=b||0,d=d||0,e=e||256,f=f||256,g=g||null,h=h||null,this.type=c.TILESPRITE,this.physicsType=c.SPRITE,this._scroll=new c.Point;var i=a.cache.getImage("__default",!0);PIXI.TilingSprite.call(this,new PIXI.Texture(i.base),e,f),c.Component.Core.init.call(this,a,b,d,g,h)},c.TileSprite.prototype=Object.create(PIXI.TilingSprite.prototype),c.TileSprite.prototype.constructor=c.TileSprite,c.Component.Core.install.call(c.TileSprite.prototype,["Angle","Animation","AutoCull","Bounds","BringToTop","Destroy","FixedToCamera","Health","InCamera","InputEnabled","InWorld","LifeSpan","LoadTexture","Overlap","PhysicsBody","Reset","Smoothed"]),c.TileSprite.prototype.preUpdatePhysics=c.Component.PhysicsBody.preUpdate,c.TileSprite.prototype.preUpdateLifeSpan=c.Component.LifeSpan.preUpdate,c.TileSprite.prototype.preUpdateInWorld=c.Component.InWorld.preUpdate,c.TileSprite.prototype.preUpdateCore=c.Component.Core.preUpdate,c.TileSprite.prototype.preUpdate=function(){return 0!==this._scroll.x&&(this.tilePosition.x+=this._scroll.x*this.game.time.physicsElapsed),0!==this._scroll.y&&(this.tilePosition.y+=this._scroll.y*this.game.time.physicsElapsed),!!(this.preUpdatePhysics()&&this.preUpdateLifeSpan()&&this.preUpdateInWorld())&&this.preUpdateCore()},c.TileSprite.prototype.autoScroll=function(a,b){this._scroll.set(a,b)},c.TileSprite.prototype.stopScroll=function(){this._scroll.set(0,0)},c.TileSprite.prototype.destroy=function(a){c.Component.Destroy.prototype.destroy.call(this,a),PIXI.TilingSprite.prototype.destroy.call(this)},c.TileSprite.prototype.reset=function(a,b){return c.Component.Reset.prototype.reset.call(this,a,b),this.tilePosition.x=0,this.tilePosition.y=0,this},c.Device=function(){this.deviceReadyAt=0,this.initialized=!1,this.desktop=!1,this.iOS=!1,this.iOSVersion=0,this.cocoonJS=!1,this.cocoonJSApp=!1,this.cordova=!1,this.node=!1,this.nodeWebkit=!1,this.electron=!1,this.ejecta=!1,this.crosswalk=!1,this.android=!1,this.chromeOS=!1,this.linux=!1,this.macOS=!1,this.windows=!1,this.windowsPhone=!1,this.canvas=!1,this.canvasBitBltShift=null,this.webGL=!1,this.file=!1,this.fileSystem=!1,this.localStorage=!1,this.worker=!1,this.css3D=!1,this.pointerLock=!1,this.typedArray=!1,this.vibration=!1,this.getUserMedia=!0,this.quirksMode=!1,this.touch=!1,this.mspointer=!1,this.wheelEvent=null,this.arora=!1,this.chrome=!1,this.chromeVersion=0,this.epiphany=!1,this.firefox=!1,this.firefoxVersion=0,this.ie=!1,this.ieVersion=0,this.trident=!1,this.tridentVersion=0,this.edge=!1,this.mobileSafari=!1,this.midori=!1,this.opera=!1,this.safari=!1,this.safariVersion=0,this.webApp=!1,this.silk=!1,this.audioData=!1,this.webAudio=!1,this.ogg=!1,this.opus=!1,this.mp3=!1,this.wav=!1,this.m4a=!1,this.webm=!1,this.dolby=!1,this.oggVideo=!1,this.h264Video=!1,this.mp4Video=!1,this.webmVideo=!1,this.vp9Video=!1,this.hlsVideo=!1,this.iPhone=!1,this.iPhone4=!1,this.iPad=!1,this.pixelRatio=0,this.littleEndian=!1,this.LITTLE_ENDIAN=!1,this.support32bit=!1,this.fullscreen=!1,this.requestFullscreen="",this.cancelFullscreen="",this.fullscreenKeyboard=!1},c.Device=new c.Device,c.Device.onInitialized=new c.Signal,c.Device.whenReady=function(a,b,c){var d=this._readyCheck;if(this.deviceReadyAt||!d)a.call(b,this);else if(d._monitor||c)d._queue=d._queue||[],d._queue.push([a,b]);else{d._monitor=d.bind(this),d._queue=d._queue||[],d._queue.push([a,b]);var e="undefined"!=typeof window.cordova,f=navigator.isCocoonJS;"complete"===document.readyState||"interactive"===document.readyState?window.setTimeout(d._monitor,0):e&&!f?document.addEventListener("deviceready",d._monitor,!1):(document.addEventListener("DOMContentLoaded",d._monitor,!1),window.addEventListener("load",d._monitor,!1))}},c.Device._readyCheck=function(){var a=this._readyCheck;if(document.body){if(!this.deviceReadyAt){this.deviceReadyAt=Date.now(),document.removeEventListener("deviceready",a._monitor),document.removeEventListener("DOMContentLoaded",a._monitor),window.removeEventListener("load",a._monitor),this._initialize(),this.initialized=!0,this.onInitialized.dispatch(this);for(var b;b=a._queue.shift();){var c=b[0],d=b[1];c.call(d,this)}this._readyCheck=null,this._initialize=null,this.onInitialized=null}}else window.setTimeout(a._monitor,20)},c.Device._initialize=function(){function a(){var a=navigator.userAgent;/Playstation Vita/.test(a)?l.vita=!0:/Kindle/.test(a)||/\bKF[A-Z][A-Z]+/.test(a)||/Silk.*Mobile Safari/.test(a)?l.kindle=!0:/Android/.test(a)?l.android=!0:/CrOS/.test(a)?l.chromeOS=!0:/iP[ao]d|iPhone/i.test(a)?(l.iOS=!0,navigator.appVersion.match(/OS (\d+)/),l.iOSVersion=parseInt(RegExp.$1,10)):/Linux/.test(a)?l.linux=!0:/Mac OS/.test(a)?l.macOS=!0:/Windows/.test(a)&&(l.windows=!0),(/Windows Phone/i.test(a)||/IEMobile/i.test(a))&&(l.android=!1,l.iOS=!1,l.macOS=!1,l.windows=!0,l.windowsPhone=!0);var b=/Silk/.test(a);(l.windows||l.macOS||l.linux&&!b||l.chromeOS)&&(l.desktop=!0),(l.windowsPhone||/Windows NT/i.test(a)&&/Touch/i.test(a))&&(l.desktop=!1);
	}function b(){l.canvas=!!window.CanvasRenderingContext2D||l.cocoonJS;try{l.localStorage=!!localStorage.getItem}catch(a){l.localStorage=!1}l.file=!!(window.File&&window.FileReader&&window.FileList&&window.Blob),l.fileSystem=!!window.requestFileSystem,l.webGL=function(){try{var a=document.createElement("canvas");return a.screencanvas=!1,!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch(a){return!1}}(),l.webGL=!!l.webGL,l.worker=!!window.Worker,l.pointerLock="pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document,l.quirksMode="CSS1Compat"!==document.compatMode,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia,window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,l.getUserMedia=l.getUserMedia&&!!navigator.getUserMedia&&!!window.URL,l.firefox&&l.firefoxVersion<21&&(l.getUserMedia=!1),!l.iOS&&(l.ie||l.firefox||l.chrome)&&(l.canvasBitBltShift=!0),(l.safari||l.mobileSafari)&&(l.canvasBitBltShift=!1)}function c(){("ontouchstart"in document.documentElement||window.navigator.maxTouchPoints&&window.navigator.maxTouchPoints>=1)&&(l.touch=!0),(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&(l.mspointer=!0),l.cocoonJS||("onwheel"in window||l.ie&&"WheelEvent"in window?l.wheelEvent="wheel":"onmousewheel"in window?l.wheelEvent="mousewheel":l.firefox&&"MouseScrollEvent"in window&&(l.wheelEvent="DOMMouseScroll"))}function d(){for(var a=["requestFullscreen","requestFullScreen","webkitRequestFullscreen","webkitRequestFullScreen","msRequestFullscreen","msRequestFullScreen","mozRequestFullScreen","mozRequestFullscreen"],b=document.createElement("div"),c=0;c<a.length;c++)if(b[a[c]]){l.fullscreen=!0,l.requestFullscreen=a[c];break}var d=["cancelFullScreen","exitFullscreen","webkitCancelFullScreen","webkitExitFullscreen","msCancelFullScreen","msExitFullscreen","mozCancelFullScreen","mozExitFullscreen"];if(l.fullscreen)for(var c=0;c<d.length;c++)if(document[d[c]]){l.cancelFullscreen=d[c];break}window.Element&&Element.ALLOW_KEYBOARD_INPUT&&(l.fullscreenKeyboard=!0)}function e(){var a=navigator.userAgent;if(/Arora/.test(a)?l.arora=!0:/Edge\/\d+/.test(a)?l.edge=!0:/Chrome\/(\d+)/.test(a)&&!l.windowsPhone?(l.chrome=!0,l.chromeVersion=parseInt(RegExp.$1,10)):/Epiphany/.test(a)?l.epiphany=!0:/Firefox\D+(\d+)/.test(a)?(l.firefox=!0,l.firefoxVersion=parseInt(RegExp.$1,10)):/AppleWebKit/.test(a)&&l.iOS?l.mobileSafari=!0:/MSIE (\d+\.\d+);/.test(a)?(l.ie=!0,l.ieVersion=parseInt(RegExp.$1,10)):/Midori/.test(a)?l.midori=!0:/Opera/.test(a)?l.opera=!0:/Safari\/(\d+)/.test(a)&&!l.windowsPhone?(l.safari=!0,/Version\/(\d+)\./.test(a)&&(l.safariVersion=parseInt(RegExp.$1,10))):/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(a)&&(l.ie=!0,l.trident=!0,l.tridentVersion=parseInt(RegExp.$1,10),l.ieVersion=parseInt(RegExp.$3,10)),/Silk/.test(a)&&(l.silk=!0),navigator.standalone&&(l.webApp=!0),"undefined"!=typeof window.cordova&&(l.cordova=!0),"undefined"!=typeof process&&"undefined"!=typeof require&&(l.node=!0),l.node&&"object"==typeof process.versions&&(l.nodeWebkit=!!process.versions["node-webkit"],l.electron=!!process.versions.electron),navigator.isCocoonJS&&(l.cocoonJS=!0),l.cocoonJS)try{l.cocoonJSApp="undefined"!=typeof CocoonJS}catch(a){l.cocoonJSApp=!1}"undefined"!=typeof window.ejecta&&(l.ejecta=!0),/Crosswalk/.test(a)&&(l.crosswalk=!0)}function f(){var a=document.createElement("video"),b=!1;try{(b=!!a.canPlayType)&&(a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"")&&(l.oggVideo=!0),a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"")&&(l.h264Video=!0,l.mp4Video=!0),a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")&&(l.webmVideo=!0),a.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,"")&&(l.vp9Video=!0),a.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,"")&&(l.hlsVideo=!0))}catch(a){}}function g(){l.audioData=!!window.Audio,l.webAudio=!(!window.AudioContext&&!window.webkitAudioContext);var a=document.createElement("audio"),b=!1;try{if((b=!!a.canPlayType)&&(a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"")&&(l.ogg=!0),(a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,"")||a.canPlayType("audio/opus;").replace(/^no$/,""))&&(l.opus=!0),a.canPlayType("audio/mpeg;").replace(/^no$/,"")&&(l.mp3=!0),a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"")&&(l.wav=!0),(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;").replace(/^no$/,""))&&(l.m4a=!0),a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")&&(l.webm=!0),""!==a.canPlayType('audio/mp4;codecs="ec-3"')))if(l.edge)l.dolby=!0;else if(l.safari&&l.safariVersion>=9&&/Mac OS X (\d+)_(\d+)/.test(navigator.userAgent)){var c=parseInt(RegExp.$1,10),d=parseInt(RegExp.$2,10);(10===c&&d>=11||c>10)&&(l.dolby=!0)}}catch(a){}}function h(){var a=new ArrayBuffer(4),b=new Uint8Array(a),c=new Uint32Array(a);return b[0]=161,b[1]=178,b[2]=195,b[3]=212,3569595041===c[0]||2712847316!==c[0]&&null}function i(){if(void 0===Uint8ClampedArray)return!1;var a=PIXI.CanvasPool.create(this,1,1),b=a.getContext("2d");if(!b)return!1;var c=b.createImageData(1,1);return PIXI.CanvasPool.remove(this),c.data instanceof Uint8ClampedArray}function j(){l.pixelRatio=window.devicePixelRatio||1,l.iPhone=navigator.userAgent.toLowerCase().indexOf("iphone")!==-1,l.iPhone4=2===l.pixelRatio&&l.iPhone,l.iPad=navigator.userAgent.toLowerCase().indexOf("ipad")!==-1,"undefined"!=typeof Int8Array?l.typedArray=!0:l.typedArray=!1,"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint32Array&&(l.littleEndian=h(),l.LITTLE_ENDIAN=l.littleEndian),l.support32bit="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof Int32Array&&null!==l.littleEndian&&i(),navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(l.vibration=!0)}function k(){var a,b=document.createElement("p"),c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(b,null);for(var d in c)void 0!==b.style[d]&&(b.style[d]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[d]));document.body.removeChild(b),l.css3D=void 0!==a&&a.length>0&&"none"!==a}var l=this;a(),e(),g(),f(),k(),j(),b(),d(),c()},c.Device.canPlayAudio=function(a){return!("mp3"!==a||!this.mp3)||(!("ogg"!==a||!this.ogg&&!this.opus)||(!("m4a"!==a||!this.m4a)||(!("opus"!==a||!this.opus)||(!("wav"!==a||!this.wav)||(!("webm"!==a||!this.webm)||!("mp4"!==a||!this.dolby))))))},c.Device.canPlayVideo=function(a){return!("webm"!==a||!this.webmVideo&&!this.vp9Video)||(!("mp4"!==a||!this.mp4Video&&!this.h264Video)||(!("ogg"!==a&&"ogv"!==a||!this.oggVideo)||!("mpeg"!==a||!this.hlsVideo)))},c.Device.isConsoleOpen=function(){return!(!window.console||!window.console.firebug)||!(!window.console||(console.profile(),console.profileEnd(),console.clear&&console.clear(),!console.profiles))&&console.profiles.length>0},c.Device.isAndroidStockBrowser=function(){var a=window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);return a&&a[1]<537},c.Canvas={create:function(a,b,c,d,e){b=b||256,c=c||256;var f=e?document.createElement("canvas"):PIXI.CanvasPool.create(a,b,c);return"string"==typeof d&&""!==d&&(f.id=d),f.width=b,f.height=c,f.style.display="block",f},setBackgroundColor:function(a,b){return b=b||"rgb(0,0,0)",a.style.backgroundColor=b,a},setTouchAction:function(a,b){return b=b||"none",a.style.msTouchAction=b,a.style["ms-touch-action"]=b,a.style["touch-action"]=b,a},setUserSelect:function(a,b){return b=b||"none",a.style["-webkit-touch-callout"]=b,a.style["-webkit-user-select"]=b,a.style["-khtml-user-select"]=b,a.style["-moz-user-select"]=b,a.style["-ms-user-select"]=b,a.style["user-select"]=b,a.style["-webkit-tap-highlight-color"]="rgba(0, 0, 0, 0)",a},addToDOM:function(a,b,c){var d;return void 0===c&&(c=!0),b&&("string"==typeof b?d=document.getElementById(b):"object"==typeof b&&1===b.nodeType&&(d=b)),d||(d=document.body),c&&d.style&&(d.style.overflow="hidden"),d.appendChild(a),a},removeFromDOM:function(a){a.parentNode&&a.parentNode.removeChild(a)},setTransform:function(a,b,c,d,e,f,g){return a.setTransform(d,f,g,e,b,c),a},setSmoothingEnabled:function(a,b){var d=c.Canvas.getSmoothingPrefix(a);return d&&(a[d]=b),a},getSmoothingPrefix:function(a){var b=["i","webkitI","msI","mozI","oI"];for(var c in b){var d=b[c]+"mageSmoothingEnabled";if(d in a)return d}return null},getSmoothingEnabled:function(a){var b=c.Canvas.getSmoothingPrefix(a);if(b)return a[b]},setImageRenderingCrisp:function(a){for(var b=["optimizeSpeed","crisp-edges","-moz-crisp-edges","-webkit-optimize-contrast","optimize-contrast","pixelated"],c=0;c<b.length;c++)a.style["image-rendering"]=b[c];return a.style.msInterpolationMode="nearest-neighbor",a},setImageRenderingBicubic:function(a){return a.style["image-rendering"]="auto",a.style.msInterpolationMode="bicubic",a}},c.RequestAnimationFrame=function(a,b){void 0===b&&(b=!1),this.game=a,this.isRunning=!1,this.forceSetTimeOut=b;for(var c=["ms","moz","webkit","o"],d=0;d<c.length&&!window.requestAnimationFrame;d++)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"];this._isSetTimeOut=!1,this._onLoop=null,this._timeOutID=null},c.RequestAnimationFrame.prototype={start:function(){this.isRunning=!0;var a=this;!window.requestAnimationFrame||this.forceSetTimeOut?(this._isSetTimeOut=!0,this._onLoop=function(){return a.updateSetTimeout()},this._timeOutID=window.setTimeout(this._onLoop,0)):(this._isSetTimeOut=!1,this._onLoop=function(b){return a.updateRAF(b)},this._timeOutID=window.requestAnimationFrame(this._onLoop))},updateRAF:function(a){this.isRunning&&(this.game.update(Math.floor(a)),this._timeOutID=window.requestAnimationFrame(this._onLoop))},updateSetTimeout:function(){this.isRunning&&(this.game.update(Date.now()),this._timeOutID=window.setTimeout(this._onLoop,this.game.time.timeToCall))},stop:function(){this._isSetTimeOut?clearTimeout(this._timeOutID):window.cancelAnimationFrame(this._timeOutID),this.isRunning=!1},isSetTimeOut:function(){return this._isSetTimeOut},isRAF:function(){return this._isSetTimeOut===!1}},c.RequestAnimationFrame.prototype.constructor=c.RequestAnimationFrame,c.Math={PI2:2*Math.PI,between:function(a,b){return Math.floor(Math.random()*(b-a+1)+a)},fuzzyEqual:function(a,b,c){return void 0===c&&(c=1e-4),Math.abs(a-b)<c},fuzzyLessThan:function(a,b,c){return void 0===c&&(c=1e-4),a<b+c},fuzzyGreaterThan:function(a,b,c){return void 0===c&&(c=1e-4),a>b-c},fuzzyCeil:function(a,b){return void 0===b&&(b=1e-4),Math.ceil(a-b)},fuzzyFloor:function(a,b){return void 0===b&&(b=1e-4),Math.floor(a+b)},average:function(){for(var a=0,b=arguments.length,c=0;c<b;c++)a+=+arguments[c];return a/b},shear:function(a){return a%1},snapTo:function(a,b,c){return void 0===c&&(c=0),0===b?a:(a-=c,a=b*Math.round(a/b),c+a)},snapToFloor:function(a,b,c){return void 0===c&&(c=0),0===b?a:(a-=c,a=b*Math.floor(a/b),c+a)},snapToCeil:function(a,b,c){return void 0===c&&(c=0),0===b?a:(a-=c,a=b*Math.ceil(a/b),c+a)},roundTo:function(a,b,c){void 0===b&&(b=0),void 0===c&&(c=10);var d=Math.pow(c,-b);return Math.round(a*d)/d},floorTo:function(a,b,c){void 0===b&&(b=0),void 0===c&&(c=10);var d=Math.pow(c,-b);return Math.floor(a*d)/d},ceilTo:function(a,b,c){void 0===b&&(b=0),void 0===c&&(c=10);var d=Math.pow(c,-b);return Math.ceil(a*d)/d},rotateToAngle:function(a,b,d){return void 0===d&&(d=.05),a===b?a:(Math.abs(b-a)<=d||Math.abs(b-a)>=c.Math.PI2-d?a=b:(Math.abs(b-a)>Math.PI&&(b<a?b+=c.Math.PI2:b-=c.Math.PI2),b>a?a+=d:b<a&&(a-=d)),a)},getShortestAngle:function(a,b){var c=b-a;if(0===c)return 0;var d=Math.floor((c- -180)/360);return c-360*d},angleBetween:function(a,b,c,d){return Math.atan2(d-b,c-a)},angleBetweenY:function(a,b,c,d){return Math.atan2(c-a,d-b)},angleBetweenPoints:function(a,b){return Math.atan2(b.y-a.y,b.x-a.x)},angleBetweenPointsY:function(a,b){return Math.atan2(b.x-a.x,b.y-a.y)},reverseAngle:function(a){return this.normalizeAngle(a+Math.PI,!0)},normalizeAngle:function(a){return a%=2*Math.PI,a>=0?a:a+2*Math.PI},maxAdd:function(a,b,c){return Math.min(a+b,c)},minSub:function(a,b,c){return Math.max(a-b,c)},wrap:function(a,b,c){var d=c-b;if(d<=0)return 0;var e=(a-b)%d;return e<0&&(e+=d),e+b},wrapValue:function(a,b,c){var d;return a=Math.abs(a),b=Math.abs(b),c=Math.abs(c),d=(a+b)%c},isOdd:function(a){return!!(1&a)},isEven:function(a){return!(1&a)},min:function(){if(1===arguments.length&&"object"==typeof arguments[0])var a=arguments[0];else var a=arguments;for(var b=1,c=0,d=a.length;b<d;b++)a[b]<a[c]&&(c=b);return a[c]},max:function(){if(1===arguments.length&&"object"==typeof arguments[0])var a=arguments[0];else var a=arguments;for(var b=1,c=0,d=a.length;b<d;b++)a[b]>a[c]&&(c=b);return a[c]},minProperty:function(a){if(2===arguments.length&&"object"==typeof arguments[1])var b=arguments[1];else var b=arguments.slice(1);for(var c=1,d=0,e=b.length;c<e;c++)b[c][a]<b[d][a]&&(d=c);return b[d][a]},maxProperty:function(a){if(2===arguments.length&&"object"==typeof arguments[1])var b=arguments[1];else var b=arguments.slice(1);for(var c=1,d=0,e=b.length;c<e;c++)b[c][a]>b[d][a]&&(d=c);return b[d][a]},wrapAngle:function(a,b){return b?this.wrap(a,-Math.PI,Math.PI):this.wrap(a,-180,180)},linearInterpolation:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d);return b<0?this.linear(a[0],a[1],d):b>1?this.linear(a[c],a[c-1],c-d):this.linear(a[e],a[e+1>c?c:e+1],d-e)},bezierInterpolation:function(a,b){for(var c=0,d=a.length-1,e=0;e<=d;e++)c+=Math.pow(1-b,d-e)*Math.pow(b,e)*a[e]*this.bernstein(d,e);return c},catmullRomInterpolation:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d);return a[0]===a[c]?(b<0&&(e=Math.floor(d=c*(1+b))),this.catmullRom(a[(e-1+c)%c],a[e],a[(e+1)%c],a[(e+2)%c],d-e)):b<0?a[0]-(this.catmullRom(a[0],a[0],a[1],a[1],-d)-a[0]):b>1?a[c]-(this.catmullRom(a[c],a[c],a[c-1],a[c-1],d-c)-a[c]):this.catmullRom(a[e?e-1:0],a[e],a[c<e+1?c:e+1],a[c<e+2?c:e+2],d-e)},linear:function(a,b,c){return(b-a)*c+a},bernstein:function(a,b){return this.factorial(a)/this.factorial(b)/this.factorial(a-b)},factorial:function(a){if(0===a)return 1;for(var b=a;--a;)b*=a;return b},catmullRom:function(a,b,c,d,e){var f=.5*(c-a),g=.5*(d-b),h=e*e,i=e*h;return(2*b-2*c+f+g)*i+(-3*b+3*c-2*f-g)*h+f*e+b},difference:function(a,b){return Math.abs(a-b)},roundAwayFromZero:function(a){return a>0?Math.ceil(a):Math.floor(a)},sinCosGenerator:function(a,b,c,d){void 0===b&&(b=1),void 0===c&&(c=1),void 0===d&&(d=1);for(var e=b,f=c,g=d*Math.PI/a,h=[],i=[],j=0;j<a;j++)f-=e*g,e+=f*g,h[j]=f,i[j]=e;return{sin:i,cos:h,length:a}},distance:function(a,b,c,d){var e=a-c,f=b-d;return Math.sqrt(e*e+f*f)},distanceSq:function(a,b,c,d){var e=a-c,f=b-d;return e*e+f*f},distancePow:function(a,b,c,d,e){return void 0===e&&(e=2),Math.sqrt(Math.pow(c-a,e)+Math.pow(d-b,e))},clamp:function(a,b,c){return a<b?b:c<a?c:a},clampBottom:function(a,b){return a<b?b:a},within:function(a,b,c){return Math.abs(a-b)<=c},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){return a=Math.max(0,Math.min(1,(a-b)/(c-b))),a*a*(3-2*a)},smootherstep:function(a,b,c){return a=Math.max(0,Math.min(1,(a-b)/(c-b))),a*a*a*(a*(6*a-15)+10)},sign:function(a){return a<0?-1:a>0?1:0},percent:function(a,b,c){return void 0===c&&(c=0),a>b||c>b?1:a<c||c>a?0:(a-c)/b}};var k=Math.PI/180,l=180/Math.PI;return c.Math.degToRad=function(a){return a*k},c.Math.radToDeg=function(a){return a*l},c.RandomDataGenerator=function(a){void 0===a&&(a=[]),this.c=1,this.s0=0,this.s1=0,this.s2=0,"string"==typeof a?this.state(a):this.sow(a)},c.RandomDataGenerator.prototype={rnd:function(){var a=2091639*this.s0+2.3283064365386963e-10*this.c;return this.c=0|a,this.s0=this.s1,this.s1=this.s2,this.s2=a-this.c,this.s2},sow:function(a){if(this.s0=this.hash(" "),this.s1=this.hash(this.s0),this.s2=this.hash(this.s1),this.c=1,a)for(var b=0;b<a.length&&null!=a[b];b++){var c=a[b];this.s0-=this.hash(c),this.s0+=~~(this.s0<0),this.s1-=this.hash(c),this.s1+=~~(this.s1<0),this.s2-=this.hash(c),this.s2+=~~(this.s2<0)}},hash:function(a){var b,c,d;for(d=4022871197,a=a.toString(),c=0;c<a.length;c++)d+=a.charCodeAt(c),b=.02519603282416938*d,d=b>>>0,b-=d,b*=d,d=b>>>0,b-=d,d+=4294967296*b;return 2.3283064365386963e-10*(d>>>0)},integer:function(){return 4294967296*this.rnd.apply(this)},frac:function(){return this.rnd.apply(this)+1.1102230246251565e-16*(2097152*this.rnd.apply(this)|0)},real:function(){return this.integer()+this.frac()},integerInRange:function(a,b){return Math.floor(this.realInRange(0,b-a+1)+a)},between:function(a,b){return this.integerInRange(a,b)},realInRange:function(a,b){return this.frac()*(b-a)+a},normal:function(){return 1-2*this.frac()},uuid:function(){var a="",b="";for(b=a="";a++<36;b+=~a%5|3*a&4?(15^a?8^this.frac()*(20^a?16:4):4).toString(16):"-");return b},pick:function(a){return a[this.integerInRange(0,a.length-1)]},sign:function(){return this.pick([-1,1])},weightedPick:function(a){return a[~~(Math.pow(this.frac(),2)*(a.length-1)+.5)]},timestamp:function(a,b){return this.realInRange(a||9466848e5,b||1577862e6)},angle:function(){return this.integerInRange(-180,180)},state:function(a){return"string"==typeof a&&a.match(/^!rnd/)&&(a=a.split(","),this.c=parseFloat(a[1]),this.s0=parseFloat(a[2]),this.s1=parseFloat(a[3]),this.s2=parseFloat(a[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")}},c.RandomDataGenerator.prototype.constructor=c.RandomDataGenerator,c.QuadTree=function(a,b,c,d,e,f,g){this.maxObjects=10,this.maxLevels=4,this.level=0,this.bounds={},this.objects=[],this.nodes=[],this._empty=[],this.reset(a,b,c,d,e,f,g)},c.QuadTree.prototype={reset:function(a,b,c,d,e,f,g){this.maxObjects=e||10,this.maxLevels=f||4,this.level=g||0,this.bounds={x:Math.round(a),y:Math.round(b),width:c,height:d,subWidth:Math.floor(c/2),subHeight:Math.floor(d/2),right:Math.round(a)+Math.floor(c/2),bottom:Math.round(b)+Math.floor(d/2)},this.objects.length=0,this.nodes.length=0},populate:function(a){a.forEach(this.populateHandler,this,!0)},populateHandler:function(a){a.body&&a.exists&&this.insert(a.body)},split:function(){this.nodes[0]=new c.QuadTree(this.bounds.right,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1),this.nodes[1]=new c.QuadTree(this.bounds.x,this.bounds.y,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1),this.nodes[2]=new c.QuadTree(this.bounds.x,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1),this.nodes[3]=new c.QuadTree(this.bounds.right,this.bounds.bottom,this.bounds.subWidth,this.bounds.subHeight,this.maxObjects,this.maxLevels,this.level+1)},insert:function(a){var b,c=0;if(null!=this.nodes[0]&&(b=this.getIndex(a),b!==-1))return void this.nodes[b].insert(a);if(this.objects.push(a),this.objects.length>this.maxObjects&&this.level<this.maxLevels)for(null==this.nodes[0]&&this.split();c<this.objects.length;)b=this.getIndex(this.objects[c]),b!==-1?this.nodes[b].insert(this.objects.splice(c,1)[0]):c++},getIndex:function(a){var b=-1;return a.x<this.bounds.right&&a.right<this.bounds.right?a.y<this.bounds.bottom&&a.bottom<this.bounds.bottom?b=1:a.y>this.bounds.bottom&&(b=2):a.x>this.bounds.right&&(a.y<this.bounds.bottom&&a.bottom<this.bounds.bottom?b=0:a.y>this.bounds.bottom&&(b=3)),b},retrieve:function(a){if(a instanceof c.Rectangle)var b=this.objects,d=this.getIndex(a);else{if(!a.body)return this._empty;var b=this.objects,d=this.getIndex(a.body)}return this.nodes[0]&&(d!==-1?b=b.concat(this.nodes[d].retrieve(a)):(b=b.concat(this.nodes[0].retrieve(a)),b=b.concat(this.nodes[1].retrieve(a)),b=b.concat(this.nodes[2].retrieve(a)),b=b.concat(this.nodes[3].retrieve(a)))),b},clear:function(){this.objects.length=0;for(var a=this.nodes.length;a--;)this.nodes[a].clear(),this.nodes.splice(a,1);this.nodes.length=0}},c.QuadTree.prototype.constructor=c.QuadTree,c.Net=function(a){this.game=a},c.Net.prototype={getHostName:function(){return window.location&&window.location.hostname?window.location.hostname:null},checkDomainName:function(a){return window.location.hostname.indexOf(a)!==-1},updateQueryString:function(a,b,c,d){void 0===c&&(c=!1),void 0!==d&&""!==d||(d=window.location.href);var e="",f=new RegExp("([?|&])"+a+"=.*?(&|#|$)(.*)","gi");if(f.test(d))e="undefined"!=typeof b&&null!==b?d.replace(f,"$1"+a+"="+b+"$2$3"):d.replace(f,"$1$3").replace(/(&|\?)$/,"");else if("undefined"!=typeof b&&null!==b){var g=d.indexOf("?")!==-1?"&":"?",h=d.split("#");d=h[0]+g+a+"="+b,h[1]&&(d+="#"+h[1]),e=d}else e=d;return c?void(window.location.href=e):e},getQueryString:function(a){void 0===a&&(a="");var b={},c=location.search.substring(1).split("&");for(var d in c){var e=c[d].split("=");if(e.length>1){if(a&&a===this.decodeURI(e[0]))return this.decodeURI(e[1]);b[this.decodeURI(e[0])]=this.decodeURI(e[1])}}return b},decodeURI:function(a){return decodeURIComponent(a.replace(/\+/g," "))}},c.Net.prototype.constructor=c.Net,c.TweenManager=function(a){this.game=a,this.frameBased=!1,this._tweens=[],this._add=[],this.easeMap={Power0:c.Easing.Power0,Power1:c.Easing.Power1,Power2:c.Easing.Power2,Power3:c.Easing.Power3,Power4:c.Easing.Power4,Linear:c.Easing.Linear.None,Quad:c.Easing.Quadratic.Out,Cubic:c.Easing.Cubic.Out,Quart:c.Easing.Quartic.Out,Quint:c.Easing.Quintic.Out,Sine:c.Easing.Sinusoidal.Out,Expo:c.Easing.Exponential.Out,Circ:c.Easing.Circular.Out,Elastic:c.Easing.Elastic.Out,Back:c.Easing.Back.Out,Bounce:c.Easing.Bounce.Out,"Quad.easeIn":c.Easing.Quadratic.In,"Cubic.easeIn":c.Easing.Cubic.In,"Quart.easeIn":c.Easing.Quartic.In,"Quint.easeIn":c.Easing.Quintic.In,"Sine.easeIn":c.Easing.Sinusoidal.In,"Expo.easeIn":c.Easing.Exponential.In,"Circ.easeIn":c.Easing.Circular.In,"Elastic.easeIn":c.Easing.Elastic.In,"Back.easeIn":c.Easing.Back.In,"Bounce.easeIn":c.Easing.Bounce.In,"Quad.easeOut":c.Easing.Quadratic.Out,"Cubic.easeOut":c.Easing.Cubic.Out,"Quart.easeOut":c.Easing.Quartic.Out,"Quint.easeOut":c.Easing.Quintic.Out,"Sine.easeOut":c.Easing.Sinusoidal.Out,"Expo.easeOut":c.Easing.Exponential.Out,"Circ.easeOut":c.Easing.Circular.Out,"Elastic.easeOut":c.Easing.Elastic.Out,"Back.easeOut":c.Easing.Back.Out,"Bounce.easeOut":c.Easing.Bounce.Out,"Quad.easeInOut":c.Easing.Quadratic.InOut,"Cubic.easeInOut":c.Easing.Cubic.InOut,"Quart.easeInOut":c.Easing.Quartic.InOut,"Quint.easeInOut":c.Easing.Quintic.InOut,"Sine.easeInOut":c.Easing.Sinusoidal.InOut,"Expo.easeInOut":c.Easing.Exponential.InOut,"Circ.easeInOut":c.Easing.Circular.InOut,"Elastic.easeInOut":c.Easing.Elastic.InOut,"Back.easeInOut":c.Easing.Back.InOut,"Bounce.easeInOut":c.Easing.Bounce.InOut},this.game.onPause.add(this._pauseAll,this),this.game.onResume.add(this._resumeAll,this)},c.TweenManager.prototype={getAll:function(){return this._tweens},removeAll:function(){for(var a=0;a<this._tweens.length;a++)this._tweens[a].pendingDelete=!0;this._add=[]},removeFrom:function(a,b){void 0===b&&(b=!0);var d,e;if(Array.isArray(a))for(d=0,e=a.length;d<e;d++)this.removeFrom(a[d]);else if(a.type===c.GROUP&&b)for(var d=0,e=a.children.length;d<e;d++)this.removeFrom(a.children[d]);else{for(d=0,e=this._tweens.length;d<e;d++)a===this._tweens[d].target&&this.remove(this._tweens[d]);for(d=0,e=this._add.length;d<e;d++)a===this._add[d].target&&this.remove(this._add[d])}},add:function(a){a._manager=this,this._add.push(a)},create:function(a){return new c.Tween(a,this.game,this)},remove:function(a){var b=this._tweens.indexOf(a);b!==-1?this._tweens[b].pendingDelete=!0:(b=this._add.indexOf(a),b!==-1&&(this._add[b].pendingDelete=!0))},update:function(){var a=this._add.length,b=this._tweens.length;if(0===b&&0===a)return!1;for(var c=0;c<b;)this._tweens[c].update(this.game.time.time)?c++:(this._tweens.splice(c,1),b--);return a>0&&(this._tweens=this._tweens.concat(this._add),this._add.length=0),!0},isTweening:function(a){return this._tweens.some(function(b){return b.target===a})},_pauseAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a]._pause()},_resumeAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a]._resume()},pauseAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a].pause()},resumeAll:function(){for(var a=this._tweens.length-1;a>=0;a--)this._tweens[a].resume(!0)}},c.TweenManager.prototype.constructor=c.TweenManager,c.Tween=function(a,b,d){this.game=b,this.target=a,this.manager=d,this.timeline=[],this.reverse=!1,this.timeScale=1,this.repeatCounter=0,this.pendingDelete=!1,this.onStart=new c.Signal,this.onLoop=new c.Signal,this.onRepeat=new c.Signal,this.onChildComplete=new c.Signal,this.onComplete=new c.Signal,this.isRunning=!1,this.current=0,this.properties={},this.chainedTween=null,this.isPaused=!1,this.frameBased=d.frameBased,this._onUpdateCallback=null,this._onUpdateCallbackContext=null,this._pausedTime=0,this._codePaused=!1,this._hasStarted=!1},c.Tween.prototype={to:function(a,b,d,e,f,g,h){return(void 0===b||b<=0)&&(b=1e3),void 0!==d&&null!==d||(d=c.Easing.Default),void 0===e&&(e=!1),void 0===f&&(f=0),void 0===g&&(g=0),void 0===h&&(h=!1),"string"==typeof d&&this.manager.easeMap[d]&&(d=this.manager.easeMap[d]),this.isRunning?(console.warn("Phaser.Tween.to cannot be called after Tween.start"),this):(this.timeline.push(new c.TweenData(this).to(a,b,d,f,g,h)),e&&this.start(),this)},from:function(a,b,d,e,f,g,h){return void 0===b&&(b=1e3),void 0!==d&&null!==d||(d=c.Easing.Default),void 0===e&&(e=!1),void 0===f&&(f=0),void 0===g&&(g=0),void 0===h&&(h=!1),"string"==typeof d&&this.manager.easeMap[d]&&(d=this.manager.easeMap[d]),this.isRunning?(console.warn("Phaser.Tween.from cannot be called after Tween.start"),this):(this.timeline.push(new c.TweenData(this).from(a,b,d,f,g,h)),e&&this.start(),this)},start:function(a){if(void 0===a&&(a=0),null===this.game||null===this.target||0===this.timeline.length||this.isRunning)return this;for(var b=0;b<this.timeline.length;b++)for(var c in this.timeline[b].vEnd)this.properties[c]=this.target[c]||0,Array.isArray(this.properties[c])||(this.properties[c]*=1);for(var b=0;b<this.timeline.length;b++)this.timeline[b].loadValues();return this.manager.add(this),this.isRunning=!0,(a<0||a>this.timeline.length-1)&&(a=0),this.current=a,this.timeline[this.current].start(),this},stop:function(a){return void 0===a&&(a=!1),this.isRunning=!1,this._onUpdateCallback=null,this._onUpdateCallbackContext=null,a&&(this.onComplete.dispatch(this.target,this),this._hasStarted=!1,this.chainedTween&&this.chainedTween.start()),this.manager.remove(this),this},updateTweenData:function(a,b,c){if(0===this.timeline.length)return this;if(void 0===c&&(c=0),c===-1)for(var d=0;d<this.timeline.length;d++)this.timeline[d][a]=b;else this.timeline[c][a]=b;return this},delay:function(a,b){return this.updateTweenData("delay",a,b)},repeat:function(a,b,c){return void 0===b&&(b=0),this.updateTweenData("repeatCounter",a,c),this.updateTweenData("repeatDelay",b,c)},repeatDelay:function(a,b){return this.updateTweenData("repeatDelay",a,b)},yoyo:function(a,b,c){return void 0===b&&(b=0),this.updateTweenData("yoyo",a,c),this.updateTweenData("yoyoDelay",b,c)},yoyoDelay:function(a,b){return this.updateTweenData("yoyoDelay",a,b)},easing:function(a,b){return"string"==typeof a&&this.manager.easeMap[a]&&(a=this.manager.easeMap[a]),this.updateTweenData("easingFunction",a,b)},interpolation:function(a,b,d){return void 0===b&&(b=c.Math),this.updateTweenData("interpolationFunction",a,d),this.updateTweenData("interpolationContext",b,d)},repeatAll:function(a){return void 0===a&&(a=0),this.repeatCounter=a,this},chain:function(){for(var a=arguments.length;a--;)a>0?arguments[a-1].chainedTween=arguments[a]:this.chainedTween=arguments[a];return this},loop:function(a){return void 0===a&&(a=!0),this.repeatCounter=a?-1:0,this},onUpdateCallback:function(a,b){return this._onUpdateCallback=a,this._onUpdateCallbackContext=b,this},pause:function(){this.isPaused=!0,this._codePaused=!0,this._pausedTime=this.game.time.time},_pause:function(){this._codePaused||(this.isPaused=!0,this._pausedTime=this.game.time.time)},resume:function(){if(this.isPaused){this.isPaused=!1,this._codePaused=!1;for(var a=0;a<this.timeline.length;a++)this.timeline[a].isRunning||(this.timeline[a].startTime+=this.game.time.time-this._pausedTime)}},_resume:function(){this._codePaused||this.resume()},update:function(a){if(this.pendingDelete||!this.target)return!1;if(this.isPaused)return!0;var b=this.timeline[this.current].update(a);if(b===c.TweenData.PENDING)return!0;if(b===c.TweenData.RUNNING)return this._hasStarted||(this.onStart.dispatch(this.target,this),this._hasStarted=!0),null!==this._onUpdateCallback&&this._onUpdateCallback.call(this._onUpdateCallbackContext,this,this.timeline[this.current].value,this.timeline[this.current]),this.isRunning;if(b===c.TweenData.LOOPED)return this.timeline[this.current].repeatCounter===-1?this.onLoop.dispatch(this.target,this):this.onRepeat.dispatch(this.target,this),!0;if(b===c.TweenData.COMPLETE){var d=!1;return this.reverse?(this.current--,this.current<0&&(this.current=this.timeline.length-1,d=!0)):(this.current++,this.current===this.timeline.length&&(this.current=0,d=!0)),d?this.repeatCounter===-1?(this.timeline[this.current].start(),this.onLoop.dispatch(this.target,this),!0):this.repeatCounter>0?(this.repeatCounter--,this.timeline[this.current].start(),this.onRepeat.dispatch(this.target,this),!0):(this.isRunning=!1,this.onComplete.dispatch(this.target,this),this._hasStarted=!1,this.chainedTween&&this.chainedTween.start(),!1):(this.onChildComplete.dispatch(this.target,this),this.timeline[this.current].start(),!0)}},generateData:function(a,b){if(null===this.game||null===this.target)return null;void 0===a&&(a=60),void 0===b&&(b=[]);for(var c=0;c<this.timeline.length;c++)for(var d in this.timeline[c].vEnd)this.properties[d]=this.target[d]||0,Array.isArray(this.properties[d])||(this.properties[d]*=1);for(var c=0;c<this.timeline.length;c++)this.timeline[c].loadValues();for(var c=0;c<this.timeline.length;c++)b=b.concat(this.timeline[c].generateData(a));return b}},Object.defineProperty(c.Tween.prototype,"totalDuration",{get:function(){for(var a=0,b=0;b<this.timeline.length;b++)a+=this.timeline[b].duration;return a}}),c.Tween.prototype.constructor=c.Tween,c.TweenData=function(a){this.parent=a,this.game=a.game,this.vStart={},this.vStartCache={},this.vEnd={},this.vEndCache={},this.duration=1e3,this.percent=0,this.value=0,this.repeatCounter=0,this.repeatDelay=0,this.repeatTotal=0,this.interpolate=!1,this.yoyo=!1,this.yoyoDelay=0,this.inReverse=!1,this.delay=0,this.dt=0,this.startTime=null,this.easingFunction=c.Easing.Default,this.interpolationFunction=c.Math.linearInterpolation,this.interpolationContext=c.Math,this.isRunning=!1,this.isFrom=!1},c.TweenData.PENDING=0,c.TweenData.RUNNING=1,c.TweenData.LOOPED=2,c.TweenData.COMPLETE=3,c.TweenData.prototype={to:function(a,b,c,d,e,f){return this.vEnd=a,this.duration=b,this.easingFunction=c,this.delay=d,this.repeatTotal=e,this.yoyo=f,this.isFrom=!1,this},from:function(a,b,c,d,e,f){return this.vEnd=a,this.duration=b,this.easingFunction=c,this.delay=d,this.repeatTotal=e,this.yoyo=f,this.isFrom=!0,this},start:function(){if(this.startTime=this.game.time.time+this.delay,this.parent.reverse?this.dt=this.duration:this.dt=0,this.delay>0?this.isRunning=!1:this.isRunning=!0,this.isFrom)for(var a in this.vStartCache)this.vStart[a]=this.vEndCache[a],this.vEnd[a]=this.vStartCache[a],this.parent.target[a]=this.vStart[a];return this.value=0,this.yoyoCounter=0,this.repeatCounter=this.repeatTotal,this},loadValues:function(){for(var a in this.parent.properties){if(this.vStart[a]=this.parent.properties[a],Array.isArray(this.vEnd[a])){if(0===this.vEnd[a].length)continue;0===this.percent&&(this.vEnd[a]=[this.vStart[a]].concat(this.vEnd[a]));
	}"undefined"!=typeof this.vEnd[a]?("string"==typeof this.vEnd[a]&&(this.vEnd[a]=this.vStart[a]+parseFloat(this.vEnd[a],10)),this.parent.properties[a]=this.vEnd[a]):this.vEnd[a]=this.vStart[a],this.vStartCache[a]=this.vStart[a],this.vEndCache[a]=this.vEnd[a]}return this},update:function(a){if(this.isRunning){if(a<this.startTime)return c.TweenData.RUNNING}else{if(!(a>=this.startTime))return c.TweenData.PENDING;this.isRunning=!0}var b=this.parent.frameBased?this.game.time.physicsElapsedMS:this.game.time.elapsedMS;this.parent.reverse?(this.dt-=b*this.parent.timeScale,this.dt=Math.max(this.dt,0)):(this.dt+=b*this.parent.timeScale,this.dt=Math.min(this.dt,this.duration)),this.percent=this.dt/this.duration,this.value=this.easingFunction(this.percent);for(var d in this.vEnd){var e=this.vStart[d],f=this.vEnd[d];Array.isArray(f)?this.parent.target[d]=this.interpolationFunction.call(this.interpolationContext,f,this.value):this.parent.target[d]=e+(f-e)*this.value}return!this.parent.reverse&&1===this.percent||this.parent.reverse&&0===this.percent?this.repeat():c.TweenData.RUNNING},generateData:function(a){this.parent.reverse?this.dt=this.duration:this.dt=0;var b=[],c=!1,d=1/a*1e3;do{this.parent.reverse?(this.dt-=d,this.dt=Math.max(this.dt,0)):(this.dt+=d,this.dt=Math.min(this.dt,this.duration)),this.percent=this.dt/this.duration,this.value=this.easingFunction(this.percent);var e={};for(var f in this.vEnd){var g=this.vStart[f],h=this.vEnd[f];Array.isArray(h)?e[f]=this.interpolationFunction(h,this.value):e[f]=g+(h-g)*this.value}b.push(e),(!this.parent.reverse&&1===this.percent||this.parent.reverse&&0===this.percent)&&(c=!0)}while(!c);if(this.yoyo){var i=b.slice();i.reverse(),b=b.concat(i)}return b},repeat:function(){if(this.yoyo){if(this.inReverse&&0===this.repeatCounter){for(var a in this.vStartCache)this.vStart[a]=this.vStartCache[a],this.vEnd[a]=this.vEndCache[a];return this.inReverse=!1,c.TweenData.COMPLETE}this.inReverse=!this.inReverse}else if(0===this.repeatCounter)return c.TweenData.COMPLETE;if(this.inReverse)for(var a in this.vStartCache)this.vStart[a]=this.vEndCache[a],this.vEnd[a]=this.vStartCache[a];else{for(var a in this.vStartCache)this.vStart[a]=this.vStartCache[a],this.vEnd[a]=this.vEndCache[a];this.repeatCounter>0&&this.repeatCounter--}return this.startTime=this.game.time.time,this.yoyo&&this.inReverse?this.startTime+=this.yoyoDelay:this.inReverse||(this.startTime+=this.repeatDelay),this.parent.reverse?this.dt=this.duration:this.dt=0,c.TweenData.LOOPED}},c.TweenData.prototype.constructor=c.TweenData,c.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return(a*=2)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 0===a?0:1===a?1:1-Math.cos(a*Math.PI/2)},Out:function(a){return 0===a?0:1===a?1:Math.sin(a*Math.PI/2)},InOut:function(a){return 0===a?0:1===a?1:.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:(a*=2)<1?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||c<1?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),-(c*Math.pow(2,10*(a-=1))*Math.sin((a-b)*(2*Math.PI)/d)))},Out:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||c<1?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),c*Math.pow(2,-10*a)*Math.sin((a-b)*(2*Math.PI)/d)+1)},InOut:function(a){var b,c=.1,d=.4;return 0===a?0:1===a?1:(!c||c<1?(c=1,b=d/4):b=d*Math.asin(1/c)/(2*Math.PI),(a*=2)<1?-.5*(c*Math.pow(2,10*(a-=1))*Math.sin((a-b)*(2*Math.PI)/d)):c*Math.pow(2,-10*(a-=1))*Math.sin((a-b)*(2*Math.PI)/d)*.5+1)}},Back:{In:function(a){var b=1.70158;return a*a*((b+1)*a-b)},Out:function(a){var b=1.70158;return--a*a*((b+1)*a+b)+1},InOut:function(a){var b=2.5949095;return(a*=2)<1?.5*(a*a*((b+1)*a-b)):.5*((a-=2)*a*((b+1)*a+b)+2)}},Bounce:{In:function(a){return 1-c.Easing.Bounce.Out(1-a)},Out:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(a){return a<.5?.5*c.Easing.Bounce.In(2*a):.5*c.Easing.Bounce.Out(2*a-1)+.5}}},c.Easing.Default=c.Easing.Linear.None,c.Easing.Power0=c.Easing.Linear.None,c.Easing.Power1=c.Easing.Quadratic.Out,c.Easing.Power2=c.Easing.Cubic.Out,c.Easing.Power3=c.Easing.Quartic.Out,c.Easing.Power4=c.Easing.Quintic.Out,c.Time=function(a){this.game=a,this.time=0,this.prevTime=0,this.now=0,this.elapsed=0,this.elapsedMS=0,this.physicsElapsed=1/60,this.physicsElapsedMS=1/60*1e3,this.desiredFpsMult=1/60,this._desiredFps=60,this.suggestedFps=this.desiredFps,this.slowMotion=1,this.advancedTiming=!1,this.frames=0,this.fps=0,this.fpsMin=1e3,this.fpsMax=0,this.msMin=1e3,this.msMax=0,this.pauseDuration=0,this.timeToCall=0,this.timeExpected=0,this.events=new c.Timer(this.game,(!1)),this._frameCount=0,this._elapsedAccumulator=0,this._started=0,this._timeLastSecond=0,this._pauseStarted=0,this._justResumed=!1,this._timers=[]},c.Time.prototype={boot:function(){this._started=Date.now(),this.time=Date.now(),this.events.start(),this.timeExpected=this.time},add:function(a){return this._timers.push(a),a},create:function(a){void 0===a&&(a=!0);var b=new c.Timer(this.game,a);return this._timers.push(b),b},removeAll:function(){for(var a=0;a<this._timers.length;a++)this._timers[a].destroy();this._timers=[],this.events.removeAll()},refresh:function(){var a=this.time;this.time=Date.now(),this.elapsedMS=this.time-a},update:function(a){var b=this.time;this.time=Date.now(),this.elapsedMS=this.time-b,this.prevTime=this.now,this.now=a,this.elapsed=this.now-this.prevTime,this.game.raf._isSetTimeOut&&(this.timeToCall=Math.floor(Math.max(0,1e3/this._desiredFps-(this.timeExpected-a))),this.timeExpected=a+this.timeToCall),this.advancedTiming&&this.updateAdvancedTiming(),this.game.paused||(this.events.update(this.time),this._timers.length&&this.updateTimers())},updateTimers:function(){for(var a=0,b=this._timers.length;a<b;)this._timers[a].update(this.time)?a++:(this._timers.splice(a,1),b--)},updateAdvancedTiming:function(){this._frameCount++,this._elapsedAccumulator+=this.elapsed,this._frameCount>=2*this._desiredFps&&(this.suggestedFps=5*Math.floor(200/(this._elapsedAccumulator/this._frameCount)),this._frameCount=0,this._elapsedAccumulator=0),this.msMin=Math.min(this.msMin,this.elapsed),this.msMax=Math.max(this.msMax,this.elapsed),this.frames++,this.now>this._timeLastSecond+1e3&&(this.fps=Math.round(1e3*this.frames/(this.now-this._timeLastSecond)),this.fpsMin=Math.min(this.fpsMin,this.fps),this.fpsMax=Math.max(this.fpsMax,this.fps),this._timeLastSecond=this.now,this.frames=0)},gamePaused:function(){this._pauseStarted=Date.now(),this.events.pause();for(var a=this._timers.length;a--;)this._timers[a]._pause()},gameResumed:function(){this.time=Date.now(),this.pauseDuration=this.time-this._pauseStarted,this.events.resume();for(var a=this._timers.length;a--;)this._timers[a]._resume()},totalElapsedSeconds:function(){return.001*(this.time-this._started)},elapsedSince:function(a){return this.time-a},elapsedSecondsSince:function(a){return.001*(this.time-a)},reset:function(){this._started=this.time,this.removeAll()}},Object.defineProperty(c.Time.prototype,"desiredFps",{get:function(){return this._desiredFps},set:function(a){this._desiredFps=a,this.physicsElapsed=1/a,this.physicsElapsedMS=1e3*this.physicsElapsed,this.desiredFpsMult=1/a}}),c.Time.prototype.constructor=c.Time,c.Timer=function(a,b){void 0===b&&(b=!0),this.game=a,this.running=!1,this.autoDestroy=b,this.expired=!1,this.elapsed=0,this.events=[],this.onComplete=new c.Signal,this.nextTick=0,this.timeCap=1e3,this.paused=!1,this._codePaused=!1,this._started=0,this._pauseStarted=0,this._pauseTotal=0,this._now=Date.now(),this._len=0,this._marked=0,this._i=0,this._diff=0,this._newTick=0},c.Timer.MINUTE=6e4,c.Timer.SECOND=1e3,c.Timer.HALF=500,c.Timer.QUARTER=250,c.Timer.prototype={create:function(a,b,d,e,f,g){a=Math.round(a);var h=a;h+=0===this._now?this.game.time.time:this._now;var i=new c.TimerEvent(this,a,h,d,b,e,f,g);return this.events.push(i),this.order(),this.expired=!1,i},add:function(a,b,c){return this.create(a,!1,0,b,c,Array.prototype.slice.call(arguments,3))},repeat:function(a,b,c,d){return this.create(a,!1,b,c,d,Array.prototype.slice.call(arguments,4))},loop:function(a,b,c){return this.create(a,!0,0,b,c,Array.prototype.slice.call(arguments,3))},start:function(a){if(!this.running){this._started=this.game.time.time+(a||0),this.running=!0;for(var b=0;b<this.events.length;b++)this.events[b].tick=this.events[b].delay+this._started}},stop:function(a){this.running=!1,void 0===a&&(a=!0),a&&(this.events.length=0)},remove:function(a){for(var b=0;b<this.events.length;b++)if(this.events[b]===a)return this.events[b].pendingDelete=!0,!0;return!1},order:function(){this.events.length>0&&(this.events.sort(this.sortHandler),this.nextTick=this.events[0].tick)},sortHandler:function(a,b){return a.tick<b.tick?-1:a.tick>b.tick?1:0},clearPendingEvents:function(){for(this._i=this.events.length;this._i--;)this.events[this._i].pendingDelete&&this.events.splice(this._i,1);this._len=this.events.length,this._i=0},update:function(a){if(this.paused)return!0;if(this.elapsed=a-this._now,this._now=a,this.elapsed>this.timeCap&&this.adjustEvents(a-this.elapsed),this._marked=0,this.clearPendingEvents(),this.running&&this._now>=this.nextTick&&this._len>0){for(;this._i<this._len&&this.running&&this._now>=this.events[this._i].tick&&!this.events[this._i].pendingDelete;)this._newTick=this._now+this.events[this._i].delay-(this._now-this.events[this._i].tick),this._newTick<0&&(this._newTick=this._now+this.events[this._i].delay),this.events[this._i].loop===!0?(this.events[this._i].tick=this._newTick,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)):this.events[this._i].repeatCount>0?(this.events[this._i].repeatCount--,this.events[this._i].tick=this._newTick,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)):(this._marked++,this.events[this._i].pendingDelete=!0,this.events[this._i].callback.apply(this.events[this._i].callbackContext,this.events[this._i].args)),this._i++;this.events.length>this._marked?this.order():(this.expired=!0,this.onComplete.dispatch(this))}return!this.expired||!this.autoDestroy},pause:function(){this.running&&(this._codePaused=!0,this.paused||(this._pauseStarted=this.game.time.time,this.paused=!0))},_pause:function(){!this.paused&&this.running&&(this._pauseStarted=this.game.time.time,this.paused=!0)},adjustEvents:function(a){for(var b=0;b<this.events.length;b++)if(!this.events[b].pendingDelete){var c=this.events[b].tick-a;c<0&&(c=0),this.events[b].tick=this._now+c}var d=this.nextTick-a;d<0?this.nextTick=this._now:this.nextTick=this._now+d},resume:function(){if(this.paused){var a=this.game.time.time;this._pauseTotal+=a-this._now,this._now=a,this.adjustEvents(this._pauseStarted),this.paused=!1,this._codePaused=!1}},_resume:function(){this._codePaused||this.resume()},removeAll:function(){this.onComplete.removeAll(),this.events.length=0,this._len=0,this._i=0},destroy:function(){this.onComplete.removeAll(),this.running=!1,this.events=[],this._len=0,this._i=0}},Object.defineProperty(c.Timer.prototype,"next",{get:function(){return this.nextTick}}),Object.defineProperty(c.Timer.prototype,"duration",{get:function(){return this.running&&this.nextTick>this._now?this.nextTick-this._now:0}}),Object.defineProperty(c.Timer.prototype,"length",{get:function(){return this.events.length}}),Object.defineProperty(c.Timer.prototype,"ms",{get:function(){return this.running?this._now-this._started-this._pauseTotal:0}}),Object.defineProperty(c.Timer.prototype,"seconds",{get:function(){return this.running?.001*this.ms:0}}),c.Timer.prototype.constructor=c.Timer,c.TimerEvent=function(a,b,c,d,e,f,g,h){this.timer=a,this.delay=b,this.tick=c,this.repeatCount=d-1,this.loop=e,this.callback=f,this.callbackContext=g,this.args=h,this.pendingDelete=!1},c.TimerEvent.prototype.constructor=c.TimerEvent,c.AnimationManager=function(a){this.sprite=a,this.game=a.game,this.currentFrame=null,this.currentAnim=null,this.updateIfVisible=!0,this.isLoaded=!1,this._frameData=null,this._anims={},this._outputFrames=[]},c.AnimationManager.prototype={loadFrameData:function(a,b){if(void 0===a)return!1;if(this.isLoaded)for(var c in this._anims)this._anims[c].updateFrameData(a);return this._frameData=a,void 0===b||null===b?this.frame=0:"string"==typeof b?this.frameName=b:this.frame=b,this.isLoaded=!0,!0},copyFrameData:function(a,b){if(this._frameData=a.clone(),this.isLoaded)for(var c in this._anims)this._anims[c].updateFrameData(this._frameData);return void 0===b||null===b?this.frame=0:"string"==typeof b?this.frameName=b:this.frame=b,this.isLoaded=!0,!0},add:function(a,b,d,e,f){return b=b||[],d=d||60,void 0===e&&(e=!1),void 0===f&&(f=!(!b||"number"!=typeof b[0])),this._outputFrames=[],this._frameData.getFrameIndexes(b,f,this._outputFrames),this._anims[a]=new c.Animation(this.game,this.sprite,a,this._frameData,this._outputFrames,d,e),this.currentAnim=this._anims[a],this.sprite.tilingTexture&&(this.sprite.refreshTexture=!0),this._anims[a]},validateFrames:function(a,b){void 0===b&&(b=!0);for(var c=0;c<a.length;c++)if(b===!0){if(a[c]>this._frameData.total)return!1}else if(this._frameData.checkFrameName(a[c])===!1)return!1;return!0},play:function(a,b,c,d){if(this._anims[a])return this.currentAnim===this._anims[a]?this.currentAnim.isPlaying===!1?(this.currentAnim.paused=!1,this.currentAnim.play(b,c,d)):this.currentAnim:(this.currentAnim&&this.currentAnim.isPlaying&&this.currentAnim.stop(),this.currentAnim=this._anims[a],this.currentAnim.paused=!1,this.currentFrame=this.currentAnim.currentFrame,this.currentAnim.play(b,c,d))},stop:function(a,b){void 0===b&&(b=!1),!this.currentAnim||"string"==typeof a&&a!==this.currentAnim.name||this.currentAnim.stop(b)},update:function(){return!(this.updateIfVisible&&!this.sprite.visible)&&(!(!this.currentAnim||!this.currentAnim.update())&&(this.currentFrame=this.currentAnim.currentFrame,!0))},next:function(a){this.currentAnim&&(this.currentAnim.next(a),this.currentFrame=this.currentAnim.currentFrame)},previous:function(a){this.currentAnim&&(this.currentAnim.previous(a),this.currentFrame=this.currentAnim.currentFrame)},getAnimation:function(a){return"string"==typeof a&&this._anims[a]?this._anims[a]:null},refreshFrame:function(){},destroy:function(){var a=null;for(var a in this._anims)this._anims.hasOwnProperty(a)&&this._anims[a].destroy();this._anims={},this._outputFrames=[],this._frameData=null,this.currentAnim=null,this.currentFrame=null,this.sprite=null,this.game=null}},c.AnimationManager.prototype.constructor=c.AnimationManager,Object.defineProperty(c.AnimationManager.prototype,"frameData",{get:function(){return this._frameData}}),Object.defineProperty(c.AnimationManager.prototype,"frameTotal",{get:function(){return this._frameData.total}}),Object.defineProperty(c.AnimationManager.prototype,"paused",{get:function(){return this.currentAnim.isPaused},set:function(a){this.currentAnim.paused=a}}),Object.defineProperty(c.AnimationManager.prototype,"name",{get:function(){if(this.currentAnim)return this.currentAnim.name}}),Object.defineProperty(c.AnimationManager.prototype,"frame",{get:function(){if(this.currentFrame)return this.currentFrame.index},set:function(a){"number"==typeof a&&this._frameData&&null!==this._frameData.getFrame(a)&&(this.currentFrame=this._frameData.getFrame(a),this.currentFrame&&this.sprite.setFrame(this.currentFrame))}}),Object.defineProperty(c.AnimationManager.prototype,"frameName",{get:function(){if(this.currentFrame)return this.currentFrame.name},set:function(a){"string"==typeof a&&this._frameData&&null!==this._frameData.getFrameByName(a)?(this.currentFrame=this._frameData.getFrameByName(a),this.currentFrame&&(this._frameIndex=this.currentFrame.index,this.sprite.setFrame(this.currentFrame))):console.warn("Cannot set frameName: "+a)}}),c.Animation=function(a,b,d,e,f,g,h){void 0===h&&(h=!1),this.game=a,this._parent=b,this._frameData=e,this.name=d,this._frames=[],this._frames=this._frames.concat(f),this.delay=1e3/g,this.loop=h,this.loopCount=0,this.killOnComplete=!1,this.isFinished=!1,this.isPlaying=!1,this.isPaused=!1,this._pauseStartTime=0,this._frameIndex=0,this._frameDiff=0,this._frameSkip=1,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.onStart=new c.Signal,this.onUpdate=null,this.onComplete=new c.Signal,this.onLoop=new c.Signal,this.isReversed=!1,this.game.onPause.add(this.onPause,this),this.game.onResume.add(this.onResume,this)},c.Animation.prototype={play:function(a,b,c){return"number"==typeof a&&(this.delay=1e3/a),"boolean"==typeof b&&(this.loop=b),"undefined"!=typeof c&&(this.killOnComplete=c),this.isPlaying=!0,this.isFinished=!1,this.paused=!1,this.loopCount=0,this._timeLastFrame=this.game.time.time,this._timeNextFrame=this.game.time.time+this.delay,this._frameIndex=this.isReversed?this._frames.length-1:0,this.updateCurrentFrame(!1,!0),this._parent.events.onAnimationStart$dispatch(this._parent,this),this.onStart.dispatch(this._parent,this),this._parent.animations.currentAnim=this,this._parent.animations.currentFrame=this.currentFrame,this},restart:function(){this.isPlaying=!0,this.isFinished=!1,this.paused=!1,this.loopCount=0,this._timeLastFrame=this.game.time.time,this._timeNextFrame=this.game.time.time+this.delay,this._frameIndex=0,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this._parent.setFrame(this.currentFrame),this._parent.animations.currentAnim=this,this._parent.animations.currentFrame=this.currentFrame,this.onStart.dispatch(this._parent,this)},reverse:function(){return this.reversed=!this.reversed,this},reverseOnce:function(){return this.onComplete.addOnce(this.reverse,this),this.reverse()},setFrame:function(a,b){var c;if(void 0===b&&(b=!1),"string"==typeof a)for(var d=0;d<this._frames.length;d++)this._frameData.getFrame(this._frames[d]).name===a&&(c=d);else if("number"==typeof a)if(b)c=a;else for(var d=0;d<this._frames.length;d++)this._frames[d]===a&&(c=d);c&&(this._frameIndex=c-1,this._timeNextFrame=this.game.time.time,this.update())},stop:function(a,b){void 0===a&&(a=!1),void 0===b&&(b=!1),this.isPlaying=!1,this.isFinished=!0,this.paused=!1,a&&(this.currentFrame=this._frameData.getFrame(this._frames[0]),this._parent.setFrame(this.currentFrame)),b&&(this._parent.events.onAnimationComplete$dispatch(this._parent,this),this.onComplete.dispatch(this._parent,this))},onPause:function(){this.isPlaying&&(this._frameDiff=this._timeNextFrame-this.game.time.time)},onResume:function(){this.isPlaying&&(this._timeNextFrame=this.game.time.time+this._frameDiff)},update:function(){return!this.isPaused&&(!!(this.isPlaying&&this.game.time.time>=this._timeNextFrame)&&(this._frameSkip=1,this._frameDiff=this.game.time.time-this._timeNextFrame,this._timeLastFrame=this.game.time.time,this._frameDiff>this.delay&&(this._frameSkip=Math.floor(this._frameDiff/this.delay),this._frameDiff-=this._frameSkip*this.delay),this._timeNextFrame=this.game.time.time+(this.delay-this._frameDiff),this.isReversed?this._frameIndex-=this._frameSkip:this._frameIndex+=this._frameSkip,!this.isReversed&&this._frameIndex>=this._frames.length||this.isReversed&&this._frameIndex<=-1?this.loop?(this._frameIndex=Math.abs(this._frameIndex)%this._frames.length,this.isReversed&&(this._frameIndex=this._frames.length-1-this._frameIndex),this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.currentFrame&&this._parent.setFrame(this.currentFrame),this.loopCount++,this._parent.events.onAnimationLoop$dispatch(this._parent,this),this.onLoop.dispatch(this._parent,this),!this.onUpdate||(this.onUpdate.dispatch(this,this.currentFrame),!!this._frameData)):(this.complete(),!1):this.updateCurrentFrame(!0)))},updateCurrentFrame:function(a,b){if(void 0===b&&(b=!1),!this._frameData)return!1;var c=this.currentFrame.index;return this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.currentFrame&&(b||!b&&c!==this.currentFrame.index)&&this._parent.setFrame(this.currentFrame),!this.onUpdate||!a||(this.onUpdate.dispatch(this,this.currentFrame),!!this._frameData)},next:function(a){void 0===a&&(a=1);var b=this._frameIndex+a;b>=this._frames.length&&(this.loop?b%=this._frames.length:b=this._frames.length-1),b!==this._frameIndex&&(this._frameIndex=b,this.updateCurrentFrame(!0))},previous:function(a){void 0===a&&(a=1);var b=this._frameIndex-a;b<0&&(this.loop?b=this._frames.length+b:b++),b!==this._frameIndex&&(this._frameIndex=b,this.updateCurrentFrame(!0))},updateFrameData:function(a){this._frameData=a,this.currentFrame=this._frameData?this._frameData.getFrame(this._frames[this._frameIndex%this._frames.length]):null},destroy:function(){this._frameData&&(this.game.onPause.remove(this.onPause,this),this.game.onResume.remove(this.onResume,this),this.game=null,this._parent=null,this._frames=null,this._frameData=null,this.currentFrame=null,this.isPlaying=!1,this.onStart.dispose(),this.onLoop.dispose(),this.onComplete.dispose(),this.onUpdate&&this.onUpdate.dispose())},complete:function(){this._frameIndex=this._frames.length-1,this.currentFrame=this._frameData.getFrame(this._frames[this._frameIndex]),this.isPlaying=!1,this.isFinished=!0,this.paused=!1,this._parent.events.onAnimationComplete$dispatch(this._parent,this),this.onComplete.dispatch(this._parent,this),this.killOnComplete&&this._parent.kill()}},c.Animation.prototype.constructor=c.Animation,Object.defineProperty(c.Animation.prototype,"paused",{get:function(){return this.isPaused},set:function(a){this.isPaused=a,a?this._pauseStartTime=this.game.time.time:this.isPlaying&&(this._timeNextFrame=this.game.time.time+this.delay)}}),Object.defineProperty(c.Animation.prototype,"reversed",{get:function(){return this.isReversed},set:function(a){this.isReversed=a}}),Object.defineProperty(c.Animation.prototype,"frameTotal",{get:function(){return this._frames.length}}),Object.defineProperty(c.Animation.prototype,"frame",{get:function(){return null!==this.currentFrame?this.currentFrame.index:this._frameIndex},set:function(a){this.currentFrame=this._frameData.getFrame(this._frames[a]),null!==this.currentFrame&&(this._frameIndex=a,this._parent.setFrame(this.currentFrame),this.onUpdate&&this.onUpdate.dispatch(this,this.currentFrame))}}),Object.defineProperty(c.Animation.prototype,"speed",{get:function(){return 1e3/this.delay},set:function(a){a>0&&(this.delay=1e3/a)}}),Object.defineProperty(c.Animation.prototype,"enableUpdate",{get:function(){return null!==this.onUpdate},set:function(a){a&&null===this.onUpdate?this.onUpdate=new c.Signal:a||null===this.onUpdate||(this.onUpdate.dispose(),this.onUpdate=null)}}),c.Animation.generateFrameNames=function(a,b,d,e,f){void 0===e&&(e="");var g=[],h="";if(b<d)for(var i=b;i<=d;i++)h="number"==typeof f?c.Utils.pad(i.toString(),f,"0",1):i.toString(),h=a+h+e,g.push(h);else for(var i=b;i>=d;i--)h="number"==typeof f?c.Utils.pad(i.toString(),f,"0",1):i.toString(),h=a+h+e,g.push(h);return g},c.Frame=function(a,b,d,e,f,g){this.index=a,this.x=b,this.y=d,this.width=e,this.height=f,this.name=g,this.centerX=Math.floor(e/2),this.centerY=Math.floor(f/2),this.distance=c.Math.distance(0,0,e,f),this.rotated=!1,this.rotationDirection="cw",this.trimmed=!1,this.sourceSizeW=e,this.sourceSizeH=f,this.spriteSourceSizeX=0,this.spriteSourceSizeY=0,this.spriteSourceSizeW=0,this.spriteSourceSizeH=0,this.right=this.x+this.width,this.bottom=this.y+this.height},c.Frame.prototype={resize:function(a,b){this.width=a,this.height=b,this.centerX=Math.floor(a/2),this.centerY=Math.floor(b/2),this.distance=c.Math.distance(0,0,a,b),this.sourceSizeW=a,this.sourceSizeH=b,this.right=this.x+a,this.bottom=this.y+b},setTrim:function(a,b,c,d,e,f,g){this.trimmed=a,a&&(this.sourceSizeW=b,this.sourceSizeH=c,this.centerX=Math.floor(b/2),this.centerY=Math.floor(c/2),this.spriteSourceSizeX=d,this.spriteSourceSizeY=e,this.spriteSourceSizeW=f,this.spriteSourceSizeH=g)},clone:function(){var a=new c.Frame(this.index,this.x,this.y,this.width,this.height,this.name);for(var b in this)this.hasOwnProperty(b)&&(a[b]=this[b]);return a},getRect:function(a){return void 0===a?a=new c.Rectangle(this.x,this.y,this.width,this.height):a.setTo(this.x,this.y,this.width,this.height),a}},c.Frame.prototype.constructor=c.Frame,c.FrameData=function(){this._frames=[],this._frameNames=[]},c.FrameData.prototype={addFrame:function(a){return a.index=this._frames.length,this._frames.push(a),""!==a.name&&(this._frameNames[a.name]=a.index),a},getFrame:function(a){return a>=this._frames.length&&(a=0),this._frames[a]},getFrameByName:function(a){return"number"==typeof this._frameNames[a]?this._frames[this._frameNames[a]]:null},checkFrameName:function(a){return null!=this._frameNames[a]},clone:function(){for(var a=new c.FrameData,b=0;b<this._frames.length;b++)a._frames.push(this._frames[b].clone());for(var d in this._frameNames)this._frameNames.hasOwnProperty(d)&&a._frameNames.push(this._frameNames[d]);return a},getFrameRange:function(a,b,c){void 0===c&&(c=[]);for(var d=a;d<=b;d++)c.push(this._frames[d]);return c},getFrames:function(a,b,c){if(void 0===b&&(b=!0),void 0===c&&(c=[]),void 0===a||0===a.length)for(var d=0;d<this._frames.length;d++)c.push(this._frames[d]);else for(var d=0;d<a.length;d++)b?c.push(this.getFrame(a[d])):c.push(this.getFrameByName(a[d]));return c},getFrameIndexes:function(a,b,c){if(void 0===b&&(b=!0),void 0===c&&(c=[]),void 0===a||0===a.length)for(var d=0;d<this._frames.length;d++)c.push(this._frames[d].index);else for(var d=0;d<a.length;d++)b&&this._frames[a[d]]?c.push(this._frames[a[d]].index):this.getFrameByName(a[d])&&c.push(this.getFrameByName(a[d]).index);return c},destroy:function(){this._frames=null,this._frameNames=null}},c.FrameData.prototype.constructor=c.FrameData,Object.defineProperty(c.FrameData.prototype,"total",{get:function(){return this._frames.length}}),c.AnimationParser={spriteSheet:function(a,b,d,e,f,g,h){var i=b;if("string"==typeof b&&(i=a.cache.getImage(b)),null===i)return null;var j=i.width,k=i.height;d<=0&&(d=Math.floor(-j/Math.min(-1,d))),e<=0&&(e=Math.floor(-k/Math.min(-1,e)));var l=Math.floor((j-g)/(d+h)),m=Math.floor((k-g)/(e+h)),n=l*m;if(f!==-1&&(n=f),0===j||0===k||j<d||k<e||0===n)return console.warn("Phaser.AnimationParser.spriteSheet: '"+b+"'s width/height zero or width/height < given frameWidth/frameHeight"),null;for(var o=new c.FrameData,p=g,q=g,r=0;r<n;r++)o.addFrame(new c.Frame(r,p,q,d,e,"")),p+=d+h,p+d>j&&(p=g,q+=e+h);return o},JSONData:function(a,b){if(!b.frames)return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"),void console.log(b);for(var d,e=new c.FrameData,f=b.frames,g=0;g<f.length;g++)d=e.addFrame(new c.Frame(g,f[g].frame.x,f[g].frame.y,f[g].frame.w,f[g].frame.h,f[g].filename)),f[g].trimmed&&d.setTrim(f[g].trimmed,f[g].sourceSize.w,f[g].sourceSize.h,f[g].spriteSourceSize.x,f[g].spriteSourceSize.y,f[g].spriteSourceSize.w,f[g].spriteSourceSize.h);return e},JSONDataPyxel:function(a,b){var d=["layers","tilewidth","tileheight","tileswide","tileshigh"];if(d.forEach(function(a){if(!b[a])return console.warn('Phaser.AnimationParser.JSONDataPyxel: Invalid Pyxel Tilemap JSON given, missing "'+a+'" key.'),void console.log(b)}),1!==b.layers.length)return console.warn("Phaser.AnimationParser.JSONDataPyxel: Too many layers, this parser only supports flat Tilemaps."),void console.log(b);for(var e,f=new c.FrameData,g=b.tileheight,h=b.tilewidth,i=b.layers[0].tiles,j=0;j<i.length;j++)e=f.addFrame(new c.Frame(j,i[j].x,i[j].y,h,g,"frame_"+j)),e.setTrim(!1);return f},JSONDataHash:function(a,b){if(!b.frames)return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"),void console.log(b);var d,e=new c.FrameData,f=b.frames,g=0;for(var h in f)d=e.addFrame(new c.Frame(g,f[h].frame.x,f[h].frame.y,f[h].frame.w,f[h].frame.h,h)),f[h].trimmed&&d.setTrim(f[h].trimmed,f[h].sourceSize.w,f[h].sourceSize.h,f[h].spriteSourceSize.x,f[h].spriteSourceSize.y,f[h].spriteSourceSize.w,f[h].spriteSourceSize.h),g++;return e},XMLData:function(a,b){if(!b.getElementsByTagName("TextureAtlas"))return void console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag");for(var d,e,f,g,h,i,j,k,l,m,n,o=new c.FrameData,p=b.getElementsByTagName("SubTexture"),q=0;q<p.length;q++)f=p[q].attributes,e=f.name.value,g=parseInt(f.x.value,10),h=parseInt(f.y.value,10),i=parseInt(f.width.value,10),j=parseInt(f.height.value,10),k=null,l=null,f.frameX&&(k=Math.abs(parseInt(f.frameX.value,10)),l=Math.abs(parseInt(f.frameY.value,10)),m=parseInt(f.frameWidth.value,10),n=parseInt(f.frameHeight.value,10)),d=o.addFrame(new c.Frame(q,g,h,i,j,e)),null===k&&null===l||d.setTrim(!0,i,j,k,l,m,n);return o}},c.Cache=function(a){this.game=a,this.autoResolveURL=!1,this._cache={canvas:{},image:{},texture:{},sound:{},video:{},text:{},json:{},xml:{},physics:{},tilemap:{},binary:{},bitmapData:{},bitmapFont:{},shader:{},renderTexture:{}},this._urlMap={},this._urlResolver=new Image,this._urlTemp=null,this.onSoundUnlock=new c.Signal,this._cacheMap=[],this._cacheMap[c.Cache.CANVAS]=this._cache.canvas,this._cacheMap[c.Cache.IMAGE]=this._cache.image,this._cacheMap[c.Cache.TEXTURE]=this._cache.texture,this._cacheMap[c.Cache.SOUND]=this._cache.sound,this._cacheMap[c.Cache.TEXT]=this._cache.text,this._cacheMap[c.Cache.PHYSICS]=this._cache.physics,this._cacheMap[c.Cache.TILEMAP]=this._cache.tilemap,this._cacheMap[c.Cache.BINARY]=this._cache.binary,this._cacheMap[c.Cache.BITMAPDATA]=this._cache.bitmapData,this._cacheMap[c.Cache.BITMAPFONT]=this._cache.bitmapFont,this._cacheMap[c.Cache.JSON]=this._cache.json,this._cacheMap[c.Cache.XML]=this._cache.xml,this._cacheMap[c.Cache.VIDEO]=this._cache.video,this._cacheMap[c.Cache.SHADER]=this._cache.shader,this._cacheMap[c.Cache.RENDER_TEXTURE]=this._cache.renderTexture,this.addDefaultImage(),this.addMissingImage()},c.Cache.CANVAS=1,c.Cache.IMAGE=2,c.Cache.TEXTURE=3,c.Cache.SOUND=4,c.Cache.TEXT=5,c.Cache.PHYSICS=6,c.Cache.TILEMAP=7,c.Cache.BINARY=8,c.Cache.BITMAPDATA=9,c.Cache.BITMAPFONT=10,c.Cache.JSON=11,c.Cache.XML=12,c.Cache.VIDEO=13,c.Cache.SHADER=14,c.Cache.RENDER_TEXTURE=15,c.Cache.DEFAULT=null,c.Cache.MISSING=null,c.Cache.prototype={addCanvas:function(a,b,c){void 0===c&&(c=b.getContext("2d")),this._cache.canvas[a]={canvas:b,context:c}},addImage:function(a,b,d){this.checkImageKey(a)&&this.removeImage(a);var e={key:a,url:b,data:d,base:new PIXI.BaseTexture(d),frame:new c.Frame(0,0,0,d.width,d.height,a),frameData:new c.FrameData};return e.frameData.addFrame(new c.Frame(0,0,0,d.width,d.height,b)),this._cache.image[a]=e,this._resolveURL(b,e),"__default"===a?c.Cache.DEFAULT=new PIXI.Texture(e.base):"__missing"===a&&(c.Cache.MISSING=new PIXI.Texture(e.base)),e},addDefaultImage:function(){var a=new Image;a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==";var b=this.addImage("__default",null,a);b.base.skipRender=!0,c.Cache.DEFAULT=new PIXI.Texture(b.base)},addMissingImage:function(){var a=new Image;a.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==";
	var b=this.addImage("__missing",null,a);c.Cache.MISSING=new PIXI.Texture(b.base)},addSound:function(a,b,c,d,e){void 0===d&&(d=!0,e=!1),void 0===e&&(d=!1,e=!0);var f=!1;e&&(f=!0),this._cache.sound[a]={url:b,data:c,isDecoding:!1,decoded:f,webAudio:d,audioTag:e,locked:this.game.sound.touchLocked},this._resolveURL(b,this._cache.sound[a])},addText:function(a,b,c){this._cache.text[a]={url:b,data:c},this._resolveURL(b,this._cache.text[a])},addPhysicsData:function(a,b,c,d){this._cache.physics[a]={url:b,data:c,format:d},this._resolveURL(b,this._cache.physics[a])},addTilemap:function(a,b,c,d){this._cache.tilemap[a]={url:b,data:c,format:d},this._resolveURL(b,this._cache.tilemap[a])},addBinary:function(a,b){this._cache.binary[a]=b},addBitmapData:function(a,b,d){return b.key=a,void 0===d&&(d=new c.FrameData,d.addFrame(b.textureFrame)),this._cache.bitmapData[a]={data:b,frameData:d},b},addBitmapFont:function(a,b,d,e,f,g,h){var i={url:b,data:d,font:null,base:new PIXI.BaseTexture(d)};void 0===g&&(g=0),void 0===h&&(h=0),"json"===f?i.font=c.LoaderParser.jsonBitmapFont(e,i.base,g,h):i.font=c.LoaderParser.xmlBitmapFont(e,i.base,g,h),this._cache.bitmapFont[a]=i,this._resolveURL(b,i)},addJSON:function(a,b,c){this._cache.json[a]={url:b,data:c},this._resolveURL(b,this._cache.json[a])},addXML:function(a,b,c){this._cache.xml[a]={url:b,data:c},this._resolveURL(b,this._cache.xml[a])},addVideo:function(a,b,c,d){this._cache.video[a]={url:b,data:c,isBlob:d,locked:!0},this._resolveURL(b,this._cache.video[a])},addShader:function(a,b,c){this._cache.shader[a]={url:b,data:c},this._resolveURL(b,this._cache.shader[a])},addRenderTexture:function(a,b){this._cache.renderTexture[a]={texture:b,frame:new c.Frame(0,0,0,b.width,b.height,"","")}},addSpriteSheet:function(a,b,d,e,f,g,h,i){void 0===g&&(g=-1),void 0===h&&(h=0),void 0===i&&(i=0);var j={key:a,url:b,data:d,frameWidth:e,frameHeight:f,margin:h,spacing:i,base:new PIXI.BaseTexture(d),frameData:c.AnimationParser.spriteSheet(this.game,d,e,f,g,h,i)};this._cache.image[a]=j,this._resolveURL(b,j)},addTextureAtlas:function(a,b,d,e,f){var g={key:a,url:b,data:d,base:new PIXI.BaseTexture(d)};f===c.Loader.TEXTURE_ATLAS_XML_STARLING?g.frameData=c.AnimationParser.XMLData(this.game,e,a):f===c.Loader.TEXTURE_ATLAS_JSON_PYXEL?g.frameData=c.AnimationParser.JSONDataPyxel(this.game,e,a):Array.isArray(e.frames)?g.frameData=c.AnimationParser.JSONData(this.game,e,a):g.frameData=c.AnimationParser.JSONDataHash(this.game,e,a),this._cache.image[a]=g,this._resolveURL(b,g)},reloadSound:function(a){var b=this,c=this.getSound(a);c&&(c.data.src=c.url,c.data.addEventListener("canplaythrough",function(){return b.reloadSoundComplete(a)},!1),c.data.load())},reloadSoundComplete:function(a){var b=this.getSound(a);b&&(b.locked=!1,this.onSoundUnlock.dispatch(a))},updateSound:function(a,b,c){var d=this.getSound(a);d&&(d[b]=c)},decodedSound:function(a,b){var c=this.getSound(a);c.data=b,c.decoded=!0,c.isDecoding=!1},isSoundDecoded:function(a){var b=this.getItem(a,c.Cache.SOUND,"isSoundDecoded");if(b)return b.decoded},isSoundReady:function(a){var b=this.getItem(a,c.Cache.SOUND,"isSoundDecoded");if(b)return b.decoded&&!this.game.sound.touchLocked},checkKey:function(a,b){return!!this._cacheMap[a][b]},checkURL:function(a){return!!this._urlMap[this._resolveURL(a)]},checkCanvasKey:function(a){return this.checkKey(c.Cache.CANVAS,a)},checkImageKey:function(a){return this.checkKey(c.Cache.IMAGE,a)},checkTextureKey:function(a){return this.checkKey(c.Cache.TEXTURE,a)},checkSoundKey:function(a){return this.checkKey(c.Cache.SOUND,a)},checkTextKey:function(a){return this.checkKey(c.Cache.TEXT,a)},checkPhysicsKey:function(a){return this.checkKey(c.Cache.PHYSICS,a)},checkTilemapKey:function(a){return this.checkKey(c.Cache.TILEMAP,a)},checkBinaryKey:function(a){return this.checkKey(c.Cache.BINARY,a)},checkBitmapDataKey:function(a){return this.checkKey(c.Cache.BITMAPDATA,a)},checkBitmapFontKey:function(a){return this.checkKey(c.Cache.BITMAPFONT,a)},checkJSONKey:function(a){return this.checkKey(c.Cache.JSON,a)},checkXMLKey:function(a){return this.checkKey(c.Cache.XML,a)},checkVideoKey:function(a){return this.checkKey(c.Cache.VIDEO,a)},checkShaderKey:function(a){return this.checkKey(c.Cache.SHADER,a)},checkRenderTextureKey:function(a){return this.checkKey(c.Cache.RENDER_TEXTURE,a)},getItem:function(a,b,c,d){return this.checkKey(b,a)?void 0===d?this._cacheMap[b][a]:this._cacheMap[b][a][d]:(c&&console.warn("Phaser.Cache."+c+': Key "'+a+'" not found in Cache.'),null)},getCanvas:function(a){return this.getItem(a,c.Cache.CANVAS,"getCanvas","canvas")},getImage:function(a,b){void 0!==a&&null!==a||(a="__default"),void 0===b&&(b=!1);var d=this.getItem(a,c.Cache.IMAGE,"getImage");return null===d&&(d=this.getItem("__missing",c.Cache.IMAGE,"getImage")),b?d:d.data},getTextureFrame:function(a){return this.getItem(a,c.Cache.TEXTURE,"getTextureFrame","frame")},getSound:function(a){return this.getItem(a,c.Cache.SOUND,"getSound")},getSoundData:function(a){return this.getItem(a,c.Cache.SOUND,"getSoundData","data")},getText:function(a){return this.getItem(a,c.Cache.TEXT,"getText","data")},getPhysicsData:function(a,b,d){var e=this.getItem(a,c.Cache.PHYSICS,"getPhysicsData","data");if(null===e||void 0===b||null===b)return e;if(e[b]){var f=e[b];if(!f||!d)return f;for(var g in f)if(g=f[g],g.fixtureKey===d)return g;console.warn('Phaser.Cache.getPhysicsData: Could not find given fixtureKey: "'+d+" in "+a+'"')}else console.warn('Phaser.Cache.getPhysicsData: Invalid key/object: "'+a+" / "+b+'"');return null},getTilemapData:function(a){return this.getItem(a,c.Cache.TILEMAP,"getTilemapData")},getBinary:function(a){return this.getItem(a,c.Cache.BINARY,"getBinary")},getBitmapData:function(a){return this.getItem(a,c.Cache.BITMAPDATA,"getBitmapData","data")},getBitmapFont:function(a){return this.getItem(a,c.Cache.BITMAPFONT,"getBitmapFont")},getJSON:function(a,b){var d=this.getItem(a,c.Cache.JSON,"getJSON","data");return d?b?c.Utils.extend(!0,Array.isArray(d)?[]:{},d):d:null},getXML:function(a){return this.getItem(a,c.Cache.XML,"getXML","data")},getVideo:function(a){return this.getItem(a,c.Cache.VIDEO,"getVideo")},getShader:function(a){return this.getItem(a,c.Cache.SHADER,"getShader","data")},getRenderTexture:function(a){return this.getItem(a,c.Cache.RENDER_TEXTURE,"getRenderTexture")},getBaseTexture:function(a,b){return void 0===b&&(b=c.Cache.IMAGE),this.getItem(a,b,"getBaseTexture","base")},getFrame:function(a,b){return void 0===b&&(b=c.Cache.IMAGE),this.getItem(a,b,"getFrame","frame")},getFrameCount:function(a,b){var c=this.getFrameData(a,b);return c?c.total:0},getFrameData:function(a,b){return void 0===b&&(b=c.Cache.IMAGE),this.getItem(a,b,"getFrameData","frameData")},hasFrameData:function(a,b){return void 0===b&&(b=c.Cache.IMAGE),null!==this.getItem(a,b,"","frameData")},updateFrameData:function(a,b,d){void 0===d&&(d=c.Cache.IMAGE),this._cacheMap[d][a]&&(this._cacheMap[d][a].frameData=b)},getFrameByIndex:function(a,b,c){var d=this.getFrameData(a,c);return d?d.getFrame(b):null},getFrameByName:function(a,b,c){var d=this.getFrameData(a,c);return d?d.getFrameByName(b):null},getURL:function(a){var a=this._resolveURL(a);return a?this._urlMap[a]:(console.warn('Phaser.Cache.getUrl: Invalid url: "'+a+'" or Cache.autoResolveURL was false'),null)},getKeys:function(a){void 0===a&&(a=c.Cache.IMAGE);var b=[];if(this._cacheMap[a])for(var d in this._cacheMap[a])"__default"!==d&&"__missing"!==d&&b.push(d);return b},removeCanvas:function(a){delete this._cache.canvas[a]},removeImage:function(a,b){void 0===b&&(b=!0);var c=this.getImage(a,!0);b&&c.base&&c.base.destroy(),delete this._cache.image[a]},removeSound:function(a){delete this._cache.sound[a]},removeText:function(a){delete this._cache.text[a]},removePhysics:function(a){delete this._cache.physics[a]},removeTilemap:function(a){delete this._cache.tilemap[a]},removeBinary:function(a){delete this._cache.binary[a]},removeBitmapData:function(a){delete this._cache.bitmapData[a]},removeBitmapFont:function(a){delete this._cache.bitmapFont[a]},removeJSON:function(a){delete this._cache.json[a]},removeXML:function(a){delete this._cache.xml[a]},removeVideo:function(a){delete this._cache.video[a]},removeShader:function(a){delete this._cache.shader[a]},removeRenderTexture:function(a){delete this._cache.renderTexture[a]},removeSpriteSheet:function(a){delete this._cache.spriteSheet[a]},removeTextureAtlas:function(a){delete this._cache.atlas[a]},clearGLTextures:function(){for(var a in this._cache.image)this._cache.image[a].base._glTextures=[]},_resolveURL:function(a,b){return this.autoResolveURL?(this._urlResolver.src=this.game.load.baseURL+a,this._urlTemp=this._urlResolver.src,this._urlResolver.src="",b&&(this._urlMap[this._urlTemp]=b),this._urlTemp):null},destroy:function(){for(var a=0;a<this._cacheMap.length;a++){var b=this._cacheMap[a];for(var c in b)"__default"!==c&&"__missing"!==c&&(b[c].destroy&&b[c].destroy(),delete b[c])}this._urlMap=null,this._urlResolver=null,this._urlTemp=null}},c.Cache.prototype.constructor=c.Cache,c.Loader=function(a){this.game=a,this.cache=a.cache,this.resetLocked=!1,this.isLoading=!1,this.hasLoaded=!1,this.preloadSprite=null,this.crossOrigin=!1,this.baseURL="",this.path="",this.headers={requestedWith:!1,json:"application/json",xml:"application/xml"},this.onLoadStart=new c.Signal,this.onLoadComplete=new c.Signal,this.onPackComplete=new c.Signal,this.onFileStart=new c.Signal,this.onFileComplete=new c.Signal,this.onFileError=new c.Signal,this.useXDomainRequest=!1,this._warnedAboutXDomainRequest=!1,this.enableParallel=!0,this.maxParallelDownloads=4,this._withSyncPointDepth=0,this._fileList=[],this._flightQueue=[],this._processingHead=0,this._fileLoadStarted=!1,this._totalPackCount=0,this._totalFileCount=0,this._loadedPackCount=0,this._loadedFileCount=0},c.Loader.TEXTURE_ATLAS_JSON_ARRAY=0,c.Loader.TEXTURE_ATLAS_JSON_HASH=1,c.Loader.TEXTURE_ATLAS_XML_STARLING=2,c.Loader.PHYSICS_LIME_CORONA_JSON=3,c.Loader.PHYSICS_PHASER_JSON=4,c.Loader.TEXTURE_ATLAS_JSON_PYXEL=5,c.Loader.prototype={setPreloadSprite:function(a,b){b=b||0,this.preloadSprite={sprite:a,direction:b,width:a.width,height:a.height,rect:null},0===b?this.preloadSprite.rect=new c.Rectangle(0,0,1,a.height):this.preloadSprite.rect=new c.Rectangle(0,0,a.width,1),a.crop(this.preloadSprite.rect),a.visible=!0},resize:function(){this.preloadSprite&&this.preloadSprite.height!==this.preloadSprite.sprite.height&&(this.preloadSprite.rect.height=this.preloadSprite.sprite.height)},checkKeyExists:function(a,b){return this.getAssetIndex(a,b)>-1},getAssetIndex:function(a,b){for(var c=-1,d=0;d<this._fileList.length;d++){var e=this._fileList[d];if(e.type===a&&e.key===b&&(c=d,!e.loaded&&!e.loading))break}return c},getAsset:function(a,b){var c=this.getAssetIndex(a,b);return c>-1&&{index:c,file:this._fileList[c]}},reset:function(a,b){void 0===b&&(b=!1),this.resetLocked||(a&&(this.preloadSprite=null),this.isLoading=!1,this._processingHead=0,this._fileList.length=0,this._flightQueue.length=0,this._fileLoadStarted=!1,this._totalFileCount=0,this._totalPackCount=0,this._loadedPackCount=0,this._loadedFileCount=0,b&&(this.onLoadStart.removeAll(),this.onLoadComplete.removeAll(),this.onPackComplete.removeAll(),this.onFileStart.removeAll(),this.onFileComplete.removeAll(),this.onFileError.removeAll()))},addToFileList:function(a,b,c,d,e,f){if(void 0===e&&(e=!1),void 0===b||""===b)return console.warn("Phaser.Loader: Invalid or no key given of type "+a),this;if(void 0===c||null===c){if(!f)return console.warn("Phaser.Loader: No URL given for file type: "+a+" key: "+b),this;c=b+f}var g={type:a,key:b,path:this.path,url:c,syncPoint:this._withSyncPointDepth>0,data:null,loading:!1,loaded:!1,error:!1};if(d)for(var h in d)g[h]=d[h];var i=this.getAssetIndex(a,b);if(e&&i>-1){var j=this._fileList[i];j.loading||j.loaded?(this._fileList.push(g),this._totalFileCount++):this._fileList[i]=g}else i===-1&&(this._fileList.push(g),this._totalFileCount++);return this},replaceInFileList:function(a,b,c,d){return this.addToFileList(a,b,c,d,!0)},pack:function(a,b,c,d){if(void 0===b&&(b=null),void 0===c&&(c=null),void 0===d&&(d=null),!b&&!c)return console.warn("Phaser.Loader.pack - Both url and data are null. One must be set."),this;var e={type:"packfile",key:a,url:b,path:this.path,syncPoint:!0,data:null,loading:!1,loaded:!1,error:!1,callbackContext:d};c&&("string"==typeof c&&(c=JSON.parse(c)),e.data=c||{},e.loaded=!0);for(var f=0;f<this._fileList.length+1;f++){var g=this._fileList[f];if(!g||!g.loaded&&!g.loading&&"packfile"!==g.type){this._fileList.splice(f,0,e),this._totalPackCount++;break}}return this},image:function(a,b,c){return this.addToFileList("image",a,b,void 0,c,".png")},images:function(a,b){if(Array.isArray(b))for(var c=0;c<a.length;c++)this.image(a[c],b[c]);else for(var c=0;c<a.length;c++)this.image(a[c]);return this},text:function(a,b,c){return this.addToFileList("text",a,b,void 0,c,".txt")},json:function(a,b,c){return this.addToFileList("json",a,b,void 0,c,".json")},shader:function(a,b,c){return this.addToFileList("shader",a,b,void 0,c,".frag")},xml:function(a,b,c){return this.addToFileList("xml",a,b,void 0,c,".xml")},script:function(a,b,c,d){return void 0===c&&(c=!1),c!==!1&&void 0===d&&(d=this),this.addToFileList("script",a,b,{syncPoint:!0,callback:c,callbackContext:d},!1,".js")},binary:function(a,b,c,d){return void 0===c&&(c=!1),c!==!1&&void 0===d&&(d=c),this.addToFileList("binary",a,b,{callback:c,callbackContext:d},!1,".bin")},spritesheet:function(a,b,c,d,e,f,g){return void 0===e&&(e=-1),void 0===f&&(f=0),void 0===g&&(g=0),this.addToFileList("spritesheet",a,b,{frameWidth:c,frameHeight:d,frameMax:e,margin:f,spacing:g},!1,".png")},audio:function(a,b,c){return this.game.sound.noAudio?this:(void 0===c&&(c=!0),"string"==typeof b&&(b=[b]),this.addToFileList("audio",a,b,{buffer:null,autoDecode:c}))},audioSprite:function(a,b,c,d,e){return this.game.sound.noAudio?this:(void 0===c&&(c=null),void 0===d&&(d=null),void 0===e&&(e=!0),this.audio(a,b,e),c?this.json(a+"-audioatlas",c):d?("string"==typeof d&&(d=JSON.parse(d)),this.cache.addJSON(a+"-audioatlas","",d)):console.warn("Phaser.Loader.audiosprite - You must specify either a jsonURL or provide a jsonData object"),this)},audiosprite:function(a,b,c,d,e){return this.audioSprite(a,b,c,d,e)},video:function(a,b,c,d){return void 0===c&&(c=this.game.device.firefox?"loadeddata":"canplaythrough"),void 0===d&&(d=!1),"string"==typeof b&&(b=[b]),this.addToFileList("video",a,b,{buffer:null,asBlob:d,loadEvent:c})},tilemap:function(a,b,d,e){if(void 0===b&&(b=null),void 0===d&&(d=null),void 0===e&&(e=c.Tilemap.CSV),b||d||(b=e===c.Tilemap.CSV?a+".csv":a+".json"),d){switch(e){case c.Tilemap.CSV:break;case c.Tilemap.TILED_JSON:"string"==typeof d&&(d=JSON.parse(d))}this.cache.addTilemap(a,null,d,e)}else this.addToFileList("tilemap",a,b,{format:e});return this},physics:function(a,b,d,e){return void 0===b&&(b=null),void 0===d&&(d=null),void 0===e&&(e=c.Physics.LIME_CORONA_JSON),b||d||(b=a+".json"),d?("string"==typeof d&&(d=JSON.parse(d)),this.cache.addPhysicsData(a,null,d,e)):this.addToFileList("physics",a,b,{format:e}),this},bitmapFont:function(a,b,c,d,e,f){if(void 0!==b&&null!==b||(b=a+".png"),void 0===c&&(c=null),void 0===d&&(d=null),null===c&&null===d&&(c=a+".xml"),void 0===e&&(e=0),void 0===f&&(f=0),c)this.addToFileList("bitmapfont",a,b,{atlasURL:c,xSpacing:e,ySpacing:f});else if("string"==typeof d){var g,h;try{g=JSON.parse(d)}catch(a){h=this.parseXml(d)}if(!h&&!g)throw new Error("Phaser.Loader. Invalid Bitmap Font atlas given");this.addToFileList("bitmapfont",a,b,{atlasURL:null,atlasData:g||h,atlasType:g?"json":"xml",xSpacing:e,ySpacing:f})}return this},atlasJSONArray:function(a,b,d,e){return this.atlas(a,b,d,e,c.Loader.TEXTURE_ATLAS_JSON_ARRAY)},atlasJSONHash:function(a,b,d,e){return this.atlas(a,b,d,e,c.Loader.TEXTURE_ATLAS_JSON_HASH)},atlasXML:function(a,b,d,e){return void 0===d&&(d=null),void 0===e&&(e=null),d||e||(d=a+".xml"),this.atlas(a,b,d,e,c.Loader.TEXTURE_ATLAS_XML_STARLING)},atlas:function(a,b,d,e,f){if(void 0!==b&&null!==b||(b=a+".png"),void 0===d&&(d=null),void 0===e&&(e=null),void 0===f&&(f=c.Loader.TEXTURE_ATLAS_JSON_ARRAY),d||e||(d=f===c.Loader.TEXTURE_ATLAS_XML_STARLING?a+".xml":a+".json"),d)this.addToFileList("textureatlas",a,b,{atlasURL:d,format:f});else{switch(f){case c.Loader.TEXTURE_ATLAS_JSON_ARRAY:"string"==typeof e&&(e=JSON.parse(e));break;case c.Loader.TEXTURE_ATLAS_XML_STARLING:if("string"==typeof e){var g=this.parseXml(e);if(!g)throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");e=g}}this.addToFileList("textureatlas",a,b,{atlasURL:null,atlasData:e,format:f})}return this},withSyncPoint:function(a,b){this._withSyncPointDepth++;try{a.call(b||this,this)}finally{this._withSyncPointDepth--}return this},addSyncPoint:function(a,b){var c=this.getAsset(a,b);return c&&(c.file.syncPoint=!0),this},removeFile:function(a,b){var c=this.getAsset(a,b);c&&(c.loaded||c.loading||this._fileList.splice(c.index,1))},removeAll:function(){this._fileList.length=0,this._flightQueue.length=0},start:function(){this.isLoading||(this.hasLoaded=!1,this.isLoading=!0,this.updateProgress(),this.processLoadQueue())},processLoadQueue:function(){if(!this.isLoading)return console.warn("Phaser.Loader - active loading canceled / reset"),void this.finishedLoading(!0);for(var a=0;a<this._flightQueue.length;a++){var b=this._flightQueue[a];(b.loaded||b.error)&&(this._flightQueue.splice(a,1),a--,b.loading=!1,b.requestUrl=null,b.requestObject=null,b.error&&this.onFileError.dispatch(b.key,b),"packfile"!==b.type?(this._loadedFileCount++,this.onFileComplete.dispatch(this.progress,b.key,!b.error,this._loadedFileCount,this._totalFileCount)):"packfile"===b.type&&b.error&&(this._loadedPackCount++,this.onPackComplete.dispatch(b.key,!b.error,this._loadedPackCount,this._totalPackCount)))}for(var d=!1,e=this.enableParallel?c.Math.clamp(this.maxParallelDownloads,1,12):1,a=this._processingHead;a<this._fileList.length;a++){var b=this._fileList[a];if("packfile"===b.type&&!b.error&&b.loaded&&a===this._processingHead&&(this.processPack(b),this._loadedPackCount++,this.onPackComplete.dispatch(b.key,!b.error,this._loadedPackCount,this._totalPackCount)),b.loaded||b.error?a===this._processingHead&&(this._processingHead=a+1):!b.loading&&this._flightQueue.length<e&&("packfile"!==b.type||b.data?d||(this._fileLoadStarted||(this._fileLoadStarted=!0,this.onLoadStart.dispatch()),this._flightQueue.push(b),b.loading=!0,this.onFileStart.dispatch(this.progress,b.key,b.url),this.loadFile(b)):(this._flightQueue.push(b),b.loading=!0,this.loadFile(b))),!b.loaded&&b.syncPoint&&(d=!0),this._flightQueue.length>=e||d&&this._loadedPackCount===this._totalPackCount)break}if(this.updateProgress(),this._processingHead>=this._fileList.length)this.finishedLoading();else if(!this._flightQueue.length){console.warn("Phaser.Loader - aborting: processing queue empty, loading may have stalled");var f=this;setTimeout(function(){f.finishedLoading(!0)},2e3)}},finishedLoading:function(a){this.hasLoaded||(this.hasLoaded=!0,this.isLoading=!1,a||this._fileLoadStarted||(this._fileLoadStarted=!0,this.onLoadStart.dispatch()),this.onLoadComplete.dispatch(),this.game.state.loadComplete(),this.reset())},asyncComplete:function(a,b){void 0===b&&(b=""),a.loaded=!0,a.error=!!b,b&&(a.errorMessage=b,console.warn("Phaser.Loader - "+a.type+"["+a.key+"]: "+b)),this.processLoadQueue()},processPack:function(a){var b=a.data[a.key];if(!b)return void console.warn("Phaser.Loader - "+a.key+": pack has data, but not for pack key");for(var d=0;d<b.length;d++){var e=b[d];switch(e.type){case"image":this.image(e.key,e.url,e.overwrite);break;case"text":this.text(e.key,e.url,e.overwrite);break;case"json":this.json(e.key,e.url,e.overwrite);break;case"xml":this.xml(e.key,e.url,e.overwrite);break;case"script":this.script(e.key,e.url,e.callback,a.callbackContext||this);break;case"binary":this.binary(e.key,e.url,e.callback,a.callbackContext||this);break;case"spritesheet":this.spritesheet(e.key,e.url,e.frameWidth,e.frameHeight,e.frameMax,e.margin,e.spacing);break;case"video":this.video(e.key,e.urls);break;case"audio":this.audio(e.key,e.urls,e.autoDecode);break;case"audiosprite":this.audiosprite(e.key,e.urls,e.jsonURL,e.jsonData,e.autoDecode);break;case"tilemap":this.tilemap(e.key,e.url,e.data,c.Tilemap[e.format]);break;case"physics":this.physics(e.key,e.url,e.data,c.Loader[e.format]);break;case"bitmapFont":this.bitmapFont(e.key,e.textureURL,e.atlasURL,e.atlasData,e.xSpacing,e.ySpacing);break;case"atlasJSONArray":this.atlasJSONArray(e.key,e.textureURL,e.atlasURL,e.atlasData);break;case"atlasJSONHash":this.atlasJSONHash(e.key,e.textureURL,e.atlasURL,e.atlasData);break;case"atlasXML":this.atlasXML(e.key,e.textureURL,e.atlasURL,e.atlasData);break;case"atlas":this.atlas(e.key,e.textureURL,e.atlasURL,e.atlasData,c.Loader[e.format]);break;case"shader":this.shader(e.key,e.url,e.overwrite)}}},transformUrl:function(a,b){return!!a&&(a.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)?a:this.baseURL+b.path+a)},loadFile:function(a){switch(a.type){case"packfile":this.xhrLoad(a,this.transformUrl(a.url,a),"text",this.fileComplete);break;case"image":case"spritesheet":case"textureatlas":case"bitmapfont":this.loadImageTag(a);break;case"audio":a.url=this.getAudioURL(a.url),a.url?this.game.sound.usingWebAudio?this.xhrLoad(a,this.transformUrl(a.url,a),"arraybuffer",this.fileComplete):this.game.sound.usingAudioTag&&this.loadAudioTag(a):this.fileError(a,null,"No supported audio URL specified or device does not have audio playback support");break;case"video":a.url=this.getVideoURL(a.url),a.url?a.asBlob?this.xhrLoad(a,this.transformUrl(a.url,a),"blob",this.fileComplete):this.loadVideoTag(a):this.fileError(a,null,"No supported video URL specified or device does not have video playback support");break;case"json":this.xhrLoad(a,this.transformUrl(a.url,a),"text",this.jsonLoadComplete);break;case"xml":this.xhrLoad(a,this.transformUrl(a.url,a),"text",this.xmlLoadComplete);break;case"tilemap":a.format===c.Tilemap.TILED_JSON?this.xhrLoad(a,this.transformUrl(a.url,a),"text",this.jsonLoadComplete):a.format===c.Tilemap.CSV?this.xhrLoad(a,this.transformUrl(a.url,a),"text",this.csvLoadComplete):this.asyncComplete(a,"invalid Tilemap format: "+a.format);break;case"text":case"script":case"shader":case"physics":this.xhrLoad(a,this.transformUrl(a.url,a),"text",this.fileComplete);break;case"binary":this.xhrLoad(a,this.transformUrl(a.url,a),"arraybuffer",this.fileComplete)}},loadImageTag:function(a){var b=this;a.data=new Image,a.data.name=a.key,this.crossOrigin&&(a.data.crossOrigin=this.crossOrigin),a.data.onload=function(){a.data.onload&&(a.data.onload=null,a.data.onerror=null,b.fileComplete(a))},a.data.onerror=function(){a.data.onload&&(a.data.onload=null,a.data.onerror=null,b.fileError(a))},a.data.src=this.transformUrl(a.url,a),a.data.complete&&a.data.width&&a.data.height&&(a.data.onload=null,a.data.onerror=null,this.fileComplete(a))},loadVideoTag:function(a){var b=this;a.data=document.createElement("video"),a.data.name=a.key,a.data.controls=!1,a.data.autoplay=!1;var d=function(){a.data.removeEventListener(a.loadEvent,d,!1),a.data.onerror=null,a.data.canplay=!0,c.GAMES[b.game.id].load.fileComplete(a)};a.data.onerror=function(){a.data.removeEventListener(a.loadEvent,d,!1),a.data.onerror=null,a.data.canplay=!1,b.fileError(a)},a.data.addEventListener(a.loadEvent,d,!1),a.data.src=this.transformUrl(a.url,a),a.data.load()},loadAudioTag:function(a){var b=this;if(this.game.sound.touchLocked)a.data=new Audio,a.data.name=a.key,a.data.preload="auto",a.data.src=this.transformUrl(a.url,a),this.fileComplete(a);else{a.data=new Audio,a.data.name=a.key;var c=function(){a.data.removeEventListener("canplaythrough",c,!1),a.data.onerror=null,b.fileComplete(a)};a.data.onerror=function(){a.data.removeEventListener("canplaythrough",c,!1),a.data.onerror=null,b.fileError(a)},a.data.preload="auto",a.data.src=this.transformUrl(a.url,a),a.data.addEventListener("canplaythrough",c,!1),a.data.load()}},xhrLoad:function(a,b,c,d,e){if(this.useXDomainRequest&&window.XDomainRequest)return void this.xhrLoadWithXDR(a,b,c,d,e);var f=new XMLHttpRequest;f.open("GET",b,!0),f.responseType=c,this.headers.requestedWith!==!1&&f.setRequestHeader("X-Requested-With",this.headers.requestedWith),this.headers[a.type]&&f.setRequestHeader("Accept",this.headers[a.type]),e=e||this.fileError;var g=this;f.onload=function(){try{return 4===f.readyState&&f.status>=400&&f.status<=599?e.call(g,a,f):d.call(g,a,f)}catch(b){g.hasLoaded?window.console&&console.error(b):g.asyncComplete(a,b.message||"Exception")}},f.onerror=function(){try{return e.call(g,a,f)}catch(b){g.hasLoaded?window.console&&console.error(b):g.asyncComplete(a,b.message||"Exception")}},a.requestObject=f,a.requestUrl=b,f.send()},xhrLoadWithXDR:function(a,b,c,d,e){this._warnedAboutXDomainRequest||this.game.device.ie&&!(this.game.device.ieVersion>=10)||(this._warnedAboutXDomainRequest=!0,console.warn("Phaser.Loader - using XDomainRequest outside of IE 9"));var f=new window.XDomainRequest;f.open("GET",b,!0),f.responseType=c,f.timeout=3e3,e=e||this.fileError;var g=this;f.onerror=function(){try{return e.call(g,a,f)}catch(b){g.asyncComplete(a,b.message||"Exception")}},f.ontimeout=function(){try{return e.call(g,a,f)}catch(b){g.asyncComplete(a,b.message||"Exception")}},f.onprogress=function(){},f.onload=function(){try{return 4===f.readyState&&f.status>=400&&f.status<=599?e.call(g,a,f):d.call(g,a,f)}catch(b){g.asyncComplete(a,b.message||"Exception")}},a.requestObject=f,a.requestUrl=b,setTimeout(function(){f.send()},0)},getVideoURL:function(a){for(var b=0;b<a.length;b++){var c,d=a[b];if(d.uri){if(c=d.type,d=d.uri,this.game.device.canPlayVideo(c))return d}else{if(0===d.indexOf("blob:")||0===d.indexOf("data:"))return d;d.indexOf("?")>=0&&(d=d.substr(0,d.indexOf("?")));var e=d.substr((Math.max(0,d.lastIndexOf("."))||1/0)+1);if(c=e.toLowerCase(),this.game.device.canPlayVideo(c))return a[b]}}return null},getAudioURL:function(a){if(this.game.sound.noAudio)return null;for(var b=0;b<a.length;b++){var c,d=a[b];if(d.uri){if(c=d.type,d=d.uri,this.game.device.canPlayAudio(c))return d}else{if(0===d.indexOf("blob:")||0===d.indexOf("data:"))return d;d.indexOf("?")>=0&&(d=d.substr(0,d.indexOf("?")));var e=d.substr((Math.max(0,d.lastIndexOf("."))||1/0)+1);if(c=e.toLowerCase(),this.game.device.canPlayAudio(c))return a[b]}}return null},fileError:function(a,b,c){var d=a.requestUrl||this.transformUrl(a.url,a),e="error loading asset from URL "+d;!c&&b&&(c=b.status),c&&(e=e+" ("+c+")"),this.asyncComplete(a,e)},fileComplete:function(a,b){var d=!0;switch(a.type){case"packfile":var e=JSON.parse(b.responseText);a.data=e||{};break;case"image":this.cache.addImage(a.key,a.url,a.data);break;case"spritesheet":this.cache.addSpriteSheet(a.key,a.url,a.data,a.frameWidth,a.frameHeight,a.frameMax,a.margin,a.spacing);break;case"textureatlas":if(null==a.atlasURL)this.cache.addTextureAtlas(a.key,a.url,a.data,a.atlasData,a.format);else if(d=!1,a.format===c.Loader.TEXTURE_ATLAS_JSON_ARRAY||a.format===c.Loader.TEXTURE_ATLAS_JSON_HASH||a.format===c.Loader.TEXTURE_ATLAS_JSON_PYXEL)this.xhrLoad(a,this.transformUrl(a.atlasURL,a),"text",this.jsonLoadComplete);else{if(a.format!==c.Loader.TEXTURE_ATLAS_XML_STARLING)throw new Error("Phaser.Loader. Invalid Texture Atlas format: "+a.format);this.xhrLoad(a,this.transformUrl(a.atlasURL,a),"text",this.xmlLoadComplete)}break;case"bitmapfont":a.atlasURL?(d=!1,this.xhrLoad(a,this.transformUrl(a.atlasURL,a),"text",function(a,b){var c;try{c=JSON.parse(b.responseText)}catch(a){}c?(a.atlasType="json",this.jsonLoadComplete(a,b)):(a.atlasType="xml",this.xmlLoadComplete(a,b))})):this.cache.addBitmapFont(a.key,a.url,a.data,a.atlasData,a.atlasType,a.xSpacing,a.ySpacing);break;case"video":if(a.asBlob)try{a.data=b.response}catch(b){throw new Error("Phaser.Loader. Unable to parse video file as Blob: "+a.key)}this.cache.addVideo(a.key,a.url,a.data,a.asBlob);break;case"audio":this.game.sound.usingWebAudio?(a.data=b.response,this.cache.addSound(a.key,a.url,a.data,!0,!1),a.autoDecode&&this.game.sound.decode(a.key)):this.cache.addSound(a.key,a.url,a.data,!1,!0);break;case"text":a.data=b.responseText,this.cache.addText(a.key,a.url,a.data);break;case"shader":a.data=b.responseText,this.cache.addShader(a.key,a.url,a.data);break;case"physics":var e=JSON.parse(b.responseText);this.cache.addPhysicsData(a.key,a.url,e,a.format);break;case"script":a.data=document.createElement("script"),a.data.language="javascript",a.data.type="text/javascript",a.data.defer=!1,a.data.text=b.responseText,document.head.appendChild(a.data),a.callback&&(a.data=a.callback.call(a.callbackContext,a.key,b.responseText));break;case"binary":a.callback?a.data=a.callback.call(a.callbackContext,a.key,b.response):a.data=b.response,this.cache.addBinary(a.key,a.data)}d&&this.asyncComplete(a)},jsonLoadComplete:function(a,b){var c=JSON.parse(b.responseText);"tilemap"===a.type?this.cache.addTilemap(a.key,a.url,c,a.format):"bitmapfont"===a.type?this.cache.addBitmapFont(a.key,a.url,a.data,c,a.atlasType,a.xSpacing,a.ySpacing):"json"===a.type?this.cache.addJSON(a.key,a.url,c):this.cache.addTextureAtlas(a.key,a.url,a.data,c,a.format),this.asyncComplete(a)},csvLoadComplete:function(a,b){var c=b.responseText;this.cache.addTilemap(a.key,a.url,c,a.format),this.asyncComplete(a)},xmlLoadComplete:function(a,b){var c=b.responseText,d=this.parseXml(c);if(!d){var e=b.responseType||b.contentType;return console.warn("Phaser.Loader - "+a.key+": invalid XML ("+e+")"),void this.asyncComplete(a,"invalid XML")}"bitmapfont"===a.type?this.cache.addBitmapFont(a.key,a.url,a.data,d,a.atlasType,a.xSpacing,a.ySpacing):"textureatlas"===a.type?this.cache.addTextureAtlas(a.key,a.url,a.data,d,a.format):"xml"===a.type&&this.cache.addXML(a.key,a.url,d),this.asyncComplete(a)},parseXml:function(a){var b;try{if(window.DOMParser){var c=new DOMParser;b=c.parseFromString(a,"text/xml")}else b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)}catch(a){b=null}return b&&b.documentElement&&!b.getElementsByTagName("parsererror").length?b:null},updateProgress:function(){this.preloadSprite&&(0===this.preloadSprite.direction?this.preloadSprite.rect.width=Math.floor(this.preloadSprite.width/100*this.progress):this.preloadSprite.rect.height=Math.floor(this.preloadSprite.height/100*this.progress),this.preloadSprite.sprite?this.preloadSprite.sprite.updateCrop():this.preloadSprite=null)},totalLoadedFiles:function(){return this._loadedFileCount},totalQueuedFiles:function(){return this._totalFileCount-this._loadedFileCount},totalLoadedPacks:function(){return this._totalPackCount},totalQueuedPacks:function(){return this._totalPackCount-this._loadedPackCount}},Object.defineProperty(c.Loader.prototype,"progressFloat",{get:function(){var a=this._loadedFileCount/this._totalFileCount*100;return c.Math.clamp(a||0,0,100)}}),Object.defineProperty(c.Loader.prototype,"progress",{get:function(){return Math.round(this.progressFloat)}}),c.Loader.prototype.constructor=c.Loader,c.LoaderParser={bitmapFont:function(a,b,c,d){return this.xmlBitmapFont(a,b,c,d)},xmlBitmapFont:function(a,b,c,d){var e={},f=a.getElementsByTagName("info")[0],g=a.getElementsByTagName("common")[0];e.font=f.getAttribute("face"),e.size=parseInt(f.getAttribute("size"),10),e.lineHeight=parseInt(g.getAttribute("lineHeight"),10)+d,e.chars={};for(var h=a.getElementsByTagName("char"),i=0;i<h.length;i++){var j=parseInt(h[i].getAttribute("id"),10);e.chars[j]={x:parseInt(h[i].getAttribute("x"),10),y:parseInt(h[i].getAttribute("y"),10),width:parseInt(h[i].getAttribute("width"),10),height:parseInt(h[i].getAttribute("height"),10),xOffset:parseInt(h[i].getAttribute("xoffset"),10),yOffset:parseInt(h[i].getAttribute("yoffset"),10),xAdvance:parseInt(h[i].getAttribute("xadvance"),10)+c,kerning:{}}}var k=a.getElementsByTagName("kerning");for(i=0;i<k.length;i++){var l=parseInt(k[i].getAttribute("first"),10),m=parseInt(k[i].getAttribute("second"),10),n=parseInt(k[i].getAttribute("amount"),10);e.chars[m].kerning[l]=n;
	}return this.finalizeBitmapFont(b,e)},jsonBitmapFont:function(a,b,c,d){var e={font:a.font.info._face,size:parseInt(a.font.info._size,10),lineHeight:parseInt(a.font.common._lineHeight,10)+d,chars:{}};return a.font.chars.char.forEach(function(a){var b=parseInt(a._id,10);e.chars[b]={x:parseInt(a._x,10),y:parseInt(a._y,10),width:parseInt(a._width,10),height:parseInt(a._height,10),xOffset:parseInt(a._xoffset,10),yOffset:parseInt(a._yoffset,10),xAdvance:parseInt(a._xadvance,10)+c,kerning:{}}}),a.font.kernings&&a.font.kernings.kerning&&a.font.kernings.kerning.forEach(function(a){e.chars[a._second].kerning[a._first]=parseInt(a._amount,10)}),this.finalizeBitmapFont(b,e)},finalizeBitmapFont:function(a,b){return Object.keys(b.chars).forEach(function(d){var e=b.chars[d];e.texture=new PIXI.Texture(a,new c.Rectangle(e.x,e.y,e.width,e.height))}),b}},c.AudioSprite=function(a,b){this.game=a,this.key=b,this.config=this.game.cache.getJSON(b+"-audioatlas"),this.autoplayKey=null,this.autoplay=!1,this.sounds={};for(var c in this.config.spritemap){var d=this.config.spritemap[c],e=this.game.add.sound(this.key);e.addMarker(c,d.start,d.end-d.start,null,d.loop),this.sounds[c]=e}this.config.autoplay&&(this.autoplayKey=this.config.autoplay,this.play(this.autoplayKey),this.autoplay=this.sounds[this.autoplayKey])},c.AudioSprite.prototype={play:function(a,b){return void 0===b&&(b=1),this.sounds[a].play(a,null,b)},stop:function(a){if(a)this.sounds[a].stop();else for(var b in this.sounds)this.sounds[b].stop()},get:function(a){return this.sounds[a]}},c.AudioSprite.prototype.constructor=c.AudioSprite,c.Sound=function(a,b,d,e,f){void 0===d&&(d=1),void 0===e&&(e=!1),void 0===f&&(f=a.sound.connectToMaster),this.game=a,this.name=b,this.key=b,this.loop=e,this.markers={},this.context=null,this.autoplay=!1,this.totalDuration=0,this.startTime=0,this.currentTime=0,this.duration=0,this.durationMS=0,this.position=0,this.stopTime=0,this.paused=!1,this.pausedPosition=0,this.pausedTime=0,this.isPlaying=!1,this.currentMarker="",this.fadeTween=null,this.pendingPlayback=!1,this.override=!1,this.allowMultiple=!1,this.usingWebAudio=this.game.sound.usingWebAudio,this.usingAudioTag=this.game.sound.usingAudioTag,this.externalNode=null,this.masterGainNode=null,this.gainNode=null,this._sound=null,this.usingWebAudio?(this.context=this.game.sound.context,this.masterGainNode=this.game.sound.masterGain,void 0===this.context.createGain?this.gainNode=this.context.createGainNode():this.gainNode=this.context.createGain(),this.gainNode.gain.value=d*this.game.sound.volume,f&&this.gainNode.connect(this.masterGainNode)):this.usingAudioTag&&(this.game.cache.getSound(b)&&this.game.cache.isSoundReady(b)?(this._sound=this.game.cache.getSoundData(b),this.totalDuration=0,this._sound.duration&&(this.totalDuration=this._sound.duration)):this.game.cache.onSoundUnlock.add(this.soundHasUnlocked,this)),this.onDecoded=new c.Signal,this.onPlay=new c.Signal,this.onPause=new c.Signal,this.onResume=new c.Signal,this.onLoop=new c.Signal,this.onStop=new c.Signal,this.onMute=new c.Signal,this.onMarkerComplete=new c.Signal,this.onFadeComplete=new c.Signal,this._volume=d,this._buffer=null,this._muted=!1,this._tempMarker=0,this._tempPosition=0,this._tempVolume=0,this._tempPause=0,this._muteVolume=0,this._tempLoop=0,this._paused=!1,this._onDecodedEventDispatched=!1},c.Sound.prototype={soundHasUnlocked:function(a){a===this.key&&(this._sound=this.game.cache.getSoundData(this.key),this.totalDuration=this._sound.duration)},addMarker:function(a,b,c,d,e){void 0!==c&&null!==c||(c=1),void 0!==d&&null!==d||(d=1),void 0===e&&(e=!1),this.markers[a]={name:a,start:b,stop:b+c,volume:d,duration:c,durationMS:1e3*c,loop:e}},removeMarker:function(a){delete this.markers[a]},onEndedHandler:function(){this._sound.onended=null,this.isPlaying=!1,this.currentTime=this.durationMS,this.stop()},update:function(){return this.game.cache.checkSoundKey(this.key)?(this.isDecoded&&!this._onDecodedEventDispatched&&(this.onDecoded.dispatch(this),this._onDecodedEventDispatched=!0),this.pendingPlayback&&this.game.cache.isSoundReady(this.key)&&(this.pendingPlayback=!1,this.play(this._tempMarker,this._tempPosition,this._tempVolume,this._tempLoop)),void(this.isPlaying&&(this.currentTime=this.game.time.time-this.startTime,this.currentTime>=this.durationMS&&(this.usingWebAudio?this.loop?(this.onLoop.dispatch(this),this.isPlaying=!1,""===this.currentMarker?(this.currentTime=0,this.startTime=this.game.time.time,this.isPlaying=!0):(this.onMarkerComplete.dispatch(this.currentMarker,this),this.play(this.currentMarker,0,this.volume,!0,!0))):""!==this.currentMarker&&this.stop():this.loop?(this.onLoop.dispatch(this),""===this.currentMarker&&(this.currentTime=0,this.startTime=this.game.time.time),this.isPlaying=!1,this.play(this.currentMarker,0,this.volume,!0,!0)):this.stop())))):void this.destroy()},loopFull:function(a){return this.play(null,0,a,!0)},play:function(a,b,c,d,e){if(void 0!==a&&a!==!1&&null!==a||(a=""),void 0===e&&(e=!0),this.isPlaying&&!this.allowMultiple&&!e&&!this.override)return this;if(this._sound&&this.isPlaying&&!this.allowMultiple&&(this.override||e)){if(this.usingWebAudio){if(void 0===this._sound.stop)this._sound.noteOff(0);else try{this._sound.stop(0)}catch(a){}this.externalNode?this._sound.disconnect(this.externalNode):this.gainNode&&this._sound.disconnect(this.gainNode)}else this.usingAudioTag&&(this._sound.pause(),this._sound.currentTime=0);this.isPlaying=!1}if(""===a&&Object.keys(this.markers).length>0)return this;if(""!==a){if(!this.markers[a])return console.warn("Phaser.Sound.play: audio marker "+a+" doesn't exist"),this;this.currentMarker=a,this.position=this.markers[a].start,this.volume=this.markers[a].volume,this.loop=this.markers[a].loop,this.duration=this.markers[a].duration,this.durationMS=this.markers[a].durationMS,"undefined"!=typeof c&&(this.volume=c),"undefined"!=typeof d&&(this.loop=d),this._tempMarker=a,this._tempPosition=this.position,this._tempVolume=this.volume,this._tempLoop=this.loop}else b=b||0,void 0===c&&(c=this._volume),void 0===d&&(d=this.loop),this.position=Math.max(0,b),this.volume=c,this.loop=d,this.duration=0,this.durationMS=0,this._tempMarker=a,this._tempPosition=b,this._tempVolume=c,this._tempLoop=d;return this.usingWebAudio?this.game.cache.isSoundDecoded(this.key)?(this._sound=this.context.createBufferSource(),this.externalNode?this._sound.connect(this.externalNode):this._sound.connect(this.gainNode),this._buffer=this.game.cache.getSoundData(this.key),this._sound.buffer=this._buffer,this.loop&&""===a&&(this._sound.loop=!0),this.loop||""!==a||(this._sound.onended=this.onEndedHandler.bind(this)),this.totalDuration=this._sound.buffer.duration,0===this.duration&&(this.duration=this.totalDuration,this.durationMS=Math.ceil(1e3*this.totalDuration)),void 0===this._sound.start?this._sound.noteGrainOn(0,this.position,this.duration):this.loop&&""===a?this._sound.start(0,0):this._sound.start(0,this.position,this.duration),this.isPlaying=!0,this.startTime=this.game.time.time,this.currentTime=0,this.stopTime=this.startTime+this.durationMS,this.onPlay.dispatch(this)):(this.pendingPlayback=!0,this.game.cache.getSound(this.key)&&this.game.cache.getSound(this.key).isDecoding===!1&&this.game.sound.decode(this.key,this)):this.game.cache.getSound(this.key)&&this.game.cache.getSound(this.key).locked?(this.game.cache.reloadSound(this.key),this.pendingPlayback=!0):this._sound&&(this.game.device.cocoonJS||4===this._sound.readyState)?(this._sound.play(),this.totalDuration=this._sound.duration,0===this.duration&&(this.duration=this.totalDuration,this.durationMS=1e3*this.totalDuration),this._sound.currentTime=this.position,this._sound.muted=this._muted,this._muted||this.game.sound.mute?this._sound.volume=0:this._sound.volume=this._volume,this.isPlaying=!0,this.startTime=this.game.time.time,this.currentTime=0,this.stopTime=this.startTime+this.durationMS,this.onPlay.dispatch(this)):this.pendingPlayback=!0,this},restart:function(a,b,c,d){a=a||"",b=b||0,c=c||1,void 0===d&&(d=!1),this.play(a,b,c,d,!0)},pause:function(){this.isPlaying&&this._sound&&(this.paused=!0,this.pausedPosition=this.currentTime,this.pausedTime=this.game.time.time,this._tempPause=this._sound.currentTime,this.onPause.dispatch(this),this.stop())},resume:function(){if(this.paused&&this._sound){if(this.usingWebAudio){var a=Math.max(0,this.position+this.pausedPosition/1e3);this._sound=this.context.createBufferSource(),this._sound.buffer=this._buffer,this.externalNode?this._sound.connect(this.externalNode):this._sound.connect(this.gainNode),this.loop&&(this._sound.loop=!0),this.loop||""!==this.currentMarker||(this._sound.onended=this.onEndedHandler.bind(this));var b=this.duration-this.pausedPosition/1e3;void 0===this._sound.start?this._sound.noteGrainOn(0,a,b):this.loop&&this.game.device.chrome?42===this.game.device.chromeVersion?this._sound.start(0):this._sound.start(0,a):this._sound.start(0,a,b)}else this._sound.currentTime=this._tempPause,this._sound.play();this.isPlaying=!0,this.paused=!1,this.startTime+=this.game.time.time-this.pausedTime,this.onResume.dispatch(this)}},stop:function(){if(this.isPlaying&&this._sound)if(this.usingWebAudio){if(void 0===this._sound.stop)this._sound.noteOff(0);else try{this._sound.stop(0)}catch(a){}this.externalNode?this._sound.disconnect(this.externalNode):this.gainNode&&this._sound.disconnect(this.gainNode)}else this.usingAudioTag&&(this._sound.pause(),this._sound.currentTime=0);if(this.pendingPlayback=!1,this.isPlaying=!1,!this.paused){var a=this.currentMarker;""!==this.currentMarker&&this.onMarkerComplete.dispatch(this.currentMarker,this),this.currentMarker="",null!==this.fadeTween&&this.fadeTween.stop(),this.onStop.dispatch(this,a)}},fadeIn:function(a,b,c){void 0===b&&(b=!1),void 0===c&&(c=this.currentMarker),this.paused||(this.play(c,0,0,b),this.fadeTo(a,1))},fadeOut:function(a){this.fadeTo(a,0)},fadeTo:function(a,b){if(this.isPlaying&&!this.paused&&b!==this.volume){if(void 0===a&&(a=1e3),void 0===b)return void console.warn("Phaser.Sound.fadeTo: No Volume Specified.");this.fadeTween=this.game.add.tween(this).to({volume:b},a,c.Easing.Linear.None,!0),this.fadeTween.onComplete.add(this.fadeComplete,this)}},fadeComplete:function(){this.onFadeComplete.dispatch(this,this.volume),0===this.volume&&this.stop()},updateGlobalVolume:function(a){this.usingAudioTag&&this._sound&&(this._sound.volume=a*this._volume)},destroy:function(a){void 0===a&&(a=!0),this.stop(),a?this.game.sound.remove(this):(this.markers={},this.context=null,this._buffer=null,this.externalNode=null,this.onDecoded.dispose(),this.onPlay.dispose(),this.onPause.dispose(),this.onResume.dispose(),this.onLoop.dispose(),this.onStop.dispose(),this.onMute.dispose(),this.onMarkerComplete.dispose())}},c.Sound.prototype.constructor=c.Sound,Object.defineProperty(c.Sound.prototype,"isDecoding",{get:function(){return this.game.cache.getSound(this.key).isDecoding}}),Object.defineProperty(c.Sound.prototype,"isDecoded",{get:function(){return this.game.cache.isSoundDecoded(this.key)}}),Object.defineProperty(c.Sound.prototype,"mute",{get:function(){return this._muted||this.game.sound.mute},set:function(a){a=a||!1,a!==this._muted&&(a?(this._muted=!0,this._muteVolume=this._tempVolume,this.usingWebAudio?this.gainNode.gain.value=0:this.usingAudioTag&&this._sound&&(this._sound.volume=0)):(this._muted=!1,this.usingWebAudio?this.gainNode.gain.value=this._muteVolume:this.usingAudioTag&&this._sound&&(this._sound.volume=this._muteVolume)),this.onMute.dispatch(this))}}),Object.defineProperty(c.Sound.prototype,"volume",{get:function(){return this._volume},set:function(a){return this.game.device.firefox&&this.usingAudioTag&&(a=this.game.math.clamp(a,0,1)),this._muted?void(this._muteVolume=a):(this._tempVolume=a,this._volume=a,void(this.usingWebAudio?this.gainNode.gain.value=a:this.usingAudioTag&&this._sound&&(this._sound.volume=a)))}}),c.SoundManager=function(a){this.game=a,this.onSoundDecode=new c.Signal,this.onVolumeChange=new c.Signal,this.onMute=new c.Signal,this.onUnMute=new c.Signal,this.context=null,this.usingWebAudio=!1,this.usingAudioTag=!1,this.noAudio=!1,this.connectToMaster=!0,this.touchLocked=!1,this.channels=32,this.muteOnPause=!0,this._codeMuted=!1,this._muted=!1,this._unlockSource=null,this._volume=1,this._sounds=[],this._watchList=new c.ArraySet,this._watching=!1,this._watchCallback=null,this._watchContext=null},c.SoundManager.prototype={boot:function(){if(this.game.device.iOS&&this.game.device.webAudio===!1&&(this.channels=1),window.PhaserGlobal){if(window.PhaserGlobal.disableAudio===!0)return this.noAudio=!0,void(this.touchLocked=!1);if(window.PhaserGlobal.disableWebAudio===!0)return this.usingAudioTag=!0,void(this.touchLocked=!1)}if(window.PhaserGlobal&&window.PhaserGlobal.audioContext)this.context=window.PhaserGlobal.audioContext;else if(window.AudioContext)try{this.context=new window.AudioContext}catch(a){this.context=null,this.usingWebAudio=!1,this.touchLocked=!1}else if(window.webkitAudioContext)try{this.context=new window.webkitAudioContext}catch(a){this.context=null,this.usingWebAudio=!1,this.touchLocked=!1}if(null===this.context){if(void 0===window.Audio)return void(this.noAudio=!0);this.usingAudioTag=!0}else this.usingWebAudio=!0,void 0===this.context.createGain?this.masterGain=this.context.createGainNode():this.masterGain=this.context.createGain(),this.masterGain.gain.value=1,this.masterGain.connect(this.context.destination);this.noAudio||(!this.game.device.cocoonJS&&this.game.device.iOS||window.PhaserGlobal&&window.PhaserGlobal.fakeiOSTouchLock)&&this.setTouchLock()},setTouchLock:function(){this.noAudio||window.PhaserGlobal&&window.PhaserGlobal.disableAudio===!0||(this.game.device.iOSVersion>8?this.game.input.touch.addTouchLockCallback(this.unlock,this,!0):this.game.input.touch.addTouchLockCallback(this.unlock,this),this.touchLocked=!0)},unlock:function(){if(this.noAudio||!this.touchLocked||null!==this._unlockSource)return!0;if(this.usingAudioTag)this.touchLocked=!1,this._unlockSource=null;else if(this.usingWebAudio){var a=this.context.createBuffer(1,1,22050);this._unlockSource=this.context.createBufferSource(),this._unlockSource.buffer=a,this._unlockSource.connect(this.context.destination),void 0===this._unlockSource.start?this._unlockSource.noteOn(0):this._unlockSource.start(0)}return!0},stopAll:function(){if(!this.noAudio)for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].stop()},pauseAll:function(){if(!this.noAudio)for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].pause()},resumeAll:function(){if(!this.noAudio)for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].resume()},decode:function(a,b){b=b||null;var c=this.game.cache.getSoundData(a);if(c&&this.game.cache.isSoundDecoded(a)===!1){this.game.cache.updateSound(a,"isDecoding",!0);var d=this;try{this.context.decodeAudioData(c,function(c){c&&(d.game.cache.decodedSound(a,c),d.onSoundDecode.dispatch(a,b))})}catch(a){}}},setDecodedCallback:function(a,b,d){"string"==typeof a&&(a=[a]),this._watchList.reset();for(var e=0;e<a.length;e++)a[e]instanceof c.Sound?this.game.cache.isSoundDecoded(a[e].key)||this._watchList.add(a[e].key):this.game.cache.isSoundDecoded(a[e])||this._watchList.add(a[e]);0===this._watchList.total?(this._watching=!1,b.call(d)):(this._watching=!0,this._watchCallback=b,this._watchContext=d)},update:function(){if(!this.noAudio){!this.touchLocked||null===this._unlockSource||this._unlockSource.playbackState!==this._unlockSource.PLAYING_STATE&&this._unlockSource.playbackState!==this._unlockSource.FINISHED_STATE||(this.touchLocked=!1,this._unlockSource=null);for(var a=0;a<this._sounds.length;a++)this._sounds[a].update();if(this._watching){for(var b=this._watchList.first;b;)this.game.cache.isSoundDecoded(b)&&this._watchList.remove(b),b=this._watchList.next;0===this._watchList.total&&(this._watching=!1,this._watchCallback.call(this._watchContext))}}},add:function(a,b,d,e){void 0===b&&(b=1),void 0===d&&(d=!1),void 0===e&&(e=this.connectToMaster);var f=new c.Sound(this.game,a,b,d,e);return this._sounds.push(f),f},addSprite:function(a){var b=new c.AudioSprite(this.game,a);return b},remove:function(a){for(var b=this._sounds.length;b--;)if(this._sounds[b]===a)return this._sounds[b].destroy(!1),this._sounds.splice(b,1),!0;return!1},removeByKey:function(a){for(var b=this._sounds.length,c=0;b--;)this._sounds[b].key===a&&(this._sounds[b].destroy(!1),this._sounds.splice(b,1),c++);return c},play:function(a,b,c){if(!this.noAudio){var d=this.add(a,b,c);return d.play(),d}},setMute:function(){if(!this._muted){this._muted=!0,this.usingWebAudio&&(this._muteVolume=this.masterGain.gain.value,this.masterGain.gain.value=0);for(var a=0;a<this._sounds.length;a++)this._sounds[a].usingAudioTag&&(this._sounds[a].mute=!0);this.onMute.dispatch()}},unsetMute:function(){if(this._muted&&!this._codeMuted){this._muted=!1,this.usingWebAudio&&(this.masterGain.gain.value=this._muteVolume);for(var a=0;a<this._sounds.length;a++)this._sounds[a].usingAudioTag&&(this._sounds[a].mute=!1);this.onUnMute.dispatch()}},destroy:function(){this.stopAll();for(var a=0;a<this._sounds.length;a++)this._sounds[a]&&this._sounds[a].destroy();this._sounds=[],this.onSoundDecode.dispose(),this.context&&(window.PhaserGlobal?window.PhaserGlobal.audioContext=this.context:this.context.close&&this.context.close())}},c.SoundManager.prototype.constructor=c.SoundManager,Object.defineProperty(c.SoundManager.prototype,"mute",{get:function(){return this._muted},set:function(a){if(a=a||!1){if(this._muted)return;this._codeMuted=!0,this.setMute()}else{if(!this._muted)return;this._codeMuted=!1,this.unsetMute()}}}),Object.defineProperty(c.SoundManager.prototype,"volume",{get:function(){return this._volume},set:function(a){if(a<0?a=0:a>1&&(a=1),this._volume!==a){if(this._volume=a,this.usingWebAudio)this.masterGain.gain.value=a;else for(var b=0;b<this._sounds.length;b++)this._sounds[b].usingAudioTag&&this._sounds[b].updateGlobalVolume(a);this.onVolumeChange.dispatch(a)}}}),c.ScaleManager=function(a,b,d){this.game=a,this.dom=c.DOM,this.grid=null,this.width=0,this.height=0,this.minWidth=null,this.maxWidth=null,this.minHeight=null,this.maxHeight=null,this.offset=new c.Point,this.forceLandscape=!1,this.forcePortrait=!1,this.incorrectOrientation=!1,this._pageAlignHorizontally=!1,this._pageAlignVertically=!1,this.onOrientationChange=new c.Signal,this.enterIncorrectOrientation=new c.Signal,this.leaveIncorrectOrientation=new c.Signal,this.hasPhaserSetFullScreen=!1,this.fullScreenTarget=null,this._createdFullScreenTarget=null,this.onFullScreenInit=new c.Signal,this.onFullScreenChange=new c.Signal,this.onFullScreenError=new c.Signal,this.screenOrientation=this.dom.getScreenOrientation(),this.scaleFactor=new c.Point(1,1),this.scaleFactorInversed=new c.Point(1,1),this.margin={left:0,top:0,right:0,bottom:0,x:0,y:0},this.bounds=new c.Rectangle,this.aspectRatio=0,this.sourceAspectRatio=0,this.event=null,this.windowConstraints={right:"layout",bottom:""},this.compatibility={supportsFullScreen:!1,orientationFallback:null,noMargins:!1,scrollTo:null,forceMinimumDocumentHeight:!1,canExpandParent:!0,clickTrampoline:""},this._scaleMode=c.ScaleManager.NO_SCALE,this._fullScreenScaleMode=c.ScaleManager.NO_SCALE,this.parentIsWindow=!1,this.parentNode=null,this.parentScaleFactor=new c.Point(1,1),this.trackParentInterval=2e3,this.onSizeChange=new c.Signal,this.onResize=null,this.onResizeContext=null,this._pendingScaleMode=null,this._fullScreenRestore=null,this._gameSize=new c.Rectangle,this._userScaleFactor=new c.Point(1,1),this._userScaleTrim=new c.Point(0,0),this._lastUpdate=0,this._updateThrottle=0,this._updateThrottleReset=100,this._parentBounds=new c.Rectangle,this._tempBounds=new c.Rectangle,this._lastReportedCanvasSize=new c.Rectangle,this._lastReportedGameSize=new c.Rectangle,this._booted=!1,a.config&&this.parseConfig(a.config),this.setupScale(b,d)},c.ScaleManager.EXACT_FIT=0,c.ScaleManager.NO_SCALE=1,c.ScaleManager.SHOW_ALL=2,c.ScaleManager.RESIZE=3,c.ScaleManager.USER_SCALE=4,c.ScaleManager.prototype={boot:function(){var a=this.compatibility;a.supportsFullScreen=this.game.device.fullscreen&&!this.game.device.cocoonJS,this.game.device.iPad||this.game.device.webApp||this.game.device.desktop||(this.game.device.android&&!this.game.device.chrome?a.scrollTo=new c.Point(0,1):a.scrollTo=new c.Point(0,0)),this.game.device.desktop?(a.orientationFallback="screen",a.clickTrampoline="when-not-mouse"):(a.orientationFallback="",a.clickTrampoline="");var b=this;this._orientationChange=function(a){return b.orientationChange(a)},this._windowResize=function(a){return b.windowResize(a)},window.addEventListener("orientationchange",this._orientationChange,!1),window.addEventListener("resize",this._windowResize,!1),this.compatibility.supportsFullScreen&&(this._fullScreenChange=function(a){return b.fullScreenChange(a)},this._fullScreenError=function(a){return b.fullScreenError(a)},document.addEventListener("webkitfullscreenchange",this._fullScreenChange,!1),document.addEventListener("mozfullscreenchange",this._fullScreenChange,!1),document.addEventListener("MSFullscreenChange",this._fullScreenChange,!1),document.addEventListener("fullscreenchange",this._fullScreenChange,!1),document.addEventListener("webkitfullscreenerror",this._fullScreenError,!1),document.addEventListener("mozfullscreenerror",this._fullScreenError,!1),document.addEventListener("MSFullscreenError",this._fullScreenError,!1),document.addEventListener("fullscreenerror",this._fullScreenError,!1)),this.game.onResume.add(this._gameResumed,this),this.dom.getOffset(this.game.canvas,this.offset),this.bounds.setTo(this.offset.x,this.offset.y,this.width,this.height),this.setGameSize(this.game.width,this.game.height),this.screenOrientation=this.dom.getScreenOrientation(this.compatibility.orientationFallback),c.FlexGrid&&(this.grid=new c.FlexGrid(this,this.width,this.height)),this._booted=!0,null!==this._pendingScaleMode&&(this.scaleMode=this._pendingScaleMode,this._pendingScaleMode=null)},parseConfig:function(a){void 0!==a.scaleMode&&(this._booted?this.scaleMode=a.scaleMode:this._pendingScaleMode=a.scaleMode),void 0!==a.fullScreenScaleMode&&(this.fullScreenScaleMode=a.fullScreenScaleMode),a.fullScreenTarget&&(this.fullScreenTarget=a.fullScreenTarget)},setupScale:function(a,b){var d,e=new c.Rectangle;""!==this.game.parent&&("string"==typeof this.game.parent?d=document.getElementById(this.game.parent):this.game.parent&&1===this.game.parent.nodeType&&(d=this.game.parent)),d?(this.parentNode=d,this.parentIsWindow=!1,this.getParentBounds(this._parentBounds),e.width=this._parentBounds.width,e.height=this._parentBounds.height,this.offset.set(this._parentBounds.x,this._parentBounds.y)):(this.parentNode=null,this.parentIsWindow=!0,e.width=this.dom.visualBounds.width,e.height=this.dom.visualBounds.height,this.offset.set(0,0));var f=0,g=0;"number"==typeof a?f=a:(this.parentScaleFactor.x=parseInt(a,10)/100,f=e.width*this.parentScaleFactor.x),"number"==typeof b?g=b:(this.parentScaleFactor.y=parseInt(b,10)/100,g=e.height*this.parentScaleFactor.y),f=Math.floor(f),g=Math.floor(g),this._gameSize.setTo(0,0,f,g),this.updateDimensions(f,g,!1)},_gameResumed:function(){this.queueUpdate(!0)},setGameSize:function(a,b){this._gameSize.setTo(0,0,a,b),this.currentScaleMode!==c.ScaleManager.RESIZE&&this.updateDimensions(a,b,!0),this.queueUpdate(!0)},setUserScale:function(a,b,c,d){this._userScaleFactor.setTo(a,b),this._userScaleTrim.setTo(0|c,0|d),this.queueUpdate(!0)},setResizeCallback:function(a,b){this.onResize=a,this.onResizeContext=b},signalSizeChange:function(){if(!c.Rectangle.sameDimensions(this,this._lastReportedCanvasSize)||!c.Rectangle.sameDimensions(this.game,this._lastReportedGameSize)){var a=this.width,b=this.height;this._lastReportedCanvasSize.setTo(0,0,a,b),this._lastReportedGameSize.setTo(0,0,this.game.width,this.game.height),this.grid&&this.grid.onResize(a,b),this.onSizeChange.dispatch(this,a,b),this.currentScaleMode===c.ScaleManager.RESIZE&&(this.game.state.resize(a,b),this.game.load.resize(a,b))}},setMinMax:function(a,b,c,d){this.minWidth=a,this.minHeight=b,"undefined"!=typeof c&&(this.maxWidth=c),"undefined"!=typeof d&&(this.maxHeight=d)},preUpdate:function(){if(!(this.game.time.time<this._lastUpdate+this._updateThrottle)){var a=this._updateThrottle;this._updateThrottleReset=a>=400?0:100,this.dom.getOffset(this.game.canvas,this.offset);var b=this._parentBounds.width,d=this._parentBounds.height,e=this.getParentBounds(this._parentBounds),f=e.width!==b||e.height!==d,g=this.updateOrientationState();(f||g)&&(this.onResize&&this.onResize.call(this.onResizeContext,this,e),this.updateLayout(),this.signalSizeChange());var h=2*this._updateThrottle;this._updateThrottle<a&&(h=Math.min(a,this._updateThrottleReset)),this._updateThrottle=c.Math.clamp(h,25,this.trackParentInterval),this._lastUpdate=this.game.time.time}},pauseUpdate:function(){this.preUpdate(),this._updateThrottle=this.trackParentInterval},updateDimensions:function(a,b,c){this.width=a*this.parentScaleFactor.x,this.height=b*this.parentScaleFactor.y,this.game.width=this.width,this.game.height=this.height,this.sourceAspectRatio=this.width/this.height,this.updateScalingAndBounds(),c&&(this.game.renderer.resize(this.width,this.height),this.game.camera.setSize(this.width,this.height),this.game.world.resize(this.width,this.height))},updateScalingAndBounds:function(){this.scaleFactor.x=this.game.width/this.width,this.scaleFactor.y=this.game.height/this.height,this.scaleFactorInversed.x=this.width/this.game.width,this.scaleFactorInversed.y=this.height/this.game.height,this.aspectRatio=this.width/this.height,this.game.canvas&&this.dom.getOffset(this.game.canvas,this.offset),this.bounds.setTo(this.offset.x,this.offset.y,this.width,this.height),this.game.input&&this.game.input.scale&&this.game.input.scale.setTo(this.scaleFactor.x,this.scaleFactor.y)},forceOrientation:function(a,b){void 0===b&&(b=!1),this.forceLandscape=a,this.forcePortrait=b,this.queueUpdate(!0)},classifyOrientation:function(a){return"portrait-primary"===a||"portrait-secondary"===a?"portrait":"landscape-primary"===a||"landscape-secondary"===a?"landscape":null},updateOrientationState:function(){var a=this.screenOrientation,b=this.incorrectOrientation;this.screenOrientation=this.dom.getScreenOrientation(this.compatibility.orientationFallback),this.incorrectOrientation=this.forceLandscape&&!this.isLandscape||this.forcePortrait&&!this.isPortrait;var c=a!==this.screenOrientation,d=b!==this.incorrectOrientation;return d&&(this.incorrectOrientation?this.enterIncorrectOrientation.dispatch():this.leaveIncorrectOrientation.dispatch()),(c||d)&&this.onOrientationChange.dispatch(this,a,b),c||d},orientationChange:function(a){this.event=a,this.queueUpdate(!0)},windowResize:function(a){this.event=a,this.queueUpdate(!0)},scrollTop:function(){var a=this.compatibility.scrollTo;a&&window.scrollTo(a.x,a.y)},refresh:function(){this.scrollTop(),this.queueUpdate(!0)},updateLayout:function(){var a=this.currentScaleMode;if(a===c.ScaleManager.RESIZE)return void this.reflowGame();if(this.scrollTop(),this.compatibility.forceMinimumDocumentHeight&&(document.documentElement.style.minHeight=window.innerHeight+"px"),this.incorrectOrientation?this.setMaximum():a===c.ScaleManager.EXACT_FIT?this.setExactFit():a===c.ScaleManager.SHOW_ALL?!this.isFullScreen&&this.boundingParent&&this.compatibility.canExpandParent?(this.setShowAll(!0),this.resetCanvas(),this.setShowAll()):this.setShowAll():a===c.ScaleManager.NO_SCALE?(this.width=this.game.width,this.height=this.game.height):a===c.ScaleManager.USER_SCALE&&(this.width=this.game.width*this._userScaleFactor.x-this._userScaleTrim.x,this.height=this.game.height*this._userScaleFactor.y-this._userScaleTrim.y),!this.compatibility.canExpandParent&&(a===c.ScaleManager.SHOW_ALL||a===c.ScaleManager.USER_SCALE)){var b=this.getParentBounds(this._tempBounds);this.width=Math.min(this.width,b.width),this.height=Math.min(this.height,b.height)}this.width=0|this.width,this.height=0|this.height,this.reflowCanvas()},getParentBounds:function(a){var b=a||new c.Rectangle,d=this.boundingParent,e=this.dom.visualBounds,f=this.dom.layoutBounds;if(d){var g=d.getBoundingClientRect(),h=d.offsetParent?d.offsetParent.getBoundingClientRect():d.getBoundingClientRect();b.setTo(g.left-h.left,g.top-h.top,g.width,g.height);var i=this.windowConstraints;if(i.right){var j="layout"===i.right?f:e;b.right=Math.min(b.right,j.width)}if(i.bottom){var j="layout"===i.bottom?f:e;b.bottom=Math.min(b.bottom,j.height)}}else b.setTo(0,0,e.width,e.height);return b.setTo(Math.round(b.x),Math.round(b.y),Math.round(b.width),Math.round(b.height)),b},alignCanvas:function(a,b){var c=this.getParentBounds(this._tempBounds),d=this.game.canvas,e=this.margin;if(a){e.left=e.right=0;var f=d.getBoundingClientRect();if(this.width<c.width&&!this.incorrectOrientation){var g=f.left-c.x,h=c.width/2-this.width/2;h=Math.max(h,0);var i=h-g;e.left=Math.round(i)}d.style.marginLeft=e.left+"px",0!==e.left&&(e.right=-(c.width-f.width-e.left),d.style.marginRight=e.right+"px")}if(b){e.top=e.bottom=0;var f=d.getBoundingClientRect();if(this.height<c.height&&!this.incorrectOrientation){var g=f.top-c.y,h=c.height/2-this.height/2;h=Math.max(h,0);var i=h-g;e.top=Math.round(i)}d.style.marginTop=e.top+"px",0!==e.top&&(e.bottom=-(c.height-f.height-e.top),d.style.marginBottom=e.bottom+"px")}e.x=e.left,e.y=e.top},reflowGame:function(){this.resetCanvas("","");var a=this.getParentBounds(this._tempBounds);this.updateDimensions(a.width,a.height,!0)},reflowCanvas:function(){this.incorrectOrientation||(this.width=c.Math.clamp(this.width,this.minWidth||0,this.maxWidth||this.width),this.height=c.Math.clamp(this.height,this.minHeight||0,this.maxHeight||this.height)),this.resetCanvas(),this.compatibility.noMargins||(this.isFullScreen&&this._createdFullScreenTarget?this.alignCanvas(!0,!0):this.alignCanvas(this.pageAlignHorizontally,this.pageAlignVertically)),this.updateScalingAndBounds()},resetCanvas:function(a,b){void 0===a&&(a=this.width+"px"),void 0===b&&(b=this.height+"px");var c=this.game.canvas;this.compatibility.noMargins||(c.style.marginLeft="",c.style.marginTop="",c.style.marginRight="",c.style.marginBottom=""),c.style.width=a,c.style.height=b},queueUpdate:function(a){a&&(this._parentBounds.width=0,this._parentBounds.height=0),this._updateThrottle=this._updateThrottleReset},reset:function(a){a&&this.grid&&this.grid.reset()},setMaximum:function(){this.width=this.dom.visualBounds.width,this.height=this.dom.visualBounds.height},setShowAll:function(a){var b,c=this.getParentBounds(this._tempBounds),d=c.width,e=c.height;b=a?Math.max(e/this.game.height,d/this.game.width):Math.min(e/this.game.height,d/this.game.width),this.width=Math.round(this.game.width*b),this.height=Math.round(this.game.height*b)},setExactFit:function(){var a=this.getParentBounds(this._tempBounds);this.width=a.width,this.height=a.height,this.isFullScreen||(this.maxWidth&&(this.width=Math.min(this.width,this.maxWidth)),this.maxHeight&&(this.height=Math.min(this.height,this.maxHeight)))},createFullScreenTarget:function(){var a=document.createElement("div");return a.style.margin="0",a.style.padding="0",a.style.background="#000",a},startFullScreen:function(a,b){if(this.isFullScreen)return!1;if(!this.compatibility.supportsFullScreen){var d=this;return void setTimeout(function(){d.fullScreenError()},10)}if("when-not-mouse"===this.compatibility.clickTrampoline){var e=this.game.input;if(e.activePointer&&e.activePointer!==e.mousePointer&&(b||b!==!1))return void e.activePointer.addClickTrampoline("startFullScreen",this.startFullScreen,this,[a,!1])}void 0!==a&&this.game.renderType===c.CANVAS&&(this.game.stage.smoothed=a);var f=this.fullScreenTarget;f||(this.cleanupCreatedTarget(),this._createdFullScreenTarget=this.createFullScreenTarget(),f=this._createdFullScreenTarget);var g={targetElement:f};if(this.hasPhaserSetFullScreen=!0,this.onFullScreenInit.dispatch(this,g),this._createdFullScreenTarget){var h=this.game.canvas,i=h.parentNode;
	i.insertBefore(f,h),f.appendChild(h)}return this.game.device.fullscreenKeyboard?f[this.game.device.requestFullscreen](Element.ALLOW_KEYBOARD_INPUT):f[this.game.device.requestFullscreen](),!0},stopFullScreen:function(){return!(!this.isFullScreen||!this.compatibility.supportsFullScreen)&&(this.hasPhaserSetFullScreen=!1,document[this.game.device.cancelFullscreen](),!0)},cleanupCreatedTarget:function(){var a=this._createdFullScreenTarget;if(a&&a.parentNode){var b=a.parentNode;b.insertBefore(this.game.canvas,a),b.removeChild(a)}this._createdFullScreenTarget=null},prepScreenMode:function(a){var b=!!this._createdFullScreenTarget,d=this._createdFullScreenTarget||this.fullScreenTarget;a?(b||this.fullScreenScaleMode===c.ScaleManager.EXACT_FIT)&&d!==this.game.canvas&&(this._fullScreenRestore={targetWidth:d.style.width,targetHeight:d.style.height},d.style.width="100%",d.style.height="100%"):(this._fullScreenRestore&&(d.style.width=this._fullScreenRestore.targetWidth,d.style.height=this._fullScreenRestore.targetHeight,this._fullScreenRestore=null),this.updateDimensions(this._gameSize.width,this._gameSize.height,!0),this.resetCanvas())},fullScreenChange:function(a){this.event=a,this.isFullScreen?(this.prepScreenMode(!0),this.updateLayout(),this.queueUpdate(!0)):(this.prepScreenMode(!1),this.cleanupCreatedTarget(),this.updateLayout(),this.queueUpdate(!0)),this.onFullScreenChange.dispatch(this,this.width,this.height)},fullScreenError:function(a){this.event=a,this.cleanupCreatedTarget(),console.warn("Phaser.ScaleManager: requestFullscreen failed or device does not support the Fullscreen API"),this.onFullScreenError.dispatch(this)},scaleSprite:function(a,b,c,d){if(void 0===b&&(b=this.width),void 0===c&&(c=this.height),void 0===d&&(d=!1),!a||!a.scale)return a;if(a.scale.x=1,a.scale.y=1,a.width<=0||a.height<=0||b<=0||c<=0)return a;var e=b,f=a.height*b/a.width,g=a.width*c/a.height,h=c,i=g>b;return i=i?d:!d,i?(a.width=Math.floor(e),a.height=Math.floor(f)):(a.width=Math.floor(g),a.height=Math.floor(h)),a},destroy:function(){this.game.onResume.remove(this._gameResumed,this),window.removeEventListener("orientationchange",this._orientationChange,!1),window.removeEventListener("resize",this._windowResize,!1),this.compatibility.supportsFullScreen&&(document.removeEventListener("webkitfullscreenchange",this._fullScreenChange,!1),document.removeEventListener("mozfullscreenchange",this._fullScreenChange,!1),document.removeEventListener("MSFullscreenChange",this._fullScreenChange,!1),document.removeEventListener("fullscreenchange",this._fullScreenChange,!1),document.removeEventListener("webkitfullscreenerror",this._fullScreenError,!1),document.removeEventListener("mozfullscreenerror",this._fullScreenError,!1),document.removeEventListener("MSFullscreenError",this._fullScreenError,!1),document.removeEventListener("fullscreenerror",this._fullScreenError,!1))}},c.ScaleManager.prototype.constructor=c.ScaleManager,Object.defineProperty(c.ScaleManager.prototype,"boundingParent",{get:function(){if(this.parentIsWindow||this.isFullScreen&&this.hasPhaserSetFullScreen&&!this._createdFullScreenTarget)return null;var a=this.game.canvas&&this.game.canvas.parentNode;return a||null}}),Object.defineProperty(c.ScaleManager.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(a){return a!==this._scaleMode&&(this.isFullScreen||(this.updateDimensions(this._gameSize.width,this._gameSize.height,!0),this.queueUpdate(!0)),this._scaleMode=a),this._scaleMode}}),Object.defineProperty(c.ScaleManager.prototype,"fullScreenScaleMode",{get:function(){return this._fullScreenScaleMode},set:function(a){return a!==this._fullScreenScaleMode&&(this.isFullScreen?(this.prepScreenMode(!1),this._fullScreenScaleMode=a,this.prepScreenMode(!0),this.queueUpdate(!0)):this._fullScreenScaleMode=a),this._fullScreenScaleMode}}),Object.defineProperty(c.ScaleManager.prototype,"currentScaleMode",{get:function(){return this.isFullScreen?this._fullScreenScaleMode:this._scaleMode}}),Object.defineProperty(c.ScaleManager.prototype,"pageAlignHorizontally",{get:function(){return this._pageAlignHorizontally},set:function(a){a!==this._pageAlignHorizontally&&(this._pageAlignHorizontally=a,this.queueUpdate(!0))}}),Object.defineProperty(c.ScaleManager.prototype,"pageAlignVertically",{get:function(){return this._pageAlignVertically},set:function(a){a!==this._pageAlignVertically&&(this._pageAlignVertically=a,this.queueUpdate(!0))}}),Object.defineProperty(c.ScaleManager.prototype,"isFullScreen",{get:function(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)}}),Object.defineProperty(c.ScaleManager.prototype,"isPortrait",{get:function(){return"portrait"===this.classifyOrientation(this.screenOrientation)}}),Object.defineProperty(c.ScaleManager.prototype,"isLandscape",{get:function(){return"landscape"===this.classifyOrientation(this.screenOrientation)}}),Object.defineProperty(c.ScaleManager.prototype,"isGamePortrait",{get:function(){return this.height>this.width}}),Object.defineProperty(c.ScaleManager.prototype,"isGameLandscape",{get:function(){return this.width>this.height}}),c.Utils.Debug=function(a){this.game=a,this.sprite=null,this.bmd=null,this.canvas=null,this.context=null,this.font="14px Courier",this.columnWidth=100,this.lineHeight=16,this.renderShadow=!0,this.currentX=0,this.currentY=0,this.currentAlpha=1,this.dirty=!1},c.Utils.Debug.prototype={boot:function(){this.game.renderType===c.CANVAS?this.context=this.game.context:(this.bmd=new c.BitmapData(this.game,"__DEBUG",this.game.width,this.game.height,(!0)),this.sprite=this.game.make.image(0,0,this.bmd),this.game.stage.addChild(this.sprite),this.game.scale.onSizeChange.add(this.resize,this),this.canvas=PIXI.CanvasPool.create(this,this.game.width,this.game.height),this.context=this.canvas.getContext("2d"))},resize:function(a,b,c){this.bmd.resize(b,c),this.canvas.width=b,this.canvas.height=c},preUpdate:function(){this.dirty&&this.sprite&&(this.bmd.clear(),this.bmd.draw(this.canvas,0,0),this.context.clearRect(0,0,this.game.width,this.game.height),this.dirty=!1)},reset:function(){this.context&&this.context.clearRect(0,0,this.game.width,this.game.height),this.sprite&&this.bmd.clear()},start:function(a,b,c,d){"number"!=typeof a&&(a=0),"number"!=typeof b&&(b=0),c=c||"rgb(255,255,255)",void 0===d&&(d=0),this.currentX=a,this.currentY=b,this.currentColor=c,this.columnWidth=d,this.dirty=!0,this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.strokeStyle=c,this.context.fillStyle=c,this.context.font=this.font,this.context.globalAlpha=this.currentAlpha},stop:function(){this.context.restore()},line:function(){for(var a=this.currentX,b=0;b<arguments.length;b++)this.renderShadow&&(this.context.fillStyle="rgb(0,0,0)",this.context.fillText(arguments[b],a+1,this.currentY+1),this.context.fillStyle=this.currentColor),this.context.fillText(arguments[b],a,this.currentY),a+=this.columnWidth;this.currentY+=this.lineHeight},soundInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sound: "+a.key+" Locked: "+a.game.sound.touchLocked),this.line("Is Ready?: "+this.game.cache.isSoundReady(a.key)+" Pending Playback: "+a.pendingPlayback),this.line("Decoded: "+a.isDecoded+" Decoding: "+a.isDecoding),this.line("Total Duration: "+a.totalDuration+" Playing: "+a.isPlaying),this.line("Time: "+a.currentTime),this.line("Volume: "+a.volume+" Muted: "+a.mute),this.line("WebAudio: "+a.usingWebAudio+" Audio: "+a.usingAudioTag),""!==a.currentMarker&&(this.line("Marker: "+a.currentMarker+" Duration: "+a.duration+" (ms: "+a.durationMS+")"),this.line("Start: "+a.markers[a.currentMarker].start+" Stop: "+a.markers[a.currentMarker].stop),this.line("Position: "+a.position)),this.stop()},cameraInfo:function(a,b,c,d){this.start(b,c,d),this.line("Camera ("+a.width+" x "+a.height+")"),this.line("X: "+a.x+" Y: "+a.y),a.bounds&&this.line("Bounds x: "+a.bounds.x+" Y: "+a.bounds.y+" w: "+a.bounds.width+" h: "+a.bounds.height),this.line("View x: "+a.view.x+" Y: "+a.view.y+" w: "+a.view.width+" h: "+a.view.height),this.line("Total in view: "+a.totalInView),this.stop()},timer:function(a,b,c,d){this.start(b,c,d),this.line("Timer (running: "+a.running+" expired: "+a.expired+")"),this.line("Next Tick: "+a.next+" Duration: "+a.duration),this.line("Paused: "+a.paused+" Length: "+a.length),this.stop()},pointer:function(a,b,c,d,e){null!=a&&(void 0===b&&(b=!1),c=c||"rgba(0,255,0,0.5)",d=d||"rgba(255,0,0,0.5)",b===!0&&a.isUp===!0||(this.start(a.x,a.y-100,e),this.context.beginPath(),this.context.arc(a.x,a.y,a.circle.radius,0,2*Math.PI),a.active?this.context.fillStyle=c:this.context.fillStyle=d,this.context.fill(),this.context.closePath(),this.context.beginPath(),this.context.moveTo(a.positionDown.x,a.positionDown.y),this.context.lineTo(a.position.x,a.position.y),this.context.lineWidth=2,this.context.stroke(),this.context.closePath(),this.line("ID: "+a.id+" Active: "+a.active),this.line("World X: "+a.worldX+" World Y: "+a.worldY),this.line("Screen X: "+a.x+" Screen Y: "+a.y+" In: "+a.withinGame),this.line("Duration: "+a.duration+" ms"),this.line("is Down: "+a.isDown+" is Up: "+a.isUp),this.stop()))},spriteInputInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sprite Input: ("+a.width+" x "+a.height+")"),this.line("x: "+a.input.pointerX().toFixed(1)+" y: "+a.input.pointerY().toFixed(1)),this.line("over: "+a.input.pointerOver()+" duration: "+a.input.overDuration().toFixed(0)),this.line("down: "+a.input.pointerDown()+" duration: "+a.input.downDuration().toFixed(0)),this.line("just over: "+a.input.justOver()+" just out: "+a.input.justOut()),this.stop()},key:function(a,b,c,d){this.start(b,c,d,150),this.line("Key:",a.keyCode,"isDown:",a.isDown),this.line("justDown:",a.justDown,"justUp:",a.justUp),this.line("Time Down:",a.timeDown.toFixed(0),"duration:",a.duration.toFixed(0)),this.stop()},inputInfo:function(a,b,c){this.start(a,b,c),this.line("Input"),this.line("X: "+this.game.input.x+" Y: "+this.game.input.y),this.line("World X: "+this.game.input.worldX+" World Y: "+this.game.input.worldY),this.line("Scale X: "+this.game.input.scale.x.toFixed(1)+" Scale Y: "+this.game.input.scale.x.toFixed(1)),this.line("Screen X: "+this.game.input.activePointer.screenX+" Screen Y: "+this.game.input.activePointer.screenY),this.stop()},spriteBounds:function(a,b,c){var d=a.getBounds();d.x+=this.game.camera.x,d.y+=this.game.camera.y,this.rectangle(d,b,c)},ropeSegments:function(a,b,c){var d=a.segments,e=this;d.forEach(function(a){e.rectangle(a,b,c)},this)},spriteInfo:function(a,b,c,d){this.start(b,c,d),this.line("Sprite:  ("+a.width+" x "+a.height+") anchor: "+a.anchor.x+" x "+a.anchor.y),this.line("x: "+a.x.toFixed(1)+" y: "+a.y.toFixed(1)),this.line("angle: "+a.angle.toFixed(1)+" rotation: "+a.rotation.toFixed(1)),this.line("visible: "+a.visible+" in camera: "+a.inCamera),this.line("bounds x: "+a._bounds.x.toFixed(1)+" y: "+a._bounds.y.toFixed(1)+" w: "+a._bounds.width.toFixed(1)+" h: "+a._bounds.height.toFixed(1)),this.stop()},spriteCoords:function(a,b,c,d){this.start(b,c,d,100),a.name&&this.line(a.name),this.line("x:",a.x.toFixed(2),"y:",a.y.toFixed(2)),this.line("pos x:",a.position.x.toFixed(2),"pos y:",a.position.y.toFixed(2)),this.line("world x:",a.world.x.toFixed(2),"world y:",a.world.y.toFixed(2)),this.stop()},lineInfo:function(a,b,c,d){this.start(b,c,d,80),this.line("start.x:",a.start.x.toFixed(2),"start.y:",a.start.y.toFixed(2)),this.line("end.x:",a.end.x.toFixed(2),"end.y:",a.end.y.toFixed(2)),this.line("length:",a.length.toFixed(2),"angle:",a.angle),this.stop()},pixel:function(a,b,c,d){d=d||2,this.start(),this.context.fillStyle=c,this.context.fillRect(a,b,d,d),this.stop()},geom:function(a,b,d,e){void 0===d&&(d=!0),void 0===e&&(e=0),b=b||"rgba(0,255,0,0.4)",this.start(),this.context.fillStyle=b,this.context.strokeStyle=b,a instanceof c.Rectangle||1===e?d?this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height):this.context.strokeRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height):a instanceof c.Circle||2===e?(this.context.beginPath(),this.context.arc(a.x-this.game.camera.x,a.y-this.game.camera.y,a.radius,0,2*Math.PI,!1),this.context.closePath(),d?this.context.fill():this.context.stroke()):a instanceof c.Point||3===e?this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,4,4):(a instanceof c.Line||4===e)&&(this.context.lineWidth=1,this.context.beginPath(),this.context.moveTo(a.start.x+.5-this.game.camera.x,a.start.y+.5-this.game.camera.y),this.context.lineTo(a.end.x+.5-this.game.camera.x,a.end.y+.5-this.game.camera.y),this.context.closePath(),this.context.stroke()),this.stop()},rectangle:function(a,b,c){void 0===c&&(c=!0),b=b||"rgba(0, 255, 0, 0.4)",this.start(),c?(this.context.fillStyle=b,this.context.fillRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height)):(this.context.strokeStyle=b,this.context.strokeRect(a.x-this.game.camera.x,a.y-this.game.camera.y,a.width,a.height)),this.stop()},text:function(a,b,c,d,e){d=d||"rgb(255,255,255)",e=e||"16px Courier",this.start(),this.context.font=e,this.renderShadow&&(this.context.fillStyle="rgb(0,0,0)",this.context.fillText(a,b+1,c+1)),this.context.fillStyle=d,this.context.fillText(a,b,c),this.stop()},quadTree:function(a,b){b=b||"rgba(255,0,0,0.3)",this.start();var c=a.bounds;if(0===a.nodes.length){this.context.strokeStyle=b,this.context.strokeRect(c.x,c.y,c.width,c.height),this.text("size: "+a.objects.length,c.x+4,c.y+16,"rgb(0,200,0)","12px Courier"),this.context.strokeStyle="rgb(0,255,0)";for(var d=0;d<a.objects.length;d++)this.context.strokeRect(a.objects[d].x,a.objects[d].y,a.objects[d].width,a.objects[d].height)}else for(var d=0;d<a.nodes.length;d++)this.quadTree(a.nodes[d]);this.stop()},body:function(a,b,d){a.body&&(this.start(),a.body.type===c.Physics.ARCADE?c.Physics.Arcade.Body.render(this.context,a.body,b,d):a.body.type===c.Physics.NINJA?c.Physics.Ninja.Body.render(this.context,a.body,b,d):a.body.type===c.Physics.BOX2D&&c.Physics.Box2D.renderBody(this.context,a.body,b),this.stop())},bodyInfo:function(a,b,d,e){a.body&&(this.start(b,d,e,210),a.body.type===c.Physics.ARCADE?c.Physics.Arcade.Body.renderBodyInfo(this,a.body):a.body.type===c.Physics.BOX2D&&this.game.physics.box2d.renderBodyInfo(this,a.body),this.stop())},box2dWorld:function(){this.start(),this.context.translate(-this.game.camera.view.x,-this.game.camera.view.y,0),this.game.physics.box2d.renderDebugDraw(this.context),this.stop()},box2dBody:function(a,b){this.start(),c.Physics.Box2D.renderBody(this.context,a,b),this.stop()},displayList:function(a){if(void 0===a&&(a=this.game.world),a.hasOwnProperty("renderOrderID")?console.log("["+a.renderOrderID+"]",a):console.log("[]",a),a.children&&a.children.length>0)for(var b=0;b<a.children.length;b++)this.game.debug.displayList(a.children[b])},destroy:function(){PIXI.CanvasPool.remove(this)}},c.Utils.Debug.prototype.constructor=c.Utils.Debug,c.DOM={getOffset:function(a,b){b=b||new c.Point;var d=a.getBoundingClientRect(),e=c.DOM.scrollY,f=c.DOM.scrollX,g=document.documentElement.clientTop,h=document.documentElement.clientLeft;return b.x=d.left+f-h,b.y=d.top+e-g,b},getBounds:function(a,b){return void 0===b&&(b=0),a=a&&!a.nodeType?a[0]:a,!(!a||1!==a.nodeType)&&this.calibrate(a.getBoundingClientRect(),b)},calibrate:function(a,b){b=+b||0;var c={width:0,height:0,left:0,right:0,top:0,bottom:0};return c.width=(c.right=a.right+b)-(c.left=a.left-b),c.height=(c.bottom=a.bottom+b)-(c.top=a.top-b),c},getAspectRatio:function(a){a=null==a?this.visualBounds:1===a.nodeType?this.getBounds(a):a;var b=a.width,c=a.height;return"function"==typeof b&&(b=b.call(a)),"function"==typeof c&&(c=c.call(a)),b/c},inLayoutViewport:function(a,b){var c=this.getBounds(a,b);return!!c&&c.bottom>=0&&c.right>=0&&c.top<=this.layoutBounds.width&&c.left<=this.layoutBounds.height},getScreenOrientation:function(a){var b=window.screen,c=b.orientation||b.mozOrientation||b.msOrientation;if(c&&"string"==typeof c.type)return c.type;if("string"==typeof c)return c;var d="portrait-primary",e="landscape-primary";if("screen"===a)return b.height>b.width?d:e;if("viewport"===a)return this.visualBounds.height>this.visualBounds.width?d:e;if("window.orientation"===a&&"number"==typeof window.orientation)return 0===window.orientation||180===window.orientation?d:e;if(window.matchMedia){if(window.matchMedia("(orientation: portrait)").matches)return d;if(window.matchMedia("(orientation: landscape)").matches)return e}return this.visualBounds.height>this.visualBounds.width?d:e},visualBounds:new c.Rectangle,layoutBounds:new c.Rectangle,documentBounds:new c.Rectangle},c.Device.whenReady(function(a){var b=window&&"pageXOffset"in window?function(){return window.pageXOffset}:function(){return document.documentElement.scrollLeft},d=window&&"pageYOffset"in window?function(){return window.pageYOffset}:function(){return document.documentElement.scrollTop};Object.defineProperty(c.DOM,"scrollX",{get:b}),Object.defineProperty(c.DOM,"scrollY",{get:d}),Object.defineProperty(c.DOM.visualBounds,"x",{get:b}),Object.defineProperty(c.DOM.visualBounds,"y",{get:d}),Object.defineProperty(c.DOM.layoutBounds,"x",{value:0}),Object.defineProperty(c.DOM.layoutBounds,"y",{value:0});var e=a.desktop&&document.documentElement.clientWidth<=window.innerWidth&&document.documentElement.clientHeight<=window.innerHeight;if(e){var f=function(){return Math.max(window.innerWidth,document.documentElement.clientWidth)},g=function(){return Math.max(window.innerHeight,document.documentElement.clientHeight)};Object.defineProperty(c.DOM.visualBounds,"width",{get:f}),Object.defineProperty(c.DOM.visualBounds,"height",{get:g}),Object.defineProperty(c.DOM.layoutBounds,"width",{get:f}),Object.defineProperty(c.DOM.layoutBounds,"height",{get:g})}else Object.defineProperty(c.DOM.visualBounds,"width",{get:function(){return window.innerWidth}}),Object.defineProperty(c.DOM.visualBounds,"height",{get:function(){return window.innerHeight}}),Object.defineProperty(c.DOM.layoutBounds,"width",{get:function(){var a=document.documentElement.clientWidth,b=window.innerWidth;return a<b?b:a}}),Object.defineProperty(c.DOM.layoutBounds,"height",{get:function(){var a=document.documentElement.clientHeight,b=window.innerHeight;return a<b?b:a}});Object.defineProperty(c.DOM.documentBounds,"x",{value:0}),Object.defineProperty(c.DOM.documentBounds,"y",{value:0}),Object.defineProperty(c.DOM.documentBounds,"width",{get:function(){var a=document.documentElement;return Math.max(a.clientWidth,a.offsetWidth,a.scrollWidth)}}),Object.defineProperty(c.DOM.documentBounds,"height",{get:function(){var a=document.documentElement;return Math.max(a.clientHeight,a.offsetHeight,a.scrollHeight)}})},null,!0),c.ArraySet=function(a){this.position=0,this.list=a||[]},c.ArraySet.prototype={add:function(a){return this.exists(a)||this.list.push(a),a},getIndex:function(a){return this.list.indexOf(a)},getByKey:function(a,b){for(var c=this.list.length;c--;)if(this.list[c][a]===b)return this.list[c];return null},exists:function(a){return this.list.indexOf(a)>-1},reset:function(){this.list.length=0},remove:function(a){var b=this.list.indexOf(a);if(b>-1)return this.list.splice(b,1),a},setAll:function(a,b){for(var c=this.list.length;c--;)this.list[c]&&(this.list[c][a]=b)},callAll:function(a){for(var b=Array.prototype.slice.call(arguments,1),c=this.list.length;c--;)this.list[c]&&this.list[c][a]&&this.list[c][a].apply(this.list[c],b)},removeAll:function(a){void 0===a&&(a=!1);for(var b=this.list.length;b--;)if(this.list[b]){var c=this.remove(this.list[b]);a&&c.destroy()}this.position=0,this.list=[]}},Object.defineProperty(c.ArraySet.prototype,"total",{get:function(){return this.list.length}}),Object.defineProperty(c.ArraySet.prototype,"first",{get:function(){return this.position=0,this.list.length>0?this.list[0]:null}}),Object.defineProperty(c.ArraySet.prototype,"next",{get:function(){return this.position<this.list.length?(this.position++,this.list[this.position]):null}}),c.ArraySet.prototype.constructor=c.ArraySet,c.ArrayUtils={getRandomItem:function(a,b,c){if(null===a)return null;void 0===b&&(b=0),void 0===c&&(c=a.length);var d=b+Math.floor(Math.random()*c);return void 0===a[d]?null:a[d]},removeRandomItem:function(a,b,c){if(null==a)return null;void 0===b&&(b=0),void 0===c&&(c=a.length);var d=b+Math.floor(Math.random()*c);if(d<a.length){var e=a.splice(d,1);return void 0===e[0]?null:e[0]}return null},shuffle:function(a){for(var b=a.length-1;b>0;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c],a[c]=d}return a},transposeMatrix:function(a){for(var b=a.length,c=a[0].length,d=new Array(c),e=0;e<c;e++){d[e]=new Array(b);for(var f=b-1;f>-1;f--)d[e][f]=a[f][e]}return d},rotateMatrix:function(a,b){if("string"!=typeof b&&(b=(b%360+360)%360),90===b||b===-270||"rotateLeft"===b)a=c.ArrayUtils.transposeMatrix(a),a=a.reverse();else if(b===-90||270===b||"rotateRight"===b)a=a.reverse(),a=c.ArrayUtils.transposeMatrix(a);else if(180===Math.abs(b)||"rotate180"===b){for(var d=0;d<a.length;d++)a[d].reverse();a=a.reverse()}return a},findClosest:function(a,b){if(!b.length)return NaN;if(1===b.length||a<b[0])return b[0];for(var c=1;b[c]<a;)c++;var d=b[c-1],e=c<b.length?b[c]:Number.POSITIVE_INFINITY;return e-a<=a-d?e:d},rotateRight:function(a){var b=a.pop();return a.unshift(b),b},rotateLeft:function(a){var b=a.shift();return a.push(b),b},rotate:function(a){var b=a.shift();return a.push(b),b},numberArray:function(a,b){for(var c=[],d=a;d<=b;d++)c.push(d);return c},numberArrayStep:function(a,b,d){void 0!==a&&null!==a||(a=0),void 0!==b&&null!==b||(b=a,a=0),void 0===d&&(d=1);for(var e=[],f=Math.max(c.Math.roundAwayFromZero((b-a)/(d||1)),0),g=0;g<f;g++)e.push(a),a+=d;return e}},c.LinkedList=function(){this.next=null,this.prev=null,this.first=null,this.last=null,this.total=0},c.LinkedList.prototype={add:function(a){return 0===this.total&&null===this.first&&null===this.last?(this.first=a,this.last=a,this.next=a,a.prev=this,this.total++,a):(this.last.next=a,a.prev=this.last,this.last=a,this.total++,a)},reset:function(){this.first=null,this.last=null,this.next=null,this.prev=null,this.total=0},remove:function(a){return 1===this.total?(this.reset(),void(a.next=a.prev=null)):(a===this.first?this.first=this.first.next:a===this.last&&(this.last=this.last.prev),a.prev&&(a.prev.next=a.next),a.next&&(a.next.prev=a.prev),a.next=a.prev=null,null===this.first&&(this.last=null),void this.total--)},callAll:function(a){if(this.first&&this.last){var b=this.first;do b&&b[a]&&b[a].call(b),b=b.next;while(b!==this.last.next)}}},c.LinkedList.prototype.constructor=c.LinkedList,c.Create=function(a){this.game=a,this.bmd=null,this.canvas=null,this.ctx=null,this.palettes=[{0:"#000",1:"#9D9D9D",2:"#FFF",3:"#BE2633",4:"#E06F8B",5:"#493C2B",6:"#A46422",7:"#EB8931",8:"#F7E26B",9:"#2F484E",A:"#44891A",B:"#A3CE27",C:"#1B2632",D:"#005784",E:"#31A2F2",F:"#B2DCEF"},{0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#f5f4eb"},{0:"#000",1:"#2234d1",2:"#0c7e45",3:"#44aacc",4:"#8a3622",5:"#5c2e78",6:"#aa5c3d",7:"#b5b5b5",8:"#5e606e",9:"#4c81fb",A:"#6cd947",B:"#7be2f9",C:"#eb8a60",D:"#e23d69",E:"#ffd93f",F:"#fff"},{0:"#000",1:"#fff",2:"#8b4131",3:"#7bbdc5",4:"#8b41ac",5:"#6aac41",6:"#3931a4",7:"#d5de73",8:"#945a20",9:"#5a4100",A:"#bd736a",B:"#525252",C:"#838383",D:"#acee8b",E:"#7b73de",F:"#acacac"},{0:"#000",1:"#191028",2:"#46af45",3:"#a1d685",4:"#453e78",5:"#7664fe",6:"#833129",7:"#9ec2e8",8:"#dc534b",9:"#e18d79",A:"#d6b97b",B:"#e9d8a1",C:"#216c4b",D:"#d365c8",E:"#afaab9",F:"#fff"}]},c.Create.PALETTE_ARNE=0,c.Create.PALETTE_JMP=1,c.Create.PALETTE_CGA=2,c.Create.PALETTE_C64=3,c.Create.PALETTE_JAPANESE_MACHINE=4,c.Create.prototype={texture:function(a,b,c,d,e){void 0===c&&(c=8),void 0===d&&(d=c),void 0===e&&(e=0);var f=b[0].length*c,g=b.length*d;null===this.bmd&&(this.bmd=this.game.make.bitmapData(),this.canvas=this.bmd.canvas,this.ctx=this.bmd.context),this.bmd.resize(f,g),this.bmd.clear();for(var h=0;h<b.length;h++)for(var i=b[h],j=0;j<i.length;j++){var k=i[j];"."!==k&&" "!==k&&(this.ctx.fillStyle=this.palettes[e][k],this.ctx.fillRect(j*c,h*d,c,d))}return this.bmd.generateTexture(a)},grid:function(a,b,c,d,e,f){null===this.bmd&&(this.bmd=this.game.make.bitmapData(),this.canvas=this.bmd.canvas,this.ctx=this.bmd.context),this.bmd.resize(b,c),this.ctx.fillStyle=f;for(var g=0;g<c;g+=e)this.ctx.fillRect(0,g,b,1);for(var h=0;h<b;h+=d)this.ctx.fillRect(h,0,1,c);return this.bmd.generateTexture(a)}},c.Create.prototype.constructor=c.Create,c.FlexGrid=function(a,b,d){this.game=a.game,this.manager=a,this.width=b,this.height=d,this.boundsCustom=new c.Rectangle(0,0,b,d),this.boundsFluid=new c.Rectangle(0,0,b,d),this.boundsFull=new c.Rectangle(0,0,b,d),this.boundsNone=new c.Rectangle(0,0,b,d),this.positionCustom=new c.Point(0,0),this.positionFluid=new c.Point(0,0),this.positionFull=new c.Point(0,0),this.positionNone=new c.Point(0,0),this.scaleCustom=new c.Point(1,1),this.scaleFluid=new c.Point(1,1),this.scaleFluidInversed=new c.Point(1,1),this.scaleFull=new c.Point(1,1),this.scaleNone=new c.Point(1,1),this.customWidth=0,this.customHeight=0,this.customOffsetX=0,this.customOffsetY=0,this.ratioH=b/d,this.ratioV=d/b,this.multiplier=0,this.layers=[]},c.FlexGrid.prototype={setSize:function(a,b){this.width=a,this.height=b,this.ratioH=a/b,this.ratioV=b/a,this.scaleNone=new c.Point(1,1),this.boundsNone.width=this.width,this.boundsNone.height=this.height,this.refresh()},createCustomLayer:function(a,b,d,e){void 0===e&&(e=!0),this.customWidth=a,this.customHeight=b,this.boundsCustom.width=a,this.boundsCustom.height=b;var f=new c.FlexLayer(this,this.positionCustom,this.boundsCustom,this.scaleCustom);return e&&this.game.world.add(f),this.layers.push(f),"undefined"!=typeof d&&null!==typeof d&&f.addMultiple(d),f},createFluidLayer:function(a,b){void 0===b&&(b=!0);var d=new c.FlexLayer(this,this.positionFluid,this.boundsFluid,this.scaleFluid);return b&&this.game.world.add(d),this.layers.push(d),"undefined"!=typeof a&&null!==typeof a&&d.addMultiple(a),d},createFullLayer:function(a){var b=new c.FlexLayer(this,this.positionFull,this.boundsFull,this.scaleFluid);return this.game.world.add(b),this.layers.push(b),"undefined"!=typeof a&&b.addMultiple(a),b},createFixedLayer:function(a){var b=new c.FlexLayer(this,this.positionNone,this.boundsNone,this.scaleNone);return this.game.world.add(b),this.layers.push(b),"undefined"!=typeof a&&b.addMultiple(a),b},reset:function(){for(var a=this.layers.length;a--;)this.layers[a].persist||(this.layers[a].position=null,this.layers[a].scale=null,this.layers.slice(a,1))},onResize:function(a,b){this.ratioH=a/b,this.ratioV=b/a,this.refresh(a,b)},refresh:function(){this.multiplier=Math.min(this.manager.height/this.height,this.manager.width/this.width),this.boundsFluid.width=Math.round(this.width*this.multiplier),this.boundsFluid.height=Math.round(this.height*this.multiplier),this.scaleFluid.set(this.boundsFluid.width/this.width,this.boundsFluid.height/this.height),this.scaleFluidInversed.set(this.width/this.boundsFluid.width,this.height/this.boundsFluid.height),this.scaleFull.set(this.boundsFull.width/this.width,this.boundsFull.height/this.height),this.boundsFull.width=Math.round(this.manager.width*this.scaleFluidInversed.x),this.boundsFull.height=Math.round(this.manager.height*this.scaleFluidInversed.y),this.boundsFluid.centerOn(this.manager.bounds.centerX,this.manager.bounds.centerY),this.boundsNone.centerOn(this.manager.bounds.centerX,this.manager.bounds.centerY),this.positionFluid.set(this.boundsFluid.x,this.boundsFluid.y),this.positionNone.set(this.boundsNone.x,this.boundsNone.y)},fitSprite:function(a){this.manager.scaleSprite(a),a.x=this.manager.bounds.centerX,a.y=this.manager.bounds.centerY},debug:function(){this.game.debug.text(this.boundsFluid.width+" x "+this.boundsFluid.height,this.boundsFluid.x+4,this.boundsFluid.y+16),this.game.debug.geom(this.boundsFluid,"rgba(255,0,0,0.9",!1)}},c.FlexGrid.prototype.constructor=c.FlexGrid,c.FlexLayer=function(a,b,d,e){c.Group.call(this,a.game,null,"__flexLayer"+a.game.rnd.uuid(),!1),this.manager=a.manager,this.grid=a,this.persist=!1,this.position=b,this.bounds=d,this.scale=e,this.topLeft=d.topLeft,this.topMiddle=new c.Point(d.halfWidth,0),this.topRight=d.topRight,this.bottomLeft=d.bottomLeft,this.bottomMiddle=new c.Point(d.halfWidth,d.bottom),this.bottomRight=d.bottomRight},c.FlexLayer.prototype=Object.create(c.Group.prototype),c.FlexLayer.prototype.constructor=c.FlexLayer,c.FlexLayer.prototype.resize=function(){},c.FlexLayer.prototype.debug=function(){this.game.debug.text(this.bounds.width+" x "+this.bounds.height,this.bounds.x+4,this.bounds.y+16),this.game.debug.geom(this.bounds,"rgba(0,0,255,0.9",!1),this.game.debug.geom(this.topLeft,"rgba(255,255,255,0.9"),this.game.debug.geom(this.topMiddle,"rgba(255,255,255,0.9"),this.game.debug.geom(this.topRight,"rgba(255,255,255,0.9")},c.Color={packPixel:function(a,b,d,e){return c.Device.LITTLE_ENDIAN?(e<<24|d<<16|b<<8|a)>>>0:(a<<24|b<<16|d<<8|e)>>>0},unpackPixel:function(a,b,d,e){return void 0!==b&&null!==b||(b=c.Color.createColor()),void 0!==d&&null!==d||(d=!1),void 0!==e&&null!==e||(e=!1),c.Device.LITTLE_ENDIAN?(b.a=(4278190080&a)>>>24,b.b=(16711680&a)>>>16,b.g=(65280&a)>>>8,b.r=255&a):(b.r=(4278190080&a)>>>24,b.g=(16711680&a)>>>16,b.b=(65280&a)>>>8,b.a=255&a),b.color=a,b.rgba="rgba("+b.r+","+b.g+","+b.b+","+b.a/255+")",d&&c.Color.RGBtoHSL(b.r,b.g,b.b,b),e&&c.Color.RGBtoHSV(b.r,b.g,b.b,b),b},fromRGBA:function(a,b){return b||(b=c.Color.createColor()),b.r=(4278190080&a)>>>24,b.g=(16711680&a)>>>16,b.b=(65280&a)>>>8,b.a=255&a,b.rgba="rgba("+b.r+","+b.g+","+b.b+","+b.a+")",b},toRGBA:function(a,b,c,d){return a<<24|b<<16|c<<8|d},toABGR:function(a,b,c,d){return(d<<24|c<<16|b<<8|a)>>>0},RGBtoHSL:function(a,b,d,e){e||(e=c.Color.createColor(a,b,d,1)),a/=255,b/=255,d/=255;var f=Math.min(a,b,d),g=Math.max(a,b,d);if(e.h=0,e.s=0,e.l=(g+f)/2,g!==f){var h=g-f;e.s=e.l>.5?h/(2-g-f):h/(g+f),g===a?e.h=(b-d)/h+(b<d?6:0):g===b?e.h=(d-a)/h+2:g===d&&(e.h=(a-b)/h+4),e.h/=6}return e},HSLtoRGB:function(a,b,d,e){if(e?(e.r=d,e.g=d,e.b=d):e=c.Color.createColor(d,d,d),0!==b){var f=d<.5?d*(1+b):d+b-d*b,g=2*d-f;e.r=c.Color.hueToColor(g,f,a+1/3),e.g=c.Color.hueToColor(g,f,a),e.b=c.Color.hueToColor(g,f,a-1/3)}return e.r=Math.floor(255*e.r|0),e.g=Math.floor(255*e.g|0),e.b=Math.floor(255*e.b|0),c.Color.updateColor(e),e},RGBtoHSV:function(a,b,d,e){e||(e=c.Color.createColor(a,b,d,255)),a/=255,b/=255,d/=255;var f=Math.min(a,b,d),g=Math.max(a,b,d),h=g-f;return e.h=0,e.s=0===g?0:h/g,e.v=g,g!==f&&(g===a?e.h=(b-d)/h+(b<d?6:0):g===b?e.h=(d-a)/h+2:g===d&&(e.h=(a-b)/h+4),e.h/=6),e},HSVtoRGB:function(a,b,d,e){void 0===e&&(e=c.Color.createColor(0,0,0,1,a,b,0,d));var f,g,h,i=Math.floor(6*a),j=6*a-i,k=d*(1-b),l=d*(1-j*b),m=d*(1-(1-j)*b);switch(i%6){case 0:f=d,g=m,h=k;break;case 1:f=l,g=d,h=k;break;case 2:f=k,g=d,h=m;break;case 3:f=k,g=l,h=d;break;case 4:f=m,g=k,h=d;break;case 5:f=d,g=k,h=l}return e.r=Math.floor(255*f),e.g=Math.floor(255*g),e.b=Math.floor(255*h),c.Color.updateColor(e),e},hueToColor:function(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a},createColor:function(a,b,d,e,f,g,h,i){var j={r:a||0,g:b||0,b:d||0,a:e||1,h:f||0,s:g||0,l:h||0,v:i||0,color:0,color32:0,rgba:""};return c.Color.updateColor(j)},updateColor:function(a){return a.rgba="rgba("+a.r.toString()+","+a.g.toString()+","+a.b.toString()+","+a.a.toString()+")",a.color=c.Color.getColor(a.r,a.g,a.b),a.color32=c.Color.getColor32(255*a.a,a.r,a.g,a.b),a},getColor32:function(a,b,c,d){return a<<24|b<<16|c<<8|d},getColor:function(a,b,c){return a<<16|b<<8|c},RGBtoString:function(a,b,d,e,f){return void 0===e&&(e=255),void 0===f&&(f="#"),"#"===f?"#"+((1<<24)+(a<<16)+(b<<8)+d).toString(16).slice(1):"0x"+c.Color.componentToHex(e)+c.Color.componentToHex(a)+c.Color.componentToHex(b)+c.Color.componentToHex(d)},hexToRGB:function(a){var b=c.Color.hexToColor(a);if(b)return c.Color.getColor32(b.a,b.r,b.g,b.b);
	},hexToColor:function(a,b){a=a.replace(/^(?:#|0x)?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,d){return b+b+c+c+d+d});var d=/^(?:#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);if(d){var e=parseInt(d[1],16),f=parseInt(d[2],16),g=parseInt(d[3],16);b?(b.r=e,b.g=f,b.b=g):b=c.Color.createColor(e,f,g)}return b},webToColor:function(a,b){b||(b=c.Color.createColor());var d=/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?))?\s*\)$/.exec(a);return d&&(b.r=parseInt(d[1],10),b.g=parseInt(d[2],10),b.b=parseInt(d[3],10),b.a=void 0!==d[4]?parseFloat(d[4]):1,c.Color.updateColor(b)),b},valueToColor:function(a,b){if(b||(b=c.Color.createColor()),"string"==typeof a)return 0===a.indexOf("rgb")?c.Color.webToColor(a,b):(b.a=1,c.Color.hexToColor(a,b));if("number"==typeof a){var d=c.Color.getRGB(a);return b.r=d.r,b.g=d.g,b.b=d.b,b.a=d.a/255,b}return b},componentToHex:function(a){var b=a.toString(16);return 1===b.length?"0"+b:b},HSVColorWheel:function(a,b){void 0===a&&(a=1),void 0===b&&(b=1);for(var d=[],e=0;e<=359;e++)d.push(c.Color.HSVtoRGB(e/359,a,b));return d},HSLColorWheel:function(a,b){void 0===a&&(a=.5),void 0===b&&(b=.5);for(var d=[],e=0;e<=359;e++)d.push(c.Color.HSLtoRGB(e/359,a,b));return d},interpolateColor:function(a,b,d,e,f){void 0===f&&(f=255);var g=c.Color.getRGB(a),h=c.Color.getRGB(b),i=(h.red-g.red)*e/d+g.red,j=(h.green-g.green)*e/d+g.green,k=(h.blue-g.blue)*e/d+g.blue;return c.Color.getColor32(f,i,j,k)},interpolateColorWithRGB:function(a,b,d,e,f,g){var h=c.Color.getRGB(a),i=(b-h.red)*g/f+h.red,j=(d-h.green)*g/f+h.green,k=(e-h.blue)*g/f+h.blue;return c.Color.getColor(i,j,k)},interpolateRGB:function(a,b,d,e,f,g,h,i){var j=(e-a)*i/h+a,k=(f-b)*i/h+b,l=(g-d)*i/h+d;return c.Color.getColor(j,k,l)},getRandomColor:function(a,b,d){if(void 0===a&&(a=0),void 0===b&&(b=255),void 0===d&&(d=255),b>255||a>b)return c.Color.getColor(255,255,255);var e=a+Math.round(Math.random()*(b-a)),f=a+Math.round(Math.random()*(b-a)),g=a+Math.round(Math.random()*(b-a));return c.Color.getColor32(d,e,f,g)},getRGB:function(a){return a>16777215?{alpha:a>>>24,red:a>>16&255,green:a>>8&255,blue:255&a,a:a>>>24,r:a>>16&255,g:a>>8&255,b:255&a}:{alpha:255,red:a>>16&255,green:a>>8&255,blue:255&a,a:255,r:a>>16&255,g:a>>8&255,b:255&a}},getWebRGB:function(a){if("object"==typeof a)return"rgba("+a.r.toString()+","+a.g.toString()+","+a.b.toString()+","+(a.a/255).toString()+")";var b=c.Color.getRGB(a);return"rgba("+b.r.toString()+","+b.g.toString()+","+b.b.toString()+","+(b.a/255).toString()+")"},getAlpha:function(a){return a>>>24},getAlphaFloat:function(a){return(a>>>24)/255},getRed:function(a){return a>>16&255},getGreen:function(a){return a>>8&255},getBlue:function(a){return 255&a},blendNormal:function(a){return a},blendLighten:function(a,b){return b>a?b:a},blendDarken:function(a,b){return b>a?a:b},blendMultiply:function(a,b){return a*b/255},blendAverage:function(a,b){return(a+b)/2},blendAdd:function(a,b){return Math.min(255,a+b)},blendSubtract:function(a,b){return Math.max(0,a+b-255)},blendDifference:function(a,b){return Math.abs(a-b)},blendNegation:function(a,b){return 255-Math.abs(255-a-b)},blendScreen:function(a,b){return 255-((255-a)*(255-b)>>8)},blendExclusion:function(a,b){return a+b-2*a*b/255},blendOverlay:function(a,b){return b<128?2*a*b/255:255-2*(255-a)*(255-b)/255},blendSoftLight:function(a,b){return b<128?2*((a>>1)+64)*(b/255):255-2*(255-((a>>1)+64))*(255-b)/255},blendHardLight:function(a,b){return c.Color.blendOverlay(b,a)},blendColorDodge:function(a,b){return 255===b?b:Math.min(255,(a<<8)/(255-b))},blendColorBurn:function(a,b){return 0===b?b:Math.max(0,255-(255-a<<8)/b)},blendLinearDodge:function(a,b){return c.Color.blendAdd(a,b)},blendLinearBurn:function(a,b){return c.Color.blendSubtract(a,b)},blendLinearLight:function(a,b){return b<128?c.Color.blendLinearBurn(a,2*b):c.Color.blendLinearDodge(a,2*(b-128))},blendVividLight:function(a,b){return b<128?c.Color.blendColorBurn(a,2*b):c.Color.blendColorDodge(a,2*(b-128))},blendPinLight:function(a,b){return b<128?c.Color.blendDarken(a,2*b):c.Color.blendLighten(a,2*(b-128))},blendHardMix:function(a,b){return c.Color.blendVividLight(a,b)<128?0:255},blendReflect:function(a,b){return 255===b?b:Math.min(255,a*a/(255-b))},blendGlow:function(a,b){return c.Color.blendReflect(b,a)},blendPhoenix:function(a,b){return Math.min(a,b)-Math.max(a,b)+255}},c.Physics=function(a,b){b=b||{},this.game=a,this.config=b,this.arcade=null,this.p2=null,this.ninja=null,this.box2d=null,this.chipmunk=null,this.matter=null,this.parseConfig()},c.Physics.ARCADE=0,c.Physics.P2JS=1,c.Physics.NINJA=2,c.Physics.BOX2D=3,c.Physics.CHIPMUNK=4,c.Physics.MATTERJS=5,c.Physics.prototype={parseConfig:function(){this.config.hasOwnProperty("arcade")&&this.config.arcade!==!0||!c.Physics.hasOwnProperty("Arcade")||(this.arcade=new c.Physics.Arcade(this.game)),this.config.hasOwnProperty("ninja")&&this.config.ninja===!0&&c.Physics.hasOwnProperty("Ninja")&&(this.ninja=new c.Physics.Ninja(this.game)),this.config.hasOwnProperty("p2")&&this.config.p2===!0&&c.Physics.hasOwnProperty("P2")&&(this.p2=new c.Physics.P2(this.game,this.config)),this.config.hasOwnProperty("box2d")&&this.config.box2d===!0&&c.Physics.hasOwnProperty("BOX2D")&&(this.box2d=new c.Physics.BOX2D(this.game,this.config)),this.config.hasOwnProperty("matter")&&this.config.matter===!0&&c.Physics.hasOwnProperty("Matter")&&(this.matter=new c.Physics.Matter(this.game,this.config))},startSystem:function(a){a===c.Physics.ARCADE?this.arcade=new c.Physics.Arcade(this.game):a===c.Physics.P2JS?null===this.p2?this.p2=new c.Physics.P2(this.game,this.config):this.p2.reset():a===c.Physics.NINJA?this.ninja=new c.Physics.Ninja(this.game):a===c.Physics.BOX2D?null===this.box2d?this.box2d=new c.Physics.Box2D(this.game,this.config):this.box2d.reset():a===c.Physics.MATTERJS&&(null===this.matter?this.matter=new c.Physics.Matter(this.game,this.config):this.matter.reset())},enable:function(a,b,d){void 0===b&&(b=c.Physics.ARCADE),void 0===d&&(d=!1),b===c.Physics.ARCADE?this.arcade.enable(a):b===c.Physics.P2JS&&this.p2?this.p2.enable(a,d):b===c.Physics.NINJA&&this.ninja?this.ninja.enableAABB(a):b===c.Physics.BOX2D&&this.box2d?this.box2d.enable(a):b===c.Physics.MATTERJS&&this.matter?this.matter.enable(a):console.warn(a.key+" is attempting to enable a physics body using an unknown physics system.")},preUpdate:function(){this.p2&&this.p2.preUpdate(),this.box2d&&this.box2d.preUpdate(),this.matter&&this.matter.preUpdate()},update:function(){this.p2&&this.p2.update(),this.box2d&&this.box2d.update(),this.matter&&this.matter.update()},setBoundsToWorld:function(){this.arcade&&this.arcade.setBoundsToWorld(),this.ninja&&this.ninja.setBoundsToWorld(),this.p2&&this.p2.setBoundsToWorld(),this.box2d&&this.box2d.setBoundsToWorld(),this.matter&&this.matter.setBoundsToWorld()},clear:function(){this.p2&&this.p2.clear(),this.box2d&&this.box2d.clear(),this.matter&&this.matter.clear()},reset:function(){this.p2&&this.p2.reset(),this.box2d&&this.box2d.reset(),this.matter&&this.matter.reset()},destroy:function(){this.p2&&this.p2.destroy(),this.box2d&&this.box2d.destroy(),this.matter&&this.matter.destroy(),this.arcade=null,this.ninja=null,this.p2=null,this.box2d=null,this.matter=null}},c.Physics.prototype.constructor=c.Physics,c.Physics.Arcade=function(a){this.game=a,this.gravity=new c.Point,this.bounds=new c.Rectangle(0,0,a.world.width,a.world.height),this.checkCollision={up:!0,down:!0,left:!0,right:!0},this.maxObjects=10,this.maxLevels=4,this.OVERLAP_BIAS=4,this.forceX=!1,this.sortDirection=c.Physics.Arcade.LEFT_RIGHT,this.skipQuadTree=!0,this.isPaused=!1,this.quadTree=new c.QuadTree(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this._total=0,this.setBoundsToWorld()},c.Physics.Arcade.prototype.constructor=c.Physics.Arcade,c.Physics.Arcade.SORT_NONE=0,c.Physics.Arcade.LEFT_RIGHT=1,c.Physics.Arcade.RIGHT_LEFT=2,c.Physics.Arcade.TOP_BOTTOM=3,c.Physics.Arcade.BOTTOM_TOP=4,c.Physics.Arcade.prototype={setBounds:function(a,b,c,d){this.bounds.setTo(a,b,c,d)},setBoundsToWorld:function(){this.bounds.copyFrom(this.game.world.bounds)},enable:function(a,b){void 0===b&&(b=!0);var d=1;if(Array.isArray(a))for(d=a.length;d--;)a[d]instanceof c.Group?this.enable(a[d].children,b):(this.enableBody(a[d]),b&&a[d].hasOwnProperty("children")&&a[d].children.length>0&&this.enable(a[d],!0));else a instanceof c.Group?this.enable(a.children,b):(this.enableBody(a),b&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,!0))},enableBody:function(a){a.hasOwnProperty("body")&&null===a.body&&(a.body=new c.Physics.Arcade.Body(a),a.parent&&a.parent instanceof c.Group&&a.parent.addToHash(a))},updateMotion:function(a){var b=this.computeVelocity(0,a,a.angularVelocity,a.angularAcceleration,a.angularDrag,a.maxAngular)-a.angularVelocity;a.angularVelocity+=b,a.rotation+=a.angularVelocity*this.game.time.physicsElapsed,a.velocity.x=this.computeVelocity(1,a,a.velocity.x,a.acceleration.x,a.drag.x,a.maxVelocity.x),a.velocity.y=this.computeVelocity(2,a,a.velocity.y,a.acceleration.y,a.drag.y,a.maxVelocity.y)},computeVelocity:function(a,b,c,d,e,f){return void 0===f&&(f=1e4),1===a&&b.allowGravity?c+=(this.gravity.x+b.gravity.x)*this.game.time.physicsElapsed:2===a&&b.allowGravity&&(c+=(this.gravity.y+b.gravity.y)*this.game.time.physicsElapsed),d?c+=d*this.game.time.physicsElapsed:e&&(e*=this.game.time.physicsElapsed,c-e>0?c-=e:c+e<0?c+=e:c=0),c>f?c=f:c<-f&&(c=-f),c},overlap:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._total=0,!Array.isArray(a)&&Array.isArray(b))for(var f=0;f<b.length;f++)this.collideHandler(a,b[f],c,d,e,!0);else if(Array.isArray(a)&&!Array.isArray(b))for(var f=0;f<a.length;f++)this.collideHandler(a[f],b,c,d,e,!0);else if(Array.isArray(a)&&Array.isArray(b))for(var f=0;f<a.length;f++)for(var g=0;g<b.length;g++)this.collideHandler(a[f],b[g],c,d,e,!0);else this.collideHandler(a,b,c,d,e,!0);return this._total>0},collide:function(a,b,c,d,e){if(c=c||null,d=d||null,e=e||c,this._total=0,!Array.isArray(a)&&Array.isArray(b))for(var f=0;f<b.length;f++)this.collideHandler(a,b[f],c,d,e,!1);else if(Array.isArray(a)&&!Array.isArray(b))for(var f=0;f<a.length;f++)this.collideHandler(a[f],b,c,d,e,!1);else if(Array.isArray(a)&&Array.isArray(b))for(var f=0;f<a.length;f++)for(var g=0;g<b.length;g++)this.collideHandler(a[f],b[g],c,d,e,!1);else this.collideHandler(a,b,c,d,e,!1);return this._total>0},sortLeftRight:function(a,b){return a.body&&b.body?a.body.x-b.body.x:0},sortRightLeft:function(a,b){return a.body&&b.body?b.body.x-a.body.x:0},sortTopBottom:function(a,b){return a.body&&b.body?a.body.y-b.body.y:0},sortBottomTop:function(a,b){return a.body&&b.body?b.body.y-a.body.y:0},sort:function(a,b){null!==a.physicsSortDirection?b=a.physicsSortDirection:void 0===b&&(b=this.sortDirection),b===c.Physics.Arcade.LEFT_RIGHT?a.hash.sort(this.sortLeftRight):b===c.Physics.Arcade.RIGHT_LEFT?a.hash.sort(this.sortRightLeft):b===c.Physics.Arcade.TOP_BOTTOM?a.hash.sort(this.sortTopBottom):b===c.Physics.Arcade.BOTTOM_TOP&&a.hash.sort(this.sortBottomTop)},collideHandler:function(a,b,d,e,f,g){return void 0===b&&a.physicsType===c.GROUP?(this.sort(a),void this.collideGroupVsSelf(a,d,e,f,g)):void(a&&b&&a.exists&&b.exists&&(this.sortDirection!==c.Physics.Arcade.SORT_NONE&&(a.physicsType===c.GROUP&&this.sort(a),b.physicsType===c.GROUP&&this.sort(b)),a.physicsType===c.SPRITE?b.physicsType===c.SPRITE?this.collideSpriteVsSprite(a,b,d,e,f,g):b.physicsType===c.GROUP?this.collideSpriteVsGroup(a,b,d,e,f,g):b.physicsType===c.TILEMAPLAYER&&this.collideSpriteVsTilemapLayer(a,b,d,e,f,g):a.physicsType===c.GROUP?b.physicsType===c.SPRITE?this.collideSpriteVsGroup(b,a,d,e,f,g):b.physicsType===c.GROUP?this.collideGroupVsGroup(a,b,d,e,f,g):b.physicsType===c.TILEMAPLAYER&&this.collideGroupVsTilemapLayer(a,b,d,e,f,g):a.physicsType===c.TILEMAPLAYER&&(b.physicsType===c.SPRITE?this.collideSpriteVsTilemapLayer(b,a,d,e,f,g):b.physicsType===c.GROUP&&this.collideGroupVsTilemapLayer(b,a,d,e,f,g))))},collideSpriteVsSprite:function(a,b,c,d,e,f){return!(!a.body||!b.body)&&(this.separate(a.body,b.body,d,e,f)&&(c&&c.call(e,a,b),this._total++),!0)},collideSpriteVsGroup:function(a,b,d,e,f,g){if(0!==b.length&&a.body)if(this.skipQuadTree||a.body.skipQuadTree)for(var h={},i=0;i<b.hash.length;i++){var j=b.hash[i];if(j&&j.exists&&j.body){if(h=j.body.getBounds(h),this.sortDirection===c.Physics.Arcade.LEFT_RIGHT){if(a.body.right<h.x)break;if(h.right<a.body.x)continue}else if(this.sortDirection===c.Physics.Arcade.RIGHT_LEFT){if(a.body.x>h.right)break;if(h.x>a.body.right)continue}else if(this.sortDirection===c.Physics.Arcade.TOP_BOTTOM){if(a.body.bottom<h.y)break;if(h.bottom<a.body.y)continue}else if(this.sortDirection===c.Physics.Arcade.BOTTOM_TOP){if(a.body.y>h.bottom)break;if(h.y>a.body.bottom)continue}this.collideSpriteVsSprite(a,j,d,e,f,g)}}else{this.quadTree.clear(),this.quadTree.reset(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this.quadTree.populate(b);for(var k=this.quadTree.retrieve(a),i=0;i<k.length;i++)this.separate(a.body,k[i],e,f,g)&&(d&&d.call(f,a,k[i].sprite),this._total++)}},collideGroupVsSelf:function(a,b,d,e,f){if(0!==a.length)for(var g=0;g<a.hash.length;g++){var h={},i=a.hash[g];if(i&&i.exists&&i.body){h=i.body.getBounds(h);for(var j=g+1;j<a.hash.length;j++){var k={},l=a.hash[j];if(l&&l.exists&&l.body){if(k=l.body.getBounds(k),this.sortDirection===c.Physics.Arcade.LEFT_RIGHT){if(h.right<k.x)break;if(k.right<h.x)continue}else if(this.sortDirection===c.Physics.Arcade.RIGHT_LEFT){if(h.x>k.right)continue;if(k.x>h.right)break}else if(this.sortDirection===c.Physics.Arcade.TOP_BOTTOM){if(h.bottom<k.y)continue;if(k.bottom<h.y)break}else if(this.sortDirection===c.Physics.Arcade.BOTTOM_TOP){if(h.y>k.bottom)continue;if(k.y>i.body.bottom)break}this.collideSpriteVsSprite(i,l,b,d,e,f)}}}}},collideGroupVsGroup:function(a,b,d,e,f,g){if(0!==a.length&&0!==b.length)for(var h=0;h<a.children.length;h++)a.children[h].exists&&(a.children[h].physicsType===c.GROUP?this.collideGroupVsGroup(a.children[h],b,d,e,f,g):this.collideSpriteVsGroup(a.children[h],b,d,e,f,g))},separate:function(a,b,c,d,e){if(!a.enable||!b.enable||a.checkCollision.none||b.checkCollision.none||!this.intersects(a,b))return!1;if(c&&c.call(d,a.sprite,b.sprite)===!1)return!1;if(a.isCircle&&b.isCircle)return this.separateCircle(a,b,e);if(a.isCircle!==b.isCircle){var f=a.isCircle?b:a,g=a.isCircle?a:b,h={x:f.x,y:f.y,right:f.right,bottom:f.bottom},i={x:g.x+g.radius,y:g.y+g.radius};if((i.y<h.y||i.y>h.bottom)&&(i.x<h.x||i.x>h.right))return this.separateCircle(a,b,e)}var j=!1,k=!1;this.forceX||Math.abs(this.gravity.y+a.gravity.y)<Math.abs(this.gravity.x+a.gravity.x)?(j=this.separateX(a,b,e),this.intersects(a,b)&&(k=this.separateY(a,b,e))):(k=this.separateY(a,b,e),this.intersects(a,b)&&(j=this.separateX(a,b,e)));var l=j||k;return l&&(e?(a.onOverlap&&a.onOverlap.dispatch(a.sprite,b.sprite),b.onOverlap&&b.onOverlap.dispatch(b.sprite,a.sprite)):(a.onCollide&&a.onCollide.dispatch(a.sprite,b.sprite),b.onCollide&&b.onCollide.dispatch(b.sprite,a.sprite))),l},intersects:function(a,b){return a!==b&&(a.isCircle?b.isCircle?c.Math.distance(a.center.x,a.center.y,b.center.x,b.center.y)<=a.radius+b.radius:this.circleBodyIntersects(a,b):b.isCircle?this.circleBodyIntersects(b,a):!(a.right<=b.position.x)&&(!(a.bottom<=b.position.y)&&(!(a.position.x>=b.right)&&!(a.position.y>=b.bottom))))},circleBodyIntersects:function(a,b){var d=c.Math.clamp(a.center.x,b.left,b.right),e=c.Math.clamp(a.center.y,b.top,b.bottom),f=(a.center.x-d)*(a.center.x-d),g=(a.center.y-e)*(a.center.y-e);return f+g<=a.radius*a.radius},separateCircle:function(a,b,d){this.getOverlapX(a,b),this.getOverlapY(a,b);var e=b.center.x-a.center.x,f=b.center.y-a.center.y,g=Math.atan2(f,e),h=0;if(a.isCircle!==b.isCircle){var i={x:b.isCircle?a.position.x:b.position.x,y:b.isCircle?a.position.y:b.position.y,right:b.isCircle?a.right:b.right,bottom:b.isCircle?a.bottom:b.bottom},j={x:a.isCircle?a.position.x+a.radius:b.position.x+b.radius,y:a.isCircle?a.position.y+a.radius:b.position.y+b.radius,radius:a.isCircle?a.radius:b.radius};j.y<i.y?j.x<i.x?h=c.Math.distance(j.x,j.y,i.x,i.y)-j.radius:j.x>i.right&&(h=c.Math.distance(j.x,j.y,i.right,i.y)-j.radius):j.y>i.bottom&&(j.x<i.x?h=c.Math.distance(j.x,j.y,i.x,i.bottom)-j.radius:j.x>i.right&&(h=c.Math.distance(j.x,j.y,i.right,i.bottom)-j.radius)),h*=-1}else h=a.radius+b.radius-c.Math.distance(a.center.x,a.center.y,b.center.x,b.center.y);if(d||0===h||a.immovable&&b.immovable||a.customSeparateX||b.customSeparateX)return 0!==h&&(a.onOverlap&&a.onOverlap.dispatch(a.sprite,b.sprite),b.onOverlap&&b.onOverlap.dispatch(b.sprite,a.sprite)),0!==h;var k={x:a.velocity.x*Math.cos(g)+a.velocity.y*Math.sin(g),y:a.velocity.x*Math.sin(g)-a.velocity.y*Math.cos(g)},l={x:b.velocity.x*Math.cos(g)+b.velocity.y*Math.sin(g),y:b.velocity.x*Math.sin(g)-b.velocity.y*Math.cos(g)},m=((a.mass-b.mass)*k.x+2*b.mass*l.x)/(a.mass+b.mass),n=(2*a.mass*k.x+(b.mass-a.mass)*l.x)/(a.mass+b.mass);return a.immovable||(a.velocity.x=(m*Math.cos(g)-k.y*Math.sin(g))*a.bounce.x,a.velocity.y=(k.y*Math.cos(g)+m*Math.sin(g))*a.bounce.y),b.immovable||(b.velocity.x=(n*Math.cos(g)-l.y*Math.sin(g))*b.bounce.x,b.velocity.y=(l.y*Math.cos(g)+n*Math.sin(g))*b.bounce.y),Math.abs(g)<Math.PI/2?a.velocity.x>0&&!a.immovable&&b.velocity.x>a.velocity.x?a.velocity.x*=-1:b.velocity.x<0&&!b.immovable&&a.velocity.x<b.velocity.x?b.velocity.x*=-1:a.velocity.y>0&&!a.immovable&&b.velocity.y>a.velocity.y?a.velocity.y*=-1:b.velocity.y<0&&!b.immovable&&a.velocity.y<b.velocity.y&&(b.velocity.y*=-1):Math.abs(g)>Math.PI/2&&(a.velocity.x<0&&!a.immovable&&b.velocity.x<a.velocity.x?a.velocity.x*=-1:b.velocity.x>0&&!b.immovable&&a.velocity.x>b.velocity.x?b.velocity.x*=-1:a.velocity.y<0&&!a.immovable&&b.velocity.y<a.velocity.y?a.velocity.y*=-1:b.velocity.y>0&&!b.immovable&&a.velocity.x>b.velocity.y&&(b.velocity.y*=-1)),a.immovable||(a.x+=a.velocity.x*this.game.time.physicsElapsed-h*Math.cos(g),a.y+=a.velocity.y*this.game.time.physicsElapsed-h*Math.sin(g)),b.immovable||(b.x+=b.velocity.x*this.game.time.physicsElapsed+h*Math.cos(g),b.y+=b.velocity.y*this.game.time.physicsElapsed+h*Math.sin(g)),a.onCollide&&a.onCollide.dispatch(a.sprite,b.sprite),b.onCollide&&b.onCollide.dispatch(b.sprite,a.sprite),!0},getOverlapX:function(a,b,c){var d=0,e=a.deltaAbsX()+b.deltaAbsX()+this.OVERLAP_BIAS;return 0===a.deltaX()&&0===b.deltaX()?(a.embedded=!0,b.embedded=!0):a.deltaX()>b.deltaX()?(d=a.right-b.x,d>e&&!c||a.checkCollision.right===!1||b.checkCollision.left===!1?d=0:(a.touching.none=!1,a.touching.right=!0,b.touching.none=!1,b.touching.left=!0)):a.deltaX()<b.deltaX()&&(d=a.x-b.width-b.x,-d>e&&!c||a.checkCollision.left===!1||b.checkCollision.right===!1?d=0:(a.touching.none=!1,a.touching.left=!0,b.touching.none=!1,b.touching.right=!0)),a.overlapX=d,b.overlapX=d,d},getOverlapY:function(a,b,c){var d=0,e=a.deltaAbsY()+b.deltaAbsY()+this.OVERLAP_BIAS;return 0===a.deltaY()&&0===b.deltaY()?(a.embedded=!0,b.embedded=!0):a.deltaY()>b.deltaY()?(d=a.bottom-b.y,d>e&&!c||a.checkCollision.down===!1||b.checkCollision.up===!1?d=0:(a.touching.none=!1,a.touching.down=!0,b.touching.none=!1,b.touching.up=!0)):a.deltaY()<b.deltaY()&&(d=a.y-b.bottom,-d>e&&!c||a.checkCollision.up===!1||b.checkCollision.down===!1?d=0:(a.touching.none=!1,a.touching.up=!0,b.touching.none=!1,b.touching.down=!0)),a.overlapY=d,b.overlapY=d,d},separateX:function(a,b,c){var d=this.getOverlapX(a,b,c);if(c||0===d||a.immovable&&b.immovable||a.customSeparateX||b.customSeparateX)return 0!==d||a.embedded&&b.embedded;var e=a.velocity.x,f=b.velocity.x;if(a.immovable||b.immovable)a.immovable?(b.x+=d,b.velocity.x=e-f*b.bounce.x,a.moves&&(b.y+=(a.y-a.prev.y)*a.friction.y)):(a.x-=d,a.velocity.x=f-e*a.bounce.x,b.moves&&(a.y+=(b.y-b.prev.y)*b.friction.y));else{d*=.5,a.x-=d,b.x+=d;var g=Math.sqrt(f*f*b.mass/a.mass)*(f>0?1:-1),h=Math.sqrt(e*e*a.mass/b.mass)*(e>0?1:-1),i=.5*(g+h);g-=i,h-=i,a.velocity.x=i+g*a.bounce.x,b.velocity.x=i+h*b.bounce.x}return!0},separateY:function(a,b,c){var d=this.getOverlapY(a,b,c);if(c||0===d||a.immovable&&b.immovable||a.customSeparateY||b.customSeparateY)return 0!==d||a.embedded&&b.embedded;var e=a.velocity.y,f=b.velocity.y;if(a.immovable||b.immovable)a.immovable?(b.y+=d,b.velocity.y=e-f*b.bounce.y,a.moves&&(b.x+=(a.x-a.prev.x)*a.friction.x)):(a.y-=d,a.velocity.y=f-e*a.bounce.y,b.moves&&(a.x+=(b.x-b.prev.x)*b.friction.x));else{d*=.5,a.y-=d,b.y+=d;var g=Math.sqrt(f*f*b.mass/a.mass)*(f>0?1:-1),h=Math.sqrt(e*e*a.mass/b.mass)*(e>0?1:-1),i=.5*(g+h);g-=i,h-=i,a.velocity.y=i+g*a.bounce.y,b.velocity.y=i+h*b.bounce.y}return!0},getObjectsUnderPointer:function(a,b,c,d){if(0!==b.length&&a.exists)return this.getObjectsAtLocation(a.x,a.y,b,c,d,a)},getObjectsAtLocation:function(a,b,d,e,f,g){this.quadTree.clear(),this.quadTree.reset(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,this.maxObjects,this.maxLevels),this.quadTree.populate(d);for(var h=new c.Rectangle(a,b,1,1),i=[],j=this.quadTree.retrieve(h),k=0;k<j.length;k++)j[k].hitTest(a,b)&&(e&&e.call(f,g,j[k].sprite),i.push(j[k].sprite));return i},moveToObject:function(a,b,c,d){void 0===c&&(c=60),void 0===d&&(d=0);var e=Math.atan2(b.y-a.y,b.x-a.x);return d>0&&(c=this.distanceBetween(a,b)/(d/1e3)),a.body.velocity.x=Math.cos(e)*c,a.body.velocity.y=Math.sin(e)*c,e},moveToPointer:function(a,b,c,d){void 0===b&&(b=60),c=c||this.game.input.activePointer,void 0===d&&(d=0);var e=this.angleToPointer(a,c);return d>0&&(b=this.distanceToPointer(a,c)/(d/1e3)),a.body.velocity.x=Math.cos(e)*b,a.body.velocity.y=Math.sin(e)*b,e},moveToXY:function(a,b,c,d,e){void 0===d&&(d=60),void 0===e&&(e=0);var f=Math.atan2(c-a.y,b-a.x);return e>0&&(d=this.distanceToXY(a,b,c)/(e/1e3)),a.body.velocity.x=Math.cos(f)*d,a.body.velocity.y=Math.sin(f)*d,f},velocityFromAngle:function(a,b,d){return void 0===b&&(b=60),d=d||new c.Point,d.setTo(Math.cos(this.game.math.degToRad(a))*b,Math.sin(this.game.math.degToRad(a))*b)},velocityFromRotation:function(a,b,d){return void 0===b&&(b=60),d=d||new c.Point,d.setTo(Math.cos(a)*b,Math.sin(a)*b)},accelerationFromRotation:function(a,b,d){return void 0===b&&(b=60),d=d||new c.Point,d.setTo(Math.cos(a)*b,Math.sin(a)*b)},accelerateToObject:function(a,b,c,d,e){void 0===c&&(c=60),void 0===d&&(d=1e3),void 0===e&&(e=1e3);var f=this.angleBetween(a,b);return a.body.acceleration.setTo(Math.cos(f)*c,Math.sin(f)*c),a.body.maxVelocity.setTo(d,e),f},accelerateToPointer:function(a,b,c,d,e){void 0===c&&(c=60),void 0===b&&(b=this.game.input.activePointer),void 0===d&&(d=1e3),void 0===e&&(e=1e3);var f=this.angleToPointer(a,b);return a.body.acceleration.setTo(Math.cos(f)*c,Math.sin(f)*c),a.body.maxVelocity.setTo(d,e),f},accelerateToXY:function(a,b,c,d,e,f){void 0===d&&(d=60),void 0===e&&(e=1e3),void 0===f&&(f=1e3);var g=this.angleToXY(a,b,c);return a.body.acceleration.setTo(Math.cos(g)*d,Math.sin(g)*d),a.body.maxVelocity.setTo(e,f),g},distanceBetween:function(a,b,c){void 0===c&&(c=!1);var d=c?a.world.x-b.world.x:a.x-b.x,e=c?a.world.y-b.world.y:a.y-b.y;return Math.sqrt(d*d+e*e)},distanceToXY:function(a,b,c,d){void 0===d&&(d=!1);var e=d?a.world.x-b:a.x-b,f=d?a.world.y-c:a.y-c;return Math.sqrt(e*e+f*f)},distanceToPointer:function(a,b,c){void 0===b&&(b=this.game.input.activePointer),void 0===c&&(c=!1);var d=c?a.world.x-b.worldX:a.x-b.worldX,e=c?a.world.y-b.worldY:a.y-b.worldY;return Math.sqrt(d*d+e*e)},angleBetween:function(a,b,c){return void 0===c&&(c=!1),c?Math.atan2(b.world.y-a.world.y,b.world.x-a.world.x):Math.atan2(b.y-a.y,b.x-a.x)},angleBetweenCenters:function(a,b){var c=b.centerX-a.centerX,d=b.centerY-a.centerY;return Math.atan2(d,c)},angleToXY:function(a,b,c,d){return void 0===d&&(d=!1),d?Math.atan2(c-a.world.y,b-a.world.x):Math.atan2(c-a.y,b-a.x)},angleToPointer:function(a,b,c){return void 0===b&&(b=this.game.input.activePointer),void 0===c&&(c=!1),c?Math.atan2(b.worldY-a.world.y,b.worldX-a.world.x):Math.atan2(b.worldY-a.y,b.worldX-a.x)},worldAngleToPointer:function(a,b){return this.angleToPointer(a,b,!0)}},c.Physics.Arcade.Body=function(a){this.sprite=a,this.game=a.game,this.type=c.Physics.ARCADE,this.enable=!0,this.isCircle=!1,this.radius=0,this.offset=new c.Point,this.position=new c.Point(a.x,a.y),this.prev=new c.Point(this.position.x,this.position.y),this.allowRotation=!0,this.rotation=a.angle,this.preRotation=a.angle,this.width=a.width,this.height=a.height,this.sourceWidth=a.width,this.sourceHeight=a.height,a.texture&&(this.sourceWidth=a.texture.frame.width,this.sourceHeight=a.texture.frame.height),this.halfWidth=Math.abs(a.width/2),this.halfHeight=Math.abs(a.height/2),this.center=new c.Point(a.x+this.halfWidth,a.y+this.halfHeight),this.velocity=new c.Point,this.newVelocity=new c.Point,this.deltaMax=new c.Point,this.acceleration=new c.Point,this.drag=new c.Point,this.allowGravity=!0,this.gravity=new c.Point,this.bounce=new c.Point,this.worldBounce=null,this.onWorldBounds=null,this.onCollide=null,this.onOverlap=null,this.maxVelocity=new c.Point(1e4,1e4),this.friction=new c.Point(1,0),this.angularVelocity=0,this.angularAcceleration=0,this.angularDrag=0,this.maxAngular=1e3,this.mass=1,this.angle=0,this.speed=0,this.facing=c.NONE,this.immovable=!1,this.moves=!0,this.customSeparateX=!1,this.customSeparateY=!1,this.overlapX=0,this.overlapY=0,this.overlapR=0,this.embedded=!1,this.collideWorldBounds=!1,this.checkCollision={none:!1,any:!0,up:!0,down:!0,left:!0,right:!0},this.touching={none:!0,up:!1,down:!1,left:!1,right:!1},this.wasTouching={none:!0,up:!1,down:!1,left:!1,right:!1},this.blocked={up:!1,down:!1,left:!1,right:!1},this.tilePadding=new c.Point,this.dirty=!1,this.skipQuadTree=!1,this.syncBounds=!1,this.isMoving=!1,this.stopVelocityOnCollide=!0,this.moveTimer=0,this.moveDistance=0,this.moveDuration=0,this.moveTarget=null,this.moveEnd=null,this.onMoveComplete=new c.Signal,this.movementCallback=null,this.movementCallbackContext=null,this._reset=!0,this._sx=a.scale.x,this._sy=a.scale.y,this._dx=0,this._dy=0},c.Physics.Arcade.Body.prototype={updateBounds:function(){if(this.syncBounds){var a=this.sprite.getBounds();a.ceilAll(),a.width===this.width&&a.height===this.height||(this.width=a.width,this.height=a.height,this._reset=!0)}else{var b=Math.abs(this.sprite.scale.x),c=Math.abs(this.sprite.scale.y);b===this._sx&&c===this._sy||(this.width=this.sourceWidth*b,this.height=this.sourceHeight*c,this._sx=b,this._sy=c,this._reset=!0)}this._reset&&(this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight))},preUpdate:function(){this.enable&&!this.game.physics.arcade.isPaused&&(this.dirty=!0,this.wasTouching.none=this.touching.none,this.wasTouching.up=this.touching.up,this.wasTouching.down=this.touching.down,this.wasTouching.left=this.touching.left,this.wasTouching.right=this.touching.right,this.touching.none=!0,this.touching.up=!1,this.touching.down=!1,this.touching.left=!1,this.touching.right=!1,this.blocked.up=!1,this.blocked.down=!1,this.blocked.left=!1,this.blocked.right=!1,this.embedded=!1,this.updateBounds(),this.position.x=this.sprite.world.x-this.sprite.anchor.x*this.sprite.width+this.sprite.scale.x*this.offset.x,this.position.x-=this.sprite.scale.x<0?this.width:0,this.position.y=this.sprite.world.y-this.sprite.anchor.y*this.sprite.height+this.sprite.scale.y*this.offset.y,this.position.y-=this.sprite.scale.y<0?this.height:0,this.rotation=this.sprite.angle,this.preRotation=this.rotation,(this._reset||this.sprite.fresh)&&(this.prev.x=this.position.x,this.prev.y=this.position.y),this.moves&&(this.game.physics.arcade.updateMotion(this),this.newVelocity.set(this.velocity.x*this.game.time.physicsElapsed,this.velocity.y*this.game.time.physicsElapsed),this.position.x+=this.newVelocity.x,this.position.y+=this.newVelocity.y,this.position.x===this.prev.x&&this.position.y===this.prev.y||(this.angle=Math.atan2(this.velocity.y,this.velocity.x)),this.speed=Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y),this.collideWorldBounds&&this.checkWorldBounds()&&this.onWorldBounds&&this.onWorldBounds.dispatch(this.sprite,this.blocked.up,this.blocked.down,this.blocked.left,this.blocked.right)),this._dx=this.deltaX(),this._dy=this.deltaY(),this._reset=!1)},updateMovement:function(){var a=0,b=0!==this.overlapX||0!==this.overlapY;if(this.moveDuration>0?(this.moveTimer+=this.game.time.elapsedMS,a=this.moveTimer/this.moveDuration):(this.moveTarget.end.set(this.position.x,this.position.y),a=this.moveTarget.length/this.moveDistance),this.movementCallback)var c=this.movementCallback.call(this.movementCallbackContext,this,this.velocity,a);return!(b||a>=1||void 0!==c&&c!==!0)||(this.stopMovement(a>=1||this.stopVelocityOnCollide&&b),!1)},stopMovement:function(a){this.isMoving&&(this.isMoving=!1,a&&this.velocity.set(0),this.onMoveComplete.dispatch(this.sprite,0!==this.overlapX||0!==this.overlapY))},postUpdate:function(){this.enable&&this.dirty&&(this.isMoving&&this.updateMovement(),this.dirty=!1,this.deltaX()<0?this.facing=c.LEFT:this.deltaX()>0&&(this.facing=c.RIGHT),this.deltaY()<0?this.facing=c.UP:this.deltaY()>0&&(this.facing=c.DOWN),this.moves&&(this._dx=this.deltaX(),this._dy=this.deltaY(),0!==this.deltaMax.x&&0!==this._dx&&(this._dx<0&&this._dx<-this.deltaMax.x?this._dx=-this.deltaMax.x:this._dx>0&&this._dx>this.deltaMax.x&&(this._dx=this.deltaMax.x)),0!==this.deltaMax.y&&0!==this._dy&&(this._dy<0&&this._dy<-this.deltaMax.y?this._dy=-this.deltaMax.y:this._dy>0&&this._dy>this.deltaMax.y&&(this._dy=this.deltaMax.y)),this.sprite.position.x+=this._dx,this.sprite.position.y+=this._dy,this._reset=!0),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this.allowRotation&&(this.sprite.angle+=this.deltaZ()),this.prev.x=this.position.x,this.prev.y=this.position.y)},checkWorldBounds:function(){var a=this.position,b=this.game.physics.arcade.bounds,c=this.game.physics.arcade.checkCollision,d=this.worldBounce?-this.worldBounce.x:-this.bounce.x,e=this.worldBounce?-this.worldBounce.y:-this.bounce.y;if(this.isCircle){var f={x:this.center.x-this.radius,y:this.center.y-this.radius,right:this.center.x+this.radius,bottom:this.center.y+this.radius};f.x<b.x&&c.left?(a.x=b.x-this.halfWidth+this.radius,this.velocity.x*=d,this.blocked.left=!0):f.right>b.right&&c.right&&(a.x=b.right-this.halfWidth-this.radius,this.velocity.x*=d,this.blocked.right=!0),f.y<b.y&&c.up?(a.y=b.y-this.halfHeight+this.radius,this.velocity.y*=e,this.blocked.up=!0):f.bottom>b.bottom&&c.down&&(a.y=b.bottom-this.halfHeight-this.radius,this.velocity.y*=e,this.blocked.down=!0)}else a.x<b.x&&c.left?(a.x=b.x,this.velocity.x*=d,this.blocked.left=!0):this.right>b.right&&c.right&&(a.x=b.right-this.width,this.velocity.x*=d,this.blocked.right=!0),a.y<b.y&&c.up?(a.y=b.y,this.velocity.y*=e,this.blocked.up=!0):this.bottom>b.bottom&&c.down&&(a.y=b.bottom-this.height,this.velocity.y*=e,this.blocked.down=!0);return this.blocked.up||this.blocked.down||this.blocked.left||this.blocked.right},moveFrom:function(a,b,c){if(void 0===b&&(b=this.speed),0===b)return!1;var d;return void 0===c?(d=this.angle,c=this.game.math.radToDeg(d)):d=this.game.math.degToRad(c),this.moveTimer=0,this.moveDuration=a,0===c||180===c?this.velocity.set(Math.cos(d)*b,0):90===c||270===c?this.velocity.set(0,Math.sin(d)*b):this.velocity.set(Math.cos(d)*b,Math.sin(d)*b),this.isMoving=!0,!0},moveTo:function(a,b,d){var e=b/(a/1e3);if(0===e)return!1;var f;return void 0===d?(f=this.angle,d=this.game.math.radToDeg(f)):f=this.game.math.degToRad(d),b=Math.abs(b),this.moveDuration=0,this.moveDistance=b,null===this.moveTarget&&(this.moveTarget=new c.Line,this.moveEnd=new c.Point),this.moveTarget.fromAngle(this.x,this.y,f,b),this.moveEnd.set(this.moveTarget.end.x,this.moveTarget.end.y),this.moveTarget.setTo(this.x,this.y,this.x,this.y),0===d||180===d?this.velocity.set(Math.cos(f)*e,0):90===d||270===d?this.velocity.set(0,Math.sin(f)*e):this.velocity.set(Math.cos(f)*e,Math.sin(f)*e),
	this.isMoving=!0,!0},setSize:function(a,b,c,d){void 0===c&&(c=this.offset.x),void 0===d&&(d=this.offset.y),this.sourceWidth=a,this.sourceHeight=b,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.setTo(c,d),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight),this.isCircle=!1,this.radius=0},setCircle:function(a,b,c){void 0===b&&(b=this.offset.x),void 0===c&&(c=this.offset.y),a>0?(this.isCircle=!0,this.radius=a,this.sourceWidth=2*a,this.sourceHeight=2*a,this.width=this.sourceWidth*this._sx,this.height=this.sourceHeight*this._sy,this.halfWidth=Math.floor(this.width/2),this.halfHeight=Math.floor(this.height/2),this.offset.setTo(b,c),this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight)):this.isCircle=!1},reset:function(a,b){this.velocity.set(0),this.acceleration.set(0),this.speed=0,this.angularVelocity=0,this.angularAcceleration=0,this.position.x=a-this.sprite.anchor.x*this.sprite.width+this.sprite.scale.x*this.offset.x,this.position.x-=this.sprite.scale.x<0?this.width:0,this.position.y=b-this.sprite.anchor.y*this.sprite.height+this.sprite.scale.y*this.offset.y,this.position.y-=this.sprite.scale.y<0?this.height:0,this.prev.x=this.position.x,this.prev.y=this.position.y,this.rotation=this.sprite.angle,this.preRotation=this.rotation,this._sx=this.sprite.scale.x,this._sy=this.sprite.scale.y,this.center.setTo(this.position.x+this.halfWidth,this.position.y+this.halfHeight)},getBounds:function(a){return this.isCircle?(a.x=this.center.x-this.radius,a.y=this.center.y-this.radius,a.right=this.center.x+this.radius,a.bottom=this.center.y+this.radius):(a.x=this.x,a.y=this.y,a.right=this.right,a.bottom=this.bottom),a},hitTest:function(a,b){return this.isCircle?c.Circle.contains(this,a,b):c.Rectangle.contains(this,a,b)},onFloor:function(){return this.blocked.down},onCeiling:function(){return this.blocked.up},onWall:function(){return this.blocked.left||this.blocked.right},deltaAbsX:function(){return this.deltaX()>0?this.deltaX():-this.deltaX()},deltaAbsY:function(){return this.deltaY()>0?this.deltaY():-this.deltaY()},deltaX:function(){return this.position.x-this.prev.x},deltaY:function(){return this.position.y-this.prev.y},deltaZ:function(){return this.rotation-this.preRotation},destroy:function(){this.sprite.parent&&this.sprite.parent instanceof c.Group&&this.sprite.parent.removeFromHash(this.sprite),this.sprite.body=null,this.sprite=null}},Object.defineProperty(c.Physics.Arcade.Body.prototype,"left",{get:function(){return this.position.x}}),Object.defineProperty(c.Physics.Arcade.Body.prototype,"right",{get:function(){return this.position.x+this.width}}),Object.defineProperty(c.Physics.Arcade.Body.prototype,"top",{get:function(){return this.position.y}}),Object.defineProperty(c.Physics.Arcade.Body.prototype,"bottom",{get:function(){return this.position.y+this.height}}),Object.defineProperty(c.Physics.Arcade.Body.prototype,"x",{get:function(){return this.position.x},set:function(a){this.position.x=a}}),Object.defineProperty(c.Physics.Arcade.Body.prototype,"y",{get:function(){return this.position.y},set:function(a){this.position.y=a}}),c.Physics.Arcade.Body.render=function(a,b,c,d){void 0===d&&(d=!0),c=c||"rgba(0,255,0,0.4)",a.fillStyle=c,a.strokeStyle=c,b.isCircle?(a.beginPath(),a.arc(b.center.x-b.game.camera.x,b.center.y-b.game.camera.y,b.radius,0,2*Math.PI),d?a.fill():a.stroke()):d?a.fillRect(b.position.x-b.game.camera.x,b.position.y-b.game.camera.y,b.width,b.height):a.strokeRect(b.position.x-b.game.camera.x,b.position.y-b.game.camera.y,b.width,b.height)},c.Physics.Arcade.Body.renderBodyInfo=function(a,b){a.line("x: "+b.x.toFixed(2),"y: "+b.y.toFixed(2),"width: "+b.width,"height: "+b.height),a.line("velocity x: "+b.velocity.x.toFixed(2),"y: "+b.velocity.y.toFixed(2),"deltaX: "+b._dx.toFixed(2),"deltaY: "+b._dy.toFixed(2)),a.line("acceleration x: "+b.acceleration.x.toFixed(2),"y: "+b.acceleration.y.toFixed(2),"speed: "+b.speed.toFixed(2),"angle: "+b.angle.toFixed(2)),a.line("gravity x: "+b.gravity.x,"y: "+b.gravity.y,"bounce x: "+b.bounce.x.toFixed(2),"y: "+b.bounce.y.toFixed(2)),a.line("touching left: "+b.touching.left,"right: "+b.touching.right,"up: "+b.touching.up,"down: "+b.touching.down),a.line("blocked left: "+b.blocked.left,"right: "+b.blocked.right,"up: "+b.blocked.up,"down: "+b.blocked.down)},c.Physics.Arcade.Body.prototype.constructor=c.Physics.Arcade.Body,c.Physics.Arcade.TilemapCollision=function(){},c.Physics.Arcade.TilemapCollision.prototype={TILE_BIAS:16,collideSpriteVsTilemapLayer:function(a,b,c,d,e,f){if(a.body){var g=b.getTiles(a.body.position.x-a.body.tilePadding.x,a.body.position.y-a.body.tilePadding.y,a.body.width+a.body.tilePadding.x,a.body.height+a.body.tilePadding.y,!1,!1);if(0!==g.length)for(var h=0;h<g.length;h++)d?d.call(e,a,g[h])&&this.separateTile(h,a.body,g[h],b,f)&&(this._total++,c&&c.call(e,a,g[h])):this.separateTile(h,a.body,g[h],b,f)&&(this._total++,c&&c.call(e,a,g[h]))}},collideGroupVsTilemapLayer:function(a,b,c,d,e,f){if(0!==a.length)for(var g=0;g<a.children.length;g++)a.children[g].exists&&this.collideSpriteVsTilemapLayer(a.children[g],b,c,d,e,f)},separateTile:function(a,b,c,d,e){if(!b.enable)return!1;var f=d.fixedToCamera?0:d.position.x,g=d.fixedToCamera?0:d.position.y;if(!c.intersects(b.position.x-f,b.position.y-g,b.right-f,b.bottom-g))return!1;if(e)return!0;if(c.collisionCallback&&!c.collisionCallback.call(c.collisionCallbackContext,b.sprite,c))return!1;if("undefined"!=typeof c.layer.callbacks&&c.layer.callbacks[c.index]&&!c.layer.callbacks[c.index].callback.call(c.layer.callbacks[c.index].callbackContext,b.sprite,c))return!1;if(!(c.faceLeft||c.faceRight||c.faceTop||c.faceBottom))return!1;var h=0,i=0,j=0,k=1;if(b.deltaAbsX()>b.deltaAbsY()?j=-1:b.deltaAbsX()<b.deltaAbsY()&&(k=-1),0!==b.deltaX()&&0!==b.deltaY()&&(c.faceLeft||c.faceRight)&&(c.faceTop||c.faceBottom)&&(j=Math.min(Math.abs(b.position.x-f-c.right),Math.abs(b.right-f-c.left)),k=Math.min(Math.abs(b.position.y-g-c.bottom),Math.abs(b.bottom-g-c.top))),j<k){if((c.faceLeft||c.faceRight)&&(h=this.tileCheckX(b,c,d),0!==h&&!c.intersects(b.position.x-f,b.position.y-g,b.right-f,b.bottom-g)))return!0;(c.faceTop||c.faceBottom)&&(i=this.tileCheckY(b,c,d))}else{if((c.faceTop||c.faceBottom)&&(i=this.tileCheckY(b,c,d),0!==i&&!c.intersects(b.position.x-f,b.position.y-g,b.right-f,b.bottom-g)))return!0;(c.faceLeft||c.faceRight)&&(h=this.tileCheckX(b,c,d))}return 0!==h||0!==i},tileCheckX:function(a,b,c){var d=0,e=c.fixedToCamera?0:c.position.x;return a.deltaX()<0&&!a.blocked.left&&b.collideRight&&a.checkCollision.left?b.faceRight&&a.x-e<b.right&&(d=a.x-e-b.right,d<-this.TILE_BIAS&&(d=0)):a.deltaX()>0&&!a.blocked.right&&b.collideLeft&&a.checkCollision.right&&b.faceLeft&&a.right-e>b.left&&(d=a.right-e-b.left,d>this.TILE_BIAS&&(d=0)),0!==d&&(a.customSeparateX?a.overlapX=d:this.processTileSeparationX(a,d)),d},tileCheckY:function(a,b,c){var d=0,e=c.fixedToCamera?0:c.position.y;return a.deltaY()<0&&!a.blocked.up&&b.collideDown&&a.checkCollision.up?b.faceBottom&&a.y-e<b.bottom&&(d=a.y-e-b.bottom,d<-this.TILE_BIAS&&(d=0)):a.deltaY()>0&&!a.blocked.down&&b.collideUp&&a.checkCollision.down&&b.faceTop&&a.bottom-e>b.top&&(d=a.bottom-e-b.top,d>this.TILE_BIAS&&(d=0)),0!==d&&(a.customSeparateY?a.overlapY=d:this.processTileSeparationY(a,d)),d},processTileSeparationX:function(a,b){b<0?a.blocked.left=!0:b>0&&(a.blocked.right=!0),a.position.x-=b,0===a.bounce.x?a.velocity.x=0:a.velocity.x=-a.velocity.x*a.bounce.x},processTileSeparationY:function(a,b){b<0?a.blocked.up=!0:b>0&&(a.blocked.down=!0),a.position.y-=b,0===a.bounce.y?a.velocity.y=0:a.velocity.y=-a.velocity.y*a.bounce.y}},c.Utils.mixinPrototype(c.Physics.Arcade.prototype,c.Physics.Arcade.TilemapCollision.prototype),p2.Body.prototype.parent=null,p2.Spring.prototype.parent=null,c.Physics.P2=function(a,b){this.game=a,void 0===b?b={gravity:[0,0],broadphase:new p2.SAPBroadphase}:(b.hasOwnProperty("gravity")||(b.gravity=[0,0]),b.hasOwnProperty("broadphase")||(b.broadphase=new p2.SAPBroadphase)),this.config=b,this.world=new p2.World(this.config),this.frameRate=1/60,this.useElapsedTime=!1,this.paused=!1,this.materials=[],this.gravity=new c.Physics.P2.InversePointProxy(this,this.world.gravity),this.walls={left:null,right:null,top:null,bottom:null},this.onBodyAdded=new c.Signal,this.onBodyRemoved=new c.Signal,this.onSpringAdded=new c.Signal,this.onSpringRemoved=new c.Signal,this.onConstraintAdded=new c.Signal,this.onConstraintRemoved=new c.Signal,this.onContactMaterialAdded=new c.Signal,this.onContactMaterialRemoved=new c.Signal,this.postBroadphaseCallback=null,this.callbackContext=null,this.onBeginContact=new c.Signal,this.onEndContact=new c.Signal,b.hasOwnProperty("mpx")&&b.hasOwnProperty("pxm")&&b.hasOwnProperty("mpxi")&&b.hasOwnProperty("pxmi")&&(this.mpx=b.mpx,this.mpxi=b.mpxi,this.pxm=b.pxm,this.pxmi=b.pxmi),this.world.on("beginContact",this.beginContactHandler,this),this.world.on("endContact",this.endContactHandler,this),this.collisionGroups=[],this.nothingCollisionGroup=new c.Physics.P2.CollisionGroup(1),this.boundsCollisionGroup=new c.Physics.P2.CollisionGroup(2),this.everythingCollisionGroup=new c.Physics.P2.CollisionGroup(2147483648),this.boundsCollidesWith=[],this._toRemove=[],this._collisionGroupID=2,this._boundsLeft=!0,this._boundsRight=!0,this._boundsTop=!0,this._boundsBottom=!0,this._boundsOwnGroup=!1,this.setBoundsToWorld(!0,!0,!0,!0,!1)},c.Physics.P2.prototype={removeBodyNextStep:function(a){this._toRemove.push(a)},preUpdate:function(){for(var a=this._toRemove.length;a--;)this.removeBody(this._toRemove[a]);this._toRemove.length=0},enable:function(a,b,d){void 0===b&&(b=!1),void 0===d&&(d=!0);var e=1;if(Array.isArray(a))for(e=a.length;e--;)a[e]instanceof c.Group?this.enable(a[e].children,b,d):(this.enableBody(a[e],b),d&&a[e].hasOwnProperty("children")&&a[e].children.length>0&&this.enable(a[e],b,!0));else a instanceof c.Group?this.enable(a.children,b,d):(this.enableBody(a,b),d&&a.hasOwnProperty("children")&&a.children.length>0&&this.enable(a.children,b,!0))},enableBody:function(a,b){a.hasOwnProperty("body")&&null===a.body&&(a.body=new c.Physics.P2.Body(this.game,a,a.x,a.y,1),a.body.debug=b,"undefined"!=typeof a.anchor&&a.anchor.set(.5))},setImpactEvents:function(a){a?this.world.on("impact",this.impactHandler,this):this.world.off("impact",this.impactHandler,this)},setPostBroadphaseCallback:function(a,b){this.postBroadphaseCallback=a,this.callbackContext=b,null!==a?this.world.on("postBroadphase",this.postBroadphaseHandler,this):this.world.off("postBroadphase",this.postBroadphaseHandler,this)},postBroadphaseHandler:function(a){if(this.postBroadphaseCallback&&0!==a.pairs.length)for(var b=a.pairs.length-2;b>=0;b-=2)a.pairs[b].parent&&a.pairs[b+1].parent&&!this.postBroadphaseCallback.call(this.callbackContext,a.pairs[b].parent,a.pairs[b+1].parent)&&a.pairs.splice(b,2)},impactHandler:function(a){if(a.bodyA.parent&&a.bodyB.parent){var b=a.bodyA.parent,c=a.bodyB.parent;b._bodyCallbacks[a.bodyB.id]&&b._bodyCallbacks[a.bodyB.id].call(b._bodyCallbackContext[a.bodyB.id],b,c,a.shapeA,a.shapeB),c._bodyCallbacks[a.bodyA.id]&&c._bodyCallbacks[a.bodyA.id].call(c._bodyCallbackContext[a.bodyA.id],c,b,a.shapeB,a.shapeA),b._groupCallbacks[a.shapeB.collisionGroup]&&b._groupCallbacks[a.shapeB.collisionGroup].call(b._groupCallbackContext[a.shapeB.collisionGroup],b,c,a.shapeA,a.shapeB),c._groupCallbacks[a.shapeA.collisionGroup]&&c._groupCallbacks[a.shapeA.collisionGroup].call(c._groupCallbackContext[a.shapeA.collisionGroup],c,b,a.shapeB,a.shapeA)}},beginContactHandler:function(a){a.bodyA&&a.bodyB&&(this.onBeginContact.dispatch(a.bodyA,a.bodyB,a.shapeA,a.shapeB,a.contactEquations),a.bodyA.parent&&a.bodyA.parent.onBeginContact.dispatch(a.bodyB.parent,a.bodyB,a.shapeA,a.shapeB,a.contactEquations),a.bodyB.parent&&a.bodyB.parent.onBeginContact.dispatch(a.bodyA.parent,a.bodyA,a.shapeB,a.shapeA,a.contactEquations))},endContactHandler:function(a){a.bodyA&&a.bodyB&&(this.onEndContact.dispatch(a.bodyA,a.bodyB,a.shapeA,a.shapeB),a.bodyA.parent&&a.bodyA.parent.onEndContact.dispatch(a.bodyB.parent,a.bodyB,a.shapeA,a.shapeB),a.bodyB.parent&&a.bodyB.parent.onEndContact.dispatch(a.bodyA.parent,a.bodyA,a.shapeB,a.shapeA))},setBoundsToWorld:function(a,b,c,d,e){this.setBounds(this.game.world.bounds.x,this.game.world.bounds.y,this.game.world.bounds.width,this.game.world.bounds.height,a,b,c,d,e)},setWorldMaterial:function(a,b,c,d,e){void 0===b&&(b=!0),void 0===c&&(c=!0),void 0===d&&(d=!0),void 0===e&&(e=!0),b&&this.walls.left&&(this.walls.left.shapes[0].material=a),c&&this.walls.right&&(this.walls.right.shapes[0].material=a),d&&this.walls.top&&(this.walls.top.shapes[0].material=a),e&&this.walls.bottom&&(this.walls.bottom.shapes[0].material=a)},updateBoundsCollisionGroup:function(a){void 0===a&&(a=!0);var b=a?this.boundsCollisionGroup.mask:this.everythingCollisionGroup.mask;this.walls.left&&(this.walls.left.shapes[0].collisionGroup=b),this.walls.right&&(this.walls.right.shapes[0].collisionGroup=b),this.walls.top&&(this.walls.top.shapes[0].collisionGroup=b),this.walls.bottom&&(this.walls.bottom.shapes[0].collisionGroup=b),this._boundsOwnGroup=a},setBounds:function(a,b,c,d,e,f,g,h,i){void 0===e&&(e=this._boundsLeft),void 0===f&&(f=this._boundsRight),void 0===g&&(g=this._boundsTop),void 0===h&&(h=this._boundsBottom),void 0===i&&(i=this._boundsOwnGroup),this.setupWall(e,"left",a,b,1.5707963267948966,i),this.setupWall(f,"right",a+c,b,-1.5707963267948966,i),this.setupWall(g,"top",a,b,-3.141592653589793,i),this.setupWall(h,"bottom",a,b+d,0,i),this._boundsLeft=e,this._boundsRight=f,this._boundsTop=g,this._boundsBottom=h,this._boundsOwnGroup=i},setupWall:function(a,b,c,d,e,f){a?(this.walls[b]?this.walls[b].position=[this.pxmi(c),this.pxmi(d)]:(this.walls[b]=new p2.Body({mass:0,position:[this.pxmi(c),this.pxmi(d)],angle:e}),this.walls[b].addShape(new p2.Plane),this.world.addBody(this.walls[b])),f&&(this.walls[b].shapes[0].collisionGroup=this.boundsCollisionGroup.mask)):this.walls[b]&&(this.world.removeBody(this.walls[b]),this.walls[b]=null)},pause:function(){this.paused=!0},resume:function(){this.paused=!1},update:function(){this.paused||(this.useElapsedTime?this.world.step(this.game.time.physicsElapsed):this.world.step(this.frameRate))},reset:function(){this.world.on("beginContact",this.beginContactHandler,this),this.world.on("endContact",this.endContactHandler,this),this.nothingCollisionGroup=new c.Physics.P2.CollisionGroup(1),this.boundsCollisionGroup=new c.Physics.P2.CollisionGroup(2),this.everythingCollisionGroup=new c.Physics.P2.CollisionGroup(2147483648),this._collisionGroupID=2,this.setBoundsToWorld(!0,!0,!0,!0,!1)},clear:function(){this.world.time=0,this.world.fixedStepTime=0,this.world.solver&&this.world.solver.equations.length&&this.world.solver.removeAllEquations();for(var a=this.world.constraints,b=a.length-1;b>=0;b--)this.world.removeConstraint(a[b]);for(var c=this.world.bodies,b=c.length-1;b>=0;b--)this.world.removeBody(c[b]);for(var d=this.world.springs,b=d.length-1;b>=0;b--)this.world.removeSpring(d[b]);for(var e=this.world.contactMaterials,b=e.length-1;b>=0;b--)this.world.removeContactMaterial(e[b]);this.world.off("beginContact",this.beginContactHandler,this),this.world.off("endContact",this.endContactHandler,this),this.postBroadphaseCallback=null,this.callbackContext=null,this.impactCallback=null,this.collisionGroups=[],this._toRemove=[],this.boundsCollidesWith=[],this.walls={left:null,right:null,top:null,bottom:null}},destroy:function(){this.clear(),this.game=null},addBody:function(a){return!a.data.world&&(this.world.addBody(a.data),this.onBodyAdded.dispatch(a),!0)},removeBody:function(a){return a.data.world===this.world&&(this.world.removeBody(a.data),this.onBodyRemoved.dispatch(a)),a},addSpring:function(a){return a instanceof c.Physics.P2.Spring||a instanceof c.Physics.P2.RotationalSpring?this.world.addSpring(a.data):this.world.addSpring(a),this.onSpringAdded.dispatch(a),a},removeSpring:function(a){return a instanceof c.Physics.P2.Spring||a instanceof c.Physics.P2.RotationalSpring?this.world.removeSpring(a.data):this.world.removeSpring(a),this.onSpringRemoved.dispatch(a),a},createDistanceConstraint:function(a,b,d,e,f,g){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new c.Physics.P2.DistanceConstraint(this,a,b,d,e,f,g)):void console.warn("Cannot create Constraint, invalid body objects given")},createGearConstraint:function(a,b,d,e){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new c.Physics.P2.GearConstraint(this,a,b,d,e)):void console.warn("Cannot create Constraint, invalid body objects given")},createRevoluteConstraint:function(a,b,d,e,f,g){return a=this.getBody(a),d=this.getBody(d),a&&d?this.addConstraint(new c.Physics.P2.RevoluteConstraint(this,a,b,d,e,f,g)):void console.warn("Cannot create Constraint, invalid body objects given")},createLockConstraint:function(a,b,d,e,f){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new c.Physics.P2.LockConstraint(this,a,b,d,e,f)):void console.warn("Cannot create Constraint, invalid body objects given")},createPrismaticConstraint:function(a,b,d,e,f,g,h){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addConstraint(new c.Physics.P2.PrismaticConstraint(this,a,b,d,e,f,g,h)):void console.warn("Cannot create Constraint, invalid body objects given")},addConstraint:function(a){return this.world.addConstraint(a),this.onConstraintAdded.dispatch(a),a},removeConstraint:function(a){return this.world.removeConstraint(a),this.onConstraintRemoved.dispatch(a),a},addContactMaterial:function(a){return this.world.addContactMaterial(a),this.onContactMaterialAdded.dispatch(a),a},removeContactMaterial:function(a){return this.world.removeContactMaterial(a),this.onContactMaterialRemoved.dispatch(a),a},getContactMaterial:function(a,b){return this.world.getContactMaterial(a,b)},setMaterial:function(a,b){for(var c=b.length;c--;)b[c].setMaterial(a)},createMaterial:function(a,b){a=a||"";var d=new c.Physics.P2.Material(a);return this.materials.push(d),"undefined"!=typeof b&&b.setMaterial(d),d},createContactMaterial:function(a,b,d){void 0===a&&(a=this.createMaterial()),void 0===b&&(b=this.createMaterial());var e=new c.Physics.P2.ContactMaterial(a,b,d);return this.addContactMaterial(e)},getBodies:function(){for(var a=[],b=this.world.bodies.length;b--;)a.push(this.world.bodies[b].parent);return a},getBody:function(a){return a instanceof p2.Body?a:a instanceof c.Physics.P2.Body?a.data:a.body&&a.body.type===c.Physics.P2JS?a.body.data:null},getSprings:function(){for(var a=[],b=this.world.springs.length;b--;)a.push(this.world.springs[b].parent);return a},getConstraints:function(){for(var a=[],b=this.world.constraints.length;b--;)a.push(this.world.constraints[b]);return a},hitTest:function(a,b,d,e){void 0===b&&(b=this.world.bodies),void 0===d&&(d=5),void 0===e&&(e=!1);for(var f=[this.pxmi(a.x),this.pxmi(a.y)],g=[],h=b.length;h--;)b[h]instanceof c.Physics.P2.Body&&(!e||b[h].data.type!==p2.Body.STATIC)?g.push(b[h].data):b[h]instanceof p2.Body&&b[h].parent&&(!e||b[h].type!==p2.Body.STATIC)?g.push(b[h]):b[h]instanceof c.Sprite&&b[h].hasOwnProperty("body")&&(!e||b[h].body.data.type!==p2.Body.STATIC)&&g.push(b[h].body.data);return this.world.hitTest(f,g,d)},toJSON:function(){return this.world.toJSON()},createCollisionGroup:function(a){var b=Math.pow(2,this._collisionGroupID);this.walls.left&&(this.walls.left.shapes[0].collisionMask=this.walls.left.shapes[0].collisionMask|b),this.walls.right&&(this.walls.right.shapes[0].collisionMask=this.walls.right.shapes[0].collisionMask|b),this.walls.top&&(this.walls.top.shapes[0].collisionMask=this.walls.top.shapes[0].collisionMask|b),this.walls.bottom&&(this.walls.bottom.shapes[0].collisionMask=this.walls.bottom.shapes[0].collisionMask|b),this._collisionGroupID++;var d=new c.Physics.P2.CollisionGroup(b);return this.collisionGroups.push(d),a&&this.setCollisionGroup(a,d),d},setCollisionGroup:function(a,b){if(a instanceof c.Group)for(var d=0;d<a.total;d++)a.children[d].body&&a.children[d].body.type===c.Physics.P2JS&&a.children[d].body.setCollisionGroup(b);else a.body.setCollisionGroup(b)},createSpring:function(a,b,d,e,f,g,h,i,j){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addSpring(new c.Physics.P2.Spring(this,a,b,d,e,f,g,h,i,j)):void console.warn("Cannot create Spring, invalid body objects given")},createRotationalSpring:function(a,b,d,e,f){return a=this.getBody(a),b=this.getBody(b),a&&b?this.addSpring(new c.Physics.P2.RotationalSpring(this,a,b,d,e,f)):void console.warn("Cannot create Rotational Spring, invalid body objects given")},createBody:function(a,b,d,e,f,g){void 0===e&&(e=!1);var h=new c.Physics.P2.Body(this.game,null,a,b,d);if(g){var i=h.addPolygon(f,g);if(!i)return!1}return e&&this.world.addBody(h.data),h},createParticle:function(a,b,d,e,f,g){void 0===e&&(e=!1);var h=new c.Physics.P2.Body(this.game,null,a,b,d);if(g){var i=h.addPolygon(f,g);if(!i)return!1}return e&&this.world.addBody(h.data),h},convertCollisionObjects:function(a,b,c){void 0===c&&(c=!0);for(var d=[],e=0,f=a.collision[b].length;e<f;e++){var g=a.collision[b][e],h=this.createBody(g.x,g.y,0,c,{},g.polyline);h&&d.push(h)}return d},clearTilemapLayerBodies:function(a,b){b=a.getLayer(b);for(var c=a.layers[b].bodies.length;c--;)a.layers[b].bodies[c].destroy();a.layers[b].bodies.length=0},convertTilemap:function(a,b,c,d){b=a.getLayer(b),void 0===c&&(c=!0),void 0===d&&(d=!0),this.clearTilemapLayerBodies(a,b);for(var e=0,f=0,g=0,h=0,i=a.layers[b].height;h<i;h++){e=0;for(var j=0,k=a.layers[b].width;j<k;j++){var l=a.layers[b].data[h][j];if(l&&l.index>-1&&l.collides)if(d){var m=a.getTileRight(b,j,h);if(0===e&&(f=l.x*l.width,g=l.y*l.height,e=l.width),m&&m.collides)e+=l.width;else{var n=this.createBody(f,g,0,!1);n.addRectangle(e,l.height,e/2,l.height/2,0),c&&this.addBody(n),a.layers[b].bodies.push(n),e=0}}else{var n=this.createBody(l.x*l.width,l.y*l.height,0,!1);n.addRectangle(l.width,l.height,l.width/2,l.height/2,0),c&&this.addBody(n),a.layers[b].bodies.push(n)}}}return a.layers[b].bodies},mpx:function(a){return a*=20},pxm:function(a){return.05*a},mpxi:function(a){return a*=-20},pxmi:function(a){return a*-.05}},Object.defineProperty(c.Physics.P2.prototype,"friction",{get:function(){return this.world.defaultContactMaterial.friction},set:function(a){this.world.defaultContactMaterial.friction=a}}),Object.defineProperty(c.Physics.P2.prototype,"restitution",{get:function(){return this.world.defaultContactMaterial.restitution},set:function(a){this.world.defaultContactMaterial.restitution=a}}),Object.defineProperty(c.Physics.P2.prototype,"contactMaterial",{get:function(){return this.world.defaultContactMaterial},set:function(a){this.world.defaultContactMaterial=a}}),Object.defineProperty(c.Physics.P2.prototype,"applySpringForces",{get:function(){return this.world.applySpringForces},set:function(a){this.world.applySpringForces=a}}),Object.defineProperty(c.Physics.P2.prototype,"applyDamping",{get:function(){return this.world.applyDamping},set:function(a){this.world.applyDamping=a}}),Object.defineProperty(c.Physics.P2.prototype,"applyGravity",{get:function(){return this.world.applyGravity},set:function(a){this.world.applyGravity=a}}),Object.defineProperty(c.Physics.P2.prototype,"solveConstraints",{get:function(){return this.world.solveConstraints},set:function(a){this.world.solveConstraints=a}}),Object.defineProperty(c.Physics.P2.prototype,"time",{get:function(){return this.world.time}}),Object.defineProperty(c.Physics.P2.prototype,"emitImpactEvent",{get:function(){return this.world.emitImpactEvent},set:function(a){this.world.emitImpactEvent=a}}),Object.defineProperty(c.Physics.P2.prototype,"sleepMode",{get:function(){return this.world.sleepMode},set:function(a){this.world.sleepMode=a}}),Object.defineProperty(c.Physics.P2.prototype,"total",{get:function(){return this.world.bodies.length}}),c.Physics.P2.FixtureList=function(a){Array.isArray(a)||(a=[a]),this.rawList=a,this.init(),this.parse(this.rawList)},c.Physics.P2.FixtureList.prototype={init:function(){this.namedFixtures={},this.groupedFixtures=[],this.allFixtures=[]},setCategory:function(a,b){var c=function(b){b.collisionGroup=a};this.getFixtures(b).forEach(c)},setMask:function(a,b){var c=function(b){b.collisionMask=a};this.getFixtures(b).forEach(c)},setSensor:function(a,b){var c=function(b){b.sensor=a};this.getFixtures(b).forEach(c)},setMaterial:function(a,b){var c=function(b){b.material=a};this.getFixtures(b).forEach(c)},getFixtures:function(a){var b=[];if(a){a instanceof Array||(a=[a]);var c=this;return a.forEach(function(a){c.namedFixtures[a]&&b.push(c.namedFixtures[a])}),this.flatten(b)}return this.allFixtures},getFixtureByKey:function(a){return this.namedFixtures[a]},getGroup:function(a){return this.groupedFixtures[a]},parse:function(){var a,b,c,d;c=this.rawList,d=[];for(a in c)b=c[a],isNaN(a-0)?this.namedFixtures[a]=this.flatten(b):(this.groupedFixtures[a]=this.groupedFixtures[a]||[],this.groupedFixtures[a]=this.groupedFixtures[a].concat(b)),d.push(this.allFixtures=this.flatten(this.groupedFixtures))},flatten:function(a){var b,c;return b=[],c=arguments.callee,a.forEach(function(a){return Array.prototype.push.apply(b,Array.isArray(a)?c(a):[a])}),b}},c.Physics.P2.PointProxy=function(a,b){this.world=a,this.destination=b},c.Physics.P2.PointProxy.prototype.constructor=c.Physics.P2.PointProxy,Object.defineProperty(c.Physics.P2.PointProxy.prototype,"x",{get:function(){return this.world.mpx(this.destination[0])},set:function(a){this.destination[0]=this.world.pxm(a)}}),Object.defineProperty(c.Physics.P2.PointProxy.prototype,"y",{get:function(){return this.world.mpx(this.destination[1])},set:function(a){this.destination[1]=this.world.pxm(a)}}),Object.defineProperty(c.Physics.P2.PointProxy.prototype,"mx",{get:function(){return this.destination[0]},set:function(a){this.destination[0]=a}}),Object.defineProperty(c.Physics.P2.PointProxy.prototype,"my",{get:function(){return this.destination[1]},set:function(a){this.destination[1]=a}}),c.Physics.P2.InversePointProxy=function(a,b){this.world=a,this.destination=b},c.Physics.P2.InversePointProxy.prototype.constructor=c.Physics.P2.InversePointProxy,Object.defineProperty(c.Physics.P2.InversePointProxy.prototype,"x",{get:function(){return this.world.mpxi(this.destination[0])},set:function(a){this.destination[0]=this.world.pxmi(a)}}),Object.defineProperty(c.Physics.P2.InversePointProxy.prototype,"y",{get:function(){return this.world.mpxi(this.destination[1])},set:function(a){this.destination[1]=this.world.pxmi(a)}}),Object.defineProperty(c.Physics.P2.InversePointProxy.prototype,"mx",{get:function(){return this.destination[0]},set:function(a){this.destination[0]=-a}}),Object.defineProperty(c.Physics.P2.InversePointProxy.prototype,"my",{get:function(){return this.destination[1]},set:function(a){this.destination[1]=-a}}),c.Physics.P2.Body=function(a,b,d,e,f){b=b||null,d=d||0,e=e||0,void 0===f&&(f=1),this.game=a,this.world=a.physics.p2,this.sprite=b,this.type=c.Physics.P2JS,this.offset=new c.Point,this.data=new p2.Body({position:[this.world.pxmi(d),this.world.pxmi(e)],mass:f}),this.data.parent=this,this.velocity=new c.Physics.P2.InversePointProxy(this.world,this.data.velocity),this.force=new c.Physics.P2.InversePointProxy(this.world,this.data.force),this.gravity=new c.Point,this.onBeginContact=new c.Signal,this.onEndContact=new c.Signal,this.collidesWith=[],this.removeNextStep=!1,this.debugBody=null,this.dirty=!1,this._collideWorldBounds=!0,this._bodyCallbacks={},this._bodyCallbackContext={},this._groupCallbacks={},this._groupCallbackContext={},this._reset=!1,b&&(this.setRectangleFromSprite(b),b.exists&&this.game.physics.p2.addBody(this))},c.Physics.P2.Body.prototype={createBodyCallback:function(a,b,c){var d=-1;a.id?d=a.id:a.body&&(d=a.body.id),d>-1&&(null===b?(delete this._bodyCallbacks[d],delete this._bodyCallbackContext[d]):(this._bodyCallbacks[d]=b,this._bodyCallbackContext[d]=c))},createGroupCallback:function(a,b,c){null===b?(delete this._groupCallbacks[a.mask],delete this._groupCallbackContext[a.mask]):(this._groupCallbacks[a.mask]=b,this._groupCallbackContext[a.mask]=c)},getCollisionMask:function(){var a=0;this._collideWorldBounds&&(a=this.game.physics.p2.boundsCollisionGroup.mask);for(var b=0;b<this.collidesWith.length;b++)a|=this.collidesWith[b].mask;return a},updateCollisionMask:function(a){var b=this.getCollisionMask();if(void 0===a)for(var c=this.data.shapes.length-1;c>=0;c--)this.data.shapes[c].collisionMask=b;else a.collisionMask=b},setCollisionGroup:function(a,b){var c=this.getCollisionMask();if(void 0===b)for(var d=this.data.shapes.length-1;d>=0;d--)this.data.shapes[d].collisionGroup=a.mask,this.data.shapes[d].collisionMask=c;else b.collisionGroup=a.mask,b.collisionMask=c},clearCollision:function(a,b,c){if(void 0===a&&(a=!0),void 0===b&&(b=!0),void 0===c)for(var d=this.data.shapes.length-1;d>=0;d--)a&&(this.data.shapes[d].collisionGroup=null),b&&(this.data.shapes[d].collisionMask=null);else a&&(c.collisionGroup=null),b&&(c.collisionMask=null);a&&(this.collidesWith.length=0)},removeCollisionGroup:function(a,b,c){void 0===b&&(b=!0);var d;if(Array.isArray(a))for(var e=0;e<a.length;e++)d=this.collidesWith.indexOf(a[e]),d>-1&&(this.collidesWith.splice(d,1),b&&(delete this._groupCallbacks[a.mask],delete this._groupCallbackContext[a.mask]));else d=this.collidesWith.indexOf(a),d>-1&&(this.collidesWith.splice(d,1),b&&(delete this._groupCallbacks[a.mask],delete this._groupCallbackContext[a.mask]));var f=this.getCollisionMask();if(void 0===c)for(var e=this.data.shapes.length-1;e>=0;e--)this.data.shapes[e].collisionMask=f;else c.collisionMask=f},collides:function(a,b,c,d){if(Array.isArray(a))for(var e=0;e<a.length;e++)this.collidesWith.indexOf(a[e])===-1&&(this.collidesWith.push(a[e]),b&&this.createGroupCallback(a[e],b,c));else this.collidesWith.indexOf(a)===-1&&(this.collidesWith.push(a),b&&this.createGroupCallback(a,b,c));var f=this.getCollisionMask();if(void 0===d)for(var e=this.data.shapes.length-1;e>=0;e--)this.data.shapes[e].collisionMask=f;else d.collisionMask=f},adjustCenterOfMass:function(){this.data.adjustCenterOfMass(),this.shapeChanged()},getVelocityAtPoint:function(a,b){return this.data.getVelocityAtPoint(a,b)},applyDamping:function(a){this.data.applyDamping(a)},applyImpulse:function(a,b,c){this.data.applyImpulse(a,[this.world.pxmi(b),this.world.pxmi(c)])},applyImpulseLocal:function(a,b,c){this.data.applyImpulseLocal(a,[this.world.pxmi(b),this.world.pxmi(c)])},applyForce:function(a,b,c){this.data.applyForce(a,[this.world.pxmi(b),this.world.pxmi(c)])},setZeroForce:function(){this.data.setZeroForce()},setZeroRotation:function(){this.data.angularVelocity=0},setZeroVelocity:function(){this.data.velocity[0]=0,this.data.velocity[1]=0},setZeroDamping:function(){this.data.damping=0,this.data.angularDamping=0},toLocalFrame:function(a,b){return this.data.toLocalFrame(a,b)},toWorldFrame:function(a,b){return this.data.toWorldFrame(a,b)},rotateLeft:function(a){this.data.angularVelocity=this.world.pxm(-a)},rotateRight:function(a){this.data.angularVelocity=this.world.pxm(a)},moveForward:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.velocity[0]=b*Math.cos(c),this.data.velocity[1]=b*Math.sin(c)},moveBackward:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.velocity[0]=-(b*Math.cos(c)),this.data.velocity[1]=-(b*Math.sin(c))},thrust:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.force[0]+=b*Math.cos(c),this.data.force[1]+=b*Math.sin(c)},thrustLeft:function(a){var b=this.world.pxmi(-a),c=this.data.angle;this.data.force[0]+=b*Math.cos(c),this.data.force[1]+=b*Math.sin(c)},thrustRight:function(a){var b=this.world.pxmi(-a),c=this.data.angle;this.data.force[0]-=b*Math.cos(c),this.data.force[1]-=b*Math.sin(c)},reverse:function(a){var b=this.world.pxmi(-a),c=this.data.angle+Math.PI/2;this.data.force[0]-=b*Math.cos(c),this.data.force[1]-=b*Math.sin(c);
	},moveLeft:function(a){this.data.velocity[0]=this.world.pxmi(-a)},moveRight:function(a){this.data.velocity[0]=this.world.pxmi(a)},moveUp:function(a){this.data.velocity[1]=this.world.pxmi(-a)},moveDown:function(a){this.data.velocity[1]=this.world.pxmi(a)},preUpdate:function(){this.dirty=!0,this.removeNextStep&&(this.removeFromWorld(),this.removeNextStep=!1)},postUpdate:function(){this.sprite.x=this.world.mpxi(this.data.position[0])+this.offset.x,this.sprite.y=this.world.mpxi(this.data.position[1])+this.offset.y,this.fixedRotation||(this.sprite.rotation=this.data.angle),this.debugBody&&this.debugBody.updateSpriteTransform(),this.dirty=!1},reset:function(a,b,c,d){void 0===c&&(c=!1),void 0===d&&(d=!1),this.setZeroForce(),this.setZeroVelocity(),this.setZeroRotation(),c&&this.setZeroDamping(),d&&(this.mass=1),this.x=a,this.y=b},addToWorld:function(){if(this.game.physics.p2._toRemove)for(var a=0;a<this.game.physics.p2._toRemove.length;a++)this.game.physics.p2._toRemove[a]===this&&this.game.physics.p2._toRemove.splice(a,1);this.data.world!==this.game.physics.p2.world&&this.game.physics.p2.addBody(this)},removeFromWorld:function(){this.data.world===this.game.physics.p2.world&&this.game.physics.p2.removeBodyNextStep(this)},destroy:function(){this.removeFromWorld(),this.clearShapes(),this._bodyCallbacks={},this._bodyCallbackContext={},this._groupCallbacks={},this._groupCallbackContext={},this.debugBody&&this.debugBody.destroy(!0,!0),this.debugBody=null,this.sprite&&(this.sprite.body=null,this.sprite=null)},clearShapes:function(){for(var a=this.data.shapes.length;a--;)this.data.removeShape(this.data.shapes[a]);this.shapeChanged()},addShape:function(a,b,c,d){return void 0===b&&(b=0),void 0===c&&(c=0),void 0===d&&(d=0),this.data.addShape(a,[this.world.pxmi(b),this.world.pxmi(c)],d),this.shapeChanged(),a},addCircle:function(a,b,c,d){var e=new p2.Circle({radius:this.world.pxm(a)});return this.addShape(e,b,c,d)},addRectangle:function(a,b,c,d,e){var f=new p2.Box({width:this.world.pxm(a),height:this.world.pxm(b)});return this.addShape(f,c,d,e)},addPlane:function(a,b,c){var d=new p2.Plane;return this.addShape(d,a,b,c)},addParticle:function(a,b,c){var d=new p2.Particle;return this.addShape(d,a,b,c)},addLine:function(a,b,c,d){var e=new p2.Line({length:this.world.pxm(a)});return this.addShape(e,b,c,d)},addCapsule:function(a,b,c,d,e){var f=new p2.Capsule({length:this.world.pxm(a),radius:this.world.pxm(b)});return this.addShape(f,c,d,e)},addPolygon:function(a,b){a=a||{},Array.isArray(b)||(b=Array.prototype.slice.call(arguments,1));var c=[];if(1===b.length&&Array.isArray(b[0]))c=b[0].slice(0);else if(Array.isArray(b[0]))c=b.slice();else if("number"==typeof b[0])for(var d=0,e=b.length;d<e;d+=2)c.push([b[d],b[d+1]]);var f=c.length-1;c[f][0]===c[0][0]&&c[f][1]===c[0][1]&&c.pop();for(var g=0;g<c.length;g++)c[g][0]=this.world.pxmi(c[g][0]),c[g][1]=this.world.pxmi(c[g][1]);var h=this.data.fromPolygon(c,a);return this.shapeChanged(),h},removeShape:function(a){var b=this.data.removeShape(a);return this.shapeChanged(),b},setCircle:function(a,b,c,d){return this.clearShapes(),this.addCircle(a,b,c,d)},setRectangle:function(a,b,c,d,e){return void 0===a&&(a=16),void 0===b&&(b=16),this.clearShapes(),this.addRectangle(a,b,c,d,e)},setRectangleFromSprite:function(a){return void 0===a&&(a=this.sprite),this.clearShapes(),this.addRectangle(a.width,a.height,0,0,a.rotation)},setMaterial:function(a,b){if(void 0===b)for(var c=this.data.shapes.length-1;c>=0;c--)this.data.shapes[c].material=a;else b.material=a},shapeChanged:function(){this.debugBody&&this.debugBody.draw()},addPhaserPolygon:function(a,b){for(var c=this.game.cache.getPhysicsData(a,b),d=[],e=0;e<c.length;e++){var f=c[e],g=this.addFixture(f);d[f.filter.group]=d[f.filter.group]||[],d[f.filter.group]=d[f.filter.group].concat(g),f.fixtureKey&&(d[f.fixtureKey]=g)}return this.data.aabbNeedsUpdate=!0,this.shapeChanged(),d},addFixture:function(a){var b=[];if(a.circle){var c=new p2.Circle({radius:this.world.pxm(a.circle.radius)});c.collisionGroup=a.filter.categoryBits,c.collisionMask=a.filter.maskBits,c.sensor=a.isSensor;var d=p2.vec2.create();d[0]=this.world.pxmi(a.circle.position[0]-this.sprite.width/2),d[1]=this.world.pxmi(a.circle.position[1]-this.sprite.height/2),this.data.addShape(c,d),b.push(c)}else for(var e=a.polygons,f=p2.vec2.create(),g=0;g<e.length;g++){for(var h=e[g],i=[],j=0;j<h.length;j+=2)i.push([this.world.pxmi(h[j]),this.world.pxmi(h[j+1])]);for(var c=new p2.Convex({vertices:i}),k=0;k!==c.vertices.length;k++){var l=c.vertices[k];p2.vec2.sub(l,l,c.centerOfMass)}p2.vec2.scale(f,c.centerOfMass,1),f[0]-=this.world.pxmi(this.sprite.width/2),f[1]-=this.world.pxmi(this.sprite.height/2),c.updateTriangles(),c.updateCenterOfMass(),c.updateBoundingRadius(),c.collisionGroup=a.filter.categoryBits,c.collisionMask=a.filter.maskBits,c.sensor=a.isSensor,this.data.addShape(c,f),b.push(c)}return b},loadPolygon:function(a,b){if(null===a)var c=b;else var c=this.game.cache.getPhysicsData(a,b);for(var d=p2.vec2.create(),e=0;e<c.length;e++){for(var f=[],g=0;g<c[e].shape.length;g+=2)f.push([this.world.pxmi(c[e].shape[g]),this.world.pxmi(c[e].shape[g+1])]);for(var h=new p2.Convex({vertices:f}),i=0;i!==h.vertices.length;i++){var j=h.vertices[i];p2.vec2.sub(j,j,h.centerOfMass)}p2.vec2.scale(d,h.centerOfMass,1),d[0]-=this.world.pxmi(this.sprite.width/2),d[1]-=this.world.pxmi(this.sprite.height/2),h.updateTriangles(),h.updateCenterOfMass(),h.updateBoundingRadius(),this.data.addShape(h,d)}return this.data.aabbNeedsUpdate=!0,this.shapeChanged(),!0}},c.Physics.P2.Body.prototype.constructor=c.Physics.P2.Body,c.Physics.P2.Body.DYNAMIC=1,c.Physics.P2.Body.STATIC=2,c.Physics.P2.Body.KINEMATIC=4,Object.defineProperty(c.Physics.P2.Body.prototype,"static",{get:function(){return this.data.type===c.Physics.P2.Body.STATIC},set:function(a){a&&this.data.type!==c.Physics.P2.Body.STATIC?(this.data.type=c.Physics.P2.Body.STATIC,this.mass=0):a||this.data.type!==c.Physics.P2.Body.STATIC||(this.data.type=c.Physics.P2.Body.DYNAMIC,this.mass=1)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"dynamic",{get:function(){return this.data.type===c.Physics.P2.Body.DYNAMIC},set:function(a){a&&this.data.type!==c.Physics.P2.Body.DYNAMIC?(this.data.type=c.Physics.P2.Body.DYNAMIC,this.mass=1):a||this.data.type!==c.Physics.P2.Body.DYNAMIC||(this.data.type=c.Physics.P2.Body.STATIC,this.mass=0)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"kinematic",{get:function(){return this.data.type===c.Physics.P2.Body.KINEMATIC},set:function(a){a&&this.data.type!==c.Physics.P2.Body.KINEMATIC?(this.data.type=c.Physics.P2.Body.KINEMATIC,this.mass=4):a||this.data.type!==c.Physics.P2.Body.KINEMATIC||(this.data.type=c.Physics.P2.Body.STATIC,this.mass=0)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"allowSleep",{get:function(){return this.data.allowSleep},set:function(a){a!==this.data.allowSleep&&(this.data.allowSleep=a)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"angle",{get:function(){return c.Math.wrapAngle(c.Math.radToDeg(this.data.angle))},set:function(a){this.data.angle=c.Math.degToRad(c.Math.wrapAngle(a))}}),Object.defineProperty(c.Physics.P2.Body.prototype,"angularDamping",{get:function(){return this.data.angularDamping},set:function(a){this.data.angularDamping=a}}),Object.defineProperty(c.Physics.P2.Body.prototype,"angularForce",{get:function(){return this.data.angularForce},set:function(a){this.data.angularForce=a}}),Object.defineProperty(c.Physics.P2.Body.prototype,"angularVelocity",{get:function(){return this.data.angularVelocity},set:function(a){this.data.angularVelocity=a}}),Object.defineProperty(c.Physics.P2.Body.prototype,"damping",{get:function(){return this.data.damping},set:function(a){this.data.damping=a}}),Object.defineProperty(c.Physics.P2.Body.prototype,"fixedRotation",{get:function(){return this.data.fixedRotation},set:function(a){a!==this.data.fixedRotation&&(this.data.fixedRotation=a)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"inertia",{get:function(){return this.data.inertia},set:function(a){this.data.inertia=a}}),Object.defineProperty(c.Physics.P2.Body.prototype,"mass",{get:function(){return this.data.mass},set:function(a){a!==this.data.mass&&(this.data.mass=a,this.data.updateMassProperties())}}),Object.defineProperty(c.Physics.P2.Body.prototype,"motionState",{get:function(){return this.data.type},set:function(a){a!==this.data.type&&(this.data.type=a)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"rotation",{get:function(){return this.data.angle},set:function(a){this.data.angle=a}}),Object.defineProperty(c.Physics.P2.Body.prototype,"sleepSpeedLimit",{get:function(){return this.data.sleepSpeedLimit},set:function(a){this.data.sleepSpeedLimit=a}}),Object.defineProperty(c.Physics.P2.Body.prototype,"x",{get:function(){return this.world.mpxi(this.data.position[0])},set:function(a){this.data.position[0]=this.world.pxmi(a)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"y",{get:function(){return this.world.mpxi(this.data.position[1])},set:function(a){this.data.position[1]=this.world.pxmi(a)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"id",{get:function(){return this.data.id}}),Object.defineProperty(c.Physics.P2.Body.prototype,"debug",{get:function(){return null!==this.debugBody},set:function(a){a&&!this.debugBody?this.debugBody=new c.Physics.P2.BodyDebug(this.game,this.data):!a&&this.debugBody&&(this.debugBody.destroy(),this.debugBody=null)}}),Object.defineProperty(c.Physics.P2.Body.prototype,"collideWorldBounds",{get:function(){return this._collideWorldBounds},set:function(a){a&&!this._collideWorldBounds?(this._collideWorldBounds=!0,this.updateCollisionMask()):!a&&this._collideWorldBounds&&(this._collideWorldBounds=!1,this.updateCollisionMask())}}),c.Physics.P2.BodyDebug=function(a,b,d){c.Group.call(this,a);var e={pixelsPerLengthUnit:a.physics.p2.mpx(1),debugPolygons:!1,lineWidth:1,alpha:.5};this.settings=c.Utils.extend(e,d),this.ppu=this.settings.pixelsPerLengthUnit,this.ppu=-1*this.ppu,this.body=b,this.canvas=new c.Graphics(a),this.canvas.alpha=this.settings.alpha,this.add(this.canvas),this.draw(),this.updateSpriteTransform()},c.Physics.P2.BodyDebug.prototype=Object.create(c.Group.prototype),c.Physics.P2.BodyDebug.prototype.constructor=c.Physics.P2.BodyDebug,c.Utils.extend(c.Physics.P2.BodyDebug.prototype,{updateSpriteTransform:function(){this.position.x=this.body.position[0]*this.ppu,this.position.y=this.body.position[1]*this.ppu,this.rotation=this.body.angle},draw:function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;if(h=this.body,j=this.canvas,j.clear(),c=parseInt(this.randomPastelHex(),16),f=16711680,g=this.lineWidth,h instanceof p2.Body&&h.shapes.length){var p=h.shapes.length;for(d=0;d!==p;){if(b=h.shapes[d],i=b.position||0,a=b.angle||0,b instanceof p2.Circle)this.drawCircle(j,i[0]*this.ppu,i[1]*this.ppu,a,b.radius*this.ppu,c,g);else if(b instanceof p2.Capsule)this.drawCapsule(j,i[0]*this.ppu,i[1]*this.ppu,a,b.length*this.ppu,b.radius*this.ppu,f,c,g);else if(b instanceof p2.Plane)this.drawPlane(j,i[0]*this.ppu,-i[1]*this.ppu,c,f,5*g,10*g,10*g,100*this.ppu,a);else if(b instanceof p2.Line)this.drawLine(j,b.length*this.ppu,f,g);else if(b instanceof p2.Box)this.drawRectangle(j,i[0]*this.ppu,i[1]*this.ppu,a,b.width*this.ppu,b.height*this.ppu,f,c,g);else if(b instanceof p2.Convex){for(l=[],m=p2.vec2.create(),e=n=0,o=b.vertices.length;0<=o?n<o:n>o;e=0<=o?++n:--n)k=b.vertices[e],p2.vec2.rotate(m,k,a),l.push([(m[0]+i[0])*this.ppu,-(m[1]+i[1])*this.ppu]);this.drawConvex(j,l,b.triangles,f,c,g,this.settings.debugPolygons,[i[0]*this.ppu,-i[1]*this.ppu])}d++}}},drawRectangle:function(a,b,c,d,e,f,g,h,i){void 0===i&&(i=1),void 0===g&&(g=0),a.lineStyle(i,g,1),a.beginFill(h),a.drawRect(b-e/2,c-f/2,e,f)},drawCircle:function(a,b,c,d,e,f,g){void 0===g&&(g=1),void 0===f&&(f=16777215),a.lineStyle(g,0,1),a.beginFill(f,1),a.drawCircle(b,c,2*-e),a.endFill(),a.moveTo(b,c),a.lineTo(b+e*Math.cos(-d),c+e*Math.sin(-d))},drawLine:function(a,b,c,d){void 0===d&&(d=1),void 0===c&&(c=0),a.lineStyle(5*d,c,1),a.moveTo(-b/2,0),a.lineTo(b/2,0)},drawConvex:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s;if(void 0===f&&(f=1),void 0===d&&(d=0),g){for(i=[16711680,65280,255],j=0;j!==b.length+1;)l=b[j%b.length],m=b[(j+1)%b.length],o=l[0],r=l[1],p=m[0],s=m[1],a.lineStyle(f,i[j%i.length],1),a.moveTo(o,-r),a.lineTo(p,-s),a.drawCircle(o,-r,2*f),j++;return a.lineStyle(f,0,1),a.drawCircle(h[0],h[1],2*f)}for(a.lineStyle(f,d,1),a.beginFill(e),j=0;j!==b.length;)k=b[j],n=k[0],q=k[1],0===j?a.moveTo(n,-q):a.lineTo(n,-q),j++;if(a.endFill(),b.length>2)return a.moveTo(b[b.length-1][0],-b[b.length-1][1]),a.lineTo(b[0][0],-b[0][1])},drawPath:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;for(void 0===e&&(e=1),void 0===c&&(c=0),a.lineStyle(e,c,1),"number"==typeof d&&a.beginFill(d),h=null,i=null,g=0;g<b.length;)p=b[g],q=p[0],r=p[1],q===h&&r===i||(0===g?a.moveTo(q,r):(j=h,k=i,l=q,m=r,n=b[(g+1)%b.length][0],o=b[(g+1)%b.length][1],f=(l-j)*(o-k)-(n-j)*(m-k),0!==f&&a.lineTo(q,r)),h=q,i=r),g++;"number"==typeof d&&a.endFill(),b.length>2&&"number"==typeof d&&(a.moveTo(b[b.length-1][0],b[b.length-1][1]),a.lineTo(b[0][0],b[0][1]))},drawPlane:function(a,b,c,d,e,f,g,h,i,j){var k,l,m;void 0===f&&(f=1),void 0===d&&(d=16777215),a.lineStyle(f,e,11),a.beginFill(d),k=i,a.moveTo(b,-c),l=b+Math.cos(j)*this.game.width,m=c+Math.sin(j)*this.game.height,a.lineTo(l,-m),a.moveTo(b,-c),l=b+Math.cos(j)*-this.game.width,m=c+Math.sin(j)*-this.game.height,a.lineTo(l,-m)},drawCapsule:function(a,b,c,d,e,f,g,h,i){void 0===i&&(i=1),void 0===g&&(g=0),a.lineStyle(i,g,1);var j=Math.cos(d),k=Math.sin(d);a.beginFill(h,1),a.drawCircle(-e/2*j+b,-e/2*k+c,2*-f),a.drawCircle(e/2*j+b,e/2*k+c,2*-f),a.endFill(),a.lineStyle(i,g,0),a.beginFill(h,1),a.moveTo(-e/2*j+f*k+b,-e/2*k+f*j+c),a.lineTo(e/2*j+f*k+b,e/2*k+f*j+c),a.lineTo(e/2*j-f*k+b,e/2*k-f*j+c),a.lineTo(-e/2*j-f*k+b,-e/2*k-f*j+c),a.endFill(),a.lineStyle(i,g,1),a.moveTo(-e/2*j+f*k+b,-e/2*k+f*j+c),a.lineTo(e/2*j+f*k+b,e/2*k+f*j+c),a.moveTo(-e/2*j-f*k+b,-e/2*k-f*j+c),a.lineTo(e/2*j-f*k+b,e/2*k-f*j+c)},randomPastelHex:function(){var a,b,c,d;return c=[255,255,255],d=Math.floor(256*Math.random()),b=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),d=Math.floor((d+3*c[0])/4),b=Math.floor((b+3*c[1])/4),a=Math.floor((a+3*c[2])/4),this.rgbToHex(d,b,a)},rgbToHex:function(a,b,c){return this.componentToHex(a)+this.componentToHex(b)+this.componentToHex(c)},componentToHex:function(a){var b;return b=a.toString(16),2===b.length?b:b+"0"}}),c.Physics.P2.Spring=function(a,b,c,d,e,f,g,h,i,j){this.game=a.game,this.world=a,void 0===d&&(d=1),void 0===e&&(e=100),void 0===f&&(f=1),d=a.pxm(d);var k={restLength:d,stiffness:e,damping:f};"undefined"!=typeof g&&null!==g&&(k.worldAnchorA=[a.pxm(g[0]),a.pxm(g[1])]),"undefined"!=typeof h&&null!==h&&(k.worldAnchorB=[a.pxm(h[0]),a.pxm(h[1])]),"undefined"!=typeof i&&null!==i&&(k.localAnchorA=[a.pxm(i[0]),a.pxm(i[1])]),"undefined"!=typeof j&&null!==j&&(k.localAnchorB=[a.pxm(j[0]),a.pxm(j[1])]),this.data=new p2.LinearSpring(b,c,k),this.data.parent=this},c.Physics.P2.Spring.prototype.constructor=c.Physics.P2.Spring,c.Physics.P2.RotationalSpring=function(a,b,c,d,e,f){this.game=a.game,this.world=a,void 0===d&&(d=null),void 0===e&&(e=100),void 0===f&&(f=1),d&&(d=a.pxm(d));var g={restAngle:d,stiffness:e,damping:f};this.data=new p2.RotationalSpring(b,c,g),this.data.parent=this},c.Physics.P2.Spring.prototype.constructor=c.Physics.P2.Spring,c.Physics.P2.Material=function(a){this.name=a,p2.Material.call(this)},c.Physics.P2.Material.prototype=Object.create(p2.Material.prototype),c.Physics.P2.Material.prototype.constructor=c.Physics.P2.Material,c.Physics.P2.ContactMaterial=function(a,b,c){p2.ContactMaterial.call(this,a,b,c)},c.Physics.P2.ContactMaterial.prototype=Object.create(p2.ContactMaterial.prototype),c.Physics.P2.ContactMaterial.prototype.constructor=c.Physics.P2.ContactMaterial,c.Physics.P2.CollisionGroup=function(a){this.mask=a},c.Physics.P2.DistanceConstraint=function(a,b,c,d,e,f,g){void 0===d&&(d=100),void 0===e&&(e=[0,0]),void 0===f&&(f=[0,0]),void 0===g&&(g=Number.MAX_VALUE),this.game=a.game,this.world=a,d=a.pxm(d),e=[a.pxmi(e[0]),a.pxmi(e[1])],f=[a.pxmi(f[0]),a.pxmi(f[1])];var h={distance:d,localAnchorA:e,localAnchorB:f,maxForce:g};p2.DistanceConstraint.call(this,b,c,h)},c.Physics.P2.DistanceConstraint.prototype=Object.create(p2.DistanceConstraint.prototype),c.Physics.P2.DistanceConstraint.prototype.constructor=c.Physics.P2.DistanceConstraint,c.Physics.P2.GearConstraint=function(a,b,c,d,e){void 0===d&&(d=0),void 0===e&&(e=1),this.game=a.game,this.world=a;var f={angle:d,ratio:e};p2.GearConstraint.call(this,b,c,f)},c.Physics.P2.GearConstraint.prototype=Object.create(p2.GearConstraint.prototype),c.Physics.P2.GearConstraint.prototype.constructor=c.Physics.P2.GearConstraint,c.Physics.P2.LockConstraint=function(a,b,c,d,e,f){void 0===d&&(d=[0,0]),void 0===e&&(e=0),void 0===f&&(f=Number.MAX_VALUE),this.game=a.game,this.world=a,d=[a.pxm(d[0]),a.pxm(d[1])];var g={localOffsetB:d,localAngleB:e,maxForce:f};p2.LockConstraint.call(this,b,c,g)},c.Physics.P2.LockConstraint.prototype=Object.create(p2.LockConstraint.prototype),c.Physics.P2.LockConstraint.prototype.constructor=c.Physics.P2.LockConstraint,c.Physics.P2.PrismaticConstraint=function(a,b,c,d,e,f,g,h){void 0===d&&(d=!0),void 0===e&&(e=[0,0]),void 0===f&&(f=[0,0]),void 0===g&&(g=[0,0]),void 0===h&&(h=Number.MAX_VALUE),this.game=a.game,this.world=a,e=[a.pxmi(e[0]),a.pxmi(e[1])],f=[a.pxmi(f[0]),a.pxmi(f[1])];var i={localAnchorA:e,localAnchorB:f,localAxisA:g,maxForce:h,disableRotationalLock:!d};p2.PrismaticConstraint.call(this,b,c,i)},c.Physics.P2.PrismaticConstraint.prototype=Object.create(p2.PrismaticConstraint.prototype),c.Physics.P2.PrismaticConstraint.prototype.constructor=c.Physics.P2.PrismaticConstraint,c.Physics.P2.RevoluteConstraint=function(a,b,c,d,e,f,g){void 0===f&&(f=Number.MAX_VALUE),void 0===g&&(g=null),this.game=a.game,this.world=a,c=[a.pxmi(c[0]),a.pxmi(c[1])],e=[a.pxmi(e[0]),a.pxmi(e[1])],g&&(g=[a.pxmi(g[0]),a.pxmi(g[1])]);var h={worldPivot:g,localPivotA:c,localPivotB:e,maxForce:f};p2.RevoluteConstraint.call(this,b,d,h)},c.Physics.P2.RevoluteConstraint.prototype=Object.create(p2.RevoluteConstraint.prototype),c.Physics.P2.RevoluteConstraint.prototype.constructor=c.Physics.P2.RevoluteConstraint,c.ImageCollection=function(a,b,c,d,e,f,g){(void 0===c||c<=0)&&(c=32),(void 0===d||d<=0)&&(d=32),void 0===e&&(e=0),void 0===f&&(f=0),this.name=a,this.firstgid=0|b,this.imageWidth=0|c,this.imageHeight=0|d,this.imageMargin=0|e,this.imageSpacing=0|f,this.properties=g||{},this.images=[],this.total=0},c.ImageCollection.prototype={containsImageIndex:function(a){return a>=this.firstgid&&a<this.firstgid+this.total},addImage:function(a,b){this.images.push({gid:a,image:b}),this.total++}},c.ImageCollection.prototype.constructor=c.ImageCollection,c.Tile=function(a,b,c,d,e,f){this.layer=a,this.index=b,this.x=c,this.y=d,this.rotation=0,this.flipped=!1,this.worldX=c*e,this.worldY=d*f,this.width=e,this.height=f,this.centerX=Math.abs(e/2),this.centerY=Math.abs(f/2),this.alpha=1,this.properties={},this.scanned=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1,this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.collisionCallback=null,this.collisionCallbackContext=this},c.Tile.prototype={containsPoint:function(a,b){return!(a<this.worldX||b<this.worldY||a>this.right||b>this.bottom)},intersects:function(a,b,c,d){return!(c<=this.worldX)&&(!(d<=this.worldY)&&(!(a>=this.worldX+this.width)&&!(b>=this.worldY+this.height)))},setCollisionCallback:function(a,b){this.collisionCallback=a,this.collisionCallbackContext=b},destroy:function(){this.collisionCallback=null,this.collisionCallbackContext=null,this.properties=null},setCollision:function(a,b,c,d){this.collideLeft=a,this.collideRight=b,this.collideUp=c,this.collideDown=d,this.faceLeft=a,this.faceRight=b,this.faceTop=c,this.faceBottom=d},resetCollision:function(){this.collideLeft=!1,this.collideRight=!1,this.collideUp=!1,this.collideDown=!1,this.faceTop=!1,this.faceBottom=!1,this.faceLeft=!1,this.faceRight=!1},isInteresting:function(a,b){return a&&b?this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.faceTop||this.faceBottom||this.faceLeft||this.faceRight||this.collisionCallback:a?this.collideLeft||this.collideRight||this.collideUp||this.collideDown:!!b&&(this.faceTop||this.faceBottom||this.faceLeft||this.faceRight)},copy:function(a){this.index=a.index,this.alpha=a.alpha,this.properties=a.properties,this.collideUp=a.collideUp,this.collideDown=a.collideDown,this.collideLeft=a.collideLeft,this.collideRight=a.collideRight,this.collisionCallback=a.collisionCallback,this.collisionCallbackContext=a.collisionCallbackContext}},c.Tile.prototype.constructor=c.Tile,Object.defineProperty(c.Tile.prototype,"collides",{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown}}),Object.defineProperty(c.Tile.prototype,"canCollide",{get:function(){return this.collideLeft||this.collideRight||this.collideUp||this.collideDown||this.collisionCallback}}),Object.defineProperty(c.Tile.prototype,"left",{get:function(){return this.worldX}}),Object.defineProperty(c.Tile.prototype,"right",{get:function(){return this.worldX+this.width}}),Object.defineProperty(c.Tile.prototype,"top",{get:function(){return this.worldY}}),Object.defineProperty(c.Tile.prototype,"bottom",{get:function(){return this.worldY+this.height}}),c.Tilemap=function(a,b,d,e,f,g){this.game=a,this.key=b;var h=c.TilemapParser.parse(this.game,b,d,e,f,g);null!==h&&(this.width=h.width,this.height=h.height,this.tileWidth=h.tileWidth,this.tileHeight=h.tileHeight,this.orientation=h.orientation,this.format=h.format,this.version=h.version,this.properties=h.properties,this.widthInPixels=h.widthInPixels,this.heightInPixels=h.heightInPixels,this.layers=h.layers,this.tilesets=h.tilesets,this.imagecollections=h.imagecollections,this.tiles=h.tiles,this.objects=h.objects,this.collideIndexes=[],this.collision=h.collision,this.images=h.images,this.enableDebug=!1,this.currentLayer=0,this.debugMap=[],this._results=[],this._tempA=0,this._tempB=0)},c.Tilemap.CSV=0,c.Tilemap.TILED_JSON=1,c.Tilemap.NORTH=0,c.Tilemap.EAST=1,c.Tilemap.SOUTH=2,c.Tilemap.WEST=3,c.Tilemap.prototype={create:function(a,b,c,d,e,f){return void 0===f&&(f=this.game.world),this.width=b,this.height=c,this.setTileSize(d,e),this.layers.length=0,this.createBlankLayer(a,b,c,d,e,f)},setTileSize:function(a,b){this.tileWidth=a,this.tileHeight=b,this.widthInPixels=this.width*a,this.heightInPixels=this.height*b},addTilesetImage:function(a,b,d,e,f,g,h){if(void 0===a)return null;void 0===d&&(d=this.tileWidth),void 0===e&&(e=this.tileHeight),void 0===f&&(f=0),void 0===g&&(g=0),void 0===h&&(h=0),0===d&&(d=32),0===e&&(e=32);var i=null;if(void 0!==b&&null!==b||(b=a),b instanceof c.BitmapData)i=b.canvas;else{if(!this.game.cache.checkImageKey(b))return console.warn('Phaser.Tilemap.addTilesetImage: Invalid image key given: "'+b+'"'),null;i=this.game.cache.getImage(b)}var j=this.getTilesetIndex(a);if(null===j&&this.format===c.Tilemap.TILED_JSON)return console.warn('Phaser.Tilemap.addTilesetImage: No data found in the JSON matching the tileset name: "'+a+'"'),null;if(this.tilesets[j])return this.tilesets[j].setImage(i),this.tilesets[j];var k=new c.Tileset(a,h,d,e,f,g,{});k.setImage(i),this.tilesets.push(k);for(var l=this.tilesets.length-1,m=f,n=f,o=0,p=0,q=0,r=h;r<h+k.total&&(this.tiles[r]=[m,n,l],m+=d+g,o++,o!==k.total)&&(p++,p!==k.columns||(m=f,n+=e+g,p=0,q++,q!==k.rows));r++);return k},createFromObjects:function(a,b,d,e,f,g,h,i,j){if(void 0===f&&(f=!0),void 0===g&&(g=!1),void 0===h&&(h=this.game.world),void 0===i&&(i=c.Sprite),void 0===j&&(j=!0),!this.objects[a])return void console.warn("Tilemap.createFromObjects: Invalid objectgroup name given: "+a);for(var k=0;k<this.objects[a].length;k++){var l=!1,m=this.objects[a][k];if(void 0!==m.gid&&"number"==typeof b&&m.gid===b?l=!0:void 0!==m.id&&"number"==typeof b&&m.id===b?l=!0:void 0!==m.name&&"string"==typeof b&&m.name===b&&(l=!0),l){var n=new i(this.game,parseFloat(m.x,10),parseFloat(m.y,10),d,e);n.name=m.name,n.visible=m.visible,n.autoCull=g,n.exists=f,m.width&&(n.width=m.width),m.height&&(n.height=m.height),m.rotation&&(n.angle=m.rotation),j&&(n.y-=n.height),h.add(n);for(var o in m.properties)h.set(n,o,m.properties[o],!1,!1,0,!0)}}},createFromTiles:function(a,b,d,e,f,g){"number"==typeof a&&(a=[a]),void 0===b||null===b?b=[]:"number"==typeof b&&(b=[b]),e=this.getLayer(e),void 0===f&&(f=this.game.world),void 0===g&&(g={}),void 0===g.customClass&&(g.customClass=c.Sprite),void 0===g.adjustY&&(g.adjustY=!0);var h=this.layers[e].width,i=this.layers[e].height;if(this.copy(0,0,h,i,e),this._results.length<2)return 0;for(var j,k=0,l=1,m=this._results.length;l<m;l++)if(a.indexOf(this._results[l].index)!==-1){j=new g.customClass(this.game,this._results[l].worldX,this._results[l].worldY,d);for(var n in g)j[n]=g[n];f.add(j),k++}if(1===b.length)for(l=0;l<a.length;l++)this.replace(a[l],b[0],0,0,h,i,e);else if(b.length>1)for(l=0;l<a.length;l++)this.replace(a[l],b[l],0,0,h,i,e);return k},createLayer:function(a,b,d,e){void 0===b&&(b=this.game.width),void 0===d&&(d=this.game.height),void 0===e&&(e=this.game.world);var f=a;if("string"==typeof a&&(f=this.getLayerIndex(a)),null===f||f>this.layers.length)return void console.warn("Tilemap.createLayer: Invalid layer ID given: "+f);void 0===b||b<=0?b=Math.min(this.game.width,this.layers[f].widthInPixels):b>this.game.width&&(b=this.game.width),void 0===d||d<=0?d=Math.min(this.game.height,this.layers[f].heightInPixels):d>this.game.height&&(d=this.game.height),this.enableDebug&&(console.group("Tilemap.createLayer"),console.log("Name:",this.layers[f].name),console.log("Size:",b,"x",d),console.log("Tileset:",this.tilesets[0].name,"index:",f));var g=e.add(new c.TilemapLayer(this.game,this,f,b,d));return this.enableDebug&&console.groupEnd(),g},createBlankLayer:function(a,b,d,e,f,g){if(void 0===g&&(g=this.game.world),null!==this.getLayerIndex(a))return void console.warn("Tilemap.createBlankLayer: Layer with matching name already exists: "+a);for(var h,i={name:a,x:0,y:0,width:b,height:d,widthInPixels:b*e,heightInPixels:d*f,alpha:1,visible:!0,properties:{},indexes:[],callbacks:[],bodies:[],data:null},j=[],k=0;k<d;k++){h=[];for(var l=0;l<b;l++)h.push(new c.Tile(i,(-1),l,k,e,f));j.push(h)}i.data=j,this.layers.push(i),this.currentLayer=this.layers.length-1;var m=i.widthInPixels,n=i.heightInPixels;m>this.game.width&&(m=this.game.width),n>this.game.height&&(n=this.game.height);var j=new c.TilemapLayer(this.game,this,this.layers.length-1,m,n);return j.name=a,g.add(j)},getIndex:function(a,b){for(var c=0;c<a.length;c++)if(a[c].name===b)return c;return null},getLayerIndex:function(a){return this.getIndex(this.layers,a)},getTilesetIndex:function(a){return this.getIndex(this.tilesets,a)},getImageIndex:function(a){return this.getIndex(this.images,a)},setTileIndexCallback:function(a,b,c,d){if(d=this.getLayer(d),"number"==typeof a)this.layers[d].callbacks[a]={callback:b,callbackContext:c};else for(var e=0,f=a.length;e<f;e++)this.layers[d].callbacks[a[e]]={callback:b,callbackContext:c}},setTileLocationCallback:function(a,b,c,d,e,f,g){if(g=this.getLayer(g),this.copy(a,b,c,d,g),!(this._results.length<2))for(var h=1;h<this._results.length;h++)this._results[h].setCollisionCallback(e,f)},setCollision:function(a,b,c,d){if(void 0===b&&(b=!0),void 0===d&&(d=!0),c=this.getLayer(c),"number"==typeof a)return this.setCollisionByIndex(a,b,c,!0);if(Array.isArray(a)){for(var e=0;e<a.length;e++)this.setCollisionByIndex(a[e],b,c,!1);d&&this.calculateFaces(c)}},setCollisionBetween:function(a,b,c,d,e){if(void 0===c&&(c=!0),void 0===e&&(e=!0),d=this.getLayer(d),!(a>b)){for(var f=a;f<=b;f++)this.setCollisionByIndex(f,c,d,!1);e&&this.calculateFaces(d)}},setCollisionByExclusion:function(a,b,c,d){void 0===b&&(b=!0),void 0===d&&(d=!0),c=this.getLayer(c);for(var e=0,f=this.tiles.length;e<f;e++)a.indexOf(e)===-1&&this.setCollisionByIndex(e,b,c,!1);d&&this.calculateFaces(c)},setCollisionByIndex:function(a,b,c,d){if(void 0===b&&(b=!0),void 0===c&&(c=this.currentLayer),void 0===d&&(d=!0),b)this.collideIndexes.push(a);else{var e=this.collideIndexes.indexOf(a);e>-1&&this.collideIndexes.splice(e,1)}for(var f=0;f<this.layers[c].height;f++)for(var g=0;g<this.layers[c].width;g++){var h=this.layers[c].data[f][g];h&&h.index===a&&(b?h.setCollision(!0,!0,!0,!0):h.resetCollision(),h.faceTop=b,h.faceBottom=b,h.faceLeft=b,h.faceRight=b)}return d&&this.calculateFaces(c),c},getLayer:function(a){return void 0===a?a=this.currentLayer:"string"==typeof a?a=this.getLayerIndex(a):a instanceof c.TilemapLayer&&(a=a.index),a},setPreventRecalculate:function(a){if(a===!0&&this.preventingRecalculate!==!0&&(this.preventingRecalculate=!0,this.needToRecalculate={}),a===!1&&this.preventingRecalculate===!0){this.preventingRecalculate=!1;for(var b in this.needToRecalculate)this.calculateFaces(b);this.needToRecalculate=!1}},calculateFaces:function(a){if(this.preventingRecalculate)return void(this.needToRecalculate[a]=!0);for(var b=null,c=null,d=null,e=null,f=0,g=this.layers[a].height;f<g;f++)for(var h=0,i=this.layers[a].width;h<i;h++){var j=this.layers[a].data[f][h];j&&(b=this.getTileAbove(a,h,f),c=this.getTileBelow(a,h,f),d=this.getTileLeft(a,h,f),e=this.getTileRight(a,h,f),j.collides&&(j.faceTop=!0,j.faceBottom=!0,j.faceLeft=!0,j.faceRight=!0),b&&b.collides&&(j.faceTop=!1),c&&c.collides&&(j.faceBottom=!1),d&&d.collides&&(j.faceLeft=!1),e&&e.collides&&(j.faceRight=!1))}},getTileAbove:function(a,b,c){return c>0?this.layers[a].data[c-1][b]:null},getTileBelow:function(a,b,c){return c<this.layers[a].height-1?this.layers[a].data[c+1][b]:null},getTileLeft:function(a,b,c){return b>0?this.layers[a].data[c][b-1]:null},getTileRight:function(a,b,c){return b<this.layers[a].width-1?this.layers[a].data[c][b+1]:null},setLayer:function(a){a=this.getLayer(a),this.layers[a]&&(this.currentLayer=a)},hasTile:function(a,b,c){return c=this.getLayer(c),void 0!==this.layers[c].data[b]&&void 0!==this.layers[c].data[b][a]&&this.layers[c].data[b][a].index>-1},removeTile:function(a,b,d){if(d=this.getLayer(d),a>=0&&a<this.layers[d].width&&b>=0&&b<this.layers[d].height&&this.hasTile(a,b,d)){var e=this.layers[d].data[b][a];return this.layers[d].data[b][a]=new c.Tile(this.layers[d],(-1),a,b,this.tileWidth,this.tileHeight),this.layers[d].dirty=!0,this.calculateFaces(d),e}},removeTileWorldXY:function(a,b,c,d,e){return e=this.getLayer(e),a=this.game.math.snapToFloor(a,c)/c,b=this.game.math.snapToFloor(b,d)/d,this.removeTile(a,b,e)},putTile:function(a,b,d,e){if(null===a)return this.removeTile(b,d,e);if(e=this.getLayer(e),b>=0&&b<this.layers[e].width&&d>=0&&d<this.layers[e].height){var f;return a instanceof c.Tile?(f=a.index,this.hasTile(b,d,e)?this.layers[e].data[d][b].copy(a):this.layers[e].data[d][b]=new c.Tile(e,f,b,d,a.width,a.height)):(f=a,this.hasTile(b,d,e)?this.layers[e].data[d][b].index=f:this.layers[e].data[d][b]=new c.Tile(this.layers[e],f,b,d,this.tileWidth,this.tileHeight)),this.collideIndexes.indexOf(f)>-1?this.layers[e].data[d][b].setCollision(!0,!0,!0,!0):this.layers[e].data[d][b].resetCollision(),this.layers[e].dirty=!0,this.calculateFaces(e),this.layers[e].data[d][b]}return null},putTileWorldXY:function(a,b,c,d,e,f){return f=this.getLayer(f),b=this.game.math.snapToFloor(b,d)/d,c=this.game.math.snapToFloor(c,e)/e,this.putTile(a,b,c,f)},searchTileIndex:function(a,b,c,d){void 0===b&&(b=0),void 0===c&&(c=!1),d=this.getLayer(d);var e=0;if(c){for(var f=this.layers[d].height-1;f>=0;f--)for(var g=this.layers[d].width-1;g>=0;g--)if(this.layers[d].data[f][g].index===a){if(e===b)return this.layers[d].data[f][g];e++}}else for(var f=0;f<this.layers[d].height;f++)for(var g=0;g<this.layers[d].width;g++)if(this.layers[d].data[f][g].index===a){if(e===b)return this.layers[d].data[f][g];e++}return null},getTile:function(a,b,c,d){return void 0===d&&(d=!1),c=this.getLayer(c),a>=0&&a<this.layers[c].width&&b>=0&&b<this.layers[c].height?this.layers[c].data[b][a].index===-1?d?this.layers[c].data[b][a]:null:this.layers[c].data[b][a]:null;
	},getTileWorldXY:function(a,b,c,d,e,f){return void 0===c&&(c=this.tileWidth),void 0===d&&(d=this.tileHeight),e=this.getLayer(e),a=this.game.math.snapToFloor(a,c)/c,b=this.game.math.snapToFloor(b,d)/d,this.getTile(a,b,e,f)},copy:function(a,b,c,d,e){if(e=this.getLayer(e),!this.layers[e])return void(this._results.length=0);void 0===a&&(a=0),void 0===b&&(b=0),void 0===c&&(c=this.layers[e].width),void 0===d&&(d=this.layers[e].height),a<0&&(a=0),b<0&&(b=0),c>this.layers[e].width&&(c=this.layers[e].width),d>this.layers[e].height&&(d=this.layers[e].height),this._results.length=0,this._results.push({x:a,y:b,width:c,height:d,layer:e});for(var f=b;f<b+d;f++)for(var g=a;g<a+c;g++)this._results.push(this.layers[e].data[f][g]);return this._results},paste:function(a,b,c,d){if(void 0===a&&(a=0),void 0===b&&(b=0),d=this.getLayer(d),c&&!(c.length<2)){for(var e=a-c[1].x,f=b-c[1].y,g=1;g<c.length;g++)this.layers[d].data[f+c[g].y][e+c[g].x].copy(c[g]);this.layers[d].dirty=!0,this.calculateFaces(d)}},swap:function(a,b,c,d,e,f,g){g=this.getLayer(g),this.copy(c,d,e,f,g),this._results.length<2||(this._tempA=a,this._tempB=b,this._results.forEach(this.swapHandler,this),this.paste(c,d,this._results,g))},swapHandler:function(a){a.index===this._tempA?a.index=this._tempB:a.index===this._tempB&&(a.index=this._tempA)},forEach:function(a,b,c,d,e,f,g){g=this.getLayer(g),this.copy(c,d,e,f,g),this._results.length<2||(this._results.forEach(a,b),this.paste(c,d,this._results,g))},replace:function(a,b,c,d,e,f,g){if(g=this.getLayer(g),this.copy(c,d,e,f,g),!(this._results.length<2)){for(var h=1;h<this._results.length;h++)this._results[h].index===a&&(this._results[h].index=b);this.paste(c,d,this._results,g)}},random:function(a,b,c,d,e){if(e=this.getLayer(e),this.copy(a,b,c,d,e),!(this._results.length<2)){for(var f=[],g=1;g<this._results.length;g++)if(this._results[g].index){var h=this._results[g].index;f.indexOf(h)===-1&&f.push(h)}for(var i=1;i<this._results.length;i++)this._results[i].index=this.game.rnd.pick(f);this.paste(a,b,this._results,e)}},shuffle:function(a,b,d,e,f){if(f=this.getLayer(f),this.copy(a,b,d,e,f),!(this._results.length<2)){for(var g=[],h=1;h<this._results.length;h++)this._results[h].index&&g.push(this._results[h].index);c.ArrayUtils.shuffle(g);for(var i=1;i<this._results.length;i++)this._results[i].index=g[i-1];this.paste(a,b,this._results,f)}},fill:function(a,b,c,d,e,f){if(f=this.getLayer(f),this.copy(b,c,d,e,f),!(this._results.length<2)){for(var g=1;g<this._results.length;g++)this._results[g].index=a;this.paste(b,c,this._results,f)}},removeAllLayers:function(){this.layers.length=0,this.currentLayer=0},dump:function(){for(var a="",b=[""],c=0;c<this.layers[this.currentLayer].height;c++){for(var d=0;d<this.layers[this.currentLayer].width;d++)a+="%c  ",this.layers[this.currentLayer].data[c][d]>1?this.debugMap[this.layers[this.currentLayer].data[c][d]]?b.push("background: "+this.debugMap[this.layers[this.currentLayer].data[c][d]]):b.push("background: #ffffff"):b.push("background: rgb(0, 0, 0)");a+="\n"}b[0]=a,console.log.apply(console,b)},destroy:function(){this.removeAllLayers(),this.data=[],this.game=null}},c.Tilemap.prototype.constructor=c.Tilemap,Object.defineProperty(c.Tilemap.prototype,"layer",{get:function(){return this.layers[this.currentLayer]},set:function(a){a!==this.currentLayer&&this.setLayer(a)}}),c.TilemapLayer=function(a,b,d,e,f){e|=0,f|=0,c.Sprite.call(this,a,0,0),this.map=b,this.index=d,this.layer=b.layers[d],this.canvas=PIXI.CanvasPool.create(this,e,f),this.context=this.canvas.getContext("2d"),this.setTexture(new PIXI.Texture(new PIXI.BaseTexture(this.canvas))),this.type=c.TILEMAPLAYER,this.physicsType=c.TILEMAPLAYER,this.renderSettings={enableScrollDelta:!1,overdrawRatio:.2,copyCanvas:null},this.debug=!1,this.exists=!0,this.debugSettings={missingImageFill:"rgb(255,255,255)",debuggedTileOverfill:"rgba(0,255,0,0.4)",forceFullRedraw:!0,debugAlpha:.5,facingEdgeStroke:"rgba(0,255,0,1)",collidingTileOverfill:"rgba(0,255,0,0.2)"},this.scrollFactorX=1,this.scrollFactorY=1,this.dirty=!0,this.rayStepRate=4,this._wrap=!1,this._mc={scrollX:0,scrollY:0,renderWidth:0,renderHeight:0,tileWidth:b.tileWidth,tileHeight:b.tileHeight,cw:b.tileWidth,ch:b.tileHeight,tilesets:[]},this._scrollX=0,this._scrollY=0,this._results=[],a.device.canvasBitBltShift||(this.renderSettings.copyCanvas=c.TilemapLayer.ensureSharedCopyCanvas()),this.fixedToCamera=!0},c.TilemapLayer.prototype=Object.create(c.Sprite.prototype),c.TilemapLayer.prototype.constructor=c.TilemapLayer,c.TilemapLayer.prototype.preUpdateCore=c.Component.Core.preUpdate,c.TilemapLayer.sharedCopyCanvas=null,c.TilemapLayer.ensureSharedCopyCanvas=function(){return this.sharedCopyCanvas||(this.sharedCopyCanvas=PIXI.CanvasPool.create(this,2,2)),this.sharedCopyCanvas},c.TilemapLayer.prototype.preUpdate=function(){return this.preUpdateCore()},c.TilemapLayer.prototype.postUpdate=function(){this.fixedToCamera&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y),this._scrollX=this.game.camera.view.x*this.scrollFactorX/this.scale.x,this._scrollY=this.game.camera.view.y*this.scrollFactorY/this.scale.y},c.TilemapLayer.prototype._renderCanvas=function(a){this.fixedToCamera&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y),this._scrollX=this.game.camera.view.x*this.scrollFactorX/this.scale.x,this._scrollY=this.game.camera.view.y*this.scrollFactorY/this.scale.y,this.render(),PIXI.Sprite.prototype._renderCanvas.call(this,a)},c.TilemapLayer.prototype._renderWebGL=function(a){this.fixedToCamera&&(this.position.x=(this.game.camera.view.x+this.cameraOffset.x)/this.game.camera.scale.x,this.position.y=(this.game.camera.view.y+this.cameraOffset.y)/this.game.camera.scale.y),this._scrollX=this.game.camera.view.x*this.scrollFactorX/this.scale.x,this._scrollY=this.game.camera.view.y*this.scrollFactorY/this.scale.y,this.render(),PIXI.Sprite.prototype._renderWebGL.call(this,a)},c.TilemapLayer.prototype.destroy=function(){PIXI.CanvasPool.remove(this),c.Component.Destroy.prototype.destroy.call(this)},c.TilemapLayer.prototype.resize=function(a,b){this.canvas.width=a,this.canvas.height=b,this.texture.frame.resize(a,b),this.texture.width=a,this.texture.height=b,this.texture.crop.width=a,this.texture.crop.height=b,this.texture.baseTexture.width=a,this.texture.baseTexture.height=b,this.texture.baseTexture.dirty(),this.texture.requiresUpdate=!0,this.texture._updateUvs(),this.dirty=!0},c.TilemapLayer.prototype.resizeWorld=function(){this.game.world.setBounds(0,0,this.layer.widthInPixels*this.scale.x,this.layer.heightInPixels*this.scale.y)},c.TilemapLayer.prototype._fixX=function(a){return 1===this.scrollFactorX||0===this.scrollFactorX&&0===this.position.x?a:0===this.scrollFactorX&&0!==this.position.x?a-this.position.x:this._scrollX+(a-this._scrollX/this.scrollFactorX)},c.TilemapLayer.prototype._unfixX=function(a){return 1===this.scrollFactorX?a:this._scrollX/this.scrollFactorX+(a-this._scrollX)},c.TilemapLayer.prototype._fixY=function(a){return 1===this.scrollFactorY||0===this.scrollFactorY&&0===this.position.y?a:0===this.scrollFactorY&&0!==this.position.y?a-this.position.y:this._scrollY+(a-this._scrollY/this.scrollFactorY)},c.TilemapLayer.prototype._unfixY=function(a){return 1===this.scrollFactorY?a:this._scrollY/this.scrollFactorY+(a-this._scrollY)},c.TilemapLayer.prototype.getTileX=function(a){return Math.floor(this._fixX(a)/this._mc.tileWidth)},c.TilemapLayer.prototype.getTileY=function(a){return Math.floor(this._fixY(a)/this._mc.tileHeight)},c.TilemapLayer.prototype.getTileXY=function(a,b,c){return c.x=this.getTileX(a),c.y=this.getTileY(b),c},c.TilemapLayer.prototype.getRayCastTiles=function(a,b,c,d){b||(b=this.rayStepRate),void 0===c&&(c=!1),void 0===d&&(d=!1);var e=this.getTiles(a.x,a.y,a.width,a.height,c,d);if(0===e.length)return[];for(var f=a.coordinatesOnLine(b),g=[],h=0;h<e.length;h++)for(var i=0;i<f.length;i++){var j=e[h],k=f[i];if(j.containsPoint(k[0],k[1])){g.push(j);break}}return g},c.TilemapLayer.prototype.getTiles=function(a,b,c,d,e,f){void 0===e&&(e=!1),void 0===f&&(f=!1);var g=!(e||f);a=this._fixX(a),b=this._fixY(b);for(var h=Math.floor(a/(this._mc.cw*this.scale.x)),i=Math.floor(b/(this._mc.ch*this.scale.y)),j=Math.ceil((a+c)/(this._mc.cw*this.scale.x))-h,k=Math.ceil((b+d)/(this._mc.ch*this.scale.y))-i;this._results.length;)this._results.pop();for(var l=i;l<i+k;l++)for(var m=h;m<h+j;m++){var n=this.layer.data[l];n&&n[m]&&(g||n[m].isInteresting(e,f))&&this._results.push(n[m])}return this._results.slice()},c.TilemapLayer.prototype.resolveTileset=function(a){var b=this._mc.tilesets;if(a<2e3)for(;b.length<a;)b.push(void 0);var c=this.map.tiles[a]&&this.map.tiles[a][2];if(null!==c){var d=this.map.tilesets[c];if(d&&d.containsTileIndex(a))return b[a]=d}return b[a]=null},c.TilemapLayer.prototype.resetTilesetCache=function(){for(var a=this._mc.tilesets;a.length;)a.pop()},c.TilemapLayer.prototype.setScale=function(a,b){a=a||1,b=b||a;for(var c=0;c<this.layer.data.length;c++)for(var d=this.layer.data[c],e=0;e<d.length;e++){var f=d[e];f.width=this.map.tileWidth*a,f.height=this.map.tileHeight*b,f.worldX=f.x*f.width,f.worldY=f.y*f.height}this.scale.setTo(a,b)},c.TilemapLayer.prototype.shiftCanvas=function(a,b,c){var d=a.canvas,e=d.width-Math.abs(b),f=d.height-Math.abs(c),g=0,h=0,i=b,j=c;b<0&&(g=-b,i=0),c<0&&(h=-c,j=0);var k=this.renderSettings.copyCanvas;if(k){(k.width<e||k.height<f)&&(k.width=e,k.height=f);var l=k.getContext("2d");l.clearRect(0,0,e,f),l.drawImage(d,g,h,e,f,0,0,e,f),a.clearRect(i,j,e,f),a.drawImage(k,0,0,e,f,i,j,e,f)}else a.save(),a.globalCompositeOperation="copy",a.drawImage(d,g,h,e,f,i,j,e,f),a.restore()},c.TilemapLayer.prototype.renderRegion=function(a,b,c,d,e,f){var g=this.context,h=this.layer.width,i=this.layer.height,j=this._mc.tileWidth,k=this._mc.tileHeight,l=this._mc.tilesets,m=NaN;this._wrap||(c<=e&&(c=Math.max(0,c),e=Math.min(h-1,e)),d<=f&&(d=Math.max(0,d),f=Math.min(i-1,f)));var n,o,p,q,r,s,t=c*j-a,u=d*k-b,v=(c+(1<<20)*h)%h,w=(d+(1<<20)*i)%i;for(q=w,s=f-d,o=u;s>=0;q++,s--,o+=k){q>=i&&(q-=i);var x=this.layer.data[q];for(p=v,r=e-c,n=t;r>=0;p++,r--,n+=j){p>=h&&(p-=h);var y=x[p];if(y&&!(y.index<0)){var z=y.index,A=l[z];void 0===A&&(A=this.resolveTileset(z)),y.alpha===m||this.debug||(g.globalAlpha=y.alpha,m=y.alpha),A?y.rotation||y.flipped?(g.save(),g.translate(n+y.centerX,o+y.centerY),g.rotate(y.rotation),y.flipped&&g.scale(-1,1),A.draw(g,-y.centerX,-y.centerY,z),g.restore()):A.draw(g,n,o,z):this.debugSettings.missingImageFill&&(g.fillStyle=this.debugSettings.missingImageFill,g.fillRect(n,o,j,k)),y.debug&&this.debugSettings.debuggedTileOverfill&&(g.fillStyle=this.debugSettings.debuggedTileOverfill,g.fillRect(n,o,j,k))}}}},c.TilemapLayer.prototype.renderDeltaScroll=function(a,b){var c=this._mc.scrollX,d=this._mc.scrollY,e=this.canvas.width,f=this.canvas.height,g=this._mc.tileWidth,h=this._mc.tileHeight,i=0,j=-g,k=0,l=-h;if(a<0?(i=e+a,j=e-1):a>0&&(j=a),b<0?(k=f+b,l=f-1):b>0&&(l=b),this.shiftCanvas(this.context,a,b),i=Math.floor((i+c)/g),j=Math.floor((j+c)/g),k=Math.floor((k+d)/h),l=Math.floor((l+d)/h),i<=j){this.context.clearRect(i*g-c,0,(j-i+1)*g,f);var m=Math.floor((0+d)/h),n=Math.floor((f-1+d)/h);this.renderRegion(c,d,i,m,j,n)}if(k<=l){this.context.clearRect(0,k*h-d,e,(l-k+1)*h);var o=Math.floor((0+c)/g),p=Math.floor((e-1+c)/g);this.renderRegion(c,d,o,k,p,l)}},c.TilemapLayer.prototype.renderFull=function(){var a=this._mc.scrollX,b=this._mc.scrollY,c=this.canvas.width,d=this.canvas.height,e=this._mc.tileWidth,f=this._mc.tileHeight,g=Math.floor(a/e),h=Math.floor((c-1+a)/e),i=Math.floor(b/f),j=Math.floor((d-1+b)/f);this.context.clearRect(0,0,c,d),this.renderRegion(a,b,g,i,h,j)},c.TilemapLayer.prototype.render=function(){var a=!1;if(this.visible){(this.dirty||this.layer.dirty)&&(this.layer.dirty=!1,a=!0);var b=this.canvas.width,c=this.canvas.height,d=0|this._scrollX,e=0|this._scrollY,f=this._mc,g=f.scrollX-d,h=f.scrollY-e;if(a||0!==g||0!==h||f.renderWidth!==b||f.renderHeight!==c)return this.context.save(),f.scrollX=d,f.scrollY=e,f.renderWidth===b&&f.renderHeight===c||(f.renderWidth=b,f.renderHeight=c),this.debug&&(this.context.globalAlpha=this.debugSettings.debugAlpha,this.debugSettings.forceFullRedraw&&(a=!0)),!a&&this.renderSettings.enableScrollDelta&&Math.abs(g)+Math.abs(h)<Math.min(b,c)?this.renderDeltaScroll(g,h):this.renderFull(),this.debug&&(this.context.globalAlpha=1,this.renderDebug()),this.texture.baseTexture.dirty(),this.dirty=!1,this.context.restore(),!0}},c.TilemapLayer.prototype.renderDebug=function(){var a,b,c,d,e,f,g=this._mc.scrollX,h=this._mc.scrollY,i=this.context,j=this.canvas.width,k=this.canvas.height,l=this.layer.width,m=this.layer.height,n=this._mc.tileWidth,o=this._mc.tileHeight,p=Math.floor(g/n),q=Math.floor((j-1+g)/n),r=Math.floor(h/o),s=Math.floor((k-1+h)/o),t=p*n-g,u=r*o-h,v=(p+(1<<20)*l)%l,w=(r+(1<<20)*m)%m;for(i.strokeStyle=this.debugSettings.facingEdgeStroke,d=w,f=s-r,b=u;f>=0;d++,f--,b+=o){d>=m&&(d-=m);var x=this.layer.data[d];for(c=v,e=q-p,a=t;e>=0;c++,e--,a+=n){c>=l&&(c-=l);var y=x[c];!y||y.index<0||!y.collides||(this.debugSettings.collidingTileOverfill&&(i.fillStyle=this.debugSettings.collidingTileOverfill,i.fillRect(a,b,this._mc.cw,this._mc.ch)),this.debugSettings.facingEdgeStroke&&(i.beginPath(),y.faceTop&&(i.moveTo(a,b),i.lineTo(a+this._mc.cw,b)),y.faceBottom&&(i.moveTo(a,b+this._mc.ch),i.lineTo(a+this._mc.cw,b+this._mc.ch)),y.faceLeft&&(i.moveTo(a,b),i.lineTo(a,b+this._mc.ch)),y.faceRight&&(i.moveTo(a+this._mc.cw,b),i.lineTo(a+this._mc.cw,b+this._mc.ch)),i.closePath(),i.stroke()))}}},Object.defineProperty(c.TilemapLayer.prototype,"wrap",{get:function(){return this._wrap},set:function(a){this._wrap=a,this.dirty=!0}}),Object.defineProperty(c.TilemapLayer.prototype,"scrollX",{get:function(){return this._scrollX},set:function(a){this._scrollX=a}}),Object.defineProperty(c.TilemapLayer.prototype,"scrollY",{get:function(){return this._scrollY},set:function(a){this._scrollY=a}}),Object.defineProperty(c.TilemapLayer.prototype,"collisionWidth",{get:function(){return this._mc.cw},set:function(a){this._mc.cw=0|a,this.dirty=!0}}),Object.defineProperty(c.TilemapLayer.prototype,"collisionHeight",{get:function(){return this._mc.ch},set:function(a){this._mc.ch=0|a,this.dirty=!0}}),c.TilemapParser={INSERT_NULL:!1,parse:function(a,b,d,e,f,g){if(void 0===d&&(d=32),void 0===e&&(e=32),void 0===f&&(f=10),void 0===g&&(g=10),void 0===b)return this.getEmptyData();if(null===b)return this.getEmptyData(d,e,f,g);var h=a.cache.getTilemapData(b);if(h){if(h.format===c.Tilemap.CSV)return this.parseCSV(b,h.data,d,e);if(!h.format||h.format===c.Tilemap.TILED_JSON)return this.parseTiledJSON(h.data)}else console.warn("Phaser.TilemapParser.parse - No map data found for key "+b)},parseCSV:function(a,b,d,e){var f=this.getEmptyData();b=b.trim();for(var g=[],h=b.split("\n"),i=h.length,j=0,k=0;k<h.length;k++){g[k]=[];for(var l=h[k].split(","),m=0;m<l.length;m++)g[k][m]=new c.Tile(f.layers[0],parseInt(l[m],10),m,k,d,e);0===j&&(j=l.length)}return f.format=c.Tilemap.CSV,f.name=a,f.width=j,f.height=i,f.tileWidth=d,f.tileHeight=e,f.widthInPixels=j*d,f.heightInPixels=i*e,f.layers[0].width=j,f.layers[0].height=i,f.layers[0].widthInPixels=f.widthInPixels,f.layers[0].heightInPixels=f.heightInPixels,f.layers[0].data=g,f},getEmptyData:function(a,b,c,d){return{width:void 0!==c&&null!==c?c:0,height:void 0!==d&&null!==d?d:0,tileWidth:void 0!==a&&null!==a?a:0,tileHeight:void 0!==b&&null!==b?b:0,orientation:"orthogonal",version:"1",properties:{},widthInPixels:0,heightInPixels:0,layers:[{name:"layer",x:0,y:0,width:0,height:0,widthInPixels:0,heightInPixels:0,alpha:1,visible:!0,properties:{},indexes:[],callbacks:[],bodies:[],data:[]}],images:[],objects:{},collision:{},tilesets:[],tiles:[]}},parseTiledJSON:function(a){function b(a,b){var c={};for(var d in b){var e=b[d];"undefined"!=typeof a[e]&&(c[e]=a[e])}return c}if("orthogonal"!==a.orientation)return console.warn("TilemapParser.parseTiledJSON - Only orthogonal map types are supported in this version of Phaser"),null;for(var d={width:a.width,height:a.height,tileWidth:a.tilewidth,tileHeight:a.tileheight,orientation:a.orientation,format:c.Tilemap.TILED_JSON,version:a.version,properties:a.properties,widthInPixels:a.width*a.tilewidth,heightInPixels:a.height*a.tileheight},e=[],f=0;f<a.layers.length;f++)if("tilelayer"===a.layers[f].type){var g=a.layers[f];if(!g.compression&&g.encoding&&"base64"===g.encoding){for(var h=window.atob(g.data),i=h.length,j=new Array(i),k=0;k<i;k+=4)j[k/4]=(h.charCodeAt(k)|h.charCodeAt(k+1)<<8|h.charCodeAt(k+2)<<16|h.charCodeAt(k+3)<<24)>>>0;g.data=j,delete g.encoding}else if(g.compression){console.warn("TilemapParser.parseTiledJSON - Layer compression is unsupported, skipping layer '"+g.name+"'");continue}var l={name:g.name,x:g.x,y:g.y,width:g.width,height:g.height,widthInPixels:g.width*a.tilewidth,heightInPixels:g.height*a.tileheight,alpha:g.opacity,visible:g.visible,properties:{},indexes:[],callbacks:[],bodies:[]};g.properties&&(l.properties=g.properties);for(var m,n,o,p,q=0,r=[],s=[],t=0,i=g.data.length;t<i;t++){if(m=0,n=!1,p=g.data[t],o=0,p>536870912)switch(p>2147483648&&(p-=2147483648,o+=4),p>1073741824&&(p-=1073741824,o+=2),p>536870912&&(p-=536870912,o+=1),o){case 5:m=Math.PI/2;break;case 6:m=Math.PI;break;case 3:m=3*Math.PI/2;break;case 4:m=0,n=!0;break;case 7:m=Math.PI/2,n=!0;break;case 2:m=Math.PI,n=!0;break;case 1:m=3*Math.PI/2,n=!0}if(p>0){var u=new c.Tile(l,p,q,s.length,a.tilewidth,a.tileheight);u.rotation=m,u.flipped=n,0!==o&&(u.flippedVal=o),r.push(u)}else c.TilemapParser.INSERT_NULL?r.push(null):r.push(new c.Tile(l,(-1),q,s.length,a.tilewidth,a.tileheight));q++,q===g.width&&(s.push(r),q=0,r=[])}l.data=s,e.push(l)}d.layers=e;for(var v=[],f=0;f<a.layers.length;f++)if("imagelayer"===a.layers[f].type){var w=a.layers[f],x={name:w.name,image:w.image,x:w.x,y:w.y,alpha:w.opacity,visible:w.visible,properties:{}};w.properties&&(x.properties=w.properties),v.push(x)}d.images=v;for(var y=[],z=[],A=null,f=0;f<a.tilesets.length;f++){var B=a.tilesets[f];if(B.image){var C=new c.Tileset(B.name,B.firstgid,B.tilewidth,B.tileheight,B.margin,B.spacing,B.properties);B.tileproperties&&(C.tileProperties=B.tileproperties),C.updateTileData(B.imagewidth,B.imageheight),y.push(C)}else{var D=new c.ImageCollection(B.name,B.firstgid,B.tilewidth,B.tileheight,B.margin,B.spacing,B.properties);for(var E in B.tiles){var x=B.tiles[E].image,p=B.firstgid+parseInt(E,10);D.addImage(p,x)}z.push(D)}A&&(A.lastgid=B.firstgid-1),A=B}d.tilesets=y,d.imagecollections=z;for(var F={},G={},f=0;f<a.layers.length;f++)if("objectgroup"===a.layers[f].type){var H=a.layers[f];F[H.name]=[],G[H.name]=[];for(var I=0,i=H.objects.length;I<i;I++)if(H.objects[I].gid){var J={gid:H.objects[I].gid,name:H.objects[I].name,type:H.objects[I].hasOwnProperty("type")?H.objects[I].type:"",x:H.objects[I].x,y:H.objects[I].y,visible:H.objects[I].visible,properties:H.objects[I].properties};H.objects[I].rotation&&(J.rotation=H.objects[I].rotation),F[H.name].push(J)}else if(H.objects[I].polyline){var J={name:H.objects[I].name,type:H.objects[I].type,x:H.objects[I].x,y:H.objects[I].y,width:H.objects[I].width,height:H.objects[I].height,visible:H.objects[I].visible,properties:H.objects[I].properties};H.objects[I].rotation&&(J.rotation=H.objects[I].rotation),J.polyline=[];for(var K=0;K<H.objects[I].polyline.length;K++)J.polyline.push([H.objects[I].polyline[K].x,H.objects[I].polyline[K].y]);G[H.name].push(J),F[H.name].push(J)}else if(H.objects[I].polygon){var J=b(H.objects[I],["name","type","x","y","visible","rotation","properties"]);J.polygon=[];for(var K=0;K<H.objects[I].polygon.length;K++)J.polygon.push([H.objects[I].polygon[K].x,H.objects[I].polygon[K].y]);F[H.name].push(J)}else if(H.objects[I].ellipse){var J=b(H.objects[I],["name","type","ellipse","x","y","width","height","visible","rotation","properties"]);F[H.name].push(J)}else{var J=b(H.objects[I],["name","type","x","y","width","height","visible","rotation","properties"]);J.rectangle=!0,F[H.name].push(J)}}d.objects=F,d.collision=G,d.tiles=[];for(var f=0;f<d.tilesets.length;f++)for(var B=d.tilesets[f],q=B.tileMargin,L=B.tileMargin,M=0,N=0,O=0,t=B.firstgid;t<B.firstgid+B.total&&(d.tiles[t]=[q,L,f],q+=B.tileWidth+B.tileSpacing,M++,M!==B.total)&&(N++,N!==B.columns||(q=B.tileMargin,L+=B.tileHeight+B.tileSpacing,N=0,O++,O!==B.rows));t++);for(var l,u,P,B,f=0;f<d.layers.length;f++){l=d.layers[f],B=null;for(var k=0;k<l.data.length;k++){r=l.data[k];for(var Q=0;Q<r.length;Q++)u=r[Q],null===u||u.index<0||(P=d.tiles[u.index][2],B=d.tilesets[P],B.tileProperties&&B.tileProperties[u.index-B.firstgid]&&(u.properties=c.Utils.mixin(B.tileProperties[u.index-B.firstgid],u.properties)))}}return d}},c.Tileset=function(a,b,c,d,e,f,g){(void 0===c||c<=0)&&(c=32),(void 0===d||d<=0)&&(d=32),void 0===e&&(e=0),void 0===f&&(f=0),this.name=a,this.firstgid=0|b,this.tileWidth=0|c,this.tileHeight=0|d,this.tileMargin=0|e,this.tileSpacing=0|f,this.properties=g||{},this.image=null,this.rows=0,this.columns=0,this.total=0,this.drawCoords=[]},c.Tileset.prototype={draw:function(a,b,c,d){var e=d-this.firstgid<<1;e>=0&&e+1<this.drawCoords.length&&a.drawImage(this.image,this.drawCoords[e],this.drawCoords[e+1],this.tileWidth,this.tileHeight,b,c,this.tileWidth,this.tileHeight)},containsTileIndex:function(a){return a>=this.firstgid&&a<this.firstgid+this.total},setImage:function(a){this.image=a,this.updateTileData(a.width,a.height)},setSpacing:function(a,b){this.tileMargin=0|a,this.tileSpacing=0|b,this.image&&this.updateTileData(this.image.width,this.image.height)},updateTileData:function(a,b){var c=(b-2*this.tileMargin+this.tileSpacing)/(this.tileHeight+this.tileSpacing),d=(a-2*this.tileMargin+this.tileSpacing)/(this.tileWidth+this.tileSpacing);c%1===0&&d%1===0||console.warn("Phaser.Tileset - "+this.name+" image tile area is not an even multiple of tile size"),c=Math.floor(c),d=Math.floor(d),(this.rows&&this.rows!==c||this.columns&&this.columns!==d)&&console.warn("Phaser.Tileset - actual and expected number of tile rows and columns differ"),this.rows=c,this.columns=d,this.total=c*d,this.drawCoords.length=0;for(var e=this.tileMargin,f=this.tileMargin,g=0;g<this.rows;g++){for(var h=0;h<this.columns;h++)this.drawCoords.push(e),this.drawCoords.push(f),e+=this.tileWidth+this.tileSpacing;e=this.tileMargin,f+=this.tileHeight+this.tileSpacing}}},c.Tileset.prototype.constructor=c.Tileset,c.Particle=function(a,b,d,e,f){c.Sprite.call(this,a,b,d,e,f),this.autoScale=!1,this.scaleData=null,this._s=0,this.autoAlpha=!1,this.alphaData=null,this._a=0},c.Particle.prototype=Object.create(c.Sprite.prototype),c.Particle.prototype.constructor=c.Particle,c.Particle.prototype.update=function(){this.autoScale&&(this._s--,this._s?this.scale.set(this.scaleData[this._s].x,this.scaleData[this._s].y):this.autoScale=!1),this.autoAlpha&&(this._a--,this._a?this.alpha=this.alphaData[this._a].v:this.autoAlpha=!1)},c.Particle.prototype.onEmit=function(){},c.Particle.prototype.setAlphaData=function(a){this.alphaData=a,this._a=a.length-1,this.alpha=this.alphaData[this._a].v,this.autoAlpha=!0},c.Particle.prototype.setScaleData=function(a){this.scaleData=a,this._s=a.length-1,this.scale.set(this.scaleData[this._s].x,this.scaleData[this._s].y),this.autoScale=!0},c.Particle.prototype.reset=function(a,b,d){return c.Component.Reset.prototype.reset.call(this,a,b,d),this.alpha=1,this.scale.set(1),this.autoScale=!1,this.autoAlpha=!1,this},c.Particles=function(a){this.game=a,this.emitters={},this.ID=0},c.Particles.prototype={add:function(a){return this.emitters[a.name]=a,a},remove:function(a){delete this.emitters[a.name]},update:function(){for(var a in this.emitters)this.emitters[a].exists&&this.emitters[a].update()}},c.Particles.prototype.constructor=c.Particles,c.Particles.Arcade={},c.Particles.Arcade.Emitter=function(a,b,d,e){this.maxParticles=e||50,c.Group.call(this,a),this.name="emitter"+this.game.particles.ID++,this.type=c.EMITTER,this.physicsType=c.GROUP,this.area=new c.Rectangle(b,d,1,1),this.minParticleSpeed=new c.Point((-100),(-100)),this.maxParticleSpeed=new c.Point(100,100),this.minParticleScale=1,this.maxParticleScale=1,this.scaleData=null,this.minRotation=-360,this.maxRotation=360,this.minParticleAlpha=1,this.maxParticleAlpha=1,this.alphaData=null,this.gravity=100,this.particleClass=c.Particle,this.particleDrag=new c.Point,this.angularDrag=0,this.frequency=100,this.lifespan=2e3,this.bounce=new c.Point,this.on=!1,this.particleAnchor=new c.Point(.5,.5),this.blendMode=c.blendModes.NORMAL,this.emitX=b,this.emitY=d,this.autoScale=!1,this.autoAlpha=!1,this.particleBringToTop=!1,this.particleSendToBack=!1,this._minParticleScale=new c.Point(1,1),this._maxParticleScale=new c.Point(1,1),this._quantity=0,this._timer=0,this._counter=0,this._flowQuantity=0,this._flowTotal=0,this._explode=!0,this._frames=null},c.Particles.Arcade.Emitter.prototype=Object.create(c.Group.prototype),c.Particles.Arcade.Emitter.prototype.constructor=c.Particles.Arcade.Emitter,c.Particles.Arcade.Emitter.prototype.update=function(){if(this.on&&this.game.time.time>=this._timer)if(this._timer=this.game.time.time+this.frequency*this.game.time.slowMotion,0!==this._flowTotal)if(this._flowQuantity>0){for(var a=0;a<this._flowQuantity;a++)if(this.emitParticle()&&(this._counter++,this._flowTotal!==-1&&this._counter>=this._flowTotal)){this.on=!1;break}}else this.emitParticle()&&(this._counter++,this._flowTotal!==-1&&this._counter>=this._flowTotal&&(this.on=!1));else this.emitParticle()&&(this._counter++,this._quantity>0&&this._counter>=this._quantity&&(this.on=!1));for(var a=this.children.length;a--;)this.children[a].exists&&this.children[a].update()},c.Particles.Arcade.Emitter.prototype.makeParticles=function(a,b,c,d,e){void 0===b&&(b=0),void 0===c&&(c=this.maxParticles),void 0===d&&(d=!1),void 0===e&&(e=!1);var f,g=0,h=a,i=b;for(this._frames=b,c>this.maxParticles&&(this.maxParticles=c);g<c;)Array.isArray(a)&&(h=this.game.rnd.pick(a)),Array.isArray(b)&&(i=this.game.rnd.pick(b)),f=new this.particleClass(this.game,0,0,h,i),this.game.physics.arcade.enable(f,!1),d?(f.body.checkCollision.any=!0,f.body.checkCollision.none=!1):f.body.checkCollision.none=!0,f.body.collideWorldBounds=e,f.body.skipQuadTree=!0,f.exists=!1,f.visible=!1,f.anchor.copyFrom(this.particleAnchor),this.add(f),g++;return this},c.Particles.Arcade.Emitter.prototype.kill=function(){return this.on=!1,this.alive=!1,this.exists=!1,this},c.Particles.Arcade.Emitter.prototype.revive=function(){return this.alive=!0,this.exists=!0,this},c.Particles.Arcade.Emitter.prototype.explode=function(a,b){return this._flowTotal=0,this.start(!0,a,0,b,!1),this},c.Particles.Arcade.Emitter.prototype.flow=function(a,b,c,d,e){return void 0!==c&&0!==c||(c=1),void 0===d&&(d=-1),void 0===e&&(e=!0),c>this.maxParticles&&(c=this.maxParticles),this._counter=0,this._flowQuantity=c,this._flowTotal=d,e?(this.start(!0,a,b,c),this._counter+=c,this.on=!0,this._timer=this.game.time.time+b*this.game.time.slowMotion):this.start(!1,a,b,c),this},c.Particles.Arcade.Emitter.prototype.start=function(a,b,c,d,e){if(void 0===a&&(a=!0),void 0===b&&(b=0),void 0!==c&&null!==c||(c=250),void 0===d&&(d=0),void 0===e&&(e=!1),d>this.maxParticles&&(d=this.maxParticles),this.revive(),this.visible=!0,this.lifespan=b,this.frequency=c,a||e)for(var f=0;f<d;f++)this.emitParticle();else this.on=!0,this._quantity=d,this._counter=0,this._timer=this.game.time.time+c*this.game.time.slowMotion;return this},c.Particles.Arcade.Emitter.prototype.emitParticle=function(a,b,c,d){void 0===a&&(a=null),void 0===b&&(b=null);var e=this.getFirstExists(!1);if(null===e)return!1;var f=this.game.rnd;void 0!==c&&void 0!==d?e.loadTexture(c,d):void 0!==c&&e.loadTexture(c);var g=this.emitX,h=this.emitY;null!==a?g=a:this.width>1&&(g=f.between(this.left,this.right)),null!==b?h=b:this.height>1&&(h=f.between(this.top,this.bottom)),e.reset(g,h),e.angle=0,e.lifespan=this.lifespan,this.particleBringToTop?this.bringToTop(e):this.particleSendToBack&&this.sendToBack(e),this.autoScale?e.setScaleData(this.scaleData):1!==this.minParticleScale||1!==this.maxParticleScale?e.scale.set(f.realInRange(this.minParticleScale,this.maxParticleScale)):this._minParticleScale.x===this._maxParticleScale.x&&this._minParticleScale.y===this._maxParticleScale.y||e.scale.set(f.realInRange(this._minParticleScale.x,this._maxParticleScale.x),f.realInRange(this._minParticleScale.y,this._maxParticleScale.y)),void 0===d&&(Array.isArray(this._frames)?e.frame=this.game.rnd.pick(this._frames):e.frame=this._frames),this.autoAlpha?e.setAlphaData(this.alphaData):e.alpha=f.realInRange(this.minParticleAlpha,this.maxParticleAlpha),e.blendMode=this.blendMode;var i=e.body;return i.updateBounds(),i.bounce.copyFrom(this.bounce),i.drag.copyFrom(this.particleDrag),i.velocity.x=f.between(this.minParticleSpeed.x,this.maxParticleSpeed.x),i.velocity.y=f.between(this.minParticleSpeed.y,this.maxParticleSpeed.y),i.angularVelocity=f.between(this.minRotation,this.maxRotation),i.gravity.y=this.gravity,i.angularDrag=this.angularDrag,e.onEmit(),!0},c.Particles.Arcade.Emitter.prototype.destroy=function(){this.game.particles.remove(this),c.Group.prototype.destroy.call(this,!0,!1)},c.Particles.Arcade.Emitter.prototype.setSize=function(a,b){return this.area.width=a,this.area.height=b,this},c.Particles.Arcade.Emitter.prototype.setXSpeed=function(a,b){return a=a||0,b=b||0,this.minParticleSpeed.x=a,this.maxParticleSpeed.x=b,this},c.Particles.Arcade.Emitter.prototype.setYSpeed=function(a,b){return a=a||0,b=b||0,this.minParticleSpeed.y=a,this.maxParticleSpeed.y=b,this},c.Particles.Arcade.Emitter.prototype.setRotation=function(a,b){return a=a||0,b=b||0,this.minRotation=a,this.maxRotation=b,this},c.Particles.Arcade.Emitter.prototype.setAlpha=function(a,b,d,e,f){if(void 0===a&&(a=1),void 0===b&&(b=1),void 0===d&&(d=0),void 0===e&&(e=c.Easing.Linear.None),void 0===f&&(f=!1),this.minParticleAlpha=a,this.maxParticleAlpha=b,this.autoAlpha=!1,d>0&&a!==b){var g={v:a},h=this.game.make.tween(g).to({v:b},d,e);h.yoyo(f),this.alphaData=h.generateData(60),this.alphaData.reverse(),this.autoAlpha=!0}return this},c.Particles.Arcade.Emitter.prototype.setScale=function(a,b,d,e,f,g,h){if(void 0===a&&(a=1),void 0===b&&(b=1),void 0===d&&(d=1),void 0===e&&(e=1),void 0===f&&(f=0),void 0===g&&(g=c.Easing.Linear.None),void 0===h&&(h=!1),this.minParticleScale=1,this.maxParticleScale=1,this._minParticleScale.set(a,d),this._maxParticleScale.set(b,e),this.autoScale=!1,f>0&&(a!==b||d!==e)){var i={x:a,y:d},j=this.game.make.tween(i).to({x:b,y:e},f,g);j.yoyo(h),this.scaleData=j.generateData(60),this.scaleData.reverse(),this.autoScale=!0}return this},c.Particles.Arcade.Emitter.prototype.at=function(a){return a.center?(this.emitX=a.center.x,this.emitY=a.center.y):(this.emitX=a.world.x+a.anchor.x*a.width,this.emitY=a.world.y+a.anchor.y*a.height),this},Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"width",{get:function(){return this.area.width},set:function(a){this.area.width=a}}),Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"height",{get:function(){return this.area.height},set:function(a){this.area.height=a}}),Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"x",{get:function(){return this.emitX},set:function(a){this.emitX=a}}),Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"y",{get:function(){return this.emitY},set:function(a){this.emitY=a}}),Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"left",{get:function(){return Math.floor(this.x-this.area.width/2)}}),Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"right",{get:function(){return Math.floor(this.x+this.area.width/2)}}),Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"top",{get:function(){return Math.floor(this.y-this.area.height/2)}}),Object.defineProperty(c.Particles.Arcade.Emitter.prototype,"bottom",{get:function(){return Math.floor(this.y+this.area.height/2);
	}}),c.Weapon=function(a,b){c.Plugin.call(this,a,b),this.bullets=null,this.autoExpandBulletsGroup=!1,this.autofire=!1,this.shots=0,this.fireLimit=0,this.fireRate=100,this.fireRateVariance=0,this.fireFrom=new c.Rectangle(0,0,1,1),this.fireAngle=c.ANGLE_UP,this.bulletInheritSpriteSpeed=!1,this.bulletAnimation="",this.bulletFrameRandom=!1,this.bulletFrameCycle=!1,this.bulletWorldWrap=!1,this.bulletWorldWrapPadding=0,this.bulletAngleOffset=0,this.bulletAngleVariance=0,this.bulletSpeed=200,this.bulletSpeedVariance=0,this.bulletLifespan=0,this.bulletKillDistance=0,this.bulletGravity=new c.Point(0,0),this.bulletRotateToVelocity=!1,this.bulletKey="",this.bulletFrame="",this._bulletClass=c.Bullet,this._bulletCollideWorldBounds=!1,this._bulletKillType=c.Weapon.KILL_WORLD_BOUNDS,this._data={customBody:!1,width:0,height:0,offsetX:0,offsetY:0},this.bounds=new c.Rectangle,this.bulletBounds=a.world.bounds,this.bulletFrames=[],this.bulletFrameIndex=0,this.anims={},this.onFire=new c.Signal,this.onKill=new c.Signal,this.onFireLimit=new c.Signal,this.trackedSprite=null,this.trackedPointer=null,this.trackRotation=!1,this.trackOffset=new c.Point,this._nextFire=0,this._rotatedPoint=new c.Point},c.Weapon.prototype=Object.create(c.Plugin.prototype),c.Weapon.prototype.constructor=c.Weapon,c.Weapon.KILL_NEVER=0,c.Weapon.KILL_LIFESPAN=1,c.Weapon.KILL_DISTANCE=2,c.Weapon.KILL_WEAPON_BOUNDS=3,c.Weapon.KILL_CAMERA_BOUNDS=4,c.Weapon.KILL_WORLD_BOUNDS=5,c.Weapon.KILL_STATIC_BOUNDS=6,c.Weapon.prototype.createBullets=function(a,b,d,e){return void 0===a&&(a=1),void 0===e&&(e=this.game.world),this.bullets||(this.bullets=this.game.add.physicsGroup(c.Physics.ARCADE,e),this.bullets.classType=this._bulletClass),0!==a&&(a===-1&&(this.autoExpandBulletsGroup=!0,a=1),this.bullets.createMultiple(a,b,d),this.bullets.setAll("data.bulletManager",this),this.bulletKey=b,this.bulletFrame=d),this},c.Weapon.prototype.forEach=function(a,b){return this.bullets.forEachExists(a,b,arguments),this},c.Weapon.prototype.pauseAll=function(){return this.bullets.setAll("body.enable",!1),this},c.Weapon.prototype.resumeAll=function(){return this.bullets.setAll("body.enable",!0),this},c.Weapon.prototype.killAll=function(){return this.bullets.callAllExists("kill",!0),this.bullets.setAll("body.enable",!0),this},c.Weapon.prototype.resetShots=function(a){return this.shots=0,void 0!==a&&(this.fireLimit=a),this},c.Weapon.prototype.destroy=function(){this.parent.remove(this,!1),this.bullets.destroy(),this.game=null,this.parent=null,this.active=!1,this.visible=!1},c.Weapon.prototype.update=function(){this._bulletKillType===c.Weapon.KILL_WEAPON_BOUNDS&&(this.trackedSprite?(this.trackedSprite.updateTransform(),this.bounds.centerOn(this.trackedSprite.worldPosition.x,this.trackedSprite.worldPosition.y)):this.trackedPointer&&this.bounds.centerOn(this.trackedPointer.worldX,this.trackedPointer.worldY)),this.autofire&&this.fire()},c.Weapon.prototype.trackSprite=function(a,b,c,d){return void 0===b&&(b=0),void 0===c&&(c=0),void 0===d&&(d=!1),this.trackedPointer=null,this.trackedSprite=a,this.trackRotation=d,this.trackOffset.set(b,c),this},c.Weapon.prototype.trackPointer=function(a,b,c){return void 0===a&&(a=this.game.input.activePointer),void 0===b&&(b=0),void 0===c&&(c=0),this.trackedPointer=a,this.trackedSprite=null,this.trackRotation=!1,this.trackOffset.set(b,c),this},c.Weapon.prototype.fire=function(a,b,d){if(this.game.time.now<this._nextFire||this.fireLimit>0&&this.shots===this.fireLimit)return!1;var e=this.bulletSpeed;0!==this.bulletSpeedVariance&&(e+=c.Math.between(-this.bulletSpeedVariance,this.bulletSpeedVariance)),a?this.fireFrom.width>1?this.fireFrom.centerOn(a.x,a.y):(this.fireFrom.x=a.x,this.fireFrom.y=a.y):this.trackedSprite?(this.trackRotation?(this._rotatedPoint.set(this.trackedSprite.world.x+this.trackOffset.x,this.trackedSprite.world.y+this.trackOffset.y),this._rotatedPoint.rotate(this.trackedSprite.world.x,this.trackedSprite.world.y,this.trackedSprite.rotation),this.fireFrom.width>1?this.fireFrom.centerOn(this._rotatedPoint.x,this._rotatedPoint.y):(this.fireFrom.x=this._rotatedPoint.x,this.fireFrom.y=this._rotatedPoint.y)):this.fireFrom.width>1?this.fireFrom.centerOn(this.trackedSprite.world.x+this.trackOffset.x,this.trackedSprite.world.y+this.trackOffset.y):(this.fireFrom.x=this.trackedSprite.world.x+this.trackOffset.x,this.fireFrom.y=this.trackedSprite.world.y+this.trackOffset.y),this.bulletInheritSpriteSpeed&&(e+=this.trackedSprite.body.speed)):this.trackedPointer&&(this.fireFrom.width>1?this.fireFrom.centerOn(this.trackedPointer.world.x+this.trackOffset.x,this.trackedPointer.world.y+this.trackOffset.y):(this.fireFrom.x=this.trackedPointer.world.x+this.trackOffset.x,this.fireFrom.y=this.trackedPointer.world.y+this.trackOffset.y));var f=this.fireFrom.width>1?this.fireFrom.randomX:this.fireFrom.x,g=this.fireFrom.height>1?this.fireFrom.randomY:this.fireFrom.y,h=this.trackRotation?this.trackedSprite.angle:this.fireAngle;void 0!==b&&void 0!==d&&(h=this.game.math.radToDeg(Math.atan2(d-g,b-f))),0!==this.bulletAngleVariance&&(h+=c.Math.between(-this.bulletAngleVariance,this.bulletAngleVariance));var i=0,j=0;0===h||180===h?i=Math.cos(this.game.math.degToRad(h))*e:90===h||270===h?j=Math.sin(this.game.math.degToRad(h))*e:(i=Math.cos(this.game.math.degToRad(h))*e,j=Math.sin(this.game.math.degToRad(h))*e);var k=null;if(this.autoExpandBulletsGroup?(k=this.bullets.getFirstExists(!1,!0,f,g,this.bulletKey,this.bulletFrame),k.data.bulletManager=this):k=this.bullets.getFirstExists(!1),k){if(k.reset(f,g),k.data.fromX=f,k.data.fromY=g,k.data.killType=this.bulletKillType,k.data.killDistance=this.bulletKillDistance,k.data.rotateToVelocity=this.bulletRotateToVelocity,this.bulletKillType===c.Weapon.KILL_LIFESPAN&&(k.lifespan=this.bulletLifespan),k.angle=h+this.bulletAngleOffset,""!==this.bulletAnimation){if(null===k.animations.getAnimation(this.bulletAnimation)){var l=this.anims[this.bulletAnimation];k.animations.add(l.name,l.frames,l.frameRate,l.loop,l.useNumericIndex)}k.animations.play(this.bulletAnimation)}else this.bulletFrameCycle?(k.frame=this.bulletFrames[this.bulletFrameIndex],this.bulletFrameIndex++,this.bulletFrameIndex>=this.bulletFrames.length&&(this.bulletFrameIndex=0)):this.bulletFrameRandom&&(k.frame=this.bulletFrames[Math.floor(Math.random()*this.bulletFrames.length)]);if(k.data.bodyDirty&&(this._data.customBody&&k.body.setSize(this._data.width,this._data.height,this._data.offsetX,this._data.offsetY),k.body.collideWorldBounds=this.bulletCollideWorldBounds,k.data.bodyDirty=!1),k.body.velocity.set(i,j),k.body.gravity.set(this.bulletGravity.x,this.bulletGravity.y),0!==this.bulletSpeedVariance){var m=this.fireRate;m+=c.Math.between(-this.fireRateVariance,this.fireRateVariance),m<0&&(m=0),this._nextFire=this.game.time.now+m}else this._nextFire=this.game.time.now+this.fireRate;this.shots++,this.onFire.dispatch(k,this,e),this.fireLimit>0&&this.shots===this.fireLimit&&this.onFireLimit.dispatch(this,this.fireLimit)}return k},c.Weapon.prototype.fireAtPointer=function(a){return void 0===a&&(a=this.game.input.activePointer),this.fire(null,a.worldX,a.worldY)},c.Weapon.prototype.fireAtSprite=function(a){return this.fire(null,a.world.x,a.world.y)},c.Weapon.prototype.fireAtXY=function(a,b){return this.fire(null,a,b)},c.Weapon.prototype.setBulletBodyOffset=function(a,b,c,d){return void 0===c&&(c=0),void 0===d&&(d=0),this._data.customBody=!0,this._data.width=a,this._data.height=b,this._data.offsetX=c,this._data.offsetY=d,this.bullets.callAll("body.setSize","body",a,b,c,d),this.bullets.setAll("data.bodyDirty",!1),this},c.Weapon.prototype.setBulletFrames=function(a,b,d,e){return void 0===d&&(d=!0),void 0===e&&(e=!1),this.bulletFrames=c.ArrayUtils.numberArray(a,b),this.bulletFrameIndex=0,this.bulletFrameCycle=d,this.bulletFrameRandom=e,this},c.Weapon.prototype.addBulletAnimation=function(a,b,c,d,e){return this.anims[a]={name:a,frames:b,frameRate:c,loop:d,useNumericIndex:e},this.bullets.callAll("animations.add","animations",a,b,c,d,e),this.bulletAnimation=a,this},c.Weapon.prototype.debug=function(a,b,c){void 0===a&&(a=16),void 0===b&&(b=32),void 0===c&&(c=!1),this.game.debug.text("Weapon Plugin",a,b),this.game.debug.text("Bullets Alive: "+this.bullets.total+" - Total: "+this.bullets.length,a,b+24),c&&this.bullets.forEachExists(this.game.debug.body,this.game.debug,"rgba(255, 0, 255, 0.8)")},Object.defineProperty(c.Weapon.prototype,"bulletClass",{get:function(){return this._bulletClass},set:function(a){this._bulletClass=a,this.bullets.classType=this._bulletClass}}),Object.defineProperty(c.Weapon.prototype,"bulletKillType",{get:function(){return this._bulletKillType},set:function(a){switch(a){case c.Weapon.KILL_STATIC_BOUNDS:case c.Weapon.KILL_WEAPON_BOUNDS:this.bulletBounds=this.bounds;break;case c.Weapon.KILL_CAMERA_BOUNDS:this.bulletBounds=this.game.camera.view;break;case c.Weapon.KILL_WORLD_BOUNDS:this.bulletBounds=this.game.world.bounds}this._bulletKillType=a}}),Object.defineProperty(c.Weapon.prototype,"bulletCollideWorldBounds",{get:function(){return this._bulletCollideWorldBounds},set:function(a){this._bulletCollideWorldBounds=a,this.bullets.setAll("body.collideWorldBounds",a),this.bullets.setAll("data.bodyDirty",!1)}}),Object.defineProperty(c.Weapon.prototype,"x",{get:function(){return this.fireFrom.x},set:function(a){this.fireFrom.x=a}}),Object.defineProperty(c.Weapon.prototype,"y",{get:function(){return this.fireFrom.y},set:function(a){this.fireFrom.y=a}}),c.Bullet=function(a,b,d,e,f){c.Sprite.call(this,a,b,d,e,f),this.anchor.set(.5),this.data={bulletManager:null,fromX:0,fromY:0,bodyDirty:!0,rotateToVelocity:!1,killType:0,killDistance:0}},c.Bullet.prototype=Object.create(c.Sprite.prototype),c.Bullet.prototype.constructor=c.Bullet,c.Bullet.prototype.kill=function(){return this.alive=!1,this.exists=!1,this.visible=!1,this.data.bulletManager.onKill.dispatch(this),this},c.Bullet.prototype.update=function(){this.exists&&(this.data.killType>c.Weapon.KILL_LIFESPAN&&(this.data.killType===c.Weapon.KILL_DISTANCE?this.game.physics.arcade.distanceToXY(this,this.data.fromX,this.data.fromY,!0)>this.data.killDistance&&this.kill():this.data.bulletManager.bulletBounds.intersects(this)||this.kill()),this.data.rotateToVelocity&&(this.rotation=Math.atan2(this.body.velocity.y,this.body.velocity.x)),this.data.bulletManager.bulletWorldWrap&&this.game.world.wrap(this,this.data.bulletManager.bulletWorldWrapPadding))},c.Video=function(a,b,d){if(void 0===b&&(b=null),void 0===d&&(d=null),this.game=a,this.key=b,this.width=0,this.height=0,this.type=c.VIDEO,this.disableTextureUpload=!1,this.touchLocked=!1,this.onPlay=new c.Signal,this.onChangeSource=new c.Signal,this.onComplete=new c.Signal,this.onAccess=new c.Signal,this.onError=new c.Signal,this.onTimeout=new c.Signal,this.timeout=15e3,this._timeOutID=null,this.video=null,this.videoStream=null,this.isStreaming=!1,this.retryLimit=20,this.retry=0,this.retryInterval=500,this._retryID=null,this._codeMuted=!1,this._muted=!1,this._codePaused=!1,this._paused=!1,this._pending=!1,this._autoplay=!1,this._endCallback=null,this._playCallback=null,b&&this.game.cache.checkVideoKey(b)){var e=this.game.cache.getVideo(b);e.isBlob?this.createVideoFromBlob(e.data):this.video=e.data,this.width=this.video.videoWidth,this.height=this.video.videoHeight}else d&&this.createVideoFromURL(d,!1);this.video&&!d?(this.baseTexture=new PIXI.BaseTexture(this.video),this.baseTexture.forceLoaded(this.width,this.height)):(this.baseTexture=new PIXI.BaseTexture(c.Cache.DEFAULT.baseTexture.source),this.baseTexture.forceLoaded(this.width,this.height)),this.texture=new PIXI.Texture(this.baseTexture),this.textureFrame=new c.Frame(0,0,0,this.width,this.height,"video"),this.texture.setFrame(this.textureFrame),this.texture.valid=!1,null!==b&&this.video&&(this.texture.valid=this.video.canplay),this.snapshot=null,c.BitmapData&&(this.snapshot=new c.BitmapData(this.game,"",this.width,this.height)),!this.game.device.cocoonJS&&(this.game.device.iOS||this.game.device.android)||window.PhaserGlobal&&window.PhaserGlobal.fakeiOSTouchLock?this.setTouchLock():e&&(e.locked=!1)},c.Video.prototype={connectToMediaStream:function(a,b){return a&&b&&(this.video=a,this.videoStream=b,this.isStreaming=!0,this.baseTexture.source=this.video,this.updateTexture(null,this.video.videoWidth,this.video.videoHeight),this.onAccess.dispatch(this)),this},startMediaStream:function(a,b,c){if(void 0===a&&(a=!1),void 0===b&&(b=null),void 0===c&&(c=null),!this.game.device.getUserMedia)return this.onError.dispatch(this,"No getUserMedia"),!1;null!==this.videoStream&&(this.videoStream.active?this.videoStream.active=!1:this.videoStream.stop()),this.removeVideoElement(),this.video=document.createElement("video"),this.video.setAttribute("autoplay","autoplay"),null!==b&&(this.video.width=b),null!==c&&(this.video.height=c),this._timeOutID=window.setTimeout(this.getUserMediaTimeout.bind(this),this.timeout);try{navigator.getUserMedia({audio:a,video:!0},this.getUserMediaSuccess.bind(this),this.getUserMediaError.bind(this))}catch(a){this.getUserMediaError(a)}return this},getUserMediaTimeout:function(){clearTimeout(this._timeOutID),this.onTimeout.dispatch(this)},getUserMediaError:function(a){clearTimeout(this._timeOutID),this.onError.dispatch(this,a)},getUserMediaSuccess:function(a){clearTimeout(this._timeOutID),this.videoStream=a,void 0!==this.video.mozSrcObject?this.video.mozSrcObject=a:this.video.src=window.URL&&window.URL.createObjectURL(a)||a;var b=this;this.video.onloadeddata=function(){function a(){if(c>0)if(b.video.videoWidth>0){var d=b.video.videoWidth,e=b.video.videoHeight;isNaN(b.video.videoHeight)&&(e=d/(4/3)),b.video.play(),b.isStreaming=!0,b.baseTexture.source=b.video,b.updateTexture(null,d,e),b.onAccess.dispatch(b)}else window.setTimeout(a,500);else console.warn("Unable to connect to video stream. Webcam error?");c--}var c=10;a()}},createVideoFromBlob:function(a){var b=this;return this.video=document.createElement("video"),this.video.controls=!1,this.video.setAttribute("autoplay","autoplay"),this.video.addEventListener("loadeddata",function(a){b.updateTexture(a)},!0),this.video.src=window.URL.createObjectURL(a),this.video.canplay=!0,this},createVideoFromURL:function(a,b){return void 0===b&&(b=!1),this.texture&&(this.texture.valid=!1),this.video=document.createElement("video"),this.video.controls=!1,b&&this.video.setAttribute("autoplay","autoplay"),this.video.src=a,this.video.canplay=!0,this.video.load(),this.retry=this.retryLimit,this._retryID=window.setTimeout(this.checkVideoProgress.bind(this),this.retryInterval),this.key=a,this},updateTexture:function(a,b,c){var d=!1;void 0!==b&&null!==b||(b=this.video.videoWidth,d=!0),void 0!==c&&null!==c||(c=this.video.videoHeight),this.width=b,this.height=c,this.baseTexture.source!==this.video&&(this.baseTexture.source=this.video),this.baseTexture.forceLoaded(b,c),this.texture.frame.resize(b,c),this.texture.width=b,this.texture.height=c,this.texture.valid=!0,this.snapshot&&this.snapshot.resize(b,c),d&&null!==this.key&&(this.onChangeSource.dispatch(this,b,c),this._autoplay&&(this.video.play(),this.onPlay.dispatch(this,this.loop,this.playbackRate)))},complete:function(){this.onComplete.dispatch(this)},play:function(a,b){return void 0===a&&(a=!1),void 0===b&&(b=1),this.game.sound.onMute&&(this.game.sound.onMute.add(this.setMute,this),this.game.sound.onUnMute.add(this.unsetMute,this),this.game.sound.mute&&this.setMute()),this.game.onPause.add(this.setPause,this),this.game.onResume.add(this.setResume,this),this._endCallback=this.complete.bind(this),this.video.addEventListener("ended",this._endCallback,!0),this.video.addEventListener("webkitendfullscreen",this._endCallback,!0),a?this.video.loop="loop":this.video.loop="",this.video.playbackRate=b,this.touchLocked?this._pending=!0:(this._pending=!1,null!==this.key&&(4!==this.video.readyState?(this.retry=this.retryLimit,this._retryID=window.setTimeout(this.checkVideoProgress.bind(this),this.retryInterval)):(this._playCallback=this.playHandler.bind(this),this.video.addEventListener("playing",this._playCallback,!0))),this.video.play(),this.onPlay.dispatch(this,a,b)),this},playHandler:function(){this.video.removeEventListener("playing",this._playCallback,!0),this.updateTexture()},stop:function(){return this.game.sound.onMute&&(this.game.sound.onMute.remove(this.setMute,this),this.game.sound.onUnMute.remove(this.unsetMute,this)),this.game.onPause.remove(this.setPause,this),this.game.onResume.remove(this.setResume,this),this.isStreaming?(this.video.mozSrcObject?(this.video.mozSrcObject.stop(),this.video.src=null):(this.video.src="",this.videoStream.active?this.videoStream.active=!1:this.videoStream.getTracks?this.videoStream.getTracks().forEach(function(a){a.stop()}):this.videoStream.stop()),this.videoStream=null,this.isStreaming=!1):(this.video.removeEventListener("ended",this._endCallback,!0),this.video.removeEventListener("webkitendfullscreen",this._endCallback,!0),this.video.removeEventListener("playing",this._playCallback,!0),this.touchLocked?this._pending=!1:this.video.pause()),this},add:function(a){if(Array.isArray(a))for(var b=0;b<a.length;b++)a[b].loadTexture&&a[b].loadTexture(this);else a.loadTexture(this);return this},addToWorld:function(a,b,c,d,e,f){e=e||1,f=f||1;var g=this.game.add.image(a,b,this);return g.anchor.set(c,d),g.scale.set(e,f),g},render:function(){!this.disableTextureUpload&&this.playing&&this.baseTexture.dirty()},setMute:function(){this._muted||(this._muted=!0,this.video.muted=!0)},unsetMute:function(){this._muted&&!this._codeMuted&&(this._muted=!1,this.video.muted=!1)},setPause:function(){this._paused||this.touchLocked||(this._paused=!0,this.video.pause())},setResume:function(){!this._paused||this._codePaused||this.touchLocked||(this._paused=!1,this.video.ended||this.video.play())},changeSource:function(a,b){return void 0===b&&(b=!0),this.texture.valid=!1,this.video.pause(),this.retry=this.retryLimit,this._retryID=window.setTimeout(this.checkVideoProgress.bind(this),this.retryInterval),this.video.src=a,this.video.load(),this._autoplay=b,b||(this.paused=!0),this},checkVideoProgress:function(){4===this.video.readyState?this.updateTexture():(this.retry--,this.retry>0?this._retryID=window.setTimeout(this.checkVideoProgress.bind(this),this.retryInterval):console.warn("Phaser.Video: Unable to start downloading video in time",this.isStreaming))},setTouchLock:function(){this.game.input.touch.addTouchLockCallback(this.unlock,this),this.touchLocked=!0},unlock:function(){if(this.touchLocked=!1,this.video.play(),this.onPlay.dispatch(this,this.loop,this.playbackRate),this.key){var a=this.game.cache.getVideo(this.key);a&&!a.isBlob&&(a.locked=!1)}return!0},grab:function(a,b,c){return void 0===a&&(a=!1),void 0===b&&(b=1),void 0===c&&(c=null),null===this.snapshot?void console.warn("Video.grab cannot run because Phaser.BitmapData is unavailable"):(a&&this.snapshot.cls(),this.snapshot.copy(this.video,0,0,this.width,this.height,0,0,this.width,this.height,0,0,0,1,1,b,c),this.snapshot)},removeVideoElement:function(){if(this.video){for(this.video.parentNode&&this.video.parentNode.removeChild(this.video);this.video.hasChildNodes();)this.video.removeChild(this.video.firstChild);this.video.removeAttribute("autoplay"),this.video.removeAttribute("src"),this.video=null}},destroy:function(){this.stop(),this.removeVideoElement(),this.touchLocked&&this.game.input.touch.removeTouchLockCallback(this.unlock,this),this._retryID&&window.clearTimeout(this._retryID)}},Object.defineProperty(c.Video.prototype,"currentTime",{get:function(){return this.video?this.video.currentTime:0},set:function(a){this.video.currentTime=a}}),Object.defineProperty(c.Video.prototype,"duration",{get:function(){return this.video?this.video.duration:0}}),Object.defineProperty(c.Video.prototype,"progress",{get:function(){return this.video?this.video.currentTime/this.video.duration:0}}),Object.defineProperty(c.Video.prototype,"mute",{get:function(){return this._muted},set:function(a){if(a=a||null){if(this._muted)return;this._codeMuted=!0,this.setMute()}else{if(!this._muted)return;this._codeMuted=!1,this.unsetMute()}}}),Object.defineProperty(c.Video.prototype,"paused",{get:function(){return this._paused},set:function(a){if(a=a||null,!this.touchLocked)if(a){if(this._paused)return;this._codePaused=!0,this.setPause()}else{if(!this._paused)return;this._codePaused=!1,this.setResume()}}}),Object.defineProperty(c.Video.prototype,"volume",{get:function(){return this.video?this.video.volume:1},set:function(a){a<0?a=0:a>1&&(a=1),this.video&&(this.video.volume=a)}}),Object.defineProperty(c.Video.prototype,"playbackRate",{get:function(){return this.video?this.video.playbackRate:1},set:function(a){this.video&&(this.video.playbackRate=a)}}),Object.defineProperty(c.Video.prototype,"loop",{get:function(){return!!this.video&&this.video.loop},set:function(a){a&&this.video?this.video.loop="loop":this.video&&(this.video.loop="")}}),Object.defineProperty(c.Video.prototype,"playing",{get:function(){return!(this.video.paused&&this.video.ended)}}),c.Video.prototype.constructor=c.Video,void 0===PIXI.blendModes&&(PIXI.blendModes=c.blendModes),void 0===PIXI.scaleModes&&(PIXI.scaleModes=c.scaleModes),void 0===PIXI.Texture.emptyTexture&&(PIXI.Texture.emptyTexture=new PIXI.Texture(new PIXI.BaseTexture)),void 0===PIXI.DisplayObject._tempMatrix&&(PIXI.DisplayObject._tempMatrix=new PIXI.Matrix),void 0===PIXI.RenderTexture.tempMatrix&&(PIXI.RenderTexture.tempMatrix=new PIXI.Matrix),PIXI.Graphics&&void 0===PIXI.Graphics.POLY&&(PIXI.Graphics.POLY=c.POLYGON,PIXI.Graphics.RECT=c.RECTANGLE,PIXI.Graphics.CIRC=c.CIRCLE,PIXI.Graphics.ELIP=c.ELLIPSE,PIXI.Graphics.RREC=c.ROUNDEDRECTANGLE),PIXI.TextureSilentFail=!0,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=c),exports.Phaser=c):"undefined"!=typeof define&&define.amd?define("Phaser",function(){return b.Phaser=c}()):b.Phaser=c,c}.call(this);
	//# sourceMappingURL=phaser.map

// Server.js
	var SESSION_PING_DELAY	=	5 * 60 * 1000; // 5 * minutes (5 * 60 sec * 1000 ms)

	var TServer = function(){
	}

	// @param {String}
	TServer.prototype.getStat = function (pStat){
		switch(pStat.toLowerCase()){
			case 'deathes' : return 0; // global players ' deathes count
			case 'money' : return 0; // global server's money
		}
		return 0;
	}

	// @param {String}
	TServer.prototype.getStat = function (pStat){
		switch(pStat.toLowerCase()){
			case 'shaked' : return 0;
			case 'thrown' : return 0;
		}
		return 0;
	}

	TServer.prototype.start = function(){
		// start session on player "play"
		// -> money = 0
		// -> local time = 0
	}

	TServer.prototype.end = function(){
		// end session
		// -> remove session from server.
	}

	TServer.prototype.ping = function(){
		// check time from last ping/start session time
		// check player score increment from last money submitted
		//  -> assert the session is not locked (else invalidate the session)
	}

	TServer.prototype.pause = function(){
		// lock the session time
		// sumbit current money
	}

	TServer.prototype.resume = function(){
		// unlock the session
		// reset time for next ping
	}

	TServer.prototype.send = function(pThrown, pShaked){
		//  -> assert the session is not locked (else invalidate the session)
		// send session's stats to server
	}

	TServer.prototype.playerDie = function(){
		//  -> assert the session is not locked (else invalidate the session)
		// increase server's "player-death" counter
	}


/**
 * ************************************************************** *
 * 					- blitz-like wrapper -
 * 				by bobysait (Rem/BobyCé/K.Ouarga)
 * ************************************************************** *
 *  contains :
 * ------------------
 *
 * - a small generic SDK
 *   > a #Maths class
 *   > a #Vector2 class
 *   > a #TList (linked list) class
 *   > an asbtract sequence extractor (for sprite animation)
 *
 * - a wrapper for standard blitz functions
 *   > input handler
 *   > event handler
 *   > time and system functions
 *
 * most of the functions and class are "blitz-like"
 * and are intended to be easier to access than formal js.
 *
 *
 * about :
 * ------------------
 * "blitz-like" is not related to "blizz-like"
 * Blitz refers BRL (Blitz Research Ltd) creator and distributor of
 * Blitz3d / BlitzMax / Monkey
 */
 
	var AddPolledEvent = function(pObject, pType, pCallback) {
		if (pObject == null || typeof(pObject) == 'undefined') return;
		if (pObject.addEventListener)	{pObject.addEventListener(pType, pCallback, false);}
		else if(pObject.attachEvent)	{pObject.attachEvent("on" + pType, pCallback);}
		else							{pObject["on"+pType] = pCallback;}
	};
	
	/** {TGraphics}
	 * 
	 */
		var TGraphics = function(pDocument=null){
			if (TGraphics._Current===undefined || TGraphics._Current===null){TGraphics._Current = this;}
			// Screen Size
				this._width			=	0;
				this._height		=	0;
				this._x				=	0;
				this._y				=	0;
			
			// virtual resolution
				this._virtual		=	false;
				this._virtualW		=	0;
				this._virtualH		=	0;
				this._ratioX		=	1.0;
				this._ratioY		=	1.0;
			
			// Phaser object
				this._game			=	null;
			
			// setup game document
				var l_Doc			=	document.getElementById(pDocument);
				l_Doc				=	(l_Doc===undefined || l_Doc===null) ? pDocument : l_Doc;
				this._Doc			=	(l_Doc===undefined || l_Doc===null) ? document.documentElement : l_Doc;
			
			// 2D brush
				this._alpha			=	1;
				this._r				=	255;
				this._g				=	255;
				this._b				=	255;
				
				this._alpha1		=	1;
				this._r1			=	255;
				this._g1			=	255;
				this._b1			=	255;
				
				this._alpha2		=	1;
				this._r2			=	255;
				this._g2			=	255;
				this._b2			=	255;
				this._blend			=	0;
				
				this._Regex4		=	/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
				this._RegexHex4		=	/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
				this._Regex3		=	/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
				this._RegexHex		=	/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
				
			// 2D font
				this._font			=	'press_start_2pregular';
				this._fontSize		=	32;
				
			// 2D Text
				this._strokeSize	=	0;
				this._strokeColor	=	0x000000;
				
			// 2D transform
				this._origin		=	new Vector2(0.0,0.0);
				this._scale			=	new Vector2(1.0,1.0);
				this._handle		=	new Vector2(0.0,0.0);
				this._angle			=	0;
			
			// use this graphics "context"
			TGraphics.SetGraphics( this );
			
			return this;
		}; TGraphics._Current=null;
			
			
			
			// 2D properties
				Object.defineProperty(TGraphics.prototype, 'game', {
					get:function(){return this._game;},
					set:function(pPhaserGame){this._game = pPhaserGame;},
				})
				
				Object.defineProperty (TGraphics.prototype, 'argb',{
					get:function(){return	(parseInt(this._alpha*255) << 24) |
											(parseInt(this._r) << 16) |
											(parseInt(this._g) << 8) |
											parseInt(this._b);},
					set:function(pRgb){
						this._alpha1	=	parseFloat((pRgb>>24) & 0xff)/255;
						this._r1		=	(pRgb>>16) & 0xff;
						this._g1		=	(pRgb>>8) & 0xff;
						this._b1		=	pRgb & 0xff;
						this._alpha		=	this._alpha1;
						this._r			=	this._r1;
						this._g			=	this._g1;
						this._b			=	this._b1;
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'argb2',{
					get:function(){return	(parseInt(this._alpha2*255) << 24) |
											(parseInt(this._r2) << 16) |
											(parseInt(this._g2) << 8) |
											parseInt(this._b2);},
					set:function(pRgb){
						this._alpha2	=	parseFloat((pRgb>>24) & 0xff)/255;
						this._r2		=	(pRgb>>16) & 0xff;
						this._g2		=	(pRgb>>8) & 0xff;
						this._b2		=	pRgb & 0xff;
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'hexRGB',{
					get:function(){
						return "rgb("+this._r+","+this._g+","+this._b+")";
					},
					set:function(pHex){
						pHex = pHex.replace( this._Regex3, function(m, r, g, b)
												{return r+r + g+g + b+b;} );
						var result = this._RegexHex.exec(pHex);
						this._r1		=	parseInt(result[1],16);
						this._g1		=	parseInt(result[2],16);
						this._b1		=	parseInt(result[3],16);
						this._r			=	this._r1;
						this._g			=	this._g1;
						this._b			=	this._b1;
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'hexARGB',{
					get:function(){
						return "rgb("+this._r+","+this._g+","+this._b+")";
					},
					set:function(pHex){
						pHex = pHex.replace( this._Regex4, function(m, a, r, g, b)
												{return a+a + r+r + g+g + b+b;} );
						var result = this._RegexHex4.exec(pHex);
						this._alpha1	=	parseFloat(parseInt(result[1],16))/255;
						this._r1		=	parseInt(result[2],16);
						this._g1		=	parseInt(result[3],16);
						this._b1		=	parseInt(result[4],16);
						this._alpha		=	this._alpha1;
						this._r			=	this._r1;
						this._g			=	this._g1;
						this._b			=	this._b1;
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'hexRGB2',{
					get:function(){
						return "rgb("+this._r2+","+this._g2+","+this._b2+")";
					},
					set:function(pHex){
						pHex = pHex.replace( this._Regex3, function(m, r, g, b)
												{return r+r + g+g + b+b;} );
						var result = this._RegexHex.exec(pHex);
						this._r2		=	parseInt(result[1],16);
						this._g2		=	parseInt(result[2],16);
						this._b2		=	parseInt(result[3],16);
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'hexARGB2',{
					get:function(){
						return "rgb("+this._r2+","+this._g2+","+this._b2+")";
					},
					set:function(pHex){
						pHex = pHex.replace( this._Regex4, function(m, a, r, g, b)
												{return a+a + r+r + g+g + b+b;} );
						var result = this._RegexHex4.exec(pHex);
						this._alpha2	=	parseFloat(parseInt(result[1],16))/255;
						this._r2		=	parseInt(result[2],16);
						this._g2		=	parseInt(result[3],16);
						this._b2		=	parseInt(result[4],16);
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'rgb',{
					get:function(){return (this._r << 16) | (this._g << 8) | this._b;},
					set:function(pRgb){
						this._r1		=	(pRgb>>16) & 0xff;
						this._g1		=	(pRgb>>8) & 0xff;
						this._b1		=	pRgb & 0xff;
						this._r			=	this._r1;
						this._g			=	this._g1;
						this._b			=	this._b1;
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'rgb2',{
					get:function(){return (this._r2 << 16) | (this._g2 << 8) | this._b2;},
					set:function(pRgb){
						this._r2		=	(pRgb>>16) & 0xff;
						this._g2		=	(pRgb>>8) & 0xff;
						this._b2		=	pRgb & 0xff;
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'alpha',{
					get:function(){return this._alpha;},
					set:function(pAlpha){
						this._alpha		=	pAlpha;
					}
				})
				
				Object.defineProperty (TGraphics.prototype, 'blend',{
					get:function(){return this._blend;},
					set:function(pBlend){this._blend=pBlend;}
				})
				
				Object.defineProperty (TGraphics.prototype, 'origin',{
					get:function(){return this._origin;},
					set:function(pPosition){this._origin=pPosition;}
				})
				Object.defineProperty (TGraphics.prototype, 'scale',{
					get:function(){return this._scale;},
					set:function(pScale){this._scale=pScale;}
				})
				Object.defineProperty (TGraphics.prototype, 'handle',{
					get:function(){return this._handle;},
					set:function(pHandle){this._handle=pHandle;}
				})
				Object.defineProperty (TGraphics.prototype, 'angle',{
					get:function(){return this._angle;},
					set:function(pAngle){this._angle=pAngle;}
				})
				
				Object.defineProperty (TGraphics.prototype, 'font',{
					get:function(){return this._font;},
					set:function(pFont){this._font=pFont;}
				})
				Object.defineProperty (TGraphics.prototype, 'fontSize',{
					get:function(){return this._fontSize;},
					set:function(pFontSize){this._fontSize=pFontSize;}
				})
				
				Object.defineProperty (TGraphics.prototype, 'strokeThickness',{
					get:function(){return this._strokeSize;},
					set:function(pStrokeSize){this._strokeSize=pStrokeSize;}
				})
				Object.defineProperty (TGraphics.prototype, 'strokeColor',{
					get:function(){return this._strokeColor;},
					set:function(pColor){this._strokeColor=pColor;}
				})
				
			/**
			 * returns true if the browser is running on a mobile device
			 */
			TGraphics.IsMobileDevice = function()
			{
				if(TGraphics._IsMobile===undefined)
				{
					var check = false;
					(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
					TGraphics._IsMobile = check;
				}
				return TGraphics._IsMobile;
			}
			
			TGraphics.prototype._updateVirtual = function(){
				if(this._virtual){
					this._ratioX	=	this._virtualW/this._width;
					this._ratioY	=	this._virtualH/this._height;
				}else{
					this._virtualW	=	this._width;
					this._virtualH	=	this._height;
					this._ratioX	=	1.0;
					this._ratioY	=	1.0;
				}
			}
			TGraphics.SetGraphics = function (pGraphics){
				TGraphics._Current	=	pGraphics;
				TGraphics				.OnUpdate	( null );
			}
			
			var GraphicsDriver = function(){return TGraphics._Current;}
			Object.defineProperty(TGraphics, 'driver',{
				get:function(){return TGraphics._Current;},
				set:function(pGraphics){TGraphics.SetGraphics(pGraphics);},
			})
			TGraphics.Current = function(){return TGraphics._Current;}
			TGraphics.VirtualResolution = function (w,h)
				{
					var l_G			=	TGraphics.Current();
					l_G._virtualW	=	w;
					l_G._virtualH	=	h;
					l_G._virtual	=	true;
					l_G					._updateVirtual();
				}
				
			/** {GraphicsWidth}
			 * @function GraphicsWidth
			 * @return	{int} the width of the current graphics document
			 */
			var GraphicsWidth = function ( )		{ return TGraphics._Current._width; }
			/** {GraphicsHeight}
			 * @function GraphicsHeight
			 * @return	{int} the height of the current graphics document
			 */
			var GraphicsHeight = function ( )		{ return TGraphics._Current._height; }
			
			/** {GraphicsVirtualWidth}
			 * @function GraphicsVirtualWidth
			 * @return	{int} the width of the current graphics document
			 */
			var GraphicsVirtualWidth = function ( )	{ return TGraphics._Current._virtualW; }
			/** {GraphicsVirtualHeight}
			 * @function GraphicsVirtualHeight
			 * @return	{int} the height of the current graphics document
			 */
			var GraphicsVirtualHeight = function ( ){ return TGraphics._Current._virtualH; }
			
			/** {GraphicsX}
			 * @function GraphicsX
			 * @return	{int} the X Position of the current graphics document
			 */
			var GraphicsX = function ( )			{ return TGraphics._Current._x; }
			/** {GraphicsY}
			 * @function GraphicsY
			 * @return	{int} the Y Position of the current graphics document
			 */
			var GraphicsY = function ( )			{ return TGraphics._Current._y; }
			
			/** {GraphicsSize}
			 * @function GraphicsSize
			 * @return	{Vector2} the width and height of the current graphics document
			 */
			var GraphicsSize = function ( )			{ return new Vector2(TGraphics._Current._width,TGraphics._Current._height); }
			
			/** {GraphicsSize}
			 * @function GraphicsSize
			 * @return	{Vector2} the width and height of the virtual graphics document
			 */
			var GraphicsVirtualSize = function ( )	{ return new Vector2(TGraphics._Current._virtualW,TGraphics._Current._virtualH); }
			
			var GraphicsConvX = function ( pX )		{ return (pX-TGraphics._Current._x)*TGraphics._Current._ratioX; }
			var GraphicsConvY = function ( pY )		{ return (pY-TGraphics._Current._y)*TGraphics._Current._ratioY; }
			
			TGraphics.OnLoad = function (event){
				
				TGraphics.IsMobileDevice ( );
				
				if(TGraphics._Current===null){TGraphics.SetGraphics(new TGraphics(null));}
				TGraphics.OnUpdate(event);
				
			}
			
			TGraphics.OnUpdate = function(event){
				if(TGraphics._Current){
					var l_G				=	TGraphics._Current;
					var l_Elem			=	l_G._Doc;
					var l_Body			=	document.body;
					var l_Br			=	l_Body.getBoundingClientRect();
					var l_Er			=	l_Elem.getBoundingClientRect();
					l_G._x				=	l_Er.left - l_Br.left;
					l_G._y				=	l_Er.top - l_Br.top;
					l_G._width			=	l_Er.width; //l_Er.right-l_Er.left;
					l_G._height			=	l_Er.height; //l_Er.bottom-l_Er.top;
					l_G						._updateVirtual();
				}
			}
			AddPolledEvent(window, "load", TGraphics.OnLoad);
			AddPolledEvent(window, "resize", TGraphics.OnUpdate);
			
		// Phaser wrapper
		
		TGraphics.__setGroup = function(pShape,pGroup, pAbsolute=false)
		{
			if(pGroup!=null && pGroup!=undefined)
			{
				//pGroup.add(pShape);
				pGroup.addChild(pShape);
				if (pAbsolute==true){
					if (pGroup.fixedToCamera==true){
						pShape.cameraOffset.x -= pGroup.cameraOffset.x;
						pShape.cameraOffset.y -= pGroup.cameraOffset.y;
					}else{
						pShape.position.x -= pGroup.position.x;
						pShape.position.y -= pGroup.position.y;
					}
				}
			}
		}
		
	/** define material */
		function SetColor(r,g,b)		{
			var l = TGraphics.driver;
			l._r = r; l._g = g; l._b = b;
			l._r1 = r; l._g1 = g; l._b1 = b;
		}
		var GetColor = function ()		{ var l = TGraphics.driver; return [l._r, l._g, l._b]; }
		var GetColorR = function ()		{ var l = TGraphics.driver; return l._r; }
		var GetColorG = function ()		{ var l = TGraphics.driver; return l._g; }
		var GetColorB = function ()		{ var l = TGraphics.driver; return l._b; }
		
		function SetHexColor(rgb)		{
			var l = TGraphics.driver;
			l._r = (rgb & 0xff0000) >>> 16;
			l._g = (rgb & 0x00ff00) >>> 8;
			l._b = (rgb & 0x0000ff);
			l._r1 = l._r; l._g1 = l._g; l._b1 = l._b;
		}
		function SetColor2(r,g,b)		{
			var l = TGraphics.driver;
			l._r2 = r; l._g2 = g; l._b2 = b;
		}
		var GetColor2 = function ()		{ var l = TGraphics.driver; return [l._r2, l._g2, l._b2]; }
		var GetColor2R = function ()	{ var l = TGraphics.driver; return l._r; }
		var GetColor2G = function ()	{ var l = TGraphics.driver; return l._g; }
		var GetColor2B = function ()	{ var l = TGraphics.driver; return l._b; }
		
		function SetHexColor2(rgb)		{
			var l = TGraphics.driver;
			l._r2 = (rgb & 0xff0000) >>> 16;
			l._g2 = (rgb & 0x00ff00) >>> 8;
			l._b2 = (rgb & 0x0000ff);
		}
		function SetAlpha(a)			{ TGraphics.driver._alpha=a;
										  TGraphics.driver._alpha1=a; }
		var GetAlpha = function()		{ return TGraphics.driver._alpha; }
		var GetAlpha2 = function ()		{ return TGraphics.driver._alpha2; }
		function SetAlpha2(a)			{ TGraphics.driver._alpha2=a; }
		function SetBlend(b)			{ TGraphics.driver.blend=b; }
		var GetBlend = function()		{ return TGraphics.driver.blend; }
		function SetLerpColor(rate) {
			var l = TGraphics.driver;
			l._r = l._r1 + (l._r2-l._r1) * rate;
			l._g = l._g1 + (l._g2-l._g1) * rate;
			l._b = l._b1 + (l._b2-l._b1) * rate;
		}
		function SetLerpAlpha(a0,a1,r)	{ TGraphics.driver.alpha=a0+(a1-a0)*r; }
		
	/** defines transform matrix */
		function SetOrigin(x,y)			{ TGraphics.driver.origin.set(x,y); }
		var GetOrigin = function ()		{ return [TGraphics.driver.origin.x, TGraphics.driver.origin.y ]; }
		var GetOriginX = function ()	{ return TGraphics.driver.origin.x; }
		var GetOriginY = function ()	{ return TGraphics.driver.origin.y; }
		
		function SetScale(x,y)			{ TGraphics.driver.scale.set(x,y); }
		var GetScale = function ()		{ return [TGraphics.driver.scale.x, TGraphics.driver.scale.y ]; }
		var GetScaleX = function ()	{ return TGraphics.driver.scale.x; }
		var GetScaleY = function ()	{ return TGraphics.driver.scale.y; }
		
		function SetRotation(a)			{ TGraphics.driver.angle=a; }
		var GetRotation = function ()	{ return TGraphics.driver.angle; }
		
		function SetHandle(x,y)			{ TGraphics.driver.handle.set(x,y); }
		var GetHandle = function ()		{ return [TGraphics.driver.handle.x, TGraphics.driver.handle.y ]; }
		var GetHandleX = function ()	{ return TGraphics.driver.handle.x; }
		var GetHandleY = function ()	{ return TGraphics.driver.handle.y; }
		
	/** loaders */
		function LoadImage(pName,pFile)	{ TGraphics.driver.game.load.image (pName,pFile); _regFile(pFile);}
		function LoadAtlas(pName,pFile,pJSon,pJSONHash=false){
			if(pJSONHash===true)
			{
				TGraphics.driver.game.load	.atlasJSONHash			( pName,pFile,pJSon );
			}else{
				TGraphics.driver.game.load	.atlas					( pName,pFile,pJSon );
			}
			_regFile(pFile);
			_regFile(pJSon);
		}
		function LoadText(pName,pText)	{
			TGraphics.driver.game.load		.text					( pName, pText );
			_regFile(pText);
		}
		function LoadJSON(pName,pJSON)	{
			TGraphics.driver.game.load		.json					( pName, pJSON );
			_regFile(pJSON);
		}
		function LoadSound_(pName,pFile)	{
			TGraphics.driver.game.load		.audio					( pName, pFile );
			_regFile(pFile);
		}
		
	/** set font */
		function SetFont(pFont)			{TGraphics.driver.font=pFont;}
		function SetFontSize(pSize)		{TGraphics.driver.fontSize=pSize;}
		
	/** set Stroke */
		function SetStrokeSize(pSize)	{TGraphics.driver.strokeThickness=pSize;}
		function SetStrokeColor(r,g,b)	{TGraphics.driver.strokeColor="rgb("+r+","+g+","+b+")";}
		var GetStrokeSize = function()	{return TGraphics.driver.strokeThickness;}
		var GetStrokeColor = function()	{return TGraphics.driver.strokeColor;}
		var GetFontSize = function()	{return TGraphics.driver.fontSize;}
		var GetFont = function()		{return TGraphics.driver.font;}
		
	/** Create shapes */
		var SHAPE_GRAPHICS	=	1;
		var SHAPE_IMAGE		=	2;
		var SHAPE_TILE		=	3;
		var SHAPE_TEXT		=	4;
		
		function AddText ( pText, x, y, pGroup=null, pFlag=0 )	{
			var l_Driver				=	TGraphics.driver;
			var l_Shape					=	l_Driver.game.add.text	( l_Driver._origin.x+x,
																	  l_Driver._origin.y+y,
																	  pText );
			l_Shape.font				=	l_Driver._font;
			l_Shape.fontSize			=	l_Driver._fontSize;
			l_Shape.stroke				=	l_Driver._strokeColor;
			l_Shape.strokeThickness		=	l_Driver._strokeSize;
			l_Shape.scale					.setTo					( l_Driver._scale.x,
																	  l_Driver._scale.y );
			l_Shape.anchor					.setTo					( l_Driver._handle.x,
																	  l_Driver._handle.y );
			l_Shape.angle				=	l_Driver._angle;
			l_Shape.fill				=	l_Driver.hexRGB;
			l_Shape.blendMode			=	l_Driver._blend;
			l_Shape.alpha				=	l_Driver._alpha;
			
			l_Shape._ShapeStyle			=	SHAPE_TEXT;
			
			if ((4 & pFlag)>0){
				l_Shape.fixedToCamera	=	true;
			}
			
			TGraphics.__setGroup ( l_Shape, pGroup, (8 & pFlag)>0 );
			return l_Shape;
		}
		
		function AddImage	( pName, x, y, pGroup=null, pFlag=0 )	{
			var l_Driver				=	TGraphics.driver;
			var l_Shape					=	l_Driver.game.add.sprite( l_Driver._origin.x+x,
																	  l_Driver._origin.y+y,
																	  pName );
			l_Shape.tint				=	l_Driver.rgb;
			l_Shape.blendMode			=	l_Driver._blend;
			l_Shape.scale					.setTo					( l_Driver._scale.x,
																	  l_Driver._scale.y );
			l_Shape.anchor					.setTo					( l_Driver._handle.x,
																	  l_Driver._handle.y );
			l_Shape.angle				=	l_Driver._angle;
			l_Shape.alpha				=	l_Driver._alpha;
			
			l_Shape._ShapeStyle			=	SHAPE_IMAGE;
			
			if ((4 & pFlag)>0){
				l_Shape.fixedToCamera	=	true;
			}
			
			TGraphics.__setGroup ( l_Shape, pGroup, (8 & pFlag)>0 );
			return l_Shape;
		}
		
		function AddTile	( pName, x, y, w, h, pFrame, pGroup=null, pFlag=0 )	{
			var l_Driver				=	TGraphics.driver;
			if (w==-1){ w=AtlasWidth(pName,pFrame);}
			if (h==-1){ h=AtlasHeight(pName,pFrame);}
			
			var l_Shape					=	l_Driver.game.add.tileSprite
																	( l_Driver._origin.x+x,
																	  l_Driver._origin.y+y,
																	  w,h,
																	  pName, pFrame );
			l_Shape.tint				=	l_Driver.rgb;
			l_Shape.blendMode			=	l_Driver._blend;
			l_Shape.anchor					.setTo					( l_Driver._handle.x,
																	  l_Driver._handle.y );
			l_Shape.scale					.setTo					( l_Driver._scale.x,
																	  l_Driver._scale.y );
			l_Shape.angle				=	l_Driver._angle;
			l_Shape.alpha				=	l_Driver._alpha;
			
			l_Shape._ShapeStyle			=	SHAPE_TILE;
				
			if ((4 & pFlag)>0){
				l_Shape.fixedToCamera	=	true;
			}
			
			if ((1 & pFlag)>0 || (2 & pFlag)>0){
				SpriteFit(l_Shape, (1 & pFlag)>0, (2 & pFlag)>0);
			}
			
			if ((8 & pFlag)>0){
				SpriteFitSize(l_Shape);
			}
			TGraphics.__setGroup ( l_Shape, pGroup, (8 & pFlag)>0 );
			return l_Shape;
		}
		
		function AddRect	( x, y, w, h, pGroup=null, pFlag=0 )		{
			var l_Driver				=	TGraphics.driver;
			var l_Shape					=	l_Driver.game.add.graphics
																	( l_Driver._origin.x+x,
																	  l_Driver._origin.y+y );
				l_Shape.anchor				.setTo					( l_Driver._handle.x,
																	  l_Driver._handle.y );
				l_Shape.angle			=	l_Driver._angle;
				l_Shape.scale				.setTo					( l_Driver._scale.x,
																	  l_Driver._scale.y );
				l_Shape.tint			=	l_Driver.rgb;
				l_Shape						.beginFill				( 0xffffff );//l_Driver.rgb );
				l_Shape.blendMode		=	l_Driver._blend;
				l_Shape.alpha			=	l_Driver._alpha;
				l_Shape						.drawRect				( 0, 0, w,h );
				l_Shape						.endFill				( );
				
				l_Shape._ShapeStyle		=	SHAPE_GRAPHICS;
				
			if ((4 & pFlag)>0){
				l_Shape.fixedToCamera	=	true;
			}
			
			TGraphics.__setGroup ( l_Shape, pGroup, (8 & pFlag)>0 );
			return l_Shape;
		}
		
		function AddOval ( x, y, w, h, pGroup=null, pFlag=0 )			{
			var l_Driver				=	TGraphics.driver;
			var l_Shape					=	l_Driver.game.add.graphics
																	( l_Driver._origin.x+x,
																	  l_Driver._origin.y+y );
				l_Shape.anchor				.setTo					( l_Driver._handle.x,
																	  l_Driver._handle.y );
				l_Shape.angle			=	l_Driver._angle;
				l_Shape.scale				.setTo					( l_Driver._scale.x,
																	  l_Driver._scale.y );
				l_Shape.tint			=	l_Driver.rgb;
				l_Shape						.beginFill				( 0xffffff );//l_Driver.rgb );
				l_Shape.blendMode		=	l_Driver._blend;
				l_Shape.alpha			=	l_Driver._alpha;
				l_Shape						.drawCircle				( 0, 0, Math.max(w,h) );
				l_Shape						.endFill				( );
				
				l_Shape._ShapeStyle		=	SHAPE_GRAPHICS;
				
			if ((4 & pFlag)>0){
				l_Shape.fixedToCamera	=	true;
			}
			
			TGraphics.__setGroup ( l_Shape, pGroup, (8 & pFlag)>0 );
			return l_Shape;
		}
		
		function SetTextColor( pText, pR, pG, pB ){
				pText.fill				=	"rgb("+pR+","+pG+","+pB+")";
		}
		function SetTextStrokeColor (pText, pR,pG,pB)
		{
				pText.stroke			=	"rgb("+pR+","+pG+","+pB+")";
		}
		
		function SetShapeColor( pShape, pR, pG, pB ){
			switch(pShape._ShapeStyle){
				case SHAPE_GRAPHICS:
					pShape.tint			=	(pR<<16)|(pG<<8)|pB;
					pShape.beginFill ( 0xffffff );
					pShape.endFill	( );
					break;
				case SHAPE_TEXT:
					pShape.fill			=	"rgb("+pR+","+pG+","+pB+")";
					break;
				default:
					pShape.tint			=	(pR<<16)|(pG<<8)|pB;
					break;
			}
		}
		function SetShapeLerpColor(pShape, rate) {
			var l = TGraphics.driver;
			var l_r = l._r1 + (l._r2-l._r1) * rate;
			var l_g = l._g1 + (l._g2-l._g1) * rate;
			var l_b = l._b1 + (l._b2-l._b1) * rate;
			pShape.tint =	(l_r<<16)|(l_g<<8)|l_b;
		}
		
		function SetShapeAlpha (pShape, pAlpha) {
			pShape.alpha		=	pAlpha;
			pShape.fillAlpha	=	pAlpha;
		}
		
		var SetObjectColor = function (pObject, pR,pG,pB, pCoef=1.0){
			pObject._ColorR = pR;
			pObject._ColorG = pG;
			pObject._ColorB = pB;
			pObject._ColorC = pCoef;
		}
		
		var TSound = function(pChannel, pStyle){
			if (TSound._List==undefined){TSound._List = new TList();}
			TSound._List.addLast(this);
			this._Channel = pChannel;
			this._Style = pStyle;
			this._Volume = 1;
			return this;
		}
		
		TSound.Sounds = function (){
			if (TSound._List==undefined){return new TList();}
			return TSound._List.copy();
		}
		TSound.Musics = function (){
			var l_List = new TList();
			if (TSound._List==undefined){return l_List;}
			var l_Snd = TSound._List.firstLink();
			while(l_Snd!=null){
				if (l_Snd.value()._Style==0){l_List.addLast(l_Snd.value());}
				l_Snd = l_Snd.after();
			}
			return l_List;
			return 
		}
		TSound.FxSounds = function (){
			var l_List = new TList();
			if (TSound._List==undefined){return l_List;}
			var l_Snd = TSound._List.firstLink();
			while(l_Snd!=null){
				if (l_Snd.value()._Style==1){l_List.addLast(l_Snd.value());}
				l_Snd = l_Snd.after();
			}
			return l_List;
			return 
		}
		TSound.AmbientSounds = function (){
			var l_List = new TList();
			if (TSound._List==undefined){return l_List;}
			var l_Snd = TSound._List.firstLink();
			while(l_Snd!=null){
				if (l_Snd.value()._Style==2){l_List.addLast(l_Snd.value());}
				l_Snd = l_Snd.after();
			}
			return l_List;
			return 
		}
		
		TSound.UpdateMusicVolumes = function ( pVolume ) {
			var l_List = TSound.Musics()
			var l_Link = l_List.firstLink();
			while (l_Link!=null){
				var l_Sound = l_Link.value();
				ChannelVolume(l_Sound._Channel, l_Sound._Volume*pVolume);
				l_Link = l_Link.after();
			}
		}
		
		TSound.UpdateFxVolumes = function ( pVolume ){
			var l_Link = TSound.FxSounds().firstLink();
			while (l_Link!=null){
				var l_Sound = l_Link.value();
				ChannelVolume(l_Sound._Channel, l_Sound._Volume*pVolume);
				l_Link = l_Link.after();
			}
		}
		
		TSound.UpdateAmbientVolumes = function ( pVolume ){
			var l_Link = TSound.AmbientSounds().firstLink();
			while (l_Link!=null){
				var l_Sound = l_Link.value();
				ChannelVolume(l_Sound._Channel, l_Sound._Volume*pVolume);
				l_Link = l_Link.after();
			}
		}
		
		function LoadSound ( pFile, pKey )
		{
			if(LoadSound._Counter===undefined){LoadSound._Counter = 0;}
			var l_Name = ((arguments.length<2) || (pKey===undefined) || (pKey==='')) ? 'music_gen_'+LoadSound._Counter++ : pKey;
			var l_Files = pFile.split(',');
			if (l_Files.length>1){
				var l_F = 0;
				for (l_F = 0; l_F<l_Files.length; l_F++){
					l_Files[l_F] = l_Files[l_F].replace("'","");
					_regFile(l_Files[l_F]);
				}
			}else{
				_regFile(pFile);
			}
			TGraphics.driver.game.load.audio ( l_Name, l_Files );
			
			return l_Name;
		}
		
		function PlayMusic( pName, pPlay=true, pVolume=0.1, pLoop=false ){
			var l_Channel = TGraphics.driver.game.add.audio(pName);
			l_Channel.loop = ((pLoop===undefined) || (arguments.length<4)) ? false : pLoop;
			l_Channel.volume = ((pVolume===undefined) || (arguments.length<3)) ? 0.2 : pVolume;
			if((pPlay!=undefined) && (arguments.length>1) && (pPlay=true)) { l_Channel.play() };
			new TSound (l_Channel, 0);
			return l_Channel;
		}
		function PlayFxSound( pName, pPlay=true, pVolume=0.1, pLoop=false ){
			var l_Channel = TGraphics.driver.game.add.audio(pName);
			l_Channel.loop = ((pLoop===undefined) || (arguments.length<4)) ? false : pLoop;
			l_Channel.volume = ((pVolume===undefined) || (arguments.length<3)) ? 0.2 : pVolume;
			if((pPlay!=undefined) && (arguments.length>1) && (pPlay=true)) { l_Channel.play() };
			new TSound (l_Channel, 1);
			return l_Channel;
		}
		function PlayAmbientSound( pName, pPlay=true, pVolume=0.1, pLoop=false ){
			var l_Channel = TGraphics.driver.game.add.audio(pName);
			l_Channel.loop = ((pLoop===undefined) || (arguments.length<4)) ? false : pLoop;
			l_Channel.volume = ((pVolume===undefined) || (arguments.length<3)) ? 0.2 : pVolume;
			if((pPlay!=undefined) && (arguments.length>1) && (pPlay=true)) { l_Channel.play() };
			new TSound (l_Channel, 2);
			return l_Channel;
		}
		
		function PlaySound( pName, pPlay=true, pVolume=0.1, pLoop=false ){
			var l_Channel = TGraphics.driver.game.add.audio(pName);
			l_Channel.loop = ((pLoop===undefined) || (arguments.length<4)) ? false : pLoop;
			l_Channel.volume = ((pVolume===undefined) || (arguments.length<3)) ? 0.2 : pVolume;
			if((pPlay!=undefined) && (arguments.length>1) && (pPlay=true)) { l_Channel.play() };
			return l_Channel;
		}
		
		function ChannelVolume( pChannel, pVolume ){pChannel.volume = pVolume;}
		function PauseChannel( pChannel ){pChannel.pause();}
		function ResumeChannel( pChannel ){pChannel.play();}
		function LoopSound( pChannel, pLoop=true ){
			pChannel.loop = ((pLoop===undefined) || (arguments.length<2)) ? true : pLoop;
		}
		function OnLoopSound()
		{
			LoopSound._Current.play();
		}
		
		function AtlasFrame			( pKey, pFrame ){ return TGame.game.cache.getFrameData(pKey).getFrameByName(pFrame);}
		function AtlasWidth			( pKey, pFrame ){ return AtlasFrame(pKey,pFrame).width;}
		function AtlasHeight		( pKey, pFrame ){ return AtlasFrame(pKey,pFrame).height;}
		function SpriteAltas		( pSprite )		{ return TGame.game.cache.getFrameData(pSprite.key); }
		function SpriteFrame		( pSprite )		{ return TGame.game.cache.getFrameData(pSprite.key).getFrameByName(pSprite.frameName); }
		function SpriteFrameWidth	( pSprite )		{ return SpriteFrame(pSprite).width; }
		function SpriteFrameHeight	( pSprite )		{ return SpriteFrame(pSprite).height; }
		function SpriteFit			( pSprite, pFitW, pFitH ){
			if(pFitW)	{ pSprite.tileScale.x = pSprite.width/SpriteFrameWidth(pSprite); };
			if(pFitH)	{ pSprite.tileScale.y = pSprite.height/SpriteFrameHeight(pSprite); };
		}
		function SpriteFitSize		( pSprite ){
			pSprite.width		=	SpriteFrameWidth(pSprite);
			pSprite.height		=	SpriteFrameHeight(pSprite);
		}
		
	/** shortcuts */
		// reset all states to "standard"
		function Reset2D ( ) {
			// reset transform
			SetOrigin						( 0, 0 );
			SetRotation						( 0 );
			SetScale						( 1,1 );
			SetHandle						( 0.0,0.0 );
			
			// reset material
			SetColor						( 255,255,255 );
			SetColor2						( 0,0,0 );
			SetAlpha						( 1 );
			SetBlend						( 0 );
			
			// reset text
			SetStrokeColor					( 000,000,000 );
			SetStrokeSize					( 0 );
			SetFontSize						( 12 );
		}
		
		function Push2D(){
			return							[GetOrigin(), GetHandle(), GetScale(), GetRotation(),
											 GetColor(), GetColor2(), GetAlpha(), GetBlend(),
											 GetStrokeSize(),GetStrokeColor(), GetFontSize(), GetFont()];
			
		}
		
		function Pop2D(pStates){
			SetOrigin(pStates[0][0], pStates[0][1]);
			SetHandle(pStates[1][0], pStates[1][1]);
			SetScale(pStates[2][0], pStates[2][1]);
			SetRotation(pStates[3]);
			SetColor(pStates[4][0], pStates[4][1], pStates[4][2]);
			SetColor2(pStates[5][0], pStates[5][1], pStates[5][2]);
			SetAlpha(pStates[6]);
			SetBlend(pStates[7]);
			SetStrokeSize(pStates[8]);
			TGraphics.driver.strokeColor = pStates[9];
			SetFontSize(pStates[10]);
			SetFont(pStates[11]);
		}
		
	/** {WindowWidth}
	 * @function WindowWidth
	 * @return	{int} the width of the window
	 */
		function WindowWidth	()	{ return Math.max(window.innerWidth , document.documentElement.clientWidth ); };
		
	/** {WindowHeight}
	 * @function WindowHeight
	 * @return	{int} the height of the window
	 */
		function WindowHeight	()	{ return Math.max(window.innerHeight, document.documentElement.clientHeight);};
	
	
	
	
/* ========================================================================== */
/*								- TLIST/TLINK Class -						  */
/* ========================================================================== */
	
	/** {TLink}
	 * ------------------------------------------------------------------ *
	 * @class	TLink
	 * ------------------------------------------------------------------ *
	 * @constructor
	 * @param	{object} the object to attach
	 * @about	TLink are the "nodes" inserted in TList that holds an object
	 * ------------------------------------------------------------------ *
	 */
	var TLink = function ( pValue ) {
		this._Next		=	null;
		this._Prev		=	null;
		this._Value		=	pValue;
		return this;
	}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	value
	 * ------------------------------------------------------------------ *
	 * @return	{object} the object contained in the link
	 * ------------------------------------------------------------------ *
	 */
	TLink.prototype.value = function(){return this._Value;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	after
	 * ------------------------------------------------------------------ *
	 * @return	{TLink} the next link in the list after this one
	 * ------------------------------------------------------------------ *
	 */
	TLink.prototype.after = function(){return this._Next;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	before
	 * ------------------------------------------------------------------ *
	 * @return	{TLink} the previous link in the list before this one
	 * ------------------------------------------------------------------ *
	 */
	TLink.prototype.before = function(){return this._Prev;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	hasNext
	 * ------------------------------------------------------------------ *
	 * @return	{BOOLEAN} true if this link has an "after" link
	 * ------------------------------------------------------------------ *
	 */
	TLink.prototype.hasNext = function(){return this._Next != null;}


/* ========================================================================== */
	
	/** {TList}
	 * ------------------------------------------------------------------ *
	 * @class	TList
	 * ------------------------------------------------------------------ *
	 * @constructor
	 * @about	TList holds objects stored in TLink objects linked together
	 *        	to form a chain
	 * ------------------------------------------------------------------ *
	 */
	var TList = function ( ) {
		this._Head		=	null;
		this._Tail		=	null;
		this._Count		=	0;
		return this;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	firstLink
	 * ------------------------------------------------------------------ *
	 * @return	{TLink} the first link in the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.firstLink = function ( ) {
		return this._Head;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	lastLink
	 * ------------------------------------------------------------------ *
	 * @return	{TLink} the last link in the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.lastLink = function ( ) {
		return this._Tail;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	first
	 * ------------------------------------------------------------------ *
	 * @return	{object} the first object in the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.first = function ( ) {
		return this._Head!=null?this._Head._Value:null;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	last
	 * ------------------------------------------------------------------ *
	 * @return	{object} the last object in the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.last = function ( ) {
		return this._Tail!=null?this._Tail._Value:null;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	addLast
	 * ------------------------------------------------------------------ *
	 * @param	{object} pValue : the object to insert
	 * @return  {TLink} the new TLink created to store the object
	 * @about	insert a new object after the last one in the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.addLast = function ( pValue ) {
		var l_Link = new TLink(pValue);
		if(this._Tail==null){
			this._Tail	=	l_Link;
			this._Head	=	l_Link;
			this._Count	=	1;
			return l_Link;
		}
		l_Link._Prev	=	this._Tail;
		this._Tail._Next=	l_Link;
		this._Tail		=	l_Link;
		this._Count		++;
		return l_Link;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	addFirst
	 * ------------------------------------------------------------------ *
	 * @param	{object} pValue : the object to insert
	 * @return  {TLink} the new TLink created to store the object
	 * @about	insert a new object before the first one in the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.addFirst = function ( pValue ) {
		var l_Link = new TLink(pValue);
		if(this._Tail==null){
			this._Tail	=	l_Link;
			this._Head	=	l_Link;
			this._Count	=	1;
			return l_Link;
		}
		l_Link._Next	=	this._Head;
		this._Head._Prev=	l_Link;
		this._Head		=	l_Link;
		this._Count		++;
		return l_Link;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	insertBefore
	 * ------------------------------------------------------------------ *
	 * @param	{object} pValue : the object to insert
	 * @param	{TLink} pLink : the TLink we want the new object to be
	 *          inserted before
	 * @return  {TLink} the new TLink created to store the object
	 * @about	insert a new object just before the specified link
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.insertBefore = function ( pValue, pLink ) {
		if(this._Count==0){return this.addLast(pValue);}
		var l_Link		=	new TLink(pValue);
		if (pLink._Prev == null) {this._Head = l_Link;}
		else {l_Link._Prev=	pLink._Prev; pLink._Prev._Next = l_Link;}
		pLink._Prev		=	l_Link;
		l_Link._Next	=	pLink;
		this._Count		++;
		return l_Link;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	insertAfter
	 * ------------------------------------------------------------------ *
	 * @param	{object} pValue : the object to insert
	 * @param	{TLink} pLink : the TLink we want the new object to be
	 *          inserted after
	 * @return  {TLink} the new TLink created to store the object
	 * @about	insert a new object just after the specified link
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.insertAfter = function ( pValue, pLink ) {
		if(this._Count==0){return this.addLast(pValue);}
		var l_Link		=	new TLink(pValue);
		if (pLink._Next == null) {this._Tail = l_Link;}
		else {l_Link._Next=	pLink._Next; pLink._Next._Prev = l_Link;}
		pLink._Next		=	l_Link;
		l_Link._Prev	=	pLink;
		this._Count		++;
		return l_Link;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	removeLink
	 * ------------------------------------------------------------------ *
	 * @param	{TLink} pLink : the TLink to remove from the list
	 * @return  {TList} the list itthis
	 * @about	clears a TLink and removes it from the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.removeLink = function ( pLink ) {
		pLink._Value = null;
		if(this._Head==this._Tail){
			this._Head = null;
			this._Tail = null;
			this._Count = 0;
			return this;
		}
		
		if(pLink==this._Head){
			this._Head = this._Head._Next;
			this._Head._Prev = null;
		}else if(pLink==this._Tail){
			this._Tail = this._Tail._Prev;
			this._Tail._Next = null;
		}else{
			pLink._Prev._Next = pLink._Next;
			pLink._Next._Prev = pLink._Prev;
		}
		pLink._Next = null;
		pLink._Prev = null;
		this._Count --;
		return this;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	contains
	 * ------------------------------------------------------------------ *
	 * @param	{object} the object to check if belongs to the list
	 * @return	{BOOLEAN} true if the list contains the object
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.contains = function ( pObject ) {
		for(l_Lnk=this._Head; l_Lnk!=null; l_Lnk=l_Lnk._Next) {	if(l_Lnk._Value == pObject){return true}; }
		return false;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	remove
	 * ------------------------------------------------------------------ *
	 * @param	{object} pObject : the object to remove from the list
	 * @return  {TList} the list itthis
	 * @about	find the TLink that holds the object and removes it
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.remove = function ( pObject ) {
		for(l_Lnk=this._Head; l_Lnk!=null; l_Lnk=l_Lnk._Next) {	if(l_Lnk._Value == pObject){return this.removeLink(l_Lnk); } }
		return this;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	count
	 * ------------------------------------------------------------------ *
	 * @return	{BOOLEAN} the object count in the list
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.count = function ( ) {
		return this._Count;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	clear
	 * ------------------------------------------------------------------ *
	 * @return	{TList} the list itthis
	 * @about	releases all objects from the list.
	 * ------------------------------------------------------------------ *
	 */
	TList.prototype.clear = function ( ) {
		while (this._Count>0){
			this.removeLink(this._Head);
		}
		return this;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * - Static Calls -
	 * ------------------------------------------------------------------ *
	 */
	function ListAddLast(pList,pObject)		{ return pList.addLast(pObject); }
	function ListAddFirst(pList,pObject)	{ return pList.addFirst(pObject); }
	function ListInsertBefore(pList,pObj,pLink){ return pList.insertBefore(pObj,pLink); }
	function ListInsertAfter(pList,pObj,pLink){ return pList.insertAfter(pObj,pLink); }
	
	function ListFirst(pList)				{ return pList.first(); }
	function ListFirstLink(pList)			{ return pList.firstLink(); }
	function ListLast(pList)				{ return pList.last(); }
	function ListLastLink(pList)			{ return pList.lastLink(); }
	
	function ListRemove(pList,pObject)		{ return pList.remove(pObject); }
	function ListRemoveLink(pList,pLink)	{ return pList.removeLink(pLink); }
	
	function ListContains(pList,pObject)	{ return pList.contains(pObject); }
	function ListCount(pList)				{ return pList.count(); }
	function ListClear(pList)				{ return pList.clear(); }
	
	function NextLink(pLink)				{ return pLink.after(); }
	function PrevLink(pLink)				{ return pLink.before(); }
	function LinkValue(pLink)				{ return pLink.value(); }



/** {Maths}
 * @class Maths
 */
	var _CONV_DTR_	=	0.017453292519943295;
	var _CONV_RTD_	=	57.29577951308232;
	
	function Maths (){};
	
		function Min	(a,b)	{ return ((a<b) ? a : b); }
		function Max	(a,b)	{ return ((a>b) ? a : b); }
		function Clamp	(a,b,c)	{ return ( (a<b) ? b : ( (a>c) ? c : a) ); }
		function Ceil	(a)		{ return Math.ceil(a); }
		function Floor	(a)		{ return Math.floor(a); }
		function Round	(a)		{ return Math.round(a); }
		function Sgn	(a)		{ return ((a<0)?-1 : (a>0) ? 1 : 0); }
		
		function Sqr	(a)		{ return Math.sqrt(a); }
		function Pow	(a,b)	{ return Math.pow(a,b); }
		
		function Cos	(a)		{ return Math.cos(_CONV_DTR_*a); }
		function CosH	(a)		{ return Math.cosh(_CONV_DTR_*a); }
		function ACos	(a)		{ return Math.acos(a)*_CONV_RTD_; }
		function ACosH	(a)		{ return Math.acosh(a)*_CONV_RTD_; }
		function Sin	(a)		{ return Math.sin(_CONV_DTR_*a); }
		function SinH	(a)		{ return Math.sinh(_CONV_DTR_*a); }
		function ASin	(a)		{ return Math.asin(a)*_CONV_RTD_; }
		function ASinH	(a)		{ return Math.asinh(a)*_CONV_RTD_; }
		function Tan	(a)		{ return Math.tan(_CONV_DTR_*a); }
		function TanH	(a)		{ return Math.tanh(_CONV_DTR_*a); }
		function ATan	(a)		{ return Math.atan(a)*_CONV_RTD_; }
		function ATanH	(a)		{ return Math.atanh(a)*_CONV_RTD_; }
		function ATan2	(y,x)	{ return Math.atan2(y,x)*_CONV_RTD_; }
		
		function Byte	(a)		{ return ((parseInt(a)%256)+256)%256; }
		function Short	(a)		{ return ((parseInt(a) % 65536) + 65536) % 65536; }
		function Int	(a)		{ return parseInt(a); }
		function Float	(a)		{ return parseFloat(a); }
		
		function Abs	(a)		{ return Math.abs(a); }
		function Exp	(a)		{ return Math.exp(a); }
		function log	(a)		{ return Math.log(a); }
		
		function Rand	(a0,a1)	{
									if(arguments.length<1){
										a0 = -2147483647;
										a1 = 2147483647;
									}else if(arguments.length<2){
										a1 = a0;
										a0 = 0;
									};
									return parseInt( a0 + Math.floor(Math.random() * (a1-a0+.9999) ) );
								}
		function Rnd	(a0,a1)	{
									if(arguments.length<1){
										return Math.random();
									}else if(arguments.length<2){
										return Math.random()*a0;
									};
									return a0 + Math.random()*(a1-a0);
								}

  		function Lerp (a,b, r)	{ return a+(b-a)*r; }
  		

/* ========================================================================== */
/*								- Vector2 Class -							  */
/* ========================================================================== */
	
	/** {Vector2}
	 * ------------------------------------------------------------------ *
	 * @class Vector2
	 * ------------------------------------------------------------------ *
	 * @constructor
	 * ------------------------------------------------------------------ *
	 */
	var Vector2 = function ( pX=0.0, pY=0.0, pZ=0.0 ) {
		this.x = (pX===undefined?0.0:pX);
		this.y = (pY===undefined?0.0:pY);
		this.z = (pZ===undefined?0.0:pZ);
		return this;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function zero
	 * ------------------------------------------------------------------ *
	 * @return	{Vector2} a vector with coordinates at 0,0
	 * ------------------------------------------------------------------ *
	 */
	Vector2.zero				=	function ( )
		{return new Vector2(0.0,0.0);}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	copy
	 * ------------------------------------------------------------------ *
	 * @return	{Vector2} a new vector, copy of @this
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.copy		=	function ( )
		{var v = new Vector2(this.x,this.y); v.z=this.z; return v;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	assign
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2}
	 * @return	{Vector2} @this
	 * @about	sets all the components of @this as @pV
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.assign	=	function ( pV )
		{this.x = pV.x; this.y = pV.y; this.z = pV.z; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	set
	 * ------------------------------------------------------------------ *
	 * @param	{scalar} the new X component
	 * @param	{scalar} the new Y component
	 * @return	{Vector2} @this
	 * @about	sets the components of @this
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.set		=	function ( pX, pY )
		{this.x = pX; this.y = pY; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	setX
	 * ------------------------------------------------------------------ *
	 * @param	{scalar} the new X component
	 * @return	{Vector2} @this
	 * @about	sets the X component of @this
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.setX		=	function ( pX )
		{this.x = pX; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	setY
	 * ------------------------------------------------------------------ *
	 * @param	{scalar} the new Y component
	 * @return	{Vector2} @this
	 * @about	sets the Y component of @this
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.setY		=	function ( pY )
		{this.y = pY; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	add
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2} the vector to add to @this
	 * @return	{Vector2} @this += @pV
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.add		=	function ( pV )
		{this.x += pV.x; this.y += pV.y; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	sub
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2} the vector to subtract to @this
	 * @return	{Vector2} @this -= @pV
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.sub		=	function ( pV )
		{this.x -= pV.x; this.y -= pV.y; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	mul
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2} the vector @this is multiplid by
	 * @return	{Vector2} @this *= @pV
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.mul		=	function ( pV )
		{this.x *= pV.x; this.y *= pV.y; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	div
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2} the vector @this is divided by
	 * @return	{Vector2} @this /= @pV
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.div		=	function ( pV )
		{this.x /= pV.x; this.y /= pV.y; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	addScalar
	 * ------------------------------------------------------------------ *
	 * @param	{Float} the X component to add to @this.x
	 * @param	{Float} the Y component to add to @this.y
	 * @return	{Vector2} @this += [pX,pY]
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.addScalar	=	function ( pX, pY )
		{this.x += pX; this.y += pY; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	subScalar
	 * ------------------------------------------------------------------ *
	 * @param	{Float} the X component to subtract to @this.x
	 * @param	{Float} the Y component to subtract to @this.y
	 * @return	{Vector2} @this -= [pX,pY]
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.subScalar	=	function ( pX, pY )
		{this.x -= pX; this.y -= pY; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	mulScalar
	 * ------------------------------------------------------------------ *
	 * @param	{Float} the X component @this.x is multiplied by
	 * @param	{Float} the Y component @this.x is multiplied by
	 * @return	{Vector2} @this -= [pX,pY]
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.mulScalar	=	function ( pX, pY )
		{this.x *= pX; this.y *= pY; return this;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	divScalar
	 * ------------------------------------------------------------------ *
	 * @param	{Float} the X component @this.x is divided by
	 * @param	{Float} the Y component @this.y is divided by
	 * @return	{Vector2} @this -= [pX,pY]
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.divScalar	=	function ( pX, pY )
		{this.x /= pX; this.y /= pY; return this;}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	scale
	 * ------------------------------------------------------------------ *
	 * @param	{Float} the scale Factor all components of @this are multiplied by
	 * @return	{Vector2} @this *= pScale (with pScale as scalar)
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.scale		=	function ( pScale )
		{this.x *= pScale; this.y *= pScale; return this;}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	mag
	 * ------------------------------------------------------------------ *
	 * @return	{Float} the magnitude of @this
	 * @about	magnitude (ie length) is the norm of the vector ( N = |v| )
	 * @seealso: #length
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.mag		=	function ( )
		{return Sqr(this.x*this.x+this.y*this.y);}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	length
	 * ------------------------------------------------------------------ *
	 * @return	{Float} the length of @this
	 * @about	length is the norm of the vector ( N = |v| )
	 * 			this method just an alias for mag
	 * 			(depending on conventions, both are equally used
	 * 			by users so it's good to have both)
	 * @seealso	#mag
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.length	=	function ( )
		{return Sqr(this.x*this.x+this.y*this.y);}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	sqLength
	 * ------------------------------------------------------------------ *
	 * @return	{Float} the squared length of @this
	 * @about	usefull for fast distance test where
	 * 			the real distance is not required
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.sqLength	=	function ( )
		{return this.x*this.x+this.y*this.y;}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	dot
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2}
	 * @return	{Float} the dot product of (@this) . (V)
	 * @about	the dot product of two vectors returns the cosin of the angle
	 *        	between thoose two vectors
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.dot		=	function ( pV )
		{return this.x*pV.x+this.y*pV.y;}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	normalize
	 * ------------------------------------------------------------------ *
	 * @return	{Vector2} @this normalized
	 * @about	a normalized vector has a length of "1"
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.normalize	=	function ( )
		{return this.scale(1.0/this.mag());}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	normalized
	 * ------------------------------------------------------------------ *
	 * @return	{Float} a normalized copy of @this
	 * @about	a normalized vector has a length of "1"
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.normalized=	function ( )
		{return this.copy().scale(1.0/this.mag());}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	getX
	 * ------------------------------------------------------------------ *
	 * @return	{Float} the X component of @this
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.getX		=	function ( )
		{return this.x;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	getY
	 * ------------------------------------------------------------------ *
	 * @return	{Float} the Y component of @this
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.getY		=	function ( )
		{return this.y;}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	getZ
	 * ------------------------------------------------------------------ *
	 * @return	{String} a litteral string containing @this components
	 *          split with a comma
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.toString	=	function ( )
		{return "{x:"+this.x+", y:"+this.y+"}";}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	distance
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2}
	 * @return	{Float} the distance between 2 vectors
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.distance	=	function ( pV )
		{return Math.sqrt((this.x-pV.x)*(this.x-pV.x)+(this.y-pV.y)*(this.y-pV.y));}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	sqDistance
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2}
	 * @return	{Float} the distance between 2 vectors
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.sqDistance=	function ( pV )
		{return (this.x-pV.x)*(this.x-pV.x)+(this.y-pV.y)*(this.y-pV.y);}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	distancePoint
	 * ------------------------------------------------------------------ *
	 * @param	{Float} X coordinate of the point
	 * @param	{Float} Y coordinate of the point
	 * @return	{Float} the distance between the vector and coordinates
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.distancePoint = function ( pX, pY )
		{return Math.sqrt((this.x-pX)*(this.x-pX)+(this.y-pY)*(this.y-pY));}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	sqDistancePoint
	 * ------------------------------------------------------------------ *
	 * @param	{Float} X coordinate of the point
	 * @param	{Float} Y coordinate of the point
	 * @return	{Float} the distance between the vector and coordinates
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.sqDistancePoint = function ( pX, pY )
		{return (this.x-pX)*(this.x-pX)+(this.y-pY)*(this.y-pY);}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @method	lerp
	 * ------------------------------------------------------------------ *
	 * @param	{Vector2} start pos
	 * @param	{Vector2} end pos
	 * @param	{float} transition (from 0 to 1)
	 * @return	@this
	 * ------------------------------------------------------------------ *
	 */
	Vector2.prototype.lerp		=	function ( p1, p2, rate ) {
		this.x = p1.x + (p2.x-p1.x)*rate;
		this.y = p1.y + (p2.y-p1.y)*rate;
		return this;
	}


/* ========================================================================== *
 * {THook}
 * ========================================================================== *
 * @class	THook
 * @about	manage filtered events
 * ========================================================================== */
	
	var AllocHookId = function ( ) {
		if (AllocHookId._CURID==undefined){
			AllocHookId._CURID=0;
			AllocHookId._POOL = [];
			AllocHookId._POOL.push(null);
		}
		var l_List = new TList();
		AllocHookId._POOL.push(l_List);
		AllocHookId._CURID++;
		return AllocHookId._CURID;
	}
	
	var THook = function(pHookID, pCallBack, pObject) {
		this._CallBack = pCallBack;
		this._Object = pObject;
		this._HookID = pHookID;
		AllocHookId._POOL[pHookID].addLast(this);
		return this;
	}
	var AddHook = function (pHookId, pCallBack, pObject){
		return new THook(pHookId, pCallBack, pObject);
	}
	THook.Process = function (pHookID, pObject){
		var l_List = AllocHookId._POOL[pHookID];
		if (l_List.count()){
			var l_Link = l_List.firstLink();
			while(l_Link!=null){
				var l_Hook = l_Link.value();
				pObject = l_Hook._CallBack(l_Hook._Object, pObject);
				if (pObject==null){ return null; }
				l_Link = l_Link.after();
			}
		}
		return pObject;
	}
	
	
	
/* ========================================================================== *
 * {TEvent}
 * ========================================================================== *
 * @class	TEvent
 * @about	manage event queue
 * ========================================================================== */
	var TEvent = function ( pId, pX, pY, pSource, pData, pExtra ) {
		this.id		=	( ( (arguments.length<1) || (pId==undefined) )		? 0 : parseInt(pId) );
		this.x		=	( ( (arguments.length<2) || (pX==undefined) )		? 0 : parseInt(pX) );
		this.y		=	( ( (arguments.length<3) || (pY==undefined) )		? 0 : parseInt(pY) );
		this.source	=	( ( (arguments.length<4) || (pSource===undefined) )	? null: pSource );
		this.data	=	( ( (arguments.length<5) || (pData===undefined) )	? null: pData );
		this.extra	=	( ( (arguments.length<6) || (pExtra===undefined) )	? null: pExtra );
		return this;
	}
	
	var EmitEventHook = AllocHookId();
	
	TEvent.prototype.emit = function ( ) {
		// call functions suggested to filter EmitEventHook
		if (THook.Process(EmitEventHook, this)==null){return;}
		TEvent._List.addLast(this);
	}
	TEvent.prototype.toString = function ( ) {
		return	'id=\''+this.id+'\' '+
				'x=\''+this.x+'\' '+
				'y=\''+this.y+'\' '+
				'source=\''+this.source+'\' '+
				'data=\''+this.data+'\' '+
				'extra=\''+this.extra+'\'';
	}
	
 	TEvent.poll = function ( ) {
 		if(TEvent._Current != null)
 		{
 			var l = TEvent._Current;
 			TEvent._Current = TEvent._Current.after();
 			TEvent._List.removeLink(l);
 		}else{
 			TEvent._Current = TEvent._List.firstLink();
 		}
 		return (TEvent._Current!=null ? TEvent._Current.value() : null);
 	}
 	
	TEvent.init = function ( ) {
		if(TEvent._List===undefined){
			TEvent._List=new TList();
			TEvent._Current = null;
		};
	};
	TEvent.init ( );
	
	var CreateEvent	= function ( pId, pX, pY, pSource, pData, pExtra ) {
		return new TEvent(pId,pX,pY,pSource,pData,pExtra);
	}
	var EmitEvent	= function (ev)	{ ev.emit(); }
	var PollEvent	= function ()	{ return TEvent.poll();}
	var EventID		= function ()	{ return (TEvent._Current!=null?TEvent._Current.value().id:0); }
	var EventX		= function ()	{ return (TEvent._Current!=null?TEvent._Current.value().x:0); }
	var EventY		= function ()	{ return (TEvent._Current!=null?TEvent._Current.value().y:0); }
	var EventSource	= function ()	{ return (TEvent._Current!=null?TEvent._Current.value().source:null); }
	var EventData	= function ()	{ return (TEvent._Current!=null?TEvent._Current.value().data:null); }
	var EventExtra	= function ()	{ return (TEvent._Current!=null?TEvent._Current.value().extra:null); }
	var CurrentEvent= function ()	{ return TEvent._Current!=null ? TEvent._Current.value() : null; }
	
	var AddPolledEvent = function( pObject, pType, pCallback )
	{
		if (pObject == null || typeof(pObject) == 'undefined') return;
		if (pObject.addEventListener)	{ pObject.addEventListener(pType, pCallback, false);}
		else if (pObject.attachEvent)	{ pObject.attachEvent("on" + pType, pCallback);}
		else							{ pObject["on"+pType] = pCallback; }
	}
	
	var AllocUserEventId = function ( ) {
		if (AllocUserEventId._CURID==undefined){AllocUserEventId._CURID=0;}
		AllocUserEventId._CURID++;
		return AllocUserEventId._CURID;
	}
	
	
/* {TAnimSeq}
 * @about	a simple animation extractor
 */
 
	var AppendAnimation = function ( pEntity, pJSONNode ) {
		pJSONNode.forEach(function(el){
			var l_frames	=	new Array(el.to-el.from+1);
			var l_frame		=	0;
			for (l_frame =el.from; l_frame<=el.to; l_frame++){l_frames[l_frame-el.from]=l_frame;}
			if (el.frameRate===undefined){el.frameRate=20;}
			el.name = el.name.toLowerCase();
			pEntity.animations.add(el.name, l_frames, el.frameRate, el.loop===undefined?true:el.loop);
		});
	}
	

/** {InputHandler}
 * ------------------------------------------------------------------ *
 * @class	InputHandler
 * @about	handle inputs and manage a blitz-like easy to use interface
 * @note	touch events are managed as a mouse pointer + Left click.
 * ------------------------------------------------------------------ *
 */
TInputManager				=	function()
{
	
	TInputManager._LockMH	=	false;	// lock hit values, so it's not reset to 0 on request
	TInputManager._LockKH	=	false;	// 
	TInputManager._LockTH	=	false;	// 
	
	/**
	 * Mouse Position
	 */
	TInputManager._Mx		=	0;
	TInputManager._My		=	0;
	TInputManager._Mz		=	0;
	
	/**
	 * Mouse Moves
	 */
	TInputManager._VMx		=	0;
	TInputManager._VMy		=	0;
	TInputManager._VMz		=	0;
	
	/**
	 * Mouse Buttons
	 */
	TInputManager._MD		=	new Array();
	TInputManager._MH		=	new Array();
	TInputManager._LM		=	0;
	
	/**
	 * KeyBoard
	 */
	TInputManager._KD		=	new Array();
	TInputManager._KH		=	new Array();
	TInputManager._LK		=	0;
	TInputManager._LT		=	0;
	
	// Initialize values
	for (k=0; k<256; k++)
	{
		TInputManager._KD[k]=	false;
		TInputManager._KH[k]=	0;
	}
	
	for (k=0; k<8; k++)
	{
		TInputManager._MD[k]=	false;
		TInputManager._MH[k]=	0;
	}
	
	/**
	 * callback functions on input events
	 */
	TInputManager._onKD		=	function(pKey){
		if (TInputManager._KD[pKey.keyCode]==false){
			TInputManager._KD[pKey.keyCode] = true;
			TInputManager._KH[pKey.keyCode] ++;
			TInputManager._LK	=	pKey.keyCode;
		}
	};
	TInputManager._onKU		=	function(pKey){
		TInputManager._KD[pKey.keyCode] = false;
	};
	TInputManager._onMM		=	function(event){
		TInputManager._VMx	+=	event.clientX-TInputManager._Mx;
		TInputManager._VMy	+=	event.clientY-TInputManager._My;
		TInputManager._Mx	=	event.clientX;
		TInputManager._My	=	event.clientY;
	};
	TInputManager._onMW		=	function(event){
		event = window.event || event;
		var l_W = 0;
		if('wheelDelta' in event)
		{
			l_W = Sgn(event.wheelDelta);
		}else{
			l_W = Sgn(-event.detail);
		}
		TInputManager._VMz	=	l_W;
		TInputManager._Mz	+=	l_W;
	};
	TInputManager._onMD		=	function(pKey){
		var i = pKey.button;
		switch(pKey.button){
			case 1:
				if(TInputManager._MD[2]==false){
					TInputManager._MD[2] = true;
					TInputManager._MH[2]++;
					TInputManager._LM = 3;
				}
				break;
			case 2:
				if(TInputManager._MD[1]==false){
					TInputManager._MD[1] = true;
					TInputManager._MH[1]++;
					TInputManager._LM = 2;
				}
				break;
			default:
				if(TInputManager._MD[pKey.button]==false){
					TInputManager._MD[pKey.button] = true;
					TInputManager._MH[pKey.button] ++;
					TInputManager._LM = pKey.button+1;
				}
				break;
		}
	};
	TInputManager._onMU		=	function(pKey){
		switch(pKey.button){
			case 1:
				TInputManager._MD[2] = false; break;
			case 2:
				TInputManager._MD[1] = false; break;
			default:
				TInputManager._MD[pKey.button] = false;
		}
	};
	TInputManager._onTM = function(event){
		var t = event.changedTouches[0];
		TInputManager._VMx	+=	t.clientX-TInputManager._Mx;
		TInputManager._VMy	+=	t.clientY-TInputManager._My;
		TInputManager._Mx	=	t.clientX;
		TInputManager._My	=	t.clientY;
	};
	TInputManager._onTD		=	function(event){
		var t = event.changedTouches[0];
		TInputManager._MD[0]=	true;
		TInputManager._MH[0]++;
		TInputManager._LT = 1;
	};
	TInputManager._onTU		=	function(event){
		var touchobj = event.changedTouches[0];
		TInputManager._MD[0]=	false;
	};
	
	TInputManager._onCM		=	function(){
		return false;
	}
	
	TInputManager._flushKeyHit = function ( ) {
		var l_i=0; for (l_i=0;l_i<TInputManager._KH.length;l_i++){ TInputManager._KH[l_i]=0;}
		TInputManager._LK = 0;
	}
	TInputManager._flushKeyDown = function ( ) {
		var l_i=0; for (l_i=0;l_i<TInputManager._KD.length;l_i++){ TInputManager._KD[l_i]=false;}
	}
	TInputManager._flushKeys = function ( ) {
		TInputManager._flushKeyHit();
		TInputManager._flushKeyDown();
	}
	TInputManager._flushTouches = function ( ) {
		TInputManager._LT = 0;
	}
	
	TInputManager._flushMouseHit = function ( ) {
		var l_i=0; for (l_i=0;l_i<TInputManager._MH.length;l_i++){ TInputManager._MH[l_i]=0;}
		TInputManager._LM = 0;
	}
	TInputManager._flushMouseDown = function ( ) {
		var l_i=0; for (l_i=0;l_i<TInputManager._MD.length;l_i++){ TInputManager._MD[l_i]=0;}
	}
	TInputManager._flushMouseSpeed = function ( ) {
		TInputManager._VMx	=	0;
		TInputManager._VMy	=	0;
		TInputManager._VMz	=	0;
	}
	TInputManager._flushMouse = function ( ) {
		TInputManager._flushMouseHit();
		TInputManager._flushMouseDown();
		TInputManager._flushMouseSpeed();
	}
	
	// map input events.
	AddPolledEvent(document, 'keydown', 	TInputManager._onKD);
	AddPolledEvent(document, 'keyup',		TInputManager._onKU);
	
	AddPolledEvent(document, 'mousedown',	TInputManager._onMD);
	AddPolledEvent(document, 'mouseup',		TInputManager._onMU);
	AddPolledEvent(document, 'mousemove',	TInputManager._onMM);
	AddPolledEvent(document, 'mousewheel',	TInputManager._onMW);
	
	AddPolledEvent(document, 'touchstart',	TInputManager._onTD);
	AddPolledEvent(document, 'touchend',	TInputManager._onTU);
	AddPolledEvent(document, 'touchmove',	TInputManager._onTM);
}
	/** {SetKeyDownState}
	 * ------------------------------------------------------------------ *
	 * @function SetKeyDownState
	 * ------------------------------------------------------------------ *
	 * @param	{Integer}	ascii code
	 * @param	{BOOLEAN}	new state
	 * @about	manually set the "Down" state for a key
	 * ------------------------------------------------------------------ *
	 */
	var SetKeyDownState = function ( pKey, pState ) { TInputManager._KD[pKey] = pState; }
	
	
	/** {SetMouseDownState}
	 * ------------------------------------------------------------------ *
	 * @function SetMouseDownState
	 * ------------------------------------------------------------------ *
	 * @param	{Integer}	button code
	 * @param	{BOOLEAN}	new state
	 * @about	manually set the "Down" state for a mouse button
	 * ------------------------------------------------------------------ *
	 */
	var SetMouseDownState = function ( pBtn, pState ) { TInputManager._MD[pBtn-1] = pState; }
	
	
	/** {SetKeyState}
	 * ------------------------------------------------------------------ *
	 * @function SetKeyState
	 * ------------------------------------------------------------------ *
	 * @param	{Integer}	ascii code
	 * @param	{Integer}	new "hit" count
	 * @about	manually set the "hit" count for a key
	 * ------------------------------------------------------------------ *
	 */
	var SetKeyState = function ( pKey, pHitCount ) { TInputManager._KH[pKey] = pHitCount; }
	
	
	/** {SetMouseState}
	 * ------------------------------------------------------------------ *
	 * @function SetMouseState
	 * ------------------------------------------------------------------ *
	 * @param	{Integer}	button code
	 * @param	{Integer}	new "hit" count
	 * @about	manually set the "hit" count for a mouse button
	 * ------------------------------------------------------------------ *
	 */
	var SetMouseState = function ( pBtn, pHitCount ) { TInputManager._MH[pBtn-1] = pHitCount; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function GetKey
	 * ------------------------------------------------------------------ *
	 * @return	{INTEGER} the key code of the last key pressed (if any)
	 *                    returns 0 if no key got pressed.
	 * ------------------------------------------------------------------ *
	 */
	var GetKey = function ( ) {
		var l_LK = TInputManager._LK;
		if (TInputManager._LockKH==false){ TInputManager._LK = 0; }
		return l_LK;
	}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function GetMouse
	 * ------------------------------------------------------------------ *
	 * @return	{INTEGER} the button id of the last mouse button pressed
	 *                    returns 0 if no mouse button got pressed.
	 * ------------------------------------------------------------------ *
	 */
	var GetMouse = function ( ) {
		var l_LM = TInputManager._LM;
		if (TInputManager._LockMH==false){ TInputManager._LM = 0; }
		return l_LM;
	}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function GetTouch
	 * ------------------------------------------------------------------ *
	 * @return	{BOOLEAN} returns true if a touch event occured.
	 * ------------------------------------------------------------------ *
	 */
	var GetTouch = function ( ) {
		var l_LT = TInputManager._LT;
		if (TInputManager._LockTH==false){ TInputManager._LT = 0; }
		return l_LT;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function KeyDown
	 * ------------------------------------------------------------------ *
	 * @param	{int} the key code of the key (see Key Codes below)
	 * @return	{BOOLEAN} true if the key is pressed
	 * ------------------------------------------------------------------ *
	 */
	var KeyDown = function ( pKey ) { return TInputManager._KD[pKey]; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function KeyHit
	 * ------------------------------------------------------------------ *
	 * @param	{int} the key code of the key (see Key Codes below)
	 * @return	{int} the times the key has been pressed since the last call to this function
	 * ------------------------------------------------------------------ *
	 */
	var KeyHit = function ( pKey ) {
		var l_H = TInputManager._KH[pKey];
		if (TInputManager._LockKH==false){TInputManager._KH[pKey]=0;}
		return l_H;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseDown
	 * ------------------------------------------------------------------ *
	 * @param	{int} the button identifier (left=1, right=2, wheel=3)
	 * @return	{BOOLEAN} true if the button is pressed
	 * ------------------------------------------------------------------ *
	 */
	var MouseDown = function ( pBtn ) { return TInputManager._MD[pBtn-1]; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseHit
	 * ------------------------------------------------------------------ *
	 * @param	{int} the button identifier (left=1, right=2, wheel=3)
	 * @return	{int} the times the button has been pressed since the last call to this function
	 * ------------------------------------------------------------------ *
	 */
	var MouseHit = function ( pBtn ) {
		var l_H = TInputManager._MH[pBtn-1];
		if (TInputManager._LockMH==false){TInputManager._MH[pBtn-1]=0;}
		return l_H;
	}
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseX
	 * ------------------------------------------------------------------ *
	 * @return	{int} the current X position of the mouse of the window
	 * ------------------------------------------------------------------ *
	 */
	var MouseX = function ( ) { return GraphicsConvX(TInputManager._Mx); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseY
	 * ------------------------------------------------------------------ *
	 * @return	{int} the current Y position of the mouse of the window
	 * ------------------------------------------------------------------ *
	 */
	var MouseY = function ( ) { return GraphicsConvX(TInputManager._My); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseZ
	 * ------------------------------------------------------------------ *
	 * @return	{int} the current position of the Wheel of the mouse
	 * ------------------------------------------------------------------ *
	 */
	var MouseZ = function ( ) { return TInputManager._Mz; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseXSpeed
	 * ------------------------------------------------------------------ *
	 * @return	{int} the X distance the mouse travelled since last call to this function
	 * ------------------------------------------------------------------ *
	 */
	var MouseXSpeed = function ( ) { var l = TInputManager._VMx;TInputManager._VMx = 0;return l; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseYSpeed
	 * ------------------------------------------------------------------ *
	 * @return	{int} the Y distance the mouse travelled since last call to this function
	 * ------------------------------------------------------------------ *
	 */
	var MouseYSpeed = function ( ) { var l = TInputManager._VMy;TInputManager._VMy = 0;return l; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function MouseZSpeed
	 * ------------------------------------------------------------------ *
	 * @return	{int} the number of increment the wheel made since the last call to this function
	 * ------------------------------------------------------------------ *
	 */
	var MouseZSpeed = function ( ) { var l = TInputManager._VMz;TInputManager._VMz = 0;return l; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushKeyHit
	 * ------------------------------------------------------------------ *
	 * @about	flush keyboard hit events
	 * ------------------------------------------------------------------ *
	 */
	var FlushKeyHit = function ( ) { TInputManager._flushKeyHit(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushKeyDown
	 * ------------------------------------------------------------------ *
	 * @about	flush keyboard down states
	 * ------------------------------------------------------------------ *
	 */
	var FlushKeyDown = function ( ) { TInputManager._flushKeyDown(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushKeys
	 * ------------------------------------------------------------------ *
	 * @about	flush keyboard events
	 * ------------------------------------------------------------------ *
	 */
	var FlushKeys = function ( ) { TInputManager._flushKeys(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushTouches
	 * ------------------------------------------------------------------ *
	 * @about	flush touch events
	 * ------------------------------------------------------------------ *
	 */
	var FlushTouches = function ( ) { TInputManager._flushTouches(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushMouseHit
	 * ------------------------------------------------------------------ *
	 * @about	flush Mouse hit events
	 * ------------------------------------------------------------------ *
	 */
	var FlushMouseHit = function ( ) { TInputManager._flushMouseHit(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushMouseDown
	 * ------------------------------------------------------------------ *
	 * @about	flush Mouse down states
	 * ------------------------------------------------------------------ *
	 */
	var FlushMouseDown = function ( ) { TInputManager._flushMouseDown(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushMouseSpeed
	 * ------------------------------------------------------------------ *
	 * @about	flush Mouse speeds (reset mouse velocities on x,y, and wheel)
	 * ------------------------------------------------------------------ *
	 */
	var FlushMouseSpeed = function ( ) { TInputManager._flushMouseSpeed(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function FlushMouse
	 * ------------------------------------------------------------------ *
	 * @about	flush Mouse events
	 * ------------------------------------------------------------------ *
	 */
	var FlushMouse = function ( ) { TInputManager._flushMouse(); }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function LockMouseHit
	 * ------------------------------------------------------------------ *
	 * @about	lock mouse hit values so they are not reset when requested
	 * ------------------------------------------------------------------ *
	 */
	var LockMouseHit = function () { TInputManager._LockMH = true; }
	/**
	 * ------------------------------------------------------------------ *
	 * @function UnlockMouseHit
	 * ------------------------------------------------------------------ *
	 * @about	cf inverse of LockMouseHit
	 * ------------------------------------------------------------------ *
	 */
	var UnlockMouseHit = function () { TInputManager._LockMH = false; }
	/**
	 * ------------------------------------------------------------------ *
	 * @function LockKeyHit
	 * ------------------------------------------------------------------ *
	 * @about	lock key hit values so they are not reset when requested
	 * ------------------------------------------------------------------ *
	 */
	var LockKeyHit = function () { TInputManager._LockKH = true; }
	/**
	 * ------------------------------------------------------------------ *
	 * @function UnlockKeyHit
	 * ------------------------------------------------------------------ *
	 * @about	cf inverse of LockKeyHit
	 * ------------------------------------------------------------------ *
	 */
	var UnlockKeyHit = function () { TInputManager._LockKH = false; }
	
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function LockTouchHit
	 * ------------------------------------------------------------------ *
	 * @about	lock touch values so they are not reset when requested
	 * ------------------------------------------------------------------ *
	 */
	var LockTouchHit = function () { TInputManager._LockTH = true; }
	/**
	 * ------------------------------------------------------------------ *
	 * @function UnlockTouchHit
	 * ------------------------------------------------------------------ *
	 * @about	cf inverse of LockTouchHit
	 * ------------------------------------------------------------------ *
	 */
	var UnlockTouchHit = function () { TInputManager._LockTH = false; }
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function DisableContextMenu
	 * ------------------------------------------------------------------ *
	 * @about	disable the browser menu on right click
	 *			so we can use the right click as a standard mouse button
	 * ------------------------------------------------------------------ *
	 */
	var DisableContextMenu = function ( ) { document.oncontextmenu	=	TInputManager._onCM; }
	
	
	/** {Key Codes}
	 * ------------------------------------------------------------------ *
	 * Key Codes
	 * ------------------------------------------------------------------ *
	 */
		var KEY_ESCAPE		=	27;
		
		var KEY_LEFT		=	37; // arrow : left
		var KEY_UP			=	38; // arrow : up
		var KEY_RIGHT		=	39; // arrow : right
		var KEY_DOWN		=	40; // arrow : down
		
		var KEY_SPACE		=	32;
		var KEY_ENTER		=	13;
		var KEY_LSHIFT		=	16; // shift
		var KEY_RSHIFT		=	16;
		var KEY_ALT			=	18;	// Alt
		var KEY_ALTGR		=	18;
		var KEY_LCONTROL	=	92; // Ctrl
		var KEY_RCONTROL	=	93;
		var KEY_LCOMMAND	=	17;	// Cmd
		var KEY_RCOMMAND	=	17;
		
		var KEY_TAB			=	9;
		var KEY_CAPS		=	20;	// Caps-Lock
		var KEY_VERNUM		=	12; // Num-Lock
		
		var KEY_MULTIPLY	=	106;// *
		var KEY_PLUS		=	107;// +
		var KEY_SUBTRACT	=	109;// -
		var KEY_DIVIDE		=	111;// /
		
		var KEY_0			=	48; // Numbers
		var KEY_1			=	49;
		var KEY_2			=	50;
		var KEY_3			=	51;
		var KEY_4			=	52;
		var KEY_5			=	53;
		var KEY_6			=	54;
		var KEY_7			=	55;
		var KEY_8			=	56;
		var KEY_9			=	57;
		
		var KEY_A			=	65; // Chars
		var KEY_B			=	66;
		var KEY_C			=	67;
		var KEY_D			=	68;
		var KEY_E			=	69;
		var KEY_F			=	70;
		var KEY_G			=	71;
		var KEY_H			=	72;
		var KEY_I			=	73;
		var KEY_J			=	74;
		var KEY_K			=	75;
		var KEY_L			=	76;
		var KEY_M			=	77;
		var KEY_N			=	78;
		var KEY_O			=	79;
		var KEY_P			=	80;
		var KEY_Q			=	81;
		var KEY_R			=	82;
		var KEY_S			=	83;
		var KEY_T			=	84;
		var KEY_U			=	85;
		var KEY_V			=	86;
		var KEY_W			=	87;
		var KEY_X			=	88;
		var KEY_Y			=	89;
		var KEY_Z			=	90;
	
	
/** {Extras}
 * ------------------------------------------------------------------ *
 * - Extras -
 * ------------------------------------------------------------------ *
 */
 	
	/** {Extends}
	 * ------------------------------------------------------------------ *
	 * @function Extends
	 * ------------------------------------------------------------------ *
	 * @param	{Class constructor} source
	 * @param	{Class constructor} destination
	 * @about	simulate POO heritage
	 *        
	 *        	var TBaseClass = function() {
	 *        		this._text = "blablabla";
	 *        	}
	 *        	
	 *        	Object.defineProperty(TBaseClass, 'text', {get:function(){
	 *        		return "Text='"+this._text+"'";
	 *        	}})
	 *        	
	 *        	var TExtClass = Extends(TBaseClass, function(){
	 *        		Super(this); // call super constructor
	 *        		this._text += " and some more blas ..."
	 *        		return this;
	 *        	})
	 *        	
	 *        	var l_Instance = new TextClass();
	 *        	// extends also extends methods/properties/getters...
	 *        	console.log(l_Instance.text);
	 * ------------------------------------------------------------------ *
	 */
		var Extends = function ( s, d ) {
			d.prototype=Object.create(s.prototype);
			d.prototype.constructor=d;
			d.prototype.super=s.prototype;
			d.prototype.SuperClass=s;
			return d;
		}
	       
	
	/** {Super}
	 * ------------------------------------------------------------------ *
	 * @function Super
	 * ------------------------------------------------------------------ *
	 * @about	call the super constructor of an extended class
	 * ------------------------------------------------------------------ *
	 */
	var Super = function ( pInstance ) {
		var result = pInstance.SuperClass.prototype.constructor.apply(pInstance, Array.prototype.slice.call(arguments, 1));
		return (result !== null && typeof result === 'object') ? result : pInstance;
	}
	
	
	/** {MilliSecs}
	 * ------------------------------------------------------------------ *
	 * @function MilliSecs
	 * ------------------------------------------------------------------ *
	 * @return	{Integer} current time in ms
	 * ------------------------------------------------------------------ *
	 */
	var MilliSecs = function ( ) { return new Date().getTime(); }
	
	
	/*
	 * ------------------------------------------------------------------ *
	 * @function ClearCache
	 * ------------------------------------------------------------------ *
	 * @about	manually Clear Cache (must be called before loading data ^^)
	 *        	don't call this without a condition (a button ... or else)
	 *        	else it will reload indefinitely the page ^^
	 * ------------------------------------------------------------------ *
	 */
	var ClearCache = function ( ) {
		window.location.reload(true);
	}
	
	
	
	
	
	/**
	* Check which OS is game running on.
	*/
	var CheckWP = function () {
		if (/Windows Phone/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent)) { return true; }
		return false;
	}
	
	/**
	* Check which OS is game running on.
	*/
	var CheckMobile = function () {
		return TGraphics.IsMobileDevice();
	}
	

// manage cookies
function CreateCookie ( pName, pValue, pDays ) {
	if (pDays) {
		var date = new Date();
		date.setTime(date.getTime()+(pDays*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = pName+"="+pValue+expires+"; path=/";
}

function ReadCookie(pName) {
	var nameEQ = pName + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function DeleteCookie(pName) {
	CreateCookie(pName,"",-1);
}


var TDebugger = function(){
	TDebugger._Enabled = true;
}

function DebugLog(pText){
	if ((TDebugger._Enabled==undefined) || (TDebugger._Enabled==true) ){ console.log(pText); }
}
function EnableDebug(pEnable){
	TDebugger._Enabled = pEnable;
}

function Interpolation(value, end, step = 10*3){
	var a_Cur = value;
	var check = false;
	if (a_Cur != end){
		a_Cur += (end - a_Cur) / (step);
		if (Abs(a_Cur - end) < 0.001){
			a_Cur = end;
			check = true;
		}
	}
	return [Clamp(a_Cur,0.0,1.0), check];
}
var EVENT_SEQUENCESTART			=	AllocUserEventId();
var EVENT_SEQUENCEEND			=	AllocUserEventId();
var EVENT_SEQUENCERESTART		=	AllocUserEventId();
var EVENT_SEQUENCESTARTCALLBACK	=	AllocUserEventId();
var EVENT_SEQUENCEENDCALLBACK	=	AllocUserEventId();
var EVENT_SEQUENCERESTART		=	AllocUserEventId();

	/** {TSequencer}
	 * ------------------------------------------------------------------ *
	 * @class	TSequencer
	 * ------------------------------------------------------------------ *
	 * @about		1/ create a new sequencer using the constructor
	 * 				-----------------------------------------------------
	 *          	
	 * 					var mySequencer = new TSequencer( );
	 * 				
	 * 				2/ you then add to the sequencer like this:
	 * 				-----------------------------------------------------
	 * 					mySequencer.add( MySeq, 2000);
	 * 					// where 2000 is the length of the sequence
	 * 				
	 * 				/?\ Sequence objects are defined like this:
	 * 				-----------------------------------------------------
	 * 				var MySeq = {
	 * 					start:function ( [pContext=null] ){
	 * 						// @pContext is the parameter object you pass
	 * 						// to the mySequencer.start method
	 * 						
	 * 						// [...] do your stuff here.
	 * 					},
	 * 					
	 * 					update:function ( pRate, [pContext=null] ){
	 * 						// all the stuff to do on update
	 * 						// use "pRate" to interpolate your sequence
	 * 						// pRate is a time value ranged from 0 to 1
	 * 						// where 0 is the time at start
	 * 						// and 1 is the time at end
	 * 					},
	 * 					
	 * 					stop:function ( [pContext=null] ){
	 * 						// stuff to do when sequence reaches its very end
	 * 					}
	 * 				}
	 * 				
	 * 				2-bis/ you can then define a full animation like this
	 * 				-----------------------------------------------------
	 * 					
	 * 					var mySequencer = new TSequencer();
	 * 					mySequencer.add( Seq1, 1000);
	 * 					mySequencer.add( Seq2, 500);
	 * 					mySequencer.add( Seq3, 2000);
	 * 					mySequencer.add( Seq4, 100);
	 * 					mySequencer.start( {'some':'parameters',
	 * 										'if':'required'} );
	 * 				    
	 * 				    in this case the sequencer will run
	 * 				 	the 4 sequences the one after the other.
	 * ------------------------------------------------------------------ *
	 */
		var TSequencer = function ( pName='', pContext=null ){
			if(TSequencer.List===undefined){
				TSequencer.reset();
			};
			
			// add this effect to the global list.
			TSequencer.List.addLast(this);
			
			// 0 = normal (one sequence)
			// 1 = loop (return to step 0 after each sequence end)
			this._Mode				=	0;
			// for loop sequence, restart sequence at this step instead of "0"
			this._RepeatStep		=	0;
			
			// timer
			this._Time				=	0;//MilliSecs();
			
			// step = "-1" : disabled, by default.
			// first step is the step "0"
			this._Step				=	-1;
			this._Paused			=	false;
			this._WaitForKey		=	-1;
			
			// if a character is required for the sequence
			this._Context			=	pContext;
			
			// length of each step.
			this._Length			=	[];
			
			// list of callbacks to run on start/update/end of each steps
			this._Sequences			=	[];
			
			this._StartCallBack		=	null;
			this._EndCallBack		=	null;
			this._CallBackContext	=	null;
			
			this._Name				=	pName;
			return this;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @property	length
		 * ------------------------------------------------------------------ *
		 * @about		length in millisecondes of all sub-sequences
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty(TSequencer.prototype, 'length'	, {get:function()
		{var l = 0, s = 0; for (s=0; s<this._Length.length; s++){ l += this._Length[s]; };return l;}
		})
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @property	time
		 * ------------------------------------------------------------------ *
		 * @about		current time of the current step of @this sequencer
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty(TSequencer.prototype, 'time'		, {get:function(){return this._Time;}})
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @property	step
		 * ------------------------------------------------------------------ *
		 * @about		current step of @this sequencer
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty(TSequencer.prototype, 'step'		, {get:function(){return this._Step;}})
			
			
		/**
		 * ------------------------------------------------------------------ *
		 * @property	sequence
		 * ------------------------------------------------------------------ *
		 * @about		current sequence of the current step of @this sequencer
		 *         		this is the user defined sequence class object
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty(TSequencer.prototype, 'sequence'	, {
			get:function(){
				return (this._Step>=0 && this._Step<this._sequences.length) ?
					this._sequences[this._Step] : null;
			}
		})
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @property	rate
		 * ------------------------------------------------------------------ *
		 * @about		current time converted to a ranged [0.0, 1.0] value
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty(TSequencer.prototype, 'rate'		, {
			get:function(){
				return (this._Step>=0 && this._Step<this._sequences.length) ?
					this._Time/this._Length[this._Step] : 1;
			}
		})
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @property	paused
		 * ------------------------------------------------------------------ *
		 * @return		{BOOLEAN} true if sequencer is paused
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty(TSequencer.prototype, 'paused'		, {
			get:function(){ return (this._Paused==true?true:false); }
		})
		
		
		TSequencer.prototype.setCallBacks = function (pStart=undefined, pEnd=undefined, pContext=undefined){
			if (pStart!=undefined)		{ this._StartCallBack = pStart; }
			if (pEnd!=undefined)		{ this._EndCallBack = pEnd; }
			if (pContext!=undefined)	{ this._CallBackContext=pContext; }
		}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @function	reset	
		 * ------------------------------------------------------------------ *
		 * @about		releases all sequencers (if any).
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.reset = function (){
			if ((TSequencer.List!=null) && (TSequencer.List!=undefined)){
				var l_Lnk = TSequencer.List.firstLink();
				while (l_Lnk!=null){
					var l_Seq = l_Lnk.value();
					l_Lnk = l_Lnk.after();
					l_Seq.release();
				}
				TSequencer.List.clear();
			}else{
				TSequencer.List = new TList();
			}
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	add
		 * ------------------------------------------------------------------ *
		 * @param	{Sequence} pSequence a sequence class (see constructor doc)
		 * @param	{Integer}	Length (in ms) of the sequence to play
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.prototype.add = function(pSequence, pLength){
			this._Sequences			.push(pSequence);
			this._Length			.push(pLength);
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	release
		 * ------------------------------------------------------------------ *
		 * @about	releases a sequencer and removes it from global list
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.prototype.release = function ( ) {
			this._Step				=	-1;
			this._Context			=	null;
			this._Sequences			=	null;
			this._Length			=	null;
			TSequencer.List.remove(this);
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private} _nextStep
		 * ------------------------------------------------------------------ *
		 * @about	increment step and run callbacks (if any)
		 *        	ext.stop callback is run before increment
		 *        	ext.start is called after.
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.prototype._nextStep = function ( ) {
			// close (run callback "stop") the previous sequence
			if((this._Step>=0)
			&& (this._Sequences.length>=this._Step)
			&& (this._Sequences[this._Step]!=null)
			&& (this._Sequences[this._Step].stop!=null) )
			{
				this._Sequences[this._Step].stop(this._Context);
			}
			
			// increment sequence step
			this._Step	++;
			//this._Time				=	MilliSecs();
			this._Time				=	0;
			
			// run "start" callback for the new sequence
			if((this._Sequences.length>=this._Step)
			&& (this._Sequences[this._Step]!=null)
			&& (this._Sequences[this._Step].start!=null) )
			{
				this._Sequences[this._Step].start(this._Context);
			}
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	start
		 * ------------------------------------------------------------------ *
		 * @param	[{Object}]		an optional object if required.
		 *                      	this object is passed to the
		 *                      	start/update/stop callbacks.
		 * @about	enables this sequencer and get it ready to start the first
		 *			     			sequence
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.prototype.start = function ( pContext=null ) {
			this					.stop ( );
			if ((pContext!=null) && (pContext!=undefined)) {
				this._Context	=	pContext;
			}
			this._nextStep();
			if (this._StartCallBack!=null){
				CreateEvent(EVENT_SEQUENCESTARTCALLBACK,0,0,this,this._Context).emit();
				this._StartCallBack(this._CallBackContext);
			}else{
				CreateEvent(EVENT_SEQUENCESTART,0,0,this,this._Context).emit();
			}
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	stop
		 * ------------------------------------------------------------------ *
		 * @about	manually stop this sequencer
		 * 			also reset current sequencer step.
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.prototype.stop = function ( ) {
			this._Context		=	null;
			this._Step			=	-1;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	pause
		 * ------------------------------------------------------------------ *
		 * @about	manually pause this sequencer
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.prototype.pause = function ( pWaitKey=-1, pReplaceTme=undefined ) {
			this._Paused		=	true;
			this._WaitForKey	=	pWaitKey;
			if (pReplaceTme!=undefined){
				l_Seq._Time = pReplaceTme;
			}
			FlushKeys();
			FlushMouse();
			FlushTouches();
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	resume
		 * ------------------------------------------------------------------ *
		 * @about	manually pause this sequencer
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.prototype.resume = function ( ) {
			this._Paused		=	false;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @function Update
		 * ------------------------------------------------------------------ *
		 * @param	{Float}			pGame		Phaser.game context 
		 * @param	{Float}			pCoef		time factor
		 * @about	update all active sequences.
		 * ------------------------------------------------------------------ *
		 */
		TSequencer.Update = function ( pGame, pCoef ) {
			if(TSequencer.List===undefined){
				TSequencer.reset();
			};
			
			var l_Elapsed		=	parseFloat(pCoef * 1000.0) / __LOOP_FPS__;
			
			while ( l_Elapsed > 0 )
			{
				var l_DT		=	Min(l_Elapsed,25);
				l_Elapsed		-=	l_DT;
				
				var l_Lnk = TSequencer.List.firstLink();
				while (l_Lnk!=null){
					var l_Seq = l_Lnk.value();
					l_Lnk = l_Lnk.after();
					
					if ( l_Seq._Step >= 0 ) {
						
						if (l_Seq._Paused==true){
							switch(l_Seq._WaitForKey){
								case -1:
									break;
									
								case 'any':
									if (GetKey()>0){ l_Seq.resume(); }
									if (GetMouse()>0){ l_Seq.resume(); }
									if (GetTouch()>0){ l_Seq.resume(); }
									break;
									
								default:
									if (GetKey()==l_Seq._WaitForKey){ l_Seq.resume(); }
									break;
							}
						}
						
						if (l_Seq._Paused==false){
							// update fx timer
							// convert time to step rate (from 0 to 1)
							l_Seq._Time	+=	l_DT;
						}
						
						var l_Rate	=	Clamp( l_Seq._Time / l_Seq._Length[l_Seq._Step], 0, 1 );
						//var l_Rate	=	Clamp((MilliSecs()-l_Seq._Time)/l_Seq._Length[l_Seq._Step], 0, 1);
						
						// update l_Seq.step
						if((l_Seq._Step>=0)
						&& (l_Seq._Sequences.length>=l_Seq._Step)
						&& (l_Seq._Sequences[l_Seq._Step]!=null)
						&& (l_Seq._Sequences[l_Seq._Step].update!=null) )
						{
							l_Seq._Sequences[l_Seq._Step].update(l_Rate, l_Seq._Context);
						}
						
						// detect step end.
						if ( l_Rate >= 1 ) {
							
							if (l_Seq._Step<l_Seq._Sequences.length){
								
								l_Seq._nextStep();
								if (l_Seq._Step==l_Seq._Sequences.length || l_Seq._Step<0){
									if (l_Seq._EndCallBack!=null){
										CreateEvent(EVENT_SEQUENCEENDCALLBACK,0,0,l_Seq,l_Seq._Context).emit();
										l_Seq._EndCallBack(l_Seq._CallBackContext);
									}else{
										CreateEvent(EVENT_SEQUENCEEND,0,0,l_Seq,l_Seq._Context).emit();
									}
								}
							}else{
								if (l_Seq._EndCallBack!=null){
									CreateEvent(EVENT_SEQUENCEENDCALLBACK,0,0,l_Seq,l_Seq._Context).emit();
									l_Seq._EndCallBack(l_Seq._CallBackContext);
								}else{
									CreateEvent(EVENT_SEQUENCEEND,0,0,l_Seq,l_Seq._Context).emit();
								}
								switch(l_Seq._Mode){
									case 0:
										l_Seq._Step = -1;
										break;
										
									case 1:
										l_Seq._Step = l_Seq._RepeatStep;
										CreateEvent(EVENT_SEQUENCERESTART,0,0,l_Seq,l_Seq._Context).emit();
										break;
								}
							}
						}
					}
				}
			}
		}
	
var __LOOP_FPS__			=	60;
var __FRAME_FPS__			=	20;
var __FRAME_TIME__			=	parseFloat(1000.0/__FRAME_FPS__);

var SCORE_HEIGHT	=	14;

// world size in meters
var CONV_METERS_TO_PIXEL	=	75 / 1.75;
var CONV_PIXEL_TO_METERS	=	1.0/CONV_METERS_TO_PIXEL; // 75 pixels = 1.75m

// 75 pixels = 1m75
// console.log("1 km = "+(1000 * CONV_METERS_TO_PIXEL)+" pixels" );


/* ========================================================================== */
/*								- Static TParam -							  */
/* ========================================================================== */

	/** {TParam}
	 * ------------------------------------------------------------------ *
	 * @class	{Private - Static} TParam
	 * ------------------------------------------------------------------ *
	 * @constructor {Static}
	 * @about	contains global parameters to setup the application
	 * 			getters are supplied in the TGame class.
	 * ------------------------------------------------------------------ *
	 */
	var TParam = function()
	{			
		// Enable DebugLog command (or not)
			new TDebugger();
			EnableDebug(false);
			
		// All those properties are private to the class
		// use methods to interact !
		
		// aspect of the game window 
			this._Ratio				=	16/9;
			
		// height/width definition
			this._ResP				=	380;
			this._ResW				=	this._ResP * this._Ratio;
			
		// resolution for the game
			this._W_Res				=	this._ResW;
			this._H_Res				=	this._ResP;
			
			/*
			// real windows size
			var l_RealW				=	GraphicsWidth();
			var l_RealH				=	GraphicsHeight();
			var l_RealR				=	parseFloat(l_RealW)/l_RealH;
			
			if (l_RealR>this._Ratio) {
				// this will reduice the viewport in height ...
				this._H_Res			=	this._W_Res / l_RealR;
				
			} else if (l_RealR<this._Ratio) {
				// this ratio will increase top and bottom black bands
				this._W_Res			=	this._H_Res * l_RealR;
			}
			*/
			
			/*
			if (l_RealW<this._W_Res){
				
				this._H_Res			=	l_RealW * 9 / 16;
				this._W_Res			=	l_RealW;
			}
			
			this._W_Res				=	GraphicsWidth() * this._H_Res / GraphicsHeight();//GraphicsWidth();
			this._W_Res				=	Max(this._W_Res, this._ResP*this._Ratio);
		
		// Device running the game is a mobile device ... or not
		if (TGraphics.IsMobileDevice()){
			this._ResP				=	320;
			this._H_Res				=	this._ResP;
			this._Ratio				=	WindowWidth()/WindowHeight();
			this._W_Res				=	this._H_Res * this._Ratio;//GraphicsWidth() * this._H_Res / GraphicsHeight();
		}
		*/
		
		this._Zoom					=	this._H_Res/this._ResP;
		TGraphics.VirtualResolution		( this._W_Res, this._H_Res );
		
		// world boundaries
		this._Bound					=	[new Vector2(-50, 0),new Vector2(5000, this._H_Res)];
		
		// size of the game window
		this._Screen				=	new Vector2(this._W_Res, this._H_Res);
		
		// player can walk up and down between this range
		this._YGround				=	new Vector2(273, 295);
		this._YGround3D				=	new Vector2(0, 256*.25);
		this._YRoad					=	this._YGround-3; // offset for objects front of the walls
		
		// target distance is the maximum distance to allow automatic travel to a guy (to catch and hold him)
		this._Target_Tolerance		=	 32*4;	// 4 cells
		
		// catch distance tolerance is the maximum distance allowed to catch and hold a guy 
		this._Catch_Tolerance		=	 32;	// 1 cells
		
		// distance enemies can touch you
		this._Touch_Tolerance		=	10;		// if you can touch them, they can touch you too ... fair enough.
		
		this._Tolerance_Factor		=	0.25;
		
		// Y scale is lower than X'
		this._FactorY				=	(this._YGround.y-this._YGround.x)/
										(this._YGround3D.y-this._YGround3D.x);
		
		// base velocity for Y axis
		this._Vel_Y					=	2.0;
		
		// Gravity for thrown objects
		this._Gravity				=	2.1;
		this._FrictionZ				=	0.04;
		this._FrictionItemX			=	0.02;
		this._FrictionItemY			=	0.01;
		
		// factor for scale of sprite on the back side of the pavement
		// it's also the scale factor for gameplay mode 1 for characters.
		//this._DepthFactor			=	0.90;
		this._DepthFactor			=	1;
		
		// maps
		this._maps_count			=	0;
		this._mapdata				=	[];
		this._mapdata_file			=	[];
		this._mapdata_id			=	[];
		this._mapdata_guid			=	[];
		
		// scenari (motions)
		this._motion_count			=	0;
		this._motion				=	[];
		this._motion_file			=	[];
		this._motion_id				=	[];
		this._motion_name			=	[];
		this._motion_guid			=	[];
		
		// players (names and sequences)
		this._players_count			=	0;
		this._players_name			=	[];
		this._players_seqs			=	[];
		
		// characters array (names and sequences)
		this._characters_count		=	0;
		this._characters_name		=	[];
		this._characters_level		=	[];
		this._characters_color0		=	[];
		this._characters_color1		=	[];
		this._characters_pseudo		=	[];
		this._characters_seqs		=	[];
		this._characters_bills		=	[];
		this._characters_template	=	[];
		this._bills_values			=	[5,10,20,50,100,200,500];
		
		// screen effects
		this._ScreenFader			=	null;
		this._ScreenFilter			=	null;
		this._ScreenBands			=	null;
		
		// main ambiant colors
		this._AMBIENT_0				=	[200,180,250];
		this._AMBIENT_1				=	[255,070,010];
		this._AMBIENT_2				=	[220,245,255];
		
		// Sounds/Musics Volume
		this._MASTER_VOLUME			=	0.30;//0.30;
		this._MUSIC_VOLUME			=	0.60;
		this._FX_VOLUME				=	1.00;
		this._AMBIENT_VOLUME		=	0.50;
		
		var l_CookieVol				=	ReadCookie("MASTER_VOLUME");
		var l_CookieVolM			=	ReadCookie("MUSIC_VOLUME");
		var l_CookieVolF			=	ReadCookie("FX_VOLUME");
		var l_CookieVolA			=	ReadCookie("AMBIENT_VOLUME");
		
		if (l_CookieVol!=null)			{this._MASTER_VOLUME = l_CookieVol;}
		if (l_CookieVolM!=null)			{this._MUSIC_VOLUME = l_CookieVolM;}
		if (l_CookieVolF!=null)			{this._FX_VOLUME = l_CookieVolF;}
		if (l_CookieVolA!=null)			{this._AMBIENT_VOLUME = l_CookieVolA;}
		
		this._CHANNEL_0				=	null;
		this._CHANNEL_1				=	null;
		this._CHANNEL_2				=	null;
		
		this._Musics				=	[ ['wind', 'music_0'],
										  ['music_2'],
										  ['music_3'],
										  ['music_4'],
										  ['music_5'],
										  ['music_6'],
										  ['music_7-1', 'music_0_loop_'],
										  ['music_0_loop_'], ['music_0_loop_']
										];
		this._MusicID				=	0;
		this._QueuedMusic			=	'';
		
		// Scenari
		this._SCENARIO_VARS			=	[];
		this._CHARS					=	[];
		
		this._PreloadChannel		=	null;
		
		//use shadows for characters
		this._UseShadows			=	true;
		
		this._COMBO_MAX				=	1000;
		this._ITEM_POISON_LEVEL		=	10;
		this._ITEM_SPEED_LEVEL		=	10;
		
		this._AllFiles				=	new TList;
	}

/* ========================================================================== */
/*							- TGame Constructor -							  */
/* ========================================================================== */

	/** {TGame}
	 * ------------------------------------------------------------------ *
	 * @class	TGame
	 * ------------------------------------------------------------------ *
	 * @constructor
	 * @about	TGame Class controls the different "screen" of the game
	 *[@param	{key} string value of the screen/phaser.gamestate
	 *[@param	{Phaser.state} the GameState object
	 * ------------------------------------------------------------------ *
	 */
	function TGame ( pKey, pState )
	{
		TGame._Game.state				.add						( pKey, pState );
		this._Key					=	pKey;
		this._State					=	pState;
		if(TGame._Current===undefined)
		{
			TGame._Current=this;
		};
		TGame._List						.addLast					( this );
		return this;
	}
	
	/**
	 * ------------------------------------------------------------------ *
	 * @function init
	 * ------------------------------------------------------------------ *
	 * @about	initialize all global states
	 * 			maintain static object and wrap the TParam object.
	 * ------------------------------------------------------------------ *
	 */
	TGame.init						=	function(){
		
		// init params
		TGame._Param				=	new TParam					( );
		
		// list of all gamestates
		TGame._List					=	new TList					( );
		
		// list of assets to load (read in the TGame.Preload - run in the TGame.Loader)
		TGame.AssetFiles			=	new TList					( );
		// list of maps to load
		TGame.MapDataFiles			=	new TList					( );
		// list of motions to load
		TGame.MotionFiles			=	new TList					( );
		
		// default main folders
		TGame.AssetsFolder			=	"assets/";
		TGame.MapDataFolder			=	"data/maps/";
		TGame.MotionFolder			=	"data/scenario/";
		
		// update screen size
		TGame._Width				=	TGame._Param._Screen.x;
		TGame._Height				=	TGame._Param._Screen.y;
		TGame._Zoom					=	TGame._Param._Zoom;
		
		// list of layers (phaser.group)
		TGame._Layers				=	null;
		
		// handle particle emitters
		TGame._Emitter				=	null;
		
		// init phaser
		TGame._Game					=	new Phaser.Game				(	TGame._Width,
																		TGame._Height,
																		Phaser.AUTO,//Phaser.WEBGL,//CheckWP()?Phaser.CANVAS:Phaser.AUTO,
																		'game',
																		null,
																		false,
																		false
																	);
		
		// Set default graphics
		TGraphics.driver.game		=	TGame._Game;
		Reset2D							( );
		
		// 'mannually' manage input events
		TGame._InputHandler			=	new TInputManager			( );
		
		// Initialize GameObject default states
	//	GameObject						.init						( 2000 );
		TCharacter						.reset						( );
		
		TGame._Param._ScreenFader	=	new TScreenFader			( );
		TGame._Param._ScreenFilter	=	new TScreenFilter			( );
		TGame._Param._ScreenBands	=	new TBands169				( );
		
		// disable right-click
		DisableContextMenu				( );
	}
	
	/**
	 * ------------------------------------------------------------------ *
	 * static getters [and some setters]
	 * ------------------------------------------------------------------ *
	 */
	
	// the phaser game instance
	Object.defineProperty(TGame, 'game'			, {get:function(){return TGame._Game;}})
	
	// the TParam object (should not be used ... but if required. Use with care ^^)
	Object.defineProperty(TGame, 'param'		, {get:function(){return TGame._Param;}})
	
	// world boundaries
	// returns a Vector2 defining the world boundaries/viewport
	// v.x defines the width
	// v.y defines the height
	Object.defineProperty(TGame, 'boundaries', {
			get:function(){return [TGame._Param._Bound[0].x,TGame._Param._Bound[0].y,TGame._Param._Bound[1].x,TGame._Param._Bound[1].y];},
			set:function(pBoundsArray){
				TGame._Param._Bound[0].set(pBoundsArray[0],pBoundsArray[1]);
				TGame._Param._Bound[1].set(pBoundsArray[2],pBoundsArray[3]);
			}
		})
	
	// screen resolution
	Object.defineProperty(TGame, 'width'		, {get:function(){return TGame._Width;}})
	Object.defineProperty(TGame, 'height'		, {get:function(){return TGame._Height;}})
	// shortcuts for half resolution
	Object.defineProperty(TGame, 'halfWidth'	, {get:function(){return TGame._Width*.5;}})
	Object.defineProperty(TGame, 'halfHeight'	, {get:function(){return TGame._Height*.5;}})
	
	// ** deprecated
	Object.defineProperty(TGame, 'zoom'			, {get:function(){return TGame._Zoom;}})
	
	// shortcut for 'add' method
	Object.defineProperty(TGame, 'add'			, {get:function(){return TGame._Game.add;}})
	
	Object.defineProperty(TGame, 'bills_values'	, {
		get:function(){return TGame._Param._bills_values;},
		set:function(pValues){TGame._Param._bills_values = pValues;}
	})
	
	// array of map names got from the mapdata
	Object.defineProperty(TGame, 'maps_count'	, {
		get:function(){return TGame._Param._maps_count;},
		set:function(pNb){TGame._Param._maps_count=pNb;}
	})
	// array of map files from guid
	Object.defineProperty(TGame, 'maps_file'	, {
		get:function(){return TGame._Param._mapdata_file;},
		set:function(pNb){TGame._Param._mapdata_file=pNb;}
	})
	// array of map ids from guid
	Object.defineProperty(TGame, 'maps_id'	, {
		get:function(){return TGame._Param._mapdata_id;},
		set:function(pNb){TGame._Param._mapdata_id=pNb;}
	})
	// array of map guid from ids
	Object.defineProperty(TGame, 'maps_guid'	, {
		get:function(){return TGame._Param._mapdata_guid;},
		set:function(pNb){TGame._Param._mapdata_guid=pNb;}
	})
	// array of mapdata objects (by guid)
	Object.defineProperty(TGame, 'mapdata'	, {
		get:function(){return TGame._Param._mapdata;},
		set:function(pMapdata){TGame._Param._mapdata=pMapdata;}
	})
	
	
	
	// array of motion names got from the scenario
	Object.defineProperty(TGame, 'motion_count'	, {
		get:function(){return TGame._Param._motion_count;},
		set:function(pNb){TGame._Param._motion_count=pNb;}
	})
	// array of motion files from guid
	Object.defineProperty(TGame, 'motion_file'	, {
		get:function(){return TGame._Param._motion_file;},
		set:function(pNb){TGame._Param._motion_file=pNb;}
	})
	// array of motion ids from guid
	Object.defineProperty(TGame, 'motion_id'	, {
		get:function(){return TGame._Param._motion_id;},
		set:function(pNb){TGame._Param._motion_id=pNb;}
	})
	// array of motion names from guid
	Object.defineProperty(TGame, 'motion_name'	, {
		get:function(){return TGame._Param._motion_name;},
		set:function(pNb){TGame._Param._motion_name=pNb;}
	})
	// array of motion guid from ids
	Object.defineProperty(TGame, 'motion_guid'	, {
		get:function(){return TGame._Param._motion_guid;},
		set:function(pNb){TGame._Param._motion_guid=pNb;}
	})
	// array of motion objects (by guid)
	Object.defineProperty(TGame, 'motion'	, {
		get:function(){return TGame._Param._motion;},
		set:function(pMotion){TGame._Param._motion=pMotion;}
	})
	
	
	// array of player names got from the assets
	Object.defineProperty(TGame, 'players_count'	, {
		get:function(){return TGame._Param._players_count;},
		set:function(pNb){TGame._Param._players_count=pNb;}
	})
	// array of player names got from the assets
	Object.defineProperty(TGame, 'players_name'	, {
		get:function(){return TGame._Param._players_name;},
		set:function(pN){TGame._Param._players_name=pN;}
	})
	// associated animation sequences
	Object.defineProperty(TGame, 'players_seqs'	, {
		get:function(){return TGame._Param._players_seqs;},
		set:function(pS){TGame._Param._players_seqs=pS;}
	})
	
	// array of player names got from the assets
	Object.defineProperty(TGame, 'characters_count'	, {
		get:function(){return TGame._Param._characters_count;},
		set:function(pNb){TGame._Param._characters_count=pNb;}
	})
	// array of character names got from the assets
	Object.defineProperty(TGame, 'characters_name', {
		get:function(){return TGame._Param._characters_name;},
		set:function(eN){TGame._Param._characters_name=eN;}
	})
	Object.defineProperty(TGame, 'characters_pseudo', {
		get:function(){return TGame._Param._characters_pseudo;},
		set:function(eN){TGame._Param._characters_pseudo=eN;}
	})
	// and their associated animation sequences
	Object.defineProperty(TGame, 'characters_seqs', {
		get:function(){return TGame._Param._characters_seqs;},
		set:function(eS){TGame._Param._characters_seqs=eS;}
	})
	// for IA characters - bills dropped
	Object.defineProperty(TGame, 'characters_bills', {
		get:function(){return TGame._Param._characters_bills;},
		set:function(eS){TGame._Param._characters_bills=eS;}
	})
	// characters unlock at level
	Object.defineProperty(TGame, 'characters_level', {
		get:function(){return TGame._Param._characters_level;},
		set:function(eS){TGame._Param._characters_level=eS;}
	})
	// characters background color 0
	Object.defineProperty(TGame, 'characters_color0', {
		get:function(){return TGame._Param._characters_color0;},
		set:function(eS){TGame._Param._characters_color0=eS;}
	})
	// characters background color 1
	Object.defineProperty(TGame, 'characters_color1', {
		get:function(){return TGame._Param._characters_color1;},
		set:function(eS){TGame._Param._characters_color1=eS;}
	})
	// IA characters templates array
	Object.defineProperty(TGame, 'characters_template', {get:function(){return TGame._Param._characters_template;}} )
	
	// array of layers
	Object.defineProperty(TGame, 'layers'		, {
		get:function(){return TGame._Layers;},
		set:function(pLayers){TGame._Layers = pLayers;}
	})
	
	// Emitters
	Object.defineProperty(TGame, 'emitters'		, {
		get:function(){return TGame._Emitter;},
		set:function(pEmitter){TGame._Emitter = pEmitter;}
	})
	
	Object.defineProperty(TGame, 'ambient'		, {
		get:function(){
			return [TGame._Param._AMBIENT_0,
					TGame._Param._AMBIENT_1,
					TGame._Param._AMBIENT_2];
		}
	})
	Object.defineProperty(TGame, 'preloadChannel', {get:function(){return TGame._Param._PreloadChannel;},set:function(pChannel){TGame._Param._PreloadChannel=pChannel;}})
	Object.defineProperty(TGame, 'useShadows'	, {get:function(){return TGame._Param._UseShadows;},set:function(pEnable){TGame._Param._UseShadows=(pEnable==true);UpdateShadows();}})
	Object.defineProperty(TGame, 'factorY'		, {get:function(){return TGame._Param._FactorY;}})
	Object.defineProperty(TGame, 'groundY'		, {get:function(){return TGame._Param._YGround.copy();}})
	Object.defineProperty(TGame, 'groundYMin'	, {get:function(){return TGame._Param._YGround.x;}})
	Object.defineProperty(TGame, 'groundYMax'	, {get:function(){return TGame._Param._YGround.y;}})
	Object.defineProperty(TGame, 'groundY3D'	, {get:function(){return TGame._Param._YGround3D.copy();}})
	Object.defineProperty(TGame, 'groundYMin3D'	, {get:function(){return TGame._Param._YGround3D.x;}})
	Object.defineProperty(TGame, 'groundYMax3D'	, {get:function(){return TGame._Param._YGround3D.y;}})
	Object.defineProperty(TGame, 'targetTolerance',{get:function(){return TGame._Param._Target_Tolerance;}})
	Object.defineProperty(TGame, 'catchTolerance',{get:function(){return TGame._Param._Catch_Tolerance;}})
	Object.defineProperty(TGame, 'touchTolerance',{get:function(){return TGame._Param._Touch_Tolerance;}})
	Object.defineProperty(TGame, 'toleranceFactor',{get:function(){return TGame._Param._Tolerance_Factor;}})
	Object.defineProperty(TGame, 'roadY'		, {get:function(){return TGame._Param._YRoad;}})
	Object.defineProperty(TGame, 'velY'			, {get:function(){return TGame._Param._Vel_Y;}})
	Object.defineProperty(TGame, 'depthFactor'	, {get:function(){return TGame._Param._DepthFactor;}})
	Object.defineProperty(TGame, 'GRAVITY'		, {get:function(){return TGame._Param._Gravity;}})
	Object.defineProperty(TGame, 'FRICTIONZ'	, {get:function(){return TGame._Param._FrictionZ;}})
	Object.defineProperty(TGame, 'FRICTIONITEMX', {get:function(){return TGame._Param._FrictionItemX;}})
	Object.defineProperty(TGame, 'FRICTIONITEMY', {get:function(){return TGame._Param._FrictionItemY;}})
	Object.defineProperty(TGame, 'MASTER_VOLUME', {get:function(){return TGame._Param._MASTER_VOLUME;},set:function(pVol){TGame._Param._MASTER_VOLUME=pVol;}})
	Object.defineProperty(TGame, 'MUSIC_VOLUME'	, {get:function(){return TGame._Param._MUSIC_VOLUME;},set:function(pVol){TGame._Param._MUSIC_VOLUME=pVol;}})
	Object.defineProperty(TGame, 'FX_VOLUME'	, {get:function(){return TGame._Param._FX_VOLUME;},set:function(pVol){TGame._Param._FX_VOLUME=pVol;}})
	Object.defineProperty(TGame, 'AMBIENT_VOLUME',{get:function(){return TGame._Param._AMBIENT_VOLUME;},set:function(pVol){TGame._Param._AMBIENT_VOLUME=pVol;}})
	Object.defineProperty(TGame, 'COMBO_MAX'	, {get:function(){return TGame._Param._COMBO_MAX;},set:function(pComboMax){TGame._Param._COMBO_MAX=pComboMax;}})
	Object.defineProperty(TGame, 'ITEM_POISON_LEVEL', {get:function(){return TGame._Param._ITEM_POISON_LEVEL;},set:function(pLevel){TGame._Param._ITEM_POISON_LEVEL=pLevel;}})
	Object.defineProperty(TGame, 'ITEM_SPEED_LEVEL', {get:function(){return TGame._Param._ITEM_SPEED_LEVEL;},set:function(pLevel){TGame._Param._ITEM_SPEED_LEVEL=pLevel;}})
	
	Object.defineProperty(TGame, 'SCENARIO_VARS', {get:function(){return TGame._Param._SCENARIO_VARS;}, set:function(pVars){TGame._Param._SCENARIO_VARS = pVars;}})
	Object.defineProperty(TGame, 'CHARS'		, {get:function(){return TGame._Param._CHARS;}, set:function(pChars){TGame._Param._CHARS = pChars;}})
	
	Object.defineProperty(TGame, 'CHANNEL_0'	, {get:function(){return TGame._Param._CHANNEL_0;},set:function(pChannel){TGame._Param._CHANNEL_0=pChannel;}})
	Object.defineProperty(TGame, 'CHANNEL_1'	, {get:function(){return TGame._Param._CHANNEL_1;},set:function(pChannel){TGame._Param._CHANNEL_1=pChannel;}})
	Object.defineProperty(TGame, 'CHANNEL_2'	, {get:function(){return TGame._Param._CHANNEL_2;},set:function(pChannel){TGame._Param._CHANNEL_2=pChannel;}})
	Object.defineProperty(TGame, 'MusicID'		, {get:function(){return TGame._Param._MusicID;}, set:function(pId){TGame._Param._MusicID=pId;}})
	Object.defineProperty(TGame, 'Musics'		, {get:function(){return TGame._Param._Musics;}})
	Object.defineProperty(TGame, 'QueuedMusic'	, {get:function(){return TGame._Param._QueuedMusic;}, set:function(pName){TGame._Param._QueuedMusic = pName;}})
	
	Object.defineProperty(TGame, 'ScreenFader'	, {get:function(){return TGame._Param._ScreenFader;} })
	Object.defineProperty(TGame, 'ScreenFilter'	, {get:function(){return TGame._Param._ScreenFilter;} })
	Object.defineProperty(TGame, 'Screenbands'	, {get:function(){return TGame._Param._ScreenBands;} })
	
	var _regFile = function (pFile){
		if (TGame._Param._AllFiles.contains(pFile)){return;}
		TGame._Param._AllFiles.addLast(pFile);
	}
	var _logFiles = function (){
		var l_Lnk = TGame._Param._AllFiles.firstLink();
		var l_Files = "";
		while (l_Lnk!=null){
			l_Files	+=	l_Lnk.value()+"\n";
			l_Lnk = l_Lnk.after();
		}
		console.log(l_Files);
	}
	TGame.getFriction = function ( pFriction, pCoef ) { return 1 / (1 + (pCoef * pFriction)); }
	
	/* the current Game Screen */
	TGame.current					=	function() { return (TGame._Current===undefined ? null : TGame._Current); }
	
	/* find a screen by its name */
	TGame.find						=	function(pKey){
		for (l=TGame._List.firstLink();l!=null;l=l.after())
			{if (l.value()._Key===pKey){return l.value();};}
		return null;
	}
	
	/* launch the screen */
	TGame.startState				=	function(pKey){
		var l_State = TGame.find(pKey);
		if (l_State){l_State.start();}
	}
	TGame.prototype.start			=	function() { TGame._Game.state.start(this._Key); }
	
	
	TGame.setScreen = function (pContext){
		
		// disable smoothing
		//Phaser.Canvas					.setSmoothingEnabled(TGame._Game.context, false);
		
		//screen size will be set automatically
		TGame.game.scale.pageAlignHorizontally=	true; // not the width > it brakes the horizontal rules
		TGame.game.scale.pageAlignVertically	=	true;
		
		// disable smoothing
		TGame.game.stage.smoothed				=	false;
		
		//have the game centered horizontally
		TGame.game.scale.scaleMode			=	Phaser.ScaleManager.SHOW_ALL;
		TGame.game.scale.fullScreenScaleMode	=	Phaser.ScaleManager.SHOW_ALL;
		PIXI.scaleModes.DEFAULT				=	PIXI.scaleModes.NEAREST;
		TGame.game.renderer.renderSession.roundPixels = true;
		Phaser.Canvas.setImageRenderingCrisp(TGame.game.canvas);
	}
	
	TGame.setScreen_ = function (pContext){
		
		// disable smoothing
		//Phaser.Canvas					.setSmoothingEnabled(TGame._Game.context, false);
		
		//screen size will be set automatically
		pContext.scale.pageAlignHorizontally=	true; // not the width > it brakes the horizontal rules
		pContext.scale.pageAlignVertically	=	true;
		
		// disable smoothing
		pContext.stage.smoothed				=	false;
		
		//have the game centered horizontally
		pContext.scale.scaleMode			=	Phaser.ScaleManager.SHOW_ALL;
		PIXI.scaleModes.DEFAULT				=	PIXI.scaleModes.NEAREST
		TGame.game.renderer.renderSession.roundPixels = true;
		//TGame.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
		//TGame.game.scale.setUserScale(2, 2);
		Phaser.Canvas.setImageRenderingCrisp(TGame.game.canvas);
	}
	
	TGame.CharacterIDByName = function ( pName ) {
		var l=0;
		var l_Name = pName.toLowerCase();
		for (l=0; l<TGame.characters_name.length; l++){
			if (l_Name == TGame.characters_name[l].toLowerCase()){
				return l;
			}
		}
		return -1;
	}
	TGame.CharacterNameByID = function ( pID ) {
		return TGame.characters_name	[pID];
	}
	
	TGame.CharacterPseudoByID = function ( pID ) {
		return TGame.characters_name	[pID];
	}
	
	TGame.CharacterBillsByID = function ( pID ) {
		return TGame.characters_name	[pID];
	}
	
	TGame.CharacterTemplateByID = function ( pID ) {
		return TGame.characters_template[pID];
	}
	
	TGame.CharacterTemplateByName = function ( pName ) {
		return TGame.characters_template[TGame.CharacterIDByName(pName)];
	}
	
	var TCharacterTemplate = function ( pID ) {
		this._ID	=	pID;
		this._Name	=	TGame.characters_name	[pID];
		this._Pseudo=	TGame.characters_pseudo	[pID];
		this._Seqs	=	TGame.characters_seqs	[pID];
		this._Bills	=	TGame.characters_bills	[pID];
		TGame.characters_template	.push(this);
	}
	Object.defineProperty( TCharacterTemplate.prototype, 'name'		, {get:function(){return this._Name;}})
	Object.defineProperty( TCharacterTemplate.prototype, 'pseudo'	, {get:function(){return this._Pseudo;}})
	Object.defineProperty( TCharacterTemplate.prototype, 'seqs'		, {get:function(){return this._Seqs;}})
	Object.defineProperty( TCharacterTemplate.prototype, 'bills'	, {get:function(){return this._Bills;}})
	

	var G_ButtonFs = undefined;
	var G_ButtonRd = undefined;

	/*
	goFullScreen: function() {
		this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		if (this.game.scale.isFullScreen) {
			this.game.scale.stopFullScreen();
		} else {
			this.game.scale.startFullScreen();
		}
	}
	*/

	function ReduiceScreen() {
		TGame._Game.scale.stopFullScreen();
		TGame._Game.scale.isFullScreen = false;
		if(G_ButtonFs!=undefined){G_ButtonFs.visible = true;};
		if(G_ButtonRd!=undefined){G_ButtonRd.visible = false;};
		TGame._Game.scale.refresh();
	}

	function MaximiseScreen() {
		TGame._Game.scale.compatibility.supportsFullScreen = true
		TGame._Game.scale.startFullScreen(false, false);
		TGame._Game.scale.isFullScreen = true;
		if(G_ButtonFs!=undefined){G_ButtonFs.visible = false;};
		if(G_ButtonRd!=undefined){G_ButtonRd.visible = true;};
		TGame._Game.scale.refresh();
	}

	function SwitchScreen(pContext) {
		switch (TGame._Game.scale.isFullScreen){
			case true:
				TGame._Game.scale.stopFullScreen();
				TGame._Game.scale.isFullScreen = false;
				TGame._Game.scale.refresh();
				break;
			default:
				TGame._Game.scale.compatibility.supportsFullScreen = true;
				TGame._Game.scale.startFullScreen(false, false);
				TGame._Game.scale.isFullScreen = true;
				TGame._Game.scale.refresh();
				break;
		}
	}

	function SwitchShadows(pContext){
		TGame._Param._UseShadows = (TGame._Param._UseShadows==true?false:true);
		UpdateShadows();
	}

	function UpdateShadows(){
		var l_Lnk=TCharacter.List.firstLink();
		while (l_Lnk!=null){
			l_Lnk.value().enableShadow(TGame._Param._UseShadows);
			l_Lnk = l_Lnk.after();
		}
	}


// template.js
	/**
	 * TLayer IDs for layers/groups
	 */
	function TLayer (){}
	Object.defineProperty(TLayer, 'BACK'		, {get:function(){return 0;}} )
	Object.defineProperty(TLayer, 'FAR'			, {get:function(){return 1;}} )
	Object.defineProperty(TLayer, 'FAR2'		, {get:function(){return 2;}} )
	Object.defineProperty(TLayer, 'FAR3'		, {get:function(){return 3;}} )
	Object.defineProperty(TLayer, 'ROAD'		, {get:function(){return 4;}} )
	Object.defineProperty(TLayer, 'ROAD4'		, {get:function(){return 5;}} )
	Object.defineProperty(TLayer, 'ROAD3'		, {get:function(){return 6;}} )
	Object.defineProperty(TLayer, 'ROAD2'		, {get:function(){return 7;}} )
	Object.defineProperty(TLayer, 'ROAD1'		, {get:function(){return 8;}} )
	Object.defineProperty(TLayer, 'PAVEMENT5'	, {get:function(){return 9;}} )
	Object.defineProperty(TLayer, 'PAVEMENT4'	, {get:function(){return 10;}} )
	Object.defineProperty(TLayer, 'PAVEMENT3'	, {get:function(){return 11;}} )
	Object.defineProperty(TLayer, 'PAVEMENT2'	, {get:function(){return 12;}} )
	Object.defineProperty(TLayer, 'PAVEMENT1'	, {get:function(){return 13;}} )
	Object.defineProperty(TLayer, 'WALLS'		, {get:function(){return 14;}} )
	Object.defineProperty(TLayer, 'MEDIUM'		, {get:function(){return 15;}} )
	Object.defineProperty(TLayer, 'POSTPLAYER'	, {get:function(){return 16;}} )
	Object.defineProperty(TLayer, 'PLAYER'		, {get:function(){return 17;}} )
	Object.defineProperty(TLayer, 'PLAYERFX'	, {get:function(){return 18;}} )
	Object.defineProperty(TLayer, 'FRONT'		, {get:function(){return 19;}} )
	Object.defineProperty(TLayer, 'FRONT2'		, {get:function(){return 20;}} )
	Object.defineProperty(TLayer, 'POSTFX'		, {get:function(){return 21;}} )
	Object.defineProperty(TLayer, 'UI'			, {get:function(){return 22;}} )
	Object.defineProperty(TLayer, 'DEBUG'		, {get:function(){return 23;}} )
	Object.defineProperty(TLayer, 'GRID'		, {get:function(){return 24;}} )

	function CreateLayers(pClearPlayer=false){
		
		var l_PlayerLayer=	null;
		if (pClearPlayer==false){
			if (TGame.layers!=null){
				l_PlayerLayer = TGame.layers[TLayer.PLAYER];
			}
		}
		
		ClearLayers(pClearPlayer);
		
		var l_Layers	=	[	TGame.game.add.group(),	// background
								TGame.game.add.group(), // far items 1 (centrales ...)
								TGame.game.add.group(), // far items 2 (houses/batiments/forest...)
								TGame.game.add.group(), // far items 3 (trees/...)
								TGame.game.add.group(), // medium range road - (also pavement)
								TGame.game.add.group(), // road1
								TGame.game.add.group(), // road2
								TGame.game.add.group(), // road3
								TGame.game.add.group(), // road4
								TGame.game.add.group(), // pavm1
								TGame.game.add.group(), // pavm2
								TGame.game.add.group(), // pavm3
								TGame.game.add.group(), // pavm4
								TGame.game.add.group(), // pavm5
								TGame.game.add.group(), // medium range - walls
								TGame.game.add.group(), // medium range items front of the walls (lamps/chairs/boxes ...) 
								TGame.game.add.group(), // back of player range - (for fx being the player)
								TGame.game.add.group(), // player range - (on the pavement)
								TGame.game.add.group(), // player fx - (on top of players) -> particles ...
								TGame.game.add.group(), // front items range - (near the road)
								TGame.game.add.group(), // very front range - (on the road)
								TGame.game.add.group(), // Post Fx
								TGame.game.add.group(), // UI
								TGame.game.add.group(), // DEBUG
								TGame.game.add.group()]; // GRID Helper
		
		l_Layers[TLayer.BACK]._DEPTH			=	 60;
		l_Layers[TLayer.FAR]._DEPTH				=	 50;
		l_Layers[TLayer.FAR2]._DEPTH			=	 45;
		l_Layers[TLayer.FAR3]._DEPTH			=	 40;
		l_Layers[TLayer.WALLS]._DEPTH			=	 32;
		l_Layers[TLayer.MEDIUM]._DEPTH			=	 32;
		l_Layers[TLayer.POSTPLAYER]._DEPTH		=	 30;
		l_Layers[TLayer.PLAYER]._DEPTH			=	 19;
		l_Layers[TLayer.PLAYERFX]._DEPTH		=	 18;
		l_Layers[TLayer.PAVEMENT5]._DEPTH		=	 32;
		l_Layers[TLayer.PAVEMENT4]._DEPTH		=	 24;
		l_Layers[TLayer.PAVEMENT3]._DEPTH		=	 18;
		l_Layers[TLayer.PAVEMENT2]._DEPTH		=	 13;
		l_Layers[TLayer.PAVEMENT1]._DEPTH		=	 12;
		l_Layers[TLayer.FRONT]._DEPTH			=	 10;
		l_Layers[TLayer.ROAD]._DEPTH			=	  8;
		l_Layers[TLayer.ROAD4]._DEPTH			=	  4;
		l_Layers[TLayer.ROAD3]._DEPTH			=	  3;
		l_Layers[TLayer.ROAD2]._DEPTH			=	  2;
		l_Layers[TLayer.ROAD1]._DEPTH			=	  1;
		l_Layers[TLayer.FRONT2]._DEPTH			=	  1;
		l_Layers[TLayer.POSTFX]._DEPTH			=	  0;
		l_Layers[TLayer.UI]._DEPTH				=	  0;
		l_Layers[TLayer.DEBUG]._DEPTH			=	 -1;
		l_Layers[TLayer.GRID]._DEPTH			=	 -1;
		
		l_Layers[TLayer.BACK]._PARALLAX			=	0;
		l_Layers[TLayer.FAR]._PARALLAX			=	0.770;
		l_Layers[TLayer.FAR2]._PARALLAX			=	0.520;
		l_Layers[TLayer.FAR3]._PARALLAX			=	0.420;
		l_Layers[TLayer.WALLS]._PARALLAX		=	0.220;
		l_Layers[TLayer.MEDIUM]._PARALLAX		=	0.215;
		l_Layers[TLayer.POSTPLAYER]._PARALLAX	=	0;
		l_Layers[TLayer.PLAYER]._PARALLAX		=	0;
		l_Layers[TLayer.PLAYERFX]._PARALLAX		=	0;
		
		l_Layers[TLayer.PAVEMENT5]._PARALLAX	=	0.195;
		l_Layers[TLayer.PAVEMENT4]._PARALLAX	=	0.195 - 0.295*0.25;
		l_Layers[TLayer.PAVEMENT3]._PARALLAX	=	0.195 - 0.295*0.50;
		l_Layers[TLayer.PAVEMENT2]._PARALLAX	=	0.195 - 0.295*0.75;
		l_Layers[TLayer.PAVEMENT1]._PARALLAX	=	- 0.100;
		l_Layers[TLayer.FRONT]._PARALLAX		=	-0.080;
		l_Layers[TLayer.ROAD]._PARALLAX			=	0;
		l_Layers[TLayer.ROAD4]._PARALLAX		=	-0.100;
		l_Layers[TLayer.ROAD3]._PARALLAX		=	-0.200;
		l_Layers[TLayer.ROAD2]._PARALLAX		=	-0.300;
		l_Layers[TLayer.ROAD1]._PARALLAX		=	-0.400;
		l_Layers[TLayer.FRONT2]._PARALLAX		=	-0.500;
		l_Layers[TLayer.POSTFX]._PARALLAX		=	0;
		l_Layers[TLayer.UI]._PARALLAX			=	0;
		l_Layers[TLayer.DEBUG]._PARALLAX		=	0;
		l_Layers[TLayer.GRID]._PARALLAX			=	0;
		
		// by default - disable the 32x32 grid
		l_Layers[TLayer.GRID].visible = false;
		
		if (l_PlayerLayer!=null){
			var l_Layer = l_Layers[TLayer.PLAYER];
			l_PlayerLayer.destroy();
		}
		
		return l_Layers;
	}

	var ClearLayers = function ( pClearPlayer=false ) {
		if (TGame.layers!=null){
			var l_I = 0;
			for (l_I = 0; l_I<TGame.layers.length; l_I++){
				if (TGame.layers[l_I]!=null){
					if ((pClearPlayer==true) || (l_I!=TLayer.PLAYER)){
						TGame.layers[l_I].destroy();
						TGame.layers[l_I] = null;
					}
				}
			}
			if (pClearPlayer==true){ TGame.layers = null;}
		}
	}
	var SetLayerAlpha = function (pLayerId, pAlpha){
		SetSubGroupAlpha(TGame.layers[pLayerId], pAlpha);
	}

	var SetSubGroupAlpha = function (pGroup, pAlpha){
		pGroup.alpha = pAlpha;
		var l_Children = pGroup.children;
		var l_ChildID=0;
		for (l_ChildID=0; l_ChildID<l_Children.length; l_ChildID++){
			var l_Child = l_Children[l_ChildID];
			SetSubGroupAlpha(l_Child, pAlpha);
		}
	}

	var UpdateParallax = function (pParallax){
		var l_Layer = 0;
		var l_Layers = TGame.layers;
		for (l_Layer=0; l_Layer<l_Layers.length; l_Layer++){
			l_Layers[l_Layer].x		=	pParallax * l_Layers[l_Layer]._PARALLAX;
		}
	}

	var ConvertParallaxX_ = function (pX, pLayerID){
		var l_Coef	=	TGame.layers[pLayerID]._PARALLAX;
		var l_D = (pX-TGame.halfWidth) * l_Coef;
		var l_X = (pX-TGame.halfWidth) + l_D;
		var l = 0;
		for (l=0; l<20; l++){
			l_D *= l_Coef;
			l_X += l_D;
		}
		return l_X;
	}

	var ConvertParallaxX = function (pX, pLayerID){
		return (pX-TGame.halfWidth) / (1-TGame.layers[pLayerID]._PARALLAX);
	}



	var TTemplate = function(){}

	TTemplate.prototype.GenRandom = function(pContext, pLevel){
		
		/* Clear current list of GameObjects */
		//	GameObject			.reset			( );
			TCharacter			.reset			( );
			
		/* create an empty layers list */
			//TGame.layers	=	CreateLayers	( );
			
		/* shortcuts */
			var l_Layer_back=	TGame.layers[TLayer.BACK];
			var l_Layer_far	=	TGame.layers[TLayer.FAR];
			var l_Layer_far2=	TGame.layers[TLayer.FAR2];
			var l_Layer_far3=	TGame.layers[TLayer.FAR3];
			var l_Layer_road=	TGame.layers[TLayer.ROAD];
			var l_Layer_road4=	TGame.layers[TLayer.ROAD4];
			var l_Layer_road3=	TGame.layers[TLayer.ROAD3];
			var l_Layer_road2=	TGame.layers[TLayer.ROAD2];
			var l_Layer_road1=	TGame.layers[TLayer.ROAD1];
			var l_Layer_pvmt5=	TGame.layers[TLayer.PAVEMENT5];
			var l_Layer_pvmt4=	TGame.layers[TLayer.PAVEMENT4];
			var l_Layer_pvmt3=	TGame.layers[TLayer.PAVEMENT3];
			var l_Layer_pvmt2=	TGame.layers[TLayer.PAVEMENT2];
			var l_Layer_pvmt1=	TGame.layers[TLayer.PAVEMENT1];
			var l_Layer_wall=	TGame.layers[TLayer.WALLS];
			var l_Layer_dbg	=	TGame.layers[TLayer.DEBUG];
			var l_Layer_ui	=	TGame.layers[TLayer.UI];
			var l_Layer_grid=	TGame.layers[TLayer.GRID];
			
			var l_W			=	TGame.width;
			var l_H			=	TGame.height;
			var l_hW		=	TGame.halfWidth;
			var l_hH		=	TGame.halfHeight;
			
			var l_BoundX	=	TGame.boundaries[0];
			var l_BoundW	=	TGame.boundaries[2];
			
		/* Particle Emitter */
			if (pLevel>=1000){
				if ((TGame._Emitter!=undefined) && (TGame._Emitter!=null)){
					TGame._Emitter.destroy();
					TGame._Emitter = null;
				}
				var l_Tpl5	=	new TParticleTemplate('bills', 'bill-5', 16, 16, 8, 8, 100, TGame.layers[TLayer.PLAYERFX]);
					l_Tpl5		.clampY(-100,TGame.groundYMax-8);
				TGame._PartModels=[	l_Tpl5,
									l_Tpl5.copy('bills', 'bill-10'),
									l_Tpl5.copy('bills', 'bill-20'),
									l_Tpl5.copy('bills', 'bill-50'),
									l_Tpl5.copy('bills', 'bill-100'),
									l_Tpl5.copy('bills', 'bill-200'),
									l_Tpl5.copy('bills', 'bill-500')
								];
				TGame._Emitter=	new TEmitter (0, 0);
				TGame._Emitter	.AddTemplate(TGame._PartModels[0]);
				TGame._Emitter	.AddTemplate(TGame._PartModels[1]);
				TGame._Emitter	.AddTemplate(TGame._PartModels[2]);
				TGame._Emitter	.AddTemplate(TGame._PartModels[3]);
				TGame._Emitter	.AddTemplate(TGame._PartModels[4]);
				TGame._Emitter	.AddTemplate(TGame._PartModels[5]);
				TGame._Emitter	.AddTemplate(TGame._PartModels[6]);
			}
			
		/* Debug lines */
			SetColor			( 255, 255, 255 );
			SetHandle			( 0.0, 0.0 );
			SetScale			( 1.0, 1.0 );
			SetAlpha			( 1.0 );
			SetColor			( 128,128,128 );
			var l_l = 0;
			for (l_l=0; l_l<l_hW;l_l+=32){
				AddRect			( l_hW-l_l,0,1,l_H, l_Layer_grid, 4 );
				AddRect			( l_hW+l_l,0,1,l_H, l_Layer_grid, 4 );
			}
			for (l_l=TGame.groundYMin; l_l<l_H;l_l+=32){
				AddRect			( 0,l_l,l_W,1, l_Layer_grid, 4 );
			}
			for (l_l=TGame.groundYMin-32; l_l>0;l_l-=32){
				AddRect			( 0,l_l,l_W,1, l_Layer_grid, 4 );
			}
			SetColor			( 255,000,255 );
			AddRect				( l_hW-1,0,2,l_H, l_Layer_grid, 4 );
			SetColor			( 000,200,255 );
			AddRect				( 0,TGame.groundYMin,l_W,1, l_Layer_grid, 4 );
			SetColor			( 255,255,000 );
			AddRect				( 0,TGame.groundYMax,l_W,1, l_Layer_grid, 4 );
			SetColor			( 255, 255, 255 );
		
		
		// high ground position
			var l_Gy		=	TGame.groundYMin-3;
		
		
		// There is probably always the road and the pavement.
			SetColor			( 000,000,000 );
			AddRect				( 0, l_Gy+84+48, l_W, l_H-l_Gy+84+48, l_Layer_road, 2+4 ),
			SetColor			( 255,255,255 );
			
			var l_dx		=	l_W;
			var l_Road		=	[
				AddTile			( 'scene'	, -l_W			, l_Gy+ 40	, l_BoundW+l_W*2,  8	, 'road-4'		, l_Layer_road4, 2 ),
				AddTile			( 'scene'	, -l_W*2		, l_Gy+ 48	, l_BoundW+l_W*4, 12	, 'road-3'		, l_Layer_road3, 2 ),
				AddTile			( 'scene'	, -l_W*3		, l_Gy+ 60	, l_BoundW+l_W*6, 24	, 'road-2'		, l_Layer_road2, 2 ),
				AddTile			( 'scene'	, -l_W*4		, l_Gy+ 84	, l_BoundW+l_W*8, 48	, 'road-1'		, l_Layer_road1, 2 )
			];
			
			var l_Pavement	=	[
				AddTile			( 'scene'	, -l_W			, l_Gy		, l_BoundW+l_W*2,  4	, 'pavement-5'	, l_Layer_pvmt5, 2 ),
				AddTile			( 'scene'	, -l_W*2		, l_Gy+  4	, l_BoundW+l_W*4, 12	, 'pavement-4'	, l_Layer_pvmt4, 2 ),
				AddTile			( 'scene'	, -l_W*3		, l_Gy+ 16	, l_BoundW+l_W*6, 12	, 'pavement-3'	, l_Layer_pvmt3, 2 ),
				AddTile			( 'scene'	, -l_W*4		, l_Gy+ 28	, l_BoundW+l_W*8,  4	, 'pavement-2'	, l_Layer_pvmt2, 2 ),
				AddTile			( 'scene'	, -l_W*5		, l_Gy+ 32	, l_BoundW+l_W*10, 8	, 'pavement-1'	, l_Layer_pvmt1, 2 )
			];
			
		TTemplate.Roads		=	l_Road;
		TTemplate.Pavements	=	l_Pavement;
		
		// build fade filter (on the back of UI)
		l_Layer					=	l_Layer_ui;
			SetColor				( 255,255,255 );
			if (pLevel<0){ // Menu
				SetAlpha			( 0.5 );
			}else{
				SetAlpha			( 1 );
			}
			SetHandle				( 0, 0 );
			this._Filter		=	AddTile( 'filters',    0,  0,    l_W, l_H, 'filter-01'	, l_Layer, 4 );
			// expand filter on the edges (to prevent visible seems when camera is shaking)
			this._FilterU		=	AddTile( 'filters', -l_W,-l_H, l_W*3, l_H, 'filter-01-u', l_Layer, 4 );
			this._FilterD		=	AddTile( 'filters', -l_W, l_H, l_W*3, l_H, 'filter-01-d', l_Layer, 4 );
			this._FilterL		=	AddTile( 'filters', -l_W,   0,   l_W, l_H, 'filter-01-l', l_Layer, 4 );
			this._FilterR		=	AddTile( 'filters',  l_W,   0,   l_W, l_H, 'filter-01-r', l_Layer, 4 );
			// tile on X
			this._Filter.tileScale.x	=	l_W/512;
			
			SetAlpha			( 1 );
			
		if (pLevel<0){ // Menu
			var l_r0		=	150;
			var l_g0		=	200;
			var l_b0		=	255;
			var l_r1		=	150;
			var l_g1		=	255;
			var l_b1		=	200;
			
			pLevel			=	-1;
			SetHandle			( 0, 0 );
			SetColor			( l_r0,l_g0,l_b0 );
			AddImage			( 'sky', 0, 0, l_Layer_back ).scale.setTo(l_hW, l_Gy/256);
			
			SetColor			( l_r1,l_g1,l_b1 );
			AddImage			( 'sky', l_hW, 0, l_Layer_back ).scale.setTo(l_hW, l_Gy/256);
			
			var l_Ns		=	16;
			var l_sw		=	128;
			var l_s			=	0;
			SetColor			( l_r0,l_g0,l_b0 );
			SetColor2			( l_r1,l_g1,l_b1 );
			for (l_s=1; l_s<l_Ns; l_s++) {
				var l_d		=	l_s/l_Ns;
				SetLerpColor	( l_d );
				AddImage		( 'sky', l_hW-l_sw/2+l_sw*l_d, 0, l_Layer_back ).scale.setTo(l_sw, l_Gy/256);
			}
			/*
			pLevel			=	-1;
			SetHandle			( 0, 0 );
			SetColor			( l_r0,l_g0,l_b0 );
			AddTile				( 'skies'	, 0				, 0			, l_hW			, l_Gy	, 'sky-01'		, l_Layer_back );
			SetColor			( l_r1,l_g1,l_b1 );
			AddTile				( 'skies'	, l_hW			, 0			, l_hW			, l_Gy	, 'sky-01'		, l_Layer_back );
			
			var l_Ns		=	16;
			var l_sw		=	128;
			var l_s			=	0;
			SetColor			( l_r0,l_g0,l_b0 );
			SetColor2			( l_r1,l_g1,l_b1 );
			for (l_s=1; l_s<l_Ns; l_s++) {
				var l_d		=	l_s/l_Ns;
				SetLerpColor	( l_d );
				AddTile			( 'skies'	, l_hW-l_sw/2+l_sw*l_d, 0			, l_sw/l_Ns		, l_Gy	, 'sky-01'		, l_Layer_back );
			}
			*/
			
			SetHandle			( 0, 0 );
			SetLerpColor		( 0.8 );
			this._ground0	=	AddTile( 'ground', 0, l_Gy-32, l_hW, 32, 'ground_mid', l_Layer_far2 );
			this._ground0.tileScale.x= l_W/this._ground0.width;
			
			SetHandle			( 0.5, 1.0 );
			AddTile				( 'trees'	, l_hW*.5		, l_Gy-27	, 192			, 192	, 'tree-01'		, l_Layer_far3, 3 );
			AddTile				( 'trees'	, l_hW*.75		, l_Gy-20	, 192			, 192	, 'tree-02'		, l_Layer_far3, 3 );
			AddTile				( 'trees'	, l_hW*.25		, l_Gy-10	, 256			, 256	, 'tree-02'		, l_Layer_far3, 3 );
			
			SetHandle			( 0, 0 );
			SetColor			( l_r1,l_g1,l_b1 );
			this._ground1	=	AddTile( 'ground', l_hW, l_Gy-32, l_hW, 32, 'ground_mid', l_Layer_far2 );
			this._ground1.tileScale.x= l_W/this._ground1.width;
			
			SetHandle			( 0.5, 1.0 );
			SetColor			( l_r1,l_g1,l_b1 );
			AddTile				( 'scene2'	, l_hW+200		, l_Gy-22	, 192			, 192	, 'nuke'		, l_Layer_far, 3 );
			AddTile				( 'trees'	, l_hW+100		, l_Gy-20	, 128			, 128	, 'tree-dead-01', l_Layer_far3, 3 );
			AddTile				( 'trees'	, l_hW+250		, l_Gy-15	, 64			, 64	, 'tree-dead-02', l_Layer_far3, 3 );
			
			SetHandle			( 0.0, 0.0 );
			AddTile				( 'scene'	, l_hW+256+16	,  l_Gy-64	, l_hW-128-16	, 64	, 'wall-02'		, l_Layer_wall );
			AddTile				( 'scene'	, l_hW+256+16	, l_Gy-124	, l_hW-128-16	, 64	, 'fence'		, l_Layer_wall );
			
			AddTile				( 'scene'	, l_hW+10		, l_Gy-128	, 128			, 128	, 'portal'		, l_Layer_wall );
			AddTile				( 'scene'	, l_hW+128+10	, l_Gy-128	, 128			, 128	, 'portal'		, l_Layer_wall );
			
			SetHandle			( 0.5, 0 );
			AddTile				( 'scene'	, l_hW			, l_Gy-128	, 32			, 128	, 'pillar'		, l_Layer_wall );
			AddTile				( 'scene'	, l_hW+256+20	, l_Gy-128	, 32			, 128	, 'pillar'		, l_Layer_wall );
		}
			
		return this;
	}


var EVENT_CHARACTERCOLOR = AllocUserEventId();

// character.js
	/* ========================================================================== */
	/*									- States -								  */
	/* ========================================================================== */
		
		var ACTION_NAME		=	['wait','walk',
								 'target','take','hold','shake','throw','sayan','hit',
								 'targeted','locked','taken','held','shaked','thrown',
								 'search','dead'];
		
		
		var TState = function( pName, pDelay ){
			if (TState._Count == undefined){TState._Count = 0;}
			TState._Count ++;
			this._Id	=	TState._Count;
			this._Name	=	pName;
			this._Delay	=	parseInt(pDelay);
			return this;
		}
		Object.defineProperty(TState, 'DELAY_TAKE'	, {get:function(){return __FRAME_TIME__ * 2;}})
		Object.defineProperty(TState, 'DELAY_SHAKE'	, {get:function(){return __FRAME_TIME__ * 6;}})
		Object.defineProperty(TState, 'DELAY_THROW'	, {get:function(){return __FRAME_TIME__ * 5;}})
		Object.defineProperty(TState, 'DELAY_DAMAGE', {get:function(){return __FRAME_TIME__ * 15;}})
		Object.defineProperty(TState, 'DELAY_STUN'	, {get:function(){return __FRAME_TIME__ * 3;}})
		Object.defineProperty(TState, 'DELAY_DAMAGED',{get:function(){return __FRAME_TIME__ * 5;}})
		Object.defineProperty(TState, 'DELAY_IMMUNE', {get:function(){return __FRAME_TIME__ * 50;}})
		Object.defineProperty(TState, 'DELAY_DEAD'	, {get:function(){return __FRAME_TIME__ * 7;}})
		
		Object.defineProperty(TState.prototype, 'name'	, {get:function(){return this._Name;}})
		Object.defineProperty(TState.prototype, 'id'	, {get:function(){return this._Id;}})
		Object.defineProperty(TState.prototype, 'delay'	, {get:function(){return this._Delay;}})
		
		// standing
		var STATE_WAIT			=	new TState( 'wait'	, -1 );
		// ... walk ^^
		var STATE_WALK			=	new TState( 'walk'	, -1 );
		
		// go on the target.
		var STATE_TARGET		=	new TState( 'target', -1 );
		// take a guy.
		var STATE_TAKE			=	new TState( 'take'	, TState.DELAY_TAKE );
		// hold a guy.
		var STATE_HOLD			=	new TState( 'hold'	, -1 );
		// shaking a buy to extract the money
		var STATE_SHAKE			=	new TState( 'shake'	, TState.DELAY_SHAKE );
		// he's done, throw it away
		var STATE_THROW			=	new TState( 'throw'	, TState.DELAY_THROW );
		// got touched ...
		var STATE_STUN			=	new TState( 'stun'	, TState.DELAY_STUN );
		// touch ...
		var STATE_DAMAGE		=	new TState( 'damage', TState.DELAY_DAMAGE );
		
		var STATE_IMMUNE		=	new TState( 'immune', TState.DELAY_IMMUNE );
		
		var STATE_SKILL			=	new TState( 'skill'	, 0 );
		
		// frozen in time (sayan power ?)
		var STATE_LOCKED		=	new TState( 'locked', -1);
		// the guy is being taken.
		var STATE_TAKEN			=	new TState( 'taken'	, -1);
		// Held waiting for being shaked
		var STATE_HELD			=	new TState( 'held'	, -1);
		// extract money
		var STATE_SHAKED		=	new TState( 'shaked', -1);
		// Finish Him ! --- Fatality
		var STATE_THROWN		=	new TState( 'thrown', -1);
		// for player - when take damage
		var STATE_DAMAGED		=	new TState( 'damaged', TState.DELAY_DAMAGED );
		// dead ...
		var STATE_DEAD			=	new TState( 'damaged', TState.DELAY_DEAD );
		
		// search a target (for IA)
		var STATE_SEARCH		=	new TState( 'search', -1);
		

	/* ========================================================================== */
	/*						- TCharacter Constructor -							  */
	/* ========================================================================== */

		/** {TCharacter}
		 * ------------------------------------------------------------------ *
		 * @class	{Abstract} TCharacter
		 * ------------------------------------------------------------------ *
		 * @constructor
		 * @about	Abstract Character Class
		 * @see		TPlayer and TCharacterIA for real objects.
		 *[@param	{String} name of the character]
		 *[@param	{Integer} Identifier of the model in its list]
		 *[@param	{Phaser.Group} group to attach the sprite]
		 * ------------------------------------------------------------------ *
		 */
		var TCharacter = function ( pName='', pModelId=0, pGroup=null ) {
			
			// initialize if not done
			if((TCharacter.List===undefined) || (TCharacter._from_Create===undefined)){TCharacter.reset();};
			
			// don't call the constructor directly.
			if (TCharacter._from_Create===false){
				throw new TypeError("TCharacter objects must be created with the related @Create function.")
			}
			// don't instanciate TCharacter -> instanciate extended class.
			if (this.constructor === TCharacter ){
				throw new TypeError("you can't instanciate this constructor : "+
					"use the Create function on an extended class of TCharacter.")
			}
			
			// position
			this._Pos						=	new Vector2(0,0);
			this._TakePos					=	new Vector2(0,0);
			// direction
			this._Dir						=	new Vector2(1,0);
			this._Vel						=	new Vector2(0,0);
			this._VelR						=	0;
			
			this._OnSide					=	0;
			
			this._Cinematic					=	false;
			
			// name of the caracter (if required)
			this._Name						=	pName;
			// ID of the model -> ie characters_name[]/players_name[] identifier
			this._ModelId					=	pModelId;
			// layer
			this._Group						=	pGroup;
			// the 2D shape
			this._Sprite					=	null;
			this._Shadow					=	null;
			
			// the identifier of the current animation
			this._Anim						=	'';
			this._AnimLoop					=	true;
			this._AnimRate					=	undefined;
			
			// this has been altered (moved or else) and need a sprite update
			this._Dirty						=	true;
			
			// current state (ie action) of the character
			this._State						=	STATE_WAIT;
			// (if any) the character involved in the current action
			this._Target					=	null;
			// moving speed
			this._Speed						=	2;	// default speed (for player).
			
			// a timer to track elapsed time (for any action limited in time)
			this._Timer						=	MilliSecs();
			
			this._Life						=	1;
			this._MaxLife					=	1;
			
			this._Stoped					=	false; // animation lock
			this._Locked					=	false; // time lock
			this._Unstoppable				=	0;
			this._IsBoss					=	false;
			
			this._Damaged					=	false;
			this._DamagedTime				=	0;
			this._Immune					=	0;
			this._ImmuneTime				=	MilliSecs()+STATE_IMMUNE._Delay;
			this._PoisonTime				=	0;
			
			this._PickedItem				=	null;
			this._PickedTime				=	0;
			this._PickedLength				=	0;
			
			this._Paused					=	false;
			
			this._Radius					=	24;	// by default let's use 24 pixels for half width.
			
			this._HitBox					=	null;
			
			this._Angle						=	0;
			
			SetAlpha							( 0.7 );
			SetColor							( 000, 255, 000 );
			SetHandle							( 0.5, 1.0 );
			this._HitBox					=	AddRect		( 0,0, 28,75, TGame.layers[TLayer.PLAYER] );
			this._HitBox.visible			=	false;
			
			// load the sprite
			this								._onLoadSprite	( );
			// call a virtual constructor to build specific stuff on extended class
			this								._onCreate		( );
			
			// add this character to the list.
			this._Link						=	TCharacter.List.addLast( this );
			
			// reset constructor state.
			TCharacter._from_Create			=	false;
			
			return this;
		}
		
		TCharacter.prototype.enableShadow = function(pEnable){
			if (pEnable==true){
				this._onReloadShadow();
			}else{
				if (this._Shadow!=null){
					this._Shadow.destroy();
					this._Shadow = null;
				}
			}
		}
		TCharacter.prototype._onReloadShadow = function(){}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @function {Private} _EnableConstructor
		 * ------------------------------------------------------------------ *
		 * @about	private function that enables the constructor
		 *			to be called
		 *			> called by the XXXX.Create function of any
		 *			extended class.
		 *			So we can't instanciate TCharacter directly !
		 * ------------------------------------------------------------------ *
		 */
		TCharacter._EnableConstructor = function ( ) {
			TCharacter._from_Create			=	true;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @funciton Update
		 * ------------------------------------------------------------------ *
		 * @param	{Phaser.Game} the instance of the currently running screen
		 * @param	{Float} time factor
		 * @return	true if all got done successfully
		 *			false if no character has been updated
		 *			an exception is thrown for incorrect call of the function.
		 * @about	the time factor should be computed in the main loop by :
		 *			Coef = DT*FPS/1000
		 *			> with DT is the "DeltaTime" or "Elapsed Time"
		 *			it's the time of a complete loop
		 *			ElapsedTime = Current_Loop_Time - Last_Loop_Time
		 *			-> for 60 fps, it should give DT/16.7777
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.Update = function ( pGame, pCoef ) {
			TCharacter.game = pGame; // if required ...
			
			// list can be empty (why not) but, it must exists !
			if(TCharacter.List===undefined){throw ("Illegal call to TCharacter.Update"+
				" before initialization.");}
			
			// empty list = no update.
			if (TCharacter.List.count()===0){return false;}
			
			// traverse all characters and process update
			// it actually calls the extended methods which overrides the
			// TCharacter._onUpdate method.
			// if not, then it will throw an TypeError exception
			// [see the TList/Tlink implementation in "blitzlike.js"]
			var l_Lnk = TCharacter.List.firstLink();
			
			while(l_Lnk!=null)
			{
				
				// character associated to the current TLink object
				var l_char = l_Lnk.value();
				
				// next link in the list
				l_Lnk = l_Lnk.after();
				
				// update this character.
				l_char._onUpdate(pCoef);
				
			}
			
			// if nothing 's gone wrong, say it !
			return true;
		}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @function Render
		 * ------------------------------------------------------------------ *
		 * @about	(re)initialize the global stuff
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.Render = function ( ) {
			
			// list can be empty (why not) but, it must exists !
			if(TCharacter.List===undefined){throw ("Illegal call to TCharacter.Update"+
				" before initialization.");}
			
			// empty list = no update.
			if (TCharacter.List.count()===0){return false;}
			
			// traverse all characters and process update
			// it actually calls the extended methods which overrides the
			// TCharacter._onUpdate method.
			// if not, then it will throw an TypeError exception
			// [see the TList/Tlink implementation in "blitzlike.js"]
			var l_Lnk = TCharacter.List.firstLink();
			
			while(l_Lnk!=null)
			{
				
				// character associated to the current TLink object
				var l_char = l_Lnk.value();
				
				// next link in the list
				l_Lnk = l_Lnk.after();
				
				// if it contains a valid sprite, update it
				if (l_char._Sprite!=null){
					
					// call the sprite update
					l_char._updateSprite();
					
				}
			}
			
			// if nothing 's gone wrong, say it !
			return true;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @function reset
		 * ------------------------------------------------------------------ *
		 * @about	(re)initialize the global stuff
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.reset = function ( ) {
			TCharacter._from_Create			=	false;
			// create the lists of not done
			if(TCharacter.List===undefined)		{TCharacter.List=new TList();}
			if(TPlayer.List===undefined)		{TPlayer.List=new TList();}
			if(TCharacterIA.List===undefined)	{TCharacterIA.List=new TList();}
			
			// destroy instances
			TCharacterIA.Clear();
			TPlayer.Clear();
			
			// clear the characters lists
			TCharacter.List						.clear		( );
			TPlayer.List						.clear		( );
			TCharacterIA.List					.clear		( );
			
			// Y velocity is lower than X'
			TGame.factorY					=	.5;
			
			// delay to wait for sorting characters on the layer :
			// one update per second is probably enough.
			TCharacter._DelaySortGroupSlow	=	1000;
			// call the sort method faster only when moving Y
			TCharacter._DelaySortGroupFast	=	10;
			// current delay
			TCharacter._DelaySortGroup		=	TCharacter._DelaySortGroupSlow;
			
			// offset of the character sprite (the gap/padding on the frame below the feet)
			TCharacter.Offset				=	new Vector2(0,5);
			TCharacter.OffsetShake			=	new Vector2(-26,-8);
		}
		
	/* ========================================================================== */
	/*								- Protected -								  */
	/* ========================================================================== */
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private-Abstract} _onCreate
		 * ------------------------------------------------------------------ *
		 * @about	Abstract Method called when an object is newly
		 *			created
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype._onCreate = function ( ) {
			throw new TypeError("abstract TCharacter._onCreate MUST be overriden"+
				" by extended class");
			return this;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private-Abstract} _onUpdate
		 * ------------------------------------------------------------------ *
		 * @about	Abstract Method called for each characters
		 *			on the update function.
		 *			This method <MUST> be overriden !
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype._onUpdate = function ( ) {
			throw new TypeError("abstract TCharacter._onUpdate MUST be overriden"+
				" by extended class");
			return this;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private-Abstract} _onLoadSprite
		 * ------------------------------------------------------------------ *
		 * @about	Abstract Method called by the constructor to
		 *			build the tilesprite.
		 * 			this method <MUST> be overriden !
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype._onLoadSprite = function ( ) {
			throw new TypeError("abstract TCharacter._onLoadSprite MUST be"+
				" overriden by extended class");
			return this;
		}
		
		TCharacter.prototype.convertH = function ( ) {
			return TGame.depthFactor + (1-TGame.depthFactor) * (this._Pos.y-TGame.groundYMin3D) /
					(TGame.groundYMax3D-TGame.groundYMin3D);
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private} _updateSprite
		 * ------------------------------------------------------------------ *
		 * @about	private method called when the sprite is dirty
		 *			and needs to be replaced/resized/reoriented
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype._updateSprite = function ( ) {
			// assert the sprite exists
			if (this._Sprite===null){return this;}
			
			if (this._Cinematic){
				if(this._Anim!='' && this._AnimLoop>=0){
					this._Sprite.animations.play(this._Anim, this._AnimRate);
					if (this._Shadow!=null){ this._Shadow.animations.play(this._Anim, this._AnimRate); }
					if (this._AnimLoop==false){ this._AnimLoop = -1; }
				} else {
					if (this._AnimLoop>=0) {
						this._Sprite.animations.stop();
						if (this._Shadow!=null){ this._Shadow.animations.stop();}
					}
				}
				SetShapeColor( this._Sprite, 255,255,255);
				this._Sprite.x	=	this._Pos.x + TCharacter.Offset.x;
				this._Sprite.y	=	this.depthY + TCharacter.Offset.y + this._Pos.z;
				var l_Scl		=	Min(this.convertH(),1) * ( this._Unstoppable>0 ? 1.1 : 1.0 );
				this._Sprite.scale	.set(l_Scl*
										 (this._Anim=='face'?1:this._Dir.x<0?-1:1),
										 l_Scl
										);
				
				this._Sprite.angle	=	this._Angle;
				if (this._Sprite.angle!=0){
					this._Sprite.anchor.setTo(0.5,0.5);
				}
				
				if (this._Shadow!=null){
					this._Shadow.x	=	this._Sprite.x;
					this._Shadow.y	=	this._Sprite.y - TCharacter.Offset.y - this._Pos.z;
				}
				return;
			}
			// modification occures ?
			if (this._Dirty){
				
				// update position -> character + bitmap offset (due to padding)
				switch (this._State) {
					case STATE_TAKEN:
					case STATE_HELD:
					case STATE_SHAKED:
						this._Sprite.x	=	this._TakePos.x + TCharacter.Offset.x;
						this._Sprite.y	=	this.depthTakeY + TCharacter.Offset.y + this._TakePos.z;
						break;
					default:
						this._Sprite.x	=	this._Pos.x + TCharacter.Offset.x;
						this._Sprite.y	=	this.depthY + TCharacter.Offset.y + this._Pos.z;
				}
				
				// define scale based on depth (higher on the screen means deeper
				// on the world = smaller)
				// (if facing force direction to +1 (totally arbitrary))
				var l_Scl		=	Min(this.convertH(),1) * ( this._Unstoppable>0 ? 1.1 : 1.0 );
				this._Sprite.scale	.set(l_Scl*
										 (this._Anim=='face'?1:this._Dir.x<0?-1:1),
										 l_Scl
										);
				
				this._Sprite.angle	=	this._Angle;
				if (this._Sprite.angle!=0){
					this._Sprite.anchor.setTo(0.5,0.5);
				}
				
				// if the character is held/taken/shaked the sprite is offseted
				switch(this._State){
					case STATE_SHAKED:
					case STATE_TAKEN:
					case STATE_HELD:
						this._Sprite.x += TCharacter.OffsetShake.x * this._Dir.x;
						this._Sprite.y += TCharacter.OffsetShake.y;
						break;
				}
				
				// run any animation
				if (this._Paused){
					this._Sprite.animations.stop();
					if (this._Shadow!=null){ this._Shadow.animations.stop();}
				}else{
					if(this._Anim!=''){
						this._Sprite.animations.play(this._Anim);
						if (this._Shadow!=null){ this._Shadow.animations.play(this._Anim);}
					}else{
						this._Sprite.animations.stop();
						if (this._Shadow!=null){ this._Shadow.animations.stop();}
					}
				}
				
				// animate "damaged" state (from red to whyte)
				if (this._Damaged==true){
					l_Cr = Clamp((MilliSecs()-this._DamagedTime)/STATE_IMMUNE._Delay, 0,1);
					SetObjectColor(this._Sprite, 255,50+205*l_Cr,50+205*l_Cr);
					CreateEvent(EVENT_CHARACTERCOLOR, 0,0, this._Sprite).emit();
					if (l_Cr>=1){this._Damaged==false;}
				}else{
					if ((this._Unstoppable>0) && (this._IsBoss==false)){
						var l_R = 180+75*Cos(this._PoisonTime);
						var l_G = 255;
						var l_B = 128+127*Cos(this._PoisonTime*3);
						SetObjectColor(this._Sprite, l_R,l_G,l_B);
					}else{
						SetObjectColor(this._Sprite, 255,255,255);
					}
					CreateEvent(EVENT_CHARACTERCOLOR, 0,0, this._Sprite).emit();
				}
				if (this._Unstoppable>0)	{ this._HitBox.height = 75+7; }
				if (this._HitBox.visible)	{
					this._HitBox.x	=	this._Sprite.x-14;
					this._HitBox.y	=	this._Sprite.y-7-this._HitBox.height;
				}
				
				if (this._Unstoppable==false) { 
				if ( this._PickedItem != null ){
					if ( this._PickedTime + this._PickedLength>MilliSecs() ){
						switch (this._PickedItem._Style){
							case ITEM.LIFE :
								var l_R = 255;
								var l_G = 255* Clamp(( MilliSecs() - this._PickedTime) / this._PickedLength, 0,1);
								var l_B = 255;
								
								SetObjectColor(this._Sprite, l_R,l_G,l_B);
								CreateEvent(EVENT_CHARACTERCOLOR, 0,0, this._Sprite).emit();
								break;
								
							case ITEM.SPEED:
								
								var l_R = 128+127*Cos(MilliSecs()*2.5);
								var l_G = 128+127*Cos(MilliSecs()*2.0);
								var l_B = 128+127*Cos(MilliSecs()*1.5);
								var l_S = l_R*l_R + l_G*l_G + l_B*l_B;
								if (l_R>l_G){
									if (l_R>l_B){
										if (l_G>l_B){
											l_B = 128;
											l_G = Min(l_G*4,255);
										}else{
											l_G = 128;
											l_B = Min(l_B*4,255);
										}
										l_R = 255;
									}else{
										if (l_R>l_B){
											l_B = 128;
											l_R = Min(l_R*4,255);
										}else{
											l_R = 128;
											l_B = Min(l_B*4,255);
										}
										l_G = 255;
									}
								}else{
									if (l_G>l_B){
										if (l_B>l_R){
											l_R = 128;
											l_B = Min(l_B*4,255);
										}else{
											l_B = 128;
											l_R = Min(l_R*4,255);
										}
										l_G = 255;
									}else{
										if (l_G>l_R){
											l_R = 128;
											l_G = Min(l_G*4,255);
										}else{
											l_G = 128;
											l_R = Min(l_R*4,255);
										}
										l_B = 255;
									}
								}
								SetObjectColor(this._Sprite, l_R,l_G,l_B);
								CreateEvent(EVENT_CHARACTERCOLOR, 0,0, this._Sprite).emit();
								
								break;
							}
					}else{
						SetObjectColor(this._Sprite, 255,255,255);
						CreateEvent(EVENT_CHARACTERCOLOR, 0,0, this._Sprite).emit();
						this._PickedItem = null;
					}
				}
				}
				
				if (this._Shadow!=null){
					this._Shadow.x	=	this._Sprite.x;
					this._Shadow.y	=	this._Sprite.y - TCharacter.Offset.y - this._Pos.z;
				}
				
				// now the character is clean.
				this._Dirty		=	false;
			}
			return this;
		}
		
		
	/* ========================================================================== */
	/*								- Properties -								  */
	/* ========================================================================== */
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	name
		 * ------------------------------------------------------------------ *
		 * @return	{String}
		 * @about	the name of the character.
		 *			this property isn't used but could be
		 *			(for drawing labels of the characters or else).
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'name',
			{
				get:function()		{return this._Name;},
				set:function(pName)	{this._Name = pName;this._Dirty=true;}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	pseudo
		 * ------------------------------------------------------------------ *
		 * @return	{String}
		 * @about	the pseudo of the character.
		 *			this property isn't used but could be
		 *			(for drawing labels of the characters or else).
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'pseudo',
			{
				get:function()		{return TGame.characters_pseudo[this._ModelId];}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	{READONLY} position
		 * ------------------------------------------------------------------ *
		 * @return	{Vector2}
		 * @about	the position vector is the one used to compute
		 *			the "real" position of the sprite.
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'position',
			{
				get :function()		{return this._Pos.copy();},
				set :function(pV)	{
					if (this._Locked)	{return;}
					
					this._Pos.x	=	Clamp		( pV.x,
												  TGame.boundaries[0],
												  TGame.boundaries[0]+
												  TGame.boundaries[2]);
					this._Pos.y	=	Clamp		( pV.y,
												  TGame.groundYMin3D,
												  TGame.groundYMax3D);
					
					this._Dirty	=	true;
				}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	{READONLY} x
		 * ------------------------------------------------------------------ *
		 * @return	{Float}
		 * @about	the X component of the position of the character
		 * @seealso	#position, #y
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'x',
			{
				get :function()		{return this._Pos.x;},
				set :function(pX)	{
					if (this._Locked)	{return;}
					
					this._Pos.x	=	Clamp		( pX,
												  TGame.boundaries[0],
												  TGame.boundaries[0]+
												  TGame.boundaries[2]);
					this._Dirty	=	true;
				}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	{READONLY} y
		 * ------------------------------------------------------------------ *
		 * @return	{Float}
		 * @about	the Y component of the position of the character
		 * @seealso	#position, #x
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'y',
			{
				get :function()		{return this._Pos.y;},
				set :function(pY)	{
					if (this._Locked)	{return;}
					
					this._Pos.y	=	Clamp		( pY,
												  TGame.groundYMin3D,
												  TGame.groundYMax3D);
					this._Dirty	=	true;
				}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	{READONLY} depthY
		 * ------------------------------------------------------------------ *
		 * @return	{Float}
		 * @about	the Y component of the position of the character
		 * 			converted to screen coordinates
		 * @seealso	#position, #y
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'depthY',
			{
				get :function()		{
					return TGame.groundYMin +
					(this._Pos.y-TGame.groundYMin3D) * TGame.factorY;
				}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	{READONLY} depthTakeY
		 * ------------------------------------------------------------------ *
		 * @return	{Float}
		 * @about	the Y component of the position of the character
		 * 			converted to screen coordinates (when state of character
		 * 			is Taken)
		 * @seealso	#position, #y
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'depthTakeY',
			{
				get :function()		{
					return TGame.groundYMin +
					(this._TakePos.y-TGame.groundYMin3D) * TGame.factorY;
				}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	unstoppable
		 * ------------------------------------------------------------------ *
		 * @return	{BOOLEAN}
		 * @about	set/get the unstoppable state for a character
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'unstoppable',
			{
				get :function()		{return this._Unstoppable;},
				set :function(pState){
					this._Dirty		=	true;
					if (pState==this._Unstoppable){return;}
					this._Unstoppable = ( ( (pState==true) || (pState>0) ) ? true : false );
					this._Dirty		=	true;
					this._Money		=	pState==true ? this._Money*3 : this._Money/3;
				}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	{READONLY} sprite
		 * ------------------------------------------------------------------ *
		 * @return	{Phaser.Sprite}
		 * @about	the Sprite used to render the character
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'sprite',
			{
				get:function()		{return this._Sprite;}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	target
		 * ------------------------------------------------------------------ *
		 * @return	{TCharacter}
		 * @about	the character @this is targeting 
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'target',
			{
				get:function()		{return this._Target;},
				set:function(pChar)
				{
				if(this._Locked)	{return;}
				
				this._Target	=	pChar;
				this._State		=	STATE_TARGET;
				this._Dirty		=	true;
				}
			}
		)
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @getter	{READONLY} life
		 * ------------------------------------------------------------------ *
		 * @return	{Integer} amount of life of the character
		 * ------------------------------------------------------------------ *
		 */
		Object.defineProperty ( TCharacter.prototype, 'life',
			{
				get:function()		{return this._Life;},
				set:function(pLife)	{this._onLifeUp(pLife);}
			}
		)
		TCharacter.prototype._onLifeUp = function(pLife) {};
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	depthRate
		 * ------------------------------------------------------------------ *
		 * @return	{Float} the converted Y position
		 * @about	due to 2D, the depth is rendered by the Y position
		 *			the higher the character is, the deeper he is
		 *			(while he's real y position never changes)
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.depthRate	= function ( ) {
			return 1+(this._Pos.y-295)/80;
		}

	/* ========================================================================== */
	/*									- Stuff -								  */
	/* ========================================================================== */
		
		TCharacter.prototype.reloadSprite = function (pGroup){
			this._Group		=	pGroup;
			this._onReloadSprite();
			this._Dirty		=	true;
		}
		TCharacter.prototype._onReloadSprite = function (){}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	pickItem
		 * ------------------------------------------------------------------ *
		 * @about	the character picked an item
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.pickItem	= function ( pItem ) {
			switch(pItem._Style){
				case ITEM.LIFE	:
					this.life ++;
					this.pickedItem(pItem);
					break;
				case ITEM.POISON:
					break;
				case ITEM.POISON2:
					if (this._Unstoppable==0){
						this.unstoppable=1;
						this.pickedItem(pItem);
					}
					break;
				case ITEM.X2	:
					this.pickedItem(pItem);
					this.combo2X();
					break;
				case ITEM.SPEED	:
					this.pickedItem(pItem);
					break;
			}
		}
		TCharacter.prototype.pickedItem	= function ( pItem ) {
			this._PickedItem	=	pItem;
			this._PickedTime	=	MilliSecs();
			this._PickedLength	=	pItem._Length;
			this._Dirty			=	false;
		}	
		TCharacter.prototype.combo2X = function(){}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	setTarget
		 * ------------------------------------------------------------------ *
		 * @param	{TCharacter}
		 * @about	set the target of the character.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.setTarget = function ( pChar ) {
			if(this._Locked)		{return;}
			
			this._Target		=	pChar;
			this._State			=	STATE_TARGET;
			this._Dirty			=	true;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	distance
		 * ------------------------------------------------------------------ *
		 * @return	{Float} the distance between @this character and
		 *			an other character
		 * @param	{TCharacter} the other character to compute the
		 *			distance
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.distance	= function ( pChar ) {
			return this._Pos.distance(pChar._Pos);
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	sqDistance
		 * ------------------------------------------------------------------ *
		 * @return	{Float} the square distance between @this character
			 *			and an other character
		 * @param	{TCharacter} the other character to compute the distance
		 * @about	this is the same as #distance method except it doesn't
		 *			use Sqr function
		 *			it's better and faster for distance "checking", and
		 *			it's not really intended to get a vald distance.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.sqDistance	= function ( pChar ) {
			return this._Pos.sqDistance(pChar._Pos);
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	distanceX
		 * ------------------------------------------------------------------ *
		 * @return	{Float} the distance on X axis between @this character and
		 *			an other character
		 * @param	{TCharacter} the other character to compute the
		 *			distance
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.distanceX	= function ( pChar ) {
			return pChar._Pos.x-this._Pos.x;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	distanceY
		 * ------------------------------------------------------------------ *
		 * @return	{Float} the distance on Y axis between @this character and
		 *			an other character
		 * @param	{TCharacter} the other character to compute the
		 *			distance
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.distanceY	= function ( pChar ) {
			return pChar._Pos.y-this._Pos.y;
		}
		
	/* ========================================================================== */
	/*									- ACTION -								  */
	/* ========================================================================== */
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	pause
		 * ------------------------------------------------------------------ *
		 * @about	pause the character (lock the animation frame)
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.pause = function (){
			this._Paused = true;
			this._Dirty = true;
		}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	resume
		 * ------------------------------------------------------------------ *
		 * @about	resume a previously paused character
		 * 			(unlock the animation frame)
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.resume = function (){
			this._Paused = false;
			this._Dirty = true;
		}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	immune
		 * ------------------------------------------------------------------ *
		 * @about	character can't take damages
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.immune	=	function ( pValue=1, pTime=1 ) {
			if (this._Immune<pValue){ this._Immune = pValue; }
			if (this._ImmuneTime<MilliSecs()+pTime){
				this._ImmuneTime = MilliSecs()+pTime;
			}
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	lock
		 * ------------------------------------------------------------------ *
		 * @about	lock a character so he can't move or act.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.lock	=	function ( ) {
			this._Locked			=	true;
			return true;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	unlock
		 * ------------------------------------------------------------------ *
		 * @about	unlock a character so he can move again
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.unlock	=	function ( ) {
			this._Locked			=	false;
			return true;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	startState
		 * ------------------------------------------------------------------ *
		 * @param	{TState} the new action to launch
		 * @return	{BOOLEAN} true if action started successfully
		 * @about	start an action.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.startState	=	function ( pState, pForce=false ) {
			if (this._Locked==true)		{ if (pForce==false){return false;} }
			
			this._State				=	pState;
			this._Timer				=	MilliSecs();
			this						.lock();
			this._Dirty				=	true;
			
			return true;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	stateEnd
		 * ------------------------------------------------------------------ *
		 * @return	{BOOLEAN} true if timer reached end of the action
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.stateEnd	=	function ( ) {
			if (this._Timer + this._State._Delay <= MilliSecs()) {
				this					.unlock();
				this._Dirty			=	true;
				return true;
			}
			return false;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	wait
		 * ------------------------------------------------------------------ *
		 * @about	sets the current state of the player to "wait"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.wait	=	function ( ) {
			return this.startState ( STATE_WAIT );
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	hold
		 * ------------------------------------------------------------------ *
		 * @about	sets the current state of the player to "hold"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.skill = function ( pChar ) {
			if (!this.startState(STATE_SKILL)) {return false;}
			
			this._onSkill();
			
			return true;
		}
		TCharacter.prototype._onSkill = function ( ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	take
		 * ------------------------------------------------------------------ *
		 * @about	sets the current state of the player to "take"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.take	=	function ( pChar ) {
			if (!this.startState(STATE_TAKE)) {return false;}
			
			this._Target			=	pChar;
			this._onTake();
			this._Target.startState	(STATE_TAKEN, true);
			this._Target._onTaken();
			
			return true;
		}
		TCharacter.prototype._onTake = function ( ) { }
		TCharacter.prototype._onTaken = function ( ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	damage
		 * ------------------------------------------------------------------ *
		 * @about	sets the current state of the player to "take"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.damage	=	function ( pChar ) {
			
			if (!this.startState(STATE_DAMAGE)) {return false;}
			
			this._Target			=	pChar;
			this						._onDamage	( );
			
			if (pChar._Immune>0)		{ return true; }
			this._Target				.startState	( STATE_DAMAGED, true );
			this._Target				._onDamaged	( this );
			
			return true;
		}
		TCharacter.prototype._onDamage = function ( ) { }
		TCharacter.prototype._onDamaged = function ( pByChar ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	die
		 * ------------------------------------------------------------------ *
		 * @about	sets the current state of the player to "take"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.die	=	function ( ) {
			console.log("you're dead ... sorry about that ^^");
			this						.startState	( STATE_DEAD, true );
			this						._onDie	( );
			if (this._Target!=null)		{this._Target._onKill();}
			return true;
		}
		TCharacter.prototype._onDie = function ( ) { }
		TCharacter.prototype._onKill = function ( ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	hold
		 * ------------------------------------------------------------------ *
		 * @about	sets the current state of the player to "hold"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.hold = function ( pChar ) {
			if (!this.startState(STATE_HOLD)) {return false;}
			
			this._Target			=	pChar;
			this._onHold();
			this._Target.startState	(STATE_HELD, true);
			this._Target._onHeld();
			
			return true;
		}
		TCharacter.prototype._onHold = function ( ) { }
		TCharacter.prototype._onHeld = function ( ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	shake
		 * ------------------------------------------------------------------ *
		 * @about	sets the current state of the player to "shake"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.shake = function ( pChar ) {
			if (!this.startState(STATE_SHAKE)) {return false;}
			
			this._Target			=	pChar;
			this._onShake();
			this._Target.startState	(STATE_SHAKED, true);
			this._Target._onShaked();
			
			return true;
		}
		TCharacter.prototype._onShake = function ( ) { }
		TCharacter.prototype._onShaked = function ( ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	throw
		 * ------------------------------------------------------------------ *
		 * @param	{TCharacter} the character to act on
		 * @param	{Integer} direction to throw the character
		 * @about	sets the current state of the player to "throw"
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.throw = function ( pChar, pDir ) {
			if (!this.startState(STATE_THROW)) {return false;}
			
			this._onThrow(pDir);
			this._Target.startState	(STATE_THROWN, true);
			this._Target._onThrown();
			this._Target			=	null;
			
			return true;
		}
		TCharacter.prototype._onThrow = function ( pDir ) { }
		TCharacter.prototype._onThrown = function ( ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	moveLeft
		 * ------------------------------------------------------------------ *
		 * @param	{Float} the time factor.
		 * @about	sets the current state of the player
		 *			and compute its position
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.moveLeft	=	function ( pCoef ) {
			if (this._Locked==true)		{ return false; }
			
			this._State				=	STATE_WALK;
			this._Dir.x				=	-1;
			this._Vel.x				=	-this._Speed;
			this._Pos.x				=	Clamp(	this._Pos.x+pCoef*this._Vel.x,
												TGame.boundaries[0],
												TGame.boundaries[0]+
												TGame.boundaries[2]
											);
			this._onWalk();
			this._Dirty				=	true;
			
			return true;
		}
		TCharacter.prototype._onWalk = function ( ) { }
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	moveRight
		 * ------------------------------------------------------------------ *
		 * @param	{Float} the time factor.
		 * @about	sets the current state of the player
		 *			and compute its position
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.moveRight =	function ( pCoef ) {
			if (this._Locked==true)		{ return false; }
			
			this._State				=	STATE_WALK;
			this._Dir.x				=	 1;
			this._Vel.x				=	 this._Speed;
			this._Pos.x				=	Clamp(	this._Pos.x+pCoef*this._Vel.x,
												TGame.boundaries[0],
												TGame.boundaries[0]+
												TGame.boundaries[2]
											);
			
			this._onWalk();
			this._Dirty				=	true;
			
			return true;
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	moveUp
		 * ------------------------------------------------------------------ *
		 * @param	{Float} the time factor.
		 * @about	sets the current state of the player
		 *			and compute its position
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.moveUp	=	function ( pCoef ) {
			if (this._Locked==true)		{ return false; }
			
			this._State				=	STATE_WALK;
			this._Dir.y				=	-1;
			this._Vel.y				=	-this._Speed*TGame.velY;
			this._Pos.y				=	Clamp(	this._Pos.y+pCoef*this._Vel.y,
												TGame.groundYMin3D,
												TGame.groundYMax3D
											);
			
			this._onWalk();
			this._Dirty				=	true;
			
			return true;
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	moveDown
		 * ------------------------------------------------------------------ *
		 * @param	{Float} the time factor.
		 * @about	sets the current state of the player
		 *			and compute its position
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.moveDown	=	function ( pCoef ) {
			if (this._Locked==true)		{ return false; }
			
			this._State				=	STATE_WALK;
			this._Dir.y				=	 1;
			this._Vel.y				=	 this._Speed*TGame.velY;
			this._Pos.y				=	Clamp(	this._Pos.y+pCoef*this._Vel.y,
												TGame.groundYMin3D,
												TGame.groundYMax3D
											);
			
			this._onWalk();
			this._Dirty				=	true;
			
			return true;
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	moveToChar
		 * ------------------------------------------------------------------ *
		 * @param	{TCharacter} character to join
		 * @param	{Float} time factor
		 * @return	{BOOLEAN} true if reached the character
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.moveToChar = function ( pChar, pCoef, pRange ) {
			if (this._Locked==true)		{ return false; }
			if (pChar==null)			{ return false; }
			
			// set velocity to point at the character
				this._Vel.x			=	(pChar._Pos.x-this._Pos.x);
				this._Vel.y			=	(pChar._Pos.y-this._Pos.y);
				this._Vel.normalize().scale(this._Speed);
			//	this._Vel.y			*=	TGame.velY;
				
			// update sprite direction
				this._Dir.x			=	Sgn(this._Vel.x);
				this._Dir.y			=	Sgn(this._Vel.y);
				
			// if range checking
				if (pRange>1){
					if (this.sqDistance(pChar) < pRange*pRange) {
						return true;
					}
				}
				
			// get collision time
				var l_T				=	this.collisionTime ( pChar, pCoef );
				if (l_T<0)				{return false;}
				
			// if collision occures on this loop, returns true
			if (l_T<=1) {
				// travel the exact distance to reach the character
				this._Pos.x			+=	this._Vel.x * pCoef * l_T;
				this._Pos.y			+=	this._Vel.y * pCoef * l_T;
				this._onWalk();
				this._Dirty			=	true;
				return true;
			}
			
			// else just walk in his direction
				// walk
				this._Pos.x			+=	this._Vel.x * pCoef;
				this._Pos.y			+=	this._Vel.y * pCoef;
				this._onWalk();
				this._Dirty			=	true;
			
			return false;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method  collisionTime
		 * ------------------------------------------------------------------ *
		 * @param	{TCharacter} second character involved in the collision test
		 * @param	{Float} time factor
		 * @return	time of collision (if any)
		 * 			in range [0,1]
		 * 			if return -1 then no collision occured
		 * @about	interpolate collision with a static character
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.collisionTime = function ( pChar, pCoef ) {
			
			/* circle test : dist <= Radius
			 * let's call :
			 * > P the current @this.position
			 * > tP the position of @this along the time
			 * > C the @pChar.position
			 * > V the velocity of @this
			 * > R the sum of the radius of @this and @pChar
			 * 
			 * as we consider pChar as static
			 * the distance is (C-P) with P time dependant.
			 * tP = P + V*t
			 * at any moment of t we want to know if the distance is <= Range
			 * 
			 * so the equation is a bit complex, but we'll simplify it by 
			 * using @this in the local space of @pChar, then :
			 * P = @this.position - @pChar.position
			 * and now, the distance, is easier as it's just the length of P
			 * 
			 * Sqr(tPx * tPx + tPy * tPy) <= R
			 * -> tPx * tPx + tPy * tPy - R*R <= 0
			 * replace tPx and tPy with their values
			 * -> (Px+Vx.t)*(Px+Vx.t) + (Py+Vy.t)*(Py+Vy.t) - R.R <= 0
			 * -> Px.Px + t.t.Vx.Vx + 2.t.Px.Vx + Py.Py + t.t.Vy.Vy + 2.t.Py.Vy - R.R <=0
			 * -> t.t.Vx.Vx + t.t.Vy.Vy + 2*t.Px.Vx + 2.t.Py*Vy + Px.Px + Py.Py - R.R <=0
			 * -> t.t. (Vx.Vx + Vy.Vy) + t*( 2 * (Px.Vx + Py.Vy) ) + (Px.Px + Py.Py - R.R) <= 0
			 * let's say :
			 * A = Vx*Vx + Vy*Vy
			 * B = 2 * ( Px*Vx + Py*Vy)
			 * C = Px*Px + Py*Py - R*R
			 * 
			 * we now have a singular form that we know everything about :
			 * A.t2 + B.t + C <= 0
			 * 
			 * -> this is solved by computing the Delta
			 * Delta = B*B - 4 * A * C
			 * if Delta < 0 : no solution
			 * if Delta = 0 : T = -B-Sqr(Delta)/(2A)
			 * if Delta > 0 : 2 solutions
			 * 				  -(B-Sqr(Delta))/(2A)
			 * 				  +(B-Sqr(Delta))/(2A)
			 * 				  in this case, the good solution is the smallest positive t.
			 */
			
			// compute A,B,C and Delta
			// transform coords to local
			var l_Px	=	this._Pos.x-pChar._Pos.x;
			var l_Py	=	this._Pos.y-pChar._Pos.y;
			var l_Vx	=	this._Vel.x*pCoef;
			var l_Vy	=	this._Vel.y*pCoef;
			var l_R		=	this._Radius+pChar._Radius;
			// square the radius
				l_R		*=	l_R;
			
			// Vel*Vel
			var l_A		=	(l_Vx*l_Vx + l_Vy*l_Vy);
			// 2*Pos*Vel
			var l_B		=	2 * (l_Px*l_Vx + l_Py*l_Vy);
			// Pos*Pos - R*R
			var l_C		=	l_Px*l_Px + l_Py*l_Py - l_R;
			var l_Delta	=	l_B * l_B - 4 * l_A * l_C;
			
			if (l_Delta<0) {return -1;}
			if (l_Delta<0.001){var t=l_B/(2*l_A); return (t>=0?t:0);}
			
			// if delta >0 -> check the smallest positive result
			var t1		=	(-l_B-Sqr(l_Delta))/(2*l_A);
			var t2		=	(-l_B+Sqr(l_Delta))/(2*l_A);
			
			return (t1>t2 ? (t2<0 ? t1 : t2) : (t1<0 ? t2 : t1));
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method  collisionTimeFull
		 * ------------------------------------------------------------------ *
		 * @param	{TCharacter} second character involved in the collision test
		 * @param	{Float} time factor
		 * @return	time of collision (if any)
		 * 			in range [0,1]
		 * 			if return -1 then no collision occured
		 * @about	interpolate collision of two moving characters
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.collisionTimeFull = function ( pChar, pCoef ) {
			
			// First, we 'll pretend @this is static and at 0,0
			// -> we just remove @this pos and velocity from pChar
			//
			// then, we check the collision between a moving circle
			// and a static one positioned at the origin (0,0).
			// -> we'll use circle collision, because it's easier/faster.
			// collision happens if at any moment of time between 0 and pCoef
			// the distance between the circle is "<=" to the sum of the 2 radius
			// here the radius of each is th same + the range
			// we 'll check for Dist <= l_R1 + l_R2
			// equation :
			// X:l_x, Y:l_y, I:l_vx, J:l_vy, R:(l_R1+l_R2+pRange)*(l_R1+l_R2)
			// 
			// (X+t.I)*(X+t.I) + (Y+t.J)*(Y+t.J) <= R
			// (t.t.I.I + t.t.J.J) + (2t.I.X + 2t.J.Y) + (X.X+Y.Y - R) <= 0
			// t.t*(I.I+J.J) + t.2(I.X+J.Y) + (X.X+Y.Y-R)
			// A = I.I + J.J
			// B = 2 * (I.X + J.Y)
			// C = X.X + Y.Y - R
			// Delta = B.B - 4.A.C
			// if(Delta<0) -> no solution (= no collision)
			// if (Delta>0)
			// 		t1 = -(B-Sqr(Delta))/(2A)
			// 		t2 = -(B+Sqr(Delta))/(2A)
			// if (Delta==0)
			//		t = B/(2A)
			
			// transform coords to local
			var l_x		=	this._Pos.x-pChar._Pos.x;
			var l_y		=	this._Pos.y-pChar._Pos.y;
			var l_vx	=	((this._Vel.x)-(pChar._Vel.x))*pCoef;
			var l_vy	=	((this._Vel.y)-(pChar._Vel.y))*pCoef;
			var l_R		=	this._Radius+pChar._Radius;
				l_R		*=	l_R;
			
			// compute A,B,C and Delta
			var l_A		=	(l_vx*l_vx + l_vy*l_vy);
			var l_B		=	2*(l_x*l_vx + l_y*l_vy);
			var l_C		=	l_x*l_x + l_y*l_y - l_R;
			var l_Delta	=	l_B*l_B - 4 * l_A * l_C;
			
			if (l_Delta<0) {return -1;}
			if (l_Delta<0.001){var t=l_B/(2*l_A); return (t>=0?t:0);}
			
			// if delta >0 -> check the smallest positive result
			var t1		=	(-l_B-Sqr(l_Delta))/(2*l_A);
			var t2		=	(-l_B+Sqr(l_Delta))/(2*l_A);
			
			return (t1>t2 ? (t2<0 ? t1 : t2) : (t1<0 ? t2 : t1));
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{private} _getNearest
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @param	{TList} the list of characters to test
		 * @return	{TCharacter} the nearest character found
		 *			returns null if no character found
		 * @about	if pDir===0 then the 2 sides are tested.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype._getNearest = function ( pDir, pList, pCatchEmAll=false ) {
			
			// initialize with "fail" state
			var l_nearest = null;
			var l_nearestDist = -1;
			
			// get the 'sens' of the direction (in other words, normalize the direction)
			var l_dir = Sgn(pDir);
			var l_Pos = this._Pos;
			
			// no direction -> get nearest from any side
			if (l_dir===0){
				
				// traverse all characters until link is null
				var l_lnk = pList.firstLink();
				while (l_lnk!=null)
				{
					
					// the character associated to the link
					var l_char = l_lnk.value();
					
					// increment link for next loop
					l_lnk = l_lnk.after();
					
					// don't test against itself
					if (l_char!=this){
						
						if((l_char._State!=STATE_THROWN) && ( (pCatchEmAll==true) || ( (l_char._Immune==0) && (l_char._Life>0))) )
						{
							
							// square distance to the other character
							var l_dist = l_Pos.sqDistance(l_char._Pos);
							
							// if current nearest distance is '-1' it's the first character tested, so it's the nearest ...
							// for the moment.
							// else, test if new distance is smaller than previous one
							if ((l_nearestDist===-1) || (l_dist<l_nearestDist))
							{
								// we got a candidate
								l_nearest		=	l_char;
								l_nearestDist	=	l_dist;
							}
						}
					}
				}
			}else{
				
				// same stuff as above with an extra test
				var l_lnk = pList.firstLink();
				while (l_lnk!=null)
				{
					var l_char = l_lnk.value();
					
					// increment link for next loop
					l_lnk = l_lnk.after();
					
					if (l_char!=this){
						
						if((l_char._State!=STATE_THROWN) && ( (pCatchEmAll==true) || ( (l_char._Immune==0) && (l_char._Life>0))) )
						{
							
							// test if the character is on the side of the direction
							if (Sgn(l_char._Pos.x-l_Pos.x)==l_dir)
							{
								var l_dist = l_Pos.sqDistance(l_char._Pos);
								if ((l_nearestDist==-1) || (l_dist<l_nearestDist))
								{
									l_nearest		=	l_char;
									l_nearestDist	=	l_dist;
								}
							}
						}
					}
				}
			}
			return l_nearest;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{private} _getNearestX
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @param	{TList} the list of characters to test
		 * @return	{TCharacter} the nearest character found
		 *			returns null if no character found
		 * @about	same method as _getNearest but only check X axis
		 *			if pDir===0 then the 2 sides are tested.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype._getNearestX = function ( pDir, pList, pCatchEmAll=false ) {
			
			// initialize with "fail" state
			var l_nearest = null;
			var l_nearestDist = -1;
			
			// get the 'sens' of the direction (in other words, normalize the direction)
			var l_dir = Sgn(pDir);
			var l_X = this._Pos.x;
			
			// no direction -> get nearest from any side
			if (l_dir===0){
				
				// traverse all characters until link is null
				var l_lnk = pList.firstLink();
				while (l_lnk!=null)
				{
					// the character associated to the link
					var l_char = l_lnk.value();
					
					// increment link for next loop
					l_lnk = l_lnk.after();
					
					// don't test against itself
					if (l_char!=this){
						
						if((l_char._State!=STATE_THROWN) && ( (pCatchEmAll==true) || ( (l_char._Immune==0) && (l_char._Life>0))) )
						{
							
							// square distance to the other character
							var l_dist = Abs(l_char._Pos.x-l_X);
							
							// if current nearest distance is '-1' it's the first character tested, so it's the nearest ...
							// for the moment.
							// else, test if new distance is smaller than previous one
							if ((l_nearestDist===-1) || (l_dist<l_nearestDist))
							{
								// we got a candidate
								l_nearest		=	l_char;
								l_nearestDist	=	l_dist;
							}
						}
					}
				}
			}else{
				
				// same stuff as above with an extra test
				var l_lnk = pList.firstLink();
				while (l_lnk!=null)
				{
					var l_char = l_lnk.value();
					
					// increment link for next loop
					l_lnk = l_lnk.after();
					
					if (l_char!=this){
						
						if((l_char._State!=STATE_THROWN) && ( (pCatchEmAll==true) || ( (l_char._Immune==0) && (l_char._Life>0))) )
						{
							
							// test if the character is on the side of the direction
							var l_dist = l_char._Pos.x - l_X;
							if (Sgn(l_dist)===l_dir)
							{
								l_dist = Abs(l_dist);
								if ((l_nearestDist===-1) || (l_dist<l_nearestDist))
								{
									l_nearest		=	l_char;
									l_nearestDist	=	l_dist;
								}
							}
						}
					}
				}
			}
			return l_nearest;
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	getNearest
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @return	{TCharacter} the nearest character found
		 *			returns null if no character found
		 * @about	if pDir===0 then the 2 sides are tested.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.getNearest = function ( pDir,pCatchEmAll=false ) {
			return this._getNearest(pDir, TCharacter.List, pCatchEmAll);
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	getNearestX
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @return	{TCharacter} the nearest character found
		 *			returns null if no character found
		 * @about	if pDir===0 then the 2 sides are tested.
		 *			this method only test the x component.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.getNearestX = function ( pDir, pCatchEmAll=false ) {
			return this._getNearestX(pDir, TCharacter.List, pCatchEmAll);
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	getNearestPlayer
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @return	{TCharacter} the nearest {TPlayer} character found
		 *			returns null if no character found
		 * @about	if pDir===0 then the 2 sides are tested.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.getNearestPlayer = function ( pDir, pCatchEmAll=false ) {
			return this._getNearest(pDir, TPlayer.List, pCatchEmAll);
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	getNearestPlayerX
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @return	{TCharacter} the nearest {TPlayer} character found
		 *			returns null if no character found
		 * @about	if pDir===0 then the 2 sides are tested.
		 *			this method only test the x component.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.getNearestPlayerX = function ( pDir, pCatchEmAll=false ) {
			return this._getNearestX(pDir, TPlayer.List, pCatchEmAll);
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	getNearestIA
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @return	{TCharacter} the nearest {TCharacterIA} character found
		 *			returns null if no character found
		 * @about	if pDir===0 then the 2 sides are tested.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.getNearestIA = function ( pDir, pCatchEmAll=false ) {
			return this._getNearest(pDir, TCharacterIA.List, pCatchEmAll);
		}


		/**
		 * ------------------------------------------------------------------ *
		 * @method	getNearestIAX
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X direction to check
		 * @return	{TCharacter} the nearest {TCharacterIA} character found
		 *			returns null if no character found
		 * @about	if pDir===0 then the 2 sides are tested.
		 *			this method only test the x component.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.getNearestIAX = function ( pDir, pCatchEmAll=false ) {
			return this._getNearestX(pDir, TCharacterIA.List, pCatchEmAll);
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	avoidCollisions
		 * ------------------------------------------------------------------ *
		 * @param	{TList} list of characters to sort
		 * @param	{Integer} minimum distance between characters
		 * @about	sort characters by their X position around the character @this
		 *        	is the distance between them is lower than @pDistBetweenChars
		 *        	they are updated so that their distance to the neighboor matches
		 *        	the requirement.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.avoidCollisions = function ( pList, pDistBetweenChars = 128 ){
			var l_Origin = this._Pos.x;
			
			// 2 empty lists to sort the Left side and Right side of characters.
			var l_L = new TList();
			var l_R = new TList();
			
			// TLink object to traverse the lists
			var l_Lnk = pList.firstLink();
			var l_LnkL = null;
			var l_LnkR = null;
			
			// TCharacter objects associated to the links.
			var l_Char = null;
			var l_CharL = null;
			var l_CharR = null;
			
			// current position
			var l_X = 0;
			
			// sort each characters in two lists (one ascending one descending)
			// list l_L contains list from nearest to farthest characters 
			// from @this on the left side of @this
			// list l_R contains list from nearest to farthest characters
			// from @this on the right side of @this
			while (l_Lnk!=null){
				var l_Char = l_Lnk.value();
				l_Lnk = l_Lnk.after();
				
				if (( l_Char._Immune==0 && l_Char._Unstoppable==0) &&	// don't sort unstopable
					((l_Char._State!=STATE_THROWN &&				// don't sort locked
				  	  l_Char._State!=STATE_HELD &&
				  	  l_Char._State!=STATE_SHAKED)) )
				{
					var l_Found = false;
					l_X = l_Char._Pos.x;
					
					if (l_X>=l_Origin){
						l_Char._OnSide = 1;
						l_LnkR = l_R.lastLink();
						while (l_LnkR!=null){
							if (l_LnkR.value()._Pos.x<=l_X){
								l_Found = true;
								l_R.insertAfter(l_Char, l_LnkR);
								break;
							}
							l_LnkR = l_LnkR.before();
						}
						if (l_Found==false){l_R.addFirst(l_Char);}
					}else{
						l_Char._OnSide = -1;
						l_LnkL = l_L.lastLink();
						while (l_LnkL!=null){
							if (l_LnkL.value()._Pos.x>=l_X){
								l_Found = true;
								l_L.insertAfter(l_Char, l_LnkL);
								break;
							}
							l_LnkL = l_LnkL.before();
						}
						if (l_Found==false){l_L.addFirst(l_Char);}
					}
				}
			}
			
			// update characters in both list such as all the characters are espaced
			// the one from the others
			l_X = l_Origin-25;
			l_Lnk = l_L.firstLink();
			while(l_Lnk!=null){
				l_Char = l_Lnk.value();
				var l_X2 = l_Char._Pos.x;
				if (l_X2>=l_X)
				{
					l_X2 = l_X;
					l_Char._Pos.x = l_X;
					l_Char._Dirty = true;
				}
				l_X = l_X2 - pDistBetweenChars;
				l_Lnk = l_Lnk.after();
			}
			
			l_X = l_Origin + 25;
			l_Lnk = l_R.firstLink();
			while(l_Lnk!=null){
				l_Char = l_Lnk.value();
				var l_X2 = l_Char._Pos.x;
				if (l_X2<=l_X)
				{
					l_X2 = l_X;
					l_Char._Pos.x = l_X;
					l_Char._Dirty = true;
				}
				l_X = l_X2 + pDistBetweenChars;
				l_Lnk = l_Lnk.after();
			}
			
		}
		
		
		TCharacter.prototype.Overlaps = function ( char ) {
			var l_R1 = 16 + (this._Unstoppable>0?2:0);
			var l_R2 = 16 + (char._Unstoppable>0?2:0);
			var l_p1 = this._Pos.x-l_R1;
			var l_p2 = char._Pos.x-l_R2;
			if (l_p1>l_p2+2*l_R2) {return false;}
			if (l_p2>l_p1+2*l_R1) {return false;}
			
			var l_H1 = 75 + (this._Unstoppable>0?7:0);
			var l_H2 = 75 + (char._Unstoppable>0?7:0);
			l_p1 = this.depthY + this._Pos.z;
			l_p2 = char.depthY + char._Pos.z;
			if (l_p1>l_p2+l_H2) {return false;}
			if (l_p2>l_p1+l_H1) {return false;}
			
			/* // don't do z test.
			l_p1 = this._Pos.z-l_R1;
			l_p2 = char._Pos.z-l_R2;
			if (l_p1>l_p2+2*l_R2) {return false;}
			if (l_p2>l_p1+2*l_R1) {return false;}
			*/
		
			return true;
		}





		/**
		 * ------------------------------------------------------------------ *
		 * @method	remove
		 * ------------------------------------------------------------------ *
		 * @about	remove a character from the list(s) and delete its content.
		 * ------------------------------------------------------------------ *
		 */
		TCharacter.prototype.remove = function(){
			var l_Target = this._Target;
			if (l_Target!=null){
				if (l_Target._Target==this){l_Target._Target = null;}
				this._Target = null;
			}
			if (this._Sprite!=null){
				this._Sprite.destroy();
				this._Sprite = null;
			}
			if (this._Shadow!=null){
				this._Shadow.destroy();
				this._Shadow = null;
			}
			if (this._HitBox!=null){
				this._HitBox.destroy();
				this._HitBox = null;
			}
			
			this._onRemove();
			// remove from the global characters.
			TCharacter.List.removeLink(this._Link);
		}
		
		TCharacter.prototype._onRemove = function(){
		}
		
		TCharacter.prototype.hasMoney = function(){
			return this._Money>0;
		}

// player.js
	var EVENT_PLAYERWALK	=	AllocUserEventId();
	var EVENT_PLAYERTARGET	=	AllocUserEventId();
	var EVENT_PLAYERTAKE	=	AllocUserEventId();
	var EVENT_PLAYERSHAKE	=	AllocUserEventId();
	var EVENT_PLAYERTHROW	=	AllocUserEventId();
	var EVENT_PLAYERKILL	=	AllocUserEventId();
	var EVENT_PLAYERSKILL	=	AllocUserEventId();
	var EVENT_PLAYERDAMAGED	=	AllocUserEventId();
	var EVENT_PLAYERDIED	=	AllocUserEventId();
	var EVENT_PLAYEREARN	=	AllocUserEventId();
	var EVENT_PLAYEREXPLODE	=	AllocUserEventId();
	var EVENT_PLAYERCOMBO	=	AllocUserEventId();

	/* ========================================================================== */
	/*							- TPlayer Constructor -							  */
	/* ========================================================================== */
		
		/** {TPlayer}
		 * ------------------------------------------------------------------ *
		 * @class	{Extends TCharacter} TPlayer
		 * ------------------------------------------------------------------ *
		 * @constructor
		 * @about	Player Class
		 * @see		TPlayer is a character controlled by the user
		 *[@param	{String} name of the character]
		 *[@param	{Integer} Identifier of the model in its list]
		 *[@param	{Phaser.Group} group to attach the sprite]
		 * ------------------------------------------------------------------ *
		 */
		var TPlayer = Extends ( TCharacter, function ( pName='', pModelId=0, pGroup=null ) {
			// call the super constructor (ie:the base class constructor -> TCharacter)
			Super(this, pName, pModelId, pGroup);
			
			return this;
		});
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @function Create
		 * ------------------------------------------------------------------ *
		 *[@param	{String} name of the character]
		 *[@param	{Integer} Identifier of the model in its list]
		 *[@param	{Phaser.Group} group to attach the sprite]
		 * @return	{TPlayer} the newly created player.
		 * @about	the real function to create a player !
		 *			-> the new constructor can't be called without this function.
		 *			(for safer code)
		 * ------------------------------------------------------------------ *
		 */
		TPlayer.Create = function ( pName='', pModelId=0, pGroup=null ) {
			// enable the super constructor
			TCharacter._EnableConstructor();
			
			// create and return the new player based on the model defined
			return new TPlayer(pName, pModelId, pGroup);
		}
		
	/* ========================================================================== */
	/*								- Protected -								  */
	/* ========================================================================== */
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private-Override} _onLoadSprite
		 * ------------------------------------------------------------------ *
		 * @about	overrides the #_onLoadSprite method to create a "player"
		 *			sprite
		 * ------------------------------------------------------------------ *
		 */
		TPlayer.prototype._onLoadSprite = function ( ) {
			this._Mode				=	0;
			
			this._Pos.x				=	Clamp		(	this._Pos.x,
													  TGame.boundaries[0]+300,
													  TGame.boundaries[0]+TGame.boundaries[2]-700);
			this._Pos.y				=	Clamp		(	this._Pos.y,
													  TGame.groundYMin3D,
													  TGame.groundYMax3D);
			this._onReloadSprite					( );
		}
		
		TPlayer.prototype._onReloadSprite = function (){
			this._onReloadShadow		( );
			
			SetHandle					( 0.5, 1 );
			SetBlend					( 0 );
			SetScale					( 1.0, 1.0 );
			SetRotation					( 0 );
			SetAlpha					( 1 );
			SetColor					( 255,255,255 );
			
			this._Sprite			=	AddImage	( TGame.players_name[this._ModelId],
													  0,0, this._Group );
			AppendAnimation				( this._Sprite, TGame.players_seqs[this._ModelId] );
			
			if ((this._Sayan!=undefined) && (this._Sayan!=null)){
				this._Sayan				.reset(this);
			}
		}
		
		TPlayer.prototype._onReloadShadow = function(){
			if(TGame.useShadows==true){
				SetHandle				( 0.5, 1 );
				SetBlend				( 0 );
				
				SetColor				( 0, 0, 0 );
				SetAlpha				( 0.2 );
				SetScale				( 1.3, 0.1 );
				//SetRotation			( 5 );
				this._Shadow		=	AddImage	( TGame.players_name[this._ModelId],
													  0,0, this._Group );
				AppendAnimation			( this._Shadow, TGame.players_seqs[this._ModelId] );
				SetScale				( 1.0, 1.0 );
				SetRotation				( 0 );
				SetAlpha				( 1 );
				SetColor				( 255,255,255 );
			}
		}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private-Override} _onCreate
		 * ------------------------------------------------------------------ *
		 * @about	overrides the #_onCreate method called by constructor
		 * 			allow us to store the player in a specific list
		 * ------------------------------------------------------------------ *
		 */
		TPlayer.prototype._onCreate	=	function ( ) {
			this._LinkPlayer		=	TPlayer.List.addLast ( this );
			
			// bu default, run the "facing" animation.
			this._Sprite.animations		.play		( 'face' );
			
			// player' speed
			this._Speed				=	4.0;
			
			//money
			this._Money				=	0;
			this._MoneyCoef			=	1;
			
			this._CatchDir			=	0;
			
			//stats
			this._countOnThrow		= 	0;
			this._countOnShake		= 	0;
			this._countOnShakeCheck = 	true;
			
			//xp
			this._Level				=	0;
			this._xp				=	0.0;
			this._SkillXPBase		=	10;
			this._SkillXPLevel		=	1.0/3.0;
			this._xpNext			=	this._SkillXPBase;
			
			//heart
			this._Life				=	5;
			this._MaxLife			=	5;
			
			//combo
			this._combo				= 	0;
			this._comboDisplayStart = 	false;
			
			this._ContinueCoin		=	0;
			
			// create stuff for sayan sequence
			this._Sayan				=	new TSayanSkill(this);
			// create a sequencer to "animate" the fx
			this._Sequencer			=	new TSequencer('sayan skill');
			// add steps of sayan skill
			this._Sequencer				.add(this._Sayan.step1, STATE_SAYAN1.delay);
			this._Sequencer				.add(this._Sayan.step2, STATE_SAYAN2.delay);
			this._Sequencer				.add(this._Sayan.step3, STATE_SAYAN3.delay);
			this._Sequencer				.add(this._Sayan.step4, STATE_SAYAN4.delay);
			this._Sequencer				.add(this._Sayan.step5, STATE_SAYAN5.delay);
			
			return this;
		}
		
		TPlayer.prototype.explode = function (){
			this._Target			=	null;
			
			var l_Lnk = TCharacterIA.List.firstLink();
			if (l_Lnk!=null) {
				TGame.game.camera.shake	( 0.05, 1000 );
			}
			
			var l_ComboAdd			=	0;
			var l_NbIA				=	TCharacterIA.List.count();
			while (l_NbIA>0){
				l_NbIA--;
				l_ComboAdd			++;
				l_ComboAdd			*=	1.5;
			}
			if (l_ComboAdd>0){
				this._combo			=	Min(this._combo + Ceil(l_ComboAdd), TGame.COMBO_MAX);
				CreateEvent				( EVENT_PLAYERCOMBO,
										  this._Pos.x,
										  this.depthY-138,
										  null
										).emit();
			}
			
			var COEF_THROW_EXPLODE	=	0.75;
			
			while (l_Lnk!=null){
				var l_Char			=	l_Lnk.value();
				l_Lnk				=	l_Lnk.after();
				
				l_Char.unlock();
				l_Char.startState(STATE_THROWN);
				l_Char._onThrown();
				
				l_Char._Vel.x		=	Sgn(l_Char._Pos.x-this._Pos.x) * Rnd(5,10) * COEF_THROW_EXPLODE;
				l_Char._Vel.y		=	-(l_Char._Pos.y-this._Pos.y)*0.4 * COEF_THROW_EXPLODE;
				l_Char._Vel.z		=	-(1+l_Char._Pos.z*0.4) * Rnd(5,15) * COEF_THROW_EXPLODE;
				
				l_Char._Dir				.set(-Sgn(l_Char._Vel.x),Sgn(l_Char._Vel.x));
				
				// char is considered dead, so it can't be unlocked
				l_Char._Life		=	0;
				
				// drop left moneys
				var l_Bills = 0;
				var l_NBills = Rand(5,15);
				for (l_Bills=0; l_Bills<l_Char._Money; l_Bills++){
					this._Money		+=	this._MoneyCoef * l_Char.emitBills();
				}
			}
			CreateEvent(EVENT_PLAYEREXPLODE, this._Pos.x, this._Pos.y, this).emit();

		}
		
		Object.defineProperty(TPlayer.prototype, 'level', {
			get:function(){return this._Level;},
			set:function(pLevel){this._Level = pLevel;}
		})
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private-Extended} _onUpdate
		 * ------------------------------------------------------------------ *
		 * @param	{Float} Time Factor
		 * ------------------------------------------------------------------ *
		 */
		TPlayer.prototype._onUpdate = function(pCoef)
		{
			if (this._Cinematic==true){return;}
			
			// local for tolerance factor -> depends on the gameplay
			// - mode 0 : depth locked -> tolerance increased
			// - mode 1 : z depth unlocked -> lower tolerance for catching.
			var l_toleranceFactor	=	1.0 + (this._Mode==0 ? TGame.toleranceFactor : 0);
			
			
			// on each loop, check the immunity timer
			if (this._Immune>0){
				this._Immune		=	this._ImmuneTime>MilliSecs()?this._Immune:0;
				this._Dirty			=	true;
			}
			
			if (this._PickedItem != null){
				if (this._PickedTime+this._PickedLength>MilliSecs()){
					this._Dirty		=	true;
				}else{
					this._PickedItem=	null;
					this._Dirty		=	true;
				}
			}
			
			// get input states
				
				// arrow keys (on touchpad the arrow icons also generate key events for simplicity)
				var l_LR			=	KeyDown(KEY_RIGHT) - KeyDown(KEY_LEFT);
				var l_UD			=	KeyDown(KEY_UP) - KeyDown(KEY_DOWN);
				
				var l_KL			=	KeyHit(KEY_LEFT);	// catch on the left
				var l_KR			=	KeyHit(KEY_RIGHT);	// catch on the right
				var l_KU			=	KeyHit(KEY_UP);		// you shake to check ... and take the carnet d'Chèque
				var l_KD			=	KeyHit(KEY_DOWN);	// ... mmm ... whatever ...
				var l_H				=	KeyHit(KEY_SPACE);
				
			if (l_H>0){
				if (this._xp >= this._xpNext) {
					this._xp		=	0;
					this._xpNext	=	this._SkillXPBase + Floor(this._Level*this._SkillXPLevel);
					this.unlock();
					this.skill();
				}
				return;
			}else if (KeyHit(KEY_S) && GAME_MODE == MODE_GOD){
				this.unlock();
				this.skill();
			}
				
			// get new direction
				var l_DirX			=	0;
				var l_DirY			=	0;
					// priority :	1 : catch left/right
					//				2 : walk
					 if(l_KL>0){l_DirX = -1; this._CatchDir = -1;}
				else if(l_KR>0){l_DirX =  1; this._CatchDir =  1;}
				else if(l_LR<0){l_DirX = -1;}
				else if(l_LR>0){l_DirX =  1;}
					// priority :	1 : shake (up)
					//				2 : walk
					 if(l_KU>0){l_DirY = -1;}
				else if(l_UD>0){l_DirY = -1;}
				else if(l_KD>0){l_DirY =  1;}
				else if(l_UD<0){l_DirY =  1;}
				
				if (l_LR==0){ this._CatchDir = 0;}
			
			var l_Bounds	=	TGame.boundaries;
			var l_Limit		=	200+64; // screen pos + border size + half char size.
			var l_Limit2	=	TGame.halfWidth;
			
			// according to current state, let's see what we can do.
			switch(this._State){
				
				case STATE_DEAD:
					this.immune(1, 1);
					this._Dirty	=	true;
					if(this.stateEnd()){
						// go to game over screen
						this._Anim='';
						this._Dirty = true;
					}
					break;
					
				case STATE_SKILL:
					this.immune(1, 1);
					this._Dirty	=	true;
					break;
					
				case STATE_STUN:
					if (this.stateEnd()) {this.wait();}break;
					
				case STATE_TARGET	:
					if (this._Target==null){this.unlock();this.wait();break;}
					this.immune(1, 1);
					this.unlock();
					if ((this._Target._Pos.y<TGame.groundYMin3D ) || (this._Target._Pos.y>TGame.groundYMax3D)){ this._Target = null; this.wait(); break; }
					if (this.moveToChar ( this._Target, pCoef, TGame.catchTolerance*l_toleranceFactor )){
						if (this._Immune==1){this._Immune=0;}
						this.take(this._Target);
					}
					this._Pos.y = Clamp(this._Pos.y, TGame.groundYMin3D, TGame.groundYMax3D);
					this._Pos.x = Clamp(this._Pos.x, l_Bounds[0]+l_Limit, l_Bounds[0]+l_Bounds[2]-l_Limit2);
					this.lock();
					
					if (this._State==STATE_TAKE){break;}
					// break targeting if opposite direction engaged
					if ((this._Vel.x>0 && l_DirX<0) || (this._Vel.x<0 && l_DirX>0)) {
						// accept change direction only if it does not mean the player get touched in the loop
						if (this._Target.distance(this)>TGame.touchTolerance*l_toleranceFactor*2) {
							// untarget
							this._Target = null;
						} else {
							break;
						}
					} else {
						break;
					}
					
				// if you're doing nothing, then you can :
				// do that can be done in the walk step.
				case STATE_WAIT :
					// so, there is nothing here
					if (this._Anim!='face'){ this._Anim='face'; }
					this._Dirty = true;
					this.unlock();
					
				case STATE_WALK	:
					this.unlock();
					this._Vel.x = l_DirX * this._Speed;
					this._Dir.x = l_DirX;
					
					switch (this._Mode){
						case 0:
							// try to catch on the "KeyHit" direction
							if(this._CatchDir!=0) { if (this._tryAndCatch(this._CatchDir,pCoef)) {
								this._Pos.x = Clamp(this._Pos.x, l_Bounds[0]+l_Limit, l_Bounds[0]+l_Bounds[2]-l_Limit2);
								break;}
							}
							
							// state didn't change ? so he failed to catch. try to move then.
							var l_Moved=false;
								 if(l_DirX<0)	{this.moveLeft	( pCoef ); l_Moved=true;}
							else if(l_DirX>0)	{this.moveRight	( pCoef ); l_Moved=true;}
							this._Pos.x = Clamp(this._Pos.x, l_Bounds[0]+l_Limit, l_Bounds[0]+l_Bounds[2]-l_Limit2);
							break;
							
						case 1:
							
							this._Vel.y = l_DirY * this._Speed;
							this._Dir.y = l_DirY;
							
							// try to catch on the "KeyHit" direction
							if((l_KL>0) || (l_KR>0)){if (this._tryAndCatch(l_DirX,pCoef)){break;}}
							
							// state didn't change ? so he failed to catch. try to move then.
							var l_Moved=false;
								 if(l_DirX<0)	{this.moveLeft	( pCoef ); l_Moved=true;}
							else if(l_DirX>0)	{this.moveRight	( pCoef ); l_Moved=true;}
								 if(l_DirY>0)	{this.moveDown	( pCoef ); l_Moved=true;}
							else if(l_DirY<0)	{this.moveUp	( pCoef ); l_Moved=true;}
							
							this._Pos.x = Clamp(this._Pos.x, l_Bounds[0]+l_Limit, l_Bounds[0]+l_Bounds[2]-l_Limit2);
							break;
					}
					// so we don't move ?
					if (!l_Moved) {this.wait();}
					
					break;
					
				case STATE_TAKE:
					if (this._Target==null){this.unlock();this.wait();break;}
					if(this.stateEnd()){
						this.unlock(); this.hold(this._Target);
					}
					break;
					
				case STATE_DAMAGE:
					
					if(this.stateEnd()){
						this.unlock(); this.wait();
					}
					break;
					
				case STATE_HOLD:
					if (this._Target==null){this.unlock();this.wait();break;}
						 if (l_KU>0){ this.unlock(); this.shake(this._Target);    break;}
					else if (l_KR>0){ this.unlock(); this.throw(this._Target, 1); break; }
					else if (l_KL>0){ this.unlock(); this.throw(this._Target,-1); break; }
					
					break;
					
				case STATE_SHAKE:
					if (this._Target==null){this.unlock();this.wait();break;}
						 if (l_KU>0){ this.unlock(); this.shake(this._Target);    break;}
					else if (l_KR>0){ this.unlock(); this.throw(this._Target, 1); break; }
					else if (l_KL>0){ this.unlock(); this.throw(this._Target,-1); break; }
					
					if(this.stateEnd()){ this.unlock(); this.hold(this._Target); }
					break;
					
				case STATE_THROW:
					
					if (this.stateEnd()){ this.unlock(); this.wait();}
					break;
					
				case STATE_TAKEN:
					
					if (this.stateEnd()){ this.unlock(); this.wait();}
					break;
					
				case STATE_DAMAGED:
					
					if(this.stateEnd()){
						this.unlock(); this.wait();
					}
					break;
					
			}
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private} _tryAndCatch
		 * ------------------------------------------------------------------ *
		 * @param	{Integer} X Direction to check
		 * @param	{Float}	Time Factor
		 * @return	{BOOLEAN}
		 * @about	check if the player can catch an IA character
		 * ------------------------------------------------------------------ *
		 */
		TPlayer.prototype._tryAndCatch = function ( pDir, pCoef ){
			var l_toleranceFactor	=	1.0 + (this._Mode==0 ? TGame.toleranceFactor : 0);
			
			// get the nearest guy on the catch direction
			var l_Char = this.getNearestIAX(pDir, false);
			
			// we got one ? perfect !
			if (l_Char!=null){
				
				// compute the collision time
				var l_T				=	this.collisionTime(l_Char, pCoef);
				if (l_T<0)				{ return false; }
				
				// transform time to a distance
				var l_Dist			=	this._Vel.length() * pCoef * l_T;
				
				// if not too far to catch the character
				if (Abs(l_Dist)<=(TGame.catchTolerance*l_toleranceFactor))
				{
					this				.take	( l_Char );
					return true;
				}
				
				// ... or eventually to target him
				else if (Abs(l_Dist)<=(TGame.targetTolerance*l_toleranceFactor))
				{
					// we target the guy -> we'll run to him automatically.
					this.unlock();
					this.setTarget		(l_Char);
					this._Dirty		=	true;
					this.lock();
					CreateEvent(EVENT_PLAYERTARGET, this._Pos.x, this._Pos.y, this, this._Target).emit();
					
					return true;
				}
			}
			return false;
		}
		
		
		TPlayer.prototype.incScore = function ( ) {
			/*	
			if (this._Target==null){return;}
			if (this._Target._Money>0)
			{
				this._Money			+=	this._MoneyCoef;
				this._Target._Money	-=	1;
				PlaySound				( 'coin', true, 0.1, false );
			}
			*/
		}
		
	/* ========================================================================== */
	/*								- action callbacks -						  */
	/* ========================================================================== */
		
		TPlayer.prototype._onLifeUp = function(pLife) {
			if (this._Life<this._MaxLife) {this._Life = pLife;}
			this.immune (2, STATE_IMMUNE._Delay);
		};
		TPlayer.prototype.combo2X = function(){
			this._combo			=	( (this._combo>2 ? this._combo*2 : 5) - 1 );
			CreateEvent				( EVENT_PLAYERCOMBO,
									  this._Pos.x,
									  this.depthY-138,
									  this._Target
									).emit();
		}
		
		TPlayer.prototype._onWalk = function ( ) {
			this._Anim			=	'marche';
			CreateEvent				( EVENT_PLAYERWALK,
									  this._Pos.x,
									  this._Pos.y,
									  this
									).emit();
		}
		
		TPlayer.prototype._onSkill = function ( ) {
			// run <sayan> skill sequencer.
			this._Sequencer			.start(this._Sayan);
			CreateEvent				( EVENT_PLAYERSKILL,
									  this._Pos.x,
									  this._Pos.y,
									  this
									).emit();
		}
		
		TPlayer.prototype._onTake = function(){
			this._Anim			=	'prend';
			if (this._Target!=null)
			{
				this._Target._TakePos.set(this._Pos.x, this._Pos.y);
				//this._Target._Pos.set(this._Pos.x, this._Pos.y);
				this._Target._Dir.x = -this._Dir.x;
				CreateEvent			( EVENT_PLAYERCOMBO,
									  this._Pos.x,
									  this.depthY-138,
									  this._Target
									).emit();
			}
			CreateEvent				( EVENT_PLAYERTAKE,
									  this._Pos.x,
									  this._Pos.y,
									  this,
									  this._Target
									).emit();
		}
		
		TPlayer.prototype._onHold = function(){
			this._Anim			=	'tiens';
		}
		
		TPlayer.prototype._onShake = function(){
			this._Anim			=	'secoue';
			if (this._Target==null){return;}
			
			PlayFxSound				( 'shake-'+(this._Target.hasMoney()?1:2)+"-"+Rand(1,2),
									  true,
									  TGame.MASTER_VOLUME*TGame.FX_VOLUME*0.02,
									  false
									);
			
			if (this._Target._Money>0)
			{
				this._Money		+=	this._combo*this._MoneyCoef * this._Target.emitBills();
				this._Target._Money-=	1;
				if (this._Target._MoneyInfiny == true){
					this._Target._Money = this._Target._MaxMoney;
				}
				CreateEvent			( EVENT_PLAYEREARN,
									  this._Pos.x,
									  this._Pos.y,
									  this,
									  this._Target
									).emit();
			}
			CreateEvent				( EVENT_PLAYERSHAKE,
									  this._Pos.x,
									  this._Pos.y,
									  this,
									  this._Target
									).emit();
			if (this._countOnShakeCheck == true){
				this._countOnShake	+= 1;
				this._countOnShakeCheck = false;
			}
		}
		
		TPlayer.prototype._onThrow = function ( pDir ) {
			this._Anim			=	'lance';
			this._Dir.x			=	pDir;
			this._Vel.x			=	Abs(this._Vel.x)*pDir;
			this._Dirty			=	true;
			
			var l_Char			=	this._Target;
			var l_Precision		=	(Clamp(this._combo,1,TGame.COMBO_MAX)/TGame.COMBO_MAX);
			var l_InvPrecision	=	(1.01-l_Precision) * (0.5 + 0.25*(l_Char._Unstoppable>0?0:0.75));
			l_Char._Vel.x		=	( pDir + Rnd(-0.01,0.01) ) * (7+Rnd(1.5+2*l_Precision)*(l_Char._Unstoppable>0?1.5:1));
			l_Char._Vel.y		=	Rnd(-1,2) + Rnd(-1,3)*l_InvPrecision;
			l_Char._Vel.z		=	-Rnd(7,9) - Rnd(0,5)*l_InvPrecision;
			l_Char._Dir				.set(-Sgn(l_Char._Vel.x),Sgn(l_Char._Vel.y));
			l_Char._thrownByPlayer=	this;
			
			CreateEvent				( EVENT_PLAYERTHROW,
									  this._Pos.x,
									  this._Pos.y,
									  this,
									  this._Target
									).emit();
			this._xp			+=	1;
			
			this._countOnThrow	+= 	1;
			this._countOnShakeCheck = true;
		}
		
		TPlayer.prototype._onDamage = function(){
			this._Anim			=	'';
		}
		
		TPlayer.prototype._onDamaged = function(pByChar){
			this._Anim			=	'degat';
			this					.immune (2, STATE_IMMUNE._Delay);
			this._Damaged		=	true;
			this._DamagedTime	=	MilliSecs();
			
			this._Life			=	this._Life > 0 ? this._Life-1 : 0;
			
			this._Money			-=	pByChar._CoinValue[Rand(pByChar._CoinValue.length-1)];
			this._combo			=	0;
			
			// free the held guy (if any)
			if (this._Target!=null){
				//this._Target._Pos.assign(this._Target._PrevPos);
				//this._Target._Pos.set(this._Pos.x-this._Target._Dir.x*48*Rand(3,8), this._Pos.y);
				this._Target._Pos.set(this._Pos.x-this._Target._Dir.x*48+Rand(10,25), this._Pos.y);
				this._Target.unlock();
				this._Target.wait();
				this._Target	=	null;
			}
			TGame.game.camera.shake(0.002,500);
			
			if (this._Life<=0){
				this._Life		=	0;
				this.unlock();
				this.die();
			}
			CreateEvent				( EVENT_PLAYERDAMAGED,
									  this._Pos.x,
									  this._Pos.y,
									  this,
									  pByChar
									).emit();
		}
		
		TPlayer.prototype._onDie = function(){
			this._Anim			=	'genou';
			this._Dirty			=	true;
			CreateEvent				( EVENT_PLAYERDIED,
									  this._Pos.x,
									  this._Pos.y,
									  this
									).emit();
		}
		
		TPlayer.prototype._onKill = function(){
			CreateEvent				( EVENT_PLAYERKILL,
									  this._Pos.x,
									  this._Pos.y,
									  this,
									  this._Target
									).emit();
			// random catch phrase ... ?
		}
		
		TPlayer.prototype._onTaken = function(){
			this._Anim			=	'';
		}
		
		TPlayer.prototype._onHeld = function(){
			this._Anim			=	'';
		}
		
		TPlayer.prototype._onShaked = function(){
			this._Anim			=	'';
		}
		
		TPlayer.prototype._onThrown = function(){
			this._Anim			=	'';
		}
		
		TPlayer.prototype._onRemove = function(){
			TPlayer.List.removeLink(this._LinkPlayer);
			this._LinkPlayer	=	null;
		}
		
		TPlayer.Clear = function (){
			var l_LinkC = TPlayer.List.firstLink();
			while (l_LinkC!=null){
				var l_Char_ = l_LinkC.value();
				l_LinkC=l_LinkC.after();
				l_Char_.remove();
			}
			TPlayer.List.clear();
		}
	
// characteria.js
	var EVENT_CHARACTERIADIED = AllocUserEventId();

	/* ========================================================================== */
	/*							- TCharacterIA Constructor -					  */
	/* ========================================================================== */
		
		var TCharacterIA = Extends(TCharacter, function(pName='', pModelId=0, pGroup=0)
		{
			Super(this, pName, pModelId, pGroup);
			return this;
		});
		
		
		TCharacterIA.Create = function ( pName, pModelId, pGroup)
		{
			TCharacter._EnableConstructor();
			return new TCharacterIA(pName, pModelId, pGroup);
		}
		
		
	/* ========================================================================== */
	/*								- Protected -								  */
	/* ========================================================================== */
		
		TCharacterIA.prototype._onLoadSprite = function(){
			this._Pos.x				=	Clamp		( this._Pos.x,
													  TGame.boundaries[0],
													  TGame.boundaries[0]+TGame.boundaries[2]);
			this._Pos.y				=	Clamp		( this._Pos.y,
													  TGame.groundYMin3D,
													  TGame.groundYMax3D);
			this._onReloadSprite					( );
			this._Dirty				=	true;
		}
		
		TCharacterIA.prototype._onReloadSprite = function (){
			this._onReloadShadow		( );
			
			SetBlend					( 0 );
			SetHandle					( 0.5, 1 );
			SetScale					( 1.0, 1.0 );
			SetRotation					( 0 );
			SetAlpha					( 1 );
			SetColor					( 255,255,255 );
			this._Sprite			=	AddImage	( TGame.characters_name[this._ModelId],
													  0, 0, this._Group );
			AppendAnimation				( this._Sprite, TGame.characters_seqs[this._ModelId] );
		}
		
		TCharacterIA.prototype._onReloadShadow = function(){
			if(TGame.useShadows==true){
				SetHandle				( 0.5, 1 );
				SetBlend				( 0 );
				
				SetColor				( 0, 0, 0 );
				SetAlpha				( 0.2 );
				SetScale				( 1.3, 0.1 );
				//SetRotation			( 5 );
				this._Shadow		=	AddImage	( TGame.characters_name[this._ModelId],
													  0,0, this._Group );
				AppendAnimation			( this._Shadow, TGame.characters_seqs[this._ModelId] );
				SetScale				( 1.0, 1.0 );
				SetRotation				( 0 );
				SetAlpha				( 1 );
				SetColor				( 255,255,255 );
			}
		}
		
		TCharacterIA.prototype._onCreate = function(){
			this._LinkIA			=	TCharacterIA.List.addLast ( this );
			
			this._Sprite.animations		.play		( 'marche' );
			
			// IA has only one life.
			this._MaxLife			=	1;
			this._Life				=	1;
			this._MaxMoney			=	Rand(3,10);
			this._Money				=	this._MaxMoney;
			this._MoneyInfiny		=	false;
			
			this._Speed				=	Rnd(1.0,2.5);
			
			this._CoinSkin			=	TGame.characters_bills[this._ModelId];
			this._CoinValue			=	[parseInt(TGame.bills_values[this._CoinSkin[0]]),
										 parseInt(TGame.bills_values[this._CoinSkin[1]]),
										 parseInt(TGame.bills_values[this._CoinSkin[2]])];
			this._CoinProb			=	[0.7, 0.2, 0.1];
			
			this._thrownByPlayer	=	null;
		}
		
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	{Private-Extended} _onUpdate
		 * ------------------------------------------------------------------ *
		 * @param	{Float} the time factor.
		 * @about	update the character during the loop.
		 * ------------------------------------------------------------------ *
		 */
		TCharacterIA.prototype._onUpdate = function ( pCoef ) {
			
			if (this._PickedItem != null){
				if (this._PickedTime+this._PickedLength>MilliSecs()){
					this._Dirty		=	true;
				}else{
					this._PickedItem=	null;
					this._Dirty		=	true;
				}
			}
			
			if (this._State==STATE_LOCKED){return;}
			
			// no target ? find one !
			if(this._Target==null)
			{
				var l_FoundChar		=	this.getNearestPlayerX(0);
				// can't find a player ? this character is maybe buged ... let's just remove him.
				if (l_FoundChar==null) {
					this				.remove	( );
					return;
				}
				this.target			=	l_FoundChar;
			}else{
				// so far ... not so good
				if (Abs(this._Target._Pos.x-this._Pos.x)>TGame.width*4)
				{
					// the character is so far from the player that it's better to not deal with him.
					this				.remove	( );
					return;
				}
			}
			
			// prevent levitating IAs (IA that went to a HELD/SHAKED/... state and are not targeted anymore by player)
			if((this._Target!=null) && (this._Target._Target!=this) && (this._Life>0)){
				switch (this._State){
					case STATE_HELD:case STATE_SHAKED:case STATE_TAKEN:
						this.unlock();
						this.wait();
						break;
				}
			}
			
			if (this._Unstoppable>0){
				this._PoisonTime	+=	pCoef*10;
				this._Dirty			=	true;
			}
			
			// ok, time for the real update now
			switch(this._State)
			{
				case STATE_WAIT:
					this.unlock();
					
				case STATE_WALK:
				case STATE_TARGET:
					
					this.unlock();
					
					// accelerate offscreen IAs
					var l_Hw = TGame.halfWidth;
					if ( Abs(this._Pos.x-(TGame.game.camera.x+l_Hw))>(l_Hw+50) )
					{
						pCoef *= 2.5;
					};
					// go and get this badass player
					if (this.moveToChar(this._Target,
										pCoef*(this._Unstoppable>0?1.5:1),
										TGame.touchTolerance*(this._Unstoppable>0?1.5:1) )
										)
					{
						this.damage(this._Target);
					}
					break;
					
				case STATE_TAKE:
					if (this.stateEnd()) { this.unlock(); this.wait(); }
					break;
					
				case STATE_DAMAGE:
					if (this.stateEnd()) { this.unlock(); this.wait(); }
					break;
					
				case STATE_HOLD:
					if (this.stateEnd()) { this.unlock(); this.wait(); }
					break;
					
				case STATE_SHAKE:
					if (this.stateEnd()) { this.unlock(); this.wait(); }
					break;
					
				case STATE_THROW:
					if (this.stateEnd()) { this.unlock(); this.wait(); }
					break;
					
				case STATE_SKILL:
					if (this.stateEnd()) { this.unlock(); this.wait(); }
					break;
					
				case STATE_STUN:
					if (this.stateEnd()) { this.unlock(); this.wait(); }
					break;
					
				case STATE_TAKEN:
					break;
					
				case STATE_HELD:
					break;
					
				case STATE_SHAKED:
					break;
					
				case STATE_DAMAGED:
					break;
					
				case STATE_THROWN:
					
					this._Vel.z *= TGame.getFriction(TGame.FRICTIONZ, pCoef);
					
					this._Pos.x += this._Vel.x*pCoef;
					this._Pos.y += this._Vel.y*pCoef;
					this._Pos.z += this._Vel.z*pCoef + TGame.GRAVITY * pCoef;
					this._Angle += this._VelR*pCoef*4;
					
					this._Dirty = true;
					
					var l_LocalX = this._Pos.x-TGame.game.camera.x;
					var l_LocalY = this._Pos.y;
					if ((l_LocalX<-200) || (l_LocalX>TGame.width+200) || (l_LocalY<-100) || (l_LocalY>TGame.height+200))
					{
						this.remove();
						return;
					}
					
					var l_RangeX = 48 + (this._Unstoppable>0?24:0);
					var l_RangeY = 75 + (this._Unstoppable>0?35:0);
					var l_RangeZ = l_RangeY;
					var l_SqRangeX = l_RangeX*l_RangeX;
					var l_SqRangeY = l_RangeY*l_RangeY;
					var l_SqRangeZ = l_RangeZ*l_RangeZ;
					
					if (this._thrownByPlayer != null)
					{
						
						var l_Lnk = TCharacterIA.List.firstLink();
						
						while (l_Lnk!=null)
						{
							var l_Char = l_Lnk.value();
							l_Lnk = l_Lnk.after();
							
							if ((l_Char!=this) && (l_Char._State!=STATE_THROWN))
							{
								if (this.Overlaps(l_Char)){
									
									this._Vel.x *= .7;
									l_Char._Vel.x = this._Vel.x * Rnd(0.7,1.25)*(this._Unstoppable>0?2:1);
									l_Char._Vel.y = this._Vel.y * Rnd(1,1.5)*(this._Unstoppable>0?0.1:1);
									l_Char._Dir.set(-Sgn(l_Char._Vel.x),Sgn(l_Char._Vel.y));
									
									var l_AngD = this._Vel.x<0?-1:1;
									
									if (this._Pos.z<l_Char._Pos.z){
										this._Vel.z -= Rnd(5,15)*(this._Unstoppable>0?0.1:1);
									}else{
										this._Vel.z +=  Rnd(2,10)*(this._Unstoppable>0?0.1:1);
										l_AngD *= -1;
									}
									l_Char._Vel.z = -this._Vel.z * Rnd(0.75,1.5)*(l_Char._Unstoppable>0?0.1:1);
									
									this._VelR += l_AngD;
									l_Char._VelR -= l_AngD;
									
									l_Char._thrownByPlayer = null;
									l_Char._TakePos.assign(l_Char._Pos);
									l_Char.startState(STATE_THROWN, true);
									l_Char._onThrown();
									l_Char._Dirty = true;
									CreateEvent		( EVENT_PLAYERCOMBO, l_Char.x,l_Char.depthY-80, l_Char).emit();
									PlayFxSound		( 'tom-lofi-'+Rand(1,8), true, Min(TGame.MASTER_VOLUME*TGame.FX_VOLUME*0.15,1), false );
									if (this._Unstoppable==0) { this._thrownByPlayer = null; break;}
									var l_nb = 0;
									for (l_nb=0; l_nb<l_Char._Money; l_nb++){
										this._thrownByPlayer._Money += this._thrownByPlayer._combo*this._thrownByPlayer._MoneyCoef*l_Char.emitBills();
									}
								}
								
							}
							
						}
						
					}
					break;
					
				case STATE_DEAD:
					console.log("remove dead IA");
					this.remove();
					return;
			}
		}
		
		
	/* ========================================================================== */
	/*								- action callbacks -						  */
	/* ========================================================================== */
		
		TCharacterIA.prototype._onWalk = function ( ) {
			this._Anim			=	'marche';
		}
		
		TCharacterIA.prototype._onTake = function(){
			this._Anim			=	'reprend';
		}
		
		TCharacterIA.prototype._onHold = function(){
			this._Anim			=	'';
		}
		
		TCharacterIA.prototype._onShake = function(){
			this._Anim			=	'';
		}
		
		TCharacterIA.prototype._onThrow = function(){
			this._Anim			=	'';
		}
		
		TCharacterIA.prototype._onDamage = function(){
			this._Anim			=	'reprend';
		}
		
		TCharacterIA.prototype._onDie = function(){
		}
		
		TCharacterIA.prototype._onKill = function(){
			// random catch phrase ... ?
		}
		
		TCharacterIA.prototype._onTaken = function(){
			this._Anim			=	'prend';
		}
		
		TCharacterIA.prototype._onHeld = function(){
			this._Anim			=	'';
		}
		
		TCharacterIA.prototype._onShaked = function(){
			this._Anim			=	'secoue';
		}
		
		TCharacterIA.prototype._onThrown = function(){
			this._Anim			=	'lance';
			this._Immune		=	1;
			this._ImmuneTime	=	MilliSecs()+3600000; // 1 hour ^^
		}
		
		TCharacterIA.prototype._onDamaged = function ( pByChar ) {
			this._Anim			=	'';
		}
		
		TCharacterIA.prototype.emitBills = function () {
			var l_BillId		=	Rand(this._CoinSkin.length-1);
			TGame._Emitter.Emit(	this._TakePos.x-(this._Dir.x<0?-1:1)*16,
									this.depthTakeY-32, this._CoinSkin[l_BillId]);
			return this._CoinValue[l_BillId];
		}
		
		/**
		 * ------------------------------------------------------------------ *
		 * @method	_onRemove
		 * ------------------------------------------------------------------ *
		 * @about	called when super.remove is called
		 * ------------------------------------------------------------------ *
		 */
		TCharacterIA.prototype._onRemove = function(){
			CreateEvent(EVENT_CHARACTERIADIED, 0,0, null).emit();
			
			TCharacterIA.List.removeLink(this._LinkIA);
			this._LinkPlayer	=	null;
		}
		
		TCharacterIA.Clear = function (){
			var l_LinkC = TCharacterIA.List.firstLink();
			while (l_LinkC!=null){
				var l_Char_ = l_LinkC.value();
				l_LinkC=l_LinkC.after();
				l_Char_.remove();
			}
			TCharacterIA.List.clear();
		}
		
// scenario.js
	var TScenarioAction = function (pMotion, pStyle, pTimeOffset, pLength, pArgs) {
	// TScenarioAction constructor
		this.__Motion		=	pMotion;
		this.__Command		=	pStyle;
		this.__StartTime	=	pTimeOffset;
		this.__Rate			=	0;
		this.__Length		=	pLength;
		this.__Params		=	pArgs;
		this.__Link			=	null;
		this.__Activated	=	0;
		return this;
	}
	
	
		return pParam;
	}
	
		
		
		
