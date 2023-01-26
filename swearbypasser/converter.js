var interruptions = "⁃‐ᐟ`.,⁃‐ᐟ`/;'⁃‐ᐟ`-`"

function conversion() {
    let originalTextElement = document.getElementById("originalText");
    let convertedTextElement = document.getElementById("convertedText");
    let algorithmUsed = document.getElementById("algorithmUsed");

    convertedTextElement.setAttribute("value", convertTextToCherokee(originalTextElement.value, algorithmUsed.options[algorithmUsed.selectedIndex].value));
}

function convertTextToCherokee(originalText, algorithmUsed) {
    let convertedText = "";
    let interruptions = 0;
    for(let i = 0; i < originalText.length; i++) {
        if(originalText.charAt(i) == ' ') {
            convertedText += ' ';
        } else {
            convertedText += returnCherokeeCharacter(originalText.charAt(i).toUpperCase(), algorithmUsed);
            if(algorithmUsed == "classicDotted" || algorithmUsed == "cyrillicDotted" || algorithmUsed == "blocksDotted" || algorithmUsed == "originalTextDotted") {
                convertedText += returnInterruption(interruptions);
                interruptions++;
            }
        }
    }

    return convertedText;
}

function returnInterruption(prevInterruptions) {
    let prevInterruptionsMod = prevInterruptions % interruptions.length;

    return interruptions.charAt(prevInterruptionsMod);
}

function returnCherokeeCharacter(char, algorithmUsed) {
    if(char == 'A') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭺ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Д";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄰";
        }
    }
    if(char == 'B') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ᏸ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ь";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄱";
        }
    }
    if(char == 'C') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮳ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "С";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄲";
        }
    }
    if(char == 'D') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭰ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꭰ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄳";
        }
    }
    if(char == 'E') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭼ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Е";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄴";
        }
    }
    if(char == 'F') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ғ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ғ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄵";
        }
    }
    if(char == 'G') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮆ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮆ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄶";
        }
    }
    if(char == 'H') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮋ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Н";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄷";
        }
    }
    if(char == 'I') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭵ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ї";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄸";
        }
    }
    if(char == 'J') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮧ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ј";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄹";
        }
    }
    if(char == 'K') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮶ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "К";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄺";
        }
    }
    if(char == 'L') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮮ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮮ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄻";
        }
    }
    if(char == 'M') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮇ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "М";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄼";
        }
    }
    if(char == 'N') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮑ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "И";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄽";
        }
    }
    if(char == 'O') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮎ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ф";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄾";
        }
    }
    if(char == 'P') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮲ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Р";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🄿";
        }
    }
    if(char == 'Q') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Q";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Q";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅀";
        }
    }
    if(char == 'R') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮢ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Я";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅁";
        }
    }
    if(char == 'S') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮪ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮪ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅂";
        }
    }
    if(char == 'T') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꭲ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Т";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅃";
        }
    }
    if(char == 'U') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮜ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ц";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅄";
        }
    }
    if(char == 'V') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮩ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮩ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅅";
        }
    }
    if(char == 'W') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮤ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ш";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅆";
        }
    }
    if(char == 'X') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "X";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Х";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅇";
        }
    }
    if(char == 'Y') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮍ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "У";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅈";
        }
    }
    if(char == 'Z') {
        if(algorithmUsed == "classic" || algorithmUsed == "classicDotted") {
            return "Ꮓ";
        }
        if(algorithmUsed == "cyrillic" || algorithmUsed == "cyrillicDotted") {
            return "Ꮓ";
        }
        if(algorithmUsed == "blocksDotted") {
            return "🅉";
        }
    }

    return char;
}