// This plugin will open a window to the user to select the text
// inside an element. It will return number of characters
// of the selected text.

// Returns number of characters in the range of text
// or warning message to select the text.
function countCharacters() {
  let select = figma.currentPage.selectedTextRange;

  if (select) {
    figma.ui.postMessage(select.end - select.start);
  } else {
    figma.notify("Please select the text inside an element!");
  }
}

// Shows the HTML page from "ui.html" and runs function to count.
function main() {
  figma.showUI(__html__);

  figma.ui.onmessage = () => countCharacters();

  countCharacters();
}

main();
