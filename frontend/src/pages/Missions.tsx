import React, { useEffect } from "react"
import RedLine from "../components/RedLine"
import Avatar from "../components/Avatar"
import { useState } from "react"
import ornament2 from "../assets/ornament2.png"
import character from "../assets/character.jpeg"
import OrnamentComponent from "../components/Ornament"
import Card from "../components/Card"
import Task from "../components/Task"
import dragonsDogma from "../assets/dragonsDrogma.png"
import CreationTask from "../components/CreationTask"

export default function Missions() {

  interface Mission {
    id: number
    title: string
    status: string
    mainQuest: boolean
  }

  const [missions, setMissions] = useState<Mission[]>([]);

  const getAllMissions = async () => {
    const response = await fetch('http://localhost:3000/quests')
    const data = await response.json()
    console.log(data)

    setMissions(data)
  }

  const putTask = async (mission: Mission, movement: string) => {

    let newStatus = ""

    if (movement == "next") {
      if (mission.status == "to do") {
        newStatus = "doing"
      } else if (
        mission.status == "doing") {
        newStatus = "done"
      }
    } else {
      if (mission.status == "done") {
        newStatus = "doing"
      } else if (mission.status == "doing") {
        newStatus = "to do"
      }
    }

    if (newStatus == "") {
      return
    }

    return await fetch(`http://localhost:3000/quest/${mission.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
  }

  useEffect(() => {
    getAllMissions()
  }, []);


  const deleteCard = async(mission: Mission) => {
    return await fetch(`http://localhost:3000/quest/${mission.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const handleDelete = async(mission: Mission) => {
    await deleteCard(mission)
    await getAllMissions()
  }


  const nextCard = async (mission: Mission) => {
    await putTask(mission, "next")
    getAllMissions()
  }

  const lastCard = async (mission: Mission) => {
    await putTask(mission, "last")
    getAllMissions()
  }

  const [input, setInput] = useState<string>("");

  
  const postQuest = async (title: string) => {
    return await fetch(`http://localhost:3000/quests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: "to do", title: title }),
    })
  }
  
  const handleQuest = async () => {
    await postQuest(input)
    await getAllMissions()
    setInput("")
  }
  

  interface Player {
    nickname: string
    class: string
    lvl: number
    health: number
    attack: number
    defense: number
    strength: number
    intelligence: number
    charisma: number
    dexterity: number
  }

  const [player, setPlayer] = useState<Player>({
    "nickname": "", "class": "", "lvl": 0, "health": 0, "attack": 0, "defense": 0,
    "strength": 0, "intelligence": 0, "charisma": 0, "dexterity": 0
  });

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then((response) => response.json())
      .then((data) => { setPlayer(data[(Math.floor(Math.random() * 100 % (data.length - 1)))]) })
  }, []);

  return (
    <main className="flex ">

      <section className="flex">
        <RedLine>
          <div className="flex justify-center mt-8 mb-4">
            <Avatar imageURL={""} width={"80px"} height={"80px"} />
          </div>
          <CreationTask />
          <div className="flex justify-center text-[#F7BD62] uppercase">{player.nickname}</div>
          <div className="flex justify-center mb-4 text-[#F7BD62] uppercase">{player.class}</div>
          <div className="flex flex-col justify-start mt-8 mb-4 space-y-4 ml-6 text-[#F7BD62] normal-case">
            <div>Lvl: {player.lvl}</div>
            <div>Health: {player.health}</div>
            <div>Attack: {player.attack}</div>
            <div>Defense: {player.defense}</div>
            <div>Strength: {player.strength}</div>
            <div>Intelligence: {player.intelligence}</div>
            <div>Charisma: {player.charisma}</div>
            <div>Dexterity: {player.dexterity}</div>
          </div>
        </RedLine>
      </section>

      <section>
        <div className="flex flex-col w-40">
          <OrnamentComponent />
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex mt-6 uppercase text-[30px] text-[#6A2918]">missions</div>
          <img src={ornament2} className="w-56 " />
        </div>
        <div className="flex">
          <Card status="To Do">
            <div className="flex flex-col gap-4">
              {missions.filter(mission => mission.status == "to do").map((mission) => {
                return <Task key={mission.id} mission={mission} onNext={nextCard} onLast={lastCard} onDelete={handleDelete} title={mission.title} color="#EC9D22" />
              })}
            </div>
          </Card>
        </div>
      </section>

      <section className="flex">
        <div className="ml-4 mt-28 py-1">
          <Card status="Doing">
            <div className="flex flex-col gap-4">
              {missions.filter(mission => mission.status == "doing").map((mission) => {
                return <Task key={mission.id} mission={mission} onNext={nextCard} onLast={lastCard} onDelete={handleDelete} title={mission.title} color="#EC9D22" />
              })}
            </div>
          </Card>
        </div>
        <div className="ml-4 mt-28 py-1">
          <Card status="Done">
            <div className="flex flex-col gap-4">
              {missions.filter(mission => mission.status == "done").map((mission, key) => {
                return <Task key={mission.id} mission={mission} onNext={nextCard} onLast={lastCard} onDelete={handleDelete} title={mission.title} color="#EC9D22" />
              })}
            </div>
          </Card>
        </div>
      </section>

      <section className="flex flex-col justify-between">
        <img src={dragonsDogma} className="w-[100px] mt-6" />
        <div className="w-[50px] fixed bottom-0 right-0 mr-40 mb-5">
          <div className=" flex text-[12px] w-[200px] inline-block text-[#6A2918]">Add Your Quest, {player.nickname}</div>
          <div className="flex w-[200px] gap-1 items-center">
          <input className="rounded-xl" value={input} onChange={e => setInput(e.target.value)}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6A2918" className="mb- 2 w-6 h-6" onClick={handleQuest}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          </div>
        </div>

      </section>


    </main>
  )
}










