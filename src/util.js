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

export function splitArray(arr) {
    const splitArrays = [];
    let currentArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      currentArray.push(arr[i]);
      if (currentArray.length === 100 || i === arr.length - 1) {
        splitArrays.push(currentArray);
        currentArray = [];
      }
    }
    
    return splitArrays;
  }

export function filterByTitle(arr, searchTerm) {
    return arr.filter(function(obj) {
      return obj.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

export function filterByTitleBoth(arr, searchTerm) {
  return arr.filter(function(obj) {
    return obj.title1.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

export function getArraySegment(num, arr) {
  const segment = [];
  const length = num * 100;
  for (let i = 0; i < length; i++) {
    if (arr[i]) {
      segment.push(arr[i]);
    }
  }
  return segment
}

export function getDate(offset) {
  var today = new Date();
  var date = new Date(today.getTime() + offset*24*60*60*1000);
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yy = date.getFullYear().toString().slice(-2);
  return mm + '-' + dd + '-' + yy;
}

export function formatDate(date) {
  if (date === undefined){
    return 
  }
  const dateArr = date.split("-");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[dateArr[0] - 1];
  const day = dateArr[1];
  const year = "20" + dateArr[2];
  return `${month} ${day}, ${year}`;
}

export function sortByDate(array) {
  return array.sort(function(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB - dateA;
  });
}

export function scrollTop(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}