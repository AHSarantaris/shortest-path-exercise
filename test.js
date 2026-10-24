

// ---------------------- //
// White-box unit tests of the algoritms and data structures implemented in the file shortest_path.js.
// ---------------------- //

runTests();

/**
 * A function that runs all tests.
 */
function runTests() {
    testCase01();
}


// ---------------------- //
// Queue data structure
// ---------------------- //


/**
 * Test the isEmpty() function
 */
function testCase01() {
    let testString = "Test case 01: "
    let q = new Queue(5);
    if (!q.isEmpty()) {
        throw new Error(testString + "Queue should be empty");
    } else {
        console.log(testString + "Passed")
    }
}

