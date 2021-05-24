// These tests are just samples and not every alphabet is tested (that's boring).

const alphabets = require("../dist/bundle.js");

const greek = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];
const greekPolytonic = ["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ", "τ", "υ", "φ", "χ", "ψ", "ω"];
const latin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

test('alphabets.latin should return Latin alphabet', () => {
  expect(alphabets.latin).toStrictEqual(latin);
});

test('alphabets.greek should return Greek alphabet', () => {
  expect(alphabets.greek).toStrictEqual(greek);
});

test('alphabets.greekPolytonic should return Greek (Polytonic) alphabet', () => {
  expect(alphabets.greekPolytonic).toStrictEqual(greekPolytonic);
});
