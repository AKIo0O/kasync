

var blocks = {};

var callbacks = {};

exports.wait = function(key, callback){

    if(!blocks[key]) blocks[key] = 0;
    blocks[key]++;
    return function(){
        callback();
        if( --blocks[key] == 0 ) callbacks[key]();
    };
};

exports.done = function(key, callback){
    callbacks[key] = callback;
};


