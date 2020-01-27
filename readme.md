# Billedbehandling med p5js
Samling af js programmer til undervisningsbrug i billedmanipulation eller billedbehandling. Programmerne kan køres gennem index.html filen ved at henvise til den rigtige js fil.

Filerne er lavet med js biblioteket P5.js.

## opsætning af Atom liveserver
Gå ind på:

Præferencer -> install -> søg på 'atom-live-server' og enable den.

CTRL+ALT+q -> quit liveserver

CTRL+ALT+l -> aktiver liveserver

# opgaver til nogle af programmerne

## colorFilterManuel
fill((c[0]+c[1]+c[2])/3);

undersøg hvad c indeholder
undersøg hvordan billedet ser ud med c[i], i=0,1,2
Hvordan laver man et farvefilter?

## Gradient farvefilter
fill((c[0]+c[1]+c[2])/(3)-j);

Kør filtret og se hvad det gør
lav en forbedring så det ser ordentligt ud

## Kantdetektion
fill((c[0]+c[1]+c[2]) -(cMinus[0]+cMinus[1]+cMinus[2]));

cMinus = c;

Undersøg hvad koden gør
Undersøg hvad er sker hvis man bytter om på for sætningerne så man generere billedet lodret i stedet for vandret. (byt om på linje 22 og 23).

## Billedbehandling i GIMP
I GIMP vælg: Filters -> Generic -> convolution matrix.

Generelle regler for foldning.

Hvis samme fortegn giver det en udglatning

Hvis modsat fotegn giver det en tydeligere kant.
