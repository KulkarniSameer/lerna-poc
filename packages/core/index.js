const package1 = require("@lerna-poc/package1");
const package2 = require("@lerna-poc/package2");

console.log("Running from @lerna-poc/core");

package1.sayHello();
package1.greetGoodMorning();
package2.sayHello();
