        // Function to process the text and count word frequencies
        function processText() {
            // Get the text from the textarea
            let text = document.getElementById("inputText").value;
            

            // Call function to count word frequencies
            let wordCount = countWordFrequencies(text);

            // Display results
            displayWordCounts(wordCount);
        }

        // Function to count word frequencies
        function countWordFrequencies(text) {
            // Convert the text to lowercase and split it into words
            let words = text.toLowerCase().match(/\b\w+\b/g);
            
            // Object to store word counts
            let wordCount = {};

            // Count occurrences of each word
            words.forEach(word => {
                wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
            });

            return wordCount;
        }

        // Function to display the word counts
        function displayWordCounts(wordCount) {
            // Sort words by frequency (highest to lowest)
            let sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

            // Get the output container
            let output = document.getElementById("output");
            output.innerHTML = "";  // Clear previous results

            // Display sorted words and their frequencies
            if (sortedWords.length === 0) {
                output.innerHTML = "<p>No words to display. Please input some text.</p>";
                return;
            }

            sortedWords.forEach(([word, count]) => {
                let paragraph = document.createElement("p");
                paragraph.innerHTML = `<span class="word">${word}</span>: ${count}`;
                output.appendChild(paragraph);
            });
        }