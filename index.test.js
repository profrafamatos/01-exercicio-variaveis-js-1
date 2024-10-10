//Não faça nada neste arquivo, esqueça que ele existe

const { execSync } = require('child_process');

test('verifica a saída correta', () => {
  const output = execSync('node index.js').toString();
  expect(output).toContain('a é 8');
  expect(output).toContain('b é 3');
});
