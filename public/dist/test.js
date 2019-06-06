'use strict'; // es6 feature: block-scoped "let" declaration

const sentences = [{
  subject: 'Public',
  verb: 'is',
  object: 'common'
}, {
  subject: 'Client side',
  verb: 'is',
  object: 'here'
}]; // es6 feature: objecy destructuring

function say({
  subject,
  verb,
  object
}) {
  // es6 feature: template strings
  //console.log({subject, verb, object});
  console.log(subject, verb, object);
} // es6 feature: for..of


for (let s of sentences) {
  say(s);
}