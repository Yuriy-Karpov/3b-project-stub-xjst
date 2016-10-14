var fish = new ivAPI.fish(false, 0, true);
var isText = fish.generate( 30, 350, false);

block('fish')(
    content()(isText)
)