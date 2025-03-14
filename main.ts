enum Letters {
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
}

enum scrollString {
    scrolling,
    nothing
}

//% weight=100 color=#f9c901
namespace spelling {

    /**
     * Return letter
     */
    //% block="$letter"
    export function SpellLetter(letter: Letters): string {
        const letterMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // String indexing trick
        return letterMap.charAt(letter); // Convert numeric enum to letter
    }

    /**
     * Spell the word (string)
     */
    //% block="spell $str with $scroll effect"
    export function spellString(str: string, scroll: scrollString) {
        if (str.length === 0) {
            return; // Do nothing if the string is empty
        }

        if (scroll === scrollString.scrolling) {
            basic.showString(str); // Display entire string scrolling
        } else {
            // Show one letter at a time without scrolling
            for (let value of str) {
                basic.showString(value);
            }
        }
    }
}
