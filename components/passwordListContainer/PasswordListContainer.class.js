import { BaseComponent } from "../baseComponent/BaseComponent.class.js"
import { PasswordCard } from "./passwordCard/PasswordCard.class.js"


export class PasswordListContainer extends BaseComponent {

   /**
    * @param {object[]} data 
    */
   constructor(data) {
      this.cards = this.buildCards(data);
   }
/**
 * 
 * [
 *    {
 *       id: 0,
 *       title: "GitHub",
 *       accountName: "josedavms13"
 *       password: "asowid1iasd!3",
 *       appName: "Github",
 *       url: "https://github.com"
 *    },{
 *       id: 1,
 *       title: "Facebook",
 *       accountName: "josedavms13"
 *       password: "aasfafasdf!3",
 *       appName: "Facebook",
 *       url: "https://facebook.com"
 *    },{
 *       id: 2
 *       title: "Mi Correito salvaje",
 *       accountName: "josedavms13@gmail.com"
 *       password: "1235235352!3",
 *       appName: "Gmail",
 *       url: "https://gmail.com"
 *    } 
 * ]
 */
   buildCards(data) {
      const tempCardarray = [];
      data.forEach(cardData => {
         tempCardarray.push(new PasswordCard(cardData.id, cardData.title, cardData.accountName, cardData.url, cardData.password));
      })
      return tempCardarray;
   }






}