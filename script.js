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

let result = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(result);
