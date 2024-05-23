import React from "react";
import Cards from "../components/Cards.js";

export default function Games() {
  // const games = ["sudoku", "jigsaw", "word search", "2048"]
  const array = [
    {
      title: "Sudoku",
      description: "Enjoy the satisfaction of cracking those number puzzles.",
      link: "/sudoku",
      image:
        "https://i.pinimg.com/originals/59/fa/b0/59fab01866eae07d2301e59d003b1686.png",
    },
    {
      title: "Jigsaw",
      description: "Enjoy the satisfaction of cracking those number puzzles.",
      link: "game15",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68NVQfa0c4xZlTNqrZMDu0ACLy1at6mxl7E8ZdpOSig&s",
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
      <div>
        <h1 className=" text-4xl text-center"> ALL GAMES</h1>
        <div className="w-auto">
          <div className="w-3/4 flex flex-wrap justify-around mx-auto">
            {array.map((game) => (
              <Cards props={game}></Cards>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
