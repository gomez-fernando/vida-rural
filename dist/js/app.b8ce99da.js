(function(a){function e(e){for(var s,i,n=e[0],l=e[1],c=e[2],u=0,m=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(a[s]=l[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var a,e=0;e<r.length;e++){for(var t=r[e],s=!0,n=1;n<t.length;n++){var l=t[n];0!==o[l]&&(s=!1)}s&&(r.splice(e--,1),a=i(i.s=t[0]))}return a}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=s,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var s in a)i.d(t,s,function(e){return a[e]}.bind(null,s));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;r.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"034f":function(a,e,t){"use strict";var s=t("85ec"),o=t.n(s);o.a},"0640":function(a,e,t){},"0f23":function(a,e,t){"use strict";var s=t("cb48"),o=t.n(s);o.a},"2dec":function(a,e,t){"use strict";var s=t("eb37"),o=t.n(s);o.a},3601:function(a,e,t){},"3fbf":function(a,e,t){},4719:function(a,e,t){"use strict";var s=t("3fbf"),o=t.n(s);o.a},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("main",{attrs:{id:"app"}},[t("px-header",{attrs:{links:a.links}}),t("router-view"),t("px-footer",{attrs:{links:a.links}})],1)},r=[],i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("header",{staticClass:"header"},[t("div",{staticClass:"barra contenedor"},[a._m(0),t("nav",{staticClass:"menu"},[a._l(a.links,(function(e){return t("router-link",{key:e.title,attrs:{to:e.to}},[a._v(a._s(e.title))])})),t("a",{staticClass:"router-link-active",attrs:{id:"contact-button"}},[a._v("Contacto")])],2)])])},n=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"nombre-sitio"},[t("img",{attrs:{id:"logo",src:"assets/img/logo.png",alt:"logo de la conferencia"}})])}],l={name:"PxHeader",props:{links:{type:Array,default:function(){return[]}}}},c=l,d=(t("5f50"),t("2877")),u=Object(d["a"])(c,i,n,!1,null,null,null),m=u.exports,p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("footer",{staticClass:"footer"},[t("div",{staticClass:"contenedor"},[a._m(0),a._m(1),t("div",{staticClass:"widget navegacion"},[t("h3",[a._v("Navegación")]),t("nav",[a._l(a.links,(function(e){return t("router-link",{key:e.title,attrs:{to:e.to}},[a._v(a._s(e.title))])})),t("a",{staticClass:"router-link-active",attrs:{id:"contact-button-2"}},[a._v("Contacto")])],2)]),a._m(2)]),t("p",{staticClass:"copyright"},[a._v("Developed with 💚 by Fernando Gómez")])])},v=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a",{attrs:{href:"#",id:"back-to-top"}},[t("i",{staticClass:"fa fa-chevron-up"})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"widget"},[t("h3",[a._v("Nosotros")]),t("p",[a._v(" Somos RuralORG. Una sociación cultural con sede en Callús y con vocación global. "),t("br"),a._v("Nos complace invitarte al 3º Encuentro Vida Rural que se celebrará del 10 al 17 de abril de 2021. ")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"widget"},[t("h3",[a._v("Galería")]),t("div",{staticClass:"contenedor-galeria"},[t("div",{staticClass:"imagen-galeria"},[t("div",{staticClass:"foto"},[t("img",{attrs:{src:"assets/img/walking.jpg",alt:"foto del evento"}})]),t("div",{staticClass:"info"},[t("p",[a._v("Senderismo")]),t("hr"),t("p",[a._v("Para toda la familia")])])]),t("div",{staticClass:"imagen-galeria"},[t("div",{staticClass:"foto"},[t("img",{attrs:{src:"assets/img/tienda.jpg",alt:"foto del evento"}})]),t("div",{staticClass:"info"},[t("p",[a._v("Acampada")]),t("hr"),t("p",[a._v("En los predios de la masía")])])]),t("div",{staticClass:"imagen-galeria"},[t("div",{staticClass:"foto"},[t("img",{attrs:{src:"assets/img/actividad1.jpg",alt:"foto del evento"}})]),t("div",{staticClass:"info"},[t("p",[a._v("Concierto de Zaz")]),t("hr"),t("p",[a._v("Cierre del encuentro")])])]),t("div",{staticClass:"imagen-galeria"},[t("div",{staticClass:"foto"},[t("img",{attrs:{src:"assets/img/espantapajaros.jpg",alt:"foto del evento"}})]),t("div",{staticClass:"info"},[t("p",[a._v("Confecciona tu espantapájaros")]),t("hr"),t("p",[a._v("Taller para niños")])])])])])}],f={name:"PxHeader",props:{links:{type:Array,default:function(){return[]}}}},b=f,g=(t("0f23"),Object(d["a"])(b,p,v,!1,null,null,null)),_=g.exports,h={name:"App",components:{PxHeader:m,PxFooter:_},data:function(){return{links:[{title:"El evento",to:{name:"home"}},{title:"Actividades",to:{name:"actividades"}},{title:"Oradores ",to:{name:"oradores"}}]}}},C=h,y=(t("034f"),Object(d["a"])(C,o,r,!1,null,null,null)),w=y.exports,j=t("8c4f"),q=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("px-evento"),t("px-nosotros"),t("px-contacto"),t("px-newsletter")],1)},x=[],E=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},k=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("section",{staticClass:"nosotros contenedor"},[t("div",{staticClass:"imagen"},[t("div",{staticClass:"carousel slide",attrs:{id:"carousel","data-ride":"carousel","data-interval":"4000","data-pause":"false"}},[t("div",{staticClass:"carousel-inner"},[t("div",{staticClass:"carousel-item active"},[t("img",{staticClass:"d-block w-100",attrs:{src:"assets/img/girasol.jpg",alt:"foto del evento"}})]),t("div",{staticClass:"carousel-item"},[t("img",{staticClass:"d-block w-100",attrs:{src:"assets/img/espantapajaros.jpg",alt:"foto del evento"}})]),t("div",{staticClass:"carousel-item"},[t("img",{staticClass:"d-block w-100",attrs:{src:"assets/img/walking.jpg",alt:"foto del evento"}})])])])]),t("div",{staticClass:"contenido-nosotros"},[t("h1",[a._v("El evento")]),t("p",[a._v(" Devolver a las áreas rurales el lugar que deben ocupar en la distribución de la población catalana es un objetivo de la RuralORG, en este sentido, la población rural se erige como un imperativo social y político. Fijar la población a sus territorios y atraer jóvenes que quieran establecerse y desarrollar un proyecto de vida en las áreas rurales es prioritario, pero también lo es dotarlos de herramientas y experiencias que los preparen para este importante reto. ")]),t("p",[a._v("Del 10 al 17 de abril de 2021, una semana dedicada a las familias y al saber vivir con las ventajas que sólo la vida rural nos ofrece.")])])]),t("hr",{staticClass:"divider"})])}],M=(t("db4d"),{}),P=Object(d["a"])(M,E,k,!1,null,null,null),O=P.exports,z=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"contenedor"},[t("h2",[a._v("Ven a conocernos")]),t("div",{staticClass:"cards-block mt-4"},[t("div",{staticClass:"article destacado"},[t("img",{attrs:{src:"assets/img/gato.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("RuralORG")]),t("p",[a._v("Desde el inicio RuralORG ha venido dispensando una atención y cuidado especiales a los procesos y proyectos culturales que se desarrollan en pequeños municipios y en el medio rural.")]),t("p",[a._v(" Tradicionalmente, la cultura en el medio rural se ha abordado a partir de la mirada etnográfica o, en su dimensión patrimonial y turística, como recurso de naturaleza económica. Se abren paso, en cambio, nuevas aproximaciones y prácticas que vamos a compartir durante este encuentro. ")]),t("p",[a._v("Nos visitarán ponentes con una amplia experiencia en todo lo relacionado con el desarrollo del potencial que tiene vivir en un medio rural actualmente.")]),t("nav",{staticClass:"menu"},[t("router-link",{staticClass:"boton",attrs:{to:{name:"oradores"}}},[a._v("Más información")])],1)])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/carrera.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Deportes")]),t("p",[a._v("Conscientes de la importancia de desarrollar una cultura de deporte al aire libre, repetiremos la media maratón de Vida Rural que tanto éxito tuvo en su primera edición.")]),t("p",[a._v("Puede participar toda la familia, desde los 12 años de edad hasta ...")]),t("nav",{staticClass:"menu"},[t("router-link",{staticClass:"boton",attrs:{to:{name:"actividades"}}},[a._v("Más información")])],1)])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/arbol.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Una familia, un árbol")]),t("p",[a._v("En las montañas cercanas a la masía queremos repoblar los bosques que han venido mermando en los últimos años.")]),a._m(0),t("nav",{staticClass:"menu"},[t("router-link",{staticClass:"boton",attrs:{to:{name:"actividades"}}},[a._v("Más información")])],1)])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/boy.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Descubre la uva")]),t("p",[a._v("Para los más pequeños de la casa hemos preparado varias sorpresas, una de ellas es la visita a nuestro viñedo que con tanto esmero cuidamos aquí en Vida Plena.")]),t("p",[a._v("A los niños les encantará conocer cómo se cuida y se cría un viñedo. También se llevarán unos bellos racimos seleccionados por ellos mismos.")]),t("nav",{staticClass:"menu"},[t("router-link",{staticClass:"boton",attrs:{to:{name:"actividades"}}},[a._v("Más información")])],1)])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/casas.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Callús")]),t("p",[a._v("Nuestro sitio de referencia es Callús. Un hermoso pueblo en las montañas de Montserrat.")]),a._m(1),t("nav",{staticClass:"menu"},[t("router-link",{staticClass:"boton",attrs:{to:{name:"actividades"}}},[a._v("Más información")])],1)])])]),t("hr",{staticClass:"divider"})])},A=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",[a._v(" Por eso una de nuestras iniciativas para el encuentro de este año es que las familias que deseen se unan al reto: Una familia, un árbol. "),t("br"),a._v("¿Os apuntaís? ")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",[a._v(" Disfruta de un recorrido mágico que nos llevará más adentro de vida cotidiana de esta región. "),t("br"),a._v("Nos espera un recorrido inolvidable entre sus calles, sus bares y la atención esmerada de sus vecinos. ")])}],S={name:"PxNosotros"},$=S,R=(t("4719"),Object(d["a"])($,z,A,!1,null,null,null)),N=R.exports,L=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},D=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container",attrs:{id:"contacto"}},[t("section",{staticClass:"contacto row justify-content-center"},[t("div",{staticClass:"col-12 col-md-9 text-center"},[t("h2",{staticClass:"subtitulo"},[t("span",[a._v("Lugar")])])]),t("iframe",{staticClass:"col-12 col-md-9 mt-3",staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11895.881055474578!2d1.781356!3d41.807401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2925665dc361971!2sMas%20Gras!5e0!3m2!1ses!2ses!4v1585079503288!5m2!1ses!2ses",width:"100%",height:"250",frameborder:"0",allowfullscreen:""}}),t("div",{staticClass:"w-100 mb-4"}),t("div",{staticClass:"w-100 mb-4"}),t("div",[t("p",{staticClass:"border-bottom border-top text-center"},[a._v("Masía Vida Plena")]),t("p",{staticClass:"border-bottom border-top"},[t("img",{staticClass:"contact-icon",attrs:{src:"assets/img/location.png",alt:""}}),a._v("08262, Callús, Barcelona ")])]),t("div",{staticClass:"w-100 mb-4"}),t("div",[t("p",{staticClass:"border-bottom border-top"},[t("img",{staticClass:"contact-icon",attrs:{src:"assets/img/phone.png",alt:""}}),a._v("+34 653 891 672 ")])]),t("div",{staticClass:"w-100 mb-4"}),t("div",[t("p",{staticClass:"border-bottom border-top"},[t("img",{staticClass:"contact-icon",attrs:{src:"assets/img/inbox.png",alt:""}}),a._v("info@vida-rural.com ")])])]),t("hr",{staticClass:"divider"})])}],V=(t("2dec"),{}),I=Object(d["a"])(V,L,D,!1,null,null,null),T=I.exports,W=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},Z=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container",attrs:{id:"newsletter"}},[t("iframe",{staticStyle:{display:"block","margin-left":"auto","margin-right":"auto","max-width":"100%"},attrs:{width:"80%",height:"600",src:"https://555f26fd.sibforms.com/serve/MUIEAOJ-CSNgWgCip88MHZBmtF2EKCaIf4deOtI3qyLpM5JfabRV0I7qESZY0Sl_swyIVrLbWZgTUuu0QOTh1xeAqXshoWhdv38BSRwY7AYul0iij-iHjV5yph6O34FRn83bV9Cf-8roEI0xbW7AUq_ZM6tD4JLOMKkKp6WH7mqQn95JKWAZs-GdOaxvI-luCSCgoMtVI1ViBK4M",frameborder:"0",scrolling:"auto",allowfullscreen:""}})])}],G={},H=Object(d["a"])(G,W,Z,!1,null,null,null),F=H.exports,J={name:"Home",components:{PxEvento:O,PxNosotros:N,PxContacto:T,PxNewsletter:F}},U=J,K=Object(d["a"])(U,q,x,!1,null,null,null),B=K.exports,Y=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("px-actividades"),t("px-contacto"),t("px-newsletter")],1)},Q=[],X=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},aa=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"contenedor"},[t("h2",[a._v("Las actividades")]),t("div",{staticClass:"cards-block mt-4"},[t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/tienda.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Acampada")]),t("p",[a._v(" Ir de acampada es una de esas cosas que nos remite a la niñez, a la emoción de libertad y de aventura. ")]),t("p",[a._v(" Nos conecta con algo muy primitivo y nos permite escapar de nuestra cómoda realidad, convirtiendo la cosa más sencilla (hervir leche, por ejemplo) en toda una aventura. Pero además, ir de acampada tiene muchos beneficios para los más pequeños. ")]),t("p",[a._v(" No hace falta comprar equipos especiales o material de acampada. Seguro que conoces a alguien que tiene una tienda o dos que puedas usar. ")]),t("p",[a._v(" Es increíble ver cómo los niños, en un contexto nuevo, se transforman en pequeños ayudantes, ávidos por salir corriendo para aportar en algo o quedarse a tu lado para echar una mano. ")]),t("a",{staticClass:"boton",attrs:{href:"https://www.educo.org/Blog/6-razones-para-ir-de-acampada-este-verano",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/actividad2.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Calle 13")]),t("p",[a._v(" Después de habernos visitado durante la priemera edición de nuestro encuentro. Este año vuelven Calle 13 para deleitarnos con su música. ")]),t("p",[a._v(" Un concierto lleno de energía en un espacio natural incomparable. Hemos preparado un escenario totalmente nuevo en la masía para nuestros conciertos. ")]),t("p",[a._v(" René Pérez ha colaborado en campañas sociales con UNICEF y Amnistía Internacional y es defensor de la educación pública latinoamericana y los derechos de los pueblos indígenas. ")]),t("p",[a._v(" Fue censurado en Puerto Rico por insultar públicamente al gobernador Luis Fortuño en el año 2009, luego de que este terminara con 30.000 empleos públicos en el marco de su Plan de Reconstrucción Económica. ")]),t("a",{staticClass:"boton",attrs:{href:"https://www.youtube.com/watch?v=stutWBY35yw",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/walking.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Caminata")]),t("p",[a._v(" Para muchos visitantes a Montserrat, su visita no estaría completa sin hacer una de las caminatas alrededor de la montaña de Montserrat. Es fácil planear un viaje a Montserrat y olvidar que visitarás mucho más que un monasterio: visitarás una montaña entera. ")]),t("p",[a._v(" Esta página te proporcionará información sobre los principales paseos que puedes tomar desde el Monasterio de Montserrat a diferentes lugares en la montaña de Montserrat ")]),t("p",[a._v(" Habrá información sobre la duración de las caminatas, tiempo estimado de la caminata, consejos sobre cualquier parte de la caminata que pueda ser particularmente difícil y detalles sobre qué buscar durante tu viaje. También hay enlaces a páginas más detalladas tanto acerca de la montaña de Montserrat como en el parque natural de Montserrat. ")]),t("a",{staticClass:"boton",attrs:{href:"https://www.montserrat-tourist-guide.com/es/actividades/senderismo-en-montserrat.html",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/espantapajaros.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Confecciona tu espantapájaros")]),t("p",[a._v(" Esta actividad está pensada para toda la familia y especialmente para los más pequeños. ")]),t("p",[a._v(" Aunque para muchas personas que se dedican a la agricultura, tener un espantapájaros significa poder proteger sus cultivos, también podemos hacerlo como una manualidad o proyecto de bricolaje con el que distraer un poco a los niños. ")]),t("p",[a._v(" El espantapájaros, además de divertido y mítico, es una forma de ahuyentar a los pájaros que atacan nuestro huerto o jardín estropeándonos la cosecha o las hojas y flores de nuestras plantas. ")]),t("a",{staticClass:"boton",attrs:{href:"https://www.pisos.com/aldia/como-hacer-un-espantapajaros/65514/",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/carrera.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Media Maratón")]),t("p",[a._v(" Conscientes de la importancia de desarrollar una cultura de deporte al aire libre, repetiremos la media maratón de Vida Rural que tanto éxito tuvo en su primera edición. "),t("br"),a._v(" Respira le aire puro y da lo mejor de tí. ")]),t("p",[a._v(" La Maratón de montaña de Montserrat es una carrera con un desnivel acumulado de más de 5.000 metros. Los primeros cuatro kilómetros de carrera transcurren por el núcleo histórico de Collbató, para entrar en un tramo de carretera y escaleras. A partir de este momento nos adentramos por un sendero al Parque Natural de Montserrat. ")]),t("a",{staticClass:"boton",attrs:{href:"http://events.ocisport.net/es/cursa-de-lalba-marato-de-montserrat-168/7a-marato-de-montserrat",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/actividad1.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Concierto de Zaz")]),t("p",[a._v(" Zaz es madrina del movimiento Colibríes fundado por Pierre Rabhi, quien también formará parte del nuestros ponentes durante este tercer encuentro. ")]),t("p",[a._v(' Se hizo famosa con su canción "Je veux", segundo tema de su primer álbum, Zaz, que fue lanzado al mercado el 10 de mayo de 2010. ')]),t("p",[a._v(' En mayo de 2010 la revista francesa Telerama anunció: "Han surgido rumores estas semanas: Zaz tiene una voz sagrada y será la revelación del verano". El 10 de mayo de 2010, Zaz lanzó su primer álbum al mercado. ')]),t("a",{staticClass:"boton",attrs:{href:"https://www.youtube.com/watch?v=SgsMKZVI9Ok",target:"_blank"}},[a._v("Más información")])])])]),t("hr",{staticClass:"divider"})])}],ea=(t("9746"),{}),ta=Object(d["a"])(ea,X,aa,!1,null,null,null),sa=ta.exports,oa={name:"Actividades",components:{PxActividades:sa,PxContacto:T,PxNewsletter:F}},ra=oa,ia=Object(d["a"])(ra,Y,Q,!1,null,null,null),na=ia.exports,la=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("px-oradores"),t("px-contacto"),t("px-newsletter")],1)},ca=[],da=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},ua=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"contenedor"},[t("h2",[a._v("Los ponentes")]),t("div",{staticClass:"cards-block mt-4"},[t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/orador4.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Domoterra")]),t("p",[a._v("Domoterra es una organización pionera y líder en España en difundir, formar y construir bajo la técnica de Saco Continuo de Tierra Estabilizada, también conocida como Earth-Bag ó Superadobe, creada por el arquitecto iraní Nader Khalili.")]),t("p",[a._v("En soporte al desarrollo de Comunidades Sostenibles, combinamos esta y otras técnicas de bioconstrucción con el uso de todo tipo de materiales y acabados ecológicos, energías limpias y renovables, la permacultura y el cultivo de las relaciones interpersonales sostenibles.")]),t("p",[a._v("Impulsores en el uso de la cal como material estabilizante en la técnica de Superadobe, Domoterra ha estudiado e investigado íntegramente en la utilización de materiales 100% naturales y reciclables en la construcción de estructuras de superadobe y revestimientos con cal, siendo líderes en ello.")]),t("a",{staticClass:"boton",attrs:{href:"http://www.domoterra.es/",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/orador5.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Proyecto WARKA")]),t("p",[a._v("Cada gota cuenta. Warka Water es una torre de 10 metros de altura, fabricada a mano a partir de materiales naturales, que tiene la capacidad de recoger hasta 100 litros de agua potable desde el aire en las zonas rurales de los países en desarrollo. Diseñado por Architecture and Vision, el concepto ha sido implementado en los últimos 2 años a través de varios prototipos experimentales construidos.")]),t("p",[a._v("El agua es la fuente de toda vida. Su calidad y disponibilidad es fundamental para todos nosotros, pero el agua potable está disminuyendo continuamente. La contaminación, la creciente deforestación, el cambio climático y la desertificación vulneran aún más la disponibilidad de fuentes de agua.")]),t("p",[a._v("Los árboles hacen algo por nosotros, apoyan la vida. Crean recursos y refugios. En la cultura etíope pastoral, el árbol Warka es una institución, su sombra se utiliza para reuniones públicas tradicionales, la educación escolar y otras actividades similares.")]),t("a",{staticClass:"boton",attrs:{href:"https://www.plataformaarquitectura.cl/cl/02-351457/proyecto-warka-torres-de-bambu-que-recogen-agua-potable-desde-el-aire",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/orador3.jpg",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Pierre Rabhi")]),t("p",[a._v("«La civilización industrial, con la productividad, la eficacia y la velocidad, nos ha alejado de los eternos ritmos del cosmos y de las estaciones, a los que la civilización agraria nos mantenía unidos.»")]),t("p",[a._v("Pierre Rabhi, uno de los activistas ecológicos más reconocidos en todo el mundo por su integridad y clarividencia nos abre su mirada y sus palabras acerca de las causas de la crisis, sus efectos y las posibles soluciones.")]),t("p",[a._v("Nació en el desierto, y pasó del silencio, de los gestos imbricados con la tierra, con el agua y con el viento, del cosmos ordenado por la tradición al caos y la densa oscuridad de los suburbios de París, la gran urbe alienante cuyo sistema adora al dios dinero.")]),t("a",{staticClass:"boton",attrs:{href:"https://ecologiadelalma.es/entrevista-pierre-rabhi/",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/orador1.png",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Josep Pàmies")]),t("p",[a._v('A la vera del río Segre, en terrenos cultivados por la misma familia de payeses desde hace cuatro generaciones, lleva cociéndose desde hace ocho años una "dulce revolución". El artífice se llama Josep Pàmies, sabio de la tierra, horticultor y activista, cabecilla de una insurrección que corre por las macetas, los jardines y los balcones y que tiene como poderoso símbolo a la estevia: la planta prohibida.')]),t("p",[a._v('"Lo llamo la dulce revolución porque ya hemos sido testigos de muchas revoluciones violentas y hemos visto cómo acaban: con un paso atrás. Esta es una llamada a una revolución pacífica, como la que impulsó en su día Gandhi, de resistencia al sistema, de reafirmarte en lo que estás haciendo, hasta que los poderes se baten en retirada y te dejan en paz".')]),t("a",{staticClass:"boton",attrs:{href:"https://www.elmundo.es/blogs/elmundo/ecoheroes/2013/12/20/la-dulce-revolucion-de-josep-pamies.html",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/orador2.png",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Adriana Cancro")]),t("p",[a._v("El Poder de las Frutas es una plataforma creada por Adriana Cancro a principios del 2015. Está dedicada a difundir el estilo de vida frugívoro higienista, mediante sus principios como la combinación de alimentos, llamada trofología, a través de reglas de compatibilidades y clasificación de alimentos que van de la mano con un estilo de vida comprometido con el medio ambiente y la naturaleza, respetando el buen descanso,relaciones personales positivas, aire y agua pura, sol, ejercicio, actitud positiva y todo lo que esté relacionado con el bienestar físico y emocional.")]),t("p",[a._v("La acompañó desde su adolescencia un libro de cabecera: ”La Medicina Natural al Alcance de Todos” de Lezaeta Acharán, el cual fue el puntapié inicial para emprender este largo y apasionante estilo de vida.")]),t("a",{staticClass:"boton",attrs:{href:"https://www.adrianacancro.com/biografia/",target:"_blank"}},[a._v("Más información")])])]),t("div",{staticClass:"article"},[t("img",{attrs:{src:"assets/img/orador6.png",alt:"foto conferencia"}}),t("div",{staticClass:"card"},[t("h3",{staticClass:"titulo"},[a._v("Pedagogías alternativas")]),t("p",[a._v("Luis González de Canales es Gestor de Proyectos en @almanatura.")]),t("p",[a._v("La educación tradicional tal y como la conocemos, parece que ha comenzado a cansar a las nuevas generaciones de padres y madres. Desde hace unos años, han comenzado a extenderse nuevas fórmulas educativas más centradas tanto en el niño o la niña, como en el medio que le rodea y la relación existente entre ambos elementos. Métodos de enseñanza como Waldorf, Montessori, o incluso las Comunidades de Aprendizaje (incluidas algunas dentro del sistema educativo), ayudan a educar a personas más proactivas, creativas, con mayor capacidad de trabajo en grupo, y demás habilidades adaptadas a las necesidades de la sociedad actual.")]),t("a",{staticClass:"boton",attrs:{href:"https://almanatura.com/2018/02/pedagogias-alternativas-educacion-rural/",target:"_blank"}},[a._v("Más información")])])])]),t("hr",{staticClass:"divider"})])}],ma=(t("5844"),{}),pa=Object(d["a"])(ma,da,ua,!1,null,null,null),va=pa.exports,fa={name:"Oradores",components:{PxOradores:va,PxContacto:T,PxNewsletter:F}},ba=fa,ga=Object(d["a"])(ba,la,ca,!1,null,null,null),_a=ga.exports;s["a"].use(j["a"]);var ha=new j["a"]({mode:"history",routes:[{path:"/",name:"home",component:B},{path:"/actividades",name:"actividades",component:na},{path:"/oradores",name:"oradores",component:_a}]});s["a"].config.productionTip=!1,new s["a"]({router:ha,render:function(a){return a(w)}}).$mount("#app")},5844:function(a,e,t){"use strict";var s=t("6394"),o=t.n(s);o.a},"5f50":function(a,e,t){"use strict";var s=t("fcb6"),o=t.n(s);o.a},6394:function(a,e,t){},"85ec":function(a,e,t){},9746:function(a,e,t){"use strict";var s=t("0640"),o=t.n(s);o.a},cb48:function(a,e,t){},db4d:function(a,e,t){"use strict";var s=t("3601"),o=t.n(s);o.a},eb37:function(a,e,t){},fcb6:function(a,e,t){}});
//# sourceMappingURL=app.b8ce99da.js.map