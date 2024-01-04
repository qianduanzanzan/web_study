Function.prototype.before = function(beforeFn){
    const _self = this
    return function(){
        beforeFn.apply(this,arguments)
        return _self.apply(this, arguments);
    }
}

Function.prototype.after = function (afterFn) {
    const _self = this;
    return function () {
        const ret = _self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    };
};