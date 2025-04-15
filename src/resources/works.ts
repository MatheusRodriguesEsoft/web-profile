import { IconSkill } from "./icons-skill"


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
    skills: [ { id: 0, }]
  },
  {
    id: Math.random(),
    name: 'SHE&HE',
    page: 'http://sheandhestore.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/sheandhe',
    skills: [ { id: 0, }]
  },
  {
    id: Math.random(),
    name: 'MusicDown',
    page: 'https://musicdown.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/muscidown',
    skills: [ { id: 0, }]
  },
  {
    id: Math.random(),
    name: 'Moveit Premuim',
    page: 'https://moveit.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/Moveit-Premium',
    skills: [ { id: 0, }]
  },
  {
    id: Math.random(),
    name: 'Bag Manager',
    page: 'https://bagmanager.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/Bag-Manager',
    skills: [ { id: 0, }]
  },
  {
    id: Math.random(),
    name: 'Landing Page',
    page: 'https://landingpage.com.br',
    img: '/imgs/bg-default.jpg',
    repo: 'https://github.com/MTheusRodrigues/Landign-Page',
    skills: [ { id: 0, }]
  },
]
