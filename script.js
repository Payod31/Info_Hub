// JavaScript for the Search Portal

// Function to perform a search
function showMockResults(query) {
  // Ensure a query is provided and is a string
  if (!query || typeof query !== 'string') {
      console.error('Please provide a valid search query.');
      return;
  }

  // Clear all previous search results
  clearResults();

  // Display search results based on the query (case-insensitive)
  var lowerCaseQuery = query.toLowerCase(); 
  switch (query.toLowerCase()) {
      case 'data science':
          showResults('videoResults', searchData.dataScience.videos);
          showResults('bookResults', searchData.dataScience.books);
          showResults('articleResults', searchData.dataScience.articles);
          showResults('blogResults', searchData.dataScience.blogs);
          showResults('studyMaterialResults', searchData.dataScience.studyMaterial);
          showResults('WebsiteResults', searchData.dataScience.Website);
          showResults('courseResults', searchData.dataScience.courses);
          showResults('interviewResults', searchData.dataScience.interviewQuestions);
          showResults('qnaResults', searchData.dataScience.qna);
          break;
      case 'marketing':
          showResults('videoResults', searchData.marketing.videos);
          showResults('bookResults', searchData.marketing.books);
          showResults('articleResults', searchData.marketing.articles);
          showResults('blogResults', searchData.marketing.blogs);
          showResults('studyMaterialResults', searchData.marketing.studyMaterial);
          showResults('WebsiteResults', searchData.marketing.Website);
          showResults('courseResults', searchData.marketing.courses);
          showResults('interviewResults', searchData.marketing.interviewQuestions);
          showResults('qnaResults', searchData.marketing.qna);
          break;
      case 'digital marketing':
            showResults('videoResults', searchData.digitalMarketing.videos);
            showResults('bookResults', searchData.digitalMarketing.books);
            showResults('articleResults', searchData.digitalMarketing.articles);
            showResults('blogResults', searchData.digitalMarketing.blogs);
            showResults('studyMaterialResults', searchData.digitalMarketing.studyMaterial);
            showResults('WebsiteResults', searchData.digitalMarketing.Website);
            showResults('courseResults', searchData.digitalMarketing.courses);
            showResults('interviewResults', searchData.digitalMarketing.interviewQuestions);
            showResults('qnaResults', searchData.digitalMarketing.qna);
            break;

      // Add more cases for other topics as needed
      default:
          console.error('Invalid search query. Please use a supported topic.');
          break;
  }
}

// Function to clear all previous search results
function clearResults() {
  var sections = document.querySelectorAll('.results');
  sections.forEach(function (section) {
      section.innerHTML = '';
  });
}

// Function to display search results in a specific section
function showResults(sectionId, results) {
  // Get the results container for the section
  var resultsContainer = document.getElementById(sectionId);

  // Display search results as links
  for (var i = 0; i < results.length; i++) {
      var resultLink = document.createElement('a');
      resultLink.href = results[i].url;
      resultLink.textContent = results[i].title;
      resultLink.target = '_blank'; // Open link in a new tab
      resultsContainer.appendChild(resultLink);
  }
}

