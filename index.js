const inputText = document.querySelector(".inputText")

document.querySelector(".inputPicture").addEventListener(
    "click", function (){
            this.innerHTML = ` Images have been added. Please initialise
            morph to begin`
    }
)

const initializeMorph = document.querySelector(".initializeMorph")
initializeMorph.addEventListener(
    "click", function() {
            this.innerHTML = `<div class="loading"> </div>`;
            setTimeout(() => {
                this.innerHTML = `<a href="display.html">Morph Ready! </a>`
            }, 2000);
    }
)
