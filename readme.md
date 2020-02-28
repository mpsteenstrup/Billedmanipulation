# Billedbehandling med p5js
Samling af js programmer til undervisningsbrug i billedmanipulation, eller billedbehandling. Programmerne kan køres med live-server gennem `index.html` filen ved at henvise til den rigtige js fil.

Filerne er lavet med js biblioteket P5.js.

# slides til undervisningen
[Billedmanipulation1 slides](https://drive.google.com/open?id=1wM5pYU8eP08tujXp0M8mXqXdc9tLOkgLNUVAJqtBMC8)

[Billedmanipulation2 slides](https://drive.google.com/open?id=1fPLhh2m5WEBlbgeCrJ2RMZLczG5zBS4olBct83mYDsc)

[Billedmanipulation3 slides](https://drive.google.com/open?id=1BeQpWCXfe0y37lRzftKbN7Sgs3_KrUnRzLoD5M9uwK4)

# Eksterne links
[Verden første biograffilm, renset med neurale netværk](https://www.digg.com/2020/arrival-train-la-ciotat-upscaled?fbclid=IwAR3bCpLX0sIkNvhxPS7i8quwEmbEHXKBScwYMc5FR-L-sOh3lbNUwr_k4r0)

## Opsætning af Atom liveserver
For at kunne køre js programmerne lokalt, skal der oprettes en server. Det kan gøres gennem Atom med live-server installeret.

Gå ind på:

Præferencer -> install -> søg på 'atom-live-server' og enable den.

CTRL+ALT+q -> quit liveserver

CTRL+ALT+l -> aktiver liveserver

## Opsætning af Teletype

Hvis man vil samarbejde om samme dokument, kan man bruge Teletype. Efter en har delt sit dokument kan det gemmes og køres lokalt.


Gå ind på:

Præferencer -> install -> Teletype og enable den.

Klik nederst på "radiotårnet" og følge linket til en token.

Del filen med på "radiotårnet" og send link til de andre.

# Programmet online på Github

I kan bruge Github til at køre jeres programmer online. Index.html filen skal indeholde reference til js filen og så skal den gøres tilgængelig.

på Github skal I gå in i:
index.html -> Settings -> options -> Github pages.

Siden kan ses på
`https://mpsteenstrup.github.io/Billedmanipulation/`

 `https://username.github.io/repository/`

# Programoversigt
## simple programmer til introduktion
* `HelloWorld.js`
* `simpleImageLoad.js`
* `sortHvis.js`, brug af indbygget filter

## Loade og genne billeder i programmet
* `loadImage.js`
* `saveImage.js`

## forståelse af pixels, i,j
* `loopIJColors.js`, 4x4 pixels
* `getPixelValue.js`, pixelværd
* `getPixelValueFast.js`, implementering af hurtig læsning af pixelværdier, ved brug af liste.

## manuelle filtre
* `generalFilter.js`
* `generalFilterSharpening.js`
* `posterFilter.js`
* `blurFilter.js`
* `gradientFilter.js`
* `KantdetektionFilterManuel.js`
* `pixelate.js`


# opgaver til nogle af programmerne

## colorFilterManuel
fill((c[0]+c[1]+c[2])/3);

* undersøg hvad c indeholder
* undersøg hvordan billedet ser ud med c[i], i=0,1,2
* Hvordan laver man et farvefilter?

## Gradient farvefilter
fill((c[0]+c[1]+c[2])/(3)-j);

* Kør filtret og se hvad det gør
* lav en forbedring så det ser ordentligt ud

## Kantdetektion

* Undersøg hvad koden gør

## Billedbehandling i GIMP
I GIMP vælg: Filters -> Generic -> convolution matrix.

Generelle regler for foldning.

Hvis samme fortegn giver det en udglatning

Hvis modsat fotegn giver det en tydeligere kant.
