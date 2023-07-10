import React from 'react';
import './post.css';

const Post = () => {
  const newsItems = [
    {
      title: 'Really Hope We Get It": Sunil Chhetri Backs Igor Stimac s Plans Ahead Of Asian Cup',
      content: 'India won the Intercontinental Cup (June 9-18) in Bhubaneswar and SAFF Championships (June 21 to July 4).',
      imgUrl: 'https://c.ndtvimg.com/2023-07/8cmcma8_sunil-chhetri-aiff_625x300_04_July_23.jpeg?im=FaceCrop,algorithm=dnn,width=auto,height=400',
      newsUrl: 'https://sports.ndtv.com/football/really-hope-we-get-it-sunil-chhetri-backs-igor-stimacs-plans-ahead-of-asian-cup-4191419',
    },
    {
      title: 'Kylian Mbappe Must Sign A New Contract To Stay At PSG Next Season, Says Club President',
      content: 'Paris Saint-Germain president Nasser al-Khelaifi on Wednesday insisted superstar forward Kylian Mbappe "must sign a new contract" if he wants to remain at the club next season.',
      imgUrl: 'https://c.ndtvimg.com/2023-03/podab4ao_kylian-mbappe-psg-afp_625x300_07_March_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605',
      newsUrl: 'https://sports.ndtv.com/football/kylian-mbappe-must-sign-a-new-contract-to-stay-at-psg-next-season-says-club-president-4189224',
    },
    {
        title: 'When Will Lionel Messi Make His Inter Miami Debut?',
        content: 'Inter Miami is at the bottom in MLS Eastern Conference and ranked 28th of 29 clubs in the league.',
        imgUrl: 'https://c.ndtvimg.com/2023-06/f63ioh48_lionel-messi-afp_625x300_30_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605',
        newsUrl: 'https://sports.ndtv.com/football/when-will-lionel-messi-make-his-inter-miami-debut-4188658',
    },
      {
        title: 'Read More News on Trending Sports',
        content: '',
        imgUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc354935e2ce165eb/64805e15d3cd6a15d161bfaf/GOAL_-_Blank_WEB_-_Facebook.jpg?auto=webp&format=pjpg&width=1080&quality=60',
        newsUrl: 'https://www.cnbc.com/international-sports/',
      }, 

  ];

  return (
    <div className="trending-sports-news">
      <h2>Trending News</h2>
      <Carousel>
        {newsItems.map((item, index) => (
          <div key={index}>
            <img src={item.imgUrl} alt={item.title} />
            <div className="carousel-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <a href={item.newsUrl} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Post;
