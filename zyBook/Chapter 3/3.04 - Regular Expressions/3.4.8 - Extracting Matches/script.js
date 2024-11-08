// Array of sample tweets containing hashtags and URLs
const tweets = [
  'Thank you to the Academy and the incredible cast & crew of #TheRevenant. #Oscars',
  '@HardingCompSci department needs student volunteers for #HourOfCode https://hourofcode.com/us',
  'Checkout the most comfortable earbud on #Kickstarter and boost your #productivity https://www.kickstarter.com/',
  'Bootstrap 4 Cheat Sheet https://t.co/MFyKHvd50H',
  'Curious to see how #StephenCurry handles injury. http://mashable.com/2016/04/25/steph-curry-knee-injury-cries-cried/',
];

// Loop through each tweet in the `tweets` array to find hashtags and domain names
tweets.forEach(function (tweet) {
  // Regular expression to match hashtags
  // - `#` matches the hash symbol
  // - `\w+` matches one or more word characters (letters, digits, underscores)
  // - `g` flag finds all matches in each tweet
  let reHash = /(#\w+)/g;

  // Regular expression to match domain names in URLs
  // - `https?://` matches either "http://" or "https://"
  // - `(?:[a-zA-Z0-9]+\.)?` optionally matches a subdomain like "www." or "en."
  // - `([a-zA-Z0-9]+\.[a-zA-Z0-9]+)` captures the main domain and top-level domain (e.g., "wikipedia.org")
  // - `g` flag finds all matches in each tweet
  let reLink = /https?:\/\/(?:[a-zA-Z0-9]+\.)?([a-zA-Z0-9]+\.[a-zA-Z0-9]+)/g;
  // let reLink = /https?:\/\/(.+?)\//g;  // This is the "official" answer

  // Loop through all hashtag matches in the tweet
  let hashMatch = reHash.exec(tweet); // Initialize the first match for hashtags
  while (hashMatch !== null) {
    console.log(hashMatch[0]); // Log the full hashtag (e.g., "#TheRevenant")
    hashMatch = reHash.exec(tweet); // Move to the next hashtag match
  }

  // Loop through all domain name matches in the tweet
  let linkMatch = reLink.exec(tweet); // Initialize the first match for URLs
  while (linkMatch !== null) {
    console.log(linkMatch[1]); // Log only the domain (main domain and TLD, e.g., "hourofcode.com")
    linkMatch = reLink.exec(tweet); // Move to the next URL match
  }
});
