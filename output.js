(function () {
    var init$251 = function ($stream$256) {
        switch ($stream$256[0]) {
        case undefined:
            return false;
        case 'c':
            return more$253($stream$256.slice(1));
        default:
            return false;
        }
    };
    var more$253 = function ($stream$257) {
        switch ($stream$257[0]) {
        case undefined:
            return false;
        case 'a':
            return more$253($stream$257.slice(1));
        case 'd':
            return more$253($stream$257.slice(1));
        case 'r':
            return end$255($stream$257.slice(1));
        default:
            return false;
        }
    };
    var end$255 = function ($stream$258) {
        switch ($stream$258[0]) {
        case undefined:
            return true;
        default:
            return false;
        }
    };
    ;
    return init$251;
}());