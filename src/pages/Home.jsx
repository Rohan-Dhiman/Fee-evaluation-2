import React from 'react'
import Cards from '../components/Cards';
import background from '../assets/image-enhanced.png'

const Home = () => {
  const array = [
    {
      title: "Sudoku",
      description: "Enjoy the satisfaction of cracking those number puzzles.",
      link: "/sudoku",
      image:
        "https://i.pinimg.com/originals/59/fa/b0/59fab01866eae07d2301e59d003b1686.png",
    },
    
    {
      title: "2048",
      description: "Enjoy the satisfaction of cracking those number puzzles.",
      link: "2048",
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/81/9c/b9/819cb9a4-8d3b-b372-5f35-985570f6d542/source/512x512bb.jpg",
    },
  ];
  return (
    <div>
      <div className='flex flex-wrap w-full' >
        
      <h1 style={{paddingLeft: '20%', fontSize:'4vh'}} className='text-3xl z-30 mb-16 my-8 font-sans font-semibold' >Dive into Puzzles!</h1>
      <img src={background} alt="puzzle" className='w-full -my-16 -z-20'/> 
      </div>
      <h1 style={{fontSize: '3vh'}} className='mt-32 font-mono text-center font-medium'> TEASE AND TRAIN YOUR BRAIN WITH THESE</h1>
      <h1 style={{fontSize: '4vh'}} className='mt-2 font-mono text-center font-medium'>GAMES</h1>
      <div className="w-auto">
          <div className=" w-2/3 flex flex-wrap justify-around mx-auto">
            {array.map((game) => (
              <Cards props={game}></Cards>
            ))}
          </div>
        </div>

    </div>

  )
}


export default Home