// Mock data for search results
var searchData = {
  dataScience: {
      videos: [
          { title: 'Recommended Video 1', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
          { title: 'Recommended Video 2', url: 'https://www.youtube.com/watch?app=desktop&v=0jspaMLxBig' },
          // Add more video results as needed
      ],
      books: [
          { title: 'Recommended Book 1', url: 'https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646' },
          { title: 'Recommended Book 2', url: 'https://www.amazon.com/Naked-Statistics-Stripping-Dread-Data-ebook/dp/B007Q6XLF2' },
          // Add more book results as needed
      ],
      articles: [
          { title: 'Recommended Article 1', url: 'https://ieeexplore.ieee.org/document/4804817' },
          { title: 'Recommended Article 2', url: 'https://towardsdatascience.com/4-reasons-why-you-shouldnt-be-a-data-scientist-e3cc6c1d50e' },
          // Add more article results as needed
      ],
      blogs: [
          { title: 'Recommended Blogs 1', url: 'https://www.datasciencecentral.com/' },
          { title: 'Recommended Blogs 2', url: 'https://flowingdata.com/' },
          // Add more blog results as needed
      ],
      studyMaterial: [
          { title: 'Recommended StudyMaterial 1', url: 'https://www.datacamp.com/courses/understanding-data-science' },
          { title: 'Recommended StudyMaterial 2', url: 'https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.20530&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false' },
          // Add more study material results as needed
      ],
      Website: [
          { title: 'Recommended Website 1', url: 'https://www.w3schools.com/datascience/' },
          { title: 'Recommended Website 2', url: 'https://www.simplilearn.com/tutorials/data-science-tutorial/what-is-data-science' },
          // Add more website results as needed
      ],
      courses: [
          { title: 'Recommended Courses 1', url: 'https://www.coursera.org/learn/python-data-analysis' },
          { title: 'Recommended Courses 2', url: 'https://www.codecademy.com/catalog/language/python?g_network=g&g_productchannel=&g_adid=624888211335&g_locinterest=&g_keyword=codecademy%20data%20engineering&g_acctid=243-039-7011&g_adtype=&g_keywordid=kwd-1184748332520&g_ifcreative=&g_campaign=account&g_locphysical=9062241&g_adgroupid=128133971748&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=12575778360&g_ifproduct=&utm_id=t_kwd-1184748332520:ag_128133971748:cp_12575778360:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy%20data%20engineering&utm_campaign=INTL_Brand_Phrase&utm_content=624888211335&g_adtype=search&g_acctid=243-039-7011&gclid=CjwKCAiA-vOsBhAAEiwAIWR0TaIz1zd74HTHY6uekPufotBaT9Au0UAne1jNgHqcvwAm9UAaCUGUehoCPvcQAvD_BwE' },
          // Add more course results as needed
      ],
      interviewQuestions: [
          { title: 'Recommended Interview Questions 1', url: 'https://www.glassdoor.com/Interview/DataCamp-Interview-Questions-E1192540.htm' },
          { title: 'Recommended Interview Questions 2', url: 'https://www.kaggle.com/discussions' },
          // Add more interview question results as needed
      ],
      qna: [
          { title: 'Recommended QnA 1', url: 'https://www.quora.com/What-is-data-science' },
          { title: 'Recommended QnA 2', url: 'https://stackoverflow.com/questions/tagged/data-science' },
          // Add more Q&A results as needed
      ],
  },
  marketing: {
      videos: [
          { title: 'Recommended Videos 1', url: 'https://www.youtube.com/user/GaryVaynerchuk' },
          { title: 'Recommended Videos 2', url: 'https://www.youtube.com/watch?v=b8oP6oeJ5WM' },
          // Add more video results as needed
      ],
      books: [
          { title: 'Recommended Books 1', url: 'https://www.amazon.com/Marketing-Metrics-Definitive-Measuring-Performance/dp/0137058292' },
          { title: 'Recommended Books 2', url: 'https://www.amazon.com/Everybody-Writes-Go-Creating-Ridiculously-ebook/dp/B00LMB5P0G' },
          // Add more book results as needed
      ],
      articles: [
          { title: 'Recommended Articles 1', url: 'https://hbr.org/1991/01/marketing-is-everything' },
          { title: 'Recommended Articles 2', url: 'https://www.managementstudyguide.com/marketing-management-articles.htm' },
          // Add more article results as needed
      ],
      blogs: [
          { title: 'Recommended blogs 1', url: 'https://unbounce.com/your-invitation/?gspk=Sm9uYXRoYW5EZWVzZQ==&gsxid=epiAV9vsDHeN&utm_medium=JonathanDeese&utm_source=marketers&gclid=Cj0KCQiAnfmsBhDfARIsAM7MKi3i2TimO8AfaX_GPKSpNKfGZA-U9uk2YYWENNjK_26NnuD_WzF7iZMaAmC1EALw_wcB' },
          { title: 'Recommended blogs 2', url: 'https://www.google.com/amp/s/instapage.com/amp/marketing-blogs/' },
          // Add more blog results as needed
      ],
      studyMaterial: [
          { title: 'Recommended StudyMaterials 1', url: 'https://www.studocu.com/in/document/indira-gandhi-national-open-university/ms-06-marketing-for-managers/unit-1-study-material/38458434' },
          { title: 'Recommended StudyMaterials 2', url: 'https://www.measiim.edu.in/myweb/uploads/2022/05/PMF2K.pdf' },
          // Add more study material results as needed
      ],
      Website: [
          { title: 'Recommended Website 1', url: 'https://ads.google.com/intl/en_in/start/overview-ha/' },
          { title: 'Recommended Website 2', url: 'https://dribbble.com/tags/marketing_website' },
          // Add more website results as needed
      ],
      courses: [
          { title: 'Recommended Courses 1', url: 'https://www.udemy.com/course/marketing-research-for-profit/' },
          { title: 'Recommended Courses 2', url: 'https://www.udemy.com/course/instagram-marketing-for-small-businesses/' },
          // Add more course results as needed
      ],
      interviewQuestions: [
          { title: 'Recommended InterviewQuestions 1', url: 'https://www.coursera.org/articles/marketing-interview-questions' },
          { title: 'Recommended InterviewQuestions 2', url: 'https://www.indeed.com/career-advice/interviewing/marketing-interview-questions' },
          // Add more interview question results as needed
      ],
      qna: [
          { title: 'Recommended QnA 1', url: 'https://www.usertesting.com/blog/marketing-questions-to-ask-and-test' },
          { title: 'Recommended QnA 2', url: 'https://www.ama.org/pages/commonly-asked-marketing-questions/' },
          // Add more Q&A results as needed
      ],
  },
  digitalMarketing: {
    videos: [
        { title: 'Introduction to Digital Marketing', url: '#' },
        { title: 'Digital Marketing Strategies', url: '#' },
        // Add more video results as needed
    ],
    books: [
        { title: 'Digital Marketing Basics', url: '#' },
        { title: 'Advanced Digital Marketing Guide', url: '#' },
        // Add more book results as needed
    ],
    articles: [
        { title: 'Effective Digital Marketing Techniques', url: '#' },
        { title: 'Trends in Digital Marketing', url: '#' },
        // Add more article results as needed
    ],
    blogs: [
        { title: 'Digital Marketing Insights Blog', url: '#' },
        { title: 'Practical Digital Marketing Tips', url: '#' },
        // Add more blog results as needed
    ],
    studyMaterial: [
        { title: 'Digital Marketing Learning Path', url: '#' },
        { title: 'Fundamentals of Digital Marketing Analysis', url: '#' },
        // Add more study material results as needed
    ],
    Website: [
        { title: 'Digital Marketing Event Photos', url: '#' },
        { title: 'Visualizing Digital Marketing Concepts', url: '#' },
        // Add more photo results as needed
    ],
    courses: [
        { title: 'Mastering Digital Marketing', url: '#' },
        { title: 'Digital Marketing Certification Course', url: '#' },
        // Add more course results as needed
    ],
    interviewQuestions: [
        { title: 'Common Digital Marketing Interview Questions', url: '#' },
        { title: 'Preparing for a Digital Marketing Interview', url: '#' },
        // Add more interview question results as needed
    ],
    qna: [
        { title: 'Digital Marketing Q&A Forum', url: '#' },
        { title: 'Ask the Experts: Digital Marketing Edition', url: '#' },
        // Add more Q&A results as needed
    ],
},
  // Add more topics as needed
};

try {
    // Your existing code here
} catch (error) {
    console.error('Error:', error);
}
