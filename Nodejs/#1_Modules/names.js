const Me = "Abhivridh"
const Mother = "Angel"
const Father = "Sivaprakash D"
const sis = "Ardra Angel"
const frnd = "XYZ"

let relations = { Me, Mother, Father, sis};

let eng_alpha = [];
for(let i = 1 ;i <=26;i++){
    eng_alpha.push(String.fromCharCode(64+i));
}
module.exports={relations, eng_alpha};
