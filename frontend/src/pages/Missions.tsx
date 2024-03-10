import React from "react"
import RedLine from "../components/RedLine"
import Avatar from "../components/Avatar"
import character from "../assets/character.jpeg"
import OrnamentComponent from "../components/Ornament"
import missions from "../assets/missions.png"
import Card from "../components/Card"
import Task from "../components/Task"
import dragonsDogma from "../assets/dragonsDrogma.png"

export default function Missions() {

  return (
    <main className="flex ">

      <section className="flex">
        <RedLine>
          <div className="flex justify-center mt-8 mb-4">
            <Avatar imageURL={""} width={"80px"} height={"80px"} />
          </div>
          <div className="flex justify-center text-[#F7BD62] uppercase">nickname</div>
          <div className="flex justify-center mb-4 text-[#F7BD62] uppercase">class</div>
          <div className="flex flex-col justify-start mt-8 mb-4 space-y-4 ml-6 text-[#F7BD62] normal-case">
            <div>Lvl: </div>
            <div>Health:</div>
            <div>Attack:</div>
            <div>Defense:</div>
            <div>Strength:</div>
            <div>Intelligence:</div>
            <div>Charisma:</div>
            <div>Dexterity:</div>
          </div>
        </RedLine>
      </section>

      <section>
      <div className="flex flex-col w-40">
        <OrnamentComponent/> 
      </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex mt-6 uppercase text-[30px] text-[#6A2918]">missions</div>
          <img src={missions} className="w-56 "/>
        </div>
        <div className="flex">
          <Card status="To Do">
            <Task title="The Final Battle" color="#EC9D22"/>
          </Card>
        </div>
      </section>

      <section className="flex">
        <div className="ml-4 mt-28 py-1">
          <Card status="Doing"/>
        </div>
        <div className="ml-4 mt-28 py-1">
          <Card status="Done"/>
        </div>
      </section>

      <section>
        <img src={dragonsDogma} className="w-[100px] mt-6"/>
      </section>

    </main>
  )
}










