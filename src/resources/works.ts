import { IconSkill, iconsSkills } from "./icons-skill"


export interface Work {
  id: number
  name: string
  page: string
  img: string
  repo: string
  skills: IconSkill[]
}

export const works: Work[] = [
  {
    id: Math.random(),
    name: 'VideoMentor',
    page: 'http://videomentor.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MatheusRodriguesEsoft/app-videomentor',
    skills: [iconsSkills[0],iconsSkills[2],iconsSkills[5],iconsSkills[8],iconsSkills[10]]
  },
  {
    id: Math.random(),
    name: 'SHE&HE',
    page: 'http://sheandhestore.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MatheusRodriguesEsoft/sheandhe-app-store',
    skills:  [iconsSkills[0],iconsSkills[2],iconsSkills[5],iconsSkills[3],iconsSkills[8],iconsSkills[10],iconsSkills[11]]
  },
  {
    id: Math.random(),
    name: 'MusicDown',
    page: 'https://musicdown.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/muscidown',
    skills: [iconsSkills[1],iconsSkills[2],iconsSkills[5],iconsSkills[8],iconsSkills[10]]
  },
  {
    id: Math.random(),
    name: 'Moveit Premuim',
    page: 'https://moveitpremium.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/Moveit-Premium',
    skills: [iconsSkills[1],iconsSkills[8]]
  },
  {
    id: Math.random(),
    name: 'Bag Manager',
    page: 'https://bagmanager.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/Bag-Manager',
    skills: [ iconsSkills[9],iconsSkills[11]]
  },
  {
    id: Math.random(),
    name: 'Landing Page',
    page: 'https://landingpage.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/Landign-Page',
    skills: [iconsSkills[0],iconsSkills[8]]
  },
]
