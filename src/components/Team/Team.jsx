import React from 'react';
import './Team.css';
import { Card, Button} from 'react-bootstrap';
import image from '../../assets/images/one.jpg';
import LazyLoad from 'react-lazyload';

const team = [
    {
        "id":'10',
        "name":"ARCHIE CHHADWA",
        "designation":"Community Service Director",
        "description":"Her dedication & seriousness towards work makes her stand out from the rest. She is tenacious and proactive, and makes full use of all the opportunities. Her undying passion for service to the community will make sure we set a new benchmark!⁣"
    },

    {
        "id":'11',
        "name":"HETA MEHTA ",
        "designation":"Community Service Director",
        "description":"She is self motivated and always prepared to work hard to achieve her goals. She is someone who listens calmly and speaks through her work and makes a positive effort to bring a change. With her optimism and effective time management skills she will make sure the avenue excels.⁣"
    },

    {
        "id":'12',
        "name":" DHRUVI KUVADIA",
        "designation":"Club Service Director",
        "description":"She is a very loved person in the club, and has always been a great friend to all of us. She is immensely talented, and there is so much more to her we discover everyday! With her warm nature and hard work, she is going to bring the club even closer and make sure the members have fun together all year round!⁣"
    },
    {
        "id":'13',
        "name":"VATSAL PAREKH",
        "designation":"International Service Director",
        "description":"He is one of the most reliable members in the team. He is always calm and composed. His confidence in himself and effective communication skills will go a long way in connecting with clubs around the world to unite our movement, and taking this avenue to great heights.⁣"
    },
    {
        "id":'14',
        "name":"RUCHITA PAGARE",
        "designation":"International Service Director",
        "description":"She is kind and empathetic, and has a very helpful nature. She also firmly believes in everything our club works towards, and would proudly share it with the world. She has shown her dedication and immense potential, and is the perfect person to connect with like-minded people around the globe, to do even greater work together.⁣⁣"
    },
    {
        "id":'15',
        "name":"PRANESHA PATEL",
        "designation":"Professional Development Director",
        "description":"The amount of passion and dedication she has towards her work is very rare to find. And she has always cheered and supported everyone in the club! Having shown her immense potential with her projects in the past, we are very confident all our members are going to learn a great set of new skills this year with her managing the avenue. ⁣"
    },
    {
        "id":'16',
        "name":"ISHA SHARMA",
        "designation":"Editorials Director",
        "description":"She puts her best foot forward when it comes to handling and executing a project. She has the perfect balance between creativity and expressing it on paper. High on energy, knowledge beyond age, she will ensure that the avenue excels under her and win everyone's hearts with her words.⁣⁣"
    },
    {
        "id":"17",
        "name":"SHREY SHAH",
        "designation":"Sports Director",
        "description":"He is always motivated to take on new challenges, and push his boundaries. Along with his expertise in sports, he has the ability to fill up the room with laughter as well! With his focus and determination, he will make sure the avenue of sports stands out.⁣"
    },

    {
        "id":'18',
        "name":"JUGAL KAGTADA ",
        "designation":"Sports Director",
        "description":"Sports is all about determination, hard work and strength, and he showcases all these qualities very well. But sports is also about having fun, and he is the person who can make you forget the constraints, and simply enjoy the sport! ⁣⁣"
    },
 
    {
        "id":'19',
        "name":" MANIT RAMBHIA",
        "designation":" Digital Communications Director ",
        "description":"He'll make the most beautiful and complicated illustrations seem effortless. An engineer by profession, but an artist by passion, his skills are going to add an extra touch of colour and beauty to all our projects! His hardwork, sense of organization and sheer creativity in ideas is going to make our avenue stand out even more!⁣"
    },
 
    {
        "id":'20',
        "name":"Parth",
        "designation":"Partners-In-Service Director",
        "description":"He is energetic, has an amazing sense of time management, and is extremely thorough with his work. He always spreads joy around and gets people together. With his dedication, we are sure that our relations and bond with our parent rotary will get even stronger this year!⁣"
    },
 
    {
        "id":'21',
        "name":"PARSHVI VORA",
        "designation":" Social Media Manager ",
        "description":"Social Media presence is very important for an organization, and we couldn't have had a more capable person than her! Though young at age, she is twice as efficient. With her dedicated spirit and innovative ideas, she will make sure that all the social media pages of our club remain at the top of the game!⁣"
    },
 
    {
        "id":'22',
        "name":" HIRAL SHETH ",
        "designation":" Public Relations Officer ",
        "description":"She is focused, and has always been committed to her work. She is multi-talented as well, excelling both in art as well as writing! She is great at building relations, which will ensure all our stakeholders are always happy. With her creative ideas and dedicated spirit, she will take our club to greater heights!⁣⁣"
    },
 
    {
        "id":'1',
        "name":"NIDHI RAO",
        "designation":"President",
        "description":"Always vibrant and energetic high on enthusiasm and known for her work ethics, she's a great leader who shows how the work is done.She is everyone's favourite and never fails to mesmerize people with her witty humour. She will be the perfect captain of our ship!"
    }
    ,
    {
        "id":'2',
        "name":" SAMPADA SAWANT ",
        "designation":"Immediate Past President ",
        "description":"She is someone who leads by example, motivates people to be better and move forward no matter how hard the challenges are. ✨The perfect support system a club could ask for!"
    }
    ,

    {
        "id":'3',
        "name":"OMKAR NARVADE",
        "designation":"Vice President ",
        "description":"The one who will manage all the avenues and makes sure that our club excels, with the highest of spirits! 🎊He is everyone's favourite, with exceptional work ethics and a heart of gold! "
    }
    ,
    
    {
        "id":'4',
        "name":"NANDITA SHAH ",
        "designation":"Secretary ",
        "description":"From handling the day to day administration to being the eyes and ears of the club, she'll make sure that our systems and processes are in place! 🗂️ She's someone who is friendly, dedicated, organised and would go out of her way to get the work done!✨⁣"
    }
    ,
  
 
    {
        "id":'5',
        "name":" MAYUR PANJWANI ",
        "designation":"Sergeant-At-Arms",
        "description":"His experience and knowledge in Rotaract is definitely an asset to the club. ✨He will make sure that the members are passionate towards the club and that the discipline and decorum in the Club is maintained at all times. 📜"
    },

    {
        "id":'6',
        "name":"MAITRI KUVADIA",
        "designation":"Treasurer ",
        "description":"She not only has the ability to work tirelessly for hours but also motivates the members to come forward and grab the opportunities! 🎣 Privy to the unique and powerful insights about the club and it's performance, she is the best person to handle the finances of the Club. "
    },

    {
        "id":'7',
        "name":"KHUSHBOO POPAT",
        "designation":"Mentor ",
        "description":"With her experience through the years in Rotaract, she will make sure the club does it's very best! 📈She's openhearted and adored by everyone, with a charming personality and a loveable nature. 💗💓"
    },
    {
        "id":'8',
        "name":"SHREYAS THAKKER",
        "designation":" Human Resource Development Officer ",
        "description":"He will plant the seeds of knowledge to the humans of Rotaract with love and patience. 🌱His calm and sincerity will nuture their growth to become tomorrow’s leaders. 🌳"
    },
    {
        "id":'9',
        "name":"PUNEETH POOJARY",
        "designation":"Mentor ",
        "description":"He is the person you can go to with the smallest of problems, and he will give you the most logical and rational solution.💁🏻‍♂️ Dedicated to work effortlessly and behind the curtains, and is the ultimate backbone of the club. 💛"
    }


]
const Team = () => {
    
    return (
        <div className='body'>
        <div className='header'>
        <p>Meet the team</p>
        </div>
        <div className='pres'>Sampada</div>
        
        
        <LazyLoad height={200}>
        <div className='try'>
        {
        team.map((members) =>(
            
            <div className='try2'><Card >
            <Card.Img variant="top" src={image} height='180px' width='100%' />
            <Card.Body>
              <Card.Title style={{marginTop:'2%'}}>{members.name}</Card.Title>
              <Card.Title style={{marginTop:'1%'}}>{members.designation}</Card.Title>
              <Card.Text>
               {members.description}
              </Card.Text>
             
            </Card.Body>
          </Card></div>
         
            
        ))
        }
        </div>
        </LazyLoad>
        </div>

    )
}

export default Team