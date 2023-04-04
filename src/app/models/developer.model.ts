import Skill from "./skill.model";
export default class Developer {
    constructor(public firstname?: string, public lastname?: string, public age?: number, public gender?: string, public bio?: string, public skills?: Skill[]) {}
  }