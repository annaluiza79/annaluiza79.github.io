(() => {

  let color;
  let color1 = "#680808";
  let color2 = "#561CA4";
  let color3 = "#E2A802";
  let color4 = "#06473F";

  function colorToggle() {
    color = switchColor(color);
    setTimeout(colorToggle, 1000);
  }

  function switchColor(color) {
    let newColor;
    switch (color) {
      case color1:
        newColor = color2;
        break;
      case color2:
        newColor = color3;
        break;
      case color3:
        newColor = color4;
        break;
      case color4:
        newColor = color1;
        break;
      default:
        newColor = color1;
    }

    const siteTitles = document.getElementsByClassName("site-title");
    for (var i = 0; i < siteTitles.length; i++) {
      siteTitles[i].style.color = newColor;
    }

    return newColor;
  }

  setTimeout(colorToggle, 1000);
})();
