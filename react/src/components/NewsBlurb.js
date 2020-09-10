import React from 'react';

const NewsBlurb = () => {
  const newsBlurbArray = ["Great News", "Big improvements in tech", "What is going on?", "Nobody seems to notice agian", "An honest news article", "For realz though", "Where were you?", "The places to be", "Does anybody care?", "I knew it!", "Bananas!", "It's too much!!!", "May all you dreams come true", "Except for a few", "United at last", "It's all going to be alright", "Dance you way to happiness", "Fight the blahs", "Your a shining star", "No matter who you are", "All along the watchtower", "Outside in the cold distance", "All you need is love", "We proved it", "Laugh out loud!", "Heman again!", "Battle Cat!", "It's all about this!"];
  function getRandomInt(max) {
    return newsBlurbArray[(Math.floor(Math.random() * Math.floor(max)))];
  }
  let randomBlurb = getRandomInt(28);
  return (
    <p className={"news-blurb"}>{randomBlurb}</p>
  )
}
export default NewsBlurb;