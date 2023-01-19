export function deFormatTitle(title) {
    return title.replace("(dot)", ".")
    .replace("(pc)", "%")
    .replace("(plus)", "+")
    .replace("(colon)", ":")
    .replace("(hash)", "#")
    .replace("(quest)", "?")
    .replace("(comma)", ",")
    .replace("(USD)", "$")
}

export function compare( a, b ) {
    if ( a.order < b.order ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }