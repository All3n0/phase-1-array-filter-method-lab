function findMatching(collection,string){
    return collection.filter(
        (tt) => tt.toLowerCase() === string.toLowerCase());
    }
function fuzzyMatch(collection,string){
    return collection.filter(
        tt => tt.toLowerCase().indexOf(string.toLowerCase())===0
    );
}
function matchName(collection,string){
    return collection.filter(
        (tt) => tt.name === string
    );
}