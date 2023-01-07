var p = document.querySelector("#p")
var headertut = document.querySelector("#headertut")
var ptut = document.querySelector("#ptut")
var atut = document.querySelector("#atut")
var buttontut = document.querySelector("#buttontut")
var btn = document.querySelector("#btn")
var titletut = document.querySelector("#titletut")
var nocolor = document.querySelector("#nocolor")
document.getElementById("window")

p.innerHTML = "Using paragraph tags"

ptut.innerHTML = "In your text editor, type p between closing brackets (<>). Then add whatever text you want inside, like 'The quick brown fox jumped over the lazy dog.'"

headertut.innerHTML = "To add a header, type h followed by a number from 1-6 between closing brackets. Example:"

atut.innerHTML = "To add a link to your website, type an 'a' inbetween closing brackets followed by and href, leading to a link to another webite, like a href='https://www.google.com.' Between the a opening and closing tags, type any text to give it a simple name."

buttontut.innerHTML = "To add a button to your website, type button inbetween closing brackets. Within the tags, You can type text to label the button. With Javascript, you can set it to perform an action when the user clicks it. Examples below:"

titletut.innerHTML = "To give your website a title, type title in between opening and closing brackets in the head portion of your HTML document, then add text between the tags to make it appear at the tab of your HTML document. Example (Look at tab name in browser for title): 'title Basic HTML Guide Without CSS title'"

function helloworld() {
    alert("Hello world.")
}

btn.addEventListener("click", helloworld)

function gotonocss() {
    window.open("index.html")
}

nocolor.addEventListener("click", gotonocss)