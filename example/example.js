import Mixin from '@nsisodiya/es6-mixins';

// The first class to be used as a mixin
class TestMixin1 {
	testMethod1() {
		console.log('test Method 1 from TestMixin1');
	}

	testMethod2() {
		console.log('test Method 2 from TestMixin2');
	}
}

// The second class to be used as a mixin
class TestMixin2 {
	testMethod1() {
		console.log('test Method 1 from TestMixin2');
	}
}

class MainClass {
	constructor() {
		this.testMethod1(); // outputs 'test Method 1 from TestMixin2' and then 'test Method 1 from TestMixin1' will warn in console about duplicate methods.
	}
}

Mixin(MainClass, [TestMixin1, TestMixin2]);

new MainClass();