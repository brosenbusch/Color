//Declare the Color Object with our new keyword below here.
const Color = new Object ();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <=255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let r = rgb[0];
  r = r/255 * 100;
  r = Math.round(r);
  return r;
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let g = rgb[1];
  g = g/255 * 100;
  g = Math.round(g);
  return g;
};

//blueIntensity
Color.blueIntensity = function(rgb){
  let b = rgb[2];
  b = b/255 * 100;
  b = Math.round(b);
  return b;
};

//brightness
Color.brightness = function(rgb){
  var bright = (Color.redIntensity(rgb)+Color.greenIntensity(rgb)+Color.blueIntensity(rgb))/3;
  return bright;
};

//complement
Color.complement = function(rgb){
  var comp = [];
  for (var c=0; c<3; c++){
    comp[c] = 255 - rgb[c];
  }
  return comp;
};

//greyScale
Color.greyScale = function(rgb){
  var avg = (rgb[0]+rgb[1]+rgb[2])/3;
  var grey = [avg, avg, avg];
  return grey;
}

//tint, tone, and shades
Color.tint = function(rgb){
  var tint = [];
  for (var t=0; t<3; t++){
    tint [t] = ([t]+255)/2;
  }
  return tint;
}

Color.tone = function(rgb){
  var tone = [];
  for (var t=0; t<3; t++){
    tone [t] = ([t]+127.5)/2;
  }
  return tone;
}

Color.shade = function(rgb){
  var shade = [];
  for (var s=0; s<3; s++){
    shade [s] = [s]/2;
  }
  return shade;
}
