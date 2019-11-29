module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts',
      'src/**/**/*.json',
      '!src/test/unit-tests/**/*.ts',
      '!src/test-mendix/unit-tests/**/*.ts'
    ],

    tests: [
      'src/test/unit-tests/**/*.ts',
      'src/test-mendix/unit-tests/**/*.ts'
    ],
	setup: function (wallaby) {
	  const mocha = wallaby.testFramework;
      mocha.timeout(5000);
	},
    testFramework: 'mocha',
    env: {
      type: 'node',
      runner: 'node'  // or full path to any node executable
    }
  };
};