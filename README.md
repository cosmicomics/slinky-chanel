# Test Chanel

Voici la reproduction, en react, du menu présenté ici https://slinky.js.org/

Une démo est disponible [ici](https://slinky-chanel.web.app/).


Quelques détails :

- Il semble que l'accessibilité n'ait pas été prise en compte par l'auteur de Slinky (navigation clavier désactivée) ; j'ai donc reproduit à l'identique ce comportement.

- Lors d'un resize de la fenêtre ou, plus généralement, du composant, si la hauteur d'une entrée du menu Slinky change à cause du reflow de son texte, la hauteur du menu ne s'adapte pas. Il faut naviguer pour que le redimensionnement soit pris en compte. J'ai également reproduit ce comportement, même s'il n'a peut-être pas été implémenté à dessein par l'auteur de Slinky.

- Le composant react du menu opère un rendu récursif des éléments qui lui sont donnés. Cette manière de faire est compacte et lisible ; néanmoins, dans le cas où le menu comporterait un nombre d'entrées particulièrement important (le cas du répertoire de musiques d'un ipod en est un exemple), un aplatissement des données fournies en entrée et la mise en place de sous-menus et de listes virtuelles allègeraient le DOM et pourraient se révéler bénéfiques en terme de performances (dans le cas d'un menu simple tel que celui présenté en démo, la rapport complexité / bénéfices ne justifie sans doute pas cela).

- Voici un exemple illustrant la structure de l'objet fournie en entrée au composant react :
```js

  {
    title: "titre d'une entrée",
    entries: [ "une sous-entrée sans enfants", "une autre sous-entrée sans enfants"]
  },
  {
    title: "titre d'une seconde entrée",
    entries: [
      {
        title: "une sous-entrée avec enfants",
        entries: [ "une troisième sous-entrée sans enfants" ]
      },
      "une quatrième sous-entrée sans enfants"
    ]
  },

```
La démo reprend les données de Slinky, afin de mieux pouvoir comparer l'original et sa reproduction.

Merci pour votre considération, bonne journée 🌿
