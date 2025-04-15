/**
 * Skills Icons
 *
 * @author Matheus Rodrigues <matheus.rodrigues@kepha.com.br>
 */

import { JSX } from "react";
import {
  IconAngularJs,
  IconAws,
  IconAzure,
  IconDocker,
  IconFlask,
  IconGit,
  IconJava,
  IconJavascript,
  IconKubernetes,
  IconLaravel,
  IconNextJs,
  IconNodeJs,
  IconPhp,
  IconPython,
  IconQuarkus,
  IconReactJs,
  IconSpringBoot,
  IconTypescript,
} from "./icons";

export interface IconSkill {
  id: number;
  name?: string;
  url?: string;
  Icon?: (className: string) => JSX.Element;
  alt?: string;
}

export const iconsSkills: IconSkill[] = [
  {
    id: 0,
    name: "Nextjs",
    url: "https://nextjs.org/",
    Icon: (className) => (
      <IconNextJs className={className} area-label={"Icon Nextjs"} />
    ),
    alt: "Nextjs",
  },
  {
    id: 1,
    name: "Reactjs",
    url: "https://pt-br.legacy.reactjs.org/",
    Icon: (className) => (
      <IconReactJs className={className} area-label={"Icon Reactjs"} />
    ),
    alt: "Reactjs",
  },
  {
    id: 2,
    name: "SpringBoot",
    url: "https://spring.io/projects/spring-boot",
    Icon: (className) => (
      <IconSpringBoot className={className} area-label={"Icon SpringBoot"} />
    ),
    alt: "SpringBoot",
  },
  {
    id: 3,
    name: "Flask",
    url: "https://flask.palletsprojects.com/en/latest/",
    Icon: (className) => (
      <IconFlask className={className} area-label={"Icon Flask"} />
    ),
    alt: "Flask",
  },
  {
    id: 4,
    name: "Quarkus",
    url: "https://pt.quarkus.io/",
    Icon: (className) => (
      <IconQuarkus className={className} area-label={"Icon Quarkus"} />
    ),
    alt: "Quarkus",
  },
  {
    id: 5,
    name: "NodeJs",
    url: "https://nodejs.org/en",
    Icon: (className) => (
      <IconNodeJs className={className} area-label={"Icon NodeJs"} />
    ),
    alt: "NodeJs",
  },
  {
    id: 6,
    name: "AngularJs",
    url: "https://angularjs.org/",
    Icon: (className) => (
      <IconAngularJs className={className} area-label={"Icon AngularJs"} />
    ),
    alt: "AngularJs",
  },
  {
    id: 7,
    name: "Laravel",
    url: "https://laravel.com/",
    Icon: (className) => (
      <IconLaravel className={className} area-label={"Icon Laravel"} />
    ),
    alt: "Laravel",
  },
  {
    id: 8,
    name: "Typescript",
    url: "https://www.typescriptlang.org/",
    Icon: (className) => (
      <IconTypescript className={className} area-label={"Icon Typescript"} />
    ),
    alt: "Typescript",
  },
  {
    id: 9,
    name: "Javascript",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    Icon: (className) => (
      <IconJavascript className={className} area-label={"Icon Javascript"} />
    ),
    alt: "Javascript",
  },
  {
    id: 10,
    name: "Java",
    url: "https://www.java.com/en/",
    Icon: (className) => (
      <IconJava className={className} area-label={"Icon Java"} />
    ),
    alt: "Java",
  },
  {
    id: 11,
    name: "Python",
    url: "https://www.python.org/",
    Icon: (className) => (
      <IconPython className={className} area-label={"Icon Python"} />
    ),
    alt: "Python",
  },
  {
    id: 12,
    name: "PHP",
    url: "https://www.php.net/",
    Icon: (className) => (
      <IconPhp className={className} area-label={"Icon PHP"} />
    ),
    alt: "PHP",
  },
  {
    id: 13,
    name: "Docker",
    url: "https://www.docker.com/",
    Icon: (className) => (
      <IconDocker className={className} area-label={"Icon Docker"} />
    ),
    alt: "Docker",
  },
  {
    id: 14,
    name: "Kubernetes",
    url: "https://kubernetes.io/",
    Icon: (className) => (
      <IconKubernetes className={className} area-label={"Icon Kubernetes"} />
    ),
    alt: "Kubernetes",
  },
  {
    id: 15,
    name: "Azure",
    url: "https://azure.microsoft.com/pt-br/products/devops",
    Icon: (className) => (
      <IconAzure className={className} area-label={"Icon Azure"} />
    ),
    alt: "Azure",
  },
  {
    id: 16,
    name: "AWS",
    url: "https://aws.amazon.com/?nc2=h_lg",
    Icon: (className) => (
      <IconAws className={className} area-label={"Icon AWS"} />
    ),
    alt: "AWS",
  },
  {
    id: 17,
    name: "Git",
    url: "https://git-scm.com/",
    Icon: (className) => (
      <IconGit className={className} area-label={"Icon Git"} />
    ),
    alt: "Git",
  },
];
