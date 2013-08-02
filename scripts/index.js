setupDisclaimer()

//------------------------------------------------------------------------------
var disclaimerButton
var disclaimerText

function setupDisclaimer() {
    disclaimerButton = document.getElementById("disclaimer-button")
    disclaimerText   = document.getElementById("disclaimer-text")

    if (!disclaimerButton || !disclaimerText) {
        console.log("error finding disclaimer junk")
        return
    }

    disclaimerButton.onclick = disclaimerButtonClicked
}

//------------------------------------------------------------------------------
var disclaimerTextShown = false

function disclaimerButtonClicked() {
    if (disclaimerTextShown) {
        disclaimerText.style.display = "none"
    }

    else {
        disclaimerText.style.display = "block"
    }

    disclaimerTextShown = !disclaimerTextShown
}