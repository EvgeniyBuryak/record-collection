// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    console.log("typeof: " + typeof value);
    console.log("value: " + value);

    if (prop != "tracks" && value != "") {
        records[id][prop] = value;

    } else if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false) {

        let array = new Array();
        array.push(value);
        records[id].tracks = array;

    } else if (prop == "tracks" && value != false) {

        records[id][prop].push(value);
    } else {
        delete records[id][prop];
    }
    return records;
}

/* artist should be the string ABBA */
let result = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(result);

/* tracks should have the string "Take a Chance on Me" as the last element.*/
result = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(result);

// artist should not be set
result = updateRecords(recordCollection, 2548, "artist", "");
console.log(result);

/* tracks should have the string
 * "Addicted to Love"
 * as the last element. */
result = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(result);

// Tracks should have the string 1999 as the first element.
result = updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(result);

// tracks should not be set
result = updateRecords(recordCollection, 2548, "tracks", "");
console.log(result);

// albumTitle should be the string "Riptide"
result = updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(result);