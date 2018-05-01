const str = {
    ucfirst: function(a){
        if(typeof a !== 'string') throw Error('Ucfirst must contains a string');
        return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase();
    },
    lcfirst: function(a){
        if(typeof a !== 'string') throw Error('Lcfirst must contains a string');
        return a.charAt(0).toLowerCase()+a.slice(1);
    }
};
module.exports = {
    ucfirst: str.ucfirst,
    lcfirst: str.lcfirst
};