import photo1 from '../../assets/photos/sec1.svg';
import photo3 from '../../assets/photos/sec3.svg';
import photo4 from '../../assets/photos/sec4.svg';
import IdeaIcon from '../../assets/icon/IdeaIcon';
import DirectionalSignIcon from '../../assets/icon/DirectionalSignIcon';
import RocketIcon from '../../assets/icon/RocketIcon';
import CodeIcon from '../../assets/icon/CodeIcon';

export const section1Data = {
  title: 'Get yourself a one-man band or a team of 10. We have both.',
  description:
    'We will lead you to that one perfect specialist or help you gather up a professional\n' +
    '            team of truly gifted individuals to provide the thorough planning, successful birth and\n' +
    '            guaranteed longevity of your project',
  buttonText: 'Our Services',
  imgUrl: photo1,
};
export const section2Data = {
  title: 'Your MVPs through our vision',
  description:
    'Our way of developing successful and cost efficient MVPs is simple. The ‘’secret’’ lies in the work process. The most important factor for our team is your idea. Prior to the actual implementation process, we take it through several stages that include thorough examination, evaluation, public demand and many more. After thorough research and investigation, we form an agenda specific to each part of the project, making sure that it corresponds to your needs and is the exact interpretation of your initial idea. We use a user-centric approach  for our MVP development process, which is a great way of knowing your customer needs and will lead to the future success of your product. Prototyping is another important aspect of our work process and it helps envision the ready MVP more clearly and avoid the risk of failure. The final step of our MVP development process is the actual development of the product. Now your product can enter the market and bring you the success you’ve been looking for.',
  buttonText: 'See More',
  imgUrl: photo3,
};

export const section3Data = {
  title: 'Our consulting strategy',
  description:
    'As an innovative IT company our services are not limited to sole programming. Besides having a strong team of developers and programmers, we are also supported by an equally strong marketing department. Our marketing team is fully equipped with the necessary knowledge and skills, and carry a long practical experience in project consulting. Our experts are qualified in advising on both technical and marketing approaches. Starting from the birth of your idea and ending with the release of its digital version, our specialists are ready to assist you all the way through planning, evaluating and executing each portion of your project and help you calculate all the risks and benefits prior to your product’s final release to the market. By choosing us you will get a perfectly mapped out and strictly detailed agenda of a profitable execution of your idea. ',
  buttonText: 'See More',
  imgUrl: photo4,
};

export const whyChooseUsData = [
  {
    id: 1,
    title: 'With us your idea is in safe hands',
    body: 'Throughout the 11 years of our lifecycle we have been adamant to keep our clients’ project ideas private and have been extremely successful at it so far. It is our integrity and sustainability that draws in both programmers and clients from all over the world and makes them return to us with bigger enthusiasm and even bigger ideas.',
    icon: <IdeaIcon />,
  },
  {
    id: 2,
    title: 'We put in our years of experience for a world class outcome ',
    body: 'One of our highest qualities we stand out for is the constant practical usage of the amount of experience we’ve gathered throughout the years and the amount of work we put in for our clients and our company products in order to achieve solid success. We have found the perfect way to provide the smoothest and most pleasant experiences for you because we’ve already taken the hard way so you wouldn’t.',
    icon: <DirectionalSignIcon />,
  },
  {
    id: 3,
    title: 'We’ve got your back through the whole process ',
    body: 'As our client we don’t expect you to have everything figured out right from the get-go. You don’t have to be well aware of the market needs or have technical background in the sphere to be able to get your idea out in the world. That is our job not yours. We are going to stick by your side throughout the whole working process and fill you in on each and every detail of the progress. We will make sure you have full understanding of the agenda and full control of the work process.',
    icon: <RocketIcon />,
  },
  {
    id: 4,
    title: 'Your success is our priority',
    body: 'The feeling of triumph we have with every single achievement is unexplainable. Our most important achievement is first and foremost our clients’ success. When you put in countless hours, multiple resources and strong skills in a project that pays off immensely at the end, it makes all the nerves sacrificed, all the sleepless nights worth it. We do everything in and beyond our powers to pave the way to success for you. ',
    icon: <CodeIcon />,
  },
];
