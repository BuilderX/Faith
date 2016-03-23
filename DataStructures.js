var mySingleton = {

    property1:"somthing",
    property2:"somthing else",
    method1:function(){
        console.log("Hello World");
    }

};

mySingleton.method1();


var mySingletons = function(){
    // priv methods and variables
    var privateVar = "this privite";

    function showPrivate(){console.log(privateVar);}
    return {publicMethod:function(){showPrivate();},
    publicVar:'the public can see this'

    };
};

var single = mySingletons();
single.publicMethod();
console.log(single.publicVar);



// Module
            var myModule = {
                    myProperty:'someValue',
                    myConfig:{useCaching:true, language:'en'},
                    myMethod:function(){console.log("I can haz functionality?")},
                    myMethod2:function(){console.log("Caching is:" + (this.myConfig.useCaching) ? 'enabled':'disabled')},
                    myMethod3:function(newConfig){
                        if(typeof  newConfig =='object'){
                            this.myConfig = newConfig;
                            console.log(this.myConfig.language );
                        }}

            };
        myModule.myMethod();
        myModule.myMethod2();
        myModule.myMethod3({ language:'fr', useCaching:false});
        console.log("=========================================================================================");


/** @namespace basket[q].price */
var basketModule = (function(){
            var basket = []; // private

            function doSomethingPrivate(){}
            function doSomethingElsePrivate(){ return basket.entries();}

            return {
                    addItem:function(values){basket.push(values)},
                    getItemCount: function() {return basket.length},
                    doSomething:doSomethingElsePrivate(),
                    getTotal:function(){
                        var q = this.getItemCount();
                        var p = 0;
                        //decrement
                        while(q--){p +=basket[q].price;}
                         return p;
                    }
            }
        })();

            basketModule.addItem({item:'bread', price:0.5});
            basketModule.addItem({item:'butter', price:0.3});

            console.log(basketModule.getItemCount());
            console.log(basketModule.getTotal());
            //console.log(basketModule.basket);// wont work
console.log("=========================================================================================");

//subscribe








/*
var pubsub ={};

            (function(q){
                var topics= {};
                var subUid = -1;
                //public broadcast
                //
                q.publish = function(topic,args){
                    if(!topics[topic]){ return false;}
                    var subscribers = topics[topic], len = subscribers ? subscribers.length :0;

                    while(len--){subscribers[len].func(topic,args);} return this;
                };
                //subscribe
                q.subscribe = function (topic, func){
                    if(!topics[topic]){
                        topics[topic] = [];

                    }
                    var token = (++subUid).toString();
                    topics[topic].push({token:token, func:func});
                    return token;
                };
                // unsubscribe
                q.unsubscribe = function(token) {
                    for (var m in topics) {
                        if (!topics[m]) {
                            for (var i = 0, j = topics[m].length; i < j; i++) {
                                if (!topics[m][i] === token) {
                                    topics[m].splice(i, 1);
                                    return token;
                                }

                            }
                        }
                    }
                    return this;
                };
                }(pubsub));

                var testHandler = function(topics,data){
                    console.log(topics + ": " + data);

                };
                var testSubscription = pubsub.subscribe("examples", testHandler);

             // publishers are in charge of publishing  notifications about events
                pubsub.publish('example1','hello world');
                pubsub.publish('example1',['test','a','b','c']);
                pubsub.publish('example1',[{'color':'blue'},{'text':'hello'}]);

                //unsubscribe
                pubsub.unsubscribe(testSubscription);
                pubsub.publish('example','hello again (this will fail)');

*/
/*!
 * Pub/Sub implementation
 * http://addyosmani.com/
 * Licensed under the GPL
 */
// 0 ===> attach to method ===> create method with attachment  === return Obj per method
var empty = {};
(function(Base,Mid,Bottom){
    var Holder = [Base,Mid,Bottom];


    Base.constructor.prototype = function(Base) {

                if(typeof Base != "object"){
                        return null;
                }else {
                    Holder[0]= Base.capsule = function () {

                      return {
                          makenode:function(data,next){
                                    this.node.data = data;
                                    this.node.next = next;
                          },
                          checkNex:function(){
                                    console.log(this.node.next);
                          },
                          displayNodeData: function(){
                              console.log(this.node.data);
                          },
                          get:function(){
                              return this.node.data;
                          },
                          set:function(node){this.node = node;},
                          node:{data: data, next: n},
                          add: function (n) {

                              if (n === undefined) {
                              if(typeof  n === "object"){
                                  this.node.next = n;

                                  return node;

                              }

                        }},
                          flushData:function(){

                              this.node.data = undefined;

                          },
                          empty:function(){
                                 this.node = null;


                          }
                      }
                    }


                }

    }
})(empty);


var pubsubz = {};
(function (q) {

    var topics = {},
        subUid = -1;

    q.publish = function (topic, args) {

        if (!topics[topic]) {
            return false;
        }

        setTimeout(function () {
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].func(topic, args);
            }
        }, 0);

        return true;

    };

    q.subscribe = function (topic, func) {

        if (!topics[topic]) {
            topics[topic] = [];
        }

        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    q.unsubscribe = function (token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };
}(pubsubz));


var testSubscriber = function( topics , data ){
    console.log( topics + ": " + data );
};

var testSubscription = pubsubz.subscribe( 'example1', testSubscriber );

pubsubz.publish( 'example1', 'hello world!' );
pubsubz.publish( 'example1', ['test','a','b','c'] );
pubsubz.publish( 'example1', [{'color':'blue'},{'text':'hello'}] );

setTimeout(function(){
    pubsubz.unsubscribe( testSubscription );
    console.log("YES!");
}, 10000);

pubsubz.publish( 'example1', 'hello again!' );



console.log("test");

// random
var arr = [];

function populate(arr) {

    for (var i = 0, j = 10; i < j; i++) {
      if(i % 2 === 0){
         arr[i] = true;
      }else{
        //arr[i] = arr[i] % 3 === 0;
         arr[i]= false;
}

        }console.log(arr);}
populate(arr);
console.log(arr);



