import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({selector:'bm-home',standalone:true,imports:[CommonModule],templateUrl:'./home.component.html'})
export class HomeComponent {
  nav=['Solutions','Case Studies','About'];
  principles=[
    {title:'Precision over hype',text:'We measure success in production outcomes, not benchmark scores. Every system is evaluated against real enterprise workflows.',accent:'violet'},
    {title:'Client data sovereignty',text:'Your data stays yours. We design systems that keep enterprise information isolated, controlled and governed.',accent:'cyan'},
    {title:'Research-led engineering',text:'Our engineering approach brings modern AI research into reliable products without sacrificing maintainability.',accent:'violet'},
    {title:'Radical transparency',text:'We explain what our models can and cannot do. Clear limitations create systems teams can trust.',accent:'cyan'}
  ];
  solutions=[
    {n:'01',title:'Enterprise AI',text:'Practical AI systems designed around your data, workflows and operating model.'},
    {n:'02',title:'Generative AI & RAG',text:'Secure knowledge assistants that turn internal documents into grounded answers.'},
    {n:'03',title:'AI Agents',text:'Agents that reason, retrieve knowledge, call tools and execute controlled workflows.'},
    {n:'04',title:'Intelligent Automation',text:'Connect AI with APIs and business processes to reduce repetitive operational work.'},
    {n:'05',title:'Machine Learning',text:'Forecasting, anomaly detection, classification and predictive decision systems.'},
    {n:'06',title:'Fraud Intelligence',text:'Supervised and unsupervised models for risk scoring and human-in-the-loop review.'}
  ];
  industries=['Financial Services','Telecommunications','Retail','Manufacturing','Technology','Supply Chain'];
  scrollTo(id:string){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
}
