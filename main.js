const {Rectangle, Color, Text} = require("scenegraph");



function drawBook(selection) {
  const moleskineBook = new Rectangle();
  const band = new Rectangle();
  const msg = new Text();
  const black = new Color("#1D1717");
  moleskineBook.width = 175;
  moleskineBook.height = 269;
  msg.text = "Hello Moleskine";
  msg.fill = black;
  msg.fontSize = 18;
  band.width = 11;
  band.height = 280;
  moleskineBook.fill = black;
  moleskineBook.cornerRadii = {topLeft:0, topRight:20, bottomRight:20, bottomLeft:0};
  band.setAllCornerRadii(10);
  band.fill = black;
  band.stroke = new Color("White");
  band.strokeWidth = 3;
  selection.insertionParent.addChild(moleskineBook);
  selection.insertionParent.addChild(band);
  selection.insertionParent.addChild(msg);
  moleskineBook.moveInParentCoordinates(0, 6);
  band.moveInParentCoordinates(130, 0);
  msg.moveInParentCoordinates(0, 300);
}

module.exports = {
  commands: {
    helloMoleskine: drawBook
  }
};