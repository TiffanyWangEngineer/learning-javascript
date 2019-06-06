'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
    { subject: 'Public', verb: 'is', object: 'normal' },
    { subject: 'Ants', verb:'are', object: 'cool' },
];
// es6 feature: objecy destructuring
function say({ subject, verb, object}) {
    // es6 feature: template strings
    console.log('${subject} ${verb} ${object}' );
}
// es6 feature: for..of
for(let s of sentences) {
    say(s);
}