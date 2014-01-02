
macro process_state {
    rule {
        $sname (accept)
    } => {
        var $sname = (function ($stream) {
            switch ($stream[0]) {

            case undefined:
                return true;

            default:
                return false;

            }
        });
    }
    rule {
        $sname ($($label => $target) (,) ...)
    } => {
        var $sname = (function ($stream) {
            switch ($stream[0]) {

            case undefined:
                return false;

            $(case $label:
              return $target($stream.slice(1));
             )...

            default:
                return false;

            }
        });
    }
}

macro automata {
    case {
        _ $start {
            $( $state ( $trans... ) )...
        }
    } => {
        return #{
            (function () {
                $( process_state $state ( $trans... ) )...;

                return $start;
            })();
        }
    }
}

automata init {
    init (
        'c' => more
    )
    more (
        'a' => more,
        'd' => more,
        'r' => end
    )
    end (accept)
}
