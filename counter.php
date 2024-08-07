<?php
// Path to the text file that stores the visitor count
$counterFile = 'counter.txt';

// Check if the file exists
if (!file_exists($counterFile)) {
    // Create the file and set the initial count to 0
    file_put_contents($counterFile, '0');
}

// Read the current count
$currentCount = file_get_contents($counterFile);

// Increment the count
$currentCount++;

// Write the new count back to the file
file_put_contents($counterFile, $currentCount);

// Display the count
echo $currentCount;
?>