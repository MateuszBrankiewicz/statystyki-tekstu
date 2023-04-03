let textarea = document.getElementsByTagName("textarea")[0];
textarea.addEventListener("input",onChange)
    function onChange(){
        const data = textarea.value;
        const numCharacters = data.length;
        const numWords = data.split(" ").length;
        const numSentences = data.split(".").length;
        document.getElementById("num-characters").innerHTML = numCharacters
        document.getElementById("num-words").innerHTML = numWords
        document.getElementById("num-sentences").innerHTML = numSentences

    }