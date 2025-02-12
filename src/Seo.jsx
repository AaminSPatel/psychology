import { Helmet } from "react-helmet";

export default function Seo () {
  return (
    <>
       <Helmet>
                <title>Mindful Moments | Psychology Blog for Mental Wellness</title>
                <meta name="description" content="Explore insightful psychology blog posts on mental health, mindfulness, and self-improvement. Join us for a journey towards mental wellness." />
                <meta name="keywords" content="psychology blog, mental health, mindfulness, self-improvement, mental wellness, psychology tips, therapy, emotional health" />
                <meta name="author" content="Mindful Moments" />
                <meta property="og:title" content="Mindful Moments | Psychology Blog for Mental Wellness" />
                <meta property="og:description" content="Explore insightful psychology blog posts on mental health, mindfulness, and self-improvement." />
                <meta property="og:image" content="./mindful-moments.jpg" />
                <meta property="og:url" content="https://www.mindfulmoments.com" />
                <link rel="canonical" href="https://www.mindfulmoments.com" />
              </Helmet>
        
    </>
  )
};