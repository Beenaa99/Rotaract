import React from 'react';
import './Team.scss';
import { Card, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import Img2 from '../../assets/images/back.jpeg';
const team = [
 
    
    {
        "id":'2',
        "name":" SAMPADA SAWANT ",
        "designation":"Immediate Past President ",
        "description":"She is someone who leads by example, motivates people to be better and move forward no matter how hard the challenges are. ✨The perfect support system a club could ask for!",
    	"photo":"https://drive.google.com/file/d/13YMj9aQkuwRZMiLTzD28heZkOv8fme1f/view?usp=sharing"
    }
    ,

    {
        "id":'3',
        "name":"OMKAR NARVADE",
        "designation":"Vice President ",
        "description":"The one who will manage all the avenues and makes sure that our club excels, with the highest of spirits! 🎊He is everyone's favourite, with exceptional work ethics and a heart of gold! ",
    	"photo":"https://drive.google.com/file/d/1m2AWPWGhQG0no45NwN7IxowEX1HQAHHl/view?usp=sharing"
    }
    ,
    
    {
        "id":'4',
        "name":"NANDITA SHAH ",
        "designation":"Secretary ",
        "description":"From handling the day to day administration to being the eyes and ears of the club, she'll make sure that our systems and processes are in place! 🗂️ She's someone who is friendly, dedicated, organised and would go out of her way to get the work done!✨⁣",
    	"photo":"https://drive.google.com/file/d/1cy8d72mvjnjlBW_likTg9NjoYckCr30i/view?usp=sharing"
    }
    ,
  
 
    {
        "id":'5',
        "name":" MAYUR PANJWANI ",
        "designation":"Sergeant-At-Arms",
        "description":"His experience and knowledge in Rotaract is definitely an asset to the club. ✨He will make sure that the members are passionate towards the club and that the discipline and decorum in the Club is maintained at all times. 📜",
    	"photo":"https://drive.google.com/file/d/1razokvyzZ0JXUzj7F1aawF2zyFgHhlVO/view?usp=sharing"
    },

    {
        "id":'6',
        "name":"MAITRI KUVADIA",
        "designation":"Treasurer ",
        "description":"She not only has the ability to work tirelessly for hours but also motivates the members to come forward and grab the opportunities! 🎣 Privy to the unique and powerful insights about the club and it's performance, she is the best person to handle the finances of the Club. ",
    	"photo":"https://drive.google.com/file/d/1a_EljYUxop46vbOwx2dPD5AAkYcGnmXA/view?usp=sharing"
    },

    {
        "id":'7',
        "name":"KHUSHBOO POPAT",
        "designation":"Mentor ",
        "description":"With her experience through the years in Rotaract, she will make sure the club does it's very best! 📈She's openhearted and adored by everyone, with a charming personality and a loveable nature. 💗💓",
    	"photo":"https://drive.google.com/file/d/1jjQvUtgnsDyLoZDtvvhChSE-BpZlVBnN/view?usp=sharing"
    },
    {
        "id":'8',
        "name":"SHREYAS THAKKER",
        "designation":" Human Resource Development Officer ",
        "description":"He will plant the seeds of knowledge to the humans of Rotaract with love and patience. 🌱His calm and sincerity will nuture their growth to become tomorrow’s leaders. 🌳",
    	"photo":"https://drive.google.com/file/d/1qPTQ4kfFjmJQSgN0jiLrYMdGrskGhDad/view?usp=sharing"
    },
    {
        "id":'9',
        "name":"PUNEETH POOJARY",
        "designation":"Mentor ",
        "description":"He is the person you can go to with the smallest of problems, and he will give you the most logical and rational solution.💁🏻‍♂️ Dedicated to work effortlessly and behind the curtains, and is the ultimate backbone of the club. 💛",
    	"photo":"https://drive.google.com/file/d/1gzAD5mQa4axkgzE4wYVeRg3rv11nvGJb/view?usp=sharing"
    },

    {
        "id":'10',
        "name":"ARCHIE CHHADWA",
        "designation":"Community Service Director",
        "description":"Her dedication & seriousness towards work makes her stand out from the rest. She is tenacious and proactive, and makes full use of all the opportunities. Her undying passion for service to the community will make sure we set a new benchmark!⁣",
    	"photo":"https://drive.google.com/file/d/1MqDjQIVP6M2iZZ5Vj8Y688CP6S_cqOh2/view?usp=sharing"
    },

    {
        "id":'11',
        "name":"HETA MEHTA ",
        "designation":"Community Service Director",
        "description":"She is self motivated and always prepared to work hard to achieve her goals. She is someone who listens calmly and speaks through her work and makes a positive effort to bring a change. With her optimism she will make sure the avenue excels.⁣",
    	"photo":"https://drive.google.com/file/d/1_sOu-55lrn7IAJUhwtdZcWA3VEBaENOK/view?usp=sharing"
    },

    {
        "id":'12',
        "name":" DHRUVI KUVADIA",
        "designation":"Club Service Director",
        "description":"She is a very loved person in the club, and has always been a great friend to all of us. She is immensely talented, and there is so much more to her we discover everyday! With her warm nature, she is going to bring the club even closer and make sure the members have fun together all year round!⁣",
    	"photo":"https://drive.google.com/file/d/1Zi5pdZYcWo7HOK_ES-M8lyMfkvB2nVcC/view?usp=sharing"
    },
    {
        "id":'13',
        "name":"VATSAL PAREKH",
        "designation":"International Service Director",
        "description":"He is one of the most reliable members in the team. His confidence in himself and effective communication skills will go a long way in connecting with clubs around the world to unite our movement, and taking this avenue to great heights.⁣",
    	"photo":"https://drive.google.com/file/d/1EloxD6Ng0WTUGwRXDkj0lA45cdUm43pE/view?usp=sharing"
    },
    {
        "id":'14',
        "name":"RUCHITA PAGARE",
        "designation":"International Service Director",
        "description":"She is kind and empathetic, and has a very helpful nature. She also firmly believes in everything our club works towards. She has shown her dedication, and is the perfect person to connect with like-minded people around the globe, to do even greater work together.⁣⁣",
    	"photo":"https://drive.google.com/file/d/1shnif6D52MSRqDEVmvapUNpmKEMI9zu2/view?usp=sharing"
    },
    {
        "id":'15',
        "name":"PRANESHA PATEL",
        "designation":"Professional Development Director",
        "description":"The amount of passion and dedication she has towards her work is very rare to find. Having shown her immense potential in the past, we are very confident all our members are going to learn a great set of new skills this year with her managing the avenue.⁣",
    	"photo":"https://drive.google.com/file/d/1g6qRKLsQ-9rbDXJ9GtD4qEMYW990rwK6/view?usp=sharing"
    },
    {
        "id":'16',
        "name":"ISHA SHARMA",
        "designation":"Editorials Director",
        "description":"She puts her best foot forward when it comes to handling and executing a project. She has the perfect balance between creativity and expressing it on paper. High on energy, knowledge beyond age, she will ensure that the avenue excels under her and win everyone's hearts with her words.⁣⁣",
    	"photo":"https://drive.google.com/file/d/1EAbUvXqjT7SGyW9JwFDEoE56T55N7EI3/view?usp=sharing"
    },
    {
        "id":"17",
        "name":"SHREY SHAH",
        "designation":"Sports Director",
        "description":"He is always motivated to take on new challenges, and push his boundaries. Along with his expertise in sports, he has the ability to fill up the room with laughter as well! With his focus and determination, he will make sure the avenue of sports stands out.⁣",
    	"photo":"https://drive.google.com/file/d/1EsGu8LT52SvkGIg8nGvJ9MQFHoGOG2Mw/view?usp=sharing"
    },

    {
        "id":'18',
        "name":"JUGAL KAGTADA ",
        "designation":"Sports Director",
        "description":"Sports is all about determination, hard work and strength, and he showcases all these qualities very well. But sports is also about having fun, and he is the person who can make you forget the constraints, and simply enjoy the sport! ⁣⁣",
    	"photo":"https://drive.google.com/file/d/1MqDjQIVP6M2iZZ5Vj8Y688CP6S_cqOh2/view?usp=sharing"
    },
 
    {
        "id":'19',
        "name":" MANIT RAMBHIA",
        "designation":" Digital Communications Director ",
        "description":"He'll make the most beautiful and complicated illustrations seem effortless. An engineer by profession, but an artist by passion, his skills are going to add an extra touch of colour and beauty to all our projects! ",
    	"photo":"https://drive.google.com/file/d/154djnaxT6zOH1SofHXNHhqhjQSwoKJQ6/view?usp=sharing"
    },
 
    {
        "id":'20',
        "name":"Parth",
        "designation":"Partners-In-Service Director",
        "description":"He is energetic, has an amazing sense of time management, and is extremely thorough with his work. He always spreads joy around. With his dedication, we are sure that our relations and bond with our parent rotary will get even stronger this year!⁣",
    	"photo":"https://drive.google.com/file/d/1_Qx5tdGr9uTvmgAg_uEykIQlDahZoyGO/view?usp=sharing"
    },
 
    {
        "id":'21',
        "name":"PARSHVI VORA",
        "designation":" Social Media Manager ",
        "description":"Social Media presence is very important for an organization, and we couldn't have had a more capable person than her! Though young at age, she is twice as efficient. With her dedicated spirit, she will make sure that all the social media pages of our club remain at the top of the game!⁣",
    	"photo":"https://drive.google.com/file/d/1_Qx5tdGr9uTvmgAg_uEykIQlDahZoyGO/view?usp=sharing"
    },
 
    {
        "id":'22',
        "name":" HIRAL SHETH ",
        "designation":" Public Relations Officer ",
        "description":"She is focused, and has always been committed to her work. She is multi-talented as well, excelling both in art as well as writing! She is great at building relations, which will ensure all our stakeholders are always happy. With her creative ideas and dedicated spirit, she will take our club to greater heights!⁣⁣",
    	"photo":"https://drive.google.com/file/d/1shnif6D52MSRqDEVmvapUNpmKEMI9zu2/view?usp=sharing"
    }

]
const Team = () => {
    return (
        <div className='body'>
        <Row >
        <Col md={{span:5, offset: 1}} sm={12}>
        <div className ="text-center" style={{padding:'1rem'}}>
        <br/>
        <h1>NIDHI RAO</h1>
        <h2>President</h2>
        Always vibrant and energetic high on enthusiasm and known for her work ethics, she's a great leader who shows how the work is done.She is everyone's favourite and never fails to mesmerize people with her witty humour. She will be the perfect captain of our ship!"
        </div></Col>
        <Col md={{span:4 , offset:1}} sm={8}>
        <Image src = {Img2} alt='hi' fluid style={{paddingLeft:"2vw"}}/>
        </Col>
        </Row>
        <LazyLoad height={200}>
        <br/>
        <div className='try'>
        {
        team.map((members) =>(
            
            <div className='try2'><Card >
            <Card.Img variant="top" src={members.photo} height='180px' width='100%' />
            <Card.Body>
              <Card.Title >{members.name}</Card.Title>
              <Card.Title >{members.designation}</Card.Title>
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
    );
}
export default Team;